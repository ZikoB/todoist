const { db } = require("../utils/admin");

exports.getAllTasks = (req, res) => {
  db.collection("tasks")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      let tasks = [];
      data.forEach(doc => {
        tasks.push({
          taskId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(tasks);
    })
    .catch(err => {
      console.error(err);
    });
};