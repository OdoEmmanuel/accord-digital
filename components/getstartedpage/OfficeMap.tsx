"use client";


export default function OfficeMap() {
    return (
        <div
            className="rounded-xl overflow-hidden relative"
            style={{
                width: "100%",
                maxWidth: "648px",
                height: "448px",
            }}
        >
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/map.png')",
                }}
            />
        </div>
    );
}
