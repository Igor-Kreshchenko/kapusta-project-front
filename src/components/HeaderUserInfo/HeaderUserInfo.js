import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from "./HeaderUserInfo.module.scss";
import ButtonLogout from "../Button/ButtonLogout";
import useModal from "../Modal/useModal"
import Modal from "../Modal/logoutModal";

export default function HeaderUserInfo() {

    
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
            dispatch(authOperations.logOut())
        }, [dispatch]);
    

    const post = useSelector(authSelectors.getUserPost);
    const avatar = post.replace(/[^a-zA-Z]/g, '').charAt(0);
    
    const { isShowingModal1, toggle, isShowingModal2, toggleModal2, toggle3 } = useModal();
    
    console.log(isShowingModal2);
    

    return (
        <>
            <div>
                <span className={styles.user__avatar}>{avatar}</span>
                <span className={styles.user__name}> {post} </span>
                <ButtonLogout buttonHandler={toggle} />
            </div>
            {isShowingModal1 && <Modal text={'Вы уверены?'} toAgree={toggleModal2} onClose={toggle} />}
            {isShowingModal2 && <Modal text={'Вы действительно хотите выйти?'} toAgree={onLogout} onClose={toggleModal2} />}
        </>
    )

}


    



