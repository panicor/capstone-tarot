\echo 'Delete and recreate tarot_db db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE tarot;
CREATE DATABASE tarot;
\connect tarot

\i cards-schema.sql
\i cards-seed.sql

-- \echo 'Delete and recreate tarot_db_test db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

-- DROP DATABASE tarot_db_test;
-- CREATE DATABASE tarot_db_test;
-- \connect tarot_db_test

-- \i cards-schema.sql
-- \i cards-seed.sql