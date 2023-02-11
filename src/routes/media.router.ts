import { Router } from 'express';
import MediaController from '../controllers/media.controller';
import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination: 'public/upload/media',
  filename(req, file, callback) {
    callback(null, `redStore-${file.originalname}`);
  }
});
const upload = multer({
  storage
});

const router = Router();
const controller = new MediaController();

router.post('/upload/single', upload.single('media'), controller.uploadImage);

export default router;
