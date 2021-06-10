import React from 'react'
import { connect } from "react-redux";

const About = (props) => (
  <div>
    <p>about page</p>

    <p>count计数：{props.count}</p>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count
})

export default connect(
  mapStateToProps
)(About)