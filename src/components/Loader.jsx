import { DNA } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <DNA
        visible={true}
        height="300"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
