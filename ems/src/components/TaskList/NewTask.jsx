import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[340px] p-6 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-300 border border-purple-300/20'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md'>
          {data.taskCategory}
        </h3>

        <h4 className='text-sm text-purple-100 font-medium'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-6 text-3xl font-bold text-white leading-snug'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-3 text-purple-100 leading-6'>
        {data.taskDescription}
      </p>

      <div className='flex justify-between items-center mt-8 gap-3'>
        <button className='flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300 active:scale-95'>
          ✓ Mark as Completed
        </button>

        <button className='flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300 active:scale-95'>
          ✕ Mark as Failed
        </button>
      </div>

    </div>
  )
}

export default NewTask