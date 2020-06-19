// import React from 'react'
import * as types from './employeeActionTypes'
import fetch from '../../helpers/fetch'

export const receiveEmployeeList = payload => ({
  type: types.EMPLOYEES_FETCHED,
  payload
})

export const receiveError = () => ({
  type: types.EMPLOYEES_ERROR
})

export const receiveEmployee = payload => ({
  type: types.EMPLOYEE_RECEIVED,
  payload
})

export function fetchEmployees () {
  return dispatch => {
    return fetch('/employees/employees')
      .then(response => {
        dispatch(receiveEmployeeList(response.responseJSON.data))
      })
      .catch(err => {
        dispatch(receiveError(err))
      })
  }
}
// // TODO: maybe you can fetch user data here once again
// export function fetchUserByUserId (userId: string) {
//   return dispatch => {
//     return fetch(`/api/users/${userId}/role`)
//       .then(response => {
//         dispatch(
//           receiveUserRole({ id: userId, role: response.responseJSON.name })
//         )
//       })
//       .catch(err => {
//         // silently ignore
//         console.log(err)
//       })
//   }
// }

// /**
//  * HTTP update user
//  * @param {*} data
//  */
// export function updateUserByUserId (data: string) {
//   return dispatch => {
//     dispatch(showSpinner())
//     return fetch(`/api/users/${data.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         dispatch(dismissSpinner())
//         dispatch(closeDialog())
//         dispatch(receiveUser(data))
//         dispatch(
//           showSnack({
//             type: 'success',
//             title: <FormattedMessage id='all_pages_saved' />,
//             message: <FormattedMessage id='users_page_save_successful_msg' />
//           })
//         )
//       })
//       .catch(err => {
//         dispatch(dismissSpinner())
//         dispatch(
//           showSnack({
//             type: 'error',
//             title: <FormattedMessage id='all_pages_error' />,
//             message: <FormattedMessage id='something_went_wrong' />
//           })
//         )
//         console.log(err)
//       })
//   }
// }
