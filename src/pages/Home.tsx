import React from 'react'
import Apartments from '../components/Apartments/Apartments'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import Cta from '../components/Cta/Cta'
import Feedback from '../components/Feedback/Feedback'
import MapSection from '../components/MapSection/MapSection'
import VideoSection from '../components/VideoSection/VideoSection'

const Home: React.FC = () => {
	return (
		<main>
			<BenefitsSection />
			<Apartments />
			<Cta />
			<VideoSection />
			<MapSection />
			<Feedback />
		</main>
	)
}

export default Home
