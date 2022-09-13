import {
    RESTAURANT_LIST_REQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstants'

export const restaurantListReducer = (state = { restaurant: [] }, action) => {  //reducernu randu state accept cheyum oru empty statem oru actionm
    //ivide restaurant :[] paranjoru empty state create cheyunu
    switch (action.type) {//actionte type nama restaurantAction lparanju koduthitund
        case RESTAURANT_LIST_SUCCESS:  //type thamilu match cheyum -match ankl restaurant lek payloadnte output kodukum
            return { restaurant: action.payload } //actionte type success ankl aa actionte payload reducernte empty stringlek kodukum nit puthiya list anu return cheyuka

        case RESTAURANT_LIST_FAIL:
            return { restaurant: action.payload }  //fail ankl type error anu actionl ulath ath return cheyun 
   
       default:return state
        }


}

