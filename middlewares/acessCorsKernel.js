module.exports = (app) => {
    app.use((req, res, next) => {
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers' || "*"));
        res.header("Access-Control-Allow-Methods", req.method);

        if (req.method === 'OPTIONS') {
            return res.status(204).send();
        }
        next();
    });
};