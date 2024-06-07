import { NavLink } from 'react-router-dom'
import { IHeaderNavItem } from '../../types/types'

const HeaderNavItem: React.FC<IHeaderNavItem> = ({ display, link }) => {
	return (
		<li>
			<NavLink to={link}>{display}</NavLink>
		</li>
	)
}

export default HeaderNavItem
