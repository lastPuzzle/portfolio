import { Row, Col, Card } from 'antd';
import Title from 'components/Title';
import * as S from './styled';

const Skills = () => {
  return (
    <S.Wrapper id="skills">
      <Title>기술</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title={<S.Title>프론트엔드</S.Title>}>
            <Row gutter={[16, 16]}>
              <S.CustomTag color="#f16529">HTML</S.CustomTag>
              <S.CustomTag color="#264de4">CSS</S.CustomTag>
              <S.CustomTag color="#f1bf26">JS</S.CustomTag>
              <S.CustomTag color="#3178c6">TypeScript</S.CustomTag>
              <S.CustomTag color="#00d8ff">React</S.CustomTag>
              <S.CustomTag color="#7649bb">Redux</S.CustomTag>
              <S.CustomTag color="#89d96d">Redux-saga</S.CustomTag>
              <S.CustomTag color="#0868ac">Jquery</S.CustomTag>
              <S.CustomTag color="#f73f51">React query</S.CustomTag>
              <S.CustomTag color="#285bca">Zustand</S.CustomTag>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title={<S.Title>백엔드</S.Title>}>
                <Row gutter={[16, 16]}>
                  <S.CustomTag color="#8bc500">Node Js</S.CustomTag>
                  <S.CustomTag color="#000">express</S.CustomTag>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card title={<S.Title>배포</S.Title>}>
                <Row gutter={[16, 16]}>
                  <S.CustomTag color="#e3750d">Amazon Ec2</S.CustomTag>
                  <S.CustomTag color="#f78f04">Amazon Lamda</S.CustomTag>
                  <S.CustomTag color="#60a337">Amazon S3</S.CustomTag>
                  <S.CustomTag color="#335061">Jenkins</S.CustomTag>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title={<S.Title>버전 관리</S.Title>}>
                <Row gutter={[16, 16]}>
                  <S.CustomTag color="#f05133">git</S.CustomTag>
                  <S.CustomTag color="#db4128">gitLab</S.CustomTag>
                  <S.CustomTag color="#000">gitHub</S.CustomTag>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card title={<S.Title>협업 툴</S.Title>}>
                <Row gutter={[16, 16]}>
                  <S.CustomTag color="#2684ff">Jira</S.CustomTag>
                  <S.CustomTag color="#f8991f">Zeplin</S.CustomTag>
                  <S.CustomTag color="#a259ff">Figma</S.CustomTag>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Skills;
