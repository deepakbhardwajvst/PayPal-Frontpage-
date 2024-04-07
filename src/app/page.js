import HeroSection from "@/components/HeroSection/HeroSection";
import Stats from "@/components/Stats/Stats";
import PayMethods from "@/components/PayMethods/PayMethods";
import WhyPaypal from "@/components/WhyPaypal/WhyPaypal";
import ApprovalCard from "@/components/ApprovalCard/ApprovalCard";
import Orchestration from "@/components/Orchestration/Orchestration";
import ManageRisk from "@/components/ManageRisk/ManageRisk";
export default function Home() {
  return (
    <div className=" max-w-[1400px] mx-auto ">
      <div className=" bg-zinc-200 shadow h-[1px]"></div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <Hero />
        <PaypalStats />
        <PaypalPayMethods />
        <WhyPaypal />
      </div>
      <div className="mt-20">
        <ApprovalCard />
      </div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <WhyPaypal />
        <Orchestration />
        <WhyPaypal />
      </div>
      <div className="mt-20">
        <ManageRisk />
      </div>
    </div>
  );
}
