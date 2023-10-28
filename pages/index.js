import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Splash } from '@/components/splash';
import { Newsletter } from '@/components/newsletter';
import { About } from '@/components/about';
import Join from '@/components/join';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Splash />
      <About id='about' />
      <Join id='join' />
      <h2>Donate</h2>
      We are a registered charity! Maybe.
      <Newsletter />
      <h2>Buy tickets</h2>
      You can buy tickets for our upcoming concerts here.
      <h2>Contact</h2>
      You can contact us at huntsvillemusicians@gmail.com.
      <Footer />
    </Layout>
  );
}
