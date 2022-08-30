import {createSlice, Draft} from '@reduxjs/toolkit';

interface postState {
    posts: any,
    id: number
}

const initialState: postState = {
    id: 2,
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
            title: 'name',
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
    ]
} as const;

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addOne: (state) => {
            state.id++;
            state.posts.push({
                id: state.id,
                title: 'name',
                time: '',
                status: ''
            })
        }
    }
});

export const {addOne} = postSlice.actions;
export default postSlice.reducer;