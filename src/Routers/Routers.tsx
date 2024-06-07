import { createBrowserRouter } from 'react-router-dom'
import Helmet from '../Hoc/Helmet'
import Layout from '../layout/Layout'
import About from '../pages/About'
import Apartment from '../pages/Apartment'
import Catalog from '../pages/Catalog'
import Home from '../pages/Home'
import NoMatchPath from '../pages/NotMatchPath'

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <NoMatchPath />,
		children: [
			{
				path: '/',
				element: (
					<Helmet title='Home page'>
						<Home />
					</Helmet>
				),
			},
			{
				path: 'apartment/:id',
				element: (
					<Helmet title='Apartment'>
						<Apartment />
					</Helmet>
				),
			},
			{
				path: 'about',
				element: (
					<Helmet title='About'>
						<About />
					</Helmet>
				),
			},
			{
				path: 'catalog',
				element: (
					<Helmet title='Catalog'>
						<Catalog />
					</Helmet>
				),
			},
		],
	},
])

export default router
