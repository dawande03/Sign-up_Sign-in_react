import axios from 'axios'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CallApiOnclick = () => {
    const [inputUser, setinputUser] = useState("");
    const [apiData, setApdata] = useState({})

    const url = `https://api.github.com/users/${inputUser}`

    const inputHandler = (e) => {
        setinputUser(e.target.value)

    }
    const onFormsubmmit = async (e) => {
        const res = await axios.get(url)
        setApdata(res.data)
        console.log(res);

        e.preventDefault()

        setinputUser("")
        console.log(inputUser);
    }
    return (
        <>
            <div className='container'>
                <form className='form-group mt-2' onSubmit={onFormsubmmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' onChange={inputHandler} value={inputUser} className='form-control' />
                    <div><button className='btn btn-info mt-2'>Click</button></div>
                </form>
                <div>
                    <Card style={{ width: '18rem' }} className="mt-3">
                        <Card.Img variant="top" src={apiData.avatar_url} />
                        <Card.Body>
                            <Card.Title>{apiData.name}Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Name : {apiData.login}</ListGroup.Item>
                            <ListGroup.Item>ID: {apiData.name}</ListGroup.Item>
                            <ListGroup.Item>RootPassword:{apiData.node_id}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
export default CallApiOnclick