import {parsedData, exampleData} from './day-1-problem-solving'

const data = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

const firstSplit = [
  '1000\n2000\n3000',
  '4000',
  '5000\n6000',
  '7000\n8000\n9000',
  '10000'
]

const secondSplit = [`1000`, `2000`, `3000`]
const convertToNumber = [1000, 2000, 3000]
const caloriesPerElf = 6000

describe("Day1", () => {
  test("parsedData", () => {
    expect(parsedData[0]).toStrictEqual(caloriesPerElf)
    // expect(exampleData).toBe(data)
  })
})