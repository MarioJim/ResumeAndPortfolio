import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';
import { fetchSideInfo } from '../lib/fetch-sideinfo';
import styles from '../styles/not_found.module.scss';

const NotFoundPage = async () => {
  const sideInfo = await fetchSideInfo();
  return (
    <>
      <SEO title="404: Not found" />
      <SideInfo {...sideInfo} />
      <div className={styles.innerWrapper}>
        <h3>404</h3>
        <h2>Not found</h2>
        <p>You just hit a route that doesn&apos;t exist...</p>
      </div>
    </>
  );
};

export default NotFoundPage;
