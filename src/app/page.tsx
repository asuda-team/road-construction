import { Hero } from "@/widgets/hero";
import { Banner } from "@/widgets/banner";
import { Companies } from "@/widgets/companies";
import { News } from "@/widgets/news";
import CompanyInformation from "@/widgets/company-information/ui";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="relative bg-white">
        <CompanyInformation />
        <News />
        <Banner />
        <Companies />
      </div>
    </main>
  );
}