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
              <div className="relative min-h-[78vh] md:min-h-[82vh] lg:min-h-[88vh] max-h-[920px]">
                {/* Background image */}
                <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-[38%] lg:left-[42%]">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-full object-cover object-top"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ed] via-[#f7f3ed]/80 to-transparent md:from-[#f7f3ed] md:via-[#f7f3ed]/40 md:to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="container-store relative z-10 flex items-center min-h-[78vh] md:min-h-[82vh] lg:min-h-[88vh] max-h-[920px] py-16 md:py-20">
                  <div className="max-w-xl animate-fade-in">
                    <p className="section-label">{slide.label}</p>
                    <h1 className="font-serif text-[2rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.5rem] text-foreground leading-[1.1] mb-4 md:mb-5">
                      {slide.title}
                      {slide.highlight && (
                        <span className="block italic text-primary mt-1">{slide.highlight}</span>
                      )}
                    </h1>
                    <p className="section-subtitle mb-8 md:mb-10">{slide.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
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
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
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

        {/* Dots */}
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
