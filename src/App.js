import React, { Component } from 'react';
import './App.css';

const slideshow = [
  'https://images.unsplash.com/photo-1496298193381-ab73cad974b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5edcb7455bff5b6df32e0a3a3ff1ff8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1491719302159-fcdf021abd5c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=edec06b3daef51c2ad631da14044445e&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1508857422602-76c8c01b5c89?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef7863bfdd3c23df7c9f7ef636819b22&auto=format&fit=crop&w=500&q=60'
]

class App extends Component {

  constructor() {
    super()
    this.state = { currentIndex: 0 }
  }

  nextImage() {
    console.log(this.state.currentIndex)

    this.setState({
      currentIndex: this.state.currentIndex + 1
    })

    if (this.state.currentIndex === slideshow.length - 1) {
      this.setState({
        currentIndex: 0
      })
    }
  }

  previousImage() {
    console.log(this.state.currentIndex)

    this.setState({
      currentIndex: this.state.currentIndex - 1
    })

    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: slideshow.length - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.previousImage()}> PREVIOUS </button>
        <img src={slideshow[this.state.currentIndex]} alt='PIC' />
        <button onClick={() => this.nextImage()}> NEXT </button>
      </div>
    );
  }
}

export default App;
