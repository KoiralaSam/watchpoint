import { useState } from "react";
import { createContext } from "react";

const initialAlerts = [
  {
    id: 1,
    title: "Suspicious Activity",
    reporter: "Anonymous",
    type: "Suspicious Activity",
    message:
      "Reported near Elm Street. Individual seen loitering around parked cars.",
    image:
      "https://media.gettyimages.com/id/637070540/photo/drug-dealer-selling-portions-of-heroine.jpg?s=2048x2048&w=gi&k=20&c=7jNWHXut93eu5DwLabg5F38nz1Yjosnsgl_MX33MF3M=",
    link: "/alerts",
  },
  {
    id: 2,
    title: "Lost Pet",
    reporter: "Jane D.",
    type: "Lost Pet",
    message:
      "Golden Retriever named Max last seen running east on Oak Ave around 5 PM.",
    image:
      "https://media.istockphoto.com/id/1320667385/photo/lost-dog-poster.jpg?s=2048x2048&w=is&k=20&c=X87ziHv97R4nComYskZ4jsidLlAbi4S25zJOIOA3TJ4=",
    link: "/alerts",
  },
  {
    id: 3,
    title: "Weather Warning",
    reporter: "ULM Weather Center",
    type: "Weather Hazard",
    message:
      "Severe thunderstorm alert issued for Monroe area. Residents advised to stay indoors and secure loose items.",
    image:
      "https://images.unsplash.com/photo-1654232038022-67df6dcd1b10?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/alerts",
  },
  {
    id: 4,
    title: "Suspicious Activity",
    reporter: "Nate S.",
    type: "Suspicious Activity",
    message:
      "Unfamiliar van circling neighborhood near Sheboygan Street. Plate reported.",
    image:
      "https://images.pexels.com/photos/5380654/pexels-photo-5380654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/alerts",
  },
  {
    id: 5,
    title: "Weather Warning",
    reporter: "City of Monroe",
    type: "Weather Hazard",
    message:
      "Large oak tree down near South 6th Street due to high wind gusts. Avoid area until cleared.",
    image:
      "https://media.istockphoto.com/id/157481087/photo/fallen-tree-blocking-road.jpg?s=2048x2048&w=is&k=20&c=tsRDlfJQ0CV2CCoa1JfZM2PXKemKWJe8uXpW-lFIJ1g=",
    link: "/alerts",
  },
];

export const AlertContext = createContext({
  Alerts: initialAlerts,
  setAlerts: () => {},
});

export const AlertProvider = ({ children }) => {
  const [Alerts, setAlerts] = useState(initialAlerts);

  return (
    <AlertContext.Provider value={{ Alerts, setAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};
