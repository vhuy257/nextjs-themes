'use client'
import React, { useContext } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Jost } from 'next/font/google'
import GetInTouch from '@/components/Homepage/GetInTouch';
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})

const containerStyle = {
    width: '100%',
    height: '600px'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};
  
const ContactUs = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBk96sVwyf_p3JowkFdmNVWhJ-ZuTJMqlI"
    })

    const classInput = `rounded-none p-6 bg-transparent text-center border-[#E3DAC6A6]`
    const classLabel = `text-lg text-[#E3DAC6A6]`
    const  errorClass = `text-lg`

    const form = useForm()
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    const onSubmit = (data: any) => { console.log(data, 'data') }

    return (
        <div className={`min-h-screen bg-[--main-background-color] pt-20`}>
            <div className="container max-w-8xl py-20">
                <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center">
                    <span className="divider"></span>
                    Contact Us
                    <span className="divider"></span>
                </h1>
                <GetInTouch />
                <div className="text-[--primary] mx-auto">
                    <h2 className='text-2xl lg:text-5xl flex items-center justify-center'>
                        <span className="divider"></span>
                        Looking for private event?
                        <span className="divider"></span>
                    </h2>
                    <p className={`${jost.className} mt-5 max-w-5xl mx-auto text-center`}>
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
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
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
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
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
                                name="phone_number"
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
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
                                name="type_event"
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
                                            <FormLabel className={classLabel}>Type of event</FormLabel>
                                            <FormControl>
                                                <Input className={classInput} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number_guest"
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
                                            <FormLabel className={classLabel}>Number of Guests</FormLabel>
                                            <FormControl>
                                                <Input className={classInput} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date_of_event"
                                render={(field: any) => (
                                    <FormItem className={`${jost.className} text-center`}>
                                        <FormLabel className={classLabel}>Date of Event</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal block",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                        >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon />
                                                    </Button>                                                        
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="text-center w-full col-span-2 mt-10">
                                <Button variant={'outline'} className='bg-transparent border-2 border-[#E3DAC6A6] rounded-none p-6 w-[120px] mx-auto text-lg text-[--primary]'>
                                    Submit
                                </Button>
                            </div>                            
                        </form>
                    </Form>
                </div>
            </div>            
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                </GoogleMap>
            )}
        </div>
    )
}

export default ContactUs