
export function grandTotal (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    const selectBorrower = array[i].loans
    for (let j = 0; j < selectBorrower.length; j++) {
      const result = selectBorrower[j].amount
      sum += result
    }
  }
  return sum
}

export function revenueTotal (array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    const selectBorrower = array[i].loans
    for (let j = 0; j < selectBorrower.length; j++) {
      const result = selectBorrower[j].revenue
      sum += result
    }
  }
  return sum
}

// const totalRevenue = revenueTotal(clients)

function loanExtractor (array) {
  const selectLoans = []
  for (let i = 0; i < array.length; i++) {
    const selectBorrower = array[i].loans
    for (let j = 0; j < selectBorrower.length; j++) {
      const eachLoan = selectBorrower[j]
      selectLoans.push(eachLoan)
    }
  }
  return selectLoans
}

function grouping (arr) {
  const res = Array.from(
    arr.reduce(
      (m, { month, revenue }) => m.set(month, (m.get(month) || 0) + revenue),
      new Map()
    ),
    ([month, revenue]) => ({ month, revenue })
  )
  return res
}

// function cumulate (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const res = arr[i].amount + arr[i - 1].amount
//   }
//   return res
// }
// const formattedData = loanExtractor(clients)
// console.log('formattedData is', formattedData)
// const dataChart = grouping(formattedData)
// result(dataChart)
// function cumulator4 (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const previousMonth = arr[i - 1].amount
//     let currentMonth = arr[i].amount
//     currentMonth += previousMonth
//   }
//   return arr
// }

export function result (arr) {
  grouping(loanExtractor(arr))
  arr.map((obj, index, self) => {
    if (index === 0) return obj

    const prevO = self[index - 1]
    obj.revenue += prevO.revenue
    return obj
  })
}
