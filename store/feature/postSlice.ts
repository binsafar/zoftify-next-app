import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../store";

interface postState {
    posts: any
}

const initialState: postState = {
    posts: null
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getAll: (state) => {
            state.posts = [{id: 1, name: 'name'}]
        }
    }
})

export const {getAll} = postSlice.actions;
export const {} = (state: RootState) => state;
export default postSlice.reducer;