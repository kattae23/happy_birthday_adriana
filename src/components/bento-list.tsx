import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    name: "Teamo mi reina",
    description: "For the rest of my life.",
    href: "/",
    cta: "Learn more",
    background: <img src="/adi-1.png" className="absolute" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Bubble Gum",
    description: "Oh, you make my heart melt away, you're a softie",
    href: "/",
    cta: "Learn more",
    background: <img src="/adi-2.jpg" className="absolute object-fill w-full object-[0px_-200px]" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
    name: "Attention",
    description: "Got me looking for attention",
    href: "/",
    cta: "Learn more",
    background: <img src="/adi-3.jpg" className="absolute object-fill w-full object-[50px_-260px]" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
    name: "Cool With You",
    description: "Everywhere, baby, say you're mine",
    href: "/",
    cta: "Learn more",
    background: <img src="/adi-4.jpg" className="absolute object-fill w-full object-[0px_-260px]" />, 
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
    name: "OMG",
    description:
    "My heart is glowing, it's glowing up",
    href: "/",
    cta: "Learn more",
    background: <img src="/adi-5.jpg" className="absolute object-fill w-full object-[0px_-170px]" />, 
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export  function BentoList() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default BentoList;
