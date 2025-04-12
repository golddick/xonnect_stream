function addToGoogleCalendar({
    title,
    description,
    eventDateTime,
  }: {
    title: string
    description: string
    eventDateTime: Date
  }) {
    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]|\.\d{3}/g, '') // Format to YYYYMMDDTHHMMSSZ
  
    const start = formatDate(eventDateTime)
    const end = formatDate(new Date(eventDateTime.getTime() + 60 * 60 * 1000)) // Default +1hr
  
    const url = new URL('https://www.google.com/calendar/render')
    url.searchParams.set('action', 'TEMPLATE')
    url.searchParams.set('text', title)
    url.searchParams.set('dates', `${start}/${end}`)
    url.searchParams.set('details', description)
  
    window.open(url.toString(), '_blank')
  }
  