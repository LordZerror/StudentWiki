const express = require("express");
const app = express();
const path = require("path");
require("./details");
const c2 = require("./models");
const { json } = require("express");

const port = 80;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const StudentWiki = path.join(__dirname, "/");
app.use(express.static(StudentWiki));

//serving index page

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/index_assets"));
});
app.post("/index.html", async (req, res) => {
  console.log(req.body);
  try {
    const email = req.body.uname;
    const password = req.body.psw;

    const useremail = await c2.findOne({ Username: email });

    console.log(useremail);

    if (useremail.Password === password) {
      res.status(200).sendFile(path.join(__dirname, "/dashboard.html"));
    } else {
      res.send("Invalid login credentials");
    }
  } catch (error) {
    res.send("Invalid Login credentials");
    console.log(error);
  }
});

//serving dashboard page

app.get("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./dashboard.html"));
});
app.post("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./dashboard.html"));
});

//serving Assignments page

app.get("/Assignments.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./Assignments.html"));
});
app.post("/Assignments.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./Assignments.html"));
});

//serving Announcements page

app.get("/Announcements.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./Announcements.html"));
});
app.post("/Announcements.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./Announcements.html"));
});

//serving TimeTable page

app.get("/TimeTable.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./TimeTable.html"));
});
app.post("/TimeTable.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./TimeTable.html"));
});

//serving Flashcard page

app.get("/TimeTable.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./flashcards/indexflashcard.html"));
});
app.post("/TimeTable.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./flashcards/indexflashcard.html"));
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
