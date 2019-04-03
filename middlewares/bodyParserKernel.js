const bodyParser = require('body-parser')

module.exports = (app) => {
    app.use(bodyParser.json({ limit: '500mb' }));
    app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
};