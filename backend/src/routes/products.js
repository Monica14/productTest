import * as express from 'express';
import multer from 'multer';
import path from 'path';
import * as ProductController from '../controllers/product';
import { validate } from '../middlewares/auth';


const router = express.Router();

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/list', ProductController.list);
router.post('/saveProduct', upload.single('productImage'),ProductController.save);

export default router;