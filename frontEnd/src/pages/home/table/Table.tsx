import { useState } from 'react'
import { useTable, Column } from 'react-table'
import { Container, Input } from './tableStyle'

interface Data {
  ProvinciaEstado: string
  Confirmados: number
  Mortos: number
}

const columns: Column<Data>[] = [
  {
    Header: 'Estado',
    accessor: 'ProvinciaEstado'
  },
  {
    Header: 'Confirmados',
    accessor: 'Confirmados'
  },
  {
    Header: 'Mortos',
    accessor: 'Mortos'
  }
]

const Table = ({ data }: { data: Data[] }) => {
  const [filterInput, setFilterInput] = useState('')
  const dataToDisplay = data.filter(d =>
    d.ProvinciaEstado.toLowerCase().includes(filterInput.toLowerCase())
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: dataToDisplay })

  return (
    <Container>
      <Input
        value={filterInput}
        onChange={e => setFilterInput(e.target.value)}
        placeholder={'Filtrar por estado...'}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
