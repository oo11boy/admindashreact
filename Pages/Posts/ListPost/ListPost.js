
import { useState, useEffect, React } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListPost() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 130 },
    { field: 'body', headerName: 'body', width: 130 },
    {
      field: 'img',
      headerName: 'img',
      type: 'image',
      width: 90,
      renderCell: (params) => (
        <div>
          <img src={params.row.img} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
      ),
    },
    {
      field: 'action',
      headerName: 'action',
      type: 'action',
      width: 130,
      renderCell: (params) => (
        <div>
          <button onClick={()=>removecell(params.row.id)} className='btn btn-danger'>*</button>
          <button onClick={()=>editcell(params.row.id)}  className='btn btn-info'>/</button>
        </div>
      ),
    },

  ];
  const [statuschange,setstatuschange]=useState(false)
  // see posts
const [datapost,setdatapost]=useState([])
  useEffect(async ()=>{
await fetch(`https://reactjs-40fe4-default-rtdb.firebaseio.com/Posts.json`).then((res)=>{
    return res.json()
}).then((data)=>[
    setdatapost(Object.entries(data))
])
setispending(false)
  },[statuschange])
  
  const rows = datapost.length > 0 ? datapost.map((item) => ({
    id: item[0],
    title: item[1][0].title,
    body: item[1][0].bodypost,
    file: item[1][0].filepost

  })) : []


//edit posts
const [idedit,setidedit]=useState('')
const editcell=(id)=>{

    setidedit(id)
setOpen(true)
const postinform=datapost.find((posts)=>posts[0]===id)
settitlepost(postinform[1][0].title)
setbodypost(postinform[1][0].bodypost)
}

const [titlepost,settitlepost]=useState('')
const [bodypost,setbodypost]=useState('')
const titlepostvalue=(event)=>{
    settitlepost(event.target.value)
}
const bodypostvalue=(event)=>{
    setbodypost(event.target.value)
}
const [ispending,setispending]=useState(true)
const submitposthandler=async (event)=>{
event.preventDefault()
    const editnewposts=[{
        title:titlepost,
        bodypost:bodypost
    }]
 await   fetch(`https://reactjs-40fe4-default-rtdb.firebaseio.com/Posts/${idedit}.json`,{
        method:'PUT'
        ,body:JSON.stringify(editnewposts)
    })
 
    setOpen(false)
    setstatuschange(!statuschange)
}
// remove post

const removecell=(id)=>{
    fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Posts/${id}.json`,{
        method:'DELETE'
    })
    setstatuschange(!statuschange)
}

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
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
<>
    {ispending===true?<h2>loading...</h2> :   <div style={{ height: 400, width: '100%' }}>
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
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" value={titlepost} onChange={(event)=>titlepostvalue(event)}  placeholder="Enter FirstName" />
      <Form.Text className="text-muted text-danger">
     Please write in input
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control type="file"  label="Check me out" />

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
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>}

</>
 
  );
}