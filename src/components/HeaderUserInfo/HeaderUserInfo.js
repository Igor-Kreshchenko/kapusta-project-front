import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from "./HeaderUserInfo.module.scss";
import ButtonLogout from "../Button/ButtonLogout";
import useModal from "../Modal/useModal"
import Modal from "../Modal/logoutModal";


export default function HeaderUserInfo() {
    const post = useSelector(authSelectors.getUserPost);
    const avatar = post.replace(/[^a-zA-Z]/g, '').charAt(0).toUpperCase();

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
            dispatch(authOperations.logOut())
        }, [dispatch]);

    const { isShowingModal, toggle} = useModal();

    return (
        <>
            <div>
                <span className={styles.user__avatar}>{avatar}</span>
                <span className={styles.user__name}> {post.split('@')[0]} </span>
                <ButtonLogout buttonHandler={toggle} />
                
            </div>
            {isShowingModal && <Modal text={'Вы действительно хотите выйти?'} toAgree={onLogout} onClose={toggle} />}
        </>
    )

}


    



