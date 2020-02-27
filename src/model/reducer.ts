import { IPerson } from '../models';
import { IPersonsDataAction } from './actions';
import {
  PERSONS_DATA_FAILURE,
  PERSONS_DATA_REQUEST,
  PERSONS_DATA_SUCCESS,
  ADD_FAVOURITE,
} from './types';

export interface IPersonsStoreState {
  personsingValue: string;
  persons: IPerson[];
  isLoading: boolean;
  favourite: number[];
}

const initialState: IPersonsStoreState = {
  personsingValue: '',
  persons: [],
  isLoading: false,
  favourite: [],
};

export function reducer(
  state: IPersonsStoreState = initialState,
  action: IPersonsDataAction,
): IPersonsStoreState {
  switch (action.type) {
    case PERSONS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        persons: [],
      };
    case PERSONS_DATA_SUCCESS:
      const persons = action.payload;
      return {
        ...state,
        isLoading: false,
        persons,
      };
    case PERSONS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        persons: [],
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        isLoading: false,
        persons: [],
        favourite: [],
      };
    default:
      return state;
  }
}
