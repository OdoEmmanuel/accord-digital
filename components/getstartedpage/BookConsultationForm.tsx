"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
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

const bookConsultationSchema = z.object({
    consultationType: z.string().min(1, "Please select a consultation type"),
    preferredFormat: z.enum(["in-person", "video-call", "phone"]),
});

type BookConsultationFormData = z.infer<typeof bookConsultationSchema>;

export default function BookConsultationForm() {
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
    } = useForm<BookConsultationFormData>({
        resolver: zodResolver(bookConsultationSchema),
        defaultValues: {
            preferredFormat: "in-person",
        },
    });

    const preferredFormat = watch("preferredFormat");

    const onSubmit = async (data: BookConsultationFormData) => {
        try {
            console.log("Consultation booking:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            alert("Consultation booked successfully!");
        } catch (error) {
            console.error("Error booking consultation:", error);
        }
    };

    return (
        <div
            className="bg-white rounded-xl flex flex-col w-full"
            style={{
                height: "auto",
                minHeight: "337px",
                padding: "32px",
                gap: "24px",
            }}
        >
            <div>
                <h2 className="text-xl font-bold text-gray-900">Book Free Consultation</h2>
                <p className="text-gray-600 text-sm mt-2">
                    Schedule a personalized consultation with our financial experts.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                {/* Consultation Type */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Consultation Type</Label>
                    <Select onValueChange={(value) => setValue("consultationType", value)}>
                        <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg h-11 w-full">
                            <SelectValue placeholder="Business Loan Consultation" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="business-loan">Business Loan Consultation</SelectItem>
                            <SelectItem value="personal-loan">Personal Loan Consultation</SelectItem>
                            <SelectItem value="investment">Investment Consultation</SelectItem>
                            <SelectItem value="financial-planning">Financial Planning</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.consultationType && (
                        <p className="text-red-500 text-xs">{errors.consultationType.message}</p>
                    )}
                </div>

                {/* Preferred Format */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">Preferred Format</Label>
                    <RadioGroup
                        value={preferredFormat}
                        onValueChange={(value) =>
                            setValue("preferredFormat", value as "in-person" | "video-call" | "phone")
                        }
                        className="flex flex-wrap gap-6"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="in-person" id="in-person" />
                            <Label htmlFor="in-person" className="cursor-pointer text-gray-600 text-sm">
                                In-Person
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="video-call" id="video-call" />
                            <Label htmlFor="video-call" className="cursor-pointer text-gray-600 text-sm">
                                Video Call
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-format" />
                            <Label htmlFor="phone-format" className="cursor-pointer text-gray-600 text-sm">
                                Phone
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                    style={{ padding: "16px 24px" }}
                >
                    {isSubmitting ? "Booking..." : "Book Free Consultation"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </div>
    );
}
