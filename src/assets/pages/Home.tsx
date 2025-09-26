import HeroSection from "../components/sections/HeroSection";
import ScreenshotsSection from "../components/sections/ScreenshotsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import DownloadSection from "../components/sections/DownloadSection";
import CTASection from "../components/sections/CTASection";

export default function Home()
{
    return (
        <div className="min-h-screen bg-background">
            <HeroSection/>
            <ScreenshotsSection/>
            <FeaturesSection/>
            <DownloadSection/>
            <CTASection/>
        </div>
    );
}