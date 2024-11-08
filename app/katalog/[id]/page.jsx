import ClientPage from "./page.client";
import api from "@/lib/api";

export async function generateStaticParams() {
  try {
    const res = await api.get("/avto");
    const news = res.data.results;

    return news.map((item) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching news ids:", error);
    return [];
  }
}

const ServerPage = async ({ params }) => {
  const { id } = params;

  try {
    const res = await api.get(`/avto/${id}`);
    const newsData = res.data;
    return <ClientPage newsData={newsData} />;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return <div>Error loading news data</div>;
  }
};

export default ServerPage;
