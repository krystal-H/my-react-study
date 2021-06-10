import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAync
} from '../../modules/counter'


const Home = (props) => (
  <div>
    <p>Home Page</p>

    <h3>count:{props.count}</h3>

    <p>
      <button onClick={props.increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async异步增加
      </button>
    </p>

    <p>
      <button onClick={props.increment}>Decrement</button>&nbsp;&nbsp;
      <button onClick={props.incrementAsync} disabled={props.isDecrementing}>
        Decrement Async 异步减少
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)
// 将需要的state的节点注入到与此视图数据相关的组件上

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

// bindActionCreators是redux的一个API，
// 作用是将单个或多个ActionCreator转化为dispatch(action)的函数集合形式
// 开发者不用再手动dispatch(actionCreator(type))，而是可以直接调用方法
// 目的就是简化书写。减轻开发负担

// 将需要绑定的响应事件注入到组件上
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increment,
    incrementAsync,
    decrement,
    decrementAync,
    changePage: () => push('/about')
  },
  dispatch
)

// connect作用是连接react组件和redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)