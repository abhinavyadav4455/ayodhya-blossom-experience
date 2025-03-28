
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const HotelsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hotelList = [
    {
      id: 1,
      name: 'Hotel Ram Prasad',
      description: 'A premium hotel offering modern amenities while maintaining the spiritual essence of Ayodhya. Features elegant rooms and excellent service.',
      address: 'Civil Lines, Ayodhya',
      image: '/images/hotel-1.jpg',
      category: 'Luxury',
      priceRange: '₹5,000 - ₹12,000 per night',
      amenities: ['Restaurant', 'Spa', 'Wi-Fi', 'Conference Hall', 'Room Service', 'Temple View Rooms']
    },
    {
      id: 2,
      name: 'Sarayu River Resort',
      description: 'Riverside property offering stunning views of the Sarayu River with a blend of modern comfort and traditional aesthetics.',
      address: 'Sarayu Bank, Ayodhya',
      image: '/images/hotel-2.jpg',
      category: 'Premium',
      priceRange: '₹4,000 - ₹9,000 per night',
      amenities: ['River View', 'Swimming Pool', 'Restaurant', 'Yoga Center', 'Wi-Fi', 'Spa']
    },
    {
      id: 3,
      name: 'Ayodhya Palace Hotel',
      description: 'Boutique hotel housed in a heritage building offering a glimpse into the royal past of the region with modern facilities.',
      address: 'Heritage Lane, Ayodhya',
      image: '/images/hotel-3.jpg',
      category: 'Heritage',
      priceRange: '₹3,500 - ₹8,000 per night',
      amenities: ['Heritage Architecture', 'Cultural Programs', 'Restaurant', 'Wi-Fi', 'Tour Services']
    },
    {
      id: 4,
      name: 'Comfort Inn Ayodhya',
      description: 'Mid-range hotel offering comfortable accommodations with essential amenities for business and leisure travelers.',
      address: 'Main Road, Ayodhya',
      image: '/images/hotel-4.jpg',
      category: 'Mid-range',
      priceRange: '₹2,000 - ₹4,500 per night',
      amenities: ['Restaurant', 'Business Center', 'Wi-Fi', 'Room Service', 'Parking']
    },
    {
      id: 5,
      name: 'Pilgrim's Rest Hotel',
      description: 'Budget-friendly hotel designed specifically for pilgrims with clean rooms and convenient location near major temples.',
      address: 'Temple Road, Ayodhya',
      image: '/images/hotel-5.jpg',
      category: 'Budget',
      priceRange: '₹1,000 - ₹2,500 per night',
      amenities: ['Temple Proximity', 'Vegetarian Restaurant', 'Wi-Fi', 'Travel Desk', 'Luggage Storage']
    },
    {
      id: 6,
      name: 'Raghav Grand Hotel',
      description: 'Modern hotel featuring spacious rooms, multiple dining options, and comprehensive facilities for a comfortable stay.',
      address: 'Ram Path, Ayodhya',
      image: '/images/hotel-6.jpg',
      category: 'Premium',
      priceRange: '₹3,500 - ₹8,000 per night',
      amenities: ['Multiple Restaurants', 'Banquet Hall', 'Gym', 'Wi-Fi', 'Business Center', 'Gift Shop']
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Hotels" 
        subtitle="Modern Accommodations in the Sacred City" 
        backgroundImage="/images/hotel-banner.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Contemporary Comfort in Ayodhya</h2>
          <p className="text-lg">
            Ayodhya offers a range of modern hotels catering to various preferences and budgets. From luxury accommodations to comfortable budget options, 
            these hotels provide convenient facilities for pilgrims and tourists seeking a comfortable stay during their visit to the sacred city.
          </p>
        </section>
        
        {/* Hotel Listings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Featured Hotels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelList.map((hotel) => (
              <div key={hotel.id} className="card-custom h-full flex flex-col">
                <div className="image-container h-48">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-ayodhya-maroon">{hotel.name}</h3>
                    <span className="bg-ayodhya-saffron text-white text-xs px-2 py-1 rounded">
                      {hotel.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{hotel.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-1"><strong>Price Range:</strong> {hotel.priceRange}</p>
                    <p className="text-gray-600"><strong>Address:</strong> {hotel.address}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Amenities:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, index) => (
                        <li key={index} className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Accommodation Guide */}
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Accommodation Guide</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Luxury & Premium</h3>
              <p className="mb-3">
                These hotels offer high-end amenities including fine dining restaurants, spa services, premium room features, and exceptional service.
              </p>
              <p className="text-gray-600">
                <strong>Ideal for:</strong> Travelers seeking comfort and luxury, business travelers, and those desiring premium facilities.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Mid-range</h3>
              <p className="mb-3">
                Offering a balance of comfort and value, these hotels provide clean, comfortable rooms with essential amenities at moderate prices.
              </p>
              <p className="text-gray-600">
                <strong>Ideal for:</strong> Family trips, group pilgrimages, and travelers seeking comfort without luxury pricing.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Budget & Economy</h3>
              <p className="mb-3">
                Focusing on essential needs, these accommodations provide clean, basic facilities at affordable rates for cost-conscious travelers.
              </p>
              <p className="text-gray-600">
                <strong>Ideal for:</strong> Pilgrims on a budget, backpackers, and those prioritizing location over amenities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Information */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Booking Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">When to Book</h3>
              <ul className="space-y-2">
                <li><strong>Festival Seasons:</strong> Book 2-3 months in advance for Ram Navami, Diwali, and other major festivals.</li>
                <li><strong>Weekends:</strong> Reserve at least 2 weeks ahead for weekend stays.</li>
                <li><strong>Peak Season:</strong> October to March sees higher visitor numbers, requiring earlier bookings.</li>
                <li><strong>Off-Season:</strong> April to September may offer better rates and last-minute availability.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Booking Tips</h3>
              <ul className="space-y-2">
                <li><strong>Online Platforms:</strong> Major booking websites and hotel direct websites offer reservations.</li>
                <li><strong>Special Requests:</strong> Mention any requirements (temple view, ground floor, etc.) at the time of booking.</li>
                <li><strong>Documentation:</strong> Carry valid ID proof for all guests as required by hotels.</li>
                <li><strong>Transportation:</strong> Inquire about pickup services from railway station or nearby airports.</li>
                <li><strong>Meal Plans:</strong> Consider booking with breakfast or meal plans for convenience.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Location Considerations */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Choosing the Right Location</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Near Ram Mandir</h3>
                <p className="mb-4">
                  Hotels in this area offer convenient access to the Ram Mandir and other major temples. Expect higher rates but save on transportation.
                </p>
                
                <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Sarayu Riverside</h3>
                <p>
                  Properties along the Sarayu River offer scenic views and a peaceful atmosphere, slightly removed from the busier temple areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">City Center</h3>
                <p className="mb-4">
                  Central locations provide access to markets, restaurants, and transportation hubs, making them convenient for exploring the city.
                </p>
                
                <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">Outskirts</h3>
                <p>
                  Properties on the outskirts generally offer more space, quieter environments, and lower rates, but require transportation to main attractions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelsPage;
