import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.tablBox}>
            <thead className={css.tablHed}>
                <tr className={css.tablHedList}>
                    <th className={css.tablHedItem}>Type</th>
                    <th className={css.tablHedItem}>Amount</th>
                    <th className={css.tablHedItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}, ind) => (
                    <tr className={!(ind % 2) ? css.tablBodyLight : css.tablBodyDark } key={id}>
                        <td className={css.tablBodyItem}>{type}</td>
                        <td className={css.tablBodyItem}>{amount}</td>
                        <td className={css.tablBodyItem}>{currency}</td>
                    </tr>
                ))}   
            </tbody>
        </table>)
}

export default TransactionHistory;