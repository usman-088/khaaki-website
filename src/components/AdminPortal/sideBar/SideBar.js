import { Hidden } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div style={{ borderRight: '2px solid red', width: '20%', marginTop: 20 ,overflowY:'hidden',display:'inline-block'}}>
            <div>
                <img src='' />
                <h5>profile name</h5>
            </div>
            <div style={{ margin: 30 }}>
                <h3>PRODUCTS</h3>
                <div style={{ margin: 20, color: 'red', width: '100%' }}>
                    <Link to='addProduct' style={{ textDecoration: 'none' }}> <h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>ADD PRODUCTS</h5></Link>
                    <Link to='viewProduct' style={{ textDecoration: 'none' }}> <h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>VIEW PRODUCTS</h5></Link>
                    <Link to='updateProduct' style={{ textDecoration: 'none' }}><h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>UPDATE PRODUCTS</h5></Link>
                    <Link to='addProduct' style={{ textDecoration: 'none' }}><h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>DELETE PRODUCTS</h5></Link>
                </div>
            </div>
            <div style={{ margin: 30 }}>
                <h3>CATAGORY</h3>
                <div style={{ margin: 20, color: 'red', width: '100%' }}>
                    <Link to='addCatagory' style={{ textDecoration: 'none' }}> <h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>ADD CATAGORY</h5></Link>
                    <Link to='updateCatagory' style={{ textDecoration: 'none' }}> <h5 style={{ color: 'green', padding: 10, borderTop: '2px solid red' }}>UPDATE CATAGORY</h5></Link>
                </div>
            </div>
        </div>
    );
}

export default SideBar;