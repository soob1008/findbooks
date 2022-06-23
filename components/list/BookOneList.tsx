import { useState } from "react";

import ListStyle from "../../styles/List.module.css";
import { Typography, Modal } from "antd";
import { Row, Col, List } from "antd";
const { Title } = Typography;

import BookInfoModal from "../view/BookInfoModal";

const BookOneList = () => {
  const [modal, setModal] = useState<boolean>(false);
  const onClickHandler = () => {
    setModal(true);
  };
  return (
    <>
      <List itemLayout="vertical" className={ListStyle.book_grid_1}>
        <List.Item>
          <div className={ListStyle.img} onClick={onClickHandler}>
            <img src="https://dummyimage.com/120x150/000/fff"></img>
          </div>
          <div className={ListStyle.book_grid_1_info}>
            <Title level={4} onClick={onClickHandler}>
              작별 인사
            </Title>
            <span>김영하</span>
            <p>dasda</p>
          </div>
        </List.Item>
        <List.Item>
          <div className="img" onClick={onClickHandler}>
            <img src="https://dummyimage.com/120x150/000/fff"></img>
          </div>
          <div className={ListStyle.book_grid_1_info}>
            <Title level={4} onClick={onClickHandler}>
              작별 인사
            </Title>
            <span>김영하</span>
            <p>dasda</p>
          </div>
        </List.Item>
        <List.Item>
          <div className="img" onClick={onClickHandler}>
            <img src="https://dummyimage.com/120x150/000/fff"></img>
          </div>
          <div className={ListStyle.book_grid_1_info}>
            <Title level={4} onClick={onClickHandler}>
              작별 인사
            </Title>
            <span>김영하</span>
            <p>dasda</p>
          </div>
        </List.Item>
        <List.Item>
          <div className="img" onClick={onClickHandler}>
            <img src="https://dummyimage.com/120x150/000/fff"></img>
          </div>
          <div className={ListStyle.book_grid_1_info}>
            <Title level={4} onClick={onClickHandler}>
              작별 인사
            </Title>
            <span>김영하</span>
            <p>dasda</p>
          </div>
        </List.Item>
      </List>
      <BookInfoModal visible={modal} onCancel={() => setModal(false)} />
    </>
  );
};

export default BookOneList;
