function DateComponent () {
  const myDate = new Date()
  const weekday = myDate.getDay()
  const today = myDate.getDate()
  const year = myDate.getFullYear()
  const month = myDate.getMonth()
  
  return (
    <div>
        Today is day: {today}
        <br />
        WeekDay: {weekday}
        <br />
        Year: {year}
        <br />
        {` ${month} / ${today} / ${year}`}
    
    <h2>this is a date component</h2>
    </div>
  

  )
}

export default DateComponent