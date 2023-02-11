import { Request, Response } from 'express';

class MediaController {
  async uploadImage(req: Request, res: Response) {
    const file = req.file;

    res.json({
      file
    });
  }
}

export default MediaController;
