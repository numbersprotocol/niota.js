'use strict';

const { Converter, sendData, SingleNodeClient } = require('@iota/iota.js');

/* This method is based on chrysalis (IOTA 1.5)
 */
async function sendMessage(index, data, signature) {
  const API_ENDPOINT = 'https://chrysalis-nodes.iota.org';
  const client = new SingleNodeClient(API_ENDPOINT);

  const stringifiedData = JSON.stringify(data);

  const messageData = JSON.stringify({
    data: stringifiedData,
    signature: signature,
  });
  const sendResult = await sendData(
    client,
    Converter.utf8ToBytes(index),
    Converter.utf8ToBytes(messageData)
  );
  return sendResult.messageId;
}

module.exports = {
  sendMessage,
};
