const getTimeOfDay = time => {
    if(isMorning(time)) return 'Morning'
    else if(isAfternoon(time)) return 'Afternoon'
    else return 'Evening'
}

const isMorning = time => {
    if(time >= 3 && time <11) return true
    else return false
}

const isAfternoon = time =>
{
    if(time >= 11 && time < 16) return true
    else return false
}

const isEvening = time => {
    if(time >= 16 || time < 3) return true
    else return false
}

module.exports = {getTimeOfDay, isAfternoon, isMorning, isEvening}