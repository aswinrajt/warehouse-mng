

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editProductThunk } from '../Redux/slices/productslice';
import { toast } from 'react-toastify';

function Edit({ show, handleClose, product }) {
    const [editData, setEditData] = useState({
        product: '',
        stock: '',
        price: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setEditData({
                product: product.product,
                stock: product.stock,
                price: product.price
            });
        }
    }, [product]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...editData, id: product.id }; 
        dispatch(editProductThunk(updatedProduct)); 
        handleClose(); 
        
        
        
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleEditSubmit}>
                    <div>
                        <label>Product:</label>
                        <input 
                            className='form-control'
                            type="text"
                            value={editData.product}
                            onChange={(e) => setEditData({ ...editData, product: e.target.value })}
                            required 
                        />
                    </div>
                    <div>
                        <label>Stock:</label>
                        <input 
                            className='form-control'
                            type="number"
                            value={editData.stock}
                            onChange={(e) => setEditData({ ...editData, stock: e.target.value })}
                            required 
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input 
                            className='form-control'
                            type="number"
                            value={editData.price}
                            onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                            required 
                        />
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit">Update</Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default Edit;
