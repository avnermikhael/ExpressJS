const express = require("express");
const Mongoose = require("mongoose");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./books.js")(app);

Mongoose.connect("mongodb://localhost/express_mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Now connected to MongoDB!"))
  .catch(err => console.error("Something went wrong", err));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
