const express = require('express');
const equipamiento = require('../components/equipamiento/network');

const routes = function(server) {
    server.use('/equipamiento', equipamiento);
}

module.exports = routes;