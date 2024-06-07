import { apartments_data } from '../../assets/fake-data/data'
import { IApartmentsProps } from '../../types/types'
import CommonList from '../CommonList/CommonList'
import ApartmentsItem from './ApartmentsItem'

const Apartments: React.FC = () => {
	return (
		<section className='apartments'>
			<div className='container'>
				<div className='apartments__title'>
					<h2 className='title-2'>Наши квартиры</h2>
				</div>

				<CommonList
					_className={'apartments__cards'}
					items={apartments_data}
					renderItem={(item: IApartmentsProps) => (
						<ApartmentsItem
							key={item.id}
							name={item.name}
							img={item.img}
							id={item.id}
						/>
					)}
				/>

				{/* <div className='apartments__cards'>
					<a href='/' className='card'>
						<img src='' alt='' />
					</a>
					Пентхаус “Loft Олимп”
				</div> */}
			</div>
		</section>
	)
}

export default Apartments
