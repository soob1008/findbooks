import HeaderInfo from "./HeaderInfo";
import { Col, Row } from "antd";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <HeaderInfo />
      <div className="wrapper">
        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
