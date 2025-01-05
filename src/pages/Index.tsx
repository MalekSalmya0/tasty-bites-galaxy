import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuItem } from "@/components/MenuItem";

const menuItems = [
  {
    id: 1,
    name: "Burger Delight",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and our secret sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pizza Supreme",
    description: "Loaded with pepperoni, mushrooms, bell peppers, and extra cheese",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Crispy Fries",
    description: "Golden and crispy, seasoned to perfection with our special blend",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Spicy Tacos",
    description: "Three soft shell tacos with seasoned meat and fresh toppings",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Classic Hot Dog",
    description: "Grilled all-beef hot dog with your choice of toppings",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1619740455993-9e612d2ddddb?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Ice Cream Sundae",
    description: "Three scoops of premium ice cream with toppings of your choice",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop",
  },
];

export default function Index() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Welcome to Malek Selmieh</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onOrder={() => setCartCount((prev) => prev + 1)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}