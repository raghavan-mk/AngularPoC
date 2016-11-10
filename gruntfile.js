//gruntfile.js

module.exports = function (grunt) {

    var _ = require("grunt");

    _.initConfig({
        nodemon: {
            all: {
                script: "server.js",
                options: {
                    watchedExtensions: ["js"]
                }
            }
        }        
    });
    _.loadNpmTasks("grunt-nodemon");
    _.registerTask("default",["nodemon"]);
};