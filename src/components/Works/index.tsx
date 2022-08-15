import { Row, Col, Descriptions, Timeline } from 'antd';
import Title from 'components/Title';
import LogoImg from 'static/images/logo.png';
import parse from 'html-react-parser';
import * as S from './styled';

const Works = () => {
  const works = [
    {
      id: 0,
      title: '개발 외 기타 업무 담당',
      text: '신입 개발자 사수 담당(업무 교육/할당)<br>개발자 코드 리뷰 (피드백/교육)<br>git flow 관리',
    },
    {
      id: 1,
      title: 'Hpoint HGame',
      date: '2022-06 ~ 현재',
      text: '개발 언어 : Html, Css, Javascript, React, Zustand, ReactQuery<br>개발 셋팅: aws S3, Jenkins',
    },
    {
      id: 2,
      title: '지니펀',
      date: '2021-07 ~ 현재',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery<br>개발 셋팅: aws ec2',
    },
    {
      id: 3,
      title: "KT 'K딜' 퍼블리싱 및 운영 개발",
      date: '2021-02 ~ 현재',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery, Jsp<br>개발 셋팅: aws ec2',
    },
    {
      id: 4,
      title: '해피포인트 해피 게임',
      date: '2020-10 ~ 현재',
      text: '개발 언어 : Html, Css, Javascript, React, Redux, Redux-saga<br>개발 셋팅: aws S3, Jenkins',
    },
    {
      id: 5,
      title: '20 코리아 세일페스타 프로모션',
      date: '2020-10 ~ 2020-12',
      text: '개발 언어 : Html, Css, Javascript, Jquery<br>개발 셋팅: aws s3',
    },
    {
      id: 6,
      title: "LG U+ '콕딜' 퍼블리싱 및 운영 개발",
      date: '2020-10 ~ 현재',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery, Jsp<br>개발 셋팅: aws ec2',
    },
    {
      id: 7,
      title: 'ksp 스마트 쇼핑 퍼블리싱 및 운영 개발',
      date: '2020-10 ~ 현재',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery, Jsp<br>개발 셋팅: aws ec2',
    },
    {
      id: 8,
      title: 'CJ ONE 펀타운',
      date: '2020-05 ~ 현재',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery<br>개발 셋팅: aws S3',
    },
    {
      id: 9,
      title: "SKT '티딜' 퍼블리싱 및 운영 개발",
      date: '2020-04 ~ 2021',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery, Jsp<br>개발 셋팅: aws ec2',
    },
    {
      id: 10,
      title: '애드머스',
      date: '2019-10 ~ 현재',
      text: '개발 언어 : Html, Css, Javascript, Angular<br>개발 셋팅: aws ec2',
    },
    {
      id: 11,
      title: '19 코리아 세일페스타 프로모션',
      date: '2019-06 ~ 2019-12',
      text: '개발 언어 : Html, Css, Javascript, Jquery<br>개발 셋팅: aws s3',
    },
    {
      id: 12,
      title: '삼성 페이 픽앤 유니크 퍼블리싱 및 운영 개발',
      date: '2018-01 ~ 2019',
      text: '개발 언어 : Html, Css, Javasciprt, Jquery, Jsp<br>개발 셋팅: aws ec2',
    },
  ];
  return (
    <S.Wrapper id="works">
      <Title>경력</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={4}>
          <S.LogoImg src={LogoImg} alt="logo" title="logo" />
        </Col>
        <Col xs={24} md={20}>
          <Descriptions
            title={
              <S.Title>
                (주)지니웍스 <p>2018.01 ~ 현재</p>
              </S.Title>
            }
            column={24}
          >
            <Descriptions.Item span={24}>
              ㈜지니웍스는 커머스 플랫폼 사업, 프로모션 마케팅 사업을 진행 하는
              회사 입니다.
            </Descriptions.Item>
            <Descriptions.Item span={24}>
              Front 파트장을 담당하고 있으며, 배포 관리 및 프론트 엔드 관련 교육
              , 신입 개발자 사수, 개발 연동을 위한 업체와의 소통 등의 프론트
              엔드 작업을 담당 하고 있습니다.
            </Descriptions.Item>
          </Descriptions>
          <S.Line />
          <S.CustomTimeLine>
            {works.map((v) => (
              <Timeline.Item key={v.id}>
                <S.TimeLineTitle>{v.title}</S.TimeLineTitle>
                <S.TimeLineDate>{v.date}</S.TimeLineDate>
                <S.TimeLineText>{parse(v.text)}</S.TimeLineText>
              </Timeline.Item>
            ))}
          </S.CustomTimeLine>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Works;
