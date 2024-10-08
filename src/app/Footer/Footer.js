"use client";
import React from "react";
import styles from "../Footer/Footer.module.css";
import { BsChevronRight } from "react-icons/bs";

function Footer() {
  const renderCustomerServiceInfo = () => (
    <>
      <h3>
        고객센터 <BsChevronRight />
      </h3>
      <h3 className={styles.fth3}>1670-0876</h3>
      <div className={styles.ftdiv}>평일: 전체 문의 상담</div>
      <div className={styles.ftdiv}>
        토요일, 공휴일: 오늘의집 직접배송, 이사/시공/제품설치 문의 상담
      </div>
      <div className={styles.ftdiv}>일요일: 휴무</div>
      <div className={styles.footbutton}>
        <button>카톡 상담(평일 09:00~18:00)</button>
        <button>이메일 문의</button>
      </div>
    </>
  );

  const renderCompanyInfoLinks = () => {
    const links = [
      "회사소개",
      "채용정보",
      "이용약관",
      "개인정보 처리방침",
      "공지사항",
      "안전거래센터",
      "입점신청",
      "제휴/광고 문의",
      "시공파트너 안내",
      "상품광고 소개",
      "고객의 소리",
    ];

    return links.map((link, index) => <div key={index}>{link}</div>);
  };

  const renderLegalInfo = () => (
    <>
      <div>
        (주)버킷플레이스|대표이사 이승재|서울 서초구 서초대로74길 4
        삼성생명서초타워 25층, 27층|contact@bucketplace.net|사업자등록번호
        119-86-91245 사업자정보확인|통신판매업신고번호 제2018-서울서초-0580호
      </div>
      <div>
        고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여
        안전거래를 보장하고 있습니다. 서비스가입사실확인
      </div>
      <div>
        (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
        등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,
        (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을
        부담합니다. Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
      </div>
      <div>Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</div>
    </>
  );

  return (
    <div className={styles.foot}>
      <div className={`${styles.footin} font-roboto-400`}>
        {renderCustomerServiceInfo()}
      </div>
      <div className={`${styles.footin2} font-roboto-400`}>
        {renderCompanyInfoLinks()}
      </div>
      <div className={`${styles.footin3} font-roboto-400`}>
        {renderLegalInfo()}
      </div>
    </div>
  );
}

export default Footer;
