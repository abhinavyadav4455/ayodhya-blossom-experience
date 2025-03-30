import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { MapPin, Clock } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const RajaDasharathMahalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-8 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Raja Dasharath Mahal" 
        subtitle="The Royal Palace of Lord Ram's Father" 
        backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">The Royal Residence</h2>
          <p className="text-lg mb-4">
            Raja Dasharath Mahal is the palace where King Dasharath, the father of Lord Ram, once resided with his three queens - Kaushalya, Kaikeyi, and Sumitra.
            This historical palace stands as a testimony to the royal heritage of the Ikshvaku dynasty.
          </p>
          <p className="text-lg">
            The palace complex has been restored and preserved to give visitors a glimpse into the royal lifestyle of ancient Ayodhya.
          </p>
        </section>
        
        {/* Palace Architecture */}
        <section className="mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center section-animate">
            <div>
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-3">Palace Design & Architecture</h2>
              <p className="mb-3">
                Raja Dasharath Mahal showcases the traditional architectural style of ancient Indian palaces, with spacious courtyards,
                intricate pillars, and well-planned royal chambers.
              </p>
              <p className="mb-3">
                The palace complex includes separate quarters for each of the three queens, the royal court (Durbar Hall) where King Dasharath held his court,
                and the private chambers where many important events of the Ramayana took place.
              </p>
              <p>
                The design reflects the architectural grandeur of the Treta Yuga, with elements that blend functionality with royal aesthetics.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png" 
                alt="Raja Dasharath Mahal" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Historical Significance */}
        <section className="mb-10 bg-ayodhya-cream p-6 rounded-lg section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Historical Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Birthplace of Princes</h3>
              <p>
                This palace is where Lord Ram and his brothers - Lakshman, Bharat, and Shatrughan - were born and spent their childhood years.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Ramayana Events</h3>
              <p>
                Many pivotal events of the Ramayana unfolded here, including Kaikeyi's boons that led to Ram's exile and Dasharath's heartbroken departure.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Royal Heritage</h3>
              <p>
                The palace symbolizes the rich heritage of the Ikshvaku dynasty and provides insights into the administrative and social structures of ancient Ayodhya.
              </p>
            </div>
          </div>
        </section>
        
        {/* Visiting Information */}
        <section className="max-w-4xl mx-auto mb-8 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Visitor Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Clock className="text-ayodhya-saffron mr-2" />
                <h3 className="text-xl font-bold text-ayodhya-maroon">Visiting Hours</h3>
              </div>
              <ul className="space-y-1">
                <li><strong>Morning:</strong> 7:00 AM - 12:00 PM</li>
                <li><strong>Evening:</strong> 3:00 PM - 8:00 PM</li>
                <li><strong>Weekly Closure:</strong> Monday</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <MapPin className="text-ayodhya-saffron mr-2" />
                <h3 className="text-xl font-bold text-ayodhya-maroon">How to Reach</h3>
              </div>
              <ul className="space-y-1">
                <li><strong>Location:</strong> Located in the central part of old Ayodhya</li>
                <li><strong>By Auto/E-rickshaw:</strong> Easily accessible from any part of Ayodhya</li>
                <li><strong>Walking Distance:</strong> 25 minutes from Ram Janmabhoomi complex</li>
                <li><strong>Landmarks:</strong> Ask for directions to "Raja Dasharath Mahal" or "Dasharath Bhawan"</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RajaDasharathMahalPage;
