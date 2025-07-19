// app/quick-cycle-dm-plant/page.tsx
import { HeroSection } from '@/components/products/qcdm/HeroSection';
import { WhyAutoPlant } from '@/components/products/qcdm/WhyAutoPlant';
import { ComparisonSection } from '@/components/products/qcdm/ComparisonSection';
import { DemineralizationInfo } from '@/components/products/qcdm/DemineralizationInfo';
import ContactForm from '@/components/homepage/ContactForm';

export default function QuickCycleDmPlantPage() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <DemineralizationInfo />
      <WhyAutoPlant />
      <ComparisonSection />
      <ContactForm />
      <br />
      <br />
      <br />
      {/* Footer can be added here */}
    </div>
  );
}