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
                className="user-card"
                key={user.id}
                title={user.name}
                bordered={true}
                style={{ width: 300 }}
              >
                <p>{user.email}</p>
                <p>{user.id}</p>
              </Card>
            );
          })}
        </div>
      </>
    </PageWrapper>
  );
};

export default UsersPage;
