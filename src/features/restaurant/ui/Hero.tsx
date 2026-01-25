import HeroImage from "@/assets/Hero.jpg";

export default function Hero() {
  return (
    <div className="relative w-auto h-[648px] overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="
          absolute
          top-0
          w-[1440px]
          h-[700px]
          object-cover
          z-0
        "
      />

      <div
        className="
        absolute
        left-1/2 -translate-x-1/2
        top-[210px]
        flex flex-col items-center
        gap-6
        w-[349px]
        z-2
      "
      >
        {/* Text Section */}
        <div className="flex flex-col items-center gap-1 w-full">
          <h1
            className="
            text-white
            text-center
            font-extrabold
            text-[36px]
            leading-[44px]
            font-nunito
          "
          >
            Explore Culinary Experiences
          </h1>

          <p
            className="
            text-white
            text-center
            font-bold
            text-[18px]
            leading-[32px]
            tracking-[-0.03em]
            font-nunito
          "
          >
            Search and refine your choice to discover the perfect restaurant.
          </p>
        </div>

        {/* Search Input */}
        <div
          className="
          flex items-center
          gap-[6px]
          w-full
          h-[48px]
          px-4
          bg-white
          rounded-full
        "
        >
          {/* Search Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="7" stroke="#717680" strokeWidth="1.25" />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="#717680"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            className="
            flex-1
            text-[14px]
            leading-[28px]
            tracking-[-0.02em]
            font-nunito
            text-[#535862]
            outline-none
            bg-transparent
            z-10
          "
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-black/90
          inset-0
          z-1
        "
      />
    </div>
  );
}
