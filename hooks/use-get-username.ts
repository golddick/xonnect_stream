import { useParams } from "next/navigation"

export const useUserName = () => {
 const params = useParams()
 return params.username as string
}
