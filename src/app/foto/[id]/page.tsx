import photoGet from "@/src/actions/photo-get";
import { Photo } from "@/src/components/photo";
import { notFound } from "next/navigation";

interface PhotoIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface IPageParams {
  params: Promise<{
    id: string;
  }>;
}

export const generateMetadata = async ({ params }: IPageParams) => {
  const { id } = await params;
  const { data } = await photoGet(id);

  return {
    title: data ? `Dogs | ${data.photo.title}` : "Dogs | Foto",
  };
};

const PhotoIdPage = async ({ params }: PhotoIdPageProps) => {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return notFound();

  return (
    <section className="container mainContainer">
      <Photo data={data} single />
    </section>
  );
};

export default PhotoIdPage;
