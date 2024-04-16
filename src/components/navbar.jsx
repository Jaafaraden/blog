import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/' className="text-gray-300">Home</Link>
      <ul className="flex space-x-4">
        <li>
        <Link to='/about' className="text-gray-300">About</Link>
        </li>
        <li>
        <Link to='/signin' className="text-gray-300">Signin</Link>
        </li>
        <li>
        <Link to='/Signupform' className="text-gray-300">SignupForm</Link>
        </li>
        <li>
        <Link to='/userlist' className="text-gray-300">UserList</Link>
       </li>
        <li>
        <Link to='/usefetch' className="text-gray-300">UseFetch</Link>
       </li>
      </ul>
      </div>
    </nav>
  )
}
export default Navbar;