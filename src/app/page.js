import HeroSection from "@/components/HeroSection/HeroSection";
import Stats from "@/components/Stats/Stats";
import PayMethods from "@/components/PayMethods/PayMethods";
export default function Home() {
  return (
    <div className=" max-w-[1400px] mx-auto ">
      <div className="mx-8 p-2 flex flex-col gap-8">
        <HeroSection />
        <Stats />
        <PayMethods />
      </div>
    </div>
  );
}
