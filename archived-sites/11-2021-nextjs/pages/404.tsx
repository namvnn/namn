import Link from "next/link";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <>
    <SEO title="404 | Developer | Nam Nguyen" description="Not found the page with the given link"/>
    <div className="not-found">
      <div>
        404 |{" "}
        <Link href="/">
          <a>BACK TO HOME</a>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Error;
