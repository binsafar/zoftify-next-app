import {createSlice, Draft} from '@reduxjs/toolkit';

interface postState {
    posts: any
}

const initialState: postState = {
    posts: null
} as const;

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getAll: (state: Draft<typeof initialState>) => {
            state.posts = [{id: 1, name: 'name'}]
            console.log(state.posts)
        }
    }
});

export const {getAll} = postSlice.actions;
export default postSlice.reducer;