
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FlowerPetals from '../components/FlowerPetals';
import Card from '../components/Card';
import { ArrowDown } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force an initial check for elements in viewport
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  }, []);

  const aboutSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const testimonialsSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const featuredSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  
  return (
    <div className="page-transition pb-12">
      <FlowerPetals />
      
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Ayodhya Blessings
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
            Experience the divine journey to the sacred land of Lord Ram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-up">
            <Link to="/ram-mandir" className="btn-primary text-lg px-8 py-3">
              Explore Ram Mandir
            </Link>
            <Link to="/travel" className="btn-secondary text-lg px-8 py-3">
              Plan Your Visit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about-ayodhya" className="text-white">
            <ArrowDown size={24} />
          </a>
        </div>
      </section>

      {/* About Ayodhya Section */}
      <section id="about-ayodhya" className="container-custom section-animate" ref={aboutSectionRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">The Divine City of Ayodhya</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Ayodhya, the birthplace of Lord Ram, is one of the seven sacred cities for Hindus. This ancient city on the banks of the Sarayu River is a symbol of India's rich cultural heritage and spiritual legacy.
              </p>
              <p className="text-lg mb-6">
                The recently constructed Ram Mandir stands as a testament to faith and devotion, making Ayodhya a pilgrimage destination for millions of devotees from around the world.
              </p>
              <Link to="/about" className="btn-primary">
                Discover More
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/ayodhya-overview.jpg" 
                alt="Ayodhya City" 
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="bg-ayodhya-cream py-16 section-animate" ref={featuredSectionRef}>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Explore Ayodhya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card 
              title="Ram Mandir"
              description="Visit the magnificent Ram Mandir, a symbol of faith and devotion built at the birthplace of Lord Ram."
              imageSrc="/images/ram-mandir.jpg"
              link="/ram-mandir"
            />
            <Card 
              title="Accommodations"
              description="Find the perfect place to stay during your visit to Ayodhya, from traditional dharmshala to modern hotels."
              imageSrc="/images/accommodations.jpg"
              link="/hotels"
            />
            <Card 
              title="Dining"
              description="Experience authentic sattvic cuisine at various bhojnalayas and restaurants in the holy city."
              imageSrc="/images/dining.jpg"
              link="/bhojnalaya"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-custom section-animate" ref={testimonialsSectionRef}>
        <h2 className="section-title">Pilgrim Experiences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-ayodhya-saffron flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Rajesh Sharma</h3>
                <p className="text-sm text-gray-600">Delhi</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Visiting the Ram Mandir was a life-changing experience. The divine atmosphere and the architectural beauty left me in awe."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-ayodhya-saffron flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Meena Patel</h3>
                <p className="text-sm text-gray-600">Gujarat</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The facilities for pilgrims are excellent. Clean dharmshala, delicious prasad, and helpful guides made our journey comfortable."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-ayodhya-saffron flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Suresh Iyer</h3>
                <p className="text-sm text-gray-600">Karnataka</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I was amazed by how well-organized everything was. From transportation to accommodation, everything was smooth and convenient."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ayodhya-maroon text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Divine Journey Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience the spiritual essence of Ayodhya and receive the blessings of Lord Ram
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-ayodhya-saffron hover:bg-ayodhya-orange text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
