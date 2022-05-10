// Pure function
import {CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE, APPLY_STYLE, CHANGE_TITLE} from './types';

export function rootReducer(state, action) {
  let field
  let value
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      return {...state, [field]: getValue(state, field, action)}// id, value of column
    case CHANGE_TEXT:
      field = 'dataState'
      return {...state, currentText: action.data.value, [field]: getValue(state, field, action)}
    case CHANGE_STYLES:
      return {...state, currentStyles: action.data}
    case APPLY_STYLE:
      field = 'stylesState'
      value = state[field] || {}
      action.data.ids.forEach(id=>{
        value[id] = {...value[id], ...action.data.value}
      })
      return {
        ...state, [field]: value, currentStyles: {...state.currentStyles, ...action.data.value}
      }
    case CHANGE_TITLE:
      return {...state, title: action.data}
    default: return state
  }
}

function getValue(state, field, action) {
  const value = state[field] || {}
  value[action.data.id] = action.data.value
  return value
}
