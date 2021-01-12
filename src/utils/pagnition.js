const { errorBody } = require('./resTemplate');

const parseQueryData = (ctx, queryData) => {
    const { pageSize, pageNo } = queryData;
    if (!pageSize) {
      ctx.body = errorBody('pageSize 不能为空');
    } else if (!pageNo) {
      ctx.body = errorBody('pageNo 不能为空');
    } else {
      return { 
        offset: Number((pageNo - 1) * pageSize),
        limit: Number(pageSize)
      }
    }
}

module.exports = { parseQueryData }
