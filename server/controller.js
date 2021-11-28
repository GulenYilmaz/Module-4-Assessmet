const pictures =require('./db.json')// need .js  objects

module.exports = {


    //get picture call back function 
    //frond end response
    getpicture: (req, res) => {
        res.status(200).send(pictures);
    },
    
    //delete picture
    deletepicture: (req, res) => {
        let pictureIndex = pictures.findIndex((picture) => picture.id ===(req.params.id))
        pictures.splice(pictureIndex, 1);
        res.status(200).send(pictures);
    }
};
