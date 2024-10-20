import { PrismaClient } from "@prisma/client";

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
