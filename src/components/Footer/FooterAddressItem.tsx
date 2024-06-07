import { IAddress } from '../../types/types'

const FooterAddressItem: React.FC<IAddress> = ({ text }) => {
	return <li>{text}</li>
}

export default FooterAddressItem
