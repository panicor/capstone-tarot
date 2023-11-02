const jsonschema = require("jsonschema");
const express = require("express");
const { BadRequestError } = require("../errors/expressError");
const Card = require("../models/card");
const tarotSchema = require("../schemas/tarotSchema.json");

const router = express.Router({ mergeParams: true });

router.get("/:id", async (req, res, next) => {
    try {
    
    let card = await Card.get(req.params.id);
    
    let validator = jsonschema.validate(card, tarotSchema);
    if (!validator.valid) {
    let errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    else{return res.json({ card });}
    
    } catch (e) {
      return next(e);
    }
  });

  router.get("", async (req, res, next) => {
    try {
      // Make a request to your external API endpoint
      const response = await Card.getAllCards();
  
      // Check if the API request was successful
      if (response.status === 200) {
        const data = response.data;
        res.json(data);
      } else {
        // Handle other status codes as needed
        res.status(response.status).json({ error: "API request failed" });
      }
    } catch (error) {
      // Handle any errors that may occur during the API request
      console.error("Error fetching data from the API:", error);
      next(error);
    }
  });

module.exports = router;