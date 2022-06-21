import ListStyle from "../../styles/List.module.css";
import { Typography } from "antd";
import { Row, Col, List } from "antd";
const { Title } = Typography;

const BookOneList = () => {
  return (
    <List itemLayout="vertical" className={ListStyle.book_grid_1}>
      <List.Item>
        <div className="img">
          <img src="https://dummyimage.com/120x150/000/fff"></img>
        </div>
        <div className={ListStyle.book_grid_1_info}>
          <Title level={4}>작별 인사</Title>
          <span>김영하</span>
          <p>dasda</p>
        </div>
      </List.Item>
      <List.Item>
        <div className="img">
          <img src="https://dummyimage.com/120x150/000/fff"></img>
        </div>
        <div className={ListStyle.book_grid_1_info}>
          <Title level={4}>작별 인사</Title>
          <span>김영하</span>
          <p>dasda</p>
        </div>
      </List.Item>
      <List.Item>
        <div className="img">
          <img src="https://dummyimage.com/120x150/000/fff"></img>
        </div>
        <div className={ListStyle.book_grid_1_info}>
          <Title level={4}>작별 인사</Title>
          <span>김영하</span>
          <p>dasda</p>
        </div>
      </List.Item>
      <List.Item>
        <div className="img">
          <img src="https://dummyimage.com/120x150/000/fff"></img>
        </div>
        <div className={ListStyle.book_grid_1_info}>
          <Title level={4}>작별 인사</Title>
          <span>김영하</span>
          <p>dasda</p>
        </div>
      </List.Item>
    </List>
  );
};

export default BookOneList;
