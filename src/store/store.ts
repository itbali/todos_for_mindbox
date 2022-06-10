import {legacy_createStore as createStore,  combineReducers} from 'redux'
import {appReducer} from "./appReducer";
import {taskReducer} from "./todosReducer";


const rootReducer = combineReducers(
  {appReducer,taskReducer}
)
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
