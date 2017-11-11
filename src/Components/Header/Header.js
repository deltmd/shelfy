import React, { Component } from 'react';
import './Header.css'
import logo from '../../Images/logo.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state={
      depth: this.props.depth
    }
  }
  componentWillReceiveProps(props){
    console.log(this.props.depth);
    this.setState({
      depth: props.depth
    })
  }
  render(){
    return(
      <div>
        {this.state.depth === 1 && <header className='header_header-wrapper1'>
          <img src={logo} alt=""/>
          <p>SHELFIE</p>
        </header>}
        {this.state.depth === 2 && <header className='header_header-wrapper2'>
          <img src={logo} alt="" />
          <div className='header_shelf_sub-header-wrapper-2'>
            <p>{this.props.shelf}</p>
          </div>
        </header>}
        {this.state.depth === 3 && <header className='header_header-wrapper3'>
          <img src={logo} alt="" />
          <div className='header_shelf_sub-header-wrapper-3'>
            <p>{this.props.shelf}</p>
          </div>
          <div className='header_shelf_sub2-header-wrapper-3'>
            <p>{this.props.bin}</p>
          </div>
        </header>}
      </div>
    )
  }
}
export default Header