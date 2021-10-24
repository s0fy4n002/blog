const {createStore} = require("redux")

let initialState = {
    dataBlog: [],
    totalData: 0,
    currentPage: 1,
    perPage: 1,
    name: 'Prawito'
}
const reducer = (state = initialState, action)=>{
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlog: action.payload,
            totalData: action.totalData,
            currentPage: action.currentPage,
            perPage: action.perPage,
        }
    }
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: "Hudoro"
        }
    }
    return state
}


const store = createStore(reducer)
export default store