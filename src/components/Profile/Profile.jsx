import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
    return (
    <div className={css.profCont}>
        <div className={css.profImgBox}>
            <img
                src={image}
                alt="User avatar"
                className={css.profImg}
            />
            <p className={css.profName}>{name}</p>
            <p className={css.profInfo}>@{tag}</p>
            <p className={css.profInfo}>{location}</p>
        </div>   
        <ul className={css.profDataBox}>
            <li className={css.profDataItem}>
                <span className={css.profDataName}>Followers</span>
                <span className={css.profDataValue}>{stats.followers}</span>
            </li>   
            <li className={css.profDataItem}>
                <span className={css.profDataName}>Views</span>
                <span className={css.profDataValue}>{stats.views}</span>
            </li>     
            <li className={css.profDataItem}>
                <span className={css.profDataName}>Likes</span>
                <span className={css.profDataValue}>{stats.likes}</span>
            </li>
        </ul>
    </div>)
}

export default Profile;