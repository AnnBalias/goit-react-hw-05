import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return (
        <ul className={css.FriendList}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    )
}

export default FriendList;