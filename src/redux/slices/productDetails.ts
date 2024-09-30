import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
import { dispatch } from '../store';
import ApiAxios from '../../app/modules/auth/core/ApiAxios';
import { table } from 'console';

// ----------------------------------------------------------------------
type productDetails = {}
type productOptions = {}
type categoryById = {}
type subCategoryImg = {}

type InitialState = {
    isLoading: boolean,
    productDetails: productDetails[],
    productOptions: productOptions[],
    categoryById: categoryById[],
    subCategoryImg: subCategoryImg[]
    error: string,
}
const initialState: InitialState = {
    isLoading: false,
    error: '',
    productDetails: [],
    productOptions: [],
    categoryById: [],
    subCategoryImg: []
};

const slice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        // GET Product Details
        getProductDetailsSuccess(state, action: PayloadAction<productDetails[]>) {
            state.isLoading = false;
            state.productDetails = action.payload;
        },

        // GET Product Options
        getProductOptionsSuccess(state, action: PayloadAction<productOptions[]>) {
            state.isLoading = false;
            state.productOptions = action.payload;
        },

        // GET Product Options
        getCategoryByIdSuccess(state, action: PayloadAction<categoryById[]>) {
            state.isLoading = false;
            state.categoryById = action.payload;
        },

        // GET Product Options
        getSubCategoryImgSuccess(state, action: PayloadAction<subCategoryImg[]>) {
            state.isLoading = false;
            state.subCategoryImg = action.payload;
        },

    },
});

// Reducer
export default slice.reducer;

// Actions
// export const {
// } = slice.actions;

// ----------------------------------------------------------------------

export function getProductDetails(productId: any) {
    return async () => {        
        try {
            const response = await ApiAxios.get(`/products/product/${productId}`);
            dispatch(slice.actions.getProductDetailsSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

// ----------------------------------------------------------------------

export function getProductOptions(productId: any) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await ApiAxios.get(`/productoptions/getByProductID/${productId}`);
            dispatch(slice.actions.getProductOptionsSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

// export function getCategoryById(productId: any) {
//     return async () => {
//         console.log(productId);
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await ApiAxios.get(`/categories/categoriesByProductId/${productId}`);
//             dispatch(slice.actions.getCategoryByIdSuccess(response.data));
//         } catch (error) {
//             console.error(error);
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function getSubCategoryImg(productId: any) {
//     return async () => {
//         console.log(productId)
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await ApiAxios.get(`/categories/categoriesByProductId/${productId}`);
//             dispatch(slice.actions.getSubCategoryImgSuccess(response.data));
//         } catch (error) {
//             console.error(error);
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }
