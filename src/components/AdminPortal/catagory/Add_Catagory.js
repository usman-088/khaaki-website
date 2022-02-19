import React, { useState } from 'react';
import Update_Catagory from './Update_Catagory';
import firebase from '../../../config/firebase';


function Add_Catagory() {

    const [addCatagory, setAddCatagory] = useState('')

    const AddCatagoryToDatabase = () => {

        if (addCatagory) {
            firebase.database().ref('/').child(`/Admin/Category`).push({
                name: addCatagory,
            });
            // alert('catagory add succesfuly')
            setAddCatagory('')
        }
        // else alert('plz fill the required field')

    }

    return (
        <div>
            <div style={{ width: '60%', marginLeft: 350 ,marginTop:20}}>
                <h2>ADD NEW CATAGORY</h2>
                <div class="form-floating mb-3">
                    <input onKeyDown={(e) => { if (e.code === "Enter") { AddCatagoryToDatabase() } }} onChange={(e) => setAddCatagory(e.target.value)} value={addCatagory} type="text" class="form-control" placeholder="enter your catagory" />
                    <label for="floatingInput">Add Category</label>
                </div>
                <div class="input-group-append" style={{ margin: 10 }}>
                    <button onClick={AddCatagoryToDatabase} class="btn btn-outline-secondary" >Add Category</button>
                </div>
            </div>
            <div style={{ margin: '20px 0px 0px 300px' }}>
                <h3>CATEGORIES</h3>
                <Update_Catagory />
            </div>
        </div>
    );
}

export default Add_Catagory;