import {legacy_createStore as createStore,  combineReducers} from 'redux'
import {appReducer} from "./appReducer";
import {tasksReducer} from "./tasksReducer";


const rootReducer = combineReducers(
  {appReducer,tasksReducer}
)
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
