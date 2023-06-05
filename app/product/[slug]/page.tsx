import Image from "next/image";
import { notFound } from "next/navigation";

import { storefront } from "@/lib/shopify";

async function getAllProducts() {
  const gql = String.raw;

  const productsQuery = gql`
    query Products {
      products(first: 40) {
        edges {
          node {
            title
            handle
            descriptionHtml
            images(first: 3) {
              edges {
                node {
                  id
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

  return data.products.edges;
}

export async function generateStaticParams() {
  const allProducts = await getAllProducts();

  return allProducts.map((item: any) => ({
    slug: item.node.handle,
  }));
}

export default async function ProductPage({ params }: any) {
  const allProducts = await getAllProducts();

  const item = allProducts.find(
    (product: any) => product.node.handle === params.slug
  );

  if (!item) {
    notFound();
  }

  const product = {
    id: item.node.handle,
    title: item.node.title,
    href: `/product/${item.node.handle}`,
    descriptionHtml: item.node.descriptionHtml,
    price: item.node.priceRange.maxVariantPrice.amount,
    images: item.node.images.edges.map((edge: any) => ({
      id: edge.node.id,
      src: edge.node.url,
      alt: edge.node.altText,
      width: edge.node.width,
      height: edge.node.height,
    })),
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
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
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
                {/* <form>
                  <div>
                    <h2 className="text-gray-900 font-medium text-sm">Color</h2>
                    <div
                      className="mt-2"
                      id="headlessui-radiogroup-6"
                      role="radiogroup"
                      aria-labelledby="headlessui-label-1"
                    >
                      <label
                        className="sr-only"
                        id="headlessui-label-1"
                        role="none"
                      >
                        Choose a color
                      </label>
                      <div className="items-center flex space-x-3" role="none">
                        <div
                          className="focus:outline-transparent focus:outline-2 focus:outline-offset-2 p-[0.125rem] rounded-full justify-center items-center cursor-pointer flex m-[-0.125rem] relative bci bbp"
                          id="headlessui-radiogroup-option-3"
                          role="radio"
                          aria-checked="true"
                          tabIndex={0}
                          data-headlessui-state="checked"
                          aria-labelledby="headlessui-label-2"
                        >
                          <span className="sr-only" id="headlessui-label-2">
                            Black
                          </span>
                          <span
                            aria-hidden="true"
                            className="bg-gray-900 border-opacity-10 border-black border rounded-full w-8 h-8"
                          ></span>
                        </div>
                        <div
                          className="focus:outline-transparent focus:outline-2 focus:outline-offset-2 p-[0.125rem] rounded-full justify-center items-center cursor-pointer flex margin-[-0.125rem] relative bcb"
                          id="headlessui-radiogroup-option-5"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-4"
                        >
                          <span className="sr-only" id="headlessui-label-4">
                            Heather Grey
                          </span>
                          <span
                            aria-hidden="true"
                            className="bg-gray-400 border-opacity-10 border-black border rounded-full w-8 h-8"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="justify-between items-center flex">
                      <h2 className="text-gray-900 font-medium text-sm">
                        Size
                      </h2>
                      <a href="#" className="avv avz ayc bla">
                        See sizing chart
                      </a>
                    </div>
                    <div
                      className="mt-2"
                      id="headlessui-radiogroup-20"
                      role="radiogroup"
                      aria-labelledby="headlessui-label-7"
                    >
                      <label
                        className="sr-only"
                        id="headlessui-label-7"
                        role="none"
                      >
                        Choose a size
                      </label>
                      <div className="lw ye zj cam" role="none">
                        <div
                          className="xl bmu afp alj axq bic ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-9"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-8"
                        >
                          <span id="headlessui-label-8">XXS</span>
                        </div>
                        <div
                          className="xl bmu afp alj axq bic ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-11"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-10"
                        >
                          <span id="headlessui-label-10">XS</span>
                        </div>
                        <div
                          className="xl bmu agt ajm bac biq ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-13"
                          role="radio"
                          aria-checked="true"
                          tabIndex={0}
                          data-headlessui-state="checked"
                          aria-labelledby="headlessui-label-12"
                        >
                          <span id="headlessui-label-12">S</span>
                        </div>
                        <div
                          className="xl bmu afp alj axq bic ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-15"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-14"
                        >
                          <span id="headlessui-label-14">M</span>
                        </div>
                        <div
                          className="xl bmu afp alj axq bic ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-17"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-16"
                        >
                          <span id="headlessui-label-16">L</span>
                        </div>
                        <div
                          className="xi bav afp alj axq bic ls yu yz adp aeu aru ara avv avz awc bzn"
                          id="headlessui-radiogroup-option-19"
                          role="radio"
                          aria-checked="false"
                          aria-disabled="true"
                          tabIndex={-1}
                          data-headlessui-state="disabled"
                          aria-labelledby="headlessui-label-18"
                        >
                          <span id="headlessui-label-18">XL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="lh ls ti yu yz adp aeu agt ajm arh aru avt avz bac biq bmu bmz bnl bob"
                  >
                    Add to cart
                  </button>
                </form> */}
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
