


// 'use client'

// import { getAllReviewsForAdmin, updateReviewDisplayFlag } from "@/actions/admin"
// import { useEffect, useState } from "react"

// interface Review {
//   id: string
//   comment: string
//   rating: number
//   AdminReviewDisplay: boolean
//   createdAt: string
//   user: {
//     username: string
//     email?: string
//   }
//   stream: {
//     title: string
//     id: string
//     createdAt: string
//   }
// }

// export default function AdminReviewPage() {
//   const [reviews, setReviews] = useState<Review[]>([])
//   const [loading, setLoading] = useState(true)
//   const [filter, setFilter] = useState<'all' | 'visible' | 'hidden'>('all')
//   const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating'>('newest')

//   useEffect(() => {
//     loadReviews()
//   }, [])

//   const loadReviews = async () => {
//     try {
//       setLoading(true)
//       const data = await getAllReviewsForAdmin()
//       // Convert Date fields to string to match Review interface
//       const normalized = data.map((r: any) => ({
//         ...r,
//         createdAt: typeof r.createdAt === "string" ? r.createdAt : r.createdAt.toISOString(),
//         stream: {
//           ...r.stream,
//           createdAt: typeof r.stream.createdAt === "string" ? r.stream.createdAt : r.stream.createdAt.toISOString(),
//         },
//       }))
//       setReviews(normalized)
//     } catch (error) {
//       console.error("Failed to load reviews:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const toggleReview = async (id: string, current: boolean) => {
//     try {
//       await updateReviewDisplayFlag(id, !current)
//       await loadReviews() // Reload all reviews
//     } catch (error) {
//       console.error("Failed to update review:", error)
//     }
//   }

//   const getFilteredAndSortedReviews = () => {
//     let filtered = reviews

//     // Apply filter
//     switch (filter) {
//       case 'visible':
//         filtered = reviews.filter(r => r.AdminReviewDisplay)
//         break
//       case 'hidden':
//         filtered = reviews.filter(r => !r.AdminReviewDisplay)
//         break
//       default:
//         filtered = reviews
//     }

//     // Apply sorting
//     return filtered.sort((a, b) => {
//       switch (sortBy) {
//         case 'oldest':
//           return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//         case 'rating':
//           return b.rating - a.rating
//         case 'newest':
//         default:
//           return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       }
//     })
//   }

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     })
//   }

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <span
//         key={i}
//         className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//       >
//         ★
//       </span>
//     ))
//   }

//   const filteredReviews = getFilteredAndSortedReviews()
//   const stats = {
//     total: reviews.length,
//     visible: reviews.filter(r => r.AdminReviewDisplay).length,
//     hidden: reviews.filter(r => !r.AdminReviewDisplay).length,
//     averageRating: reviews.length > 0 
//       ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
//       : '0'
//   }

//   if (loading) {
//     return (
//       <div className="p-6 flex items-center justify-center min-h-64">
//         <div className="text-lg text-gray-600">Loading reviews...</div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Management</h1>
//         <p className="text-gray-600">Manage and moderate user reviews from streams</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-lg shadow border">
//           <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
//           <div className="text-sm text-gray-600">Total Reviews</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow border">
//           <div className="text-2xl font-bold text-green-600">{stats.visible}</div>
//           <div className="text-sm text-gray-600">Public Reviews</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow border">
//           <div className="text-2xl font-bold text-red-600">{stats.hidden}</div>
//           <div className="text-sm text-gray-600">Hidden Reviews</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow border">
//           <div className="text-2xl font-bold text-yellow-600">{stats.averageRating}</div>
//           <div className="text-sm text-gray-600">Average Rating</div>
//         </div>
//       </div>

//       {/* Filters and Controls */}
//       <div className="bg-white p-4 rounded-lg shadow border mb-6">
//         <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Filter by visibility</label>
//               <select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value as typeof filter)}
//                 className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="all">All Reviews ({stats.total})</option>
//                 <option value="visible">Public Only ({stats.visible})</option>
//                 <option value="hidden">Hidden Only ({stats.hidden})</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
//                 className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="rating">Highest Rating</option>
//               </select>
//             </div>
//           </div>
//           <div className="text-sm text-gray-600">
//             Showing {filteredReviews.length} of {reviews.length} reviews
//           </div>
//         </div>
//       </div>

//       {/* Reviews List */}
//       {filteredReviews.length === 0 ? (
//         <div className="bg-white p-8 rounded-lg shadow border text-center">
//           <div className="text-gray-500 text-lg">No reviews found</div>
//           <div className="text-gray-400 text-sm mt-1">
//             {filter !== 'all' ? 'Try changing your filter settings' : 'Reviews will appear here once users submit them'}
//           </div>
//         </div>
//       ) : (
//         <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
//           {filteredReviews.map((review) => (
//             <div key={review.id} className="bg-white rounded-lg shadow border overflow-hidden">
//               <div className="p-6">
//                 {/* Header with stream info and visibility toggle */}
//                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-start gap-3">
//                       <div className="flex-1">
//                         <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                           {review.stream.title}
//                         </h3>
//                         <div className="flex items-center gap-4 text-sm text-gray-600">
//                           <span className="font-medium">{review.user.username}</span>
//                           <span>•</span>
//                           <span>{formatDate(review.createdAt)}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-1">
//                       {renderStars(review.rating)}
//                       <span className="ml-2 text-sm font-medium text-gray-700">
//                         {review.rating}/5
//                       </span>
//                     </div>
                    
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={review.AdminReviewDisplay}
//                         onChange={() => toggleReview(review.id, review.AdminReviewDisplay)}
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
//                       />
//                       <span className="text-sm font-medium text-gray-700">
//                         Show Public
//                       </span>
//                       <span className={`px-2 py-1 text-xs rounded-full ${
//                         review.AdminReviewDisplay 
//                           ? 'bg-green-100 text-green-800' 
//                           : 'bg-red-100 text-red-800'
//                       }`}>
//                         {review.AdminReviewDisplay ? 'Visible' : 'Hidden'}
//                       </span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Review content */}
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <p className="text-gray-800 leading-relaxed">
//                     {review.comment || "No comment provided"}
//                   </p>
//                 </div>

