/*
const express = require("express");
const app = express();
app.listen(3000, () => {
console.log("Server is listening on port: 3000");
});
*/

/*
const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// pakai arrow func.
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
*/

const express = require("express");
const Mongoose = require("mongoose");

var birds = require("./app/routes/persons.js");
// // ...

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/birds", birds);

require("./app/routes/persons.js")(app);

Mongoose.connect("mongodb://localhost/express_mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Now connected to MongoDB!"))
  .catch(err => console.error("Something went wrong", err));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
