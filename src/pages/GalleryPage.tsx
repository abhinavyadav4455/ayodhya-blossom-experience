
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { GalleryHorizontal } from 'lucide-react';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'Ram Mandir',
      image: '/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png',
      description: 'The magnificent Ram Mandir at Ayodhya'
    },
    {
      id: 2,
      title: 'Kanak Bhawan',
      image: '/lovable-uploads/1c7b6ffe-16a9-4b55-be3d-80fabe1e6c79.png',
      description: 'The beautiful Kanak Bhawan temple'
    },
    {
      id: 3,
      title: 'Saryu Ghat',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      description: 'The serene Saryu River Ghat'
    },
    {
      id: 4,
      title: 'Prasad Distribution',
      image: '/lovable-uploads/35be26df-7393-4556-8be9-40672d27be4d.png',
      description: 'Sacred prasad being distributed to devotees'
    },
    {
      id: 5,
      title: 'Dharamshala',
      image: '/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png',
      description: 'Comfortable dharamshala accommodations for pilgrims'
    },
    {
      id: 6,
      title: 'Temple View',
      image: '/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png',
      description: 'Stunning view of the Ram Mandir complex'
    }
  ];

  return (
    <div className="page-transition pb-8 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Photo Gallery" 
        subtitle="Visual journey through the divine city of Ayodhya" 
        backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
      />
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-10 section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center flex items-center justify-center gap-2">
            <GalleryHorizontal className="text-ayodhya-saffron" />
            Sacred Places of Ayodhya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow-lg group">
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
      </div>
    </div>
  );
};

export default GalleryPage;
