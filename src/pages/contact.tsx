import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Contact Us</h2>
        <ContactForm onClose={() => {}}/>
      </div>
      <Footer/>
    </div>
  );
}