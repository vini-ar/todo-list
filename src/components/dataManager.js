import { add, format, startOfTomorrow } from "date-fns";

const dateFormat = "MM/dd/yyyy"

export function getToday() {
    return format(new Date(), dateFormat)
}

export function getMonthName(date) {
    return format(new Date(date), "MMMM")
}

export function getDay(date) {
    return format(new Date(date), "d")
}

export function getTomorrow() {
    const result = add(new Date(), {
        days: 1
    })
    return format(result, dateFormat)
}

export function getNextWeek() {
    const result = add(new Date(), {
        days: 6
    })
    return format(result, dateFormat)
}

export function getMontDayFormatString(date) {
    const month = format(date, "MMMM")
    const day = format(date, "d") 
    const monthDay = month + " " + day
    
    return monthDay
}