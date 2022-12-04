import React from 'react'
// import { Day1data } from './Day1data'
import { parsedData, exampleData } from './day-1-problem-solving'

interface Elf {
  name: string,
  food: number[]
}

let formattedData = parsedData
let newData = formattedData
while(formattedData.indexOf('\n') !== -1) {
  let indexBreak = formattedData.indexOf('\n')
  
}
console.log(formattedData)
// const elves: Elf[] = Day1data.split()

// const findMostPrepared = (party: Elf[]): string => {
//   let mostPrepared = ""
//   let mostPreparedSupplies = 0
//   party.map( member => {
//     let totalFood = member.food.reduce((a: number, b: number) => a + b )
//     if(totalFood > mostPreparedSupplies) {
//       mostPreparedSupplies = totalFood
//       mostPrepared = member.name
//     }
//   })
//   return `${mostPrepared} is the most prepared and is carrying ${mostPreparedSupplies} calories.`
// }

// console.log(findMostPrepared(elves))


export const Day1 = () => {

  return (
    <div></div>
  )

}