import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import './index.css'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          < Route path='/' element={<h1>Home</h1>}/>
          < Route path='/login' element={<LoginPage />}/>
          < Route path='/register' element={<RegisterPage />}/>
          < Route path='/reports' element={<h1>Reports</h1>}/>
          < Route path='/add-report' element={<h1>New Report</h1>}/>
          < Route path='/report/:id' element={<h1>Update Report</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}


export default App