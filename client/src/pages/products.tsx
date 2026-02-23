import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { ChevronRight, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@shared/schema";

const categoryColors: Record<string, string> = {
  "Patient Monitoring": "bg-primary/10 text-primary",
  "Diagnostic Imaging": "bg-accent text-accent-foreground",
  "Surgical Instruments": "bg-secondary text-secondary-foreground",
  "Laboratory Equipment": "bg-muted text-muted-foreground",
  "Respiratory Care": "bg-primary/10 text-primary",
  "Medical Supplies": "bg-accent text-accent-foreground",
};

function ProductSkeleton() {
  return (
    <Card className="p-0">
      <Skeleton className="h-52 w-full rounded-t-md rounded-b-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </Card>
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = ["All", ...new Set(products?.map((p) => p.category) || [])];

  const filtered = products?.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col">
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Catalog</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight" data-testid="text-products-title">
              Medical Equipment Products
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Browse our comprehensive catalog of premium medical equipment from world-renowned manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                data-testid="input-search-products"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {categories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={activeCategory === cat ? "default" : "secondary"}
                  onClick={() => setActiveCategory(cat)}
                  data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filtered && filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="group hover-elevate cursor-pointer h-full flex flex-col" data-testid={`card-product-${product.id}`}>
                    <div className="relative h-52 rounded-t-md overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <Badge
                        variant="secondary"
                        className={`w-fit mb-3 text-xs ${categoryColors[product.category] || ""}`}
                      >
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2" data-testid={`text-product-name-${product.id}`}>
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {product.description}
                      </p>
                      {product.features && product.features.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link href="/contact">
                        <Button variant="outline" className="w-full mt-4" data-testid={`button-inquire-${product.id}`}>
                          Inquire Now
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No Products Found</h3>
              <p className="text-muted-foreground text-sm">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
