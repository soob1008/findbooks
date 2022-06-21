import type { NextPage } from "next";
import HomeStyle from "../styles/Home.module.css";
import { Typography } from "antd";
import { BookOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <div className={HomeStyle.home}>
      <Title level={2}>Find Books!</Title>
      <Paragraph>Hello, welcome to Find Books.</Paragraph>
      <img src="/images/books.png" width={500} height={350} />
    </div>
  );
};

export default Home;
