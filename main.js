/////////////////////////////////////////////
// This example sends a zero-value transaction with a sample message
/////////////////////////////////////////////


const Transaction = require('./transaction');

// Define a seed and an address.
// These do not need to belong to anyone or have IOTA tokens.
// They must only contain a mamximum of 81 trytes
// or 90 trytes with a valid checksum
const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

const raw_msg = {
    cid: "QmT1secRZXYoB1ToyhJHyzhqCh5iJzopjhBgidyMDdvRFC",
    type: "text"
}

// Define a message to send.
// This message must include only ASCII characters.
Transaction.runTransaction(address, seed, raw_msg);
