import React, { useState } from 'react';

export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0);
  const [comment, setComment] = useState([]);

  let myRef = React.createRef();

  function handlerCounter() {
    //другой способ обновления состояния (без стрелочной функции внутри setCounter)
    let currentCounter = counter;
    currentCounter++;
    return setCounter(currentCounter);
  }

  const handlerAddComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);
    // setComment([...comment, commentValue]);
    myRef.current.value = null;
  };

  return (
    <>
      <div>
        <button onClick={handlerCounter}>Кнопка меняет состояние</button>
      </div>
      <div>
        <h4>{counter % 2 === 0 ? 'even' : 'odd'}</h4>
      </div>
      <div>
        <h3>
          Состояние: {counter} ({counter % 2 === 0 ? 'чётное' : 'нечётное'})
        </h3>
      </div>
      <div>
        <textarea ref={myRef}></textarea>
        <br />
        <button onClick={handlerAddComment}>Добавить комментарий</button>
      </div>
      <ul>{comment.map((props) => (
        <li>{props}</li>
        ))}</ul>
    </>
  );
}
