import dotenv from 'dotenv'

dotenv.config()


export const backendUri=process.env.BACKEND_URI

console.log(backendUri)