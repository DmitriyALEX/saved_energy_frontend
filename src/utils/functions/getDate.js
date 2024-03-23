export  const getDate = () => {
    const currentDate = new Date()
    const currentDatetoLocale = currentDate.toLocaleDateString('uk-UA')
    const hours = currentDate.getHours()
    const minutes =  currentDate.getMinutes()
    return `${currentDatetoLocale} at ${hours}:${minutes}`
}