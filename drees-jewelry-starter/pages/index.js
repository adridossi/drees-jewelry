import Head from 'next/head'
import products from '../data/products'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Dree's Jewelry</title>
      </Head>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold">Dree's Jewelry</h1>
        <p className="mt-4">Handmade Y2K-inspired jewelry with warm, earthy tones.</p>
        <section id="shop" className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.slug} className="p-4 bg-white rounded-xl shadow">
                <h3>{p.name}</h3>
                <p>${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}