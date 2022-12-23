import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { useNavigate } from "react-router-dom";
import Header from './Header';

const Login = () => {
    const navigate = useNavigate()
    const [loginData, setlogData] = useState({
        email: "",
        password: ""
    })
    const getData = (event) => {
        const { name, value } = event.target
        setlogData({ ...loginData, [name]: value })

    }
    const addData = (event) => {
        event.preventDefault();
        const getuserArr = localStorage.getItem("signupUserData")
        console.log(getuserArr);
        const { email, password } = loginData
        if (email === "") {
            alert("email is require")
        } else if (password.length < 5) {
            alert("password length not match")
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr)
                const logindata = userdata.filter((item, index) => {
                    return (item.email === email && item.password === password)
                })
                console.log(logindata);
                if (logindata.length === 0) {
                    alert("Invalid user")
                }else {
                    console.log("login succesfulS");
                    alert("login succesful")
                    navigate("/details")
                }
            }
        }
    }
    return (
        <div>
            
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-3 p-6" style={{ width: "100%" }}>
                        <h3 className="col-lg-8 mt-5 text-center">Login</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-8 mt-3" controlId="formBasicEmail">
                                <Form.Control type="email" onChange={getData} placeholder="Your email" name="email" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Control type="password" onChange={getData} name="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mb-3 col-lg-8" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </div>
    )
}

export default Login
