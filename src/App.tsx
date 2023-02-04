import styled from "styled-components";
import Slider from "react-slick";

import { GlobalStyle } from "./style/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slide",
  };
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
              <div className="slide">
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
            <div className="people">
              <strong>황동주 · 김순자</strong>의 자&nbsp;&nbsp;&nbsp;
              <strong>의명</strong>
              <br />
              <strong>서한신 · 김희숙</strong>의 녀&nbsp;&nbsp;&nbsp;
              <strong>미향</strong>
            </div>
            <div className="location">
              <h3>
                Date
                <br />
                2023. 03. 04. SAT PM 1:00
              </h3>
              <br />
              <h3>Location</h3>
              서울 강남구 테헤란로13길 33, 아모르하우스
              <h4>주차안내</h4>
              기원 민영주차장
              <a href="https://naver.me/5CzpzPLV">네이버 지도보기</a>
              <br />
              요금은 저희가 부담합니다.
              <h4>지하철/도보로</h4>
              2호선 역삼역 4번 출구 도보 5-7분
              <br />
              2호선 강남역 12번 출구 도보 9-11분
              <br />
              9호선 신논현역 4번 출구 도보 12-14분
              <br />
              9호선 언주역 8번 출구 도보 10-12분
            </div>
            {/* <div className="">
              <h3>마음 전하실 곳</h3>
              <h4>신랑, 신부</h4>
              <h4>혼주</h4>
            </div> */}
          </Contents>
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
  background-image: url("/assets/images/01.jpg");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
    font-size: 14px;
    line-height: 2em;
  }
  .people {
    font-size: 12px;
    line-height: 2.2em;
    margin: 40px 0;
    strong {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .location {
    font-size: 12px;
    line-height: 1.5em;
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    h4 {
      color: #faacaa;
      font-weight: 700;
      margin: 2em 0 0.5em;
    }
  }
`;

export default App;
