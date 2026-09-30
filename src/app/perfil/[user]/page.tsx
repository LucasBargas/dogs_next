import photosGet from "@/src/actions/photos-get";
import { Feed } from "@/src/components/feed";

interface ProfileUserPageProps {
  params: Promise<{
    user: string;
  }>;
}

const ProfileUserPage = async ({ params }: ProfileUserPageProps) => {
  const { user } = await params;
  const { data } = await photosGet({ user });

  if (!data) return null;

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
};

export default ProfileUserPage;
