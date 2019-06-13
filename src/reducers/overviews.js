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

const adminOverviews = {
    customer: {
        icon: 'team',
        color: Color.green,
        title: 'Customers',
        number: 0,
    },
    order: {
        icon: 'pay-circle-o',
        color: Color.blue,
        title: 'Orders',
        number: 0,
    },
    // owner: {
    //     icon: 'team',
    //     color: Color.purple,
    //     title: 'Owners',
    //     number: 0,
    // },
    product: {
        icon: 'message',
        color: Color.purple,
        title: 'Products',
        number: 0,
    },
    store: {
        icon: 'team',
        color: Color.purple,
        title: 'Storers',
        number: 0,
    },
}

const storerOverviews = {
    order: {
        icon: 'pay-circle-o',
        color: Color.blue,
        title: 'Orders',
        number: 0,
    },
    product: {
        icon: 'team',
        color: Color.purple,
        title: 'Products',
        number: 0,
    },
    product_expire: {
        icon: 'message',
        color: Color.purple,
        title: 'Products expired',
        number: 0,
    },
    product_unexpired: {
        icon: 'team',
        color: Color.purple,
        title: 'Products unexpired',
        number: 0,
    },
}

const defaultStates = {
    admin: adminOverviews,
    storer: storerOverviews,
    owner: ownerOverviews,
};


export default function (state = defaultStates, action) {
    switch (action.type) {
        case ADMIN_GET: {
            const {
                customer,
                order,
                owner,
                product,
                store, } = action.data;

            return {
                ...state,
                admin: {
                    customer: { ...adminOverviews.customer, number: customer },
                    order: { ...adminOverviews.order, number: order },
                    // owner: { ...adminOverviews.owner, number: owner },
                    product: { ...adminOverviews.product, number: product },
                    store: { ...adminOverviews.store, number: store },
                }
            }
        }
        case OWNER_GET: {
            const { count_store, order, product } = action.data;
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
            const {
                order,
                product,
                product_expire,
                product_unexpired, } = action.data;

            return {
                ...state,
                storer: {
                    order: { ...storerOverviews.order, number: order },
                    product: { ...storerOverviews.product, number: product },
                    product_expire: { ...storerOverviews.product_expire, number: product_expire },
                    product_unexpired: { ...storerOverviews.product_unexpired, number: product_unexpired },
                }
            }
        }
        default: return state;
    }
}
