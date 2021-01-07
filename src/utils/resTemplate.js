const successBody = (data) => {
  return {
    message: 'ok',
    status: 200,
    success: true,
    data,
  }
}

const errorBody = (message) => {
  return {
    message,
    status: 400,
    success: false
  }
}

module.exports = {
  successBody,
  errorBody
}