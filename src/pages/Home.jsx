import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
import LatestRelease from "../components/LatestRelease";
import UpcomingMovie from "../components/UpcomingMovie";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://full-stack-go.vercel.app/UpcomingMovie")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main>
        {/* Upcoming Movies */}
        <section>
          <div className="flex my-4">
            <div className="divider divider-horizontal md:p-2 bg-red-600"></div>
            <h1
              className="text-xl md:text-4xl font-extrabold text-center text-gray-900 my-6"
              data-aos="fade-up"
            >
              Upcoming Movies
            </h1>
          </div>
          <section className=" flex gap-6">
            <Marquee>
              {data.map((upcomingMovie) => (
                <UpcomingMovie
                  key={upcomingMovie._id}
                  upcomingMovie={upcomingMovie}
                ></UpcomingMovie>
              ))}
            </Marquee>
          </section>
        </section>

        {/* Featured Movies */}
        <section>
          <div className="flex my-4">
            <div className="divider divider-horizontal p-2 bg-red-600"></div>
            <h1
              className=" text-xl md:text-4xl font-extrabold text-center text-gray-900 my-6"
              data-aos="fade-up"
            >
              Featured Movies
            </h1>
          </div>

          <section className="w-11/12 mx-auto mb-10 ">
            <FeaturedMovies></FeaturedMovies>
          </section>
        </section>

        {/* Latest Release */}
        <section>
          <div className="flex my-4">
            <div className="divider divider-horizontal p-2 bg-red-600"></div>
            <h1
              className=" text-xl md:text-4xl font-extrabold text-center text-gray-900 my-6"
              data-aos="fade-up"
            >
              Latest Release
            </h1>
          </div>

          <section className="w-11/12 mx-auto mb-10 flex gap-6">
            <Marquee>
              <LatestRelease></LatestRelease>
            </Marquee>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
