CREATE TABLE IF NOT EXISTS tarot (
    id SERIAL PRIMARY KEY,
    name TEXT,
    card_number INT,
    arcana TEXT,
    suit TEXT,
    img TEXT,
    fortune_telling TEXT [],
    keywords TEXT [],
    meanings_light TEXT [],
    meanings_shadow TEXT [],
    archetype TEXT,
    hebrew_alphabet TEXT,
    numerology TEXT,
    elemental TEXT,
    mythical_spiritual TEXT,
    questions_to_ask TEXT [],
    astrology TEXT,
    affirmation TEXT
);