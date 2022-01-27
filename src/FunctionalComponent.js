import React, { useState } from 'react';

export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0);
  const [comment, setComment] = useState([]);

  let myRef = React.createRef();

  let handlerGoldDigger = () => {
    setCounter((counter) => counter + 1);
    //пример ниже не работает. разобраться почему
    // let currentCounter = counter;
    // counter++;
    // setCounter(currentCounter);
  };

  let handlerComment = () => {
    let commentCurrentValue = myRef.current.value;
    let comments = [...comment, commentCurrentValue];
    setComment(comments);
    myRef.current.value = null
  };

  return (
    <>
      <button onClick={handlerGoldDigger}>Позолоти ручки!</button>
      <div>Подарено {counter} золотых</div>
      <h3>{counter % 2 === 0 ? 'чёт' : 'нечёт'}</h3>
      <div>
        <textarea ref={myRef}></textarea>
        <br />
        <button onClick={handlerComment}>Оставить отзыв</button>
      </div>
      <div>
        <label>Отзывы:</label>
        <ul>
          {comment.map((item, index) => (
            <li key={index.toString()}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
