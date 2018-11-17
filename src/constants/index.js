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

export {
    STATUSES_ORDER,
    STATUS_COLOR
}