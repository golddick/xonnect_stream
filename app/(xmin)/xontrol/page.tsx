
import { getAdminScheduleSummary } from "@/actions/admin"
import React from 'react'

export default async function Page() {
  const { events, totals } = await getAdminScheduleSummary()

  return (
    <div className="space-y-6 px-6 py-8 overflow-scroll hidden-scrollbar  bg-black w-full">
      <h1 className="text-3xl font-bold mb-4">📋 Admin Event Overview</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
      {events.map(event => (
        <div key={event.id} className="p-4 border rounded-md shadow-md bg-white space-y-4 flex text-black flex-wrap">
          <div className=" flex flex-col ">
          <h2 className=" text-[14px] lg:text-xl font-semibold truncate">{event.name}</h2>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

          </div>
          {/* 🎟️ Physical Ticket Section */}
          <div className=" ">
            <h3 className="font-semibold text-lg mt-2">🎟️ Physical Tickets</h3>
            <p>
              <strong>Original Price:</strong>{' '}
              {event.originalPrices?.physical > 0
                ? `₦${event.originalPrices.physical.toLocaleString()}`
                : 'Free'}
            </p>
            <p>Total Collected: ₦{event.totals.physical.raw.toLocaleString()}</p>
            <p>Platform Revenue (30%): ₦{(event.totals.physical.raw * 0.3).toLocaleString()}</p>
            <p>Event Revenue (70%): ₦{event.totals.physical.net.toLocaleString()}</p>
          </div>

          {/* 📺 Stream Ticket Section */}
          <div>
            <h3 className="font-semibold text-lg mt-4">📺 Stream Access</h3>
            <p>
              <strong>Original Price:</strong>{' '}
              {event.originalPrices?.stream > 0
                ? `₦${event.originalPrices.stream.toLocaleString()}`
                : 'Free'}
            </p>
            <p>Total Collected: ₦{event.totals.stream.raw.toLocaleString()}</p>
            <p>Platform Revenue (30%): ₦{(event.totals.stream.raw * 0.3).toLocaleString()}</p>
            <p>Event Revenue (70%): ₦{event.totals.stream.net.toLocaleString()}</p>
          </div>

          {/* 💰 Combined */}
          <div className="mt-4">
            <p>🧮 <strong>Total Net Revenue:</strong> ₦{event.totals.combined.net.toLocaleString()}</p>
            <p>📊 <strong>Physical Slots:</strong> {event.slots.remainingSlots} / {event.slots.totalSlots}</p>
          </div>
        </div>
      ))}
      </div>

      {/* 📦 Overall Summary */}
      <div className="p-4 mt-10 border-t border-gray-300 space-y-2">
        <h2 className="text-2xl font-bold">📦 Overall Revenue Summary</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">🎟️ Physical Tickets</h3>
            <p>Total Collected: ₦{totals.physical.raw.toLocaleString()}</p>
            <p>Platform Revenue (30%): ₦{(totals.physical.raw * 0.3).toLocaleString()}</p>
            <p>Event Revenue (70%): ₦{totals.physical.net.toLocaleString()}</p>
          </div>

          <div>
            <h3 className="font-semibold">📺 Stream Access</h3>
            <p>Total Collected: ₦{totals.stream.raw.toLocaleString()}</p>
            <p>Platform Revenue (30%): ₦{(totals.stream.raw * 0.3).toLocaleString()}</p>
            <p>Event Revenue (70%): ₦{totals.stream.net.toLocaleString()}</p>
          </div>
        </div>

        <div className=" ">
          <h3 className="font-semibold text-lg">🧾 Combined</h3>
          <p>Total Collected: ₦{totals.combined.raw.toLocaleString()}</p>
          <p>Platform Revenue (30%): ₦{(totals.combined.raw * 0.3).toLocaleString()}</p>
          <p>Event Revenue (70%): ₦{totals.combined.net.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
