import {
	address_data,
	footer_nav_data_1,
	footer_nav_data_2,
	socials_icons_data,
} from '../../assets/fake-data/data'
import HeaderLogo from '../../assets/logo.svg'
import { IAddress, IFooter, ISocials } from '../../types/types'
import CommonList from '../CommonList/CommonList'
import FooterAddressItem from './FooterAddressItem'
import FooterNavItem from './FooterNavItem'
import FooterSocialsItem from './FooterSocialsItem'

const Footer: React.FC = () => {
	return (
		<section className='footer'>
			<div className='container'>
				<div className='footer__grid'>
					<div className='footer__logo'>
						<a href='/'>
							<img src={HeaderLogo} alt='logo img' />
						</a>
					</div>
					<div className='footer__nav'>
						<nav>
							<CommonList
								items={footer_nav_data_1}
								_className={'footer-nav__list'}
								renderItem={(item: IFooter) => (
									<FooterNavItem
										key={item.id}
										category={item.category}
										id={item.id}
									/>
								)}
							/>
						</nav>
					</div>
					<div className='footer__nav'>
						<nav>
							<CommonList
								items={footer_nav_data_2}
								_className={'footer-nav__list'}
								renderItem={(item: IFooter) => (
									<FooterNavItem
										key={item.id}
										category={item.category}
										id={item.id}
									/>
								)}
							/>
						</nav>
					</div>

					<div className='footer__address'>
						<CommonList
							items={address_data}
							_className={'footer-nav__list'}
							renderItem={(item: IAddress) => (
								<FooterAddressItem
									key={item.id}
									text={item.text}
									id={item.id}
								/>
							)}
						/>
						<CommonList
							items={socials_icons_data}
							_className={'socials'}
							renderItem={(item: ISocials) => (
								<FooterSocialsItem
									key={item.id}
									icon={item.icon}
									url={item.url}
									name={item.name}
									id={item.id}
								/>
							)}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
