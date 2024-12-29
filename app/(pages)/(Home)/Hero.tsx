import GameInfo from "@/app/components/ui/SwiperCard/GameInfo";
import SwiperCard from "@/app/components/ui/SwiperCard/SwiperCard";

const Hero = () => {
  return (
    <div className="mt-8">
      <SwiperCard
        items={[
          {
            card: (
              <section className="h-full w-full relative rounded-2xl overflow-hidden">
                <video
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="spidervideo.mp4" type="video/mp4" />
                </video>
                <GameInfo
                  btnClasses="text-white bg-red-500 hover:bg-red-400"
                  desc="Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise, out October 20 for PS5."
                  title="BE GREATER TOGETHER"
                  imgSrc="/news1title.webp"
                />
              </section>
            ),
            src: "/poster.webp",
          },
          {
            card: (
              <section className="h-full w-full relative rounded-2xl overflow-hidden">
                <video
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source
                    src="call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4"
                    type="video/mp4"
                  />
                </video>
                <GameInfo
                  btnClasses="text-white bg-orange-500 hover:bg-orange-400"
                  desc="Last chance to pre-order and get access to additional premium content. Call of Duty®: Black Ops 6 launches on October 25th"
                  title="The truth lies"
                  imgSrc="/call-of-duty-black-ops-6-logo-01-en-21may24.webp"
                />
              </section>
            ),
            src: "/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp",
          },
          {
            card: (
              <section className="h-full w-full relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 h-full w-full">
                  <img
                    src="Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp"
                    className="object-cover h-full"
                  />
                </div>
                <GameInfo
                  btnClasses="text-gray-900"
                  desc="A legendary series has returned. Reach new levels of power in Dragon Ball: Sparking! Zero, out now on PS5"
                  title="Shake the earth. Break the universe !"
                  imgSrc="/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp"
                />
              </section>
            ),
            src: "/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp",
          },
          {
            card: (
              <section className="h-full w-full relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 h-full w-full">
                  <img src="cyb.webp" className="object-cover h-full w-full" />
                </div>
                <GameInfo
                  btnClasses="text-white z-20 bg-red-500 hover:bg-red-400"
                  desc="As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of sinister political machinations."
                  title="Freedom Always Comes At A Price…"
                  imgSrc="/iconcyber.webp"
                />
              </section>
            ),
            src: "/cyb.webp",
          },
        ]}
        paginationImages
        className="h-[30rem]"
      />
    </div>
  );
};

export default Hero;
