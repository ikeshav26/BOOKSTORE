import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import backendUri from '../config'

const Login = () => {
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();

    const onSubmit=async (data)=>{
        const userInfo={
            email:data.email,
            password:data.password
        }
        await axios.post(`${backendUri}/user/login`,userInfo)
        .then((res)=>{
            if(res.data){
                toast.success("Login successful",{autoClose:1000})
                document.getElementById("my_modal_3").close()
                setTimeout(()=>{
                    window.location.reload();
                },1000)
            }
            localStorage.setItem("user",JSON.stringify(res.data.user))
        }).catch((err)=>{
            console.log(err);
            toast.error("Login failed")
        })
    };
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box rounded-3xl">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=>document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute text-lg right-4 top-4 ">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 px-5 py-4 '>
                        <h3 className="font-bold text-4xl">Login</h3>
                        <div className='flex flex-col gap-5 justify-center '>
                            <div className='flex flex-col gap-2'>
                                <span className='inline-block'>Email:</span>
                                <input {...register("email",{required:true})} type="email" className='border-1 px-3 py-2 rounded-xl' placeholder="Enter your email"></input>
                                {errors.email && <span className='text-red-800'>This field is required*</span>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='inline-block'>Password:</span>
                                <input {...register("password",{required:true})} type="password" className='border-1 px-3 py-2 rounded-xl' placeholder="Enter your password"></input>
                                {errors.password && <span className='text-red-800'>This field is required*</span>}
                            </div>
                        </div>
                        <div className='flex justify-around items-center'>
                            <button className='bg-pink-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-pink-500'>Login</button>
                            <h4>Not registerd ? <span className='text-blue-500 underline text-center'><Link to="/signup">Signup</Link></span></h4>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
