import HeroSection from "@/components/HeroSection/HeroSection";
import Stats from "@/components/Stats/Stats";
import PayMethods from "@/components/PayMethods/PayMethods";
import WhyPaypal from "@/components/WhyPaypal/WhyPaypal";
export default function Home() {
  return (
    <div className=" max-w-[1400px] mx-auto ">
      <div className="mx-8 p-2 flex flex-col gap-8">
        <HeroSection />
        <Stats />
        <PayMethods />
        <WhyPaypal />
      </div>
    </div>
  );
}
