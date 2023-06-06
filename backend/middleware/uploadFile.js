const multer = require("multer");
const crypto = require("crypto");

const TYPE_IMAGE = {
    "image/jpg" : "jpg",
    "image/jpeg" : "jpeg",
    "image/png" : "png",
}

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,"assets/images")
    },
    filename(req,file,cb){
        const uuid = crypto.randomUUID();
        const ext = TYPE_IMAGE[file.mimetype]
        cb(null,`${uuid}.${ext}`);
    }
});

const fileFilter = (req,file,cb) => {
    const acceptMime = Object.keys(TYPE_IMAGE);

    if(!acceptMime.includes(file.mimetype)){
        cb({message : "file not accepted"}, false);
    }else{
        cb(null,true);
    }
};

const maxSize = 1 * 1024 * 1024; //1MB

const uploadFile = multer({ storage, fileFilter, limits:{fileSize:maxSize} }).single("image")

module.exports = uploadFile;
