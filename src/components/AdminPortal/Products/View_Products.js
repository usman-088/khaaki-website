import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import firebase from '../../../config/firebase';
import { View_Product, Delete_Product } from '../../../redux/action/productAction';
import loadCategories from '../catagory/LoadCategory'
import { deleteProduct } from '../../../redux/reducer/index'
import { Link } from 'react-router-dom';
import './veiwProduct.css'

function View_Products() {

    const product = useSelector(state => state.allProducts)
    const categories = useSelector(state => state.AllCategories)
    const history = useHistory();
    // console.log(product);

    const dispatch = useDispatch()
    useEffect(() => {
        firebase.database().ref('/').child(`/Admin/Products`)
            .on('value', function (data) {
                dispatch(View_Product(data.val()))
            })
        loadCategories(dispatch)

    }, [])



    return (
        <div style={{ marginLeft: 300, marginTop: 20, display: 'flex' }}>
            <div className="container ">
                <div className="row">
                    {
                        Object.keys(categories || {})?.map((cat, ind) => {
                            return <>
                                <h1 key={ind}>{categories[cat]?.name}</h1>
                                {
                                    Object.keys(product || {})?.map((v, i) => {
                                        // console.log('cat',cat);
                                        if (!product?.[v]?.categories?.find((e) => e == cat)) {
                                            return
                                        }
                                        return <div className="col-md-3 col-sm-6" key={i} style={{ minWidth: 300 }}>
                                            <div className="product-grid">
                                                <div className="product-image">
                                                    <Link to='/productDescription' className="image">
                                                        <img style={{
                                                            height: 230,
                                                            objectFit: "contain",
                                                        }} src={product[v].imageURL} />
                                                    </Link>
                                                    <div className="price fixed"> Rs.{product[v].price} </div>
                                                    {/* <a href="#" className="add-to-cart"> add to cart </a> */}
                                                </div>
                                                <div className="product-content">
                                                    <h3 className="title"><a href="#">{product[v].title}</a></h3>
                                                </div>
                                                <div className=''>
                                                    <button class="btn btn-outline-danger m-1" onClick={() => deleteProduct(v, product[v].imageURL)} >Delete</button>
                                                    <button class="btn btn-outline-primary" onClick={() => {
                                                        history.push(`/product/${v.slice(1,5)}`)
                                                    }} >Update</button>
                                                </div>
                                                <div>
                                                    {categories?.[cat]?.name}
                                                </div>
                                                {/* <ul className="rating">
                                                        <li className="fas fa-star"></li>
                                                        <li className="fas fa-star"></li>
                                                        <li className="fas fa-star"></li>
                                                        <li className="fas fa-star"></li>
                                                        <li className="far fa-star"></li>
                                                    </ul> */}
                                            </div>
                                        </div>
                                    })
                                }
                            </>
                        })

                    }{

                    }
                </div>
            </div>
        </div>
    );
}

export default View_Products;