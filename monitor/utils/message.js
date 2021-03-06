const web3Utils = require('web3').utils
const { parseAMBMessage } = require('../../commons')

function deliveredMsgNotProcessed(processedList) {
  return deliveredMsg => {
    let msgData = deliveredMsg.returnValues.encodedData
    if (!deliveredMsg.returnValues.messageId) {
      // append tx hash to an old message, where message id was not used
      msgData = deliveredMsg.transactionHash + msgData.slice(2)
    }
    const msg = parseAMBMessage(msgData)
    return (
      processedList.filter(processedMsg => {
        return messageEqualsEvent(msg, processedMsg.returnValues)
      }).length === 0
    )
  }
}

function processedMsgNotDelivered(deliveredList) {
  return processedMsg => {
    return (
      deliveredList.filter(deliveredMsg => {
        let msgData = deliveredMsg.returnValues.encodedData
        if (!deliveredMsg.returnValues.messageId) {
          // append tx hash to an old message, where message id was not used
          msgData = deliveredMsg.transactionHash + msgData.slice(2)
        }
        const msg = parseAMBMessage(msgData)
        return messageEqualsEvent(msg, processedMsg.returnValues)
      }).length === 0
    )
  }
}

function messageEqualsEvent(parsedMsg, event) {
  return (
    web3Utils.toChecksumAddress(parsedMsg.sender) === event.sender &&
    web3Utils.toChecksumAddress(parsedMsg.executor) === event.executor &&
    parsedMsg.messageId === event.messageId // for an old messages, event.messageId is actually a transactionHash
  )
}

/**
 * Normalizes the different event objects to facilitate data processing
 * @param {Object} event
 * @returns {{
 *  transactionHash: string,
 *  blockNumber: number,
 *  referenceTx: string,
 *  recipient: string | *,
 *  value: *
 * }}
 */
const normalizeEventInformation = event => ({
  transactionHash: event.transactionHash,
  blockNumber: event.blockNumber,
  referenceTx: event.returnValues.transactionHash || event.transactionHash,
  recipient: event.returnValues.recipient || event.returnValues.from,
  value: event.returnValues.value
})

const eventWithoutReference = otherSideEvents => e =>
  otherSideEvents.filter(a => a.referenceTx === e.referenceTx && a.recipient === e.recipient && a.value === e.value)
    .length === 0

module.exports = {
  deliveredMsgNotProcessed,
  processedMsgNotDelivered,
  normalizeEventInformation,
  eventWithoutReference
}
