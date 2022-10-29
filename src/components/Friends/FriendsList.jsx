import PropTypes from 'prop-types';
import css from 'components/Friends/friendsList.module.css';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => {
    return <ul className={css.friendsList} >{friends.map((item) =>
        <FriendsListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
        />
    )}
</ul>
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};