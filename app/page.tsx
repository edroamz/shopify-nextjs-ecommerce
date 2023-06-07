import Link from "next/link";
import Image from "next/image";
import { storefront } from "@/lib/shopify";
import { formatCurrency } from "@/lib/utils";

export default async function HomePage() {
  const gql = String.raw;

  const productsQuery = gql`
    query Products {
      products(first: 12) {
        edges {
          node {
            title
            handle
            images(first: 1) {
              edges {
                node {
                  url
                  height
                  width
                  altText
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront(productsQuery);

  const products = data.products.edges;

  return (
    <>
      <section className="overflow-hidden relative">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="xl:px-8 overflow-hidden max-w-7xl mx-auto inset-0 absolute">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
              alt="hero background"
              className="object-top object-none"
              width={1216}
              height={896}
            />
          </div>
          <div className="bg-white/75 inset-0 absolute"></div>
          <div className="inset-0 from-white via-white bg-gradient-to-t absolute"></div>
        </div>
        <section
          aria-labelledby="sale-heading"
          className="px-4 flex flex-col items-center max-w-7xl relative mx-auto sm:px-6 lg:px-8 text-center pt-32"
        >
          <div className="max-w-2xl lg:max-w-none mx-auto">
            <h2
              id="sale-heading"
              className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Get 25% off during our one-time sale
            </h2>
            <p className="text-gray-500 text-xl max-w-xl mt-4 mx-auto">
              Most of our products are limited releases that won&apos;t come
              back. Get your favorite items while they&apos;re in stock.
            </p>
            <a
              href="#"
              className="sm:w-auto text-white font-medium py-3 px-8 bg-gray-900 hover:bg-gray-700 border border-transparent rounded-md inline-block mt-6 decoration-inherit"
            >
              Get access to our one-time sale
            </a>
          </div>
        </section>
      </section>
      <section className="">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-32 lg:py-32 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((item: any) => {
              const product = {
                id: item.node.handle,
                title: item.node.title,
                href: `/product/${item.node.handle}`,
                price: item.node.priceRange.maxVariantPrice.amount,
                image: {
                  src: item.node.images.edges[0].node.url,
                  alt: item.node.images.edges[0].node.altText,
                  width: item.node.images.edges[0].node.width,
                  height: item.node.images.edges[0].node.height,
                },
              };

              return (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      width={product.image.width}
                      height={product.image.height}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        aria-labelledby="testimonial-heading"
        className="lg:px-8 sm:px-6 px-4 max-w-7xl mx-auto relative"
      >
        <div className="lg:max-w-none max-w-2xl mx-auto">
          <h2
            id="testimonial-heading"
            className="text-gray-900 tracking-tight font-bold text-2xl"
          >
            What are people saying?
          </h2>
          <div className="lg:grid mt-16 lg:grid-cols-3 lg:gap-x-8 space-y-16 lg:space-y-0">
            <blockquote className="lg:block sm:flex">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="text-gray-300 shrink-0"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="lg:mt-10 lg:ml-0 sm:mt-0 sm:ml-6 mt-8">
                <p className="text-lg text-gray-600">
                  My order arrived super quickly. The product is even better
                  than I hoped it would be. Very happy customer over here!
                </p>
                <cite className="text-gray-900 font-semibold block mt-4 not-italic">
                  Sarah Peters, New Orleans
                </cite>
              </div>
            </blockquote>
            <blockquote className="lg:block sm:flex">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="text-gray-300 shrink-0"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="lg:mt-10 lg:ml-0 sm:mt-0 sm:ml-6 mt-8">
                <p className="text-lg text-gray-600">
                  I had to return a purchase that didn’t fit. The whole process
                  was so simple that I ended up ordering two new items!
                </p>
                <cite className="text-gray-900 font-semibold block mt-4 not-italic">
                  Kelly McPherson, Chicago
                </cite>
              </div>
            </blockquote>
            <blockquote className="lg:block sm:flex">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                aria-hidden="true"
                className="text-gray-300 shrink-0"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="lg:mt-10 lg:ml-0 sm:mt-0 sm:ml-6 mt-8">
                <p className="text-lg text-gray-600">
                  Now that I’m on holiday for the summer, I’ll probably order a
                  few more shirts. It’s just so convenient, and I know the
                  quality will always be there.
                </p>
                <cite className="text-gray-900 font-semibold block mt-4 not-italic">
                  Chris Paul, Phoenix
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="sm:py-24 py-16">
        <div className="lg:px-8 sm:px-6 max-w-7xl mx-auto">
          <div className="xl:py-32 xl:items-center xl:flex-row sm:px-24 sm:rounded-3xl py-24 px-6 bg-gray-900 overflow-hidden gap-10 flex flex-col isolate relative">
            <h2 className="xl:flex-auto xl:max-w-none sm:text-4xl text-white tracking-tight font-bold text-3xl max-w-2xl ">
              Get notified when we’re launching.
            </h2>
            <form className="max-w-md w-full">
              <div className="gap-x-4 flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="sm:leading-6 sm:text-sm text-white py-2 px-[0.875rem] bg-white/5 border-0 rounded-md flex-auto min-w-0 ring-inset ring-1 ring-white/[0.1] focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none placeholder:text-gray-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="text-gray-900 font-semibold text-sm py-[0.625rem] px-[0.875rem] bg-white hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-md flex-none focus:outline-none"
                >
                  Notify me
                </button>
              </div>
              <p className="text-gray-300 leading-6 text-sm mt-4">
                We care about your data. Read our{" "}
                <a href="#" className="text-white font-semibold">
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="w-[64rem] h-[64rem] -z-10 top-1/2 left-1/2 absolute"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6"></stop>
                  <stop offset="1" stopColor="#E935C1" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
