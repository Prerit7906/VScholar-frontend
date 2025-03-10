import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/home"
        className="px-6 py-2 bg-[rgb(25,40,65)] text-white rounded-lg shadow-md hover:bg-[rgb(135,219,219)] hover:text-black transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  )
}

export default NotFound
