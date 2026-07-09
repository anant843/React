import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[340px] p-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 border border-blue-300/20'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md'>
          {data.taskCategory}
        </h3>

        <h4 className='text-sm text-blue-100 font-medium'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-6 text-3xl font-bold text-white leading-snug'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-3 text-blue-100 leading-6'>
        {data.taskDescription}
      </p>

      <div className='flex justify-between items-center mt-8'>
        <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition-all duration-300 active:scale-95'>
          ✓ Accepted
        </button>
      </div>

    </div>
  )
}

export default AcceptTask