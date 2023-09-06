const express = require("express");
const app = express();


app.get("/api/:id", (request, response) => {
  response.send({
      id: request.params.id
    }
  );
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
