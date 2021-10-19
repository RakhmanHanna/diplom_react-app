import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Card } from 'antd';
import PageWrapper from '../../components/wrappers/PageWrapper/index';
import './style.css';

const UsersPage = () => {
  const { users } = useContext(UserContext);
  return (
    <PageWrapper>
      <>
        <h1>Users Page</h1>
        <div className="users-row">
          {users.map((user) => {
            return (
              <Card
                key={user.id}
                title={user.id}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>{user.name}</p>
                <p>{user.email}</p>
              </Card>
            );
          })}
        </div>
      </>
    </PageWrapper>
  );
};

export default UsersPage;
