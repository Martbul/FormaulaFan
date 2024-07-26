import { getUserId } from "@/services/auth/auth.service";
import { getUserProfile } from "@/services/profile/profile.service";

export const  useUserIdUtil = async(userEmail: string) => {
  console.log(userEmail);

  const userId = await getUserId(userEmail);

  return userId;
}

export const getUserPofileUtil = async(userEmail: string) => {

  const userProfile = await getUserProfile(userEmail);

  return userProfile;
}


