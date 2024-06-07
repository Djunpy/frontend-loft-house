import { ISocials } from '../../types/types'

const FooterSocialsItem: React.FC<ISocials> = ({ icon, url, name }) => {
	return (
		<li>
			<a href={url}>
				<img src={icon} alt={name} />
			</a>
		</li>
	)
}

export default FooterSocialsItem
