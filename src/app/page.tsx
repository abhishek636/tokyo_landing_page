"use client";

import InfinitySection from "@/app/components/InfinitySection";
import PartnersMarquee from "@/app/components/PartnersMarquee";
import TokenizationSection from "@/app/components/TokenizationSection";
import TokenizationStep from "@/app/components/TokenizationStep";
import FloatingSection from "@/app/components/FloatingSection";
import Token from "@/app/components/Token";
import ProfileTooltipSection from "@/app/components/ProfileTooltipSection";

export default function Home() {
  return (
    <div>
      <InfinitySection />
      <PartnersMarquee />
      <TokenizationSection />
      <TokenizationStep />
      <FloatingSection />
      <Token /> 
      <ProfileTooltipSection />
    </div>
  );
}
