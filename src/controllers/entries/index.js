const getLastEntries = require("./getLastEntries");
const getOneEntry = require("./getOneEntry");
const getEntriesByCategory = require("./getEntriesByCategory");
const getEntriesByGenre = require("./getEntriesByGenre");
const getTopRatedEntriesByCategory = require("./getTopRatedEntriesByCategory");
const postEntry = require("./postEntry");


module.exports = {
    getLastEntries,
    getOneEntry,
    getEntriesByCategory,
    getEntriesByGenre,
    getTopRatedEntriesByCategory,
    postEntry
}