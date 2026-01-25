import GetStartedHero from "@/components/common/heros/GetStartedHero";
import SendMessageForm from "@/components/getstartedpage/SendMessageForm";
import DirectContactCard from "@/components/getstartedpage/DirectContactCard";
import BookConsultationForm from "@/components/getstartedpage/BookConsultationForm";
import OfficeLocationCard from "@/components/getstartedpage/OfficeLocationCard";
import OfficeMap from "@/components/getstartedpage/OfficeMap";

export default function GetStarted() {
  return (
    <main>
      <GetStartedHero />

      {/* Forms Section */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#e6e9ec" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-14 space-y-8">
          {/* Top Row: Contact Forms */}
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            {/* Left Column - Send Message Form */}
            <div className="w-full lg:max-w-[648px]">
              <SendMessageForm />
            </div>

            {/* Right Column - Contact Cards */}
            <div className="flex flex-col gap-6 w-full lg:max-w-[648px]">
              <DirectContactCard />
              <BookConsultationForm />
            </div>
          </div>

          {/* Bottom Row: Office Location */}
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            <div className="w-full lg:max-w-[648px]">
              <OfficeLocationCard />
            </div>
            <div className="w-full lg:max-w-[648px]">
              <OfficeMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
