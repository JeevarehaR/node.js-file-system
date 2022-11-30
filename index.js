import fs from "fs";
import express from "express";
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️Hello....!Express Connected to port 4000!");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

//Current Date and Time for timestamp

let date_ob = new Date(); // current date
let date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // current month
let year = date_ob.getFullYear(); // current year
let hours = date_ob.getHours(); // current hours
let minutes = date_ob.getMinutes(); // current minutes
let seconds = date_ob.getSeconds(); // current seconds
let Current_date = date + "-" + month + "-" + year;
let Current_DateTime =
  date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
let CurrentTime12HrsFormat = hours - 12 + ":" + minutes;
console.log(Current_date); // prints date in YYYY-MM-DD format
console.log(Current_DateTime); // prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(CurrentTime12HrsFormat); // prints time in HH:MM format

fs.writeFile(
  "./datetime.txt",
  Current_date + "\n" + Current_DateTime + "\n" + CurrentTime12HrsFormat,
  (err) => {
    console.log("completed writing!!");
  }
);
