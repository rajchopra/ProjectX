var fivebeans = require('fivebeans');

var client = new fivebeans.client('10.0.1.1', 11300);
client
    .on('connect', function()
    {
        // client can now be used
    })
    .on('error', function(err)
    {
        // connection failure
    })
    .on('close', function()
    {
        // underlying connection has closed
    })
    .connect();