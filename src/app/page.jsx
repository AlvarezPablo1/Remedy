import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Adventage from "@/components/adventages/Adventage";
import Description from "@/components/description/Description";
import Product from "@/components/products/Product";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <>
      <Description/>
      <Adventage/>
      <Product/>
      <Banner/>
      <Reviews/>
    </>
  );
}
