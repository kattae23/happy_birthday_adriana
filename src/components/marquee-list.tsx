import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
      name: "Alfonzo (ebe)",
      username: "@Ebe",
      body: "Nunca he visto algo como esto antes. Es increíble. Me encanta.",
      img: "/ebe.jpg",
    },
    {
      name: "Alfonzo (ebe)",
      username: "@Ebe",
      body: "Te amaré mucho siempre, hasta el infinito y las estrellas.",
      img: "/ebe.jpg",
    },
    {
      name: "Alfonzo (ebe)",
      username: "@Ebe",
      body: "Eres la consentida de mi vida y me esforzaré por cumplir todos tus sueños.",
      img: "/ebe.jpg",
    },
    {
      name: "Alfonzo (ebe)",
      username: "@Ebe",
      body: "Ven y te lleno de mil millones de besos corazón de melón.",
      img: "/ebe.jpg",
    },
    {
      name: "Alfonzo (ebe)",
      username: "@Ebe",
      body: "Te amo mi amor de verdad eres el sol de mis mañanas y la luz de mi día.",
      img: "/ebe.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 overflow-hidden">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeList = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-[#5d1f96] py-20 md:shadow-xl text-white">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeList;
