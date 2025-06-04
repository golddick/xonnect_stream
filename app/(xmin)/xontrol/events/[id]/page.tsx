import { getEventDetails } from "@/actions/admin"
import { notFound } from "next/navigation"
import AdminEventDetail from "../_component/SingleEventDetails"

interface EventPageProps {
  params: {
    id: string
  }
}

export default async function EventDetailPage({ params }: EventPageProps) {
  try {
    const event = await getEventDetails(params.id)

    if (!event) {
      return notFound()
    }

    return <AdminEventDetail event={event} />
  } catch (error) {
    console.error("Error loading event:", error)
    return notFound()
  }
}
