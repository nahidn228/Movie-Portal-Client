import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Banner from "../components/Banner";
import UpcomingMovie from "../components/UpcomingMovie";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/UpcomingMovie")
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
        <h1
          className="text-4xl font-extrabold text-center text-gray-900 my-6"
          data-aos="fade-up"
        >
          Upcoming Movies
        </h1>
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
      </main>
    </div>
  );
};

export default Home;
