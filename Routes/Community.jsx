const Community = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold">WatchPoint</span>, your
          trusted neighborhood safety companion. Our mission is to create a
          safer and more connected community by providing tools and resources to
          stay informed, alert, and proactive.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At WatchPoint, we believe that safety starts with awareness. Our
          platform empowers individuals and communities to share alerts, tips,
          and resources to foster a sense of security and collaboration.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Real-time alerts to keep you informed about local incidents.</li>
          <li>Safety tips and resources to help you stay prepared.</li>
          <li>A platform to report and share community concerns.</li>
          <li>A connected community to foster collaboration and trust.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-600 mb-4">
          Be a part of our mission to create a safer and more connected
          community. Together, we can make a difference.
        </p>
        <a
          href="/report"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Report an Incident
        </a>
      </section>
    </div>
  );
};

export default Community;
