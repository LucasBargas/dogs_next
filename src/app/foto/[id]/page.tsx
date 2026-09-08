interface PhotoIdPageProps {
  params: Promise<{
    id: number;
  }>;
}

const PhotoIdPage = async ({ params }: PhotoIdPageProps) => {
  const { id } = await params;

  return (
    <div>
      <h1>Id da página: {id}</h1>
    </div>
  );
};

export default PhotoIdPage;
