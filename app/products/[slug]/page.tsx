import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { products } from "@/app/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Termék nem található | TEMPLATE",
    };
  }

  return {
    title: `${product.title} | TEMPLATE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const relatedProducts = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);
  const fallbackRelatedProducts = relatedProducts.length > 0 ? relatedProducts : products.filter((item) => item.id !== product.id).slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={fallbackRelatedProducts} />;
}
