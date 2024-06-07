import { useEffect } from 'react'

interface HelmetProps {
	title: string
	children: React.ReactNode
}

const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
	useEffect(() => {
		document.title = title
	}, [children])
	return <div>{children}</div>
}

export default Helmet
