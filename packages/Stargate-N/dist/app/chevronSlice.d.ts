import type { PayloadAction } from '@reduxjs/toolkit';
interface ChevronState {
    value: any;
}
export declare const chevronSlice: import("@reduxjs/toolkit").Slice<ChevronState, {
    setState: (state: import("immer/dist/internal").WritableDraft<ChevronState>, action: PayloadAction<any>) => void;
}, "chevronSlice">;
export {};
