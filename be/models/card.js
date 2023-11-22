const db = require("../db/db");
const { NotFoundError } = require("../errors/expressError");

class Card {
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

  static async getAllCards() {
    const tarotRes = await db.query(
      `SELECT *
           FROM tarot`
    );

    //console.log(tarotRes);
    const cards = tarotRes.rows;

    if (!tarotRes) throw new NotFoundError(`No cards here`);
    console.log(cards);

    // cards.forEach(card => {
    //   for (const key in card) {
    //     if (typeof card[key] === 'string' && card[key].includes(',')) {
    //       card[key] = card[key].split(',').map(str => str.trim());
    //     }
    //   }
    // });

    return cards;
  }
}

module.exports = Card;
