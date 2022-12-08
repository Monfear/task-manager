export function showRequestInfo(req, res, next) {
    console.log(`
        ** new request has made **
        host: ${req.hostname}
        path: ${req.path}
        method: ${req.method}
        **************************
    `);

    next();
}