import * as types from './employeeActionTypes'
import fetch from '../../helpers/fetch'
import { showSnack } from 'react-redux-snackbar'
import { closePopup } from 'react-redux-popup'

export const receiveEmployeeList = payload => ({
  type: types.EMPLOYEES_FETCHED,
  payload
})

// function employeeRemoved (data) {
//   return {
//     type: types.EMPLOYEE_REMOVED,
//     payload: data
//   }
// }

export const receiveError = () => ({
  type: types.EMPLOYEES_ERROR
})

export const receiveEmployee = payload => ({
  type: types.EMPLOYEE_RECEIVED,
  payload
})

export function fetchEmployees () {
  return dispatch => {
    return fetch('/employees/employees', {
      method: 'GET'
    })
      .then(response => {
        var data = response.responseJSON.data
        if (Array.isArray(data)) {
          dispatch(receiveEmployeeList(data))
        } else {
          var myData = Object.keys(data).map(key => {
            return data[key]
          })
          dispatch(receiveEmployeeList(myData))
        }
      })
      .catch(err => {
        dispatch(receiveError(err))
      })
  }
}
// TODO: maybe you can fetch user data here once again
export function fetchEmployeeByEmployeeId (employeeId: string) {
  return dispatch => {
    return fetch(`/employees/employee/${employeeId}`)
      .then(response => {
        dispatch(receiveEmployee(response.responseJSON.data))
      })
      .catch(err => {
        // silently ignore
        console.log(err)
      })
  }
}

/**
 * HTTP update employee
 * @param {*} data
 */
export function updateEmployeeByEmployeeId (data: string) {
  return dispatch => {
    const payload = Object.assign(
      {},
      {
        id: data.id,
        name: data.employee_name,
        age: data.employee_age,
        salary: data.employee_salary
      }
    )
    return fetch(`/employees/update/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    })
      .then(response => {
        dispatch(closePopup())
        dispatch(receiveEmployee(data))
        dispatch(
          showSnack({
            type: 'success',
            message: 'Employee Details Updated Successfully.'
          })
        )
      })
      .catch(err => {
        dispatch(closePopup())
        if (err.status === 401) {
          dispatch(
            showSnack({
              type: 'error',
              message: 'You are not authorized to update this record'
            })
          )
        } else {
          dispatch(
            showSnack({
              type: 'error',
              message: 'Something went wrong while saving employee details.'
            })
          )
        }
        console.log(err)
      })
  }
}

/**
 * HTTP delete employee
 * @param {*} id
 */
export function handleDeleteEmployee (data: string) {
  return dispatch => {
    return fetch(`/employees/delete/${data.id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.responseJSON.status !== 'failed') {
          // dispatch(employeeRemoved(data))
          dispatch(fetchEmployees())
          dispatch(
            showSnack({
              type: 'success',
              message: 'Employee Removed Successfully.'
            })
          )
        } else {
          dispatch(
            showSnack({
              type: 'error',
              message: 'Something went wrong while removing employee details.'
            })
          )
        }
      })
      .catch(err => {
        dispatch(
          showSnack({
            type: 'error',
            message: 'Something went wrong while removing employee details.'
          })
        )
        console.log(err)
      })
  }
}

export function createEmployee (employeeDetails: {}) {
  return dispatch => {
    const payload = Object.assign(
      {},
      {
        id: employeeDetails.id,
        name: employeeDetails.employee_name,
        age: employeeDetails.employee_age,
        salary: employeeDetails.employee_salary
      }
    )

    return fetch('/employees/create', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        dispatch(closePopup())
        dispatch(receiveEmployee(response.responseJSON.data))
        dispatch(fetchEmployees())
        dispatch(
          showSnack({
            type: 'success',
            message: 'Employee created Successfully.'
          })
        )
      })
      .catch(err => {
        dispatch(closePopup())
        dispatch(
          showSnack({
            type: 'error',
            message: 'Something went wrong while creating employee.'
          })
        )
        console.log(err)
      })
  }
}
