import React, { useContext } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import StyleData from '../../store/StyleContext';
import PageTemplate from './PageTemplate';

import styles from '../Pages/Page.module.css';

const spinnerDivStyle = {
    "marginTop" : "200px",
    "marginBottom" : "350px"
};

const centeringDiv = {
    "width" : "fitContent",
    "height" : "fitContent",
};

const LoadingSpinner = () => {
    const stylectx = useContext(StyleData);

    return(
        <PageTemplate>
            <div style={spinnerDivStyle} className={styles.centeredDiv}>
                <div style={centeringDiv}>
                    <HashLoader color={stylectx.mainColor1} />
                </div>
            </div>
        </PageTemplate>
    );
};

export default LoadingSpinner;