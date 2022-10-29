import PropTypes from 'prop-types'
import css from 'components/Transactions/transactions.module.css'


export const Transactions = ({items}) => {
    console.log(items)
    return <table className={css.transactions}>
   <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
            {items.map((item) =>
            <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  )}
</tbody>
</table>
}


Transactions.propTypes = {
items : PropTypes.array.isRequired,
item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
})
}