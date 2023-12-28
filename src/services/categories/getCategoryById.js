// import categoriesData from "../../data/categories.json" assert { type: "json" };

// const getCategoryById = (id) => {
//   return categoriesData.categories.find((category) => category.id === id);
// };

// export default getCategoryById;
import { PrismaClient } from "@prisma/client";

const getCategoryById = async (id) => {
  const prisma = new PrismaClient();
  const category = await prisma.category.findUnique({
    where: { id },
  });

  return category;
};

export default getCategoryById;