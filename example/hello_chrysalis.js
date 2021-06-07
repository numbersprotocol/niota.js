/* This example sends  with a sample message based on chrysalis (IOTA 1.5)
 */

'use strict';

const Transaction = require('../src/index');

let index = 'Lifebox';
let rawMsg = {
  hash: 'TTEVBMMPUEOTSEIXPVCTFEVEWCWBMXTULBACGFRQK9TRGJEIIMCLBKW9CXWMNPDX',
};
let signature =
  '4382440611608ed43b44275c7e7eb285b926e8c17a20s00beecbb86b4a2d13da3';

Transaction.sendMessage(index, rawMsg, signature).then((result) =>
  console.log(result)
);
