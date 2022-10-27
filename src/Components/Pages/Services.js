import PageTemplate from "../UI/PageTemplate";
import Heading from "../UI/Heading";
import SeperationBar from "../UI/SeperationBar";
import Service from "../UI/PageResources/Service";
import TextBlock from "../UI/PageResources/TextBlock";
import styles from './Page.module.css';
import DirectButton from "../UI/PageResources/DirectButton";

const Services = () => {
    return(
        <PageTemplate>
            <Heading boxTop="20px">Services</Heading>
            <SeperationBar />
                <TextBlock>
                    Whether you need a front, rear, or four wheel alignment, Mike's is here. If you have been told that "your frame is bent" or "it can't be aligned" We can align it! We can accurately diagnose what is wrong with your vehicles suspension and or frame, and recommend only the necessary repairs.
                </TextBlock>
                <TextBlock>
                    We are experts in full frame & unibody alignment. From Straightening & aligning, to sectioning and replacement, we do it all.  We work closely with local residents, automotive service shops, body shops, and fleet customers as well to provide quality frame and wheel alignment service.
                </TextBlock>
            <Heading boxTop="60px" subText="Frame" />
            <SeperationBar />
            <div className={styles.servContainer}>
                <Service>Full Frame Straightening & Repair</Service>
                <Service>Unibody Straightening</Service>
                <Service>Unibody Sectioning</Service>
                <Service>Frame Analysis & Measuring</Service>
                <Service>Rusted Strut Tower Repair</Service>
            </div>
            <Heading boxTop="80px" subText="Wheel & Tire" />
            <SeperationBar />
            <div className={styles.servContainer}>
                <Service>Tires</Service>
                <Service>Brake Repair</Service>
                <Service>Wheel Alignments</Service>
                <Service>Steering & Suspension</Service>
                <Service>Troublesome Alignments</Service>
                <Service>Bent Suspension Analysis</Service>
                <Service>Rough Outs</Service>
            </div>
            <Heading boxTop="60px" subText="In Need Of Something Else?" subfontStyle="normal" />
            <SeperationBar />
            <TextBlock>
                Perhaps we can still assist you. Even if we can't directly resolve your situation we are happy to give you a recommendation to someone that can!
            </TextBlock>
            <TextBlock>
                Feel free to stop by for an inspection and we'll see what we can do!
            </TextBlock>
            <DirectButton to="/find-us">Contact Us</DirectButton>
            
        </PageTemplate>
    );
};

export default Services;