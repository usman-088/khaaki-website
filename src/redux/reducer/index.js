
import firebase from '../../config/firebase'


function formProductData(data) {
    firebase.database().ref('/').child(`/Admin/Products`).push({
        title: data.title,
        price: data.price,
        description: data.description,
        imageURL: data.url,
        sizes: data.sizesArray,
        categories: data.CategoryArray
    });

    // console.log(data);
}

function UpdateformProductData(data,id) {
    console.log(data);
    firebase.database().ref('/').child(`/Admin/Products/${id}`).set({
        title: data.title,
        price: data.price,
        description: data.description,
        imageURL: data.url,
        sizes: data.sizesArray,
        categories: data.CategoryArray
    });

    // console.log(data);
}
function deleteProduct(id,imgURl){
    const storage = firebase.storage();
    storage.refFromURL(imgURl).delete()
    firebase.database().ref('/').child(`/Admin/Products/${id}`).remove()
}




export {
    formProductData,
    deleteProduct,
    UpdateformProductData,
}