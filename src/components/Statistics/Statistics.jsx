import PropTypes from 'prop-types';

import css from 'components/Statistics/statistics.module.css'

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export const Statistics = ({stats, title}) => {
        return <section className={css.statistics}>
      {(title) && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item =>
          <li className={css.items} key={item.id} style={{ backgroundColor: randomColor() }} >
        <span className={css.label} >{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
      </li>)}
    </ul>
  </section>

};
 Statistics.propTypes = {
        title: PropTypes.string,
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    }

Statistics.propTypes = {
    title: PropTypes.string,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
};
