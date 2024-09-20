import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
//import { LoginPage } from "./pages/LoginPage";
//import { RegisterPage } from "./pages/RegisterPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/login' element={<h1>Login</h1>}></Route>
        <Route path='/register' element={<h1>Register</h1>}></Route>
        <Route path='/reports' element={<h1>Reports</h1>}></Route>
        <Route path='/add-report' element={<h1>New Report</h1>}></Route>
        <Route path='/report/:id' element={<h1>Update Report</h1>}></Route>
        <Route path='/profile' element={<h1>Profile</h1>}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App