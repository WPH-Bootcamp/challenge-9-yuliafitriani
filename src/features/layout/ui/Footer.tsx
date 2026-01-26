import { Logo } from "@/components/Logo";
import FbIcon from "@/assets/fb.svg";
import IgIcon from "@/assets/ig.svg";
import InIcon from "@/assets/linkedin.svg";
import TiktokIcon from "@/assets/tiktok.svg";

const exploreLinks = [
  "All Food",
  "Nearby",
  "Discount",
  "Best Seller",
  "Delivery",
  "Lunch",
];

const helpLinks = [
  "How to Order",
  "Payment Methods",
  "Track My Order",
  "FAQ",
  "Contact Us",
];

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-3 text-sm text-white/70">
        {items.map((t) => (
          <li key={t}>
            <a href="#" className="hover:text-white transition">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#070A0F] text-white">
      {/* glow background */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-white/10 blur-3xl opacity-20" />
          <div className="absolute -right-45 -top-55 h-140 w-140 rounded-full bg-white/10 blur-3xl opacity-15" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* DESKTOP: 3 columns */}
          <div className="hidden md:grid grid-cols-12 gap-10">
            {/* brand */}
            <div className="col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <Logo className="text-white" />
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/70">
                Enjoy homemade flavors &amp; chef&apos;s signature dishes,
                freshly prepared every day. Order online or visit our nearest
                branch.
              </p>

              <div className="space-y-3">
                <div className="text-sm font-semibold">
                  Follow on Social Media
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={FbIcon}
                    alt="Facebook Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <img
                    src={IgIcon}
                    alt="Instagram logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <img
                    src={InIcon}
                    alt="LinkedIn logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <img
                    src={TiktokIcon}
                    alt="Tiktok logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* explore */}
            <div className="col-span-3">
              <FooterList title="Explore" items={exploreLinks} />
            </div>

            {/* help */}
            <div className="col-span-4">
              <FooterList title="Help" items={helpLinks} />
            </div>
          </div>

          {/* MOBILE: stacked brand then 2 columns list */}
          <div className="md:hidden space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo />
              </div>

              <p className="text-sm leading-7 text-white/70">
                Enjoy homemade flavors &amp; chef&apos;s signature dishes,
                freshly prepared every day. Order online or visit our nearest
                branch.
              </p>

              <div className="space-y-3">
                <div className="text-sm font-semibold">
                  Follow on Social Media
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={IgIcon}
                    alt="Instagram logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <img
                    src={InIcon}
                    alt="LinkedIn logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <img
                    src={TiktokIcon}
                    alt="Tiktok logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <FooterList title="Explore" items={exploreLinks} />
              <FooterList title="Help" items={helpLinks} />
            </div>
          </div>

          {/* bottom thin line (optional) */}
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Foody. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
