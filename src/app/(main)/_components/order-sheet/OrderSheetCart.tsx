// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";
// import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
// import { useContext } from "react";
// import { FoodCardContext } from "@/providers/FoodCart";

// // export const cartData = [
// //   {
// //     food: {
// //       _id: "1",
// //       foodName: "foodName",
// //       price: 1200,
// //       image: "",
// //       ingredients: "ingredients ingredients",
// //       categoryId: {
// //         _id: "1",
// //         categoryName: "categoryName",
// //         createdAt: "2025-06-27T17:00:00+08:00",
// //         updatedAt: "2025-06-22T17:00:00+08:00",
// //       },
// //     },
// //     quantity: 1,
// //   },
// // ];

// export const OrderSheetCart = () => {
//   const { foodCart, setFoodCart } = useContext(FoodCardContext);

//   const handleRemoveFromCart = (id: string) => {
//     setFoodCart((prev) => prev.filter((item) => item.food._id !== id));
//   };
//   const handleChangeQuantity = (id: string, newQuantity: number) => {
//     setFoodCart((prev) =>
//       prev.map((item) =>
//         item.food._id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };
//   const renderFoodCard = () => {
//     if (foodCart?.length) {
//       return foodCart?.map((item) => {
//         return (
//           <OrderSheetFoodItem
//             key={item.food._id}
//             food={item.food}
//             quantity={item.quantity}
//             onChangeQuantity={handleChangeQuantity}
//             onRemove={handleRemoveFromCart}
//           />
//         );
//       });
//     }
//     return <OrderSheetEmptyCard />;
//   };

//   return (
//     <Card className="h-[400px] overflow-hidden pb-4">
//       <CardHeader className="p-4">
//         <CardTitle>My cart</CardTitle>
//       </CardHeader>

//       <CardContent className="h-full p-4 pb-10 overflow-scroll">
//         {renderFoodCard()}
//       </CardContent>
//     </Card>
//   );
// };
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { useFoodCart } from "@/providers/FoodCart";

export const OrderSheetCart = () => {
  const { foodCart } = useFoodCart();

  const renderFoodCard = () => {
    if (!foodCart?.length) {
      return <OrderSheetEmptyCard />;
    }

    return foodCart?.map((item) => {
      return <OrderSheetFoodItem key={item.food._id} {...item} />;
    });
  };

  return (
    <Card className="h-[400px] overflow-hidden pb-4">
      <CardHeader className="p-4">
        <CardTitle>My cart</CardTitle>
      </CardHeader>

      <CardContent className="h-full p-4 pb-10 overflow-scroll">
        {renderFoodCard()}
      </CardContent>
    </Card>
  );
};
