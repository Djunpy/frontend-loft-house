import React from 'react'
import { benefits_data } from '../../assets/fake-data/data'
import { IBenefitItemProps } from '../../types/types'
import CommonList from '../CommonList/CommonList'
import BenefitItem from './BenefitItem'

const BenefitsSection: React.FC = () => {
	return (
		<section className='benefits'>
			<h2 className='visually-hidden'>Преимущества ЖК</h2>
			<div className='container container--sm'>
				<CommonList
					_className={'benefits__row'}
					items={benefits_data}
					renderItem={(item: IBenefitItemProps) => (
						<BenefitItem
							key={item.id}
							id={item.id}
							text={item.text}
							img={item.img}
						/>
					)}
				/>
			</div>
		</section>
	)
}

export default BenefitsSection
