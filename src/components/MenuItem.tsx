import { Button } from "./ui/button";
import { toast } from "sonner";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  onOrder: () => void;
}

export function MenuItem({ name, description, price, image, onOrder }: MenuItemProps) {
  const handleOrder = () => {
    toast.success(`Added ${name} to cart!`);
    onOrder();
  };

  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <Button onClick={handleOrder}>Order Now</Button>
        </div>
      </div>
    </div>
  );
}