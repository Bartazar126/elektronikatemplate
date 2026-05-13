"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { products } from "@/app/data";

const allCategory = "Összes";

export function SiteHeaderClient() {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = useMemo(() => [allCategory, ...Array.from(new Set(products.map((product) => product.category)))], []);

  return (
    <Header
      categories={categories}
      selectedCategory={selectedCategory}
      searchQuery={searchQuery}
      onCategorySelect={setSelectedCategory}
      onSearchChange={setSearchQuery}
    />
  );
}
