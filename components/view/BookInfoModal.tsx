import ListStyle from "../../styles/List.module.css";
import { Typography, Modal } from "antd";
import { Row, Col, List } from "antd";
import { useState } from "react";
const { Title } = Typography;

interface propsType {
  visible: boolean;
  onCancel: any;
}

const BookOneList = (props: propsType) => {
  return (
    <Modal title="책 제목" visible={props.visible} onCancel={props.onCancel}>
      <div className="bookview">
        <div className="bookview-thumbnail">
          <img src="https://dummyimage.com/120x150/000/fff" alt="" />
        </div>
        <div className="bookview-info">
          <dl>
            <dt>작가</dt>
            <dd>김영하</dd>
          </dl>
        </div>
      </div>
    </Modal>
  );
};

export default BookOneList;
