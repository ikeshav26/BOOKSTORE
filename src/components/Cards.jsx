import React from 'react'


const Cards = ({item}) => {
  return (
    <div className='mt-10 h-[520px]  flex md:mr-3 hover:scale-105 cursor-pointer '>
      <div className="card bg-base-300  w-96 shadow-2xl sm:rounded-lg ">
  <figure className=' md:h-[200px] lg:h-full '>
    <img className='absolute top-0 rounded-t-xl '
      src={item.image} />
  </figure>
  <div className="card-body mt-[41vh] md:mt-0">
    <h2 className="card-title tracking-tight ">
      {item.name}
      <div className="badge badge-secondary tracking-tighter">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between ">
      <div className="badge outline-1 py-4">$ {item.price}</div>
      <div className="badge outline-1 hover:bg-pink-500 duration-200 cursor-pointer hover:outline-none px-5 py-4 mr-6 leading-none tracking-tighter">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
