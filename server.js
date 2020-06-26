const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// uncomment once app works locally, is tested, and deployed to heroku
//const PORT = process.env.PORT || 3000;

// use for local testing of site before pre-deployment
const PORT = 3000;

const User = require("./workoutModel.js");
const { db } = require("./workoutModel.js");

const app = express();

