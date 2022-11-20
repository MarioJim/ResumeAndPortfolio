import SEO from '../../components/SEO';
import layout from '../../styles/layout.module.scss';

const pdfURL = 'https://mariojim.github.io/mario_jimenez_resume.pdf';

const ResumePage = () => (
  <>
    <SEO title="Mario Jiménez' resume" />
    <div className={layout.resumeWrapper}>
      <div>
        <iframe
          src={`https://docs.google.com/viewer?url=${pdfURL}&embedded=true`}
          width="920"
          height="100%"
        />
      </div>
    </div>
  </>
);

export default ResumePage;
