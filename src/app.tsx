import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'antd/es/layout';
import Typography from 'antd/es/typography';
import Table from 'antd/es/table';
import { ColumnProps, TableRowSelection } from 'antd/lib/table/interface';
import { getEmployees } from './store/employees/action-creators';
import { selectors, actions } from './store/employees';
import 'antd/es/layout/style/css';
import 'antd/es/table/style/css';
import './app.css';
import { Employee } from './types';

const { Header, Content } = Layout;
const { Title } = Typography;

const columns: Array<ColumnProps<Employee>> = [
  {
    title: 'First name',
    dataIndex: 'firstName',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const rowSelection = useMemo((): TableRowSelection<Employee> => ({
    onChange: (selectedKeys) => {
      dispatch(actions.setSelected(selectedKeys || []));
    },
    getCheckboxProps: (record) => ({
      name: record.key,
    }),
  }), [dispatch]);

  const employees = useSelector<any, Array<Employee>>(selectors.getEmployees);
  const isPending = useSelector<any, boolean>(selectors.isPending);
  const selected = useSelector<any, Array<Employee>>(selectors.getSelected);

  return (
    <Layout>
      <Header>
        <Title>
          Employees
        </Title>
      </Header>
      <Content>
        <Table
          dataSource={employees}
          columns={columns}
          pagination={false}
          rowSelection={rowSelection}
          loading={isPending}
          footer={() => (
            <div>
              <b>Users: </b>
              {selected.map(({ firstName }) => firstName).join(', ') || 'No selected'}
            </div>
          )}
        />
      </Content>
    </Layout>
  );
};

export default App;
