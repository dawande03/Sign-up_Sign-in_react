import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Header from './Header';

const Details = () => {
  const [userArr, setUserArr] = useState([]);
  const[userid,setUserID] = useState("");
  const [flag,setFlag] = useState(true)
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: ""
  })

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value })

  }
  // delete_USER
  const deletUser = (id)=>{
  const newarr = userArr.filter((item,index)=>{
    return(
      index != id
    )
   })
   setUserArr(newarr) 
  }

  // Edit_USER
  const editUser = (editid)=>{
    console.log(editid);
    setUserID(editid)
    setFlag(false)
  const newedit = userArr.filter((item,index)=>{
    return(
      index === editid
    )
   });
   setUser({
    username: newedit[0].username,
    email: newedit[0].email,
    mobile: newedit[0].mobile
  
  
  
  })
  }

  //update user
const userUpdate = ()=>{
  setFlag(true)
let uid = userid;
console.log(uid);
userArr[uid] = user
setUserArr(userArr);
setUser({
  username: "",
  email: "",
  mobile: ""
});
}

  // form submit
  const formSubmit = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user])
    console.log(userArr);
    setUser({
      username: "",
      email: "",
      mobile: ""
    });
  }  
  return (
    <div> 
      <Header/>
      <div className='container'>
        <form action="" onSubmit={formSubmit} >
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name='username' onChange={inputHandler} value={user.username} className='form-control' />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name='email' onChange={inputHandler} value={user.email} className='form-control' />
          </div>
          <div>
            <label htmlFor="">Mobile</label>
            <input type="number" name='mobile' onChange={inputHandler} value={user.mobile} className='form-control' />
          </div>
          {flag ? <span><button className='btn btn-success'>Submit</button></span>:""}
        </form>
        {flag==false ?<button className='btn btn-success' onClick={userUpdate}>Edit</button>:""}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              userArr.map((item,index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <button className='btn btn-info' onClick={() => editUser(index)}>Edit</button>
                      <button className='btn btn-danger ml-2' onClick={() => deletUser(index)}>Delete</button>
                    </td>
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
  
export default Details
