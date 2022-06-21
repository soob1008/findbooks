import type { NextPage } from "next";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Button, Form, Input, message, Space } from "antd";

const Search: NextPage = () => {
  return (
    <>
      <Title level={3}>Search</Title>
      <Paragraph>Let's search for a book!</Paragraph>
      <Form>
        <Form.Item
          name="book"
          rules={[
            {
              required: true,
            },
            {
              type: "string",
              warningOnly: true,
            },
            {
              type: "string",
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button htmlType="button">Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default Search;
