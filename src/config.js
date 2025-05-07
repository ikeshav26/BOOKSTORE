import dotenv from 'dotenv'

dotenv.config()


  const  backendUri=process.env.BACKEND_URI

console.log(backendUri)

export default backendUri