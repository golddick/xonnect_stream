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

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox"
import { CreateScheduleStreamSchema } from "@/lib/Validator/createStream.validator"
import { createScheduledStream } from "@/actions/schedule"
import { toast } from "sonner"
import { UploadDropzone } from "@/lib/uploadthing"
import Image from "next/image"

const ScheduleForm = () => {
  const [thumbnailVideo, setThumbnailVideo] = useState<string | null>(null);
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      tags:''
    },
  });


  const onSubmit = async (values: z.infer<typeof CreateScheduleStreamSchema>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true); 
  
    try {
      await createScheduledStream({ 
        ...values, 
        thumbnailImage: values.thumbnailImage,
        thumbnailVideo: values.thumbnailVideo 
      });
  
      toast.success("Stream schedule created!");
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
    <div className="flex justify-center w-full h-auto">
      <Form {...form}>
        <form className="flex flex-col gap-4 w-full p-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 overflow-scroll hidden-scrollbar mb-10">
            <div className="w-full Container flex flex-col gap-4 rounded-lg">
              <div className="flex w-full gap-6">
                <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="flex font-sans font-thin" >Event Name</FormLabel>
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
                      <FormLabel className="flex font-sans font-thin" >Address</FormLabel>
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-thin">Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-black border-none ">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Music">Music</SelectItem>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Sport">Sport</SelectItem>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Talk Show">Talk Show</SelectItem>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Concert">Concert</SelectItem>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Comedy Show">Comedy Show</SelectItem>
                          <SelectItem className=" hover:bg-white hover:text-black" value="Others">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-thin">Tags</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="comma, separated, tags" 
                        {...field} 
                        className="bg-black border-none" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" >Description</FormLabel>
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
                            <FormLabel className="flex font-sans font-thin " >Price</FormLabel>
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
                    <FormLabel className="flex font-sans font-thin">Date & Time</FormLabel>
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
                      <FormLabel className="flex font-sans font-thin">Featuring starts</FormLabel>
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
                      <FormLabel className="flex font-sans font-thin">Organizers</FormLabel>
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
                    <FormLabel className="flex font-sans font-thin">Video Url</FormLabel>
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
                    <FormLabel className="flex font-sans font-thin">Organization Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="mavin@gmail.com" {...field} className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none bg-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col items-center justify-center w-full bg-black p-3 rounded-sm">

                  {!form.getValues('thumbnailImage') ? (
                    <UploadDropzone
                      endpoint="scheduleUploader"
                      appearance={{
                        label: {
                          color: "#FFFFFF",
                        },
                        allowedContent: {
                          color: "#FFFFFF",
                        },
                      }}
                      onClientUploadComplete={(res) => {
                        if (res?.[0]?.url) {
                          // Store the uploaded image URL in the form state
                          form.setValue("thumbnailImage", res[0]?.url);

                          // Optionally, log the uploaded image URL for debugging
                          console.log("Uploaded image URL:", res[0]?.url);
                        }
                      }}
                    />
                  ) : (
                    <div>
                      <Image
                        src={form.getValues("thumbnailImage") || ""}
                        width={200}
                        height={100}
                        alt="Event Image"
                        style={{ width: "200px", height: "auto" }}
                        className=" "
                      />
                    </div>
                  )}


              </div>
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
    </div>
  )
}

export default ScheduleForm





