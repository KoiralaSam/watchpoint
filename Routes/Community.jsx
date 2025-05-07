import { Link } from "react-router";
import { SignInContext } from "../Context/SingInContext";
const Community = () => {
  return (
    <div className="p-8 md:p-16 max-w-4xl mx-auto space-y-12">
      {/* About Us Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">WatchPoint</span>, your
          trusted neighborhood safety companion. Our mission is to create a
          safer and more connected community by providing tools and resources to
          stay informed, alert, and proactive.
        </p>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold">WatchPoint</span>, we believe that
          safety starts with awareness. Our platform empowers individuals and
          communities to share alerts, tips, and resources to foster a sense of
          security and collaboration.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>Real-time alerts to keep you informed about local incidents.</li>
          <li>Safety tips and resources to help you stay prepared.</li>
          <li>A platform to report and share community concerns.</li>
          <li>A connected community to foster collaboration and trust.</li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Be a part of our mission to create a safer and more connected
          community. Together, we can make a difference.
        </p>
        <Link
          to="/report"
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Report an Incident
        </Link>
      </section>
    </div>
  );
};

export default Community;
