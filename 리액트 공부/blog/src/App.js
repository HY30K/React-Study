import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '리액트 공부';
  let [title, titleChange] = useState(['리액트란?', 'State 사용법', 'State의 장점'])
  let [like, likeChange] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>React study blog</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = 'ㅎㅇ?';
        titleChange(copy);
      }}>글제목 수정</button>

      <button onClick={() => {
        let copy = [...title].sort();
        titleChange(copy);
      }}>가나다순 정렬</button>

      <div className='list'>
        <h4>{title[0]} <span onClick={() => { likeChange(like++) }}>👍</span> {like} </h4>
        <p>24-10-17</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>24-10-17</p>
      </div>

      <div className='list'>
        <h4>{title[2]}</h4>
        <p>24-10-17</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
