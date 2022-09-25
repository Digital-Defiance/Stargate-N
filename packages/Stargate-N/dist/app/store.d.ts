export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    chevron: import("./chevronSlice").ChevronState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    chevron: import("./chevronSlice").ChevronState;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
