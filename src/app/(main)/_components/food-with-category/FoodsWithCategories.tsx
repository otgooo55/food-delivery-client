"use client";

import { FoodCard } from "@/components/food";
import { Category } from "@/types/types";
import { useEffect, useState } from "react";

export const FoodsWithCategories = () => {
  const [foodWithCategories, setFoodWithCategories] = useState<Category[]>([]);
  console.log("ji");

  useEffect(() => {
    const FoodWithCategories = async () => {
      const response = await fetch("http://localhost:4200/food");
      const data = await response.json();
      console.log("food response: ", data);
      setFoodWithCategories(data.foods);
    };
    FoodWithCategories();
  }, []);

  if (!foodWithCategories?.length) return null;

  const nonEmptyCategories = foodWithCategories.filter(
    (category) => category?.foods?.length > 0
  );

  return (
    <div className="flex flex-col gap-6">
      {nonEmptyCategories?.map((category, index) => (
        <div key={index} className="flex flex-col gap-[54px] rounded-xl">
          <p className="text-3xl font-semibold text-white">
            {category?.categoryName}
          </p>
          <div className="grid grid-cols-1 mb-5 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {category?.foods.map((food) => {
              return (
                <div key={food?._id}>
                  <FoodCard
                    foodName={food?.foodName}
                    price={food?.price}
                    image={food?.image}
                    ingredients={food?.ingredients}
                    _id={food?._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
