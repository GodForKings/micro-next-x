import type { IProduct } from '@/features'

import { ProductCard } from '@/features'
import { API_FAKE_STORE, cn } from '@/shared'

export default async function ISRPage() {
	const products = (await fetch(`${API_FAKE_STORE}/products`, {
		next: { revalidate: 500 },
		method: 'GET',
	})
		.then(response => response.json())
		.catch(error => console.log(error))) as IProduct[]

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4')}>
			{products.map(product => (
				<ProductCard key={product.id} cardData={product} />
			))}
		</div>
	)
}
