import { FoodType } from "@/constants/food";
import { Food } from "@/types/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";
type FoodCartContextType = {
  foodCart: { food: FoodType; quantity: number }[];
  setFoodCart: Dispatch<SetStateAction<{ food: FoodType; quantity: number }[]>>;
};
export const FoodCardContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<
    { food: FoodType; quantity: number }[]
  >([]);

  return (
    <FoodCardContext.Provider value={{ foodCart, setFoodCart }}>
      {children}
    </FoodCardContext.Provider>
  );
}
