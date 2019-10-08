/**
 * Name: Diana Dai
 * Date: Aug 10, 2019
 * Section: CSE 154 AB
 * TA: Tal Wolman
 * This web service outputs the information about Diana's LOL store. Services include items,
 * types, FQA list, contact messages, as well as loyal member sign up.
 */
"use strict";

const express = require("express");
const app = express();
const fs = require("fs");
const util = require("util");
const mysql = require("promise-mysql");
const multer = require("multer");

const readFile = util.promisify(fs.readFile);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());
app.use(express.static("public"));

const INVALID_PARAM_ERROR = 400;
const FILE_ERROR = 500;
const SERVER_ERROR = "Something went wrong on the server.";

// Responds with all the items in Diana's LOL store.
app.get("/items", async function(req, res) {
  let items;
  try {
    items = await processQuery("SELECT name, shortname, cost, type FROM items;");
    res.json(processItems(items));
  } catch (err) {
    res.type("text");
    res.status(FILE_ERROR).send(SERVER_ERROR);
  }
});

// Responds with detailed information about a specific item.
app.get("/items/:name", async function(req, res) {
  try {
    let info = await processQuery("SELECT name, shortname, cost, type, effect FROM items " +
                               "WHERE shortname = ? ;", [req.params.name]);
    if (info.length === 0) {
      res.type("text");
      res.status(INVALID_PARAM_ERROR).send("There are no records for that item!");
    } else {
      res.json(processInfo(info));
    }
  } catch (err) {
    res.type("text");
    res.status(FILE_ERROR).send(SERVER_ERROR);
  }
});

// Responds with all items that has a certain type.
app.get("/items/category/:type", async function(req, res) {
  try {
    let type = req.params.type.replace("-", " ");
    let qry = "SELECT shortname FROM items WHERE type LIKE ? ;";
    let matchItems = await processQuery(qry, ["%" + type + "%"]);
    if (matchItems.length === 0) {
      res.type("text");
      res.status(INVALID_PARAM_ERROR).send("There are no records for that type!");
    } else {
      res.json(processMatch(matchItems));
    }
  } catch (err) {
    res.type("text");
    res.status(FILE_ERROR).send(SERVER_ERROR);
  }
});

// Responds with all the types of items.
app.get("/types", async function(req, res) {
  let types;
  try {
    types = await readFile("public/resources/types.json", "utf8");
    res.json(JSON.parse(types));
  } catch (err) {
    res.type("text");
    res.status(FILE_ERROR).send(SERVER_ERROR);
  }
});

// Responds with frequently asked questions and answers.
app.get("/qa", async function(req, res) {
  let qa;
  try {
    qa = await readFile("public/resources/qa.json", "utf8");
    res.json(JSON.parse(qa));
  } catch (err) {
    res.type("text");
    res.status(FILE_ERROR).send(SERVER_ERROR);
  }
});

// Stores the given name, phone, email (optional) and message in the contact messages list.
app.post("/contactMsg", async (req, res) => {
  res.type("text");
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let message = req.body.message;
  if (!(name && phone && message)) {
    res.status(INVALID_PARAM_ERROR).send("Missing required info: name, phone, and/or message");
  } else {
    try {
      let qry = "INSERT INTO message (name, phone, email, message) VALUES (?, ?, ?, ?);";
      await processQuery(qry, [name, phone, email, message]);
      res.send(name + "'s message successfully sent to Diana's LOL store!");
    } catch (err) {
      res.status(FILE_ERROR).send(SERVER_ERROR);
    }
  }
});

// Stores the given name, phone, email, address and password in the loyal member list.
app.post("/signUp", async (req, res) => {
  res.type("text");
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let address = req.body.address;
  let password = req.body.password;
  if (!(name && phone && email && address && password)) {
    res.status(INVALID_PARAM_ERROR).send("Missing required info.");
  } else {
    try {
      let qry = "INSERT INTO users (name, phone, email, address, password) VALUES (?, ?, ?, ?, ?);";
      await processQuery(qry, [name, phone, email, address, password]);
      res.send(name + " has successfully become the loyal member of Diana's LOL store!");
    } catch (err) {
      res.status(FILE_ERROR).send(SERVER_ERROR);
    }
  }
});

/**
 * Process a query with given parameters and returns response from the database.
 * @param {string} query - The MySQL query to send to the database.
 * @param {array} params - parameters that is used for process
 * @returns {object} - returns the result given back from the database
 */
async function processQuery(query, params) {
  let db, result;
  try {
    db = await getDB();
    result = await db.query(query, params);
    db.end();
    return result;
  } catch (err) {
    if (db) {
      db.end();
    }
    throw err;
  }
}

/**
 * Takes an array of items and processes it into a mapping from the name of the item to
 * its detail information.
 * @param {array} items - An array of items with fields name, type, shortname, and cost.
 * @returns {object} - The formatted items object.
 */
function processItems(items) {
  let result = {};
  let names = [];
  for (let i = 0; i < items.length; i++) {
    let name = items[i]["name"];
    names.push(name);
    result[name] = {};
    result[name].name = name;
    result[name].shortname = items[i]["shortname"];
    result[name].cost = items[i]["cost"];
    let typeString = items[i]["type"];
    result[name].type = processType(typeString);
  }
  result.name = names;
  return result;
}

/**
 * Takes a type-representing string and processes it into an array with all types of an item.
 * @param {string} typeString the string containing all types of an item
 * @returns {array} - An array of all the types of an item
 */
function processType(typeString) {
  let types = typeString.split(",");
  let typeResult = [];
  for (let i = 0; i < types.length; i++) {
    let type = types[i].trim().replace(" ", "-");
    typeResult.push(type);
  }
  return typeResult;
}

/**
 * Process the information for a specific item, including name, cost, type, effect, and shortname.
 * Returns the info as an object.
 * @param {array} info - the item info including name, cost, type, effect, and shortname
 * @returns {object} - an object containing the detailed information of an item.
 */
function processInfo(info) {
  let result = {};
  result.name = info[0].name;
  result.cost = info[0].cost;
  let types = info[0].type.split(",");
  for (let i = 0; i < types.length; i++) {
    types[i] = types[i].trim();
    types[i] = types[i].charAt(0).toUpperCase() + types[i].slice(1);
  }
  result.type = types;
  result.effect = info[0].effect.split("UNIQUE");
  result.shortname = info[0].shortname;
  return result;
}

/**
 * Process the items with the matched type.
 * @param {array} match - an array with all matching items with specific type.
 * @returns {object} - an object containing an array with matched items' shortnames.
 */
function processMatch(match) {
  let result = {};
  result.match = [];
  for (let i = 0; i < match.length; i++) {
    result.match.push(match[i].shortname);
  }
  return result;
}

/**
 * Establishes a database connection to the LOL store service and returns the database object.
 * Any errors that occur during connection should be caught in the function that calls this one.
 * @returns {object} - The database object for the connection.
 */
async function getDB() {
  let db = await mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "store"
  });
  return db;
}

const PORT = process.env.PORT || 8000;
app.listen(PORT);
