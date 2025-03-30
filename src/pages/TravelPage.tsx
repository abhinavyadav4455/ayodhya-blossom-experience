import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { MapPin, Link as LinkIcon } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const TravelPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Travel to Ayodhya" 
        subtitle="Plan your journey to the sacred city" 
        backgroundImage="/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-16 text-center section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Reaching the Divine City</h2>
          <p className="text-lg mb-6">
            Planning your journey to Ayodhya is an important part of your pilgrimage. The city is well-connected by various modes of transportation,
            making it accessible from different parts of India.
          </p>
        </section>

        {/* Official VIP Pass Link */}
        <section className="max-w-4xl mx-auto mb-16 p-8 bg-ayodhya-cream rounded-lg shadow-lg section-animate">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LinkIcon className="text-ayodhya-saffron" size={28} />
            <h2 className="text-2xl font-bold text-ayodhya-maroon">Official Temple Website</h2>
          </div>
          <p className="text-center mb-6">
            For official information about transportation and to book VIP passes for Ram Mandir darshan, please visit the official Sri Ram Janmabhoomi temple website.
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
        
        {/* Travel Information */}
        <section className="mb-16 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center flex items-center justify-center gap-2">
            <MapPin className="text-ayodhya-saffron" />
            How to Reach Ayodhya
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">By Air</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Maharishi Valmiki International Airport, Ayodhya</h4>
                <p className="mb-2">
                  Ayodhya's new international airport has direct flights from major Indian cities including Delhi, Mumbai, Bengaluru, and Kolkata.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>Distance from city center: Approximately 8 km</li>
                  <li>Transfer options: Taxis, pre-booked hotel shuttles</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Lucknow Airport (Chaudhary Charan Singh International Airport)</h4>
                <p className="mb-2">
                  Lucknow airport is about 135 km from Ayodhya and serves as an alternative gateway with more flight options.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>Travel time to Ayodhya: 2.5-3 hours by road</li>
                  <li>Transfer options: Taxis, buses, private cars</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">By Train</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Ayodhya Railway Station</h4>
                <p className="mb-2">
                  Well-connected to major cities with regular trains from Delhi, Lucknow, Varanasi, and other cities.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>Popular trains: Saket Express, Kaifiyat Express, Ganga-Sutlej Express</li>
                  <li>Transfer options: Auto-rickshaws, e-rickshaws, taxis</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Faizabad Junction</h4>
                <p className="mb-2">
                  Located about 7 km from Ayodhya, Faizabad Junction offers connectivity to more destinations.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>More train options than Ayodhya station</li>
                  <li>Transfer options: Shared taxis, auto-rickshaws, city buses</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">By Road</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Private Vehicle</h4>
                <p className="mb-2">
                  Well-maintained highways connect Ayodhya to major cities in Uttar Pradesh and neighboring states.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>From Lucknow: NH27 (135 km, approx. 3 hours)</li>
                  <li>From Varanasi: NH96 (200 km, approx. 4.5 hours)</li>
                  <li>From Prayagraj: Via Pratapgarh (167 km, approx. 4 hours)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Bus Services</h4>
                <p className="mb-2">
                  Regular government and private bus services operate to Ayodhya from nearby cities.
                </p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  <li>UPSRTC (UP State Road Transport) operates frequent buses</li>
                  <li>Private operators offer AC and non-AC options</li>
                  <li>Sleeper buses available for overnight journeys</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">Travel Packages</h3>
              <p className="mb-4">
                Several tour operators offer specialized pilgrimage packages to Ayodhya, which may include:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Transportation:</strong> Pick-up and drop from major cities or nearest airports
                </li>
                <li>
                  <strong>Accommodation:</strong> Pre-booked stays at hotels or dharmshala
                </li>
                <li>
                  <strong>Guided Tours:</strong> Expert guides explaining the religious and historical significance
                </li>
                <li>
                  <strong>Meal Arrangements:</strong> Traditional vegetarian meals at selected restaurants
                </li>
                <li>
                  <strong>Temple Visits:</strong> Scheduled darshan at Ram Mandir and other important temples
                </li>
                <li>
                  <strong>Multi-city Tours:</strong> Combined packages including other pilgrimage sites like Varanasi, Prayagraj, or Chitrakoot
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Getting Around Ayodhya */}
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Getting Around Ayodhya</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Auto Rickshaws</h3>
              <p className="mb-2">
                The most common mode of transport within the city. Available throughout Ayodhya.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Negotiate the fare before boarding or insist on using the meter.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">E-Rickshaws</h3>
              <p className="mb-2">
                Electric rickshaws offer an eco-friendly option for short distances within the city.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Shared e-rickshaws follow fixed routes and are very economical.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Taxis</h3>
              <p className="mb-2">
                Available for longer trips or for exploring multiple sites in a day.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Book through your hotel or use app-based services where available.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Cycle Rickshaws</h3>
              <p className="mb-2">
                Traditional option for short distances, especially in congested areas.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Suitable for leisurely exploration of narrow lanes and markets.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Walking</h3>
              <p className="mb-2">
                Many religious sites are located within walking distance of each other.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Most comfortable during morning and evening hours, avoid afternoon heat.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Tourist Shuttle</h3>
              <p className="mb-2">
                Special shuttle services connect major temples and tourist spots.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Tip:</strong> Check schedules at your hotel or the tourist information center.
              </p>
            </div>
          </div>
        </section>
        
        {/* Travel Tips */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Essential Travel Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Best Time to Visit</h3>
              <ul className="space-y-2">
                <li><strong>October to March:</strong> Pleasant weather with temperatures ranging from 5°C to 25°C.</li>
                <li><strong>Ram Navami (March-April):</strong> Major festival celebrating Lord Ram's birth with special events.</li>
                <li><strong>Diwali (October-November):</strong> Spectacular celebrations with the city adorned in lights.</li>
                <li><strong>Avoid Summer:</strong> April to June can be extremely hot with temperatures reaching 45°C.</li>
                <li><strong>Monsoon Considerations:</strong> July to September sees rainfall which may affect travel plans.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Pilgrim Essentials</h3>
              <ul className="space-y-2">
                <li><strong>Documentation:</strong> Carry valid ID proof, travel tickets, and accommodation confirmations.</li>
                <li><strong>Clothing:</strong> Pack modest attire suitable for temple visits. Head covering is recommended for women.</li>
                <li><strong>Footwear:</strong> Comfortable walking shoes and easily removable footwear for temple visits.</li>
                <li><strong>Health Precautions:</strong> Carry any prescription medications, first aid kit, and hand sanitizer.</li>
                <li><strong>Digital Preparation:</strong> Download maps, translation apps, and travel guides for offline use.</li>
                <li><strong>Cash:</strong> While cards are accepted at larger establishments, keep cash for smaller vendors and donations.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Itinerary Suggestions */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Suggested Itineraries</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">1-Day Pilgrimage</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-semibold w-24">Early Morning:</span>
                <span>Visit Ram Mandir for darshan, avoiding peak crowds</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Late Morning:</span>
                <span>Visit Hanuman Garhi Temple</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Afternoon:</span>
                <span>Lunch at a local bhojnalaya, followed by rest</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Evening:</span>
                <span>Visit Kanak Bhavan and attend Saryu Aarti at the ghat</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">2-Day Pilgrimage</h3>
            <h4 className="font-semibold mb-2">Day 1:</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex">
                <span className="font-semibold w-24">Morning:</span>
                <span>Early visit to Ram Mandir, followed by Hanuman Garhi</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Afternoon:</span>
                <span>Visit Kanak Bhavan and Nageshwarnath Temple</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Evening:</span>
                <span>Saryu Aarti and riverside walk</span>
              </li>
            </ul>
            
            <h4 className="font-semibold mb-2">Day 2:</h4>
            <ul className="space-y-2">
              <li className="flex">
                <span className="font-semibold w-24">Morning:</span>
                <span>Visit Treta Ke Thakur and Dasharatha Mahal</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Afternoon:</span>
                <span>Explore Ram Ki Paidi and local markets for souvenirs</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Evening:</span>
                <span>Return to Ram Mandir for evening aarti</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">3-Day Extended Visit</h3>
            <p className="mb-4">
              In addition to the 2-day itinerary, add these experiences:
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-semibold w-24">Day 3 Morning:</span>
                <span>Visit Gulab Bari and Bahu Begum ka Maqbara in nearby Faizabad</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Afternoon:</span>
                <span>Visit Tulsi Smarak Bhawan and Ram Katha Museum</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Evening:</span>
                <span>Attend cultural program or light and sound show (if available)</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TravelPage;
