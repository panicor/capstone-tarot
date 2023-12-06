const db = require("../db/db");
const { NotFoundError } = require("../errors/expressError");

class Card {
  //gets one card from PostgreSQL table based on the id
  static async getCard(id) {
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

  //gets all cards from PostgreSQL table
  static async getAllCards() {
    const tarotRes = await db.query(
      `SELECT *
           FROM tarot`
    );
  
    const cards = tarotRes.rows;

    if (!tarotRes) throw new NotFoundError(`No cards here`);
    console.log(cards);

    return cards;
  }
}

module.exports = Card;
