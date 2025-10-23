import type { IProduct } from '@/features'

import { ProductCard } from '@/features'
import { API_FAKE_STORE, cn } from '@/shared'

export const dynamic = 'force-dynamic'

export default async function SSRPage() {
	const products = (await fetch(`${API_FAKE_STORE}/products`, {
		cache: 'no-store', // Кеш не должен хранить никакую информацию о запросе и ответе
		method: 'GET',
	})
		.then(res => res.json())
		.catch(error => console.log(error))) as IProduct[]

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4')}>
			{products.map(product => (
				<ProductCard key={product.id} cardData={product} />
			))}
		</div>
	)
}
