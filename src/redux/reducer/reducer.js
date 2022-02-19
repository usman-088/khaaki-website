import { GET_CATEGORIES, UPDATE_CATEGORY, REMOVE_CATEGORY, DELETE_PRODUCT_BY_CATEGORY, VIEW_PRODUCT } from "../constants/actionType";

const INITIAL_STATE = {
    allProducts: ['kdsgaksdadsfasdfddcds'],
    AllCategories: {},
    // product: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    // console.log(type,payload);
    switch (type) {

        case GET_CATEGORIES:
            return {
                ...state,
                AllCategories: payload,

            }
        case UPDATE_CATEGORY:
            const updatedCategories = { ...state.AllCategories }
            updatedCategories[payload.id].name = payload.newCategory

            return {
                ...state,
                AllCategories: { ...updatedCategories },

            }
        case REMOVE_CATEGORY:
            const RemoveCategories = { ...state.AllCategories }
            delete RemoveCategories[payload]
            // console.log(RemoveCategories)
            return {
                ...state,
                AllCategories: { ...RemoveCategories },
            }

        case VIEW_PRODUCT:
            return {
                ...state,
                allProducts: payload
            }
        case DELETE_PRODUCT_BY_CATEGORY:
            const products = { ...state.allProducts }
            console.log(products)
            console.log(payload)
            //   const categoryID =  products
            // return {
            //     ...state,
            //     product: payload
            // }
        default:
            return state;
    }


}