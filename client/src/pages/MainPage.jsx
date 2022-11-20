import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import * as S from '../style/Main/MainPageStyle';
import ChallengeList from '../components/ChallengeList/Challenge';
import SlideBanner from '../components/Main/SlideBanner';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading/Loading';

function MainPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  // 유저조회
  useEffect(() => {
    axios
      .get(`http://localhost:3001/member?page=1&size=7`)
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
        console.log('user>>>', user);
      })
      .catch((error) => {
        window.alert(error);
        console.log('error', error);
      });
  }, []);

  // 챌린지 리스트페이지로 이동
  const LinkChallengePage = () => {
    navigate('/challengelist');
  };

  return (
    <S.MainContainer>
      {loading ? <Loading /> : null}
      {/* 스크롤 시작 */}
      <ScrollContainer snap="none">
        {/* 슬라이드 */}
        <ScrollPage page={0}>
          <S.FirstPage>
            <SlideBanner />
          </S.FirstPage>
        </ScrollPage>

        {/* 스크롤 시 글자 모션 */}
        <ScrollPage page={1}>
          <Animator
            animation={batch(Sticky(50), Fade(), MoveOut(0, -200), ZoomIn())}
          >
            <S.FontSize50>같은 목표를 가진 사람들과 함께</S.FontSize50>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator
            animation={batch(Sticky(50), Fade(), MoveOut(0, -200), ZoomIn())}
          >
            <S.FontSize50>동기부여를 높이기 위해서 돈을 걸고</S.FontSize50>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator
            animation={batch(Sticky(50), Fade(), MoveOut(0, -200), ZoomIn())}
          >
            <S.FontSize50>목표 100% 달성 시</S.FontSize50>
          </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator
            animation={batch(Sticky(50), Fade(), MoveOut(0, -200), ZoomIn())}
          >
            <S.FontSize50>쏠쏠한 상금까지</S.FontSize50>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <S.PageFive>
            <Animator animation={MoveIn(0, -1000)}>
              <S.FontSize50>지금 바로</S.FontSize50>
            </Animator>
            <Animator animation={MoveOut(0, 1600)}>
              <S.FontSize50>슬기로운 생활과 함께</S.FontSize50>
            </Animator>
            <Animator animation={MoveOut(2000, 1400)}>
              <S.FontSize50>목표를 향해</S.FontSize50>
            </Animator>
            <Animator animation={MoveOut(-2000, 1200)}>
              <S.FontSize50>건강하게 앞서 나아가다</S.FontSize50>
            </Animator>
          </S.PageFive>
        </ScrollPage>

        {/* 신규챌린지, 이달의 랭커 */}
        <ScrollPage page={6}>
          <S.Mt4>
            <Animator animation={batch(Fade(), MoveIn(-1000, 0))}>
              <S.Container>
                <div>
                  <S.FontSize30>신규챌린지</S.FontSize30>
                  <div>
                    <ChallengeList />
                  </div>
                </div>
              </S.Container>
            </Animator>

            <Animator animation={batch(Fade(), MoveIn(1000, 0))}>
              <S.Container>
                <S.Flex>
                  <div>
                    <S.FontSize30M3>이달의 랭커</S.FontSize30M3>
                    <div>
                      <S.MonthlyUser
                        src="./img/smile.jpg"
                        alt="이번달 1등 유저사진"
                      />
                    </div>
                  </div>
                  <S.MarginLeft3>
                    <S.FontSize30M3>
                      <div className="wrapper">
                        <div className="title">전체 랭킹</div>
                        <div className="view_all" onClick={LinkChallengePage}>
                          더보기
                        </div>
                      </div>
                    </S.FontSize30M3>
                    {user.map((user, index) => (
                      <S.AllUser key={index}>
                        <div>{user.memberName}</div>
                        <div>{user.memberBadge}</div>
                        <div>{user.followerCount}</div>
                      </S.AllUser>
                    ))}
                  </S.MarginLeft3>
                </S.Flex>
              </S.Container>
            </Animator>
          </S.Mt4>
        </ScrollPage>
      </ScrollContainer>
    </S.MainContainer>
  );
}

export default MainPage;
