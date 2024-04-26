"use client";
import React, { useState, useEffect } from "react";
import api from "@/services/api";
import styles from "./Detail.module.css";
import { BsBoxSeamFill } from "react-icons/bs";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import { DiHtml53DEffects } from "react-icons/di";
import { IoMdStar } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";

function page(props) {
  const url = `http://localhost:3001/test`;
  const test = api(url);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    // 페이지가 처음으로 렌더링될 때 index를 1로 설정하여 id가 1인 컴포넌트를 보여줌
    setIndex(1);
  }, []);

  const selectedTestData = test.find(
    (item) => item.id == parseInt(props.params.id)
  );

  return (
    <div className={styles.detail}>
      <div className={styles.detailin}>
        <div className={styles.dleft}>
          <div className={styles.leftimgs}>
            <div className={styles.smallimg}>
              {selectedTestData &&
                selectedTestData.images.map((imageObj) => (
                  <img
                    src={imageObj.img}
                    onMouseOver={() => setIndex(imageObj.index)}
                    key={imageObj.index}
                  />
                ))}
            </div>
            <div className={styles.dleftimg}>
              {selectedTestData &&
                selectedTestData.images
                  .filter((item) => index === item.index)
                  .map((imageObj) => <img src={imageObj.img} />)}
            </div>
          </div>
        </div>
        {selectedTestData && (
          <div className={styles.dright}>
            <div className={styles.drightdd}> {selectedTestData.company}</div>
            <div className={styles.drtitle}>
              <h3>{selectedTestData.title}</h3>
              <span>
                <BsBookmark />
                <BsFillShareFill />
              </span>
            </div>
            <div className={styles.drstar}>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              35,049개 리뷰
            </div>
            <div className={styles.drpdiv}>
              37%<p className={styles.drp}>57,300원</p>
            </div>
            <div className={styles.drdiv}>
              <div>
                <h1> {selectedTestData.price}</h1>
                <h2>원</h2>
                <div className={styles.drspan}>특가</div>
              </div>
              <button className={styles.drcoupon}>
                쿠폰받기 <AiOutlineDownload />
              </button>
            </div>
            <div className={styles.drbt1}>
              <p>혜택</p>
              <p className={styles.drbtpp}>
                36P{" "}
                <span className={styles.drbtdivdiv}>
                  적립 (WELCOME 0.1% 적립)
                </span>
              </p>
            </div>
            <div className={styles.drbt}>
              <p>배송</p>
              <div>
                <p className={styles.drbtpp}>
                  3,500원{" "}
                  <span className={styles.drbtdivdiv}>
                    (70,000원 이상 구매시 무료배송)
                  </span>
                </p>
                <div>일반택배</div>
                <div className={styles.drbtdiv1}>
                  제주도/도서산간 지역 5,000원
                </div>

                <div className={styles.drcome} onClick={() => handleOpen()}>
                  <div>
                    <BsBoxSeamFill />
                    <span className={styles.spanspan}>
                      4/26(금) <span>도착 예정 84%</span>
                    </span>
                  </div>
                  <CgChevronDown />
                </div>
                {open && (
                  <div className={styles.dropen}>
                    <div className={styles.drcomeopen}>
                      <span className={styles.drcomspan}>
                        4/25(목)까지 도착 예정
                      </span>
                      <div className={styles.line}></div> <span>74%</span>
                    </div>
                    <div className={styles.drcomeopen}>
                      <span className={styles.drcomspan}>
                        4/26(금)까지 도착 예정
                      </span>
                      <div className={styles.line}></div>
                      <span>84%</span>
                    </div>
                    <div className={styles.drcomeopen}>
                      <span className={styles.drcomspan}>
                        4/29(월)까지 도착 예정
                      </span>
                      <div className={styles.line}></div> <span>91%</span>
                    </div>
                  </div>
                )}

                <div className={styles.dranr}>
                  묶음 배송상품 추가하기 <CgChevronRight />
                </div>
              </div>
            </div>
            <div className={styles.drbottom}>
              <div className={styles.drbottomtop}>
                <p>
                  <DiHtml53DEffects />
                  {selectedTestData.company}
                </p>
                <button>
                  브랜드홈
                  <CgChevronRight />
                </button>
              </div>
              <div className={styles.drbottommid}>
                <select>
                  <option>색상</option>
                  <option value="banana">바나나</option>
                  <option value="apple">사과</option>
                  <option value="orange">오렌지</option>
                </select>
                <select>
                  <option>구성 및 사이즈</option>
                  <option value="banana">바나나</option>
                  <option value="apple">사과</option>
                  <option value="orange">오렌지</option>
                </select>
                <select>
                  <option>추가상품 (선택)</option>
                  <option value="banana">바나나</option>
                  <option value="apple">사과</option>
                  <option value="orange">오렌지</option>
                </select>
              </div>
              <div className={styles.drbottombt}>
                <div className={styles.drbottomtop}>
                  <p>주문 금액</p>
                  <h2>0원</h2>
                </div>
                <div className={styles.drbottombt_coupon}>
                  <p>받지 않은 쿠폰이 더 있어요</p>
                  <div>
                    쿠폰받기 <AiOutlineDownload />
                  </div>
                </div>
                <div className={styles.drbottombt_button}>
                  <button className={styles.drbottombt_button1}>
                    장바구니
                  </button>
                  <button className={styles.drbottombt_button2}>
                    바로구매
                  </button>
                </div>
                <div className={styles.drbottombt_img}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
