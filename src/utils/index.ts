const clientId = import.meta.env.PUBLIC_INFOJOBS_CLIENTID
const clientSecret = import.meta.env.PUBLIC_INFOJOBS_CLIENTSECRET
const token = btoa(`${clientId}:${clientSecret}`)

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}
const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed: number) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
  return { value: 0, unit: '' }
}

const getTimeAgo = (timestamp: number, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale)
  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed)
  return rtf.format(value, unit?.toString() as Intl.RelativeTimeFormatUnit)
}

export { token, getTimeAgo }
