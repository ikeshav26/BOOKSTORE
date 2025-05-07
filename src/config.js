const backendUri = import.meta.env.VITE_BACKEND_URI;

if (!backendUri) {
  console.error('Error: VITE_BACKEND_URI is not defined in the environment variables.');
} else {
  console.log(`Backend URI: ${backendUri}`);
}

export default backendUri