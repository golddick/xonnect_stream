"use client"

import { Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"

import {
  BarChart3,
  Calendar,
  DollarSign,
  PieChart,
  TrendingUp,
  Users,
  Activity,
  Ticket,
  Eye,
} from "lucide-react"
import Link from "next/link"

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface DashboardContentProps {
  events: Event[]
  totals: DashboardData["totals"]
}

interface Event {
  id: string
  name: string
  date: string
  originalPrices: {
    physical: number
    stream: number
  }
  totals: {
    physical: { raw: number; net: number }
    stream: { raw: number; net: number }
    combined: { raw: number; net: number }
  }
  slots: {
    remainingSlots: number
    totalSlots: number
  }
}

interface DashboardData {
  events: Event[]
  totals: {
    physical: { raw: number; net: number }
    stream: { raw: number; net: number }
    combined: { raw: number; net: number }
  }
}

export default function DashboardContent({ events, totals }: DashboardContentProps) {
  const totalEvents = events.length
  const totalPhysicalSlots = events.reduce((sum, e) => sum + e.slots.totalSlots, 0)
  const totalRemainingSlots = events.reduce((sum, e) => sum + e.slots.remainingSlots, 0)
  const occupancyRate =
    totalPhysicalSlots > 0
      ? ((totalPhysicalSlots - totalRemainingSlots) / totalPhysicalSlots) * 100
      : 0

  const revenueChartData = {
    labels: events.map((e) => (e.name.length > 15 ? e.name.slice(0, 15) + "..." : e.name)),
    datasets: [
      {
        label: "Physical Tickets",
        data: events.map((e) => e.totals.physical.net),
        backgroundColor: "rgba(220, 38, 38, 0.8)",
        borderColor: "rgb(220, 38, 38)",
        borderWidth: 1,
      },
      {
        label: "Stream Access",
        data: events.map((e) => e.totals.stream.net),
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 1,
      },
    ],
  }

  const doughnutData = {
    labels: ["Physical Tickets", "Stream Access"],
    datasets: [
      {
        data: [totals.physical.net, totals.stream.net],
        backgroundColor: ["#dc2626", "#ffffff"],
        borderColor: ["#dc2626", "#ffffff"],
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#ffffff" } },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" },
        grid: { color: "#374151" },
      },
      y: {
        ticks: {
          color: "#9ca3af",
          callback: (value: any) => "₦" + value.toLocaleString(),
        },
        grid: { color: "#374151" },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#ffffff" },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.label}: ₦${ctx.parsed.toLocaleString()}`,
        },
      },
    },
  }

  return (
    <div className="p-6 space-y-8">
      {/* Live Status */}
      <div className="flex items-center space-x-2 bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-medium w-fit backdrop-blur-sm">
        <Activity className="w-4 h-4" />
        <span>Live Data</span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          label="Total Revenue"
          value={`₦${totals.combined.net.toLocaleString()}`}
          subLabel={`+₦${(totals.combined.raw - totals.combined.net).toLocaleString()} platform fee`}
          icon={<DollarSign className="w-6 h-6 text-red-400" />}
        />
        <MetricCard
          label="Active Events"
          value={totalEvents}
          subLabel="Currently running"
          icon={<Calendar className="w-6 h-6 text-red-400" />}
        />
        <MetricCard
          label="Occupancy Rate"
          value={`${occupancyRate.toFixed(1)}%`}
          subLabel={`${totalPhysicalSlots - totalRemainingSlots}/${totalPhysicalSlots} slots`}
          icon={<Users className="w-6 h-6 text-red-400" />}
        />
        <MetricCard
          label="Avg Revenue/Event"
          value={`₦${
            totalEvents > 0 ? Math.round(totals.combined.net / totalEvents).toLocaleString() : "0"
          }`}
          subLabel="Per event average"
          icon={<TrendingUp className="w-6 h-6 text-red-400" />}
        />
      </div>

      {/* Charts */}
      {events.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

           <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-red-400" />
            <h3 className="text-xl font-bold text-white">Revenue Breakdown</h3>
          </div>
          <div className="h-80 w-full">
            <Bar data={revenueChartData} options={chartOptions} />
          </div>
        </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-red-400" />
              <h3 className="text-xl font-bold text-white">Revenue Split</h3>
            </div>
            <div className="h-80 flex items-center justify-center">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      ) 
      }

       {events.length > 0 && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Ticket className="w-5 h-5 text-red-400" />
              <h3 className="text-xl font-bold text-white">Event Details</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Event Name</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-medium">Physical Revenue</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-medium">Stream Revenue</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-medium">Total Revenue</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Slots</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr
                      key={event.id}
                      className={`border-b border-gray-800 hover:bg-gray-800/30 transition-colors ${index % 2 === 0 ? "bg-gray-800/10" : ""}`}
                    >
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-semibold text-white">{event.name}</div>
                          <div className="text-sm text-gray-400">ID: {event.id}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="text-white font-semibold">₦{event.totals.physical.net.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">
                          {event.originalPrices.physical > 0
                            ? `₦${event.originalPrices.physical.toLocaleString()}`
                            : "Free"}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="text-white font-semibold">₦{event.totals.stream.net.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">
                          {event.originalPrices.stream > 0
                            ? `₦${event.originalPrices.stream.toLocaleString()}`
                            : "Free"}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="text-white font-bold">₦{event.totals.combined.net.toLocaleString()}</div>
                        <div className="text-sm text-green-400">
                          +₦{(event.totals.combined.raw - event.totals.combined.net).toLocaleString()} fee
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <div className="text-white font-semibold">{event.slots.remainingSlots}</div>
                          <div className="text-gray-400">/</div>
                          <div className="text-gray-300">{event.slots.totalSlots}</div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{
                              width: `${event.slots.totalSlots > 0 ? ((event.slots.totalSlots - event.slots.remainingSlots) / event.slots.totalSlots) * 100 : 0}%`,
                            }}
                          ></div>
                        </div>
                      </td>
                        <td className="py-4 px-4 text-center">
                            <Link href={`/xontrol/events/${event.id}`} className="inline-flex items-center gap-2">
                             <button className="text-red-700 hover:text-red-500 transition" >
                            View
                            </button>

                            </Link>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Revenue Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-600/20 to-red-700/10 border border-red-600/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <Ticket className="w-5 h-5" />
              Physical Tickets
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Collected:</span>
                <span className="text-white font-semibold">₦{totals.physical.raw.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Platform Revenue:</span>
                <span className="text-green-400 font-semibold">
                  ₦{(totals.physical.raw - totals.physical.net).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-red-600/20 pt-3">
                <span className="text-gray-300">Event Revenue:</span>
                <span className="text-white font-bold">₦{totals.physical.net.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-600/20 to-gray-700/10 border border-gray-600/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-300 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Stream Access
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Collected:</span>
                <span className="text-white font-semibold">₦{totals.stream.raw.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Platform Revenue:</span>
                <span className="text-green-400 font-semibold">
                  ₦{(totals.stream.raw - totals.stream.net).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-600/20 pt-3">
                <span className="text-gray-300">Event Revenue:</span>
                <span className="text-white font-bold">₦{totals.stream.net.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-700/10 border border-green-600/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Combined Total
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Collected:</span>
                <span className="text-white font-semibold">₦{totals.combined.raw.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Platform Revenue:</span>
                <span className="text-green-400 font-semibold">
                  ₦{(totals.combined.raw - totals.combined.net).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-green-600/20 pt-3">
                <span className="text-gray-300">Event Revenue:</span>
                <span className="text-white font-bold text-2xl">₦{totals.combined.net.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

// Helper UI component
function MetricCard({
  label,
  value,
  subLabel,
  icon,
}: {
  label: string
  value: string | number
  subLabel: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className="text-sm mt-1 text-gray-400">{subLabel}</p>
        </div>
        <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  )
}
