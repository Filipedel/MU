import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import News from "../components/News";
import Footer from "../components/Footer";



const NewsPage = () => (

    <Layout pageTitle="Dimon | News">
        <Nav />
        <PageHeader title="News" />
        <News />
        <Footer />
    </Layout>

)

export default NewsPage;