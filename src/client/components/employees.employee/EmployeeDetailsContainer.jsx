import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import type { State, Dispatch } from '../../flow-types'
import EmployeeDetails from './EmployeeDetails'
import EmployeeDetailsForm from './EmployeeDetailsForm'
import EmployeeCreateForm from './EmployeeCreateForm'
import {
  fetchEmployeeByEmployeeId,
  updateEmployeeByEmployeeId,
  createEmployee
} from '../../store/employee/employeeActions'
import { getEmployeeByEmployeeId } from '../../store/employee/employeesSelectors'
import { closePopup } from 'react-redux-popup'
import type { EmployeeType } from '../../flow-types/employeesTypes'

type Props = {
  employeeDetails: EmployeeType,
  employeeId: string,
  isEditable: boolean,
  isCreateNew: Boolean,
  fetchEmployeeByEmployeeId: (a: string) => void,
  handleCancel: () => void,
  handleSave: (data: {}) => void,
  handleCreate: (data: {}) => void
}

export function EmployeeDetailsContainer ({
  employeeDetails = {},
  employeeId,
  isEditable,
  isCreateNew,
  fetchEmployeeByEmployeeId,
  handleCancel,
  handleSave,
  handleCreate
}: Props) {
  // fetch selected user details
  useEffect(() => {
    isEditable && fetchEmployeeByEmployeeId(employeeId)
  }, [])

  const [editing, setEdit] = useState(isEditable)
  return (
    <div id='panel-employee-details'>
      {editing ? (
        <EmployeeDetailsForm
          employeeDetails={employeeDetails}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      ) : isCreateNew ? (
        <EmployeeCreateForm
          handleCreate={handleCreate}
          handleCancel={handleCancel}
        />
      ) : (
        <EmployeeDetails
          employeeDetails={employeeDetails}
          handleEdit={() => setEdit(true)}
          handleCancel={handleCancel}
        />
      )}
    </div>
  )
}

type OwnProps = {
  employeeId: string,
  isEditable: boolean,
  isCreateNew: boolean
}

export const mapStateToProps = (
  state: State,
  { employeeId, isEditable, isCreateNew }: OwnProps
) => {
  return {
    employeeDetails: getEmployeeByEmployeeId(state, employeeId),
    isEditable,
    isCreateNew
  }
}

// setup the functions that we want to pass down to the components
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchEmployeeByEmployeeId: (id: string) =>
    dispatch(fetchEmployeeByEmployeeId(id)),
  handleCancel: () => dispatch(closePopup()),
  handleSave: (data: {}) => dispatch(updateEmployeeByEmployeeId(data)),
  handleCreate: (data: {}) => dispatch(createEmployee(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDetailsContainer)
