import { Suspense } from "react";
import { Hero } from "components/hero";
import { TrendingProducts } from "components/trending-products";
import { Testimonial } from "components/testimonial";
import { Newsletter } from "components/newsletter";
import { Footer } from "components/layout/footer";

export const runtime = "edge";

export const metadata = {
  description: "Ecommerce site built with Next.js and Shopify",
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Suspense>
        <TrendingProducts />
        <Testimonial />
        <Newsletter />
        <Footer />
      </Suspense>
    </>
  );
}
