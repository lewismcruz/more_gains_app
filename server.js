const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// uncomment once app works locally, is tested, and deployed to heroku
//const PORT = process.env.PORT || 3000;

// use for local testing of site before pre-deployment
const PORT = 3000;

const User = require("./workoutUserModel.js");
const { db } = require("./workoutUserModel.js");

const app = express();

