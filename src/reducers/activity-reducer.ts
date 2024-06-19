import { Activity } from "../types"

export type ActivityActions = 
 { type : 'save-activity', payload : {newActivity : Activity} }

type ActivityState = {
  activities : Activity[]
}


export const initialState : ActivityState = {
  activities : []
}

export const activityRecucer = (
  state : ActivityState = initialState,
  action : ActivityActions
) => {
  if(action.type === 'save-activity') {
    //Este codigo maneja la logica del state
    console.log(action.payload.newActivity)
  }
  return {...state, activities : [...state.activities, action.payload.newActivity]}
}