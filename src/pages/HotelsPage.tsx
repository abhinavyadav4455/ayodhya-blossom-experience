import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { Hotel, Link as LinkIcon } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';

const HotelsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition pb-8 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Hotels & Accommodation" 
          subtitle="Stay Comfortably in the Divine City" 
          backgroundImage="/assets/images/accommodations.png"
        />
        
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-16 text-center section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Stay Options in the Holy City</h2>
            <p className="text-lg mb-6">
              Ayodhya offers a range of hotel accommodations to suit various budgets and preferences. From luxury hotels to budget-friendly options,
              visitors can find comfortable stays to enhance their pilgrimage experience.
            </p>
          </section>

          {/* Official VIP Pass Link */}
          <section className="max-w-4xl mx-auto mb-16 p-8 bg-ayodhya-cream rounded-lg shadow-lg section-animate">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LinkIcon className="text-ayodhya-saffron" size={28} />
              <h2 className="text-2xl font-bold text-ayodhya-maroon">Official Temple Website</h2>
            </div>
            <p className="text-center mb-6">
              For official information about accommodations and to book VIP passes for Ram Mandir darshan, please visit the official Sri Ram Janmabhoomi temple website.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://srjbtkshetra.org/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary flex items-center gap-2 text-lg px-6 py-3 rounded-md"
              >
                <LinkIcon size={18} />
                Visit Official Website
              </a>
            </div>
          </section>
          
          {/* Hotel Listings */}
          <section className="mb-16 section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center flex items-center justify-center gap-2">
              <Hotel className="text-ayodhya-saffron" />
              Recommended Hotels
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Hotel 1" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">Hotel Name 1</h3>
                  <p className="text-gray-700">Description of Hotel 1. This could include amenities, location highlights, etc.</p>
                  <a href="#" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Hotel 2" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">Hotel Name 2</h3>
                  <p className="text-gray-700">Description of Hotel 2. This could include amenities, location highlights, etc.</p>
                  <a href="#" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Hotel 3" 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">Hotel Name 3</h3>
                  <p className="text-gray-700">Description of Hotel 3. This could include amenities, location highlights, etc.</p>
                  <a href="#" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default HotelsPage;
