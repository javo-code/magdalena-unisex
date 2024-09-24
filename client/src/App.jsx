import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import './index.css'


function App() {
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  return (
    <BrowserRouter>
      <Routes>
        < Route path='/' element={<h1>Home</h1>}/>
        < Route path='/login' element={<LoginPage />}/>
        < Route path='/register' element={<RegisterPage />}/>
        < Route ath='/reports' element={<h1>Reports</h1>}/>
        < Route path='/add-report' element={<h1>New Report</h1>}/>
        < Route path='/report/:id' element={<h1>Update Report</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App