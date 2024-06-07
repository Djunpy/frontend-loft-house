const MapSection: React.FC = () => {
	return (
		<section className='section-map'>
			<div className='container'>
				<div className='section-map__title'>
					<h2 className='title-2'>Районы на карте</h2>
				</div>
				<div className='section-map__map'>
					<div className='map' id='map'></div>
				</div>
			</div>
		</section>
	)
}

export default MapSection
