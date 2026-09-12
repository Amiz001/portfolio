import Footer from "../components/layout/Footer";
import ToolCard from "../components/tools/ToolCard";
import { tools } from "../data/tools";
import { useEffect } from "react";

export default function Tools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="surface-primary min-h-screen pt-28 md:pt-32 px-4 sm:px-8 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">&lt;Tools &amp; Platforms&gt;</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            THINGS I BUILD
          </h1>
          <p className="text-base opacity-50 max-w-xl mb-16">
            Open-source tools and platforms with repo and download links.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
      <Footer surface="primary" />
    </>
  );
}
