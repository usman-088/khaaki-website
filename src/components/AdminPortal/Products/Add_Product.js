import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import loadCategories from '../catagory/LoadCategory';
import { formProductData, UpdateformProductData } from '../../../redux/reducer/index'
import firebase from '../../../config/firebase';
import { useParams } from 'react-router';


export default function Products() {

    const categories = useSelector(state => state.AllCategories)
    const [sizesArray, setSizesArray] = useState([])
    const [sizes, setSizes] = useState('S')
    const [CategoryArray, setCategoryArray] = useState([])
    const [Category, setCategory] = useState()
    const [imagePreview, setimagePreview] = useState('');
    const [image, setImage] = useState(null);
    const [addNewProduct, setAddNewProduct] = useState(true)
    // forms get value for backend
    let { id } = useParams()
    const product = useSelector(state => state.allProducts?.[id])

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    // console.log(CategoryArray);


    const submitForm = async () => {
        if (image == null && addNewProduct)
            return;
        else if (image != null) {
            try {
                const storage = firebase.storage();
                storage.ref(`/images/${image.name}`).put(image)

                const res = await storage.ref(`/images/${image.name}`).getDownloadURL()
                if (addNewProduct) formData(res)
                else updateFormData(res)
            }
            catch (error) {
                console.log(error)
            }
            return
        }
        else if (!addNewProduct) {
            updateFormData(imagePreview)
        }
    }

    const formData = (url) => {
        const data = {
            title,
            price,
            description,
            url,
            sizesArray,
            CategoryArray,
        }
        formProductData(data)
    }
    const updateFormData = (url) => {
        const data = {
            title,
            price,
            description,
            url,
            sizesArray,
            CategoryArray,
        }
        UpdateformProductData(data, id)
    }


    useEffect(() => {
        loadCategories(dispatch)
        setCategory(Object.keys(categories)[0])
        if (id && product) {
            setAddNewProduct(false)
            setTitle(product?.title)
            setDescription(product?.description)
            setimagePreview(product?.imageURL)
            setPrice(product?.price)
            setCategoryArray(product?.categories)
            setSizesArray(product?.sizes)
            // console.log(product?.imageURL);
        }
        else {
            setAddNewProduct(true)
            setTitle('')
            setDescription('')
            setimagePreview('')
            setPrice('')
            setCategoryArray([])
            setSizesArray([])
        }

        // else {
        // setimagePreview(null)
        // }




    }, [id])

    const addSizes = () => {
        const sizeArray = [...sizesArray]
        sizes === '' ? alert('empty') :
            sizeArray.find(e => e == sizes) == undefined ? sizeArray.push(sizes) : alert('alredy')
        setSizesArray(sizeArray)
    }
    const addCategory = () => {
        const categoryArray = [...CategoryArray]
        if (!Category) {
            console.log('empty')
            return
        }
        categoryArray.find(e => e == Category) === undefined ? categoryArray.push(Category) : alert('alredy')
        categoryArray.sort()
        setCategoryArray(categoryArray)
    }


    const removeSize = (index) => {
        const newSizes = [...sizesArray];
        newSizes.splice(index, 1)
        setSizesArray(newSizes)

    };

    const removeCategory = (index) => {
        const newCategory = [...CategoryArray];
        newCategory.splice(index, 1)
        setCategoryArray(newCategory)
    }

    const imageView = (e) => {
        const file = e.target.files[0]
        if (file && file.type.substr(0, 5) === 'image') {
            setImage(file)
        }
        if (file) {
            const render = new FileReader()
            render.onloadend = () => {
                setimagePreview(render.result)
            }
            render.readAsDataURL(file)

        }
        else setImage(null)

    }

    // const removeSelectedImage = () => {
    //     setImage('')
    //     setimagePreview('')
    // }

    return (
        <div className="content" style={{ marginLeft: 300, width: '50%' }}>
            {/* <nav className="nav navbar-nav navbar-default"> */}
            <h3> Add Products </h3>
            <div className="container-fluid">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="name@example.com" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label for="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <label for="floatingInput">Price</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Start here..." style={{ height: "100px" }} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
                <p>Image</p>
                <div className="input-group d-flex ">
                    <div className="custom-file btn btn-outline-secondary">
                        <input type="file" accept='image/*' onChange={imageView} />
                    </div>
                    {/* <button className='btn btn-outline-secondary' onClick={() => removeSelectedImage()} >Remove image</button> */}
                    {
                        imagePreview ?
                            <img src={imagePreview} style={{ width: '50%', height: '50%' }} /> :
                            <p>Please upload Image</p>
                    }
                </div>
                <div >
                    <div className="form-floating" style={{ margin: '20px 20px 10px 0px', display: 'flex', }}>
                        <select className="form-select" onChange={(e) => setSizes(e.target.value)} style={{ width: '50%', borderRadius: 2 }} >
                            <option value='S'>Small</option>
                            <option value='M'>Medium</option>
                            <option value='L'>Large</option>
                            <option value='XL'>Xlarge</option>
                        </select>
                        <label for="floatingSelect">Select Size</label>
                        <div className="input-group-append" style={{ margin: 10 }}>
                            <button onClick={addSizes} className="btn btn-outline-secondary"  >Add Size</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%' }}>
                        {
                            sizesArray?.map((v, i) => {
                                return <div key={i} style={{ margin: 10, boxShadow: ' 7px 9px 23px -8px rgba(31,26,26,0.63)', height: 40, padding: 10, width: "auto" }}>
                                    <span>{v}</span>
                                    <i onClick={() => removeSize(i)} style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }} className="bi bi-trash-fill"></i>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <div className="form-floating" style={{ margin: '0px 20px 20px 0px', display: 'flex' }}>
                            <select className="form-select" onChange={(e) => setCategory(e.target.value)} style={{ width: '50%', borderRadius: 4 }} >
                                {
                                    Object.keys(categories || {})?.map((v, i) => {
                                        return <option key={i} value={v}>{categories[v].name}</option>
                                    })
                                }
                            </select>
                            <label for="floatingSelectGrid">Select Category</label>
                            <div className="input-group-append" style={{ margin: 10 }}>
                                <button onClick={addCategory} className="btn btn-outline-secondary" >Add Category</button>
                            </div>

                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            {
                                CategoryArray.map((e, i) => {
                                    return <div key={i} style={{ margin: 10, boxShadow: ' 7px 9px 23px -8px rgba(31,26,26,0.63)', height: 40, padding: 10, width: "auto", display: 'flex' }}>
                                        <span>{categories[e]?.name}</span>
                                        <i onClick={() => removeCategory(i)} style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }} className="bi bi-trash-fill"></i>
                                    </div>
                                })}
                        </div>
                    </div>
                </div>
                {
                    addNewProduct ?
                        <button onClick={submitForm} className="btn btn-outline-success" style={{ width: '50%' }}>Submit</button> :
                        <button onClick={submitForm} className="btn btn-outline-success" style={{ width: '50%' }}>Update</button>
                }

            </div>
            {/* </nav> */}
        </div>
    );
}
