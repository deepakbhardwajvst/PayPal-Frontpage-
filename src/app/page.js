import HeroSection from "@/components/HeroSection/HeroSection";
import Stats from "@/components/Stats/Stats";
import PayMethods from "@/components/PayMethods/PayMethods";
import WhyPaypal from "@/components/WhyPaypal/WhyPaypal";
import ApprovalCard from "@/components/ApprovalCard/ApprovalCard";
import Orchestration from "@/components/Orchestration/Orchestration";
import ManageRisk from "@/components/ManageRisk/ManageRisk";
import ModularSol from "@/components/ModularSol/ModularSol";
export default function Home() {
  return (
    <div className=" max-w-[1400px] mx-auto ">
      <div className=" bg-zinc-200 shadow h-[1px]"></div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <HeroSection />
        <Stats />
        <PayMethods />
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
      <div className="flex  font-semibold text-blue-600 mt-8">
        Learn more about managing risk
        <span className="mt-1 mx-2">
          <FaArrowRight />
        </span>
      </div>
      <div className="mx-8 p-2 flex flex-col gap-8">
        <WhyPaypal />
        <div className=" flex font-semibold text-blue-600 text-wrap">
          About Fraud Protection
          <div className="m-1">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ModularSol />
      </div>
    </div>
  );
}
