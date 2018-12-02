import React from 'react';

const Transactions = (props) => {
    const transactionsList = props.transactions.map(transaction => {
        return (
            <div className="transaction" key={transaction.id}>
                <p>Name: {transaction.name} | Amount: {transaction.amount} | Currency: {transaction.currency} | Category: {transaction.category.name} <button onClick={() => {props.onClick(transaction.id)}}>Delete</button></p>
            </div>
        )
    })
    return (
        <div className="trans-list">
            {transactionsList}
        </div>
    )
}

export default Transactions;