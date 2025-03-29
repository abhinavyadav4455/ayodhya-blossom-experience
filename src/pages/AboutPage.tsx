import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force an initial check for elements in viewport
    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  }, []);

  const timelineEvents = [
    {
      year: "5114 BCE (Traditional)",
      title: "Birth of Lord Ram",
      description: "According to traditional Hindu beliefs, Lord Ram was born in Ayodhya during the Treta Yuga."
    },
    {
      year: "3rd century BCE",
      title: "Ancient Ayodhya",
      description: "Historical records indicate Ayodhya as a major city during the period of Ashoka the Great."
    },
    {
      year: "1528 CE",
      title: "Babri Masjid Construction",
      description: "Construction of the Babri Masjid during the Mughal era."
    },
    {
      year: "1853 CE",
      title: "First Recorded Dispute",
      description: "First documented religious conflict over the site."
    },
    {
      year: "1992",
      title: "Demolition of Structure",
      description: "The disputed structure was demolished, leading to nationwide tensions."
    },
    {
      year: "2019",
      title: "Supreme Court Verdict",
      description: "India's Supreme Court ruled in favor of constructing a Ram Temple at the disputed site."
    },
    {
      year: "2020",
      title: "Foundation Stone Laying",
      description: "The foundation stone for the Ram Mandir was laid on August 5, 2020."
    },
    {
      year: "2024",
      title: "Temple Inauguration",
      description: "Consecration ceremony (Pran Pratishtha) of the Ram Mandir took place on January 22, 2024."
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="About Ayodhya" 
        subtitle="The Sacred Birthplace of Lord Ram" 
        backgroundImage="/images/about-banner.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">The Divine City of Ayodhya</h2>
          <p className="text-lg mb-4">
            Ayodhya, one of the seven sacred cities (Saptapuri) for Hindus, holds immense religious and historical significance as the birthplace of Lord Ram, 
            the seventh avatar of Lord Vishnu and the protagonist of the epic Ramayana.
          </p>
          <p className="text-lg">
            Located on the banks of the Sarayu River in the Indian state of Uttar Pradesh, this ancient city has been a center of faith, culture, and pilgrimage for thousands of years, 
            with its history deeply intertwined with India's spiritual heritage.
          </p>
        </section>
        
        {/* Historical Significance */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/ayodhya-historical.jpg" 
                alt="Historical Ayodhya" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4">Historical Significance</h2>
              <p className="mb-4">
                According to Hindu tradition, Ayodhya was founded by Manu, the first man in creation, and served as the capital of the Kosala Kingdom during the era of Lord Ram. The city's name translates to "unconquerable" or "that which cannot be fought against."
              </p>
              <p className="mb-4">
                Archaeological excavations suggest that human settlement in Ayodhya dates back to around 7th century BCE, making it one of the oldest continuously inhabited cities in the world.
              </p>
              <p>
                Throughout history, Ayodhya has been a significant center for learning, spirituality, and culture. It flourished under various dynasties including the Mauryas, Guptas, and later under the Mughal Empire and British colonial rule.
              </p>
            </div>
          </div>
        </section>
        
        {/* Spiritual Significance */}
        <section className="mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Spiritual Significance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Sacred Geography</h3>
              <p>
                Ayodhya is counted among the seven most sacred cities in Hinduism (the others being Mathura, Haridwar, Varanasi, Kanchi, Ujjain, and Dwarka). These cities are believed to provide moksha (liberation) to those who die within their boundaries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">The Ramayana Connection</h3>
              <p>
                Ayodhya is intrinsically linked to the epic Ramayana, which narrates the life and journey of Lord Ram. The city was the setting for significant portions of this epic, including Lord Ram's birth, his upbringing in the royal palace, and his eventual return after 14 years of exile and victory over Ravana.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Pilgrimage Destination</h3>
              <p>
                For devout Hindus, a pilgrimage to Ayodhya is considered highly meritorious. The city houses numerous ancient temples and sacred sites associated with the life of Lord Ram and other deities, making it a spiritual hub that attracts millions of devotees each year.
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Historical Timeline</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ayodhya-saffron"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ayodhya-maroon z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold text-ayodhya-maroon">{event.year}</h3>
                      <h4 className="font-semibold mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty Space on Other Side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Major Temples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Major Temples in Ayodhya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/ram-mandir-small.jpg" 
                  alt="Ram Mandir" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Ram Mandir</h3>
                <p className="text-gray-700">
                  The recently constructed grand temple at the birthplace of Lord Ram, featuring Nagara style architecture and standing 161 feet tall.
                </p>
              </div>
            </div>
            
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/hanuman-garhi.jpg" 
                  alt="Hanuman Garhi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Hanuman Garhi</h3>
                <p className="text-gray-700">
                  A temple dedicated to Lord Hanuman, situated on a hill and reached by climbing 76 steps. It's one of the most visited temples in Ayodhya.
                </p>
              </div>
            </div>
            
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/kanak-bhavan.jpg" 
                  alt="Kanak Bhavan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Kanak Bhavan</h3>
                <p className="text-gray-700">
                  Also known as Sone-ka-Ghar, this temple houses the idols of Lord Ram and Sita, believed to be a wedding gift from Queen Kaikeyi.
                </p>
              </div>
            </div>
            
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/nageshwarnath-temple.jpg" 
                  alt="Nageshwarnath Temple" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Nageshwarnath Temple</h3>
                <p className="text-gray-700">
                  One of the oldest temples in Ayodhya, dedicated to Lord Shiva, believed to have been established by Lord Ram's son Kush.
                </p>
              </div>
            </div>
            
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/treta-ke-thakur.jpg" 
                  alt="Treta Ke Thakur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Treta Ke Thakur</h3>
                <p className="text-gray-700">
                  Temple marking the site where Lord Ram is said to have performed the Ashwamedha Yagna (horse sacrifice) after returning from Lanka.
                </p>
              </div>
            </div>
            
            <div className="card-custom">
              <div className="image-container h-48">
                <img 
                  src="/images/dasharatha-mahal.jpg" 
                  alt="Dasharatha Mahal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Dasharatha Mahal</h3>
                <p className="text-gray-700">
                  Ruins of what is believed to be the palace of King Dasharatha, father of Lord Ram, with ancient architectural elements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modern Ayodhya */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Ayodhya Today</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Today, Ayodhya is experiencing a renaissance with the construction of the Ram Mandir and extensive development projects. The city is being transformed with improved infrastructure, new pilgrim facilities, and beautification initiatives while maintaining its sacred character.
            </p>
            <p className="mb-4">
              The government has launched the Ayodhya Development Plan to develop the city as a major pilgrimage and tourist destination. This includes widening of roads, development of ghats along the Sarayu River, new accommodations, and improved connectivity with a new airport and better rail and road links.
            </p>
            <p>
              Despite these modern developments, Ayodhya maintains its spiritual essence, with the sounds of temple bells, devotional chants, and the flow of the sacred Sarayu River continuing to define its unique atmosphere.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-lg italic text-ayodhya-maroon">
              "Ayodhya is not merely a geographical location, but a living testament to faith, devotion, and the timeless teachings of Lord Ram that continue to inspire millions across the world."
            </p>
          </div>
        </section>
        
        {/* Developer Information */}
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Website Developer</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-40 h-40 bg-ayodhya-saffron rounded-full flex items-center justify-center text-white text-4xl font-bold">
                KV
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Kartikey Vishwakarma</h3>
              <p className="mb-2"><span className="font-semibold">Phone:</span> +91 6394650470</p>
              <p className="mb-4"><span className="font-semibold">Email:</span> kartikeyvishwakarma@gmail.com</p>
              <p className="text-gray-700">
                This website was designed and developed with devotion to Lord Ram and with the goal of making 
                pilgrimage to Ayodhya accessible to devotees worldwide. The Ayodhya Blessings platform aims to 
                provide accurate information and resources to enhance the spiritual journey of all visitors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
