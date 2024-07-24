
import Landing from "./components/Pages/Landing.jsx"
import Dashboard from "./components/Pages/Dashboard.jsx"
import BookCar from "./components/Pages/BookCar.jsx"
import SignIn from "./components/Pages/SignIn.jsx"
import SignUp from "./components/Pages/SignUp.jsx"
import BookNow from "./components/Pages/BookNow.jsx"
import Profile from "./components/Pages/Profile.jsx"
import {Route , Routes , BrowserRouter} from "react-router-dom"
import RentCar from "./components/Pages/RentCar.jsx"
export default function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>

      
      <Route path="/" index element={<Landing />} />
      <Route path="/dashboard"  element={<Dashboard />} />
      <Route path="/bookcar" element={<BookCar />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/booknow" element={<BookNow />} />
      <Route path="/rentcar" element={<RentCar />} />
      <Route path="/profile" element={<Profile />} />

      </Routes>
      </BrowserRouter> 
    </div>
  )
}
