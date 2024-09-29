import About from '../components/About';
import SideInfo from '../components/SideInfo';
import { fetchSideInfo } from '../lib/fetch-sideinfo';
import layout from '../styles/layout.module.scss';

const IndexPage = async () => {
  const sideInfo = await fetchSideInfo();
  return (
    <div className={layout.twoColumnsWrapper}>
      <SideInfo {...sideInfo} />
      <About />
    </div>
  );
};

export default IndexPage;
