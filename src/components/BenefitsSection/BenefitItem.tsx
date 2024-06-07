import { IBenefitItemProps } from '../../types/types'

const BenefitItem: React.FC<IBenefitItemProps> = ({ text, img }) => {
	return (
		<li className='benefits__item'>
			<img src={img} alt='' className='benefits__item-img' />
			<p className='benefits__item-text'>{text}</p>
		</li>
	)
}

export default BenefitItem
