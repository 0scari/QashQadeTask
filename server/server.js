const express = require("express");
const app = express();


app.get("/api/funds", (request, response) => {
  response.send([
      {id: "1", name: "Fund A"},
      {id: "2", name: "Fund B"},
      {id: "3", name: "Fund C"},
    ]
  );
});

app.get("/api/partnership-transfer/search", (request, response) => {
  response.send([
      // todo
    ]
  );
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
