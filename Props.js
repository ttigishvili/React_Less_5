import React, { Component } from 'react'
import { useState } from 'react'

export class Props extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [], name: '', age: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }
  handleChange2(event) {
    this.setState({ age: event.target.value })
  }

  handleSubmit(event) {
    const last = this.state.users[this.state.users.length - 1]
    let joined = this.state.users.concat({
      id: last.id + 1,
      name: this.state.name,
      age: this.state.age
    })
      this.setState({ users: joined })
    this.state.value = ''
    event.preventDefault()
  }

  componentDidMount() {
    this.setState((state, props) => {
      return { users: (state.users = props.users) }
    })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(e.target.neededField.value)
  }
  deleteRandomUser = () => {
    let i = (Math.random() * this.state.users.length) | 0
    return this.setState(this.state.users.splice(i, 1)[0])
  }
  0

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column' , paddingTop: "5px", paddingBottom: "5px"}}>
          {this.state.users.map(user => (
            <div key={user.id} style={{paddingTop: "2px", paddingBottom: "2px"}}>
              <span >Name: {user.name} </span> ,<span>Age: {user.age} </span>
            </div>
          ))}
        </div>
        
        <button style={{borderradius: "999px", color: "black", background: "#5E5DF0", boxshadow: "#5E5DF0 0 10px 20px -10px", boxsizing: "border-box", color: "#FFFFFF", cursor: "pointer", fontsize: "16px",
  fontweight: "700",
  lineheight: "24px",
  opacity: "1",
  outline: "0 solid transparent",
  padding: "8px 18px",
  userselect: "none",
  webkituserselect: "none",
  touchaction: "manipulation",
  width: "fitcontent",
  wordbreak: "break-word",
  border: "0",    }} onClick={() => this.deleteRandomUser()}  >წაშლა </button>
        <span  style={{paddingTop: "5px", paddingBottom: "5px"}}>There are {this.state.users.length} users left</span>
        <form onSubmit={this.handleSubmit}>
          <label style={{display : "flex", flexDirection: "column"}}>
            Name:
            <div style={{paddingTop: "5px", paddingBottom: "5px"}}>
            <input style={{borderradius: "999px",  boxshadow: "#5E5DF0 0 10px 20px -10px", boxsizing: "border-box", color: "black", cursor: "pointer", fontsize: "16px",
  fontweight: "700",
  lineheight: "24px",
  opacity: "1",
  outline: "0 solid transparent",
  padding: "8px 18px",
  userselect: "none",
  webkituserselect: "none",
  touchaction: "manipulation",
  width: "fitcontent",
  wordbreak: "break-word",
  border: "0",    }}
              type='text'
              placeholder='Enter Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            </div>
            Age :
            <div style={{paddingTop: "5px", paddingBottom: "5px"}}>

            <input style={{borderradius: "999px",  boxshadow: "#5E5DF0 0 10px 20px -10px", boxsizing: "border-box", color: "black",  cursor: "pointer", fontsize: "16px",
  fontweight: "700",
  lineheight: "24px",
  opacity: "1",
  outline: "0 solid transparent",
  padding: "8px 18px",
  userselect: "none",
  webkituserselect: "none",
  touchaction: "manipulation",
  width: "fitcontent",
  wordbreak: "break-word",
  border: "0",    }}
              type='text'
              placeholder='Enter Age'
              value={this.state.age}
              onChange={this.handleChange2}
            />
            </div>
          </label>
          <div style={{paddingTop: "5px", paddingBottom: "5px"}}>
          <input style={{borderradius: "999px", background: "#5E5DF0", boxshadow: "#5E5DF0 0 10px 20px -10px", boxsizing: "border-box", color: "#FFFFFF", cursor: "pointer", fontsize: "16px",
  fontweight: "700",
  lineheight: "24px",
  opacity: "1",
  outline: "0 solid transparent",
  padding: "8px 18px",
  userselect: "none",
  webkituserselect: "none",
  touchaction: "manipulation",
  width: "fitcontent",
  wordbreak: "break-word",
  border: "0",    }} type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}
