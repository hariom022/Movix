
const initialState={
    trendingData:[],
}

const Reducer1=(state=initialState,action)=>{
    // console.log("action",action)
    switch(action.type){
        case "TRENDING" : {
            return { ...state,  trendingData :[...state.trendingData,...action.payload]}}
        default : return state
    }



}
export default Reducer1