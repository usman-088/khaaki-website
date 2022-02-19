import { useState, useEffect } from "react";
import firebase from "../../../config/firebase";
import { useDispatch } from 'react-redux'
import { UpdateCategory, RemoveCategory } from "../../../redux/action/catagoryAction";
// import loadCategories from './LoadCategory'
// import Add_Products from'../Products/Add_Product'

function UpdateCatagoryCard({ category, id }) {
    const [categoryName, setCategoryName] = useState(category?.name);
    const [isDisbale, setDisable] = useState(true)
    const dispatch = useDispatch();
    // const removeDispatch = useDispatch();
    const setCategory = () => {
        firebase.database().ref('/').child(`/Admin/Category/${id}`).set({
            name: categoryName,
        });
        dispatch(UpdateCategory(categoryName, id))
        setDisable(true)
    }

    // useEffect(()=>{

    // },[])
    const removeCategory = () => {
        // alert('are you sure')
        firebase.database().ref('/').child(`/Admin/Category/${id}`).remove()
        dispatch(RemoveCategory(id))
        // loadCategories()
    }

    const disable = () => {
        setDisable(false)
    }
    return (
        <div style={{width:'80%',marginLeft:40 }}>
            <div style={{ display: 'flex' }}>

                <input onKeyDown={(e) => { if (e.code === "Enter") { setCategory() } }}
                    disabled={isDisbale}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    style={{ height: 40, padding: 20, margin: 10,width:'80%'}}
                    type="text" />

                {

                    isDisbale == true ? <button onClick={disable} className="btn btn-outline-secondary" style={{ height: 40, margin: '12px 0px 0px 20px ' }} title='Edit' ><i className="bi bi-pencil-square"></i></button> :
                        <div style={{ margin: '12px 0px 0px 0px ' }}>
                            <button onClick={setCategory} className="btn btn-outline-primary" style={{ cursor: 'pointer', marginLeft: 10 }} title='Update' ><i className="bi bi-gear-fill"></i></button>
                            <button onClick={removeCategory} className="btn btn-outline-danger" style={{ cursor: 'pointer', marginLeft: 10 }} title='Delete' ><i className="bi bi-trash-fill"></i></button>
                        </div>
                }


            </div>
            {/* <button onClick={removeCategory} className="btn btn-outline-danger"  style={{ color: 'blue', cursor: 'pointer', marginLeft: 20 }} title='delete' ><i className="bi bi-trash-fill"></i></button> */}
            {/* <i onClick={disable} className="bi bi-pencil-square" style={{ color: 'blue', cursor: 'pointer', margin: '20px 0px 0px 20px ', borderRadius: 4 }} title='edit' ></i> */}
        </div>
    )
}

export default UpdateCatagoryCard