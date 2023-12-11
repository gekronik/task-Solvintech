import style from "./UserAbout.module.css";
import userImage from "../../../assets/images/user.jpg";
import {useSelector} from "react-redux";
import {useState} from "react";
import Preloader from "../../UI/Preloader/Preloader.jsx";


const textDescription  = `Duis do deserunt qui qui pariatur cupidatat voluptate. 
Consectetur dolore Lorem culpa exercitation fugiat irure cupidatat voluptate tempor proident ad aliquip. 
Quis nisi officia tempor amet eiusmod laborum non nostrud esse culpa dolore culpa reprehenderit. 
Ullamco magna reprehenderit veniam enim nostrud et velit nulla labore officia velit cillum. 
Et qui ullamco minim officia cillum culpa in voluptate.`

const textPhone = '+1 (916) 534-2873'

export const UserAbout = ({selectedUserId}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const users = useSelector((state) => state.users.users)
    const selectedUser = users.find((user) => user.id === selectedUserId)

    if (!selectedUser) {
        return null
    }
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = (event) => {
        event.target.src = userImage
    }

    return (
        <div className={style.user}>
            {!imageLoaded && <Preloader />}
            <img className={style.useImg}
                 src={selectedUser.avatar || userImage}
                 alt="user"
                 onError={handleImageError}
                 onLoad={handleImageLoad}
            />
            <div className={style.userAbout}>
                <div>
                    <span className={style.label}>name: </span>
                    <span className={style.value}>{selectedUser.name}</span>
                </div>
                <div>
                    <span className={style.label}>role: </span>
                    <span className={style.value}>{selectedUser.role}</span>
                </div>
                <div>
                    <span className={style.label}>email: </span>
                    <span className={style.value}>{selectedUser.email}</span>
                </div>
                <div>
                    <span className={style.label}>phone: </span>
                    <span className={style.value}>{textPhone}</span>
                </div>
                <div>
                    <span className={style.label}>about: </span>
                    <span className={style.value}>{textDescription}</span>
                </div>
            </div>
        </div>
    );
};

