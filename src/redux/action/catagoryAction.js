
import { GET_CATEGORIES, UPDATE_CATEGORY,REMOVE_CATEGORY } from "../constants/actionType";

export const getcategory = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    }
}

export const UpdateCategory = (categories, id) => {
    return {
        type: UPDATE_CATEGORY,
        payload: { newCategory: categories, id }

    }
}

export const RemoveCategory = (id) => {
    return {
        type: REMOVE_CATEGORY,
        payload: id,
        
    }
}