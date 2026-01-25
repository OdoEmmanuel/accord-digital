"use client";

import Image from "next/image";

export default function OfficeMap() {
    return (
        <div
            className="rounded-xl overflow-hidden relative bg-gray-200"
            style={{
                width: "100%",
                maxWidth: "648px",
                height: "448px",
            }}
        >
            {/* 
        Note: You'll need to add the actual map image to your public folder 
        at /map.png or change the src below
      */}
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/map.png')",
                    backgroundColor: "#e5e7eb", // Fallback color
                }}
            />
        </div>
    );
}
