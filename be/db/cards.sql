\echo 'Delete and recreate tarot_db db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE tarot;
CREATE DATABASE tarot;
\connect tarot

\i cards-schema.sql
\i cards-seed.sql