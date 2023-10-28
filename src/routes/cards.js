const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
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

module.exports = router;