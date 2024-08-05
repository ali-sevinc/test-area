import { motion } from "framer-motion";

const LOGOS = [
  {
    id: "html",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    id: "css",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    id: "javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: "typescript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    id: "react",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
  },
  {
    id: "next",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png",
  },
  {
    id: "github",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png",
  },
  {
    id: "netlify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1920px-Netlify_logo_%282%29.svg.png",
  },
  {
    id: "vercel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/512px-Vercel_logo_black.svg.png",
  },
  {
    id: "firebase",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/512px-Firebase_Logo.svg.png",
  },
  {
    id: "node",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
  },
  {
    id: "netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png",
  },
  {
    id: "google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png",
  },
  {
    id: "youtube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
  },
  {
    id: "instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png",
  },
  {
    id: "twitch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/455px-Twitch_logo.svg.png",
  },
];

export default function MarqueePanel() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-zinc-500 to-zinc-800 py-12">
      <h1 className=" mb-12 text-center text-2xl text-zinc-50 md:text-5xl">
        Marquee Icons
      </h1>
      <div className="relative mx-auto  overflow-x-hidden bg-gradient-to-r from-zinc-50 to-zinc-100 px-1 py-4 shadow-lg ">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className={`flex items-center justify-center gap-5 text-5xl `}
        >
          {LOGOS.map((logo) => (
            <img key={logo.id} src={logo.logo} alt={logo.id} className="w-16" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
