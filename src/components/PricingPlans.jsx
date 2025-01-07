import { FaCheck, FaTimes } from "react-icons/fa";

const plans = [
  {
    name: "Regular",
    price: "$11.99/month",
    features: [
      { text: "FlixTV Originals", included: true },
      { text: "Switch plans or cancel anytime", included: true },
      { text: "Stream 65+ top Live", included: false },
      { text: "TV channels", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$34.99/month",
    features: [
      { text: "FlixTV Originals", included: true },
      { text: "Switch plans or cancel anytime", included: true },
      { text: "Stream 65+ top Live", included: true },
      { text: "TV channels", included: false },
    ],
    highlight: true,
  },
  {
    name: "Premium + TV channels",
    price: "$49.99/month",
    features: [
      { text: "FlixTV Originals", included: true },
      { text: "Switch plans or cancel anytime", included: true },
      { text: "Stream 65+ top Live", included: true },
      { text: "TV channels", included: true },
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Select Your Plan</h1>
        <p className="text-gray-400 mt-4">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {plans.map((plan, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`p-6 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative  ${
              plan.highlight ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-2 text-sm">
                  {feature.included ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <button className="w-full py-2 bg-gray-900 hover:bg-gray-700 rounded font-semibold transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
