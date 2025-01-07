import { FaCheck, FaTimes } from "react-icons/fa";

const PricingTable = () => {
  const plans = [
    {
      name: "REGULAR",
      price: "11.99",
      features: [true, true, true, true, false, false, false],
    },
    {
      name: "PREMIUM",
      price: "34.99",
      features: [true, true, true, true, true, false, false],
    },
    {
      name: "PREMIUM + TV channels",
      price: "49.99",
      features: [true, true, true, true, true, true, true],
    },
  ];

  const featureList = [
    "FlixTV Originals",
    "Get unlimited access to the largest streaming library with no ads",
    "Watch Live TV online and on supported devices",
    "Switch plans or cancel anytime",
    "Record live TV with 50 hours of Cloud DVR storage",
    "Stream 65+ top Live TV channels",
    "TV channels",
  ];

  return (
    <div className="bg-[#151F30] text-white py-10 px-5 shadow-xl rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="table-auto w-full border-collapse text-center">
            <thead>
              <tr className=" border-b border-gray-700">
                <th className="text-left p-4"></th>
                {plans.map((plan, index) => (
                  <th key={index} className="p-4">
                    <div className="flex flex-col items-center">
                      <p className="text-base font-medium text-blue-500">
                        {plan.name}
                      </p>
                      <p className="text-5xl normal-case font-bold mt-2 ">
                        {" "}
                        $ {plan.price}
                      </p>
                      <p className="text-sm font-medium mt-1">/ month</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureList.map((feature, featureIndex) => (
                <tr key={featureIndex} className={`border-b border-gray-700`}>
                  <td className="p-4 text-left">{feature}</td>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex} className="p-4">
                      {plan.features[featureIndex] ? (
                        <FaCheck className="text-green-500 inline" />
                      ) : (
                        <FaTimes className="text-red-500 inline" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Add Buttons Row */}
              <tr className="">
                <td className="p-4"></td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 ">
                    <button className="btn rounded-2xl bg-[#131720] border-none text-white hover:text-black  py-2 px-10  mt-4 ">
                      SELECT PLAN
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
