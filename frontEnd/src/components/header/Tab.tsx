import { FC, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Label } from './headerStyle'

interface IProps {
  label: string
  path: string
}

const Tab: FC<IProps> = ({ label, path }) => {
  const { pathname } = useLocation()

  const active = useMemo(() => path === pathname, [pathname])

  return (
    <Link to={path} data-cy={`nav-${path}`}>
      <Label active={active}>{label}</Label>
    </Link>
  )
}

export default Tab
