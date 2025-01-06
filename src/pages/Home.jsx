import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import CategoryTab from "../components/CategoryTab";
import FeaturedMovies from "../components/FeaturedMovies";
import LatestRelease from "../components/LatestRelease";
import PricingPlans from "../components/PricingPlans";
import ReactSlick from "../components/ReactSlick";
import UpcomingMovie from "./../components/UpcomingMovie";
const Home = () => {
  const location = useLocation();
  console.log(location);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - MOVIE PORTAL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header>
        <Banner></Banner>
      </header>
      <main className="bg-[#131720]">
        {/* Upcoming Movies */}
        <section>
          <h1
            className="text-3xl font-semibold text-white py-10 "
            data-aos="fade-up"
          >
            Upcoming Movies
          </h1>

          <section className=" flex gap-6">
            <Marquee direction="right">
              {data.map((upcomingMovie) => (
                <UpcomingMovie
                  key={upcomingMovie._id}
                  upcomingMovie={upcomingMovie}
                ></UpcomingMovie>
              ))}
            </Marquee>
          </section>
        </section>

        {/* tab */}
        <section>
          <CategoryTab></CategoryTab>
        </section>

        {/* Featured Movies */}
        <section>
          <section className=" mb-10  ">
            <FeaturedMovies></FeaturedMovies>
          </section>
        </section>

        {/* Latest Release */}
        <section>
          <div className="flex my-4">
            <h1
              className=" text-4xl font-semibold text-white py-10 text-center"
              data-aos="fade-up"
            >
              Latest Release
            </h1>
          </div>

          <section className=" flex gap-6">
            <Marquee>
              <LatestRelease></LatestRelease>
            </Marquee>
          </section>
        </section>

        {/* Subscriptions */}
        <section>
          <h1
            className="text-4xl font-semibold text-white py-4 "
            data-aos="fade-up"
          >
            Subscriptions
          </h1>

          <ReactSlick></ReactSlick>
          <div className="divider p-2"></div>
        </section>

        {/* Pricing */}

        <section>
          <PricingPlans></PricingPlans>
        </section>

        {/* <section className="my-10">
          <ReactForm></ReactForm>
        </section> */}
      </main>
    </div>
  );
};

export default Home;
