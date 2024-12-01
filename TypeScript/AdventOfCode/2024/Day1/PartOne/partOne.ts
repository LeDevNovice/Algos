/**
 * Advent of Code 2024 - Day 1: Historian Hysteria (Part One)
 *
 * This program calculates the total distance between two lists of location IDs
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
 * Function to calculate the total distance between two lists of numbers.
 * @param leftList - The left list of numbers.
 * @param rightList - The right list of numbers.
 * @returns The total distance as a number.
 */
function calculateTotalDistance(leftList: number[], rightList: number[]): number {
  if (leftList.length !== rightList.length) {
    throw new Error('Lists must be of the same length.');
  }

  const sortedList1 = [...leftList].sort((a, b) => a - b);
  const sortedList2 = [...rightList].sort((a, b) => a - b);

  let totalDistance = 0;
  
  for (let i = 0; i < sortedList1.length; i++) {
    totalDistance += Math.abs(sortedList1[i] - sortedList2[i]);
  }

  return totalDistance;
}

try {
  const inputFilePath = path.join(__dirname, 'input');

  const { leftList, rightList } = readInputFile(inputFilePath);

  const totalDistance = calculateTotalDistance(leftList, rightList);

  console.log(`The total distance between the lists is ${totalDistance}`);
} catch (error) {
  console.error(`Error: ${(error as Error).message}`);
}
