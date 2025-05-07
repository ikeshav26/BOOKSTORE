import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
      const navigate=useNavigate()
      const submitHandler=()=>{
        toast.success("Your message has been sent successfully!")
        navigate("/")
      }
  return (
    <div>
      <Link to="/"><button className='absolute top-10 right-10 text-2xl hover:cursor-pointer hover:bg-base-300 rounded-[50%] px-2 py-1'>✕</button></Link>
      <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[350px] md:w-[400px] border-2 rounded-xl flex  justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 md:px-5 py-4 ">
            <h3 className="font-bold text-4xl">Contact Us</h3>
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-2">
                <span className="inline-block">Name:</span>
                <input {...register("text", { required: true })}
                  type="text"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Enter your fullname"
                />
                {errors.email && <span className='text-red-800'>This field is required*</span>}
              </div>
              <div className="flex flex-col gap-2">
                <span className="inline-block">Email:</span>
                <input {...register("email", { required: true })}
                  type="email"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Enter your email"
                />
                {errors.email && <span className='text-red-800'>This field is required*</span>}
              </div>
              <div className="flex flex-col gap-2">
                <span className="inline-block">Message:</span>
                <input {...register("text", { required: true })}
                  type="text"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Type your message"
                />
                {errors.email && <span className='text-red-800'>This field is required*</span>}
              </div>
            </div>
            <button onClick={()=>{submitHandler()}} className="bg-pink-600 w-1/2 px-4 py-2 rounded-xl cursor-pointer hover:bg-pink-500">
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
