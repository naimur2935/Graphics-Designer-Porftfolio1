import Banner from "./Banner";
import LogoShowUp from "./LogoShowUp";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import ClientReview from "./ClientReviews";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <LogoShowUp></LogoShowUp>
            <About></About>
            <Portfolio></Portfolio>
            <Services></Services>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;