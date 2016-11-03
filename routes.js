/**
 * Created by Tarun on 8/17/2016.
 */
var routes = {

    fruits: function (req, res) {
        res.end("Welcome to the app page about fruits");
    },
    veg: function (req, res) {
        res.end("Welcome to the app page about vegetables");
    },
    dairy: function (req, res) {
        res.end("Welcome to the app page about dairy products");
    },
    meats: function (req, res) {
        res.end("Welcome to the app page about meats");
    },
    grains: function (req, res) {
        res.end("Welcome to the app page about grains");
    }

};

module.exports = routes;