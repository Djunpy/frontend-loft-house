import { useRouteError } from 'react-router-dom'

interface RouteError {
	message?: string
	statusText?: string
}

const NoMatchPath: React.FC = () => {
	const error = useRouteError() as RouteError
	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

export default NoMatchPath
