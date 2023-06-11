import Image from "next/image";

export function Hero() {
  return (
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
            Most of our products are limited releases that won&apos;t come back.
            Get your favorite items while they&apos;re in stock.
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
  );
}
