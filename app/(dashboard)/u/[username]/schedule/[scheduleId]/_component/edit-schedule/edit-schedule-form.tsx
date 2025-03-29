
'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'

import React, { startTransition, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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
import Image from "next/image"

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox"
import { EditScheduleStreamSchema } from "@/lib/Validator/createStream.validator"
import { createScheduledStream, updateScheduledStream } from "@/actions/schedule"
import { toast } from "sonner"
import { UploadDropzone } from "@/lib/uploadthing"
import { Schedule } from "@prisma/client"
import { ScrollArea } from "@/components/ui/scroll-area"
import FileUploader from "./FileUploader"


interface EditScheduleFormProps {
  schedule: Schedule | null
}

const EditScheduleForm = ({schedule}:EditScheduleFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof EditScheduleStreamSchema>>({
    resolver: zodResolver(EditScheduleStreamSchema),
    defaultValues: {
      title: schedule?.title || "",
      address: schedule?.address || "",
      description: schedule?.description || "",
      amount: schedule?.amount || 0,
      isFree: schedule?.isFree || false,
      eventDateTime: schedule?.eventDateTime || new Date(),
      artists: schedule?.artists || "",
      organizers: schedule?.organizers || "",
      orgEmail:schedule?.orgEmail || '',
      thumbnailVideo:schedule?.thumbnailVideo || ''
    },
  });


  const onSubmit = async (values: z.infer<typeof EditScheduleStreamSchema>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true); 
    
    try {
      await updateScheduledStream(schedule?.id as string, values);
      toast.success("Stream schedule updated!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ScrollArea className="flex justify-center w-full h-[500px] lg:h-[600px] ">
      <Form {...form}>
        <form className="flex flex-col gap-4 w-full p-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 overflow-scroll hidden-scrollbar mb-10">
            <div className="w-full Container flex flex-col gap-4 rounded-lg">
              <h1 className="flex capitalize text-[15px] text-[#b28228]"> Update Schedule Stream / Event</h1>
              <div className="flex w-full gap-6">
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Event Name</i></FormLabel>
                      <FormControl>
                        <Input placeholder="Event Name" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
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
                      <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Address</i></FormLabel>
                      <FormControl>
                        <Input placeholder="Address" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Description</i></FormLabel>
                    <FormControl>
                      <Textarea placeholder="max stream" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4">
             
                             
                     {/* Amount Field */}
                     <FormField
                       control={form.control}
                       name="amount"
                       render={({ field }) => (
                         <FormItem className="w-full">
                            <FormLabel className="flex font-sans font-thin text-[#b28228]" ><i>Price</i></FormLabel>
                           <FormControl>
                             <div className="flex items-center gap-4 h-auto w-full overflow-hidden rounded-md p-1 bg-black">
                               <Image
                                 src="/assets/icons/dollar.svg"
                                 alt="dollar"
                                 width={23}
                                 height={23}
                                 className="filter-grey-500"
                               />
                               <Input
                                 type="number"
                                 placeholder="Price"
                                 {...field}
                                 className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-2 border-#b28228"
                               />
                             </div>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
             
                     {/* Free Ticket Checkbox */}
                     <FormField
                       control={form.control}
                       name="isFree"
                       render={({ field }) => (
                         <FormItem>
                           <FormControl>
                             <div className="flex items-center">
                               <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 goldText font-thin">
                                 Free Ticket
                               </label>
                               <Checkbox onCheckedChange={field.onChange}  checked={field.value} id="isFree" className="mr-2 h-5 w-5 bg-transparent" />
                             </div>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                     />
             
                     </div>
              <FormField
                control={form.control}
                name='eventDateTime'
                render={({ field: { onChange, value } }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Date & Time</i></FormLabel>
                    <FormControl>
                      <div className='flex w-full items-center justify-between bg-black rounded-sm pr-2'>
                        <DatePicker
                          className="focus-visible:ring-0 focus-visible:ring-primary focus-visible:ring-offset-0 rounded-l-sm border-none w-full p-2 bg-transparent"
                          selected={value ? new Date(value) : null}
                          onChange={onChange}
                          showTimeSelect
                          timeInputLabel="Time"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          minDate={new Date()}
                          placeholderText="Pick Event Date & Time"
                        />
                        <Image
                          src='/assets/icons/calendar.svg'
                          alt="calendar"
                          width={23}
                          height={23}
                          className="filter-grey-500"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full gap-6">
                <FormField
                  control={form.control}
                  name='artists'
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Artists</i></FormLabel>
                      <FormControl>
                        <Input placeholder="John , Frank" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
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
                      <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Organizers</i></FormLabel>
                      <FormControl>
                        <Input placeholder="Mavin Entertainment, choc city" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
                  
            <FormField
                control={form.control}
                name='thumbnailVideo'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Video Url</i></FormLabel>
                    <FormControl>
                      <Input placeholder="Youtube Url" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
                control={form.control}
                name='orgEmail'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}><i>Organization Email</i></FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="mavin@gmail.com" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             
             <FileUploader thumbnailImg={schedule?.thumbnailImage} scheduleID={schedule?.id}/>
            <Button
              type="submit"
              size='lg'
              variant='ghost'
              className="from-[red] font-medium to-[black] bg-gradient-to-br border-r border-b"
            >
              {form.formState.isSubmitting ? ('submitting...') : ` Register`}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  )
}

export default EditScheduleForm



