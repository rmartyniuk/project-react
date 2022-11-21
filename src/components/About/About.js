import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.hero}>
            <PageTitle>About</PageTitle>
            <p>lorem ipsum</p>
        </div>
    );
};

export default About;