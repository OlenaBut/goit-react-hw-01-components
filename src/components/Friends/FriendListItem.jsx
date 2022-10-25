import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};