import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawalClick = this.handleWithdrawalClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    let amount = +this.refs.amount.value;
    if (amount < 0) {
      console.log('Cannot enter negative number!');
    } else {
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      if (newBalance < 0) {
        this.setState({
          balance: 0
        })
      }
      this.refs.amount.value = '';
    }
  }

  handleWithdrawalClick(e) {
    e.preventDefault();
    let amount = +this.refs.amount.value;
    if (amount < 0) {
      console.log('Cannot enter negative number!');
    } else {
      let newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      if (newBalance < 0) {
        this.setState({
          balance: 0
        })
      }
      this.refs.amount.value = '';
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="number" min="1" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawalClick} />
      </div>
    )
  }
}
