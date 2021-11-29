const musics = require('./db.json');
let globalId = 6;



module.exports = {
  
  
  getMusics: (req, res) => {
    res.status(200).send(musics);
  },
  
  deleteMusic: (req, res) => {
    let musicIndex = musics.findIndex((music) => music.id === parseInt(req.params.id));
    musics.splice(musicIndex, 1);
    res.status(200).send(musics);
  },
  
  createMusic: (req, res) => {
    let { title, rating, imageURL } = req.body;
    
    let newMusic = {
      id: globalId,
      title: title,
      rating: rating,
      imageURL: imageURL
    };

    musics.push(newMusic);
    res.status(200).send(musics)
    globalId++
  },
 
  updateMusic: (req, res) => {
    let requestId = req.params.id;
    let musicIndex = musics.findIndex((music) => music.id === parseInt(req.params.id))
    
    if (req.body.type === "plus") {
        musics[musicIndex].rating++
    } else if (req.body.type === "minus") {
        musics[musicIndex].rating--
    }
    res.status(200).send(musics);
  }
};
