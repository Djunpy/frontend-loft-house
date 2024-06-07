import {
	IAddress,
	IApartmentsProps,
	IBenefitItemProps,
	IFooter,
	IHeaderNavItem,
	ISocials,
} from '../../types/types'

export const nav_links_data: IHeaderNavItem[] = [
	{
		id: 1,
		display: 'О комплексе',
		link: '/about',
	},
	{
		id: 2,
		display: 'Район',
		link: '/district',
	},
	{
		id: 3,
		display: 'Каталог квартир',
		link: '/catalog',
	},
	{
		id: 4,
		display: 'Ипотека',
		link: '/mortgage',
	},
	{
		id: 5,
		display: 'Контакты',
		link: '/contacts',
	},
]

export const benefits_data: IBenefitItemProps[] = [
	{
		id: 1,
		img: '/src/assets/benefits/bench.svg',
		text: `Рядом исторические 
		парки и скверы`,
	},
	{
		id: 2,
		img: '/src/assets/benefits/building.svg',
		text: `Полностью
		обустроенный`,
	},
	{
		id: 3,
		img: '/src/assets/benefits/fountain.svg',
		text: `10 фонтанов
		на территории`,
	},
	{
		id: 4,
		img: '/src/assets/benefits/bicycle.svg',
		text: `6 км
		велодорожек`,
	},
]

export const apartments_data: IApartmentsProps[] = [
	{
		id: 1,
		name: 'Пентхаус “Loft Олимп”',
		img: '/src/assets/cards/01.jpg',
	},
	{
		id: 2,
		name: 'Апартаменты “Nice Loft”',
		img: '/src/assets/cards/02.jpg',
	},
	{
		id: 3,
		name: 'Апартаменты “Loft Studio”',
		img: '/src/assets/cards/03.jpg',
	},
	{
		id: 4,
		name: 'Loft квартира “Престиж”',
		img: '/src/assets/cards/04.jpg',
	},
]

export const footer_nav_data_1: IFooter[] = [
	{
		id: 1,
		category: 'О комплексе',
	},
	{
		id: 2,
		category: 'Район',
	},
	{
		id: 3,
		category: 'Каталог квартир',
	},
	{
		id: 4,
		category: 'Ипотека',
	},
	{
		id: 5,
		category: 'Контакты',
	},
]

export const footer_nav_data_2: IFooter[] = [
	{
		id: 1,
		category: 'Поселение и переезд',
	},
	{
		id: 2,
		category: 'Сервисные услуги',
	},
	{
		id: 3,
		category: 'Экологическая устойчивость',
	},
	{
		id: 4,
		category: 'Инвестиционные возможности',
	},
	{
		id: 5,
		category: 'Программа лояльности ',
	},
]

export const address_data: IAddress[] = [
	{
		id: 1,
		text: 'Адрес: ул.Студенческая 9',
	},
	{
		id: 2,
		text: 'Телефон: 373 (111) 11 - 111',
	},
	{
		id: 3,
		text: 'Отдел продаж: 10:00 - 20:00',
	},
	{
		id: 4,
		text: 'E-mail: vip@lofthouse.ru',
	},
]

export const socials_icons_data: ISocials[] = [
	{
		id: 1,
		url: '',
		icon: '/src/assets/socials/facebook.svg',
		name: 'facebook',
	},
	{
		id: 2,
		icon: '/src/assets/socials/instagram.svg',
		url: '',
		name: 'instagram',
	},

	{
		id: 3,
		icon: '/src/assets/socials/youtube.svg',
		url: '',
		name: 'youtube',
	},
]
