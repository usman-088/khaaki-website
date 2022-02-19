import React from 'react';
import firebase from '../../../config/firebase';
import { getcategory } from '../../../redux/action/catagoryAction';

const loadCategories = (dispatch) => {
    // const dispatch = useDispatch()
    const db = firebase.database().ref('/').child(`/Admin/Category`)
    db.on('value', function (data) {
        dispatch(getcategory(data.val()))
    })

}

export default loadCategories;