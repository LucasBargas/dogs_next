import photosGet from "../actions/photos-get";
import { Feed } from "../components/feed";

const Home = async () => {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
    </section>
  );
};

export default Home;
