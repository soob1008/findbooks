import type { NextPage } from "next";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import BookOneList from "../components/list/BookOneList";
import ListStyle from "../styles/List.module.css";

const NewBooks: NextPage = () => {
  return (
    <>
      <Title level={3}>New Book</Title>
      <Paragraph>You can check out new books.</Paragraph>
      <div className={ListStyle.scroll_list}>
        <BookOneList />
      </div>
    </>
  );
};

export default NewBooks;
