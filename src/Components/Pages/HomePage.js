import styles from './Page.module.css';
import PageTemplate from '../UI/PageTemplate';
import SlideShow from '../UI/SlideShow';
import Heading from '../UI/Heading';
import SeperationBar from '../UI/SeperationBar';

const HomePage = () => {
    return (
        <PageTemplate>
            <Heading
            subText="Since 1979"
            subtextAlign="center"
            >
                Frame Repair
            </Heading>
            
            <div className={styles.slideShowContainer}>
                <SlideShow />
            </div>
        </PageTemplate>
    );
};

export default HomePage;