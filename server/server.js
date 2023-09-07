const express = require("express");
const app = express();


app.get("/api/funds", (request, response) => {
  response.send([
      {id: "123", name: "Fund A"},
      {id: "124", name: "Fund B"}
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
