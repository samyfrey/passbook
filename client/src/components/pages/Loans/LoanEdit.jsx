// import React, { useEffect, useState } from 'react'

// import { Navigate, useParams } from 'react-router-dom'
// import { showLoan } from '../../../api/loans'

// const LoanEdit = ({ user, client, msgAlert, setRender, selectClient, setSelectClient }) => {
//   const [loanToUpdate, setLoanToUpdate] = useState(null)
//   const { loanId } = useParams()

//   console.log('loanId is', loanId)
//   if (!selectClient) {
//     return <Navigate to='/' />
//   }
//   // API CALL SHOULD WORK, PB COULD BE IN LOAN EDIT HERE

//   // fetch the loan based on id
//   // feed the loancreate with loan fetched which feeds the create form
//   // set a state to updateMode (so can have updateMode? create btn : update btn in the form)
//   //   //
//   const borrowerId = selectClient._id
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // setSelectClient(client)
//         console.log('loan id is', loanId)
//         // console.log('user is', user)
//         console.log('borrower id is', borrowerId)
//         const res = await showLoan(loanId, borrowerId)
//         setLoanToUpdate(res.data.loan)
//         console.log('res is', res)
//         console.log('loan to update is', loanToUpdate)
//       } catch (error) {
//         msgAlert({
//           heading: 'Failed to load',
//           message: error.message,
//           variant: 'danger'
//         })
//       }
//     }
//     fetchData()
//   }, [])

//   console.log('loan is', loanToUpdate)

//   // async function handleUpdate (user, loan, client) {
//   //   const res = confirm('Are you sure you want to delete?')
//   //   if (res) {
//   //     try {
//   //       setRender(false)
//   //       const loanId = loan._id
//   //       const borrowerId = client._id

//   //       await updateLoan(user, loanId, borrowerId, loan)
//   //       setRender(true)
//   //       msgAlert({
//   //         heading: 'Transaction deleted',
//   //         variant: 'success'
//   //       })
//   //     } catch (error) {
//   //       console.log('error is', error)
//   //       msgAlert({
//   //         heading: 'Failed to load',
//   //         message: error.message,
//   //         variant: 'danger'
//   //       })
//   //     }
//   //   }
//   // }
//   //   const [updateMode, setUpdateMode] = useState(false)
//   //   setUpdateMode(true)
//   //   console.log(setUpdateMode)
//   console.log('selectClient  from loanEdit state is', selectClient)

//   return (
//     <div>Edit</div>
//   )

//   //   <>
//   //     <form className='create-client-form' onSubmit={handleUpdate}>
//   //       <div className="create-client-item">
//   //         {data.map(dataPoint => (
//   //           <div key={dataPoint.id}>
//   //             <input type='text' placeholder={dataPoint.placeholder} name={dataPoint.property} value={dataPoint.value} onChange={handleChange}/>

//   //           </div>

//   //         ))}

//   //         <Select placeholder='Select Borrower'options={idOptions} onChange={handleBorrowerId} />
//   //         <Select placeholder='Select Closing Month'options={monthOptions} onChange={handleMonth} />

//   //         <button className="button" type="submit">Create</button>

//   //       </div>

//   //     </form>

//   //   </>
//   // )

// //   return (
// //     <div>LoanEdit</div>
// //   )
// }

// export default LoanEdit
