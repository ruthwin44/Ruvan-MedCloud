import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import type { Product } from "@shared/schema";

const categoryColors: Record<string, string> = {
  "Digital Health": "bg-orange-100 text-orange-800 border-orange-200",
  "Surgical Equipment": "bg-orange-100 text-orange-800 border-orange-200",
  "Respiratory Care": "bg-orange-100 text-orange-800 border-orange-200",
};

function ProductSkeleton() {
  return (
    <Card className="p-5 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </Card>
  );
}

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Catalog
            </span>
            <h1
              className="text-3xl md:text-4xl font-bold mt-3 tracking-tight"
              data-testid="text-products-title"
            >
              Medical Equipment Products
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">
              Our catalog of premium medical equipment from world-renowned
              manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card
                    className="group hover-elevate h-full flex flex-col overflow-hidden"
                    data-testid={`card-product-${product.id}`}
                  >
                    <div className="p-5 flex flex-col flex-1 bg-gradient-to-b from-card to-card/80">
                      <Badge
                        variant="secondary"
                        className={`w-fit mb-3 text-xs ${categoryColors[product.category] || ""}`}
                      >
                        {product.category}
                      </Badge>
                      <h3
                        className="font-semibold text-lg mb-2"
                        data-testid={`text-product-name-${product.id}`}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {product.description}
                      </p>
                      {product.features && product.features.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {product.features.slice(0, 4).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-gray-900 font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-semibold text-lg mb-2">
                No Products Available
              </h3>
              <p className="text-muted-foreground text-sm">
                Please check back soon for our latest product offerings.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
