import { IMenuBtn } from '../../types/types'

const MenuBtn: React.FC<IMenuBtn> = ({ isActive, handler }) => {
	return (
		<button className='menu-icon-btn' onClick={handler}>
			<div className={`menu-icon ${isActive ? 'menu-icon--active' : ''}`}></div>
		</button>
	)
}

export default MenuBtn
