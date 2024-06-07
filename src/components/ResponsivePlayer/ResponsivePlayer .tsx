import ReactPlayer from 'react-player'
import { IExtendedReactPlayer } from '../../types/types'
import MenuBtn from '../Btns/MenuBtn'

const ResponsivePlayer: React.FC<IExtendedReactPlayer> = ({
	url,
	isActive,
	handler,
}) => {
	return (
		<div className='player-wrapper'>
			<MenuBtn handler={handler} isActive={isActive} />
			<ReactPlayer
				className='react-player'
				url={url}
				controls={true}
				playing={isActive}
			/>
		</div>
	)
}

export default ResponsivePlayer
