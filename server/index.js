const express = require("express");
const cors = require("cors");
const controller = require('./controller.js')

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



//I tryed  and write a code more then one week durig the  holiday, cant go anywhere and spend time with my family but unfortunately, it was not work.
//I am done :(
//app.get(`/api/picture`, controller.getpicture);
//app.delete(`/api/picture/:id`, controller.deletepicture);


app.post("/api/flower", (req, res) => {
  let {titleFlower} = req.body;
  let flowerObj = {
    titleFlower: titleFlower,
    
  }
  flowers.push(flowerObj);
  res.status(200).send(flowers);
})

app.delete("/api/flower/:id", (req, res) => {
  let index = flowers.findIndex(flower => flower.titleFlower === +req.params.titleFlower)
  flowers.splice(index, 1);
  res.status(200).send(flowers);
})



app.listen(4000, () => console.log("Server running on 4000"));
