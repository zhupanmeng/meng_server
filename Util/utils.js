exports.send = (res, code, msg, data) => {
    res.json(data ? { code, msg, data: data } : { code, msg })
}