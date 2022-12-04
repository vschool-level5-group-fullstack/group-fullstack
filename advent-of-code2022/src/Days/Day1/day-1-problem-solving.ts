import { Day1data } from "./day-1-data"
export const exampleData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

let totalCalories = 0


export const parsedData = exampleData.split('\n\n')
  .map(str => str.split(`\n`))
  .map(arr => arr.map(num => Number(num)))
  .map(arr => arr.reduce((a, b) => a + b))

totalCalories = Math.max.apply(null, parsedData)
  console.log(totalCalories)






