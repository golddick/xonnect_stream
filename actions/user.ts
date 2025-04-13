"use server";

import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";



export const updateUser = async (values: Partial<User>) => {
  const self = await getSelf();

  const validData = {
    bio: values.bio,
    instagram: values.instagram,
    twitter: values.twitter,
    youtube: values.youtube
  };

  const user = await db.user.update({
    where: { id: self.id },
    data: validData,
  });

  revalidatePath(`/${self.username}`);
  revalidatePath(`/u/${self.username}`);

  return user;
};





export const updateCreatorTerms = async () => {
  const self = await getSelf();
  if (!self) return { success: false }

  try {
    await db.user.update({
      where: { id: self.id },
      data: {
        acceptCreatorTerms: true
      }
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to update creator terms:', error)
    return { success: false }
  }
}

export const getUserCreatorAgreementStatus = async () => {
  const self = await getSelf();
  if (!self) return null

  const user = await db.user.findUnique({
    where: { id: self.id },
    select: { acceptPlatformTerms: true }
  })

  return { accepted: self?.acceptCreatorTerms === true }
}




export const updateUserToCreator = async () => {
  const self = await getSelf();
  if (!self) throw new Error('Not authenticated')

  await db.user.update({
    where: { id: self.id },
    data: { role: 'CREATOR' },
  })

  return true
}


export const getUserPlatfromAgreementStatus = async () => {
  const self = await getSelf();
  if (!self) return null

  const user = await db.user.findUnique({
    where: { id: self.id },
    select: { acceptPlatformTerms: true }
  })

  return { accepted: self?.acceptPlatformTerms === true }
}

export const updatePlatformTerms = async () => {
  const self = await getSelf();
  if (!self) return { success: false }

  await db.user.update({
    where: { id: self.id },
    data: { acceptPlatformTerms: true }
  })

  return { success: true }
}