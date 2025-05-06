import { format } from "date-fns";

const dateFormat = "MM/dd/yyyy"

export function getToday() {
    return format(new Date(), dateFormat)
}

export function getMonthName(date) {
    return format(new Date(date), "MMMM")
}

export function getDayName(date) {
    return format(new Date(date), "d")
}