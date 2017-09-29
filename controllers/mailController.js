const path = require("path");

module.exports = {

    mail: function(req, res) {
        res.sendfile('./public/mailindex.html');
    }
}