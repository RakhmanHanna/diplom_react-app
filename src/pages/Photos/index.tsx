import { PHOTOS_ENDPOINT } from '../../constants/endpoints';
import PageWrapper from '../../components/wrappers/PageWrapper/index';
import { getRequest } from '../../utils/index';
import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';
// import { UserContext } from '..//../context/userContext';
import { Image } from 'antd';
import AlbumImage from '../../components/AlbumImages/index';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotosPage = () => {
  const albumId = window.location.pathname.split('/')[2];
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const getPhotos = () => {
    getRequest(`${PHOTOS_ENDPOINT}?albumId=${albumId}`)
      .then((res) => setPhotos(res.data))
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <>
        <h1>Album Photos</h1>
        <div className="total-photos">Total: {photos.length}</div>
        <div className="gallery">
          <Image.PreviewGroup>
            {photos.map((photo?: IPhoto) => (
              <AlbumImage url={photo?.url} albumId={photo?.albumId} />
            ))}
          </Image.PreviewGroup>
        </div>
      </>
    </PageWrapper>
  );
};

export default PhotosPage;
