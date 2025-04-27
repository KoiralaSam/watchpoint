import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { TipsContext } from "../Context/TipsContext";
const Tips = () => {
  const { Tips } = useContext(TipsContext);
  const { Search } = useContext(SearchContext);

  const filteredData =
    location.pathname === "/alerts"
      ? Alerts.filter(
          (alert) =>
            alert.title.toLowerCase().includes(Search.toLowerCase()) ||
            alert.message.toLowerCase().includes(Search.toLowerCase())
        )
      : location.pathname === "/tips"
      ? Tips.filter(
          (tip) =>
            tip.title.toLowerCase().includes(Search.toLowerCase()) ||
            tip.message.toLowerCase().includes(Search.toLowerCase())
        )
      : [];

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        ⛨ Safety Tips and Resources
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {filteredData.map((tip) => {
          return (
            <div
              key={tip.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">{tip.message}</p>
              <a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Read more →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tips;
