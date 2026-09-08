interface ProfileUserPageProps {
  params: Promise<{
    user: string;
  }>;
}

const ProfileUserPage = async ({ params }: ProfileUserPageProps) => {
  const { user } = await params;

  return (
    <div>
      <h1>Usuário logado: {user}</h1>
    </div>
  );
};

export default ProfileUserPage;
