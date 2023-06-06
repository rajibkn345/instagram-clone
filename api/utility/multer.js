import multer from "multer";
import path from "path";
const __dirname = path.resolve();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (req.files.profile_picture) {
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
                cb(null, path.join(__dirname, "public/images"));
            } 
		}else if (req.files.image_url){
             if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
                cb(null, path.join(__dirname, "public/images"));
            } 
        }
	},
});



// profile pic

export const profile_pic = multer({
    storage
}).fields([
    {name:"profile_picture",maxCount:1}
]);


// image_url
export const image_url = multer({
    storage
}).fields([
    {name:"image_url",maxCount:10}
]);