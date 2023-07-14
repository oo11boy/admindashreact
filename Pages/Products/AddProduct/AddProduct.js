import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddProduct() {

  const [Title,setTitle]=useState('')
  const [Price,setPrice]=useState('')
  const [File,setFile]=useState('')
  const [Body,setBody]=useState('')
  const TitleVal=(event)=>{
    setTitle(event.target.value)
  }
  const PriceVal=(event)=>{
    setPrice(event.target.value)
  }
  
  const Fileval = (event) => {
    const file = event.target.files[0]; 
  
    const imageURL = URL.createObjectURL(file);
  
    setFile(imageURL);
  };
  
  const BodyVal=(event)=>{
    setBody(event.target.value)
  }
  const submitHandler=  (event)=>{
    event.preventDefault()
    const InformProduct=[{
      title:Title,
      price:Price,
      file:File,
      body:Body
      
  }]

     fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Products.json`,{
      method:'POST',
   body: JSON.stringify(InformProduct)
    }).then((res)=>console.log(res))
setstatussub(true)
  }
  const [statussub,setstatussub]=useState(false)
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  value={Title} onChange={(event=>TitleVal(event))} placeholder="Enter FirstName" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={Price} onChange={(event=>PriceVal(event))} placeholder="Enter LastName" />
        <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control type="file" onChange={(event=>Fileval(event))} label="Check me out" />
        {File && (
  <img className=' img-thumbnail mt-3 ' style={{width:'200px', height:'100px' ,objectFit:"cover" }}  src={File} alt="Selected Image" />
)}
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" value={Body} onChange={(event=>BodyVal(event))} f aria-label="With textarea" />
          <Form.Text className="text-muted text-danger">
       Please write in input
        </Form.Text>
      </Form.Group>
    
      <Button onClick={submitHandler} variant="primary" type="submit">
        Submit
      </Button>
      {statussub ? <h3>submited</h3> : null}
    </Form>
  );
}

