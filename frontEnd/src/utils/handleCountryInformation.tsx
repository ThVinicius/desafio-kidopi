import { IInfo } from '../hooks/apiCovidKidopi/useGetCountryInfo'

export function totalDead(info: IInfo[]) {
  return info.reduce((acc, curr) => curr.Mortos + acc, 0)
}

export function totalConfirmed(info: IInfo[]) {
  return info.reduce((acc, curr) => curr.Confirmados + acc, 0)
}
