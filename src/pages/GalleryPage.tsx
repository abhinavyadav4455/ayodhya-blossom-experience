import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { GalleryHorizontal, Camera } from 'lucide-react';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'Ram Mandir',
      image: '/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png',
      description: 'The magnificent Ram Mandir at Ayodhya, a symbol of faith and devotion for millions of devotees worldwide.'
    },
    {
      id: 2,
      title: 'Kanak Bhawan',
      image: '/lovable-uploads/1c7b6ffe-16a9-4b55-be3d-80fabe1e6c79.png',
      description: 'The beautiful Kanak Bhawan temple, gifted to Sita and Ram as a wedding present by Queen Kaushalya.'
    },
    {
      id: 3,
      title: 'Saryu Ghat',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      description: 'The serene Saryu River Ghat where devotees perform sacred rituals and witness the mesmerizing evening aarti.'
    },
    {
      id: 4,
      title: 'Prasad Distribution',
      image: '/lovable-uploads/35be26df-7393-4556-8be9-40672d27be4d.png',
      description: 'Sacred prasad being distributed to devotees, a blessed offering that carries divine energy and grace.'
    },
    {
      id: 5,
      title: 'Dharamshala',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      description: 'Comfortable dharamshala accommodations for pilgrims seeking spiritual solace during their sacred journey.'
    },
    {
      id: 6,
      title: 'Temple View',
      image: '/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png',
      description: 'Stunning view of the Ram Mandir complex, showcasing its architectural grandeur and spiritual significance.'
    }
  ];

  return (
    <div className="page-transition pb-8 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Photo Gallery" 
        subtitle="विश्वेश्वरं च विश्वं च विश्वरूपमजं विभुम् | Visual journey through the divine city of Ayodhya" 
        backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* First Section - Gallery */}
        <section className="mb-8 section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4 text-center flex items-center justify-center gap-2">
            <GalleryHorizontal className="text-ayodhya-saffron" />
            पावन अयोध्या दर्शन - Sacred Places of Ayodhya
          </h2>
          
          <div className="text-center mb-6">
            <p className="text-lg italic text-ayodhya-maroon">
              "अयोध्या मथुरा माया काशी काञ्ची अवन्तिका | पुरी द्वारावती चैव सप्तैते मोक्षदायका: ||"
            </p>
            <p className="text-sm mt-1 text-gray-600">
              "Ayodhya, Mathura, Maya (Haridwar), Kashi, Kanchi, Avantika and Dwaraka - these seven cities are the bestowers of salvation."
            </p>
          </div>
          
          <p className="text-center mb-6">
            Ayodhya, the birthplace of Lord Ram, is one of the seven most sacred cities in Hindu tradition. 
            Its temples, ghats, and sacred sites have drawn pilgrims for thousands of years. 
            Experience the divine energy of this ancient city through our curated collection of images.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow-lg group hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second Section - Historical Significance */}
        <section className="mb-8 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center flex items-center justify-center gap-2">
            <Camera className="text-ayodhya-saffron" />
            अयोध्या का ऐतिहासिक महत्व - Historical Significance
          </h2>
          
          <div className="bg-ayodhya-cream p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Ayodhya, situated on the banks of the sacred Saryu River, has been a center of Hindu culture and spirituality for millennia. 
              The city is mentioned in ancient texts like the Ramayana, Puranas, and Buddhist literature, with archaeological evidence 
              dating human settlement here to the 9th century BCE.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Mythological Significance</h3>
                <p>
                  According to Hindu tradition, Ayodhya was founded by Manu, the progenitor of mankind. It later became the capital of 
                  the Ikshvaku dynasty, to which Lord Ram belonged. The Ramayana describes Ayodhya as a prosperous city with magnificent 
                  palaces, gardens, and temples during the rule of King Dasharatha and later Lord Ram.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Religious Importance</h3>
                <p>
                  As one of the seven sacred cities (Saptapuri) in Hinduism, Ayodhya is believed to bestow moksha (liberation) to those 
                  who visit or live here. The city houses numerous temples dedicated to various deities, with the newly constructed Ram 
                  Mandir being the centerpiece of modern Ayodhya's religious landscape.
                </p>
              </div>
            </div>
            
            <p>
              Today, Ayodhya stands as a testament to India's rich cultural heritage and the enduring power of faith. The city continues 
              to evolve while preserving its ancient traditions, welcoming millions of pilgrims and tourists who seek spiritual 
              enlightenment and cultural enrichment.
            </p>
          </div>
        </section>
        
        {/* Third Section - Divine Journey */}
        <section className="mb-8 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">
            दिव्य अयोध्या यात्रा - Divine Ayodhya Journey
          </h2>
          
          <div className="text-center mb-5">
            <p className="text-lg italic text-ayodhya-saffron">
              "रामो राजमणिः सदा विजयते रामं रमेशं भजे"
            </p>
            <p className="text-sm mt-1 text-gray-600">
              "Lord Ram, the jewel among kings, is eternally victorious. I worship Lord Ram, the husband of Goddess Lakshmi."
            </p>
          </div>
          
          <p className="text-center mb-4">
            A pilgrimage to Ayodhya is considered complete when devotees visit these principal sacred sites.
            Each location carries profound spiritual significance and historical importance in the story of Lord Ram.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Photography Tips</h3>
              <p>
                Capture the magical moments of your Ayodhya journey with these photography suggestions:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Early morning light at Ram Mandir creates a golden glow</li>
                <li>• Evening aarti at Saryu Ghat offers spectacular photo opportunities</li>
                <li>• Respect photography restrictions in temple sanctums</li>
                <li>• Capture architectural details of the intricate carvings</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Best Viewing Times</h3>
              <p>
                For the most captivating visual experiences in Ayodhya:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Sunrise views from Saryu Ghat (5:30-6:30 AM)</li>
                <li>• Ram Mandir in evening illumination (6:00-8:00 PM)</li>
                <li>• Kanak Bhawan during midday for best interior light</li>
                <li>• Hanuman Garhi at sunset for panoramic city views</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Share Your Journey</h3>
              <p>
                Become part of our growing community of Ayodhya pilgrims:
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Use hashtag #AyodhyaBlessings on social media</li>
                <li>• Share your spiritual experiences and photos</li>
                <li>• Connect with fellow devotees and pilgrims</li>
                <li>• Help others plan their sacred journey</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;
