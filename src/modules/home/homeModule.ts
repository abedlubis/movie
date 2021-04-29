import { IModule } from 'redux-dynamic-modules';
import homeReducer from './reducers';
import { IHomeState } from './types';

export interface IHomeModuleOwnState {
  homeState: IHomeState;
}

export function getHomeModule(): IModule<IHomeModuleOwnState> {
  return {
    id: 'home',
    reducerMap: {
      homeState: homeReducer,
    } as any,
  };
}
