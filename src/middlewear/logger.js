function log(ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function() {
    return async function(ctx, next) {

        // 执行中间件的操作
        log(ctx);

        await next();
    }
}