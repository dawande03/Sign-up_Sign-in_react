import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
import Header from './Header';
const ShowApidata = () => {
    const [userdata, setuserdata] = useState([]);
    const url = " https://jsonplaceholder.typicode.com/users";

    const getData = () => {
            axios.get(url).then((res) => {
            setuserdata(res.data)
            console.log(res.data);
        })
    }
    return (
        <div>
            <Header/>
        <div className='container'>
            <button className='btn btn-info m-3' onClick={getData}>Show data</button>

            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>User name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((item,index) => {
                        return(
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
        </div>
    )
}

export default ShowApidata
