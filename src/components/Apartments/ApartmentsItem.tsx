import { useNavigate } from 'react-router-dom'
import { IApartmentsProps } from '../../types/types'

const ApartmentsItem: React.FC<IApartmentsProps> = ({ name, img, id }) => {
	const navigate = useNavigate()

	const handleClickCard = () => {
		navigate(`/apartment/${id}`)
	}
	return (
		<li className='card' onClick={handleClickCard}>
			<img className='card__img' src={img} alt={name} />
			<h3 className='card__title'>{name}</h3>
		</li>
	)
}

export default ApartmentsItem
