import { useRouter } from 'next/router'
import products from '../../data/products'

export default function ProductPage(){
  const router = useRouter()
  const { slug } = router.query
  const product = products.find(p => p.slug === slug)

  if(!product) return <div>Loading...</div>

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">${product.price.toFixed(2)}</p>
      <p className="mt-4">{product.description}</p>
    </main>
  )
}