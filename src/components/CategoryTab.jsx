import { Link } from "react-router-dom";
const CategoryTab = () => {
  return (
    <div className="bg-[#151F30] flex  items-center justify-between px-2  py-3 rounded-full  my-10">
      <div className="">
        <Link
          to="/all-movies"
          className="btn btn-neutral bg-[#131720] rounded-full px-8 hover:bg-blue-600 hidden md:flex"
        >
          All Movies
        </Link>
      </div>

      <div className="  rounded-full p-1 join ">
        <Link
          to="/featured-movies"
          className="btn btn-neutral  bg-[#131720] join-item hover:bg-blue-600"
        >
          Featured
        </Link>
        <Link
          to="/popular-movies"
          className="btn btn-neutral bg-[#131720] join-item hover:bg-blue-600"
        >
          Popular
        </Link>
        <Link
          to="/all-movies"
          className="btn btn-neutral bg-[#131720] join-item hover:bg-blue-600"
        >
          Newest
        </Link>
      </div>
    </div>
  );
};

export default CategoryTab;
