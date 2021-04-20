import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '../state/types';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;