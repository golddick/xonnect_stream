
import { useParams } from "next/navigation"

export const useScheduleId = () => {
 const params = useParams()
 return params.scheduleId as string
}
