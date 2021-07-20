import { configureStore } from '@reduxjs/toolkit';
import membersReducer from 'features/members/membersSlice';

export default configureStore({
    reducer: {
        members: membersReducer
    },
});


