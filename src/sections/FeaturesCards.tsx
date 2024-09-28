import { twMerge } from "tailwind-merge";
type ColorsType = {
  lime: string;
  violet: string;
  cyan: string;
};

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with ou cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cube.png",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

const bgColors: ColorsType = {
  lime: "bg-lime-500",
  violet: "bg-violet-500",
  cyan: "bg-cyan-500",
};
const textColors: ColorsType = {
  lime: "text-lime-500",
  violet: "text-violet-500",
  cyan: "text-cyan-500",
};
const hoverColors: ColorsType = {
  lime: "group-hover:bg-lime-500",
  violet: "group-hover:bg-violet-500",
  cyan: "group-hover:bg-cyan-500",
};

const FeaturesCards = () => {
  return (
    <section className="overflow-x-clip py-24 md:-mt-28">
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map((card) => (
              <div
                className="group relative z-0 max-w-xs p-8 md:max-w-md md:p-10"
                key={crypto.randomUUID()}
              >
                <div
                  className={twMerge(
                    `absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100`,
                    bgColors[card.color as keyof ColorsType],
                  )}
                ></div>
                <div
                  className={twMerge(
                    "absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400",
                    bgColors[card.color as keyof ColorsType],
                    hoverColors[card.color as keyof ColorsType],
                  )}
                ></div>
                <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                <div className="-mt-28 flex justify-center">
                  <div className="relative inline-flex">
                    <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30"></div>
                    <img
                      src={card.image}
                      alt="pill image"
                      className="size-40 transition duration-300 group-hover:-translate-y-6"
                    />
                  </div>
                </div>
                <h3 className="mt-12 font-heading text-3xl font-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-lg text-zinc-400">{card.description}</p>
                <div className="mt-12 flex justify-between">
                  <button
                    className={twMerge(
                      "font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500",
                      textColors[card.color as keyof ColorsType],
                    )}
                  >
                    Learn More
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 -translate-x-2 text-zinc-500 transition duration-300 group-hover:-translate-x-0 group-hover:text-zinc-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
            {[
              cardData.map(({ title }) => (
                <div
                  key={title}
                  className="size-2.5 cursor-pointer rounded-full bg-zinc-500"
                ></div>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
