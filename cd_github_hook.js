// thanks Dylan Seidt https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync for the tutorial

const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.GITHUB_HOOK_SECRET;
const repo = '~/schnelle-website';

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        if (req.headers['x-hub-signature'] === sig) {
            exec('cd ' + repo + ' && git pull', () => {
                exec('cd ' + repo + ' && npm run build');
            });
        }
    });

    res.end();
}).listen(8080);
