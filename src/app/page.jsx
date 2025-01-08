import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import ContactusForm from "@/components/ContactusForm";
import OurApproach from "@/components/OurApproach";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Aboutus />
      <OurApproach />
      <Services />
      <ContactusForm />
      <Footer />
    </main>
  );
}
