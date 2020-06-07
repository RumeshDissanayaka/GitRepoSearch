import React from 'react';
import { Card } from 'antd';


const RepoCard = ({ key, name, userImage, clicked, loading }) => {
  return (
    <div
      onClick={() => clicked()}
      key={key}
      style={{
        display: "flex",
        flexDirection: "row", marginTop: 5, marginBottom: 10
      }}
    >
      <Card loading={loading} hoverable={true} title={name} bordered={false} style={{ width: '100%' }}>
        <img alt="ownerImage" src={userImage} style={{ height: 200 }} />
      </Card>
    </div>
  )
}

export default RepoCard