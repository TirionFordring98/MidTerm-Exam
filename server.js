const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const router = require('./Routes/API');
const port = 3000;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(router);
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
;

// // GENERATE CHEF NAME
// app.get('/api/random-users', (req, res) => {
//   const randomUsers = [];
//   for (let i = 0; i < 14; i++) {
//     const user = {
//       chefName: faker.name.firstName() + ' ' + faker.name.lastName(),
//       };
//     randomUsers.push(user);
//   }
//   res.json(randomUsers);
// });

// app.get('/api/random-number', (req, res) => {
// const randomAmount = ({ max, min }, cb) => {
//   if (!max) throw new Error('randomAmount({ max }): max has to be defined!');
//   const n = faker.random.number({ min: 1 || 5, max });
//   let result = [];
//   for (var i = 0; i < n; i++) {
//    result.push(cb(i));
//   }
//   return result;
//  }
// });