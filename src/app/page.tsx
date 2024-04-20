import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
//import BenefitSection from "@/components/sections/BenefitSection";
//import CollabSection from "@/components/sections/CollabSection";
//import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FeatureCards from "@/components/sections/feature-cards";
//import OurFeatureSection from "@/components/sections/OurFeatureSection";
//import SupportOurPartnerSection from "@/components/sections/SupportOurPartnerSection";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
  const { userId } = auth();
  return (
    <main >
      <Header />
        <HeroSection /> 
        <FeatureCards />
        <FeaturesSection /> 
        <Footer />
      <div className="mt-8 flex gap-4">
        {!userId ? (
          <>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/sign-up"
            >
              Sign-up
            </Link>
            <Link
              className={buttonVariants({ variant: "default" })}
              href="/sign-in"
            >
              Sign-in
            </Link>
          </>
        ) : (
          <>
          <Link className={buttonVariants({ variant: "default" })} href="/app">
            Go to App
          </Link>
          <Link className={buttonVariants({ variant: "default" })} href="/test">
          Go to Test
        </Link>
        <Link className={buttonVariants({ variant: "default" })} href="/dashboard">
          Go to Dashboard
        </Link>
        </>
        )}
      </div>
    </main>
  );
}
