import React, { useState } from 'react';
import { message } from "antd";
import { connect } from 'react-redux';
import LoadingBar from "react-top-loading-bar";
import { useHistory } from "react-router-dom";
import SearchBar from '../../components/search-bar';
import { fetchRepo } from '../../services/api/search';
import { userRepositories } from '../../redux/actions/repo'
import {
  LOADING_BAR_COLOR,
  LOADING_BAR_HEIGHT, PAGE_BACKGROUND
} from "../../utils/constant";
let loadingBar = null;

const Search = ({ dispatch }) => {
  const history = useHistory();
  const [gitUserName, setGitUserName,] = useState("")
  const searchHandler = userName => {
    if (loadingBar) {
      loadingBar.continuousStart();
    }
    fetchRepo(userName).then(res => {
      if (loadingBar) {
        loadingBar.complete();
      }
      if (res.data && res.data.length > 0) {
        dispatch(userRepositories(res.data))
        history.push(`/repo/${gitUserName}`)
      }
      else {
        message.error(<label style={{ margin: 0 }} className='antd-message'>{'No such git repository'}</label>);
      }
    }).catch(e => {
      if (loadingBar) {
        loadingBar.complete();
      }
      if (e.response.status === 404) {
        message.error(<label style={{ margin: 0 }} className='antd-message'>{'User Not found'}</label>);
      }
    })
  }
  return (
    <div
      style={{
        backgroundColor: PAGE_BACKGROUND
      }}
    >
      <LoadingBar
        height={LOADING_BAR_HEIGHT}
        color={LOADING_BAR_COLOR}
        onRef={ref => (loadingBar = ref)}
      />
      <div
        className="container"
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "hidden"
        }}
      >
        <div className="row">
          <div className="col-md-12">

            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div
                style={{
                  flex: 1,
                  paddingTop: "25%",
                  textAlign: "left",
                  paddingRight: "5%"
                }}
              >
                <h1>Github Username</h1>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <SearchBar clicked={(value) => searchHandler(value)} setGitUserName={setGitUserName} gitUserName={gitUserName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect()(Search)