import styles from './TextBlock.module.css';

const TextBlock = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {props.children}
            </p>
        </div>
    );
};

export default TextBlock;