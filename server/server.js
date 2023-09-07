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
  // I was looking to add filtering based on the query params e.g. performanceFee and managementFee
  // but I'm running out of time

  response.send([
      {
        id: '1',
        type: 'LP',
        name: 'Paul Foley',
        identifier: 'PF',
        assignmentDate: '01-Jan-2018',
        fundId: '1'
      },
      {
        id: '2',
        type: 'iLP',
        name: 'Sharon Vazs',
        identifier: 'SV',
        assignmentDate: '02-Jan-2018',
        fundId: '1'
      },
    ]
  );
});

app.get("/api/fund/partner/:id/transfer-events", (request, response) => {
  if (request.params.id === '1') {
    response.send([]);
  } else if (request.params.id === '2') {
    response.send([
      {
        id: '1',
        fundPartnerId: request.params.id,
        type: 'Transferee',
        value: 'by Commitment',
        date: '15-Sep-2020'
      },
      {
        id: '2',
        fundPartnerId: request.params.id,
        type: 'Transferee',
        value: '40.00%',
        date: '29-Jun-2021'
      },
      {
        id: '3',
        fundPartnerId: request.params.id,
        type: 'Transferrer',
        value: '40.00%',
        date: '30-Jun-2021'
      }
    ]);
  }

});

app.listen(3000, () => {
  console.log("Listen on the port 3000...");
});
