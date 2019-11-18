const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./utils/fbAuth");

const cors = require("cors");
app.use(cors());

const { db } = require("./utils/admin");

const { getAllTasks } = require('./handlers/tasks');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get("/posts", getAllTasks);

exports.api = functions.region("us-central1").https.onRequest(app);
