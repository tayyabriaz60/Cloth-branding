import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_SLIDES } from "@/data/heroSlides";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((embla: CarouselApi) => {
    if (!embla) return;
    setCurrent(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative overflow-hidden bg-[#f7f3ed]" aria-label="Featured collections">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", duration: 28 }}
        plugins={[
          Autoplay({
            delay: 5500,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0 basis-full">
              <div className="min-h-0 lg:min-h-[85vh] lg:max-h-[920px]">
                {/* Mobile — stacked: image then text (no seam overlap) */}
                <div className="lg:hidden">
                  <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden">
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="px-5 sm:px-8 py-10 sm:py-12 bg-[#f7f3ed]">
                    <HeroCopy slide={slide} />
                  </div>
                </div>

                {/* Desktop — hard 50/50 split: text LEFT column only, image RIGHT only */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[85vh] lg:max-h-[920px]">
                  <div className="flex items-center bg-[#f7f3ed] px-10 xl:px-16 2xl:px-20 py-16 xl:py-20">
                    <div className="w-full max-w-[440px] xl:max-w-[480px]">
                      <HeroCopy slide={slide} />
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-[#f3efe9]">
                    <img
                      src={slide.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 text-foreground shadow-elevated flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 text-foreground shadow-elevated flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"
              )}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={current === i ? "true" : undefined}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}

function HeroCopy({ slide }: { slide: (typeof HERO_SLIDES)[number] }) {
  return (
    <div className="animate-fade-in">
      <p className="section-label">{slide.label}</p>
      <h1 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.65rem] xl:text-[3rem] text-foreground mb-4 lg:mb-6 space-y-2 lg:space-y-3">
        <span className="block leading-[1.3]">{slide.title}</span>
        {slide.highlight && (
          <span className="block italic text-primary leading-[1.3]">{slide.highlight}</span>
        )}
      </h1>
      <p className="section-subtitle mb-8 lg:mb-10 max-w-[38ch]">{slide.subtitle}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Link to={slide.cta.href} className="btn-store-primary group">
          {slide.cta.label}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
        </Link>
        {slide.secondaryCta && (
          <Link to={slide.secondaryCta.href} className="btn-store-outline">
            {slide.secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
