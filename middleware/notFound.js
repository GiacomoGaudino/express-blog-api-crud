function notFound(req, res, next) {
    res.status(404).json(
        {
            error: true,
            message: 'Endpoint not found 404'
        }
    )
}

module.exports = notFound