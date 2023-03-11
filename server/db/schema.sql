DROP TABLE IF EXISTS list;

-- CREATE TABLE list (
--   id SERIAL PRIMARY KEY,
--   userID VARCHAR(50) REFERENCES users(userID),
--   name VARCHAR(255) NOT NULL,
--   completion BOOLEAN NOT NULL DEFAULT FALSE,
--   UNIQUE (id)
-- );
CREATE TABLE list (
  id SERIAL PRIMARY KEY,
  userID VARCHAR(50), 
  name VARCHAR(255) NOT NULL,
  completion BOOLEAN NOT NULL DEFAULT FALSE,
  UNIQUE (id)
);

INSERT INTO list (userID, name, completion) VALUES ('user123', 'Algorithms', TRUE);

INSERT INTO list (userID, name, completion) VALUES ('user456', 'Data Structures', FALSE);

INSERT INTO list (userID, name, completion) VALUES ('user456', 'Study React', FALSE);