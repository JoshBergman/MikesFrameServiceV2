import React from 'react';
import ReactDOM  from 'react-dom';

import styles from './MenuModal.module.css';

const MenuModal = (props) => {

    return ReactDOM.createPortal(
        <div onClick={props.menuToggler} className={styles.modal}></div>
    , document.getElementById('portal-root'));
};

export default MenuModal;