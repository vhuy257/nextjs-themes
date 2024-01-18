'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Jost } from 'next/font/google'
import GetInTouch from '@/components/restaurant/Homepage/GetInTouch';
import { useForm } from "react-hook-form"
import { Transition } from '@headlessui/react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from '@radix-ui/react-icons'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { useCreateReservation } from '@/hooks';
import Image from 'next/image';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})
  
const ContactUs = () => {
    const type_event = [
        {value: 'null', label: '-- Please choose an options --'},
        {value: 'open_house', label: 'Open House'},
        {value: 'wedding', label: 'Wedding'},
        {value: 'business_event', label: 'Business Event'},
        {value: 'other', label: 'Other'}
    ]

    const number_guest = [
        {value: 'null', label: '-- Please choose an options --'},
        {value: '0-25', label: '0-25'},
        {value: '26-50', label: '26-50'},
        {value: '50+', label: '50+'},
    ]

    const classInput = `rounded-none p-6 bg-transparent text-center border-[#E3DAC6A6] placeholder:text-center flex items-center text-lg justify-center`
    const classLabel = `text-lg text-[#E3DAC6A6]`
    const classField = `col-span-2 sm:col-span-1`
    const errorClass = `text-lg`

    const mutation: any = useCreateReservation();

    const { isPending, isError, isSuccess } = mutation;
    const [isShowing, setIsShowing] = useState(false)

    const form = useForm()

    const onSubmit = (data: any) => mutation.mutate(data)

    useEffect(() => {
        setIsShowing(true)
    }, [])

    useEffect(() => {
        if(isSuccess) {
            form.reset({
                name: '',
                email: '',
                phone: '',
                type_of_event: 'null',
                number_of_guest: 'null',
                date_of_event: '',
            })
            toast('Event create successfully!!')
        }
    }, [isSuccess])

    return (
        <Transition
            show={isShowing}
            enter="transition-all ease-in-out duration-2000"
            enterFrom="-translate-y-8"
            enterTo="translate-y-0"            
        >
            <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
                <div className="container max-w-8xl py-20">
                    <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center relative">
                        <span className="divider"></span>
                        <span className="whitespace-nowrap">Contact Us</span>
                        <span className="divider"></span>                        
                        <Image src={'/images/32-1.png'} alt="bg_11" width={120} height={80} className="absolute right-0 top-0"/>
                    </h1>
                    <div className="relative max-w-7xl mx-auto">
                        <Image src={'/images/24-1@2x.png'} alt="bg_11" width={180} height={100} className="absolute left-0 bottom-0"/>
                        <div className="z-20">
                            <GetInTouch />
                        </div>
                    </div>
                    <div className="text-[--primary] mx-auto">
                        <h2 className='text-2xl lg:text-5xl flex items-center justify-center'>
                            <span className="divider"></span>
                            <span className="whitespace-nowrap">Looking for private event?</span>
                            <span className="divider"></span>
                        </h2>
                        <p className={`${jost.className} mt-5 max-w-5xl mx-auto text-center text-lg`}>
                            For private event enquiries, or for any other Grand Restaurant enquiries, please email us on enquiries@grandrestaurant.com.
                            Our bookings & enquiries team will get in touch with you within 2 business days.
                        </p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid grid-cols-2 gap-4 align-center max-w-4xl mx-auto text-center">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    rules={{
                                        required: 'Please fill out this field'
                                    }}
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                                <FormLabel className={classLabel}>Your name</FormLabel>
                                                <FormControl>
                                                    <Input className={classInput} {...field} />
                                                </FormControl>
                                                <FormMessage className={errorClass}/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    rules={{
                                        required: 'Please fill out this field'
                                    }}
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                                <FormLabel className={classLabel}>Your email</FormLabel>
                                                <FormControl>
                                                    <Input className={classInput} {...field} />
                                                </FormControl>
                                                <FormMessage className={errorClass}/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                                <FormLabel className={classLabel}>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input className={classInput} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="type_of_event"
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                                <FormLabel className={classLabel}>Type of event</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value || 'null'}>
                                                    <FormControl>
                                                        <SelectTrigger className={classInput}>
                                                            <SelectValue/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className='text-center mx-auto text-lg'>
                                                        {
                                                            type_event.map((k: any, key: number) => (
                                                                <SelectItem value={k.value} className="text-lg" key={key}>
                                                                    {k.label}
                                                                </SelectItem>
                                                            ))
                                                        }                                                                                                               
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="number_of_guest"
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                                <FormLabel className={classLabel}>Number of Guests</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value || 'null'}>
                                                        <FormControl>
                                                            <SelectTrigger className={classInput}>
                                                                <SelectValue/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="text-lg">
                                                            {number_guest.map((k: any, i: number) => (
                                                                <SelectItem value={k.value} key={i} className="text-lg">{k.label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="date_of_event"
                                    render={({ field }) => (
                                        <FormItem className={`${jost.className} text-center ${classField}`}>
                                            <FormLabel className={classLabel}>Date of Event</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full bg-transparent rounded-none p-6 pl-3 text-lg placeholder:text-[--primary] text-center flex items-center border-[#E3DAC6A6] relative",                                                          
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>dd/mm/yyyy</span>
                                                            )}
                                                            <CalendarIcon className='absolute right-2 top-1/2 -translate-y-1/4'/>
                                                        </Button>                                                        
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) => date < new Date("1900-01-01")}                                                    
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-center w-full col-span-2 mt-10">
                                    <Button variant={'outline'} 
                                        className={`bg-transparent border-2 border-[#E3DAC6A6] rounded-none p-6 w-[120px] mx-auto text-xl text-[--primary] ${
                                            cn({
                                                'pointer-events-none opacity-70': isPending
                                            })
                                        }`}>
                                        {isPending && (
                                            <span className="animate-spin mr-5">
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        )}                                                                                
                                        Submit
                                    </Button>
                                </div>                            
                            </form>
                        </Form>
                    </div>
                </div>                            
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.971248971257!2d106.59359947597052!3d10.889789489265892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d58f044d85bf%3A0xf592ed668a319264!2zMyBUcuG6p24gS2jhuq9jIENow6JuLCBUVC4gSMOzYyBNw7RuLCBIw7NjIE3DtG4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1705047176722!5m2!1svi!2s" width="100%" height="550" loading="lazy"></iframe>
            </div>
            <Toaster />
        </Transition>
    )
}

export default ContactUs