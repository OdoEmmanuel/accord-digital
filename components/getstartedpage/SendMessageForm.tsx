"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const sendMessageSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().optional(),
    serviceInterest: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    preferredContactMethod: z.enum(["email", "phone", "whatsapp"]),
});

type SendMessageFormData = z.infer<typeof sendMessageSchema>;

export default function SendMessageForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
    } = useForm<SendMessageFormData>({
        resolver: zodResolver(sendMessageSchema),
        defaultValues: {
            preferredContactMethod: "email",
        },
    });

    const preferredContactMethod = watch("preferredContactMethod");

    const onSubmit = async (data: SendMessageFormData) => {
        try {
            console.log("Form submitted:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div
            className="bg-white rounded-xl flex flex-col w-full"
            style={{
                height: "auto",
                minHeight: "767px",
                padding: "32px",
                gap: "24px",
            }}
        >
            <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col h-full gap-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            placeholder="Enter your name"
                            {...register("fullName")}
                            className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                            Phone Number
                        </Label>
                        <Input
                            id="phoneNumber"
                            placeholder="+234 XXX XXX XXXX"
                            {...register("phoneNumber")}
                            className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full"
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                            Company (Optional)
                        </Label>
                        <Input
                            id="company"
                            placeholder="Company name"
                            {...register("company")}
                            className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Service Interest</Label>
                    <Select onValueChange={(value) => setValue("serviceInterest", value)}>
                        <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="business-loans">Business Loans</SelectItem>
                            <SelectItem value="investment">Investment Advisory</SelectItem>
                            <SelectItem value="personal-loans">Digital Banking Solutions</SelectItem>
                            <SelectItem value="financial-planning">Financial Planning</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.serviceInterest && (
                        <p className="text-red-500 text-xs">{errors.serviceInterest.message}</p>
                    )}
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Tell us about your needs and how we can help"
                        {...register("message")}
                        className="bg-gray-50 border-gray-200 rounded-lg flex-1 min-h-[120px] resize-none w-full"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message.message}</p>
                    )}
                </div>

                <div className="space-y-5">
                    <Label className="text-sm font-medium text-gray-700">Preferred Contact Method</Label>
                    <RadioGroup
                        value={preferredContactMethod}
                        onValueChange={(value) =>
                            setValue("preferredContactMethod", value as "email" | "phone" | "whatsapp")
                        }
                        className="flex flex-wrap gap-6"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-method" />
                            <Label htmlFor="email-method" className="cursor-pointer text-gray-600 text-sm">
                                Email
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-method" />
                            <Label htmlFor="phone-method" className="cursor-pointer text-gray-600 text-sm">
                                Phone
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="whatsapp" id="whatsapp-method" />
                            <Label htmlFor="whatsapp-method" className="cursor-pointer text-gray-600 text-sm">
                                Whatsapp
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold mt-5 cursor-pointer"
                    style={{ padding: "16px 24px" }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </div>
    );
}
