const Iota = require('@iota/core');
const Converter = require('@iota/converter');

function runTransaction(address, seed, raw_msg){
   
    // Connect to a node
    const depth = 3;
    const minimumWeightMagnitude = 9;
    const iota = Iota.composeAPI({
        provider: 'https://nodes.devnet.thetangle.org:443'
    });

    const message = JSON.stringify({"message": raw_msg});
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
    iota
    .prepareTransfers(seed, transfers)
    .then(trytes => {
        return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
    })
    .then(bundle => {
        console.log(bundle[0].hash);
    })
    .catch(err => {
        console.error(err)
    });
}

module.exports = {
    runTransaction
}