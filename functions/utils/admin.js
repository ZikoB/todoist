const admin = require("firebase-admin");

if (process.env.NODE_ENV === "development") {
  var serviceAccount = require("../../key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "todoist-14516.appspot.com",
  });
  console.log("dev");
} else {
  admin.initializeApp();
}

const db = admin.firestore();

module.exports = { admin, db };
