import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const DharmshalaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dharmshalaList = [
    {
      id: 1,
      name: 'Shri Ram Dharmshala',
      description: 'A traditional dharamshala offering basic accommodations for pilgrims with clean rooms and essential facilities.',
      address: 'Near Ram Mandir, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['Free meals', 'Dormitory', 'Locker facility', 'Prayer hall']
    },
    {
      id: 2,
      name: 'Janaki Saran Dharmshala',
      description: 'Family-friendly dharmshala with private rooms and attached bathrooms for a comfortable pilgrimage experience.',
      address: 'Saket Colony, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['Private rooms', 'Attached bathrooms', 'Dining hall', 'Temple within premises']
    },
    {
      id: 3,
      name: 'Bharat Kund Dharmshala',
      description: 'Located near the historic Bharat Kund, offering peaceful accommodations for spiritual seekers.',
      address: 'Bharat Kund Road, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['Garden view', 'Meditation area', 'Free breakfast', 'Reading room']
    },
    {
      id: 4,
      name: 'Dashrath Mahal Dharmshala',
      description: 'Named after King Dashrath, this dharmshala offers traditional hospitality with modern amenities.',
      address: 'Main Market Road, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['AC rooms available', 'Generator backup', 'Ayurvedic treatment center', 'Travel assistance']
    },
    {
      id: 5,
      name: 'Sarayu Kunj Dharmshala',
      description: 'Riverside dharmshala offering scenic views of the Sarayu River and serene environment for pilgrims.',
      address: 'Sarayu Ghat, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['River view', 'Ghat access', 'Evening aarti', 'Cultural programs']
    },
    {
      id: 6,
      name: 'Hanuman Garhi Dharmshala',
      description: 'Located near the famous Hanuman Garhi temple, offering convenient accommodations for devotees.',
      address: 'Hanuman Garhi Road, Ayodhya',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      facilities: ['Temple view', '24-hour reception', 'Pure vegetarian meals', 'Pilgrim guide services']
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Dharmshala" 
        subtitle="Traditional Pilgrim Accommodations" 
        backgroundImage="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png"
      />
      
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Stay in Sacred Simplicity</h2>
          <p className="text-lg">
            Dharmshala accommodations in Ayodhya offer pilgrims a simple, affordable, and spiritually oriented place to stay during their visit. 
            These traditional lodgings are often managed by temples or charitable trusts and provide basic amenities with a focus on cleanliness and comfort.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Popular Dharmshala Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dharmshalaList.map((dharmshala) => (
              <div key={dharmshala.id} className="card-custom h-full flex flex-col section-animate">
                <div className="image-container h-48">
                  <img 
                    src={dharmshala.image} 
                    alt={dharmshala.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{dharmshala.name}</h3>
                  <p className="text-gray-700 mb-3">{dharmshala.description}</p>
                  <p className="text-gray-600 mb-4"><strong>Address:</strong> {dharmshala.address}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Facilities:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {dharmshala.facilities.map((facility, index) => (
                        <li key={index} className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Information for Pilgrims</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Booking Information</h3>
              <ul className="space-y-2">
                <li><strong>Advance Booking:</strong> Many dharmshala accept advance bookings, especially during peak pilgrim seasons.</li>
                <li><strong>Documentation:</strong> Carry valid ID proof for all family members.</li>
                <li><strong>Check-in/out Times:</strong> Typically check-in is at 12 PM and check-out is at 11 AM.</li>
                <li><strong>Payment:</strong> Most dharmshala accept cash, and some may accept digital payments.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">What to Expect</h3>
              <ul className="space-y-2">
                <li><strong>Accommodations:</strong> Simple, clean rooms with basic furnishings.</li>
                <li><strong>Food:</strong> Many dharmshala offer sattvic meals, either included or at nominal charges.</li>
                <li><strong>Atmosphere:</strong> Quiet, peaceful environment conducive to spiritual practice.</li>
                <li><strong>Community:</strong> Shared spaces for interaction with fellow pilgrims.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Tips for a Pleasant Stay</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Book in Advance:</strong> Especially during festivals and peak seasons, dharmshala accommodations fill up quickly.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Pack Essentials:</strong> Bring your own toiletries, towels, and any specific requirements as these may not be provided.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Respect Rules:</strong> Most dharmshala have early closing times and rules about noise levels, food, and consumption of items like alcohol and non-vegetarian food.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Dress Modestly:</strong> Respect the cultural and religious significance of the place.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Manage Expectations:</strong> Remember that dharmshala focus on providing basic, clean accommodations rather than luxury.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DharmshalaPage;
