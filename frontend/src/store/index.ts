import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
    auth,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type LoadingState =
    | 'idle' // (fetching not started yet)
    | 'loading' // (currently fetching the entity)
    | 'succeeded' // (entity fetched successfully)
    | 'lazy' // (entity is loaded firstly,)
    | 'failed'; // (entity failed to fetch)

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
