# PERNT Stack Learning Checklist

A simple application of the principles of typescript in a PERN stack APP

## Client setup

in the root directory

```sh
npm install
touch .env
```
Add the folloding to the .env file

```json

PORT=8080

```

Run the React Client
```sh
npm start
```

## Database and Server

```sh
cd server
npm install
touch .env

```

Add the folloding to the .env file

```json

DB_HOST=localhost
DB_USER=username
DB_PASS=password
DB_NAME=dn_name
DB_PORT=db_port
PORT=8040

```

Next add the database
```sh
cd db
psql -U db_user
CREATE DATABASE db_name
\i schema.sql
\i seeds/seeds.sql
```

Exit the database and run the following

```sh
cd ..
npm start
```
