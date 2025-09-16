function logTime(req, res, next) {
    const now = new Date().toLocaleString()
    console.log(`[${now}] Got a new request for URL ${req.url} - method ${req.method}`)
    next()
}

module.exports = logTime