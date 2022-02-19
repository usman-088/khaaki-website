import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import firebase from '../../../config/firebase';
// import { getcategory } from '../../../redux/action/catagoryAction';
import UpdatecategoryCard from './UpdateCategoryCard';
import loadCategories from './LoadCategory';


function Update_category() {
    const category = useSelector(state => state.AllCategories)
    const dispatch = useDispatch();
    useEffect(() => {
        loadCategories(dispatch)
    }, [])

    return (
        <div >
            <div>
                {
                    Object.keys(category || {})?.map((v, i) => {
                        return <UpdatecategoryCard key={v} category={category[v]} id={v} />
                    })
                }
                {/* <button onClick={()=>console.log(category)}>show current categories</button> */}

                {/* <LoadCategory loadCategories={loadCategories} /> */}
            </div>
        </div>
    );
}

export default Update_category;