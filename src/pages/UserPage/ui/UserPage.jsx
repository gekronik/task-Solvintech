import style from './UserPage.module.css'
import {User} from "../../../components/User/ui/User.jsx";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/actions/users-actions.js";
import Preloader from "../../../components/UI/Preloader/Preloader.jsx";
import { VISIBLE_USERS_COUNT } from '../../../helpers/constants.js';
import Popup from '../../../components/UI/Popup/Popup.jsx';
import {UserAbout} from '../../../components/UserAbout/index.js';


export const UserPage = () => {

    const dispatch = useDispatch()
    const {users,isLoading,error} = useSelector((state) => state.users)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [showLoadButton, setShowLoadButton] = useState(true)
    const [displayedUsers,setDisplayedUsers] = useState(VISIBLE_USERS_COUNT)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])



    const loadMore = useCallback(() => {
        const newDisplayedUsers = displayedUsers + VISIBLE_USERS_COUNT;
        setDisplayedUsers(newDisplayedUsers);
        if (newDisplayedUsers >= users.length) {
            setShowLoadButton(false)
        }
    },[displayedUsers, users.length])

    const openModal = useCallback((id) => {
        setSelectedUserId(id)
        setIsModalOpen(true)
    }, [])

    const handleClosedClick = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    if(error) {
        return <h1>ОШИБКА</h1>
    }

    return (
        <>
            {isLoading && <Preloader/>}
            <div  className={style.users}>
                {users.slice(0, displayedUsers).map((user) =>
                    <User
                        key={user.id}
                        user={user}
                        openModal={openModal}
                    />
                )}
            </div>
            {showLoadButton && !isLoading &&
                <div className={style.btnContainer}>
                    <button onClick={loadMore} className={style.btnLoad}>Load more...</button>
                </div>
            }
            {isModalOpen && (
                <Popup
                    visible={isModalOpen}
                    setVisible={handleClosedClick}
                >
                    <UserAbout selectedUserId={selectedUserId} />
                </Popup>
            )}
        </>
    );
};

