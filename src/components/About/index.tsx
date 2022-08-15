import Title from 'components/Title';
import { Card, Col, Row } from 'antd';
import {
  IdcardOutlined,
  ScheduleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import * as S from './styled';

const About = () => {
  const { Meta } = Card;

  return (
    <S.Wrapper id="about">
      <Title>자기 소개</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Meta
              avatar={<IdcardOutlined style={{ fontSize: '25px' }} />}
              title="이름"
              description="이승혁"
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Meta
              avatar={<ScheduleOutlined style={{ fontSize: '25px' }} />}
              title="생년월일"
              description="2000-01-03"
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Meta
              avatar={<MailOutlined style={{ fontSize: '25px' }} />}
              title="이메일"
              description="dongsscc@gmail.com"
            />
          </Card>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default About;
