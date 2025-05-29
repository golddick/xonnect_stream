// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { createPartner } from '@/actions/partners'
// import { toast } from 'sonner'
// import { IndustryType } from '@prisma/client'
// import { Loader } from 'lucide-react'
// import { UploadDropzone } from '@/lib/uploadthing'
// import Image from 'next/image'

// export function AddPartner() {
//   const [loading, setLoading] = useState(false)

//   const industryOptions = Object.values(IndustryType).map(type => ({
//     value: type,
//     label: type.charAt(0) + type.slice(1).toLowerCase(),
//   }))

//   const [formData, setFormData] = useState({
//     companyName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     website: '',
//     logo: '',
//     description: '',
//     industry: IndustryType.OTHER,
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const newPartner = await createPartner({
//         ...formData,
//         industry: formData.industry as IndustryType,
//       })

//       if (newPartner.success) {
//         toast.success('Submission successful!')
//         setFormData({
//           companyName: '',
//           contactName: '',
//           email: '',
//           phone: '',
//           website: '',
//           logo: '',
//           description: '',
//           industry: IndustryType.OTHER,
//         })
//       } else {
//         toast.error(newPartner.message || 'Something went wrong')
//       }
//     } catch (error) {
//       toast.error('Failed to create partner')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Apply Now</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Become a Partner</DialogTitle>
//           <DialogDescription>
//             Share your details to partner with us.
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="grid gap-4 py-4">
//           {[
//             { label: 'Company Name', name: 'companyName' },
//             { label: 'Contact Name', name: 'contactName' },
//             { label: 'Email', name: 'email', type: 'email' },
//             { label: 'Phone', name: 'phone' },
//             { label: 'Website (Optional)', name: 'website' },
//             { label: 'Description (Optional)', name: 'description' },
//           ].map(({ label, name, type }) => (
//             <div key={name} className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor={name} className="text-right">
//                 {label}
//               </Label>
//               <Input
//                 id={name}
//                 name={name}
//                 type={type || 'text'}
//                 value={formData[name as keyof typeof formData]}
//                 onChange={handleChange}
//                 className="col-span-3"
//               />
//             </div>
//           ))}

//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="industry" className="text-right">
//               Industry
//             </Label>
//             <select
//               id="industry"
//               name="industry"
//               value={formData.industry}
//               onChange={handleChange}
//               className="col-span-3 border rounded-md p-2"
//               required
//             >
//               {industryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex flex-col items-center justify-center w-full bg-black p-3 rounded-sm gap-4">
//             <Label className="text-white">Upload Logo</Label>
//             {!formData.logo ? (
//               <UploadDropzone
//                 endpoint="partnerLogoUploader"
//                 appearance={{
//                   label: { color: "#FFFFFF" },
//                   allowedContent: { color: "#FFFFFF" },
//                 }}
//                 onClientUploadComplete={(res) => {
//                   if (res?.[0]?.url) {
//                     setFormData(prev => ({ ...prev, logo: res[0].url }))
//                   }
//                 }}
//               />
//             ) : (
//               <>
//                 <Image
//                   src={formData.logo}
//                   width={100}
//                   height={50}
//                   alt="Partner Logo"
//                   className="rounded-md border"
//                 />
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setFormData(prev => ({ ...prev, logo: '' }))}
//                 >
//                   Remove Image
//                 </Button>
//               </>
//             )}
//           </div>

//           <DialogFooter>
//             <Button type="submit" disabled={loading}>
//               {loading ? <Loader className="animate-spin size-4" /> : 'Submit'}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }









'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createPartner } from '@/actions/partners'
import { toast } from 'sonner'
import { IndustryType } from '@prisma/client'
import { Loader, Upload, X, Building2, User, Mail, Phone, Globe, FileText, Briefcase, Image as ImageIcon } from 'lucide-react'
import { UploadDropzone } from '@/lib/uploadthing'
import Image from 'next/image'

export function AddPartner() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const industryOptions = Object.values(IndustryType).map(type => ({
    value: type,
    label: type.charAt(0) + type.slice(1).toLowerCase().replace(/_/g, ' '),
  }))

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    logo: '',
    description: '',
    industry: IndustryType.OTHER,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const newPartner = await createPartner({
        ...formData,
        industry: formData.industry as IndustryType,
      })

      if (newPartner.success) {
        toast.success('Partnership application submitted successfully!')
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          logo: '',
          description: '',
          industry: IndustryType.OTHER,
        })
        setOpen(false)
      } else {
        toast.error(newPartner.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error('Failed to submit application')
    } finally {
      setLoading(false)
    }
  }

  const formFields = [
    { 
      label: 'Company Name', 
      name: 'companyName', 
      icon: Building2, 
      placeholder: 'Enter your company name',
      required: true 
    },
    { 
      label: 'Contact Name', 
      name: 'contactName', 
      icon: User, 
      placeholder: 'Your full name',
      required: true 
    },
    { 
      label: 'Email Address', 
      name: 'email', 
      type: 'email', 
      icon: Mail, 
      placeholder: 'your@email.com',
      required: true 
    },
    { 
      label: 'Phone Number', 
      name: 'phone', 
      icon: Phone, 
      placeholder: '+1 (555) 123-4567',
      required: true 
    },
    { 
      label: 'Website', 
      name: 'website', 
      icon: Globe, 
      placeholder: 'https://yourcompany.com',
      required: false 
    },
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-gradient-to-r from-red-500 to-red-900 hover:from-red-700 hover:to-red-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <Building2 className="w-4 h-4 mr-2" />
          Apply Now
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3 pb-6 border-b border-gray-100">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
            Become a Partner
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            Join our network of successful partners and grow your business with us.
          </DialogDescription>
        </DialogHeader>

          {/* Form Fields */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {formFields.map(({ label, name, type, icon: Icon, placeholder, required }) => (
            <div key={name} className="space-y-2">
              <Label htmlFor={name} className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Icon className="w-4 h-4 text-gray-500" />
                {label}
                {required && <span className="text-red-700">*</span>}
              </Label>
              <div className="relative">
                <Input
                  id={name}
                  name={name}
                  type={type || 'text'}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required={required}
                  className="pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>
          ))}

          {/* Industry Selector */}
          <div className="space-y-2">
            <Label htmlFor="industry" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gray-500" />
              Industry
              <span className="text-red-500">*</span>
            </Label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200 hover:border-gray-300 bg-white text-black"
              required
            >
              {industryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Company Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your company, services, and why you'd like to partner with us..."
              className="min-h-[100px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-blue-200 transition-all duration-200 hover:border-gray-300 resize-none"
            />
          </div>

          {/* Logo Upload Section */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-gray-500" />
              Company Logo
            </Label>
            
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
              {!formData.logo ? (
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <UploadDropzone
                    endpoint="partnerLogoUploader"
                    appearance={{
                      container: "border-none bg-transparent",
                      label: { 
                        color: "#374151",
                        fontSize: "14px",
                        fontWeight: "500"
                      },
                      allowedContent: { 
                        color: "#6B7280",
                        fontSize: "12px"
                      },
                      button: "bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500"
                    }}
                    onClientUploadComplete={(res) => {
                      if (res?.[0]?.url) {
                        setFormData(prev => ({ ...prev, logo: res[0].url }))
                        toast.success('Logo uploaded successfully!')
                      }
                    }}
                    onUploadError={() => {
                      toast.error('Failed to upload logo')
                    }}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative group">
                    <Image
                      src={formData.logo}
                      width={120}
                      height={80}
                      alt="Company Logo"
                      className="rounded-lg border-2 border-gray-200 shadow-sm object-contain bg-white"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Company Logo</span>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, logo: '' }))}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Remove Logo
                  </Button>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="pt-6 border-t border-gray-100">
            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1 sm:flex-none"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={loading || !formData.companyName || !formData.contactName || !formData.email}
                className="flex-1 sm:flex-none bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 text-white font-semibold px-8 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-4 h-4 mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Building2 className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}