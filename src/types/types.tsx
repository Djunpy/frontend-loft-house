export interface IHeaderNavItem {
	id: number
	display: string
	link: string
}

export interface IBenefitItemProps {
	id: number
	text: string
	img: string
}

export interface IApartmentsProps {
	id: number
	name: string
	img: string
}

export interface IFooter {
	id: number
	category: string
}

export interface IAddress {
	id: number
	text: string
}

export interface ISocials {
	id: number
	icon: string
	url: string
}

export interface IVideoModal {
	videoUrl: string
	isOpen: boolean
	onClose: () => void
}

export interface IMenuBtn {
	isActive: boolean
	handler: () => void
}

export interface IReactPlayer {
	url: string
}

export interface IExtendedReactPlayer extends IMenuBtn, IReactPlayer {}
