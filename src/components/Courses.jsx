import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Home from '../components/home/Home'

const Courses = () => {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:5000/book");
        console.log(res.data);
        setbook(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getBook();
  }, [])


  return (
    <div className='bg-base-100 min-w-screen shadow-sm mx-auto md:px-20 px-4 mb-10'>
      <div className='text-center flex flex-col items-center justify-center mt-32  gap-10'>
      <h1 className='text-2xl md:text-4xl '>We're delighted to have you<span className='text-pink-500'> Here! :)</span></h1>
      <p className='md:w-[75vw] tracking-tight mt-5'>Explore our curated selection of courses designed for book lovers, aspiring writers, and curious minds. From creative writing and literature analysis to publishing insights and storytelling techniques, our courses empower you to learn, grow, and connect with a community that shares your passion for books and learning.</p>
      <Link to='/' ><button className='cursor-pointer  bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-700 duration-200'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-10'>
      {book.map((item,index)=>{
        return(
        <div key={index}>
          <Cards key={index}  item={item}/>
        </div>
      )
      })}
      </div>
    </div>
  )
}

export default Courses
