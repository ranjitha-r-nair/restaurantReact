import {
    RESTAURANT_LIST_REQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstants'

import axios  from 'axios'

export const listRestaurants=() => async(dispatch)=>  {  //thunk use chryunth komndanu oru functionte ullil vere oru function ezhuthan patune
//reduxl cheyumbol ee method(dispatch ) venm use cheyan
try{
 const {data} =await axios.get('/restaurants.json') //data fetch cheyan
 dispatch({
     type: RESTAURANT_LIST_SUCCESS, payload:data.restaurants //ee function execute cheyumbo data fetch chryum
    //   action  file le o/p parayunth payload anu- payload reducerl poi data push cheym-component ee fun ction execute cheyumbo type nokum
    // restaurant list successfull get ayal  athinte output parayunathu data.restaurants anu
 })
}catch(error){
    dispatch({
        type: RESTAURANT_LIST_FAIL, payload: error
    })
   
}


}