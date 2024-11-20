import { User } from "@prisma/client";
import { createUser, getUser2 } from "../../../database/user";

export const validateUserExist = async (email: string): Promise<boolean> => {
    console.log("email---------------------", email);
  const user = await getUser2(email);
  if (!user) {
    return true;
  }
  return false;
};

export const registerUser = async (props: User) => {
  return await createUser(props);
};
