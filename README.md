# PERNT Stack Learning Checklist

A simple application to highlight the principles of ReactJS, Typescript, NodeJS,  PosgreSql, Express, 

## Client setup

in the root directory

```sh
npm install
touch .env
```
Add the folloding to the .env file and adjust accordingly

```

PORT=portnumber-8080
REACT_APP_LOCAL=url_of_choice_or_localhost_and_port

```
example: REACT_APP_LOCAL=http://localhost:3000

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

Add the folloding to the .env file and adjust accordingly

```

PGHOST=localhost
PGUSER=username
PGPASSWORD=password
PGDATABASE=db_name
PGPORT=db_port
PORT=portnumber-8040

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
