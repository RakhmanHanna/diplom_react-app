import { useContext, useEffect, useState } from 'react';
import { getRequest } from '../../utils/index';
import { ALBUMS_ENDPOINT } from '../../constants/endpoints';
import PageWrapper from '../../components/wrappers/PageWrapper/index';
import { Table, Button } from 'antd';
import { openNotification } from './../../utils/index';
import { UserContext } from '../../context/userContext';
import { useHistory } from 'react-router-dom';
import './style.css';

// const { Column, ColumnGroup } = Table;

interface Albums {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const AlbumsPage = () => {
  const history = useHistory();
  const { users } = useContext(UserContext);
  const [albumItems, setAlbumsItems] = useState<Albums[]>([]);
  const [albumsPhotos, setAlbumsPhotos] = useState<AlbumsPhoto[]>([]);

  const getAlbumsItems = () => {
    getRequest(ALBUMS_ENDPOINT)
      .then((res) => setAlbumsItems(res.data))
      .catch((err) =>
        openNotification(err.response.data.error, err.response.data.message)
      );
  };

  useEffect(() => {
    getAlbumsItems();
    // eslint-disable-next-lne react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: 'User Name',
      render: (userId: any) => {
        const username = users.find((user) => user.id === userId)?.username;
        return username;
      },
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Album Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      // render: () => <Link to={`/albums/${albumItems.find}`}>Show Photos</Link>,
      render: (photoId: any) => {
        const albumsId = users.find((item) => item.id === photoId)?.id;
        return (
          <Button
            key="submit"
            type="primary"
            onClick={() =>
              history.push(`${window.location.pathname}/${photoId}`)
            }
          >
            Show Photos
          </Button>
        );
      },
    },
  ];

  return (
    <PageWrapper>
      <>
        <h1>Albums Page</h1>
        <Table columns={columns} dataSource={albumItems || users} />
      </>
    </PageWrapper>
  );
};

export default AlbumsPage;
