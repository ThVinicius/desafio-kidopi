import { IInfo } from '../hooks/apiCovidKidopi/useGetCountryInfo'

export function formatInfo(info: IInfo[]) {
  return info.map(({ Confirmados, Mortos, ProvinciaEstado }) => ({
    ProvinciaEstado,
    Mortos: formatNumber(Mortos),
    Confirmados: formatNumber(Confirmados)
  }))
}

export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
