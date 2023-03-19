import dayjs from 'dayjs'

export function currentDate() {
  const now = dayjs()
  const nowFormat = now.format('DD/MM/YYYY HH:mm:ss')
  const euaFormat = now.format('YYYY-MM-DD HH:mm:ss')

  return { brFormat: nowFormat, euaFormat }
}
