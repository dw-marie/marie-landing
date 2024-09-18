"use client"

import { supabase } from "@/utils/supabaseClient"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
const formSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }).min(2).max(50),
  lastName: z.string({
    required_error: "Last name is required",
  }).min(2).max(50),
  emailAddress: z.string({
    required_error: "Email address is required",
  }).email(),
  phoneNumber: z.string().max(15),
})

export default function EarlyAccess() {
    const [signedUp, setSignedUp] = useState(false);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { firstName, lastName, emailAddress, phoneNumber } = values;
        
        const { error } = await supabase
            .from('early_access')
            .insert({ first_name: firstName, last_name: lastName, email_address: emailAddress, phone_number: phoneNumber });

        if (error) {
            console.log(error.message)
        } else {
            setSignedUp(true);
        }
    }

    useEffect(() => {
        if (signedUp) {
            setTimeout(() => {
                router.push('/');
            }, 6000);
        }
    }, [signedUp]);

    return (
        <>
        {signedUp ? (
            <div className="w-screen flex items-center justify-center 2xl:p-20">
                <div className="text-2xl 2xl:text-6xl font-bold">
                    <p className="mb-4">We appreciate you joining us, you will be one of the first to know when we launch!</p>
                    <p></p>
                </div>
            </div>
        ) : (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 2xl:space-y-16 lg:w-1/2 bg-white p-6 2xl:p-12 rounded-lg border-2 border-gray-200">
                    <div className="font-bold text-2xl 2xl:text-4xl text-[#105DFB]">
                        <p>Be the first to explore homes.</p>
                    </div>
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="2xl:text-xl"> First Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input className="2xl:text-xl 2xl:py-8" placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="2xl:text-xl">Last Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input className="2xl:text-xl 2xl:py-8" placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="2xl:text-xl">Email Address <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input className="2xl:text-xl 2xl:py-8" placeholder="hello@europemarie.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="2xl:text-xl">Phone Number</FormLabel>
                        <FormControl>
                            <Input className="2xl:text-xl 2xl:py-8" placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex flex-row justify-start items-center">
                        <Button type="submit" className="2xl:text-xl 2xl:py-8 bg-[#105DFB]">Submit</Button>
                    </div>
                </form>
            </Form>
        )}
        </>
    )
}
