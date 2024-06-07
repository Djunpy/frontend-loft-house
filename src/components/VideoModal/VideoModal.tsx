import React from 'react'
import Modal from 'react-modal'

import ReactPlayer from 'react-player'
import { IVideoModal } from '../../types/types'

const VideoModal: React.FC<IVideoModal> = ({ isOpen, videoUrl }) => {
	return (
		<Modal className='video__modal' isOpen={isOpen}>
			<ReactPlayer url={videoUrl} controls={true} />
		</Modal>
	)
}

export default VideoModal
