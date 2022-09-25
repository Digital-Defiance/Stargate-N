import { uuid } from '../entities/_abstract';
export interface ChevronState {
    keys: uuid[];
    values?: unknown[];
}
declare const _default: import("redux").Reducer<ChevronState, import("redux").AnyAction>;
export default _default;
