import style from './User.module.css'
import userImage from '../../../assets/images/user.jpg'
import {memo, useState} from "react";
import Skeleton from "../../UI/Skeleton/Skeleton.jsx";


export const User = memo(({user, openModal}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const handleImageError = (event) => {
        event.target.src = userImage
        setImageLoaded(true);
    }

    return (
        <div className={style.user} onClick={() => openModal(user.id)}>
            {!imageLoaded && <Skeleton />}
            <img className={style.useImg}
                 src={user.avatar || userImage}
                 alt="user"
                 onError={handleImageError}
                 onLoad={handleImageLoad}
            />
            <div className={style.userAbout}>
                <div>
                    <span className={style.label}>
                        name:
                        {' '}
                    </span>
                    <span className={style.value}>
                        {user.name}
                    </span>
                </div>
                <div>
                    <span className={style.label}>
                        email:
                        {' '}
                    </span>
                    <span className={style.value}>
                        {user.email}
                    </span>
                </div>
            </div>
        </div>
    );
})

