import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

type RestoHeroProps = {
  images?: string[];
  name?: string;
  location?: number;
};

export default function RestoHero({ images, name }: RestoHeroProps) {
  const imgs = (images ?? []).slice(0, 4);

  return (
    <section className="w-full">
      {/* Desktop */}
      <div className="hidden lg:flex gap-5 max-w-[1200px] mx-auto">
        {/* Left big image */}
        <div className="w-1/2 h-[470px]">
          <img
            src={imgs[0]}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right */}
        <div className="w-1/2 h-[470px] flex flex-col gap-5">
          {/* Top */}
          <img
            src={imgs[1]}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Bottom */}
          <div className="flex gap-5 h-[148px] w-1/2">
            {imgs.slice(2, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="w-auto h-[148px] object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {imgs.map((img, i) => (
              <CarouselItem key={i}>
                <Card className="overflow-hidden h-[280px] w-full border-white p-0">
                  <img
                    src={img}
                    alt={name}
                    className="w-auto h-[280px] object-cover"
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
