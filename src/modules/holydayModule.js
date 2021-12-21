const SET_HOLYDAY_DATA = 'holyday/SET_HOLYDAY_DATA';
const SET_SCHEDULE = 'holyday/SET_SCHEDULE';

export const setHolydayData = data => ({type: SET_HOLYDAY_DATA, data});
export const setSchedule = data => ({type: SET_SCHEDULE, data});

const initialState = {
  holyday: [],
  schedule: []
};

export default function holyday(state = initialState, action){
  switch(action.type){
    case SET_HOLYDAY_DATA:
      return {
        ...state,
        holyday: action.data
      };
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: state.schedule.concat(action.data)
      };
    default:
      return state;
  }
}