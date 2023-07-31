
const initialState={
    tvShowList:[]

}

const TvShowsListReducer=(state=initialState,action)=>{
    // console.log("state",state)
    switch(action.type){

        case "TVSHOWLIST"   :{
            return{...state, tvShowList:[state.tvShowList, ...action.payload] }
        }

        default : return state
    }
}

export default TvShowsListReducer

