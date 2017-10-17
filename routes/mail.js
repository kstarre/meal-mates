let mailController = require('../controllers/mailController');

module.exports = function(app) {

    app.get('/send', mailController.send);
    
};