"use client";
import React, { useState } from "react";
import styles from "../Header/head.module.css";
import { BsCalendar2EventFill, BsFillLockFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

// Toast 아이템 컴포넌트
const ToastItem = ({ icon: Icon, title, description }) => (
  <div className={styles.toastbest2}>
    <Icon />
    <div>
      <div className={styles.toastbig}>{title}</div>
      <div className={styles.toastsmall}>{description}</div>
    </div>
  </div>
);

function Headertoast() {
  const [toast, setToast] = useState(false);

  const toggleToast = () => {
    setToast(!toast);
  };

  const toastItems = [
    {
      icon: BsCalendar2EventFill,
      title: "사진/동영상 올리기",
      description: "우리 집의 공간과 나의 일상을 기록해보세요.",
    },
    {
      icon: BsFillLockFill,
      title: "집들이 글쓰기",
      description: "집에 관한 이야기를 글로 작성해 보세요.",
    },
    {
      icon: FaBookOpen,
      title: "노하우 글쓰기",
      description: "다양한 인테리어 노하우를 공유해 주세요.",
    },
    {
      icon: GoArchive,
      title: "상품 리뷰 쓰기",
      description: "상품 리뷰를 작성하고 포인트도 받아보세요.",
    },
    {
      icon: RiContactsLine,
      title: "시공 전문가 리뷰쓰기",
      description: "시공 전문가 리뷰를 작성하고 포인트도 받아보세요.",
    },
  ];

  return (
    <>
      <div className={styles.headwrite} onClick={toggleToast}>
        글쓰기
        <span>
          <BiChevronDown />
        </span>
      </div>
      {toast && (
        <div className={styles.toastbest}>
          {toastItems.map((item, index) => (
            <ToastItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Headertoast;
