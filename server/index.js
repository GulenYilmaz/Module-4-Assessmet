const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.




app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A short pencil is usually better than a long memory any day.",
  "A small donation is call for. It’s the right thing to do.",
  "A smile is your personal welcome mat.",
  "A smooth long journey! Great expectations.",
  "A soft voice may be awfully persuasive",
  ];

  // choose random fortune
  let randomFortIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortIndex];

  res.status(200).send(randomFortune);
});


app.get("/api/picture", (req, res) => {
  const pictures = [
           "lake picture!",
           "mountain picture!",
           "animal picture",
  ];

  // choose random pictures
  let randomIndex = Math.floor(Math.random() * pictures.length);
  let randompicture = pictures[randomIndex];

  res.status(200).send(randompicture);
  
});





app.get("/api/card", (req, res) => {
  const cards = [
           "lake card!",
           "mountain card!",
           "animal card",
  ];

  // choose random cards
  let randomIndex = Math.floor(Math.random() * cards.length);
  let randomcard = cards[randomIndex];

  res.status(200).send(randomcard);
  
});

app.get("/api/flower", (req, res) => {
  const flowers = [
           "lake flower!",
           "mountain flower!",
           "animal flower",
  ];

  // choose random cards
  let randomIndex = Math.floor(Math.random() * flowers.length);
  let randomflower = flowers[randomIndex];

  res.status(200).send(randomflower);
  
});

const {
  getMusics,
  deleteMusic,
  createMusic,
  updateMusic,
} = require("./controller");

app.get(`/api/musics`, getMusics);
app.delete(`/api/musics/:id`, deleteMusic);
app.post(`/api/musics`, createMusic);
app.put(`/api/musics/:id`, updateMusic)
app.listen(2000, () => console.log("Server running on 2000"));
