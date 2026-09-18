import photosGet from "../actions/photos-get";
import { Feed } from "../components/feed";
import { IPhoto } from "../types/photo";

const Home = async () => {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={data as IPhoto[]} />
    </section>
  );
};

export default Home;
