import React from 'react';
import logo from './logo.svg';
import Button from './components/Info';
import './App.css';

interface IData {
  name: string;
  kelas: string;
  iskelasPagi: boolean;
}

class Component1 extends React.Component<any,IData, any> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      name: 'Nama : Florence',
      kelas: 'Kelas : XI MIPA 1',
      iskelasPagi: true,
    }
  }

  render() {
    const {name, kelas, iskelasPagi} = this.state;
    return (
      <div style={{textAlign:'center'}}>
        <h4>{name}</h4>
        <p>{kelas}</p>
        {iskelasPagi == true &&
          <p>
            Kelas pagi = TRUE
          </p>
        }
      </div>
    )

  }
}

interface IState {
  counter: number;
}

class Component2 extends React.Component<any,IState> {
  constructor(props:any) {
    super(props);
    
    this.state = {
      counter: 1,
    }
  }

  handleClick = () => {
    console.log("button clicked ...");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log("render called...")
    return (
      <>

      <div style={{textAlign: 'center'}}>
        
        <h4>
          {this.state.counter}
        </h4>
        <Button
          border = "none"
          color = "pink"
          height = "30px"
          onClick ={this.handleClick}
          width = "60px"
          children = "CLICK!"
        /> 
        <br></br>
        {this.state.counter % 3 == 0 &&
          <img src='https://lordsofgaming.net/wp-content/uploads/2020/10/Screen-Shot-2020-10-19-at-11.15.33-PM-150x150.png'></img>
        }
      </div>
      </>
    )
  }
  
}

export {
  Component1,
  Component2,
}