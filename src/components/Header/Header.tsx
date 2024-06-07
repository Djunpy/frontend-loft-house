import { useState } from 'react'
import { nav_links_data } from '../../assets/fake-data/data'
import MouseImg from '../../assets/header/mouse.svg'
import HeaderLogo from '../../assets/logo.svg'
import { IHeaderNavItem } from '../../types/types'
import MenuBtn from '../Btns/MenuBtn'
import CommonList from '../CommonList/CommonList'
import HeaderNavItem from './HeaderNavItem'

const Header: React.FC = () => {
	const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)
	const handlerMobileMenuIcon: () => void = () => {
		setIsMobileMenu(!isMobileMenu)
	}
	return (
		<header className='header'>
			<div className='header__top'>
				<div className='container'>
					<div
						className={`header__top-row ${
							isMobileMenu ? 'header__top-row--mobile' : ''
						}`}
					>
						<a href='/'>
							<img src={HeaderLogo} alt='logo img' />
						</a>
						<div className='header__nav'>
							<nav className='nav'>
								<CommonList
									_className={'nav__list'}
									items={nav_links_data}
									renderItem={(item: IHeaderNavItem) => (
										<HeaderNavItem
											key={item.id}
											id={item.id}
											link={item.link}
											display={item.display}
										/>
									)}
								/>
							</nav>
						</div>
						<div className='header__nav-btn'>
							<MenuBtn
								handler={handlerMobileMenuIcon}
								isActive={isMobileMenu}
							/>
							{/* <button className='nav-icon-btn' onClick={handlerMobileMenuIcon}>
								<div
									className={`nav-icon ${
										isMobileMenu ? 'nav-icon--active' : ''
									}`}
								></div>
							</button> */}
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<h1 className='header__title'>
					Жилой комплекс <br /> в историческом центре
					<a className='header__title-icon' href='#benefits'>
						<img src={MouseImg} alt='scroll to benefits' />
					</a>
				</h1>
			</div>
			<div className='header__footer'>
				<div className='text-right'>
					<a href='#section-map' className='info info--map'>
						Рышкановка
					</a>
				</div>

				<a href='tel:+37365434555' className='info info--tel'>
					065434555
				</a>
			</div>
		</header>
	)
}

export default Header
