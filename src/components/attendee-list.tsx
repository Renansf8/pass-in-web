import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participante..." />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10 text-left'>
              <th className='py-3 px-4 text-sm font-semibold w-16'>
                <input className='size-4 bg-black/20 border border-white/10 accent-orange-400' type="checkbox" name="" id="" />
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
              <th style={{ width: 64 }} className='py-3 px-4 text-sm font-semibold text-left'></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map(() => {
              return (
                <tr className='border-b border-white/10'>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <input className='size-4 bg-black/20 border border-white/10' type="checkbox" name="" id="" />
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>12312</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>Renan Ferreira</span>
                      <span>renan@teste.com</span>
                    </div>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <button className='bg-black border border-white/10 rounded-md p-1.5'>
                      <MoreHorizontal />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className='py-3 px-4 text-s m text-zinc-300' colSpan={3}>Mostrando 10 de 228</td>
              <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                <div className='inline-flex items-center gap-8'>

                  <span>Página 1 de 23</span>

                  <div className='flex gap-1.5'>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsLeft />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronLeft />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronRight />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsRight />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}