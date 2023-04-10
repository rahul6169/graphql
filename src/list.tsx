import { Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import "./list.css";
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  contactType: string;
  address: string;
  tags: string[];
}
const data: DataType[] = [
  {
    key: "1",
    firstName: "smart",
    lastName: "sarathi",
    age: 32,
    contactType: "company",
    address: "New York No. 1 Lake Park",
    tags: ["software developer"],
  },
  {
    key: "2",
    firstName: "chola",
    lastName: "king",
    age: 42,
    contactType: "company",

    address: "London No. 1 Lake Park",
    tags: ["designer"],
  },
  {
    key: "3",
    firstName: "lalith",
    lastName: "saran",
    age: 32,
    contactType: "company",

    address: "Sydney No. 1 Lake Park",
    tags: ["software developer"],
  },
];
const List: React.FC = () => {
  const getRowClassName = (record: DataType, index: number) =>
    index === 0 ? "blue-row" : "";
  return (
    <Table className="table" dataSource={data} rowClassName={getRowClassName}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="contactType" dataIndex="contactType" key="contactType" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: DataType) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default List;
