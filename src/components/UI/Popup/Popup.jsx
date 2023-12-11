import style from './Popup.module.css'


const Popup = ({children,visible,setVisible}) => {

    const rootStyles = [style.modal]
    if(visible) {
        rootStyles.push(style.active)
    }

    return (
        <div className={rootStyles.join(' ')}>
            <div className={style.modalContent}>
                <button onClick={setVisible} className={style.closeBtn}>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Popup;