import 'dotenv/config';

import express from "express";
import cors from "cors";
import path from "path";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// frontend static folder, serving the frontend
app.use(express.static(path.join(__dirname, '../client/dist')));


app.post("/api/checkin", (req, res)=> { // you may protect with a header secret but keep it simple
  const  { mood, energy, notes } = req.body as {
    notes: string;
    energy: number;
    mood: "upset" | "down" | "normal" | "good" | "happy"
  };
  
  if (!mood || typeof energy !== "number") { // required fields
    res.status(400).json({message: `Please set the ${mood ? "energy" : "mood"} factor.`});
    return;
  }

  const suggesstions : string[] = [];

  switch (mood){
    case "upset":
      suggesstions.push("Take a deep breath");
      break;
    case "down":
      suggesstions.push("Try walking outside a bit");
      break;
    case "normal":
    case "good":
      suggesstions.push("What about practicing your hobby today")
      break;
    case "happy":
      suggesstions.push("That's the spirit, keep it up!");
    default:
      suggesstions.push("Try X");
  }

  if (energy < 2){
    suggesstions.push("A bit of movement increases energy")
  } else if (energy < 6){
    suggesstions.push("Do more tasks today")
  } else {
    suggesstions.push("Energy is herre to be used")
  }
  console.log({notes}) // AI would benefit more from it;

  res.status(201).json({suggesstions});

})

/* app.get("/*", (_req, res)=> {
  res.sendFile(path.join(__dirname, '../client/index.html'));
}) */

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`app started successfully, listening on http://localhost:${PORT}`)
})