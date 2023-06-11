import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
            alt="hero background"
            className="object-none object-top"
            width={1216}
            height={896}
          />
        </div>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
      </div>
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl"
          >
            Get 25% off during our one-time sale
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-500">
            Most of our products are limited releases that won&apos;t come back. Get your favorite
            items while they&apos;re in stock.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white decoration-inherit hover:bg-gray-700 sm:w-auto"
          >
            Get access to our one-time sale
          </a>
        </div>
      </section>
    </section>
  );
}
