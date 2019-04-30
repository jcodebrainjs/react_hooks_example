import { NAME } from './constants'

const actionType = (name, obj) => Object.keys(obj).reduce(
  (prev, key) => ({ ...prev, [key]: name + '/' + obj[key] })
, {})

const types = {
  LOAD: 'load',
  DISPLAY: 'display',
  NDX: 'index',

}

export default actionType(NAME, types);
