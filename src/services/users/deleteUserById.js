// import userData from "../../data/users.json" assert { type: "json" };

// const deleteUserById = (id) => {
//   const userIndex = userData.users.findIndex((user) => user.id === id);

//   if (userIndex === -1) {
//     return null;
//   }

//   const deletedUser = userData.users.splice(userIndex, 1);

//   return deletedUser;
// };

// export default deleteUserById;
import { PrismaClient } from "@prisma/client";

const deleteUserById = async (id) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.deleteMany({
    where: { id },
  });

  return user.count > 0 ? id : null;
};

export default deleteUserById;