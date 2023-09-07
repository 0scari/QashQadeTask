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

app.get("/api/fund/:id/partners", (request, response) => {
  response.send([
      {
        id: '1',
        type: 'LP',
        name: 'Paul Foley',
        identity: 'PF',
        assignmentDate: '01-Jan-2018',
        fundId: '1'
      },
      {
        id: '2',
        type: 'iLP',
        name: 'Sharon Vazs',
        identity: 'SV',
        assignmentDate: '02-Jan-2018',
        fundId: '1'
      },
    ]
  );
});

app.get("/api/fund/partner/:id/transfer-events", (request, response) => {
  response.send([
      // todo
    ]
  );
});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
