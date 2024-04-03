import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

const ExpertPage = () => {
  const { t: footerT } = useTranslation("footer");
  const { t: commonT } = useTranslation("common");
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <>
      <div>
        <h1>{commonT("title")}</h1>
        <div className="navigate">
          <p>{commonT("question")}</p>
          <div className="button-wrapper">
            <Link href={"/local"} locale="en">
              <a className="navigate-button">{commonT("button.link")}</a>
            </Link>
            <button
              className="navigate-button"
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: "jp" });
              }}
            >
              {commonT("button.router")}
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>{footerT("description")}</p>
      </footer>
    </>
  );
};

export default ExpertPage;
