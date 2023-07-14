
import { useState, useEffect, React } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { json } from 'react-router-dom';

export default function ListProduct() {
  const [statusact, setstatusaction] = useState(false)
  const [InformProduct, setinformproduct] = useState([])
  useEffect(() => {
    fetch(`https://reactjs-40fe4-default-rtdb.firebaseio.com/Products.json`).then((res) => {
      return res.json()
    }).then((data) => {
      setinformproduct(Object.entries(data))
    })
  }, [statusact])
  const removeitem = (id) => {
    fetch(`https://reactjs-40fe4-default-rtdb.firebaseio.com/Products/${id}.json`, {
      method: 'DELETE'
    })
    setstatusaction(!statusact)
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'price', headerName: 'price', width: 130 },
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
          <button onClick={() => removeitem(params.row.id)} className='btn btn-danger'>*</button>
          <button  onClick={() => edititem(params.row.id)}  className='btn btn-info'>/</button>
        </div>
      ),
    },

  ];
  const [editid,seteditid]=useState('')
  const edititem = (iditem) => {
    seteditid(iditem);
    setOpen(true);
  console.log(iditem)
    const product = InformProduct.find((item) => item[0] === iditem);
  
  setTitle(product[1][0].title)
      setPrice(product[1][0].price);
      setFile(product[1][0].file);
      setBody(product[1][0].body);
    
  };
const submitHandler= async (event)=>{
  event.preventDefault()
  
  const itemeditproduct=[{
    title:Title,
    price:Price,
    file:File,
    body:Body
  }]
   await fetch (`https://reactjs-40fe4-default-rtdb.firebaseio.com/Products/${editid}.json`,{
      method:"PUT",
      body:JSON.stringify(itemeditproduct)
    })
    setOpen(false)
    setstatusaction(true)
}
  const rows = InformProduct.length > 0 ? InformProduct.map((item) => ({
    id: item[0],
    name: item[1][0].title,
    price: item[1][0].price,
    img: item[1][0].file

  })) : []

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
  const [Title, setTitle] = useState('')
  const [Price, setPrice] = useState('')
  const [File, setFile] = useState('')
  const [Body, setBody] = useState('')
  const TitleVal = (event) => {
    setTitle(event.target.value)
  }
  const PriceVal = (event) => {
    setPrice(event.target.value)
  }

  const Fileval = (event) => {
    const file = event.target.files[0];

    const imageURL = URL.createObjectURL(file);

    setFile(imageURL);
  };

  const BodyVal = (event) => {
    setBody(event.target.value)
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
                  <Form.Control type="text" value={Title} onChange={(event => TitleVal(event))} placeholder="Enter FirstName" />
                  <Form.Text className="text-muted text-danger">
                    Please write in input
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" value={Price} onChange={(event => PriceVal(event))} placeholder="Enter LastName" />
                  <Form.Text className="text-muted text-danger">
                    Please write in input
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control type="file" onChange={(event => Fileval(event))} label="Check me out" />
                  {File && (
                    <img className=' img-thumbnail mt-3 ' style={{ width: '200px', height: '100px', objectFit: "cover" }} src={File} alt="Selected Image" />
                  )}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Label>Body</Form.Label>
                  <Form.Control as="textarea" value={Body} onChange={(event => BodyVal(event))} f aria-label="With textarea" />
                  <Form.Text className="text-muted text-danger">
                    Please write in input
                  </Form.Text>
                </Form.Group>

                <Button onClick={submitHandler} variant="primary" type="submit">
                  Submit
                </Button>
            
              </Form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}