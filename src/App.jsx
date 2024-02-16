import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from './components/LandingPage';
import About from './pages/About';
import Vans from './pages/Vans';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {

  return (
    <>

       <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        theme="light"
      />


    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/van" element={<Vans/>}/>
    <Route path="/err" element={<Error/>}/>
    <Route path="/up" element={<SignUp/>}/>
    <Route path="/in" element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App;
