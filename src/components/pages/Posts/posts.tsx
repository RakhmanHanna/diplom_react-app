import { Card } from 'antd';
import './posts.css';

const Cards = () => {
  return (
    <div className="wrapper">
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <button>Show comments</button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <button>Show comments</button>
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <button>Show comments</button>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
