import {
  Hero, CustomSection, CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality
} from './sections';
import NavigationBar from './components/NavigationBar.jsx';

const App = () => (
  <main className="relative">
      <NavigationBar />

    <section className="xl:padding-l wide:padding-r padding-b p-10">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding-s">
      <SuperQuality />
    </section>

    <section className="padding padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    {/**
      *   <section className="padding">
            <CustomSection />
          </section>
     */}


    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;