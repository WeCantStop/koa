const checkReqBody = (body) => {
  let emptyKey = '';
  for (let key in body) {
    if (!body[key]) {
      emptyKey = key
      break;
    }
  }
  return emptyKey;
}

module.exports = { checkReqBody }
