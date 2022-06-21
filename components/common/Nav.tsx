import Link from "next/link";
import NavStyle from "../../styles/Nav.module.css";
import { Typography } from "antd";
import { HeartOutlined, SearchOutlined, BookOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Nav = () => {
  return (
    <nav className={NavStyle.gnb}>
      <Title>
        <Link href="/">FINDBOOKS</Link>
      </Title>
      <ul>
        <li>
          <BookOutlined />
          <Link href="/newbook">New Book</Link>
        </li>
        <li>
          <HeartOutlined />
          <Link href="/bestseller">Best Seller</Link>
        </li>
        <li>
          <SearchOutlined />
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
