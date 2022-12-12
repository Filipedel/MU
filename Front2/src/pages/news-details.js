import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import NewsDetails from "../components/NewsDetails";
import Footer from "../components/Footer";

const NewsDetailsPage = () => (

    <Layout pageTitle="Dimon | News Details">
        <Nav />
        <PageHeader title="News Details" />
        <NewsDetails />
        <Footer />
    </Layout>

)

export default NewsDetailsPage;