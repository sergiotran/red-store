import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

type Environment = "development" | "staging" | "production";

class Env {
  private dotEnvStaging = ".env.staging";
  private dotEnvDevelopment = ".env.development";
  private dotEnvProduction = ".env.production";
  
  constructor() {
    this.init();
    dotenv.config({
      path: path.resolve(process.cwd(), this.dotEnvDevelopment),
    });
  }

  init() {
    if (!fs.existsSync(this.dotEnvProduction)) {
      throw new Error(
        "Please add a .env file to the root directory with a NODE_ENV value"
      );
    }

    dotenv.config({
      path: path.resolve(process.cwd(), this.dotEnvProduction),
    });

    const environment = this.getEnvironment();

    const envFile = this.getEnvFile(environment);

    dotenv.config({
      path: path.resolve(process.cwd(), envFile),
    });
  }

  getEnvFile(environment: Environment): string {
    switch (environment) {
      case "development":
        return this.dotEnvDevelopment;
      case "staging":
        return this.dotEnvStaging;
      case "production":
      default:
        return this.dotEnvProduction;
    }
  }
  getEnvironmentVariable(variable: string): string {
    return process.env[variable] || '';
  }

  getEnvironment(): Environment {
    return this.getEnvironmentVariable("NODE_ENV") as Environment || 'production';
  }
}

const env = new Env();

export default env;