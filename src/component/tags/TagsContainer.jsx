import React from 'react'

const TagsContainer = () => {
  return (
    <section>
        <div className='flex gap-2 px-5 py-6 mx-auto overflow-y-auto border-b max-w-7xl lg:px-0'>
          <div className='px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer'> 
             react
          </div>
          {/* selacted */}
           <div className='px-4 py-1 text-white bg-blue-600 rounded-full cursor-pointer'>
               redux
           </div>
        </div>
    </section>
  )
}

export default TagsContainer