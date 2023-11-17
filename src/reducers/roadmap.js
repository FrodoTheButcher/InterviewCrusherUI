import { GET_AVAILABLE_ROADMAPS_FAIL, GET_AVAILABLE_ROADMAPS_REQUEST, GET_AVAILABLE_ROADMAPS_SUCCESS, ROADMAP_FAIL, ROADMAP_GETALL_FAIL,ROADMAP_GETALL_REQUEST,ROADMAP_GETALL_RESET,ROADMAP_GETALL_SUCCESS, ROADMAP_REQUEST, ROADMAP_RESET, ROADMAP_SUCCESS, SCHEDULE_TIME_FAIL, SCHEDULE_TIME_REQUEST, SCHEDULE_TIME_SUCCESS } from "../Constants/roadmap"

export const roadmapGetAllReducer = (state = { roadmaps:[],loading:true,error:false},action) =>{
    switch(action.type)
    {
        case ROADMAP_GETALL_REQUEST:
            return { roadmaps:[],loading:true,error:false}
        case ROADMAP_GETALL_SUCCESS:
            const roadmaps = action.payload; // Assuming action.payload is an array of objects

            const pairs = [];
            for (let i = 0; i < roadmaps.length; i += 2) {
                pairs.push(roadmaps.slice(i, i + 2));
            }

            return {
                ...state,
                roadmaps: pairs, // Store the grouped pairs in the state
                loading: false,
                error: false,
            };

        case ROADMAP_GETALL_RESET:
            return {roadMaps:[]}
        case ROADMAP_GETALL_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const ScheduleTimeToLearnReducer = (state = { loading: false, error: false, message:false }, action) => {
    switch (action.type) {
        case SCHEDULE_TIME_REQUEST:
            return { loading: true, error: false }
        case SCHEDULE_TIME_SUCCESS:
           
            return {
                message:action.payload, 
                loading: false,
                error: false,
            };

        case SCHEDULE_TIME_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const roadmapGetChapterReducer = (state = { roadmap:null, loading: false, error: false }, action) => {
    switch (action.type) {
        case ROADMAP_REQUEST:
            return { roadmap:null, loading: true, error: false }
        case ROADMAP_SUCCESS:
           
            return {
                roadmap: action.payload, 
                loading: false,
                error: false,
            };

        case ROADMAP_RESET:
            return { roadMap: null }
        case ROADMAP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getAvaialableRoadmapsReducer = (state = { roadmaps: [], loading: false, error: false }, action) => {
    switch (action.type) {
        case GET_AVAILABLE_ROADMAPS_REQUEST:
            return { roadmaps: [], loading: true, error: false }
        case GET_AVAILABLE_ROADMAPS_SUCCESS:

            return {
                roadmaps: action.payload,
                loading: false,
                error: false,
            };

        case GET_AVAILABLE_ROADMAPS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}