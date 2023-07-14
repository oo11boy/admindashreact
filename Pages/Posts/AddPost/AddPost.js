import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddPost() {


const [titlepost,settitlepost]=useState('')
const [bodypost,setbodypost]=useState('')
const [filepost,setfilepost]=useState('')
const titlepostvalue=(event)=>{
    settitlepost(event.target.value)
}
const bodypostvalue=(event)=>{
    setbodypost(event.target.value)
}
const filepostvalue=(event)=>{
    setfilepost(URL.createObjectURL(event.target.files[0]))
}
const submitposthandler=(event)=>{
    event.preventDefault()
   const informationpost=[{
  title:titlepost,
  bodypost:bodypost,
  filepost:filepost
   }]

    fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Posts.json`,{
        method:'POST',
        body:JSON.stringify(informationpost)
    }).then((res)=>console.log(res))

}
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={titlepost} onChange={(event)=>titlepostvalue(event)}  placeholder="Enter FirstName" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control type="file"  onChange={(event)=>filepostvalue(event)}  label="Check me out" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" value={bodypost} onChange={(event)=>bodypostvalue(event)}  aria-label="With textarea" />
          <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
    
      <Button variant="primary" onClick={submitposthandler} type="submit">
        Submit
      </Button>
    </Form>
  );
}

