import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from  './Navbar';
import Counter from './components/Counter';
import Signin from './components/Signin';
import Home from './components/Home';
import SigupForm from './components/SignUpForm'
import AgeCounter from './components/AgeCounter'
import Users from './components/useFetch'
import UserList from "./components/UserList";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<SigupForm />}/>
        <Route path='/age_counter' element={<AgeCounter />}/>
        <Route path='/userlist' element={<UserList />}/>
      </Routes>
    </Router>
  )
}
export default App

React

Reply
























