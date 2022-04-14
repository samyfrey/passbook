import React, { useEffect } from 'react'
import { indexBudgets } from '../../../api/budget'

const Budget = ({ revenueBudget, creditBudget, setRevenueBudget, setCreditBudget }) => {
  // const [budgetData, setBudgetData] = useState(null)
  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await indexBudgets()
        // setBudgetData(res.data.budget)
        setRevenueBudget(res.data.budget[0].revenueBudget)
        setCreditBudget(res.data.budget[0].creditBudget)
        // console.log('res is', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBudget()
  }, [])
  // console.log('budgetData is', budgetData)
  // console.log('credit budgetData is', budgetData.creditBudget)
  console.log('revenuebudget is', revenueBudget)
  return (
    <div>
      <h1>Revenue Budget: {revenueBudget}</h1>
      <h1>Credit Limits Budget: {creditBudget}</h1>
    </div>
  )
}

export default Budget
