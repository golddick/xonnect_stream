
'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'

import React, { useEffect, useState } from 'react'
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
import FileUploader from "./FileUploader"
import { CreateScheduleStreamSchema } from "@/lib/Validator/createStream.validator"



const ScheduleForm = () => {
  
  


      // 1. Define your form.
      const form = useForm<z.infer<typeof CreateScheduleStreamSchema>>({
        resolver: zodResolver(CreateScheduleStreamSchema),
        defaultValues:
          {
            tittle:'',
            description:'',
          }
      })

      const onSubmit = async (values: z.infer<typeof CreateScheduleStreamSchema>) => {
        console.log(values); 


     

      };


      const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) return null;
    
     
  return (


    <div className="flex justify-center w-full h-auto  ">

    <Form {...form}>
      <form className="flex flex-col gap-4  w-full p-2" onSubmit={form.handleSubmit(onSubmit)} >

       <div className="flex flex-col gap-6 overflow-scroll hidden-scrollbar  mb-10">

       <div className="w-full Container flex flex-col gap-4 rounded-lg">
        <h1 className="flex capitalize  text-[15px] text-[#b28228]">Schedule Upcoming Stream / Event</h1>

      <div className="flex w-full gap-6 ">

        <FormField
          control={form.control}
          name='tittle'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Event Name</i></FormLabel>
              <FormControl>

            <Input placeholder=" Event Name" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  bg-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Address</i></FormLabel>
              <FormControl>

            <Input placeholder="Address" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  bg-black" />
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
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Description</i></FormLabel>
              <FormControl>
            <Textarea placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  bg-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
                <FormItem className="w-full ">
                   <FormLabel className="flex font-sans font-thin " style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}>
                        <i>Price</i>
                    </FormLabel>
                <FormControl>
                  
                    <div className="flex  items-center gap-4 h-auto w-full overflow-hidden rounded-md p-1  bg-black ">
                        <Image
                        src='/assets/icons/dollar.svg'
                        alt="dollar"
                        width={23}
                        height={23}
                        className="filter-grey-500"
                        />
                        <Input
                        type="number"
                        placeholder="price" {...field} 
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-2 border-#b28228  "
                        />

        <FormField
            control={form.control}
            name="isFree"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <div className="flex items-center  ">
                        <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 goldText font-thin">Free Ticket</label>
                        <Checkbox onCheckedChange={field.onChange} checked={field.value} id="isFree" className="mr-2 h-5 w-5  bg-transparent"/>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        /> 

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
            render={({ field: { onChange, value }}) => (
                <FormItem className="w-full">
                    <FormLabel className="flex font-sans font-thin" style={{ fontSize: '11px', fontWeight: '500', color: '#b28228' }}>
                        <i>Date & Time</i>
                    </FormLabel>
                    <FormControl>
                    <div  className=' flex w-full items-center  justify-between bg-black rounded-sm pr-2'>
                          
                    <DatePicker
                    className="focus-visible:ring-0 focus-visible:ring-primary focus-visible:ring-offset-0 rounded-l-sm border-none w-full p-2 bg-transparent"
                    // selected={startDate}
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

      <div className="flex w-full gap-6 ">

      <FormField
          control={form.control}
          name='artists'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Artists</i></FormLabel>
              <FormControl>


            <Input placeholder="John , Frank" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  bg-black" />

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


      <FormField
          control={form.control}
          name='organizers'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Organizers</i></FormLabel>
              <FormControl>

            <Input placeholder="Mavin Entertainment, choc city" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none   bg-black" />

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

<div>

</div>

        </div>

        <div className="w-full Container flex flex-col gap-4 rounded-lg">
              <FileUploader/>
          </div>

          <Button 
        type="submit"
        size='lg'
        variant='ghost'
        className=" from-[red] font-medium to-[black]  bg-gradient-to-br border-r border-b"
        >
        {
            form.formState.isSubmitting? ('submitting...'): ` Register`
        }
        </Button>
       </div>
    

      </form>
    </Form>
    </div>

  

  )
}

export default ScheduleForm