//                 {/* Additional info */}
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <div className="flex flex-wrap gap-4 text-xs text-gray-500">
//                     <span>Review ID: {review.id}</span>
//                     <span>Stream ID: {review.stream.id}</span>
//                     <span>Stream Date: {formatDate(review.stream.createdAt)}</span>
//                     {review.user.email && <span>User: {review.user.email}</span>}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }










"use client"

import { getAllReviewsForAdmin, updateReviewDisplayFlag } from "@/actions/admin"
import { useEffect, useState } from "react"
import { Star, Eye, EyeOff, User, Calendar, MessageSquare, Search } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

interface Review {
  id: string
  comment: string
  rating: number
  AdminReviewDisplay: boolean
  createdAt: string
  user: {
    username: string
    email?: string
    imageUrl?: string
  }
  stream?: {
    name: string
    id: string
  }
}

export default function AdminReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "visible" | "hidden">("all")

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    try {
      setLoading(true)
      const data = await getAllReviewsForAdmin()
      // Normalize createdAt fields to string
      const normalized = data.map((r: any) => ({
        ...r,
        createdAt: typeof r.createdAt === "string" ? r.createdAt : r.createdAt?.toISOString?.() ?? "",
        user: {
          ...r.user,
          // If you want to use 'name' instead of 'username', map accordingly
          name: r.user.name || r.user.username || "",
        },
        stream: r.stream
          ? {
              ...r.stream,
              // If stream has createdAt and you want to normalize, add here
              // createdAt: typeof r.stream.createdAt === "string" ? r.stream.createdAt : r.stream.createdAt?.toISOString?.() ?? "",
            }
          : undefined,
      }))
      setReviews(normalized)
    } catch (error) {
      console.error("Failed to load reviews:", error)
    } finally {
      setLoading(false)
    }
  }

  console.log("Loaded reviews:", reviews)

  const toggleReview = async (id: string, current: boolean) => {
    try {
      await updateReviewDisplayFlag(id, !current)
      toast.success(`Review ${current ? "hidden" : "made visible"} successfully`)
      await loadReviews()
    } catch (error) {
        toast.error(`Failed to update review: ${error instanceof Error ? error.message : "Unknown error"}`)
      console.error("Failed to update review:", error)
    }
  }

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (review.stream?.name || "").toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "visible" && review.AdminReviewDisplay) ||
      (filterStatus === "hidden" && !review.AdminReviewDisplay)

    return matchesSearch && matchesFilter
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-800 rounded w-64"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-800 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="w-full p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Review Management
              </h1>
              <p className="text-gray-400 mt-2">Manage and moderate user reviews from streams</p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{reviews.length}</div>
                <div className="text-sm text-gray-400">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {reviews.filter((r) => r.AdminReviewDisplay).length}
                </div>
                <div className="text-sm text-gray-400">Visible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  {reviews.filter((r) => !r.AdminReviewDisplay).length}
                </div>
                <div className="text-sm text-gray-400">Hidden</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search reviews, users, or streams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="all">All Reviews</option>
              <option value="visible">Visible Only</option>
              <option value="hidden">Hidden Only</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-16">
            <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No Reviews Found</h3>
            <p className="text-gray-500">
              {searchTerm || filterStatus !== "all"
                ? "Try adjusting your search or filter criteria"
                : "No reviews have been submitted yet"}
            </p>
          </div>
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="grid grid-cols-1  gap-6 ">
                  {/* User Info */}
                  <div className="flex items-center gap-4 ">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center relative">
                      {review.user.imageUrl ? (
                        <Image
                          src={review.user.imageUrl }
                          alt={review.user.username}
                          fill
                          className="w-full h-full rounded-full object-cover absolute"
                        />
                      ) : (
                        <User className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.user.username}</div>
                      <div className="text-sm text-gray-400">{review.user.email}</div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 space-y-4">
                    {/* Stream Info */}
                    {review.stream && (
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="text-sm text-gray-400 mb-1">Stream:</div>
                        <div className="font-medium text-white">{review.stream.name}</div>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-400">({review.rating}/5)</span>
                    </div>

                    {/* Comment */}
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <p className="text-gray-200 leading-relaxed">{review.comment}</p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(review.createdAt)}
                      </div>

                      {/* Visibility Toggle */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">Public Display:</span>
                        <button
                          onClick={() => toggleReview(review.id, review.AdminReviewDisplay)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                            review.AdminReviewDisplay
                              ? "bg-green-600/20 text-green-400 border border-green-600/30"
                              : "bg-red-600/20 text-red-400 border border-red-600/30"
                          }`}
                        >
                          {review.AdminReviewDisplay ? (
                            <>
                              <Eye className="w-4 h-4" />
                              <span>Visible</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-4 h-4" />
                              <span>Hidden</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
