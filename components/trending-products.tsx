import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from 'lib/utils';
import { getCollectionProducts } from 'lib/shopify';

export async function TrendingProducts() {
  const products = await getCollectionProducts({ collection: 'frontpage' });

  if (!products?.length) return null;

  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-32">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText}
                  width={product.featuredImage.width}
                  height={product.featuredImage.height}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.handle}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {formatCurrency(Number(product.priceRange.maxVariantPrice.amount))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
