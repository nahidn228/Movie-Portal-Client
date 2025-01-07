
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingCard = () => {
  const plans = [
    {
      title: "REGULAR",
      price: "$11.99",
      features: [
        { name: "FlixTV Originals", available: true },
        { name: "Get unlimited access to the largest streaming library with no ads", available: true },
        { name: "Watch Live TV online and on supported devices", available: true },
        { name: "Switch plans or cancel anytime", available: true },
        { name: "Record live TV with 50 hours of Cloud DVR storage", available: false },
        { name: "Stream 65+ top Live TV channels", available: false },
        { name: "TV channels", available: false },
      ],
    },
    {
      title: "PREMIUM",
      price: "$34.99",
      features: [
        { name: "FlixTV Originals", available: true },
        { name: "Get unlimited access to the largest streaming library with no ads", available: true },
        { name: "Watch Live TV online and on supported devices", available: true },
        { name: "Switch plans or cancel anytime", available: true },
        { name: "Record live TV with 50 hours of Cloud DVR storage", available: true },
        { name: "Stream 65+ top Live TV channels", available: false },
        { name: "TV channels", available: false },
      ],
    },
    {
      title: "PREMIUM + TV channels",
      price: "$49.99",
      features: [
        { name: "FlixTV Originals", available: true },
        { name: "Get unlimited access to the largest streaming library with no ads", available: true },
        { name: "Watch Live TV online and on supported devices", available: true },
        { name: "Switch plans or cancel anytime", available: true },
        { name: "Record live TV with 50 hours of Cloud DVR storage", available: true },
        { name: "Stream 65+ top Live TV channels", available: true },
        { name: "TV channels", available: true },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-5"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-center">{plan.title}</h3>
            <p className="text-center text-3xl font-bold my-4">{plan.price}</p>
            <p className="text-center text-sm mb-6">/ month</p>
            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  {feature.available ? (
                    <FaCheck className="text-green-500 mr-2" />
                  ) : (
                    <FaTimes className="text-red-500 mr-2" />
                  )}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
              SELECT PLAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
