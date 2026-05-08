export interface Drink {
  id: string;
  name: string;
  type: string;
  calories: number;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  image: string;
  accent: string;
  bg: string;
}

export const drinks: Drink[] = [
  {
    id: "d1",
    name: "Matcha Green Tea",
    type: "Frappuccino",
    calories: 420,
    totalFat: "16g (25%)",
    saturatedFat: "10g (50%)",
    transFat: "0.5g",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&q=80",
    accent: "#006241", // dark green
    bg: "#EDF3ED"
  },
  {
    id: "d2",
    name: "Midnight Mint",
    type: "Mocha Frappuccino",
    calories: 470,
    totalFat: "19g (29%)",
    saturatedFat: "13g (65%)",
    transFat: "0.5g",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
    accent: "#006241", // dark green
    bg: "#EDF3ED"
  },
  {
    id: "d3",
    name: "Caramel Ribbon Crunch",
    type: "Frappuccino",
    calories: 470,
    totalFat: "22g (34%)",
    saturatedFat: "14g (70%)",
    transFat: "0g",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80",
    accent: "#8B4513", // brown
    bg: "#F5E6D3"
  },
  {
    id: "d4",
    name: "Strawberry Funnel Cake",
    type: "Frappuccino",
    calories: 410,
    totalFat: "20g (30%)",
    saturatedFat: "12g (60%)",
    transFat: "0.5g",
    image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=800&q=80",
    accent: "#D62828", // red
    bg: "#FADADD"
  }
];
