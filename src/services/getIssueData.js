'use strict'

const fs = require("fs");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

let buffer=fs.readFileSync(`${process.cwd()}/src/services/filePath.json`);
let filepath = JSON.parse(buffer);

function getBoltBurpIssue(){

    let burpIssue = {
        high : 0,
        medium : 0,
        low : 0,
        info : 0
    };

    let burpHtml = fs.readFileSync(filepath.burpBoltReportPath);
    let $ = cheerio.load(iconv.decode(burpHtml,'utf-8'));
    burpIssue.high = $('html').find(".high_certain").text();
    burpIssue.medium = $('html').find(".medium_certain").text();

    burpIssue.low = $('html').find(".low_certain").text();
    burpIssue.info = $('html').find(".colour_holder > .info_certain").text();

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(burpIssue);
        }, 1000);
    });
}//getBoltBurpIssue

function getGumtreeBurpIssue(){

    let burpIssue = {
        high : 0,
        medium : 0,
        low : 0,
        info : 0
    };

    let burpHtml = fs.readFileSync(filepath.burpGumtreeReportPath);
    let $ = cheerio.load(iconv.decode(burpHtml,'utf-8'));
    burpIssue.high = $('html').find(".high_certain").text();
    burpIssue.medium = $('html').find(".medium_certain").text();

    burpIssue.low = $('html').find(".low_certain").text();
    burpIssue.info = $('html').find(".colour_holder > .info_certain").text();

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(burpIssue);
        }, 1000);
    });
}//getGumtreeBurpIssue

function getKijijiBurpIssue(){

    let burpIssue = {
        high : 0,
        medium : 0,
        low : 0,
        info : 0
    };

    let burpHtml = fs.readFileSync(filepath.burpKijijiReportPath);
    let $ = cheerio.load(iconv.decode(burpHtml,'utf-8'));
    burpIssue.high = $('html').find(".high_certain").text();
    burpIssue.medium = $('html').find(".medium_certain").text();

    burpIssue.low = $('html').find(".low_certain").text();
    burpIssue.info = $('html').find(".colour_holder > .info_certain").text();

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(burpIssue);
        }, 1000);
    });
}//getKijijiBurpIssue

module.exports = {
    getBoltBurpIssue,
    getGumtreeBurpIssue,
    getKijijiBurpIssue
};