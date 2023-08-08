import Content from "../../components/Content";
import ContentExtra from "../../components/ContentExtra";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { API_URL, site } from "../../config";

export default function MainPage() {
  return (
    <div className="">
      <Header />

      <Content />

      <ContentExtra />

      <Footer />
    </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}
