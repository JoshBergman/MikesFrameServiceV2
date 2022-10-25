import React, { useContext } from 'react';

import styles from './PageTemplate.module.css';
import StyleData from '../../store/StyleContext';

const PageTemplate = (props) => {
    const stylectx = useContext(StyleData);

    const pageStyle = {
        "backgroundColor": stylectx.pageColor
    };

    

    return (
    <React.Fragment>
        <div className={styles.spacerDiv} />
        <div style={pageStyle} className={styles.mainContainer}>
            {props.children}
        </div>
    </React.Fragment>
    );
};

export default PageTemplate;