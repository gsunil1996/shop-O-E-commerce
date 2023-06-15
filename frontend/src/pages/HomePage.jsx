import axios from 'axios';
import React from 'react'
import { server } from '../server';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const logoutHandler = () => {
        axios
            .get(`${server}/user/logout`, { withCredentials: true })
            .then((res) => {
                toast.success(res.data.message);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };
    return (
        <div>
            HomePage
            <br />
            <button onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default HomePage