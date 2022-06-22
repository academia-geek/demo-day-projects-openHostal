import multer from 'multer';
import path from "path";

const storage =
multer.diskStorage({
    destination:path.join(__dirname,'../src/public/uploads'),
     filename:(req,file,cb)=>{
         cb(null,file.originalname);
     }
})
//limite y cantidad del archivo 
export const uploadFile =multer({
    storage,
    limits:{
        fileSize:1000000
    }
}).single('foto')

export const uploadFile1 =multer({
    storage,
    limits:{
        fileSize:657128,files:4
    }
}).array('foto',4)


