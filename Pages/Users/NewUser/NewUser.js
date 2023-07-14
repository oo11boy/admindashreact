import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewUsers() {

  const [FirstName,setFname]=useState('')
  const [LastName,setLname]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const FirstNameVal=(event)=>{
    setFname(event.target.value)
  }
  const LNameVal=(event)=>{
    setLname(event.target.value)
  }
  
  const Emailval=(event)=>{
    setEmail(event.target.value)
  }
  
  const PasswordVal=(event)=>{
    setPassword(event.target.value)
  }
  const submitHandler=(event)=>{
    event.preventDefault()
    const informuser=[{
      Fname:FirstName,
      Lname:LastName,
      Email:Email,
      Password:Password
      
  }]

    fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Users.json`,{
      method:'POST',
   body: JSON.stringify(informuser)
    }).then((res)=>console.log(res))
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text"  value={FirstName} onChange={(event=>FirstNameVal(event))} placeholder="Enter FirstName" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" value={LastName} onChange={(event=>LNameVal(event))} placeholder="Enter LastName" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={Email} onChange={(event=>Emailval(event))} placeholder="Enter email" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={Password} onChange={(event=>PasswordVal(event))} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={submitHandler} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

