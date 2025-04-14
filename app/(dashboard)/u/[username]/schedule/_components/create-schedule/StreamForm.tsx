



'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import React, { startTransition, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox"
import { CreateScheduleStreamSchema } from "@/lib/Validator/createStream.validator"
import { createScheduledStream } from "@/actions/schedule"
import { toast } from "sonner"
import { UploadDropzone } from "@/lib/uploadthing"
import Image from "next/image"

const ScheduleForm = () => {
  const [isClient, setIsClient] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sellPhysicalTicket, setSellPhysicalTicket] = useState(false)

  const form = useForm<z.infer<typeof CreateScheduleStreamSchema>>({
    resolver: zodResolver(CreateScheduleStreamSchema),
    defaultValues: {
      title: '',
      address: '',
      description: '',
      eventDateTime: undefined,
      amount: 0,
      artists: '',
      organizers: '',
      category: '',
      tags: '',
      isFree: false,
      orgEmail: '',
      thumbnailImage: '',
      thumbnailVideo: '',
      TicketType: '',
      sellPhysicalTicket: false,
      physicalTicketAmount: 0,
      availableSlots: 0
    },
  })

  const onSubmit = async (values: z.infer<typeof CreateScheduleStreamSchema>) => {
    if (isSubmitting) return

    setIsSubmitting(true)
    try {
      await createScheduledStream({ ...values })
      toast.success("Stream schedule created!")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="flex justify-center w-full h-auto">
      <Form {...form}>
        <form className="flex flex-col gap-4 w-full p-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 overflow-scroll hidden-scrollbar mb-10">
            {/* Title and Address */}
            <div className="flex w-full gap-6">
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Event Name" {...field} className="bg-black border-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} className="bg-black border-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black border-none">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value="Music">Music Concert</SelectItem>
                        <SelectItem value="Sport">Sport</SelectItem>
                        <SelectItem value="Talk Show">Talk Show</SelectItem>
                        <SelectItem value="Festival Concert">Festival Concert</SelectItem>
                        <SelectItem value="Comedy Show">Comedy Show</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="comma, separated, tags" {...field} className="bg-black border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="max stream" {...field} className="bg-black border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price and Free Ticket */}
            <div className="flex items-center gap-4 w-full">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-4 p-1 bg-black rounded-md">
                        <Image src="/assets/icons/dollar.svg" alt="dollar" width={23} height={23} />
                        <Input type="number" placeholder="Price" {...field} className="bg-black border-none" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFree"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center">
                        <label htmlFor="isFree" className="pr-3">Free?</label>
                        <Checkbox onCheckedChange={field.onChange} checked={field.value} id="isFree" className="mr-2 h-5 w-5 bg-transparent" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Sell Physical Ticket Checkbox */}
            <FormItem>
              <FormLabel>Also Sell Physical Ticket?</FormLabel>
              <Checkbox
                checked={sellPhysicalTicket}
                onCheckedChange={(checked) => {
                  setSellPhysicalTicket(!!checked)
                  form.setValue("sellPhysicalTicket", Boolean(checked))
                }}
                className="mr-2 h-5 w-5 bg-transparent ml-2"
              />
            </FormItem>

            {/* Physical Ticket Amount + Slots (Conditional) */}
            {sellPhysicalTicket && (
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="physicalTicketAmount"
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel>Ticket Amount</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Amount" {...field} className="bg-black border-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="availableSlots"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Available Slots</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Slots" {...field} className="bg-black border-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="TicketType"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Ticket Type</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Regular,VIP" {...field} className="bg-black border-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Event Date & Time */}
            <FormField
              control={form.control}
              name='eventDateTime'
              render={({ field: { onChange, value } }) => (
                <FormItem className="w-full">
                  <FormLabel>Date & Time</FormLabel>
                  <FormControl>
                    <div className='flex items-center bg-black rounded-sm pr-2'>
                      <DatePicker
                        className="w-full p-2 bg-transparent"
                        selected={value ? new Date(value) : null}
                        onChange={onChange}
                        showTimeSelect
                        dateFormat="MM/dd/yyyy h:mm aa"
                        minDate={new Date()}
                        placeholderText="Pick Event Date & Time"
                      />
                      <Image src='/assets/icons/calendar.svg' alt="calendar" width={23} height={23} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Artists & Organizers */}
            <div className="flex w-full gap-6">
              <FormField
                control={form.control}
                name='artists'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Featuring Artists</FormLabel>
                    <FormControl>
                      <Input placeholder="John , Frank" {...field} className="bg-black border-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='organizers'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Organizers</FormLabel>
                    <FormControl>
                      <Input placeholder="Mavin Entertainment, choc city" {...field} className="bg-black border-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Video Link */}
            <FormField
              control={form.control}
              name='thumbnailVideo'
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Video Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Youtube Url" {...field} className="bg-black border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name='orgEmail'
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Organization Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="mavin@gmail.com" {...field} className="bg-black border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail Upload */}
            <div className="flex flex-col items-center justify-center w-full bg-black p-3 rounded-sm">
              {!form.getValues('thumbnailImage') ? (
                <UploadDropzone
                  endpoint="scheduleUploader"
                  appearance={{
                    label: { color: "#FFFFFF" },
                    allowedContent: { color: "#FFFFFF" },
                  }}
                  onClientUploadComplete={(res) => {
                    if (res?.[0]?.url) {
                      form.setValue("thumbnailImage", res[0]?.url)
                    }
                  }}
                />
              ) : (
                <Image
                  src={form.getValues("thumbnailImage") || ""}
                  width={200}
                  height={100}
                  alt="Event Image"
                  className=""
                />
              )}
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" variant="ghost" className="from-[red] font-medium to-[black] bg-gradient-to-br border-r border-b">
              {form.formState.isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ScheduleForm
