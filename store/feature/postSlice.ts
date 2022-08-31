import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface postState {
    posts: any,
    id: number
}

const initialState: postState = {
    id: 11,
    posts: [
        {
            id: 1,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'draft'
        },
        {
            id: 2,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'published'
        },
        {
            id: 3,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'draft'
        },
        {
            id: 4,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'published'
        },
        {
            id: 5,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'draft'
        },
        {
            id: 6,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'published'
        },
        {
            id: 7,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'draft'
        },
        {
            id: 8,
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            time: '2022-08-30T15:32',
            status: 'published'
        },
        {
            id: 9,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'draft'
        },
        {
            id: 10,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'published'
        },
        {
            id: 11,
            title: 'name',
            time: '2022-08-30T15:32',
            status: 'published'
        }
    ]
} as const;

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state: any, action: PayloadAction) => {
            state.id++
            state.posts.push({id: state.id, ...action.payload.newPost})
        },
        editPost: (state: any, action: PayloadAction) => {
            const {id, status} = action.payload;
            const existing = state.posts.find((post: any) => post.id == id)
            if (existing) {
                existing.status = status
            }
        }
    }
});
export const {addPost, editPost} = postSlice.actions;
export default postSlice.reducer;
