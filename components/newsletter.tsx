export function Newsletter() {
  return (
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
  );
}
