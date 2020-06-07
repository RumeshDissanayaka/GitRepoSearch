import React, { Fragment } from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const SearchBar = ({ clicked, setGitUserName, gitUserName }) => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
    <Fragment>
      <Search
        placeholder="Input github username"
        enterButton="Search"
        size="large"
        suffix={suffix}
        value={gitUserName}
        onChange={(e) => setGitUserName(e.target.value)}
        onSearch={value => clicked(value)}
      />
    </Fragment>
  )
}
export default SearchBar