import { AccountPhotoPost } from "@/src/components/account-photo-post";
import { Metadata } from "next";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Dogs | Postar | Minha conta",
  description:
    "Página de postagem de conteúdo do site Dogs desenvolvido por Lucas Bargas.",
};

const PostPage = () => {
  return <AccountPhotoPost />;
};

export default PostPage;
