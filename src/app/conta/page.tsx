import photosGet from "@/src/actions/photos-get";
import userGet from "@/src/actions/user-get";
import { Feed } from "@/src/components/feed";
import { IPhoto } from "@/src/types/photo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dogs | Minha Conta",
  description: "Página de conta do site Dogs desenvolvido por Lucas Bargas.",
};

const AccountPage = async () => {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });
  return (
    <section>
      {data?.length ? (
        <Feed photos={data as IPhoto[]} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={"/conta/postar"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
};

export default AccountPage;
