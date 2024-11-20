import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        correo: email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user");
  }
};

export const getUser2 = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        correo: email,
      },
    });

    if (!user) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user");
  }
};

export const createUser = async (props: User) => {
  try {
    const user = await prisma.user.create({
      data: props,
    });

    if (!user) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};
