import HomeSearch from "@/components/home-search";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col ">
      {/* Home */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-8xl mb-4 gradient-title">Find you dream car with vehicql AI</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">Advanced AI car search and test drive from thousands of vehicles</p>
          </div>
          {/* Search */}
          <HomeSearch/>
        </div>
      </section>
    </div>
  );
}
