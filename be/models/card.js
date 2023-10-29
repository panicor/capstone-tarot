const db = require("../db");
const { NotFoundError } = require("../errors/expressError");

class Card {

  static async get(id) {
    const tarotRes = await db.query(
      `SELECT *
           FROM tarot
           WHERE id = $1`,
      [id]
    );

    const card = tarotRes.rows[0];

    if (!card) throw new NotFoundError(`No card: ${id}`);

    return card;
  }
}

module.exports = Card;
