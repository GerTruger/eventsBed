// import { v4 as uuidv4 } from "uuid";
// import userData from "../../data/users.json" assert { type: "json" };

// const createUser = (username, name, password, image) => {
//   const newUser = {
//     id: uuidv4(),
//     name,
//     username,
//     password,
//     image,
//   };

//   userData.users.push(newUser);

//   return newUser;
// };

// export default createUser;
import { PrismaClient } from "@prisma/client";

const createUser = async (username, name, password, image) => {
  const newUser = {
    name,
    username,
    password,
    image,
  };

  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: newUser,
  });

  return user;
};

export default createUser;