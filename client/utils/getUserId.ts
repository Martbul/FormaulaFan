import { getUserId } from "@/services/auth/auth.service";


async function useUserIdUtil(userEmail:string) {
console.log(userEmail);

   const userId = await getUserId(userEmail);


   return userId
}


export default useUserIdUtil;
