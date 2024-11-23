const fs = require("fs");
const { program } = require('commander');
const express = require("express");

const app = express();

program
    .requiredOption('-h, --host <host>', 'address of the server')
    .requiredOption('-p, --port <port>', 'port of the server')
    .requiredOption('-c, --cache <path>', 'path to the cache directory');

program.parse();
const { host, port, cache } = program.opts();

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});