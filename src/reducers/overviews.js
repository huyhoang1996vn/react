import {
    ADMIN_GET,
    OWNER_GET,
    STORER_GET
} from "actions/overviews";
import { Color } from 'utils/theme'

const ownerOverviews = {
    count_store: {
        icon: 'team',
        color: Color.green,
        title: 'Stoers',
        number: 0,
    },
    order: {
        icon: 'pay-circle-o',
        color: Color.blue,
        title: 'Orders',
        number: 0,
    },
    product: {
        icon: 'message',
        color: Color.purple,
        title: 'Products',
        number: 0,
    },
}

const defaultStates = {
    admin: ownerOverviews,
    storer: ownerOverviews,
    owner: ownerOverviews,
};


export default function (state = defaultStates, action) {
    switch (action.type) {
        case ADMIN_GET: {
            return {
                ...state,
                admin: action.data
            }
        }
        case OWNER_GET: {
            const  { count_store, order, product } = action.data;
            return {
                ...state,
                owner: {
                    count_store: { ...ownerOverviews.count_store, number: count_store },
                    order: { ...ownerOverviews.order, number: order },
                    product: { ...ownerOverviews.product, number: product },
                }
            }
        }
        case STORER_GET: {
            return {
                ...state,
                storer: action.data
            }
        }
        default: return state;
    }
}
