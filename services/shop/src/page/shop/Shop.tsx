import { shopRoutes } from '@packages/shared/src/routes/shop'
import { Link } from 'react-router-dom'

export const Shop = () => {
	return (
		<div>
			Shop
			<Link to={shopRoutes.second}>go to second</Link>
		</div>
	)
}

export default Shop