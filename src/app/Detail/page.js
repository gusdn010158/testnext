"use client";
import React, { useState, useEffect } from "react";
import api from "@/services/api";
import styles from "./Detail.module.css";
import { BsBoxSeamFill } from "react-icons/bs";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
function page(props) {
  const url = "http://localhost:3001/test";
  const test = api(url);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    // 페이지가 처음으로 렌더링될 때 index를 1로 설정하여 id가 1인 컴포넌트를 보여줌
    setIndex(1);
  }, []);
  return (
    <div className={styles.detail}>
      <div className={styles.detailin}>
        <div className={styles.dleft}>
          <div className={styles.leftimgs}>
            <div className={styles.smallimg}>
              {test.map((item) =>
                item.images.map((imageObj, index) => (
                  <img
                    src={imageObj.img}
                    onMouseOver={() => setIndex(imageObj.index)}
                    key={imageObj.index}
                  />
                ))
              )}
            </div>
            <div className={styles.dleftimg}>
              {test.map((item) =>
                item.images
                  .filter((item) => index === item.index)
                  .map((imageObj) => <img src={imageObj.img} />)
              )}
            </div>
          </div>
        </div>
        <div className={styles.dright}>
          <div>헬로우슬립</div>
          <h3>
            [10%쿠폰] 부드러운 카스테라 워싱 항균 옥수수솜 간절기/사계절
            차렵이불세트
          </h3>
          <div>35,049개 리뷰</div>
          <div>37%57,300원</div>
          <div className={styles.drdiv}>
            <div>
              <h2>35,900원</h2>
              <div className={styles.drspan}>특가</div>
            </div>
            <button className={styles.drcoupon}>
              쿠폰받기 <AiOutlineDownload />
            </button>
          </div>
          <div className={styles.drbt1}>
            <p>혜택</p>
            <div>36P 적립 (WELCOME 0.1% 적립)</div>
          </div>
          <div className={styles.drbt}>
            <p>배송</p>
            <div>
              <p>3,500원 (70,000원 이상 구매시 무료배송)</p>
              <div>일반택배</div>
              <div>제주도/도서산간 지역 5,000원</div>
              <div className={styles.drcome}>
                <div>
                  <BsBoxSeamFill />
                  4/26(금) 도착 예정 84%
                </div>
                <CgChevronDown />
              </div>
              <div className={styles.dranr}>
                묶음 배송상품 추가하기 <CgChevronRight />
              </div>
            </div>
          </div>
          <div className={styles.drbottom}></div>
        </div>
      </div>
    </div>
  );
}

export default page;
{
  /*
    // // },

    // // {
    // //   "id": 2,
    // //   "name": "오늘의달",
    // //   "img": "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=144"
    // // },
    // // {
    // //   "id": 3,
    // //   "name": "수납꿀팁",
    // //   "img": "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/169880736853477508.png?w=144"
    // // },
    // // {
    // //   "id": 4,
    // //   "name": "행운출첵",
    // //   "img": "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/170184318298899959.png?w=144"
    // // },
    // // {
    // //   "id": 5,
    // //   "name": "집들이",
    // //   "img": "https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=144"
    // // }*/
}
