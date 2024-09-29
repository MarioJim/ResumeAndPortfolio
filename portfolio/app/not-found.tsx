import type { Metadata } from 'next';
import SideInfo from '../components/SideInfo';
import { fetchSideInfo } from '../lib/fetch-sideinfo';
import layout from '../styles/layout.module.scss';

export const metadata: Metadata = {
  title: '404: Not found',
};

const NotFoundPage = async () => {
  const sideInfo = await fetchSideInfo();
  return (
    <div className={layout.twoColumnsWrapper}>
      <SideInfo {...sideInfo} />
      <div className={layout.notFoundWrapper}>
        <h3>404</h3>
        <h2>Not found</h2>
        <p>You just hit a route that doesn&apos;t exist...</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
