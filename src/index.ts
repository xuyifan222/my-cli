// import './index.css';
// // import './a.scss';

// // 获取当前打包logo.jepg 后的路径
// import logo from './timg.jpeg';

// let img = document.createElement('img');

// img.src = logo;

// document.body.append(img);

// 实现 es6 -> es5
// const fn = () => {

// }
// fn();

// 草案语法
// @log
// class A {
//   a = 3
// }

// function log(target) {

// }

// [1,2,3].includes(2)

// async function a () {
// }

// a();

// import React from 'react';
// import ReactDOM from 'react-dom';

// // ts 校验类型
// interface IProps {
//   num: number
// }
// let initState = { count: 0 };
// type State = Readonly<typeof initState>
// class Counter extends React.Component<IProps, State>{
//   state: State = initState;
//   handleClick = () => {
//     this.setState({count:this.state.count+1})
//   }
//   render() {
//     return <div>
//       {this.state.count}
//       <button onClick={this.handleClick}>点击</button>
//     </div>
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('root'));

import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
    el: "#root",
    render: h => h(App)
});