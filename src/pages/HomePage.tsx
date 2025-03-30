import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, GalleryHorizontal, MapPin } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';
import DeveloperProfile from '../components/DeveloperProfile';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const aboutSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const testimonialsSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const featuredSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const registrationSectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const gallerySectionRef = useAnimateOnScroll({ threshold: 0.2 });
  const placesSectionRef = useAnimateOnScroll({ threshold: 0.2 });

  return (
    <PageLayout>
      {/* Hindu Symbols Pattern Background */}
      <div className="hindu-symbols-pattern"></div>
      
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/assets/images/ram-mandir-hero.jpg")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF9933]/30"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto section-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-yatra text-ayodhya-cream drop-shadow-lg">
            Welcome to Ayodhya
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ayodhya-cream drop-shadow-lg">
            Experience the divine city of Lord Ram and its spiritual heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-up">
            <Link 
              to="/ram-mandir" 
              className="inline-block bg-ayodhya-saffron hover:bg-ayodhya-orange text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Ram Mandir
            </Link>
            <Link 
              to="/register" 
              className="inline-block bg-white hover:bg-ayodhya-cream text-ayodhya-maroon font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register for Yatra
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Developer Profile */}
        <section className="mb-12 section-animate">
          <DeveloperProfile />
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
                  src="/assets/images/ayodhya-city.png" 
                  alt="Ayodhya City" 
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sacred Places Section */}
        <section className="bg-ayodhya-cream py-16 section-animate" ref={placesSectionRef}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="text-ayodhya-saffron" size={28} />
              <h2 className="section-title mb-0">Sacred Places to Visit</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <Link to="/ram-mandir" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src="/assets/images/ram-mandir.png" alt="Ram Mandir" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Ram Mandir</h3>
                </div>
              </Link>
              
              <Link to="/kanak-bhawan" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src="/assets/images/kanak-bhawan.png" alt="Kanak Bhawan" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Kanak Bhawan</h3>
                </div>
              </Link>
              
              <Link to="/hanuman-garhi" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src="/assets/images/hanuman-garhi.png" alt="Hanuman Garhi" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Hanuman Garhi</h3>
                </div>
              </Link>
              
              <Link to="/raja-dasharath-mahal" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src="/assets/images/raja-dasharath-mahal.png" alt="Raja Dasharath Mahal" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Dasharath Mahal</h3>
                </div>
              </Link>
              
              <Link to="/saryu-ghat" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src="/assets/images/saryu-ghat.png" alt="Saryu Ghat" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Saryu Ghat</h3>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
                <GalleryHorizontal size={18} />
                View Photo Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="bg-white py-16 section-animate" ref={registrationSectionRef}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title">Register for Your Divine Journey</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Plan your sacred pilgrimage to Ayodhya with our dedicated team. Register today to receive updates, assistance with bookings, and special darshan opportunities.
            </p>
            <Link 
              to="/register" 
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Register Now
            </Link>
          </div>
        </section>

        {/* Official Link */}
        <section className="container-custom bg-ayodhya-cream section-animate">
          <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Official Temple Website</h2>
            <p className="text-lg mb-6">
              For official bookings and information about Sri Ram Janmabhoomi, please visit the official website.
            </p>
            <a 
              href="https://srjbtkshetra.org/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Visit Official Website
            </a>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="container-custom section-animate" ref={gallerySectionRef}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <GalleryHorizontal className="text-ayodhya-saffron" size={28} />
            <h2 className="section-title mb-0">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md h-48">
              <img src="/assets/images/ram-mandir.png" alt="Ram Mandir" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48">
              <img src="/assets/images/kanak-bhawan.png" alt="Kanak Bhawan" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48">
              <img src="/assets/images/saryu-ghat.png" alt="Saryu Ghat" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48">
              <img src="/assets/images/prasad.png" alt="Prasad" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </section>

        {/* Featured Attractions */}
        <section className="bg-white py-16 section-animate" ref={featuredSectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="section-title">Explore Ayodhya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <Card 
                title="Ram Mandir"
                description="Visit the magnificent Ram Mandir, a symbol of faith and devotion built at the birthplace of Lord Ram."
                imageSrc="/assets/images/ram-mandir.png"
                link="/ram-mandir"
              />
              <Card 
                title="Accommodations"
                description="Find the perfect place to stay during your visit to Ayodhya, from traditional dharmshala to modern hotels."
                imageSrc="/assets/images/accommodations.png"
                link="/hotels"
              />
              <Card 
                title="Dining"
                description="Experience authentic sattvic cuisine at various bhojnalayas and restaurants in the holy city."
                imageSrc="/assets/images/dining.png"
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
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-block bg-ayodhya-saffron hover:bg-ayodhya-orange text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link 
                to="/register" 
                className="inline-block bg-white hover:bg-ayodhya-cream text-ayodhya-maroon font-bold py-3 px-8 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HomePage;
