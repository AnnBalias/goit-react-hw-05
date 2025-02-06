import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
    <div className={css.FriendItem}>
        <img
            src={avatar}
            alt="Avatar"
            width="48"
            className={css.FriendImg} />
        <p className={css.FriendName}>{name}</p>
        <p className={clsx(css.FriendStatus, isOnline ? css.FriendOnline : css.FriendOffline)}>
            {isOnline ? "Online" : "Offline"}
        </p>
    </div>)
}

export default FriendListItem;