const Mongoose = require("mongoose");

module.exports = function(app) {
  const BooksModel = Mongoose.model("books", {
    title: String,
    author: [String],
    publised_date: Date,
    pages: Number,
    language: String,
    publisher_id: String
  });

  app.post("/books", async (request, response) => {
    try {
      var books = new BooksModel(request.body);
      var result = await books.save();
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/books", async (request, response) => {
    try {
      var result = await BooksModel.find().exec();
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/books/:id", async (request, response) => {
    try {
      var books = await BooksModel.findById(request.params.id).exec();
      response.status(200).send(books);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.put("/books/:id", async (request, response) => {
    try {
      var books = await BooksModel.findById(request.params.id).exec();
      books.set(request.body);
      var result = await books.save();
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.delete("/books/:id", async (request, response) => {
    try {
      var result = await BooksModel.deleteOne({
        _id: request.params.id
      }).exec();
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });
};
