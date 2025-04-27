import { useState } from "react";
import { createContext } from "react";

const tips = [
  {
    id: 1,
    title: "Secure Your Home",
    message:
      "Reinforce doors, install deadbolts, and use security cameras to deter intruders. Well-lit exteriors and neighborhood watch signs are great deterrents.",
    link: "https://www.safewise.com/blog/10-simple-ways-to-secure-your-new-home/",
  },
  {
    id: 2,
    title: "Stay Aware in Public",
    message:
      "Avoid distractions like texting or using headphones when walking alone, especially at night. Be aware of your surroundings at all times.",
    link: "https://www.rainn.org/articles/personal-safety",
  },
  {
    id: 3,
    title: "Cyber Safety",
    message:
      "Avoid sharing personal information online. Use strong passwords, enable two-factor authentication, and be cautious of phishing scams.",
    link: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
  },
  {
    id: 4,
    title: "Know Your Neighbors",
    message:
      "Build relationships with those living near you. A connected community is more likely to share information and watch out for each other.",
    link: "https://nnw.org/",
  },
  {
    id: 5,
    title: "Safe Travel Habits",
    message:
      "Plan your route, let someone know your destination, and avoid isolated areas. Consider self-defense tools like pepper spray if legally permitted.",
    link: "https://travel.state.gov/content/travel/en/international-travel/before-you-go/safety.html",
  },
];
export const TipsContext = createContext({
  Tips: tips,
  setTips: () => {},
});

export const TipsProvider = ({ children }) => {
  const [Tips, setTips] = useState(tips);

  return (
    <TipsContext.Provider value={{ Tips, setTips }}>
      {children}
    </TipsContext.Provider>
  );
};
