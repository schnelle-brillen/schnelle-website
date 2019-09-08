// thanks Dylan Seidt https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync for the tutorial

const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const crypto = require("crypto");
const exec = require("child_process").exec;

const secret = process.env.GITHUB_HOOK_SECRET;
const repoPath = "~/schnelle-website";
const APP_NAME = "schnelleWebsite";

http
  .createServer(function(req, res) {
    req.on("data", function(chunk) {
      let sig =
        "sha1=" +
        crypto
          .createHmac("sha1", secret)
          .update(chunk.toString())
          .digest("hex");

      if (req.headers["x-hub-signature"] === sig) {
        exec(`cd ${repoPath} && git pull`, () => {
          exec(`cd ${repoPath} && yarn install && yarn run build`, () => {
            exec(`pm2 stop ${APP_NAME}`, () => {
              exec(`pm2 start npm --name ${APP_NAME} -- start`);
            });
          });
        });
      }
    });

    res.end();
  })
  .listen(8080);
