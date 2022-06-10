export type singleTaskType = {
  id: string
  title: string
  isDone: boolean
}
type initialStateType = singleTaskType[]
const initialState: initialStateType = []

type actionsType =
  ReturnType<typeof deleteTask>|
  ReturnType<typeof addTask>|
  ReturnType<typeof deleteAll>|
  ReturnType<typeof setIsDone>


export const taskReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case "APP/ADD-TASK":
      return [...state, {id:action.id, title:action.title, isDone:false}]
    case "APP/DELETE-TASK":
      return state.filter(el=>el.id!==action.id)
    case "APP/DELETE-ALL-TASKS":
      return []
    case "APP/SET-TASK-ISDONE":
      return state.map(el => el.id === action.id ? {...el, isDone: !el.isDone} : el)
    default:
      return {...state}
  }
}
export const addTask = (title: string,id: string) => ({type: 'APP/ADD-TASK', title,id} as const)
export const deleteTask = (id: string) => ({type: 'APP/DELETE-TASK', id} as const)
export const deleteAll = () => ({type: 'APP/DELETE-ALL-TASKS'} as const)
export const setIsDone = (id: string) => ({type: 'APP/SET-TASK-ISDONE', id} as const)
