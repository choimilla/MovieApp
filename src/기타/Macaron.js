//Macaron.js
//클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// class Macaron extends Component { 
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트 rfce
import React from 'react'

// function Macaron(props) {
//   console.log(props);
  //   console.log(props) // props는 객체
  //   const {propsname, propsid, propsimage} = props // 구조분해할당: 객체의 속성들을 분해할 수 있다 

//   return (
//     <div>
//       <h1>No.{props.propsid}</h1>
//       <h2>Name:{props.propsname}</h2>
//       <img src={props.propsimage} alt={props.propsname} width={200} height={200}/>
//     </div>
//   )
// }
function Macaron({propsname, propsid, propsimage}) { 
  //제일 자주 쓰는 방법은 처음부터 구조분해할당 방식으로 데이터를 받는방법
  return (
    <div>
      <h1>No.{propsid}</h1> 
      <h2>Name:{propsname}</h2>
      <img src={propsimage} alt='' width={200} height={200}></img>
    </div>
  )
}


export default Macaron