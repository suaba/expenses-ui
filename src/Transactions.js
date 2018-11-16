import React from 'react';

const Transactions = ({transactions}) => {
    const transactionsList = transactions.map(transaction => {
        return (
            <div className="transaction" key={transaction.id}>
                <p>Name: {transaction.name}</p>
                <p>Amount: {transaction.amount}</p>
                <p>Currency: {transaction.currency}</p>
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