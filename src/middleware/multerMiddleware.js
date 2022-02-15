const path=require('path');
const multer=require('multer');

/*confuguracion multer*/

const storage=multer.diskStorage({
    destination:(req,file,cb) => {
     cb(null,path.resolve(__dirname,'../../public/img/avatars'))

      //cb(null,'../public/img/avatars') // A pablo le funciona con esta ruta
     //cb(null,'./public/img/avatars') // A Elena le funciona con esta ruta
    },
    filename:(req,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
});
const uploadFile=multer({storage});

module.exports=uploadFile;