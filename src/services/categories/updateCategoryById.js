// // import categoriesData from "../../data/categories.json" assert { type: "json" };

// // const updateCategoryById = (id, updatedCategory) => {
// //   const categoryIndex = categoriesData.categories.findIndex(
// //     (category) => category.id === id
// //   );

// //   if (categoryIndex === -1) {
// //     return null;
// //   }

// //   const { name } = updatedCategory;

// //   categoriesData.categories[categoryIndex] = {
// //     ...categoriesData.categories[categoryIndex],
// //     name: name || categoriesData.categories[categoryIndex].name,
// //   };

// //   return categoriesData.categories[categoryIndex];
// // };

// export default updateCategoryById;
import { PrismaClient } from "@prisma/client";

const updateCategoryById = async (id, updatedCategory) => {
  const prisma = new PrismaClient();
  const category = await prisma.category.updateMany({
    where: { id },
    data: updatedCategory,
  });

  return category.count > 0 ? id : null;
};

export default updateCategoryById;