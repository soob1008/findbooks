import type { NextPage } from "next";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import BookOneList from "../components/list/BookOneList";
import ListStyle from "../styles/List.module.css";

const BestSeller: NextPage = () => {
  return (
    <>
      <Title level={3}>Best Seller</Title>
      <Paragraph>You can check the list of popular books.</Paragraph>
      <div className={ListStyle.scroll_list}>
        <BookOneList />
      </div>
    </>
  );
};

export default BestSeller;
