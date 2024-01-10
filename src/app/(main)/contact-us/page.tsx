'use client'
import React from 'react'
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

const jost = Jost({
    subsets: ['latin'],
    weight: '400'
})

const containerStyle = {
    width: '100%',
    height: '400px'
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

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return (
        <div className={`min-h-screen bg-[--main-background-color] py-20`}>
            <div className="container max-w-7xl py-20">
                <h1 className="text-[--primary] text-center text-4xl lg:text-7xl flex items-center justify-center">
                    <span className="divider"></span>
                    Contact Us
                    <span className="divider"></span>
                </h1>
                <GetInTouch />

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