"use client";
import React, { useState } from "react";
import styles from "../Header/head.module.css";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
function Headertoast() {
  const [toast, setToast] = useState(false);
  const onClick = () => {
    setToast(!toast);
  };
  return (
    <>
      <div className={styles.headwrite} onClick={onClick}>
        글쓰기
        <span>
          <BiChevronDown />
        </span>
      </div>
      {toast === true && (
        <div className={styles.toastbest}>
          <div className={styles.toastbest2}>
            <BsCalendar2EventFill />
            <div>
              <div className={styles.toastbig}>사진/동영상 올리기</div>
              <div className={styles.toastsmall}>
                우리 집의 공간과 나의 일상을 기록해보세요.
              </div>
            </div>
          </div>
          <div className={styles.toastbest2}>
            <BsFillLockFill />

            <div>
              <div className={styles.toastbig}>집들이 글쓰기</div>
              <div className={styles.toastsmall}>
                집에 관한 이야기를 글로 작성해 보세요.
              </div>
            </div>
          </div>
          <div className={styles.toastbest2}>
            <FaBookOpen />

            <div>
              <div className={styles.toastbig}>노하우 글쓰기</div>
              <div className={styles.toastsmall}>
                다양한 인테리어 노하우를 공유해 주세요
              </div>
            </div>
          </div>
          <div className={styles.toastbest2}>
            <GoArchive />

            <div>
              <div className={styles.toastbig}>상품 리뷰 쓰기</div>
              <div className={styles.toastsmall}>
                상품 리뷰를 작성하고 포인트도 받아보세요
              </div>
            </div>
          </div>
          <div className={styles.toastbest2}>
            <RiContactsLine />

            <div>
              <div className={styles.toastbig}>시공 전문가 리뷰쓰기</div>
              <div className={styles.toastsmall}>
                시공 전문가 리뷰를 작성하고 포인트도 받아보세요
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Headertoast;
