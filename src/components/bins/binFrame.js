import React, {Component} from 'react';
import { Switch, Link } from 'react-router-dom';
import axios from 'axios'
import './../Header/Header.css'
import logo from '../../Images/logo.png'
export default class Bin extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      price: '',
      imgurl: ''
    }
  }
  componentDidMount(){
      
      axios.get(`http://localhost:3000/api/bin/${this.props.match.params.id}`).then(res => {
          console.log('bin data: ', res.data)
          this.setState({
              id: res.data[0].id,
              name: res.data[0].productname,
              price: res.data[0].price,
              imgurl: res.data[0].imgurl
          })
      })
  }
  render() {
      return(
          <div>
              <header className='header_header-wrapper3'>
          <img src={logo} alt="" />
          <div className='header_shelf_sub-header-wrapper-3'>
            <p>Shelf {this.props.match.params.id[0]}</p>
          </div>
          <div className='header_shelf_sub2-header-wrapper-3'>
            <p>Bin {this.props.match.params.id[1]}</p>
          </div>
            </header>
              <p> bin data </p>
              <div>{this.state.name}</div>
              <div>{this.state.price}</div>
              <img src = {`${this.state.imgurl}`} ></img>
          </div>
      )}
}