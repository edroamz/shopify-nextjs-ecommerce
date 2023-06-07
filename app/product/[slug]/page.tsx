import Image from "next/image";
import { notFound } from "next/navigation";

import { Checkout } from "@/components/checkout";

import { storefront } from "@/lib/shopify";
import { formatCurrency } from "@/lib/utils";

const gql = String.raw;

export async function generateStaticParams() {
  const { data } = await storefront(gql`
    {
      products(first: 4) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);

  return data.products.edges.map((product: any) => ({
    slug: product.node.handle,
  }));
}

export default async function ProductPage({ params }: any) {
  const productQuery = gql`
    query Product($handle: String!) {
      productByHandle(handle: $handle) {
        title
        descriptionHtml
        tags
        priceRange {
          maxVariantPrice {
            amount
          }
        }
        images(first: 3) {
          edges {
            node {
              id
              width
              height
              url
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `;

  const { data } = await storefront(productQuery, {
    handle: params.slug,
  });

  const currentProduct = data.productByHandle;

  if (!currentProduct) {
    notFound();
  }

  const product = {
    id: params.slug,
    title: currentProduct.title,
    href: `/product/${params.slug}`,
    descriptionHtml: currentProduct.descriptionHtml,
    price: currentProduct.priceRange.maxVariantPrice.amount,
    images: currentProduct.images.edges.map((image: any) => ({
      id: image.node.id,
      src: image.node.url,
      alt: image.node.altText,
      width: image.node.width,
      height: image.node.height,
    })),
    variantId: currentProduct.variants.edges[0].node.id,
    tags: currentProduct.tags,
  };

  return (
    <>
      <div className="bg-white">
        <div className="sm:pb-24 pt-6 pb-16">
          <nav
            aria-label="Breadcrumb"
            className="lg:px-8 sm:px-6 px-4 max-w-7xl mx-auto"
          >
            <ol role="list" className="items-center flex space-x-4">
              <li>
                <div className="items-center flex">
                  <a
                    href="#"
                    className="text-gray-900 font-medium text-sm mr-4"
                  >
                    Women
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    aria-hidden="true"
                    className="text-gray-300 w-auto h-5"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </li>
              <li>
                <div className="items-center flex">
                  <a
                    href="#"
                    className="text-gray-900 font-medium text-sm mr-4"
                  >
                    Clothing
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    aria-hidden="true"
                    className="text-gray-300 w-auto h-5"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="text-gray-500 font-medium hover:text-gray-600"
                >
                  Basic Tee
                </a>
              </li>
            </ol>
          </nav>
          <div className="lg:px-8 lg:max-w-7xl sm:px-6 px-4 max-w-2xl mt-8 mx-auto">
            <div className="lg:gap-x-8 lg:grid-cols-12 lg:auto-cols-min lg:grid">
              <div className="lg:col-start-8 lg:col-span-5">
                <div className="flex justify-between">
                  <h1 className="text-gray-900 font-medium text-lg">
                    {product.title}
                  </h1>
                  <p className="text-gray-900 font-medium text-lg">
                    {formatCurrency(product.price)}
                  </p>
                </div>
                <div className="mt-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="items-center flex">
                    <p className="text-gray-700 text-sm">
                      3.9<span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="items-center flex ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 w-5 h-5 text-gray-200"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      className="text-gray-300 text-sm ml-4"
                    >
                      ·
                    </div>
                    <div className="flex ml-4">
                      <a
                        href="#"
                        className="text-indigo-600 font-medium text-sm hover:text-indigo-500"
                      >
                        See all 512 reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-0 lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-7 mt-8">
                <h2 className="sr-only">Images</h2>
                <div className="lg:gap-8 lg:grid-rows-3 lg:grid-cols-2 grid-cols-1 grid">
                  {product.images.map((image: any, index: number) => {
                    return (
                      <Image
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={
                          index === 0
                            ? "lg:row-span-2 lg:col-span-2 rounded-lg"
                            : "lg:block rounded-lg hidden"
                        }
                        width={image.width}
                        height={image.height}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-5 mt-8">
                <Checkout variantId={product.variantId} />
                <div className="mt-10">
                  <h2 className="text-gray-900 font-medium text-sm">
                    Description
                  </h2>
                  <div
                    className="text-gray-500 mt-4 text-sm prose"
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                  ></div>
                </div>
                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>
                  <dl className="xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-6 grid-cols-1 grid">
                    <div className="text-center p-6 bg-gray-50 border-gray-200 border rounded-lg">
                      <dt>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="text-gray-400 shrink-0 w-6 h-6 mx-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                          ></path>
                        </svg>
                        <span className="text-gray-900 font-medium text-sm mt-4">
                          International delivery
                        </span>
                      </dt>
                      <dd className="text-gray-500 text-sm mt-1">
                        Get your order in 2 days
                      </dd>
                    </div>
                    <div className="text-center p-6 bg-gray-50 border-gray-200 border rounded-lg">
                      <dt>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="text-gray-400 shrink-0 w-6 h-6 mx-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-900 font-medium text-sm mt-4">
                          Loyalty rewards
                        </span>
                      </dt>
                      <dd className="text-gray-500 text-sm mt-1">
                        Free shipping on all orders
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
