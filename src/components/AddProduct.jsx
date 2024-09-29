import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../Redux/slices/productslice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function AddProduct() {
    const [product, setProduct] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            product,
            stock,
            price,
        };
        dispatch(addProductThunk(newProduct));
        setProduct('');
        setStock('');
        setPrice('');
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (


        <>
        <button className='btn btn-primary m-2' onClick={handleShow} >
            ADD PRODUCT {" "}
        <i className="fa-solid fa-square-plus fa-xl" beatFade style={{color: "#00619e",}} />  
      </button>








<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <form>
            <div>
                <label>Product:</label>
                <input className='form-control'
                    type="text" 
                    value={product} 
                    onChange={(e) => setProduct(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Stock:</label>
                <input 
                className='form-control'
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Price:</label>
                <input 
                className='form-control'
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
            </div>
           
        </form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add Product</Button>
        </Modal.Footer>
      </Modal>

      </>
    











        
    );
}

export default AddProduct;
