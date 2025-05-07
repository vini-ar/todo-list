import { add, format, isSaturday, nextSaturday, nextSunday, startOfTomorrow } from "date-fns";

const dateFormat = "MM/dd/yyyy"

function defaultFormatDate(date) {
    return format(date, dateFormat)
}

export function getToday() {
    const todayObj = new Date()
    return defaultFormatDate(todayObj)
}

export function getMonthName(date) {
    return format(new Date(date), "MMMM")
}

export function getDayNumber(date) {
    return format(new Date(date), "d")
}

export function getTomorrow() {
    const tomorrowObj = add(new Date(), {
        days: 1
    })
    return defaultFormatDate(tomorrowObj)
}

export function getNextWeek() {
    const nextWeekObj = add(new Date(), {
        days: 6
    })
    return defaultFormatDate(nextWeekObj)
}

export function getMontDayFormatString(date) {
    const monthName = getMonthName(date)
    const dayNumber = getDayNumber(date) 
    const monthDayFormat = monthName + " " + dayNumber
    
    return monthDayFormat
}

export function getNextWeekendDay() {
    const today = new Date();
    if (isSaturday(today)) {
        const nextSundayDateObj = nextSunday(today)
        return defaultFormatDate(nextSundayDateObj)
    } else {
        const nextSaturdayDateObj = nextSaturday(today)
        return defaultFormatDate(nextSaturdayDateObj)
    }
}