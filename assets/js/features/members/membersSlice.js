import { createSlice } from '@reduxjs/toolkit';

//State global
const initialState = {
    members: {},
    loading: false,
    error: false
}

export const membersSlice = createSlice({
    name: 'members',
    initialState,
    //modifie le state lors d'une action
    reducers: {

        getLoading: state => {
            state.loading = true
        },
        getMembersSuccess: (state, action) => {
            state.members = action.payload
            state.loading = false
            state.errors = false
        },
        getFailure: state => {
            state.loading = false
            state.errors = true
        }
    }
});

// export des actions au composant
export const { getLoading, getMembersSuccess, getFailure} = membersSlice.actions;

// export du REDUCER
export default membersSlice.reducer;

// fonction thunk (une fonction 'thunk' permet de faire une logique asynchrone).
export function fetchArticle(params) {
    return async dispatch => {
        dispatch(getLoading())

        // fetch(process.env.REACT_APP_API_URL + params)
        fetch('http://127.0.0.1:8000/api' + params)
            .then(response => response.json())
            .then(data => dispatch(getArticleSuccess(data)))
            .catch(error => dispatch(getFailure(error)))
    }
}

// SELECTOR (exporte le state pour être récupéré dans un composant avec le hook useSelector() )
export const selectMembers = state => members
