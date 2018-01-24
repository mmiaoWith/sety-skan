const fs = require("fs");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

let buffer=fs.readFileSync(`${process.cwd()}/filePath.json`);
let filepath = JSON.parse(buffer);

function getBurpIssue(){

    let burpIssue = {
        high : 0,
        medium : 0,
        low : 0,
        info : 0
    };

    let burpHtml = fs.readFileSync(filepath.burpReportPath);
    let $ = cheerio.load(iconv.decode(burpHtml,'utf-8'));
    burpIssue.high = $('html').find(".high_certain").text();
    burpIssue.medium = $('html').find(".medium_certain").text();

    burpIssue.low = $('html').find(".low_certain").text();
    burpIssue.info = $('html').find(".colour_holder > .info_certain").text();

    return burpIssue;
}//getBurpIssue

module.exports = {
    getBurpIssue
};