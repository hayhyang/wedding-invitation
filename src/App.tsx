import { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import { GlobalStyle } from "./style/GlobalStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Target from "./Target";

const { kakao }: any = window;

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slide",
  };

  const KakaoMapScript = () => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5017456999996, 127.0274163539368),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
  };

  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Home>
        <Container>
          <div className="main-visual">
            <h1 className="main-copy">
              03.04
              <br />
              hwang eui myeong
              <br />
              seo mi hyang
            </h1>
            <Slider {...settings}>
              {/* <div>
                <video autoPlay loop muted>
                  <source src="/assets/video/video.mp4" type="video/mp4" />
                </video>
              </div> */}
              <div>
                <img src="/assets/images/01.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/02.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/03.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/04.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/05.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/06.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/07.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/08.jpg" alt="메인이미지" />
              </div>
              <div>
                <img src="/assets/images/09.jpeg" alt="메인이미지" />
              </div>
            </Slider>
          </div>
          <Contents>
            <p>
              오랜 기다림 속에 저희 두사람,
              <br />
              새로운 시작을 하려합니다.
              <br />
              기쁜 마음으로 축하해주시면
              <br />
              감사한 마음으로 간직하겠습니다.
            </p>
            <div className="section people">
              <strong>황동주 · 김순자</strong>&nbsp;&nbsp;의
              자&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>의명</strong>
              <br />
              <strong>서한신 · 김희숙</strong>&nbsp;&nbsp;의
              녀&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>미향</strong>
            </div>
            <div className="section location">
              <h3>일시</h3>
              2023. 03. 04. SAT PM 1:00
              <br />
              <br />
              <h3>오시는 길</h3>
              서울 강남구 테헤란로13길 33, 아모르하우스
              <div id="map"></div>
              <h4>주차안내</h4>
              기원 민영주차장
              <a href="https://naver.me/5CzpzPLV">네이버 지도보기</a>
              <br />
              요금은 저희가 부담합니다.
              <h4>지하철/도보</h4>
              2호선 역삼역 4번 출구 도보 5-7분
              <br />
              2호선 강남역 12번 출구 도보 9-11분
              <br />
              9호선 신논현역 4번 출구 도보 12-14분
              <br />
              9호선 언주역 8번 출구 도보 10-12분
            </div>
            <div className="section send">
              <h3>마음 전하실 곳</h3>
              <h4 style={{ marginTop: "1em" }}>신랑, 신부</h4>
              <ul>
                <Target
                  role="신랑"
                  name="황의명"
                  phone="01099283583"
                  account="신한은행 110-529-174377 황의명"
                />
                <Target
                  role="신부"
                  name="서미향"
                  phone="01020570980"
                  account="카카오뱅크 3333070200593 서미향"
                />
              </ul>
              <h4>신랑측 혼주</h4>
              <ul>
                <Target
                  role="어머니"
                  name="김순조"
                  phone="01027518158"
                  account="부산은행 039-02-037312-5 김순조"
                />
              </ul>
              <h4>신부측 혼주</h4>
              <ul>
                <Target
                  role="아버지"
                  name="서한신"
                  phone="01082800740"
                  account="농협 61308256038102 서한신"
                />
              </ul>
            </div>
          </Contents>
          <Footer>Copyright 2023. 서미향 all rights reserved.</Footer>
        </Container>
      </Home>
    </div>
  );
}

const Home = styled.div``;
// const Video = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: gray;
// `;
const Container = styled.div`
  width: 100vw;

  height: 100vh;

  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;
  background-image: url("/assets/images/01.jpg");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #666;
  font-size: 14px;
  line-height: 1.8em;
  strong {
    font-weight: 700;
  }

  .section {
    &not(:last-child) {
      margin-bottom: 60px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
      content: "🤍";
      display: block;
      margin-bottom: 0.5em;
    }
  }

  h4 {
    font-size: 14px;
    color: #faacaa;
    font-weight: 700;
    margin: 2em 0 0.5em;
  }

  .main-visual {
    position: relative;
    .main-copy {
      color: white;
      position: absolute;
      top: 60px;
      left: 0;
      mix-blend-mode: difference;
      right: 0;
      font-family: "Bebas Neue";
      font-size: 40px;
      z-index: 100;
      text-align: center;
      line-height: 0.9em;
    }
    .slide {
      width: 100vw;
      height: 100vhpx;
      video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
      img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }
    .slick-dots {
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
      li {
        width: 8px;
        height: 8px;
        margin: 10;
        opacity: 0.5;
        button {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: white;
          &:before {
            content: none;
          }
        }
        &.slick-active {
          width: 40px;
          opacity: 1;
          button {
            width: 40px;
            &:before {
              color: white;
              opacity: 1;
              width: 40px;
            }
          }
        }
      }
    }
  }
`;

const Contents = styled.div`
  padding: 80px 0;
  p {
    font-size: 16px;
    line-height: 2em;
    font-family: "Nanum Myeongjo";
  }
  .people {
    font-size: 14px;
    line-height: 2.2em;
    margin: 40px 0;
    strong {
      font-family: "Nanum Myeongjo";
      font-size: 18px;
      font-weight: 700;
    }
  }
  .location {
  }
  #map {
    width: 100vw;
    height: 70vw;
    margin: 8px 0;
  }
  .send {
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 2em;
      .button {
        font-size: 20px;
        margin-left: 16px;
        a {
          text-decoration: none;
        }
      }
      .account {
        font-size: 10px;
        padding: 0em 0.8em;
        height: 2em;
        line-height: 2em;
        background: #999;
        color: white;
        border-radius: 20px;
      }
    }
    margin-top: 40px;
    h4 {
      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Footer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 30px;
  line-height: 30px;
  width: 100vw;
  color: #fff;
  font-size: 7px;
  font-family: "Noto Sans KR";
`;

export default App;
