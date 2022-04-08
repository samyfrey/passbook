const borrowers = [
  {
    name: 'company1',
    loans: [
      { description: 'credit', month: 'january', revenue: 10, past: 5 },
      { description: 'credit', month: 'february', revenue: 20, past: 10 }
    ]
  },
  {
    name: 'company2',
    loans: [
      { description: 'credit', month: 'january', revenue: 5, past: 25 },
      { description: 'credit', month: 'february', revenue: 5, past: 5 }
    ]
  }
]

const actualRevData = [
  {
    month: 'january',
    pastYearRev: 50
  },
  {
    month: 'february',
    pastYearRev: 40
  },
  { month: 'march', pastYearRev: 100 }
]

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

const loans = loanExtractor(borrowers)

function grouping (arr) {
  const res = Array.from(
    arr.reduce(
      (accumulator, { month, revenue }) =>
        accumulator.set(month, (accumulator.get(month) || 0) + revenue),
      new Map()
    ),
    ([month, revenue]) => ({ month, revenue })
  )
  return res
}

const groupedLoans = grouping(loans)

function cumulator (arr) {
  const newArray = arr.map((obj, index, self) => {
    if (index === 0) return obj

    const prevO = self[index - 1]
    obj.revenue += prevO.revenue
    return obj
  })
  return newArray
}

const finalArray = cumulator(groupedLoans)

function pushDataToActual (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].month === actualRevData[i].month) {
      actualRevData[i].thisYearRev = arr[i].revenue
    }
  }
  return actualRevData
}

const finalChartData = pushDataToActual(finalArray)

console.log(finalChartData)
