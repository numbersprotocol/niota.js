/**
 * Send a message to IOTA Chrysalis Mainnet
 *
 * @param {string} index The search index of the message.
 * @param {{}} data Arbitrary data to be included in the message.
 * @param {string} signature The signature of the provided data.
 * @returns {Promise<string>} The message ID.
 */
export declare function sendMessage(
  index: string,
  data: {},
  signature: string
): Promise<string>;
