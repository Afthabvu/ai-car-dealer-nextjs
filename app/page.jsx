import CarCard from "@/components/car-card";
import HomeSearch from "@/components/home-search";
import { Button } from "@/components/ui/button";
import { featuredCars } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col ">
      {/* Home */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-8xl mb-4 gradient-title">
              Find you dream car with vehicql AI
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">
              Advanced AI car search and test drive from thousands of vehicles
            </p>
          </div>
          {/* Search */}
          <HomeSearch />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between mb-8 ">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button>View all <ChevronRight className="ml-1 h-4 w-4"/> </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car)=>{
             return <CarCard key={car.id} car={car}/>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
