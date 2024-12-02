/**
 * Advent of Code 2024 - Day 2: Reactor Report Analysis (Part One)
 *
 * This program analyzes reactor reports to determine how many are safe.
 * A report is considered safe if:
 *   1. The levels are either all increasing or all decreasing.
 *   2. Any two adjacent levels differ by at least one and at most three.
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * Function to read and parse the input file into an array of reports.
 * @param filePath - The path to the input file.
 * @returns An array of reports, each report is an array of numbers.
 */
function readInputFile(filePath: string): number[][] {
  const fileContent: string = fs.readFileSync(filePath, 'utf-8');

  const reports: number[][] = [];

  const lines: string[] = fileContent.trim().split('\n');

  for (const line of lines) {
    if (line.trim() === '') continue;

    const levelStrings: string[] = line.trim().split(/\s+/);

    const levels: number[] = levelStrings.map((levelStr) => {
      const level = parseInt(levelStr, 10);

      if (isNaN(level)) {
        throw new Error(`Invalid number found in line: "${line}"`);
      }
      return level;
    });

    reports.push(levels);
  }

  return reports;
}

/**
 * Function to determine if a report is safe based on the given criteria.
 * @param levels - An array of levels in the report.
 * @returns A boolean indicating whether the report is safe.
 */
function isReportSafe(levels: number[]): boolean {
  if (levels.length < 2) {
    return true;
  }

  const initialDifference = levels[1] - levels[0];

  if (initialDifference === 0) {
    return false;
  }

  const isIncreasing = initialDifference > 0;
  const isDecreasing = initialDifference < 0;

  for (let i = 1; i < levels.length; i++) {
    const prevLevel = levels[i - 1];
    const currLevel = levels[i];
    const difference = currLevel - prevLevel;

    const absDifference = Math.abs(difference);
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
  const inputFilePath = path.join(__dirname, 'input');

  const reports: number[][] = readInputFile(inputFilePath);

  let safeReportsCount = 0;

  for (const levels of reports) {
    if (isReportSafe(levels)) {
      safeReportsCount++;
    }
  }

  console.log(`Number of safe reports: ${safeReportsCount}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}
