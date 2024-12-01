/**
 * Advent of Code 2024 - Day 1: Historian Hysteria (Part Two)
 *
 * This program calculates the similarity score between two lists of location IDs.
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * Function to read and parse the input file into two lists of numbers.
 * @param filePath - The path to the input file.
 * @returns An object containing two arrays of numbers: leftList and rightList.
 */
function readInputFile(filePath: string): { leftList: number[]; rightList: number[] } {
  const fileContent: string = fs.readFileSync(filePath, 'utf-8');

  const leftList: number[] = [];
  const rightList: number[] = [];

  const lines: string[] = fileContent.trim().split('\n');

  for (const line of lines) {
    if (line.trim() === '') continue;

    const [num1Str, num2Str] = line.trim().split(/\s+/);

    const num1 = parseInt(num1Str, 10);
    const num2 = parseInt(num2Str, 10);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(`Invalid number found in line: "${line}"`);
    }

    leftList.push(num1);
    rightList.push(num2);
  }

  return { leftList, rightList };
}

/**
 * Function to calculate the similarity score between two lists of numbers.
 * @param leftList - The left list of numbers.
 * @param rightList - The right list of numbers.
 * @returns The similarity score as a number.
 */
function calculateSimilarityScore(leftList: number[], rightList: number[]): number {
  const rightListFreqMap: Map<number, number> = new Map();

  for (const num of rightList) {
    rightListFreqMap.set(num, (rightListFreqMap.get(num) || 0) + 1);
  }

  let similarityScore = 0;

  for (const num of leftList) {
    const countInRightList = rightListFreqMap.get(num) || 0;
    similarityScore += num * countInRightList;
  }

  return similarityScore;
}

try {
  const inputFilePath = path.join(__dirname, 'input');

  const { leftList, rightList } = readInputFile(inputFilePath);

  const similarityScore = calculateSimilarityScore(leftList, rightList);

  console.log(`The similarity score between the lists is ${similarityScore}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}
