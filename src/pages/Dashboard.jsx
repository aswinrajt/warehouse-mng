import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk, deleteProductThunk } from '../Redux/slices/productslice';
import { Row, Col } from 'react-bootstrap';
import Edit from '../components/Edit';
import AddProduct from '../components/AddProduct';



function Dashboard() {
    const { products, loading, error } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        dispatch(fetchProductThunk());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProductThunk(id));
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowEditModal(true);
    };

    if (loading) {
        return <p>Loading products......</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
           <Row>
    <Col xs={12} md={2}>
        <AddProduct />
    </Col>

    <Col xs={12} md={10}>
        <div className="table-responsive">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.product}</td>
                                <td>{product.stock}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button className='btn btn-info btn-sm' onClick={() => handleEdit(product)}>Edit</button>
                                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Col>
</Row>

<Edit 
    show={showEditModal} 
    handleClose={() => setShowEditModal(false)} 
    product={selectedProduct} 
/>

        </>
    );
}

export default Dashboard;
