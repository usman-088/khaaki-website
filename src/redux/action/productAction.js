
import { VIEW_PRODUCT,DELETE_PRODUCT_BY_CATEGORY} from "../constants/actionType";

export const View_Product = (product) => {
    return {
        type: VIEW_PRODUCT,
        payload: product,
    }
}

export const Delete_Product = (productId) => {
    // console.log('cat',productId)
    // console.log('product',productCAtegories)
    return {
        type: DELETE_PRODUCT_BY_CATEGORY,
        payload: productId,
    }
}

// export const Remove_Selected_Product = (Remove_Selected_product) => {
//     return {
//         type: REMOVE_SELECTED_PRODUCT,
//         payload: Remove_Selected_product,
//     }
// }