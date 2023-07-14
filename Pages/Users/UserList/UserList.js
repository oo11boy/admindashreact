import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function UserList() {
  const [open, setOpen] = useState(false);
  const [statusaction,setstatusaction]=useState(false)
  const [datauser,setdatauser]=useState([])
  useEffect(() => {
    fetch('https://reactjs-40fe4-default-rtdb.firebaseio.com/Users.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) { // چک کنید که آیا مقدار data تهی نیست
          setdatauser(Object.entries(data));
        }
      });
  }, [statusaction]);
  const[editid,setidedit]=useState('')
const edititem=(idedit)=>{
  setidedit(idedit)
  // یافتن ردیف متناظر با idedit
  const rowData = rows.find((row) => row.id === idedit);

  // تنظیم مقادیر فعلی در متغیرهای مربوطه
  setFname(rowData.firstName);
  setLname(rowData.lastName);
  setEmail(rowData.email);
  setPassword(rowData.password);
  setOpen(true);
}
const handleClose = () => setOpen(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const removeitem=(id)=>{
   
    
        fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Users/${id}.json`,{
          method:'DELETE'
        })
        setstatusaction(!statusaction)
  }
  const columns = [
    
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'email',
      type: 'email',
      width: 130,
    },
    {
      field: 'password',
      headerName: 'password',
      type: 'password',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'action',
      type: 'text',
      renderCell: (params) => (
        <div>
          <button onClick={()=>removeitem(params.row.id)}>Delete</button>
          <button onClick={()=>edititem(params.row.id)}>Edit</button>
        </div>
      ),
      width: 130,
    },
  ];
  
  const rows = datauser.length > 0 ? datauser.map((item) => ({
    id: item[0],
    lastName: item[1][0].Lname,
    firstName: item[1][0].Fname,
    email: item[1][0].Email,
    password: item[1][0].Password,
  })) : [];
  
  console.log(datauser)

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
const submitHandler=async (event)=>{
  event.preventDefault()
  const informuser=[{
    Fname:FirstName,
    Lname:LastName,
    Email:Email,
    Password:Password
    
}]

 await fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Users/${editid}.json`,{
    method:'PUT',
 body: JSON.stringify(informuser)
  }).then((res)=>console.log(res))

  setOpen(false);
  setstatusaction(!statusaction)
}
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />




<div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              edit
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <Form>



                <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" value={FirstName} onChange={(event=>FirstNameVal(event))} placeholder="Enter FirstName" />
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
              </>
           
 
      <Button  variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </div>
  );
}