import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      comment: [],
    };
    this.handlerGoldDigger = this.handlerGoldDigger.bind(this);
    this.handlerComment = this.handlerComment.bind(this);

    this.myRef = React.createRef();
  }

  handlerGoldDigger = () =>
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));

  handlerComment = () => {
    //присваиваем переменой значение dom узла по ссылке реф
    let commentValue = this.myRef.current.value; 
    //присваемаем массив с первоначальным стэйтом другой переменной
    let commentMassive = this.state.comment; 
    //пушим вэлью рэфа в массив
    commentMassive.push(commentValue);
    console.log(commentMassive)
    this.setState({
      'comment': commentMassive
    })
    this.myRef.current.value = null;
  };

  //упрощенная версия без доп присвиваний переменным
  // handlerComment = () => {
  //   this.state.comment.push(this.myRef.current.value);
  //   console.log(this.state.comment)
  //   this.setState({
  //     'comment': this.state.comment
  //   })
  //   this.myRef.current.value = null;
  // };


  render() {
    return (
      <>
        <button onClick={this.handlerGoldDigger}>Позолоти ручки!</button>
        <div>Подарено {this.state.counter} золотых</div>
        <h3>
          {this.state.counter % 2 === 0
            ? 'чёт требует добавки, жми кнопку!'
            : 'нечёт к несчастью, добавь!'}
        </h3>
        <div>
          <textarea ref={this.myRef}></textarea>
          <br />
          <button onClick={this.handlerComment}>Оставить отзыв</button>
        </div>
        <div>
          <ul>
            {this.state.comment.map((item, index) => 
              <li key={index.toString()}>{item}</li>)}
          </ul>
        </div>
        {this.commentValue}
      </>
    );
  }
}
