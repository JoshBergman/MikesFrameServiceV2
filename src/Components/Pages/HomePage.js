import styles from './Page.module.css';
import PageTemplate from '../UI/PageTemplate';
import SlideShow from '../UI/SlideShow';

const HomePage = () => {
    return (
        <PageTemplate>
            <div className={styles.slideShowContainer}>
                <SlideShow />
            </div>
        </PageTemplate>
    );
};

export default HomePage;