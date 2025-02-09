import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="/images/personal/bee.svg"
        type="image/svg"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://namnguyen.in/" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://namnguyen.in/" />
      <meta property="og:site_name" content="Nam Nguyen" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/nnfunny/nnfunny/main/NamLogo.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://namnguyen.in/" />
      <meta property="twitter:title" content="Home | Developer | Nam Nguyen" />
      <meta
        property="twitter:description"
        content="Web Developer & Front-end Develop (React). Love building programs that make people's lives eaiser. Computer Science Enthusiast & Art Enthusiast (pixel, 3D model, illustration)"
      />
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/nnfunny/nnfunny/main/NamLogo.png"
      />
    </Head>
  );
};

export default SEO;
