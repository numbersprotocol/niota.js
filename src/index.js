'use strict'

const Iota = require('@iota/core');
const Converter = require('@iota/converter');

function runTransaction(address, seed, raw_msg) {

    // Connect to a node
    const depth = 3;
    const minimumWeightMagnitude = 14;
    const iota = Iota.composeAPI({
        provider: 'https://nodes.thetangle.org:443'
    });

    const message = JSON.stringify({ "message": raw_msg });
    // Convert the message to trytes
    const messageInTrytes = Converter.asciiToTrytes(message);

    // Define a zero-value transaction object
    // that sends the message to the address

    const transfers = [
        {
            value: 0,
            address: address,
            message: messageInTrytes,
            tag: "NUMBERSPROTOCOL"
        }
    ];

    // Create a bundle from the `transfers` array
    // and send the transaction to the node
    return iota
        .prepareTransfers(seed, transfers)
        .then(trytes => {
            return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
        })
        .then(bundle => {
            return bundle[0].hash;
        })
}

/* This method based on chrysalis (IOTA 1.5)
 */
async function sendMessage(index, raw_msg, signature) {

    const { ClientBuilder } = require('@iota/client')

    // // client will connect to testnet by default
    const client = new ClientBuilder()
        .node('https://api.hornet-0.testnet.chrysalis2.com:443')    // custom node
        .localPow(true)                                         // pow is done locally
        .disableNodeSync()                                      // even non-synced node is fine - do not use in production
        .build();

    const data_str = JSON.stringify(raw_msg);

    const message_data = JSON.stringify({
        "data": data_str,
        "signature": signature
    });

    const message = await client.message()
        .index(index)
        .data(message_data)
        .submit();
    return message;
}

module.exports = {
    runTransaction,
    sendMessage
}
