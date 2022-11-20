import About from '../components/About';
import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';
import { fetchSideInfo } from '../lib/fetch-sideinfo';
import layout from '../styles/layout.module.scss';
import 'animate.css';

const IndexPage = async () => {
  const sideInfo = await fetchSideInfo();
  return (
    <>
      <SEO title="Mario Jiménez" />
      <div className={layout.twoColumnsWrapper}>
        <SideInfo {...sideInfo} />
        <About />
      </div>
    </>
  );
};

export default IndexPage;
