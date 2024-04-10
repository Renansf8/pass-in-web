import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

dayjs.extend(relativeTime)
dayjs.locale('pt-br ')

export function AttendeeList() {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(event.target.value)
  }

  function goToNextPage() {
    setPage(page + 1)
  }


  function goToPreviousPage() {
    setPage(page - 1)
  }


  function goToFirstPage() {
    setPage(1)
  }


  function goToLastPage() {
    setPage(totalPages)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input value={searchInputValue} onChange={handleSearchInput} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participante..." />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <Table>

          <thead>
            <TableRow className='border-b border-white/10 text-left'>
              <TableHeader>
                <input className='size-4 bg-black/20 border border-white/10 accent-orange-400' type="checkbox" name="" id="" />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data de inscrição</TableHeader>
              <TableHeader>Data do check-in</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
              return (
                <TableRow key={attendee.id}>
                  <TableCell>
                    <input className='size-4 bg-black/20 border border-white/10' type="checkbox" name="" id="" />
                  </TableCell>
                  <TableCell>{attendee.id}</TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>{attendee.name}</span>
                      <span>{attendee.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                  <TableCell>{dayjs().to(attendee.checkedAt)}</TableCell>
                  <TableCell>
                    <IconButton transparent>
                      <MoreHorizontal />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </tbody>
          <tfoot>
            <TableRow>
              <TableCell colSpan={3}>Mostrando 10 de {attendees.length}</TableCell>
              <TableCell className='text-right' colSpan={3}>
                <div className='inline-flex items-center gap-8'>

                  <span>Página {page} de {Math.ceil(attendees.length / 10)}</span>

                  <div className='flex gap-1.5'>
                    <IconButton onClick={goToFirstPage} disabled={page === 1}> 
                      <ChevronsLeft />
                    </IconButton>
                    <IconButton onClick={goToPreviousPage}  disabled={page === 1}>
                      <ChevronLeft />
                    </IconButton>
                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                      <ChevronRight />
                    </IconButton>
                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                      <ChevronsRight />
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
        </Table>
      </div>
    </div>
  )
}