"use strict";
/**
 * Advent of Code 2024 - Day 2: Reactor Report Analysis (Part One)
 *
 * This program analyzes reactor reports to determine how many are safe.
 * A report is considered safe if:
 *   1. The levels are either all increasing or all decreasing.
 *   2. Any two adjacent levels differ by at least one and at most three.
 */
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
/**
 * Function to read and parse the input file into an array of reports.
 * @param filePath - The path to the input file.
 * @returns An array of reports, each report is an array of numbers.
 */
function readInputFile(filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var reports = [];
    var lines = fileContent.trim().split('\n');
    var _loop_1 = function (line) {
        if (line.trim() === '')
            return "continue";
        var levelStrings = line.trim().split(/\s+/);
        var levels = levelStrings.map(function (levelStr) {
            var level = parseInt(levelStr, 10);
            if (isNaN(level)) {
                throw new Error("Invalid number found in line: \"".concat(line, "\""));
            }
            return level;
        });
        reports.push(levels);
    };
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        _loop_1(line);
    }
    return reports;
}
/**
 * Function to determine if a report is safe based on the given criteria.
 * @param levels - An array of levels in the report.
 * @returns A boolean indicating whether the report is safe.
 */
function isReportSafe(levels) {
    if (levels.length < 2) {
        return true;
    }
    var initialDifference = levels[1] - levels[0];
    if (initialDifference === 0) {
        return false;
    }
    var isIncreasing = initialDifference > 0;
    var isDecreasing = initialDifference < 0;
    for (var i = 1; i < levels.length; i++) {
        var prevLevel = levels[i - 1];
        var currLevel = levels[i];
        var difference = currLevel - prevLevel;
        var absDifference = Math.abs(difference);
        if (absDifference < 1 || absDifference > 3) {
            return false;
        }
        if (difference === 0) {
            return false;
        }
        if (isIncreasing && difference <= 0) {
            return false;
        }
        if (isDecreasing && difference >= 0) {
            return false;
        }
    }
    return true;
}
try {
    var inputFilePath = path.join(__dirname, 'input');
    var reports = readInputFile(inputFilePath);
    var safeReportsCount = 0;
    for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
        var levels = reports_1[_i];
        if (isReportSafe(levels)) {
            safeReportsCount++;
        }
    }
    console.log("Number of safe reports: ".concat(safeReportsCount));
}
catch (error) {
    console.error("Error: ".concat(error.message));
}
