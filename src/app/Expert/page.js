import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("page_title")}</h1>
      {/* 클라이언트 측 라우팅에 Link 컴포넌트를 사용 */}
      <Link href="/other-page">
        <a>{t("go_to_other_page")}</a>
      </Link>
    </div>
  );
};

export default Page;
