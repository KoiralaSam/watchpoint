import { useContext } from "react";
import { AlertContext } from "../Context/AlertContext";
import { SearchContext } from "../Context/SearchContext";

import Card from "../components/CardComponent";

const Alerts = () => {
  const { Alerts } = useContext(AlertContext);
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
    <section className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">Recent Alerts</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {filteredData.map((alert) => (
          <Card key={alert.id} card={alert} />
        ))}
      </div>
    </section>
  );
};

export default Alerts;
