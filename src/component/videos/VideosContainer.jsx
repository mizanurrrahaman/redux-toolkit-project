import React, { useEffect } from 'react'
import SingleVideo from './SingleVideo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../features/videos/VideosSlice'

const VideosContainer = () => {
   
 const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(fetchVideos())
   }, [dispatch])

  return (
    <section className='pt-12'>
      <section className='pt-12'>
        <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
            {/* single video       {content}*/}


        </div>
      </section>
    </section>
  )
}

export default VideosContainer

// const data = useSelector(state => state.video)
  // console.log(data)
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //   dispatch(fetchVideos())
  // }, [dispatch])

{/* 

 const dispatch = useDispatch()
    useEffect(()=> {
       dispatch(fetchVideos())
    }, [dispatch])

     let content

     if(loading){
        content = "Loading...."
     }
     if(isError){
        content = `error ${error}` 
     }
     if(!loading && !isError && data.length > 0){
       content = data.map((video) =><SingleVideo video={video} key={video.id}/> )
     }



             <div className='col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]'> 
            <div className='flex flex-col w-full'>
              <div className='relative'>
                <a href="video.html">
                  <img src="https://i3.ytimg.com/vi/604s7v28nlw/maxresdefault.jpg" alt="Some video title" className='w-full h-auto' />
                </a>
                 <p className='absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py'>
                    12:10
                 </p>
              </div>
               <div className='flex flex-row gap-2 mt-2'>
                  <a href="#" className='shrink-0'>
                    <img src="https://avatars.githubusercontent.com/u/73503432?v=4" className='w-6 h-6 rounded-full' alt="Murad Hossain Chowdhury"/>
                  </a>
               </div>
                <div className='flex flex-col'>
                  <a href="video.html">
                    <p className='text-sm font-semibold text-slate-900'>
                       Video title
                    </p>
                  </a>
                   <a className='mt-2 text-xs text-gray-400 hover:text-gray-600' href="#">
                    Murad Hossain Chowdhury
                   </a>
                   <p className='mt-1 text-xs text-gray-400'>
                       200 views . May 3 2022
                   </p>
                </div>
            </div>
          </div>


             useEffect(()=> {
       dispatch(fetchVideos())
    }, [dispatch])

     let content

     if(loading){
        content = "Loading...."
     }
     if(isError){
        content = `error ${error}` 
     }
     if(!loading && !isError && data.length > 0){
       content = data.map((video) =><SingleVideo video={video} key={video.id}/> )
     }
             */}
