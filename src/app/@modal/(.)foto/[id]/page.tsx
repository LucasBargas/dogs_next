import photoGet from "@/src/actions/photo-get";
import { FeedModal } from "@/src/components/feed-modal";
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

  return <FeedModal photo={data} />;
};

export default PhotoIdPage;
