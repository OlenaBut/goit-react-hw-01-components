import PropTypes from 'prop-types';
import css from 'components/Friends/friendsList.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (   
 <li className={css.item} >
  <span className={css.status}><div className={isOnline ? css.onLine : css.offLine}></div></span>
  <img className={css.avatar} src={avatar} alt={name} />
  <p className={css.name}>{name}</p>
</li>)
};


FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};