import React, { Component } from 'react';
import cx from 'classnames'
import './App.css';

const Grass = () => <div className="grass" />
const Tree = () => <div className="tree" />

class Duck extends Component {
  state = { x: Math.random() * 400, y: Math.random() * 400 }
  nextPosition = duck => prev => {
    if ( duck.dead ) {
      return { x: prev.x, y: prev.y + 5 }
    }
    if ( duck.shot ) {
      return prev
    }
    if ( prev.y <= 0 ) {
      return { x: prev.x, y: duck.maxY }
    }
    if ( prev.x <= 0 ) {
      return { x: duck.maxX, y: prev.y }
    }
    return {
      x: ( prev.x + ( duck.right ? 4 : duck.left ? -4 : 0 ) ) % ( duck.maxX ),
      y: ( prev.y + ( duck.down ? 4 : duck.up ? -4 : 0 ) ) % ( duck.maxY ),
    }
  }

  tick = () => {
    this.setState( this.nextPosition( this.props ) )
    // x: ( prev.x + ( this.props.right ? 4 : this.props.left ? -4 : 0 ) ) % ( this.props.maxX - this.props.width ),
    // y: ( prev.y + ( this.props.down ? 4 : this.props.up ? -4 : 0 ) ) % ( this.props.maxY - this.props.height ),
    // } ) )
  }

  componentDidMount() {
    setInterval( this.tick, 1000/60 )
  }
  render() {
    const { x, y } = this.state
    if ( y > this.props.maxY * 2 && this.props.dead ) {
      return null
    }
    return <div onClick={ this.props.onShoot } className={ cx( 'duck', {
      dead: this.props.dead,
      shot: this.props.shot,
      up: this.props.up,
      down: this.props.down,
      left: this.props.left,
      right: this.props.right,
    } ) } style={{ top: y, left: x }} />
  }
  static defaultProps = {
    width: 75,
    height: 75,
    maxX: 800,
    maxY: 600,
    dead: false,
    up: false,
    left: false,
    right: false,
    down: false,
  }
}


class App extends Component {
  state = {
    ducks: [
      { right: true },
      { left: true },
      { up: true, right: true },
      { up: true, left: true },
    ]
  }
  shoot = id => {
    const duck = this.state.ducks[ id ]
    if ( duck.dead || duck.shot ) {
      return
    }
    this.setState( prev => ( {
      ducks: prev.ducks.map( ( duck, i ) =>
        id == i ? { shot: true } : duck ),
    } ) )
    setTimeout( () =>
      this.setState( prev => ( {
        ducks: prev.ducks.map( ( duck, i ) =>
          id == i ? { dead: true } : duck ),
      } ) ), 1000 )
  }
  render() {
    return (
      <div style={{
        position: 'relative',
        height: this.props.width,
        width: this.props.height,
        overflow: 'hidden',
      }}>
      { this.state.ducks.map( ( duck, id ) =>
        <Duck key={ id } { ...duck } onShoot={ () => this.shoot( id ) } />
      ) }
    </div>
    );
  }
  static defaultProps = {
    width: 800,
    height: 800,
  }
}
const Scene = () => (
  <div className="scene">
    <Tree />
    <App />
    <Grass />
  </div>
)

export default Scene;
