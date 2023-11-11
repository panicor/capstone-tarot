const jsonschema = require("jsonschema");
const express = require("express");
const { BadRequestError } = require("../errors/expressError");
const Card = require("../models/card");
const tarotSchema = require("../schemas/tarotSchema.json");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
  try {
    // Make a request to your external API endpoint
    const response = await Card.getAllCards();

    // Check if the API request was successful
    if (response) {
        // let validator = jsonschema.validate(response[0], tarotSchema);
        // if (!validator.valid) {
        //   let errs = validator.errors.map((e) => e.stack);
        //   throw new BadRequestError(errs);
        // } else {
          res.status(200).json(response);
        //}
      // for(let card in response){
      //   let validator = jsonschema.validate(card, tarotSchema);
      //   if (!validator.valid) {
      //     let errs = validator.errors.map((e) => e.stack);
      //     throw new BadRequestError(errs);
      //   } else {
      //     res.status(200).json(card);
      //   }
      // };
    } else {
      // Handle other status codes as needed
      res.status(400).json({ error: "API request failed" });
    }
  } catch (error) {
    // Handle any errors that may occur during the API request
    console.error("Error fetching data from the API:", error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let card = await Card.getCard(req.params.id);
    return card;
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
