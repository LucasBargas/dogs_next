import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <section className="container">
        <h1 className="title">Página não encontrada</h1>
        <Link
          className="button"
          href={"/"}
          style={{ marginBottom: "1rem", display: "inline-block" }}
        >
          Volte para página inicial
        </Link>
      </section>
    </section>
  );
};

export default NotFound;
