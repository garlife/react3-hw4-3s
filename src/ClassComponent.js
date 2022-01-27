import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      comment: []
    }
    this.handlerGoldDigger = this.handlerGoldDigger.bind(this)
    this.handlerComment = this.handlerComment.bind(this)

    this.myRef = React.createRef()

  }

  handlerGoldDigger = () => this.setState( (prevState) => ({counter: prevState.counter + 1 }));

  handlerComment = () => {
    this.commentValue = myRef.current.value;
    this.comments = [...this.state.comment, this.commentValue]
  }



  render() {
    return (
      <>
        <button onClick={this.handlerGoldDigger}>Позолоти ручки!</button>
        <div>Подарено {this.state.counter} золотых</div>
        <h3>{this.state.counter % 2 === 0 ? 'чёт требует добавки, жми кнопку!' : 'нечёт к несчастью, добавь!'}</h3>
        <div>
          <textarea ref={this.myRef}></textarea>
          <br />
          <button onClick={this.handlerComment}>Оставить отзыв</button>
        </div>
      </>
    );
  }
}
