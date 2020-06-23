import React, { useState, useEffect, useRef } from 'react'
import type { EmployeeListType } from '../../flow-types/employeesTypes'
import ViewFormatter from './ViewFormatter'
import CircularProgress from '@material-ui/core/CircularProgress'

let ReactDataGrid = () => null

if (__CLIENT__) {
  ReactDataGrid = require('react-data-grid')
}

export const sortRows = (
  initialRows: EmployeeListType,
  sortColumn: string,
  sortDirection: string
) => (rows: EmployeeListType) => {
  const comparer = (a, b) => {
    if (sortDirection === 'ASC') {
      return a[sortColumn] > b[sortColumn] ? 1 : -1
    } else if (sortDirection === 'DESC') {
      return a[sortColumn] < b[sortColumn] ? 1 : -1
    }
  }
  // $FlowFixMe
  return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer)
}

export const NoDataView = () => (
  <center>
    <div style={{ marginTop: '10rem' }}>
      <CircularProgress size={80} thickness={6.12} />
    </div>
  </center>
)

export const getColumns = (
  handleViewEmployee: string => void,
  handleEditEmployee: string => void,
  handleDeleteEmployee: string => void
) => {
  return [
    {
      key: 'id',
      name: 'ID',
      sortable: true
    },
    {
      key: 'employee_name',
      sortable: true,
      name: 'Employee Name'
    },
    {
      key: 'employee_age',
      name: 'Employee Age',
      sortable: true
    },
    {
      key: 'employee_salary',
      name: 'Employee Salary',
      sortable: true
    },
    {
      key: 'view',
      name: 'View',
      width: 80,
      // $FlowFixMe
      formatter: ({ row }) => (
        <ViewFormatter
          type='view'
          value={row.id}
          handleClick={handleViewEmployee}
        />
      )
    },
    {
      key: 'edit',
      name: 'Edit',
      width: 80,
      // $FlowFixMe
      formatter: ({ row }) => (
        <ViewFormatter
          type='edit'
          value={row.id}
          handleClick={handleEditEmployee}
        />
      )
    },
    {
      key: 'delete',
      name: 'Delete',
      width: 80,
      // $FlowFixMe
      formatter: ({ row }) => (
        <ViewFormatter
          type='delete'
          value={row}
          handleClick={handleDeleteEmployee}
        />
      )
    }
  ]
}

type Props = {
  employees: EmployeeListType,
  handleViewEmployee: (id: string) => void,
  handleEditEmployee: (id: string) => void,
  handleDeleteEmployee: (id: string) => void,
  employeesLastEditedAt: number
}

export default function EmployeesGrid ({
  employees,
  employeesLastEditedAt,
  handleViewEmployee,
  handleEditEmployee,
  handleDeleteEmployee
}: Props) {
  if (!__CLIENT__) return null
  if (!employees.length) {
    return <NoDataView />
  }
  const [rows, setRows] = useState(employees)
  const inputEl = useRef(null)
  // if the list has been edited, state update is required
  useEffect(() => {
    setRows(employees)
  }, [employeesLastEditedAt])
  useEffect(() => {
    const idx = employees.length && employees.length - 1
    if (idx) {
      const top = inputEl.current.getRowOffsetHeight() * idx
      const gridCanvas = inputEl.current
        .getDataGridDOMNode()
        .querySelector('.react-grid-Canvas')
      gridCanvas.scrollTop = top
    }
  }, [employees.length])
  return (
    <div id='dg-checkout-items'>
      <ReactDataGrid
        ref={inputEl}
        columns={getColumns(
          handleViewEmployee,
          handleEditEmployee,
          handleDeleteEmployee
        )}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        minHeight={480}
        rowHeight={40}
        onGridSort={(sortColumn, sortDirection) =>
          setRows(sortRows(employees, sortColumn, sortDirection))}
      />
    </div>
  )
}
