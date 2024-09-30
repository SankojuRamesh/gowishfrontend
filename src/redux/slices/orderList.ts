import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
import { dispatch } from '../store';
import ApiAxios from '../../app/modules/auth/core/ApiAxios';
import { table } from 'console';

// ----------------------------------------------------------------------
type orderList = {}

type InitialState = {
    isLoading: boolean,
    orderList: orderList[],
    error: string,
}
const initialState: InitialState = {
    isLoading: false,
    error: '',
    orderList: [],
};

const slice = createSlice({
    name: 'orderList',
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

        // GET My Order List
        getOrderListSuccess(state, action: PayloadAction<orderList[]>) {
            state.isLoading = false;
            state.orderList = action.payload;
        },

    },
});

// Reducer
export default slice.reducer;

// Actions
// export const {
// } = slice.actions;

// ----------------------------------------------------------------------

export function getOrderList(userId: any) {
    return async () => {        
        
        try {
            const response = await ApiAxios.get(`/order_details/getByUserID/${userId}`);
            dispatch(slice.actions.getOrderListSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}


