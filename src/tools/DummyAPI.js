import Data from '../api-data/cities.json'



export default class DummyAPI {

  _data = Data || []
  
  getData = () => {
    return this._data.map((item, id) => {
      return {
        id,
        ...item
      }
    })
  }
}