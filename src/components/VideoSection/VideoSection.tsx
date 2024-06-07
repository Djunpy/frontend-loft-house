import { useState } from 'react'
import PlayIcon from '../../assets/video/play.svg'
import VideoImg from '../../assets/video/video-img.jpg'
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer '

const VideoSection: React.FC = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const [videoUrl, setVideoUrl] = useState<string>('')

	const handleModal: () => void = () => {
		setIsOpenModal(!isOpenModal)
		if (!isOpenModal) {
			setVideoUrl('https://www.youtube.com/watch?v=bhJNL9JUsnY')
		}
	}
	console.log('isOpenModal', isOpenModal)
	console.log('videoUrl', videoUrl)
	return (
		<section className='video'>
			<h2 className='visually-hidden'>Видео про ЖК</h2>
			<div className='container'>
				<button className='video__link' onClick={handleModal}>
					<img src={PlayIcon} alt='' className='video__icon' />
					<img src={VideoImg} alt='' className='video__img' />
				</button>
				<div
					className={`video__modal ${
						isOpenModal ? 'video__modal--active' : ''
					}`}
				>
					<ResponsivePlayer
						url={videoUrl}
						handler={handleModal}
						isActive={true}
					/>
				</div>
			</div>
		</section>
	)
}

export default VideoSection
