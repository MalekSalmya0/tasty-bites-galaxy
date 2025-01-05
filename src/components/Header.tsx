import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Haymour Fast Food</h1>
        <Button variant="secondary" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}