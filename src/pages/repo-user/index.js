import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import RepoCard from '../../components/card'
import {
  PAGE_BACKGROUND
} from "../../utils/constant";
import './index.css'
const RepoOwner = (props) => {
  const history = useHistory();
  const { usersRepo, match } = props
  const [userName, setUserName] = useState("")
  useEffect(() => {
    setUserName(match.params.username)
  }, [match.params.username])
  return (
    <div
      style={{
        backgroundColor: PAGE_BACKGROUND
      }}
    >
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
                  paddingTop: "10%",
                  textAlign: "left",
                  paddingRight: "5%"
                }}
              >
                <h1>{userName.concat(" ,", "Projects")}</h1>
              </div>

            </div>
            {usersRepo.length > 0 ? usersRepo.map((data, index) =>
              <RepoCard loading={false} key={index} name={data.full_name} userImage={data.owner.avatar_url} clicked={() => history.push(`/repository/${userName}/${data.name}`)} />
            ) :
              <Fragment>
                {[...Array(8)].map((i, index) => {
                  return (
                    <RepoCard loading={true} key={index} name={'loading'} userImage={''} clicked={() => console.log('check')} />
                  );
                })}
              </Fragment>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    usersRepo: state.auth.usersRepo
  };
};
export default connect(mapStateToProps)(RepoOwner)