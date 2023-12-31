import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// user routes
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ActivationPage from './pages/ActivationPage';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './server';

function App() {

  useEffect(() => {
    axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    }).then(res => {
      toast.success(res.data.message)
    }).catch(err => {
      toast.error(err.response.data.message)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
