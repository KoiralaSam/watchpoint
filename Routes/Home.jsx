import { useContext } from "react";
import Card from "../components/CardComponent";
import { AlertContext } from "../Context/AlertContext";
import { TipsContext } from "../Context/TipsContext";
import SignIn from "../components/SingIn";
import { SignInContext } from "../Context/SingInContext";
const Home = () => {
  const { ShowSignIn } = useContext(SignInContext);
  const { Alerts } = useContext(AlertContext);
  const { Tips } = useContext(TipsContext);
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      {ShowSignIn && <SignIn />}

      <section className="bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-5xl font-black text-blue-900 mb-3">
          Welcome to WatchPoint
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Your neighborhood safety companion — stay alert, stay informed, stay
          safe.
          <br />
          <a href="/alerts" className="underline-offset-4 hover:underline">
            view alerts
          </a>
        </p>
      </section>
      <section className="bg-gray-50 p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Recent Alerts
          </h2>
          <a
            href="/alerts"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See all alerts
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {Alerts.slice(0, 7).map((alert) => (
            <Card key={alert.id} card={alert} />
          ))}
        </div>
      </section>
      <section className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Safety Tips</h2>
          <a
            href="/tips"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See all tips
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {Tips.slice(0, 5).map((tip) => (
            <Card key={tip.id} card={tip} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
