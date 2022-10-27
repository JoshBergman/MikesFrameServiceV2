import styles from './Service.module.css';

const Service = (props) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.subAlignContent}>
                <p className={styles.text}>{props.children}</p>
            </div>
        </div>
    );
};

export default Service;