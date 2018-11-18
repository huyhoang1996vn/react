const STATUSES_ORDER = {
    status_payment: ["pending", "completed", "payment_error"],
    status_order: ["pending", "accepted", "shipping", "completed", "canceled"]
}

const STATUS_COLOR = {
    pending: "blue",
    accepted: "green",
    shipping: "blue",
    completed: "green",
    canceled: "red",
    payment_error: "red",
}

const GROUP_USERS = {
    1: 'customer',
    2: 'store',
    3: 'owner'
}

export {
    STATUSES_ORDER,
    STATUS_COLOR,
    GROUP_USERS
}