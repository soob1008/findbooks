import type { NextPage } from "next";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import BookOneList from "../components/list/BookOneList";
import ListStyle from "../styles/List.module.css";
import key from "./api/config";

const NewBooks: NextPage = (books) => {
  console.log(books);
  return (
    <>
      <Title level={3}>New Book</Title>
      <Paragraph>Click on the list to see more information.</Paragraph>
      <div className={ListStyle.scroll_list}>
        <BookOneList />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const bestSellerUrl = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${key.ttbKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

  const res = await fetch(bestSellerUrl);
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
};

export default NewBooks;
