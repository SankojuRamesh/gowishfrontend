import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//
import { dispatch } from '../store';
import ApiAxios from '../../app/modules/auth/core/ApiAxios';
import { table } from 'console';

// ----------------------------------------------------------------------
type myUsers = {}
type myUserById = {}

type InitialState = {
    isLoading: boolean,
    myUsers: myUsers[],
    myUserById: myUserById[],
    error: string,
}
const initialState: InitialState = {
    isLoading: false,
    error: '',
    myUsers: [],
    myUserById: [],
};

const slice = createSlice({
    name: 'myUsers',
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

        // GET My Users Details
        getMyUsersSuccess(state, action: PayloadAction<myUsers[]>) {
            state.isLoading = false;
            state.myUsers = action.payload;
        },

        // GET My User Details by user id
        getMyUserByIdSuccess(state, action: PayloadAction<myUserById[]>) {
            state.isLoading = false;
            state.myUserById = action.payload;
        },

    },
});

// Reducer
export default slice.reducer;

// Actions
// export const {
// } = slice.actions;

// ----------------------------------------------------------------------

export function getMyUsers(user_id: any) {
    return async () => {     
        try {
            const response = await ApiAxios.get(`/users/usermappingdata/${user_id}`);
            dispatch(slice.actions.getMyUsersSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getMyUserByUserId(user_id: any) {
    return async () => {        
        
        try {
            const response = await ApiAxios.get(`/user/userById/${user_id}`);
            dispatch(slice.actions.getMyUserByIdSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}


