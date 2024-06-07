import { IFooter } from '../../types/types'

const FooterNavItem: React.FC<IFooter> = ({ category }) => {
	return (
		<li>
			<a href='/'>{category}</a>
		</li>
	)
}

export default FooterNavItem
