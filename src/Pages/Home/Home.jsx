import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { AxiosInstance } from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        // axios({
        //     url: "http://localhost:8080/users/getData",
        //     method: "get",
        // })
        const token = localStorage.getItem('token')
        // AxiosInstance.get('/users/getData', { headers: { 'Authorization': 'Bearer' + " " + token } })
        AxiosInstance.get('/users/getData')
            .then((res) => {
                console.log("Home response: ", res)
                setData(res.data)
            })
            .catch((err) => {
                console.log({ err })
                // if (err.status == 401) {
                //     localStorage.removeItem('token')
                //     localStorage.clear()
                //     navigate('/login')
                // }
            })
    }
    return (
        <div className='d-flex flex-wrap gap-3 m-2 justify-content-around align-items-center'>
            {
                data.map((item) => <Cards book={item} />)
            }
        </div>
    )
}

export default Home
