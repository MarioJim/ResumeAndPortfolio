import type { Metadata } from 'next';
import layout from '../../styles/layout.module.scss';

export const metadata: Metadata = {
  title: "Mario Jiménez' resume",
};

const pdfURL = 'https://mariojim.github.io/mario_jimenez_resume.pdf';

const ResumePage = () => (
  <div className={layout.resumeWrapper}>
    <div>
      <iframe
        src={`https://docs.google.com/viewer?url=${pdfURL}&embedded=true`}
        width="920"
        height="100%"
      />
    </div>
  </div>
);

export default ResumePage;
