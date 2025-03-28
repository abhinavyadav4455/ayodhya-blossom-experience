
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const RamMandirPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Ram Mandir" 
        subtitle="The Divine Abode of Lord Ram" 
        backgroundImage="/images/ram-mandir-banner.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">The Magnificent Temple of Lord Ram</h2>
          <p className="text-lg mb-6">
            The Ram Mandir in Ayodhya is a grand temple dedicated to Lord Ram, built at his birthplace. After centuries of devotion and a long journey, this magnificent temple now stands as a symbol of faith, culture, and architectural brilliance.
          </p>
          <p className="text-lg">
            The temple follows the Nagara style of temple architecture and is designed to last for at least 1,000 years.
          </p>
        </section>
        
        {/* Temple Architecture */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4">Architectural Marvel</h2>
              <p className="mb-4">
                The Ram Mandir is built in the traditional Nagara style, spanning 2.7 acres within a larger 70-acre complex. The temple stands 161 feet tall with three floors, each 20 feet high.
              </p>
              <p className="mb-4">
                It features 5 mandaps (halls), 160 pillars on the ground floor, 132 pillars on the first floor, and 74 pillars on the second floor.
              </p>
              <p>
                The temple is constructed using pink sandstone from Rajasthan, without the use of steel or iron, relying instead on the ancient technique of interlocking stones.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/ram-mandir-architecture.jpg" 
                alt="Ram Mandir Architecture" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Temple Complex */}
        <section className="mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">The Temple Complex</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Garbha Griha</h3>
              <p>
                The sanctum sanctorum houses the idol of Ram Lalla, the infant form of Lord Ram. This is the most sacred part of the temple.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Mandaps</h3>
              <p>
                The temple features five mandaps (halls): Rang Mandap, Nritya Mandap, Prarthana Mandap, Kirtan Mandap, and Sabha Mandap.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Surrounding Temples</h3>
              <p>
                The complex includes temples dedicated to other deities including Sita, Lakshman, Bharat, Shatrughan, and Hanuman.
              </p>
            </div>
          </div>
        </section>
        
        {/* Visiting Information */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Visitor Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Darshan Timings</h3>
              <ul className="space-y-2">
                <li><strong>Morning:</strong> 7:00 AM - 11:30 AM</li>
                <li><strong>Afternoon:</strong> 2:00 PM - 7:00 PM</li>
                <li><strong>Special Aarti:</strong> 6:30 AM and 7:30 PM</li>
                <li><strong>Weekly Closure:</strong> None (Open all days)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Guidelines for Visitors</h3>
              <ul className="space-y-2">
                <li>Dress modestly as per Hindu temple traditions</li>
                <li>Mobile phones and cameras may be restricted in certain areas</li>
                <li>Follow queue systems and security instructions</li>
                <li>Be prepared for security checks</li>
                <li>Special arrangements for elderly and differently-abled visitors</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Temple Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-1.jpg" alt="Ram Mandir" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-2.jpg" alt="Ram Mandir Interior" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-3.jpg" alt="Ram Mandir Aerial View" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-4.jpg" alt="Ram Mandir Ceremony" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-5.jpg" alt="Ram Mandir Construction" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/images/ram-mandir-6.jpg" alt="Ram Mandir at Night" className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>
        
        {/* Historical Significance */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Historical and Spiritual Significance</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              The Ram Mandir is built at the site believed to be the birthplace of Lord Ram, the seventh avatar of Lord Vishnu and the protagonist of the epic Ramayana. The site has been a place of reverence and worship for thousands of years.
            </p>
            <p className="mb-4">
              The construction of the temple marks the culmination of a centuries-long aspiration of millions of devotees. The foundation stone was laid on August 5, 2020, and the Pran Pratishtha (consecration) ceremony took place on January 22, 2024, in the presence of the Prime Minister and other dignitaries.
            </p>
            <p>
              For Hindus worldwide, the Ram Mandir represents not just a religious monument, but a cultural and spiritual landmark that connects the present to India's ancient heritage and traditions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RamMandirPage;
