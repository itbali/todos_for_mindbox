type appStateType = {
  isInit:boolean
}
type actionsType = ReturnType<typeof setInit>
const initialState:appStateType = {
  isInit:false
}
export const appReducer = (state:appStateType = initialState, action:actionsType):appStateType => {
  switch (action.type) {
    case "APP/SET-IS-INIT":
      return {...state, isInit: action.isInit}
    default:
      return {...state}
  }
}
export const setInit = (isInit:boolean) =>({
  type: 'APP/SET-IS-INIT',
  isInit
})
