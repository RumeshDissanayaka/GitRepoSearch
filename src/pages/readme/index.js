import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchReadme } from '../../services/api/readme';
import {
  PAGE_BACKGROUND
} from "../../utils/constant";

const Readme = (props) => {
  const { match } = props
  const [project, setProjectName] = useState("")
  const [readme, setReadme] = useState([])
  const [msg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(true)
  const loadReadMe = useCallback(() => {
    setErrorMsg('')
    setProjectName(match.params.project_name)
    fetchReadme(`${match.params.username}/${match.params.project_name}`).then(res => {
      setLoading(false)
      setReadme(res.data)
    }).catch(e => {
      setLoading(false)
      if (e.response.status === 404) {
        setErrorMsg('Not found readme file')
      }
      else {
        setErrorMsg('Something went wrong')

      }
    })

  }, [match.params.project_name, match.params.username])


  useEffect(() => {
    loadReadMe()
  }, [loadReadMe])

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
                <h1>{project}</h1>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <h3>Welcome to {project}'s readme file</h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              {loading ? <label style={{ fontSize: 15, fontWeight: 'bold', color: '#FF0000' }}>{'Loading data....'}</label> : msg ? <label style={{ fontSize: 15, fontWeight: 'bold', color: '#FF0000' }}>{msg}</label> : readme}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(Readme)
