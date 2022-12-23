import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import Nav from 'react-bootstrap/Nav';
import Header from "./Header";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    date: "",
    password: ""
  })
  const [userData, setUserData] = useState([])
  const getData = (event) => {
    const { value, name } = event.target
    setInputVal(() => {
      return {
        ...inputVal, [name]: value
      }
    })
  }

  //onClick addData
  const addData = (event) => {
    <Header/>
    event.preventDefault()

    //validation
    const { name, email, date, password } = inputVal

    if (name === "") {
      alert("name field is required")
    } else if (email === "") {
      alert("name field is required")
    } else if (!email.includes('@')) {
      alert("please enter valid emial")
    } else if (password.length < 5) {
      alert('password length is more the or 5')
    }
    else {
      localStorage.setItem("signupUserData", JSON.stringify([...userData,inputVal]))
      console.log("data is succcesfully added")
      alert("Registered")
      setInputVal({
        name: "",
    email: "",
    date: "",
    password: ""
      })
      // const preData = JSON.parse(localStorage.getItem("signupUserData"))
      // console.log(preData);
    }

  }

  return (
    <div className="container">
      <section className="d-flex justify-content-between">
        <div className="left_data" style={{ width: "100%" }}>
          <h3 className="col-lg-8 mt-5 text-center">Sign up</h3>
          <Form>

            <Form.Group className="mb-3 col-lg-8 mt-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                onChange={getData}
                placeholder="Your email"
                name="email"
                value={inputVal.email}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={getData}
                placeholder="Your Name"
                name="name"
                value={inputVal.name}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="date"
                onChange={getData}
                placeholder=""
                name="date"
                value={inputVal.date}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
              <Form.Control
                type="password"
                onChange={getData}
                name="password"
                placeholder="Password"
                value={inputVal.password}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3 col-lg-8" onClick={addData}>
              Submit
            </Button>
          </Form>
          <p>
            Already have an Account <span><NavLink to="/login">Sign In</NavLink></span>
          </p>
        </div>
        <div>
          <Sign_img />
        </div>
      </section>

    </div>
  );
}

export default Home;
