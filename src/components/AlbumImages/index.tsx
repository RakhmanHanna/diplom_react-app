import { Image } from 'antd';

const AlbumImage = (props: any) => {
  return (
    <div className="photo-wrapper">
      <Image className="photo" width={250} src={props.url} />
    </div>
  );
};

export default AlbumImage;
