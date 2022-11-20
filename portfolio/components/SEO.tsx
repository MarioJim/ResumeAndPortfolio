interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
  </>
);

export default SEO;
