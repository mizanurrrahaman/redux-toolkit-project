import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import Navbar from './component/layout/Navbar'
import TagsContainer from './component/tags/TagsContainer'
import VideosContainer from './component/videos/VideosContainer'
import Pagination from './component/pagination'
import Footer from './component/layout/Footer'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() 

  return (
    <>
      {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10,50))}
        >
          incrementbyamount
        </button>
      </div>
    </div>  */}
    <Navbar/>
    <TagsContainer/>
    <VideosContainer/>
    <Pagination/>
    <Footer/>
    </>
  )
}

export default App
