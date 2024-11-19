const fs = require("fs");
const readline = require("readline");
const inquirer = require("inquirer");

async function readLines(filename) {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  const lines = [];
  for await (const line of rl) lines.push(line.trim());
  return lines;
}

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log("========================================".cyan);
  console.log("=          Nodepay Airdrop Bot         =".cyan);
  console.log("=     Created by HappyCuanAirdrop      =".cyan);
  console.log("=    https://t.me/HappyCuanAirdrop     =".cyan);
  console.log("========================================".cyan);
  console.log();
}

module.exports = { readLines, displayHeader };
