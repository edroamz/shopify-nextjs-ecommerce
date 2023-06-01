import Image from "next/image";

export default function Home() {
  const staticProducts = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Aspen White",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Charcoal",
    },
    {
      id: 4,
      name: "Artwork Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Iso Dots",
    },
  ];

  return (
    <>
      <header>
        <div className="flex items-center justify-between mx-auto px-4 mb-4 sm:px-6 py-10 lg:max-w-7xl lg:px-8">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span className="font-bold sm:inline-block">ACME Store</span>
          </a>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </header>
      <main>
        <div className="overflow-hidden relative">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="xl:px-8 overflow-hidden max-w-7xl mx-auto inset-0 absolute">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                alt=""
                className="object-top object-none w-full h-full"
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
        </div>
        <div className="">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-32 lg:py-32 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {staticProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section
          aria-labelledby="testimonial-heading"
          className="lg:px-8 sm:px-6 pb-16 sm:pb-24 px-4 max-w-7xl mx-auto relative"
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
                    I had to return a purchase that didn’t fit. The whole
                    process was so simple that I ended up ordering two new
                    items!
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
                    Now that I’m on holiday for the summer, I’ll probably order
                    a few more shirts. It’s just so convenient, and I know the
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
      </main>
      <footer className="mt-12">
        <div className="md:flex justify-between items-center md:px-8 px-6 py-12 max-w-7xl mx-auto">
          <div className="flex justify-center md:order-2 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 order-1 lh cje ckl">
            <p className="text-gray-600 leading-5 text-xs text-center avg avx awj axm">
              © 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
