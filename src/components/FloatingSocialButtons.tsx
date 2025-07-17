import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ShoppingBag, Youtube } from 'lucide-react';

const FloatingSocialButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialButtons = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19p8tHtT7a/',
      color: 'bg-blue-600 hover:bg-blue-500',
      icon: (
        <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/barokahprinterjambi?igsh=dWVya2plaXhla2xk',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400',
      icon: (
        <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Tokopedia',
      url: 'https://tokopedia.com/barokahprinter',
      color: 'bg-green-600 hover:bg-green-500',
      icon: (
        <img 
          src="https://w7.pngwing.com/pngs/741/278/png-transparent-tokopedia-android-online-shopping-android-shopping-mall-owl-bird-thumbnail.png" 
          alt="Tokopedia" 
          className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
        />
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@barokah_printer?si=Sfy-Q4mPN5I0h0_g',
      color: 'bg-red-600 hover:bg-red-500',
      icon: <Youtube className="h-7 w-7 sm:h-8 sm:w-8" />
    },
    {
      name: 'Shopee',
      url: 'https://shopee.co.id/bp_printer?categoryId=100644&entryPoint=ShopByPDP&itemId=22878233098',
      color: 'bg-orange-600 hover:bg-orange-500',
      icon: <ShoppingBag className="h-7 w-7 sm:h-8 sm:w-8" />
    }
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 z-50">
      {/* Hidden Social Buttons */}
      <div className={`flex flex-col space-y-2 sm:space-y-3 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {socialButtons.map((button, index) => (
          <button
            key={button.name}
            onClick={() => window.open(button.url, '_blank')}
            className={`${button.color} text-white p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transform ${
              isExpanded ? 'scale-100' : 'scale-0'
            }`}
            style={{
              transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
            }}
            title={button.name}
          >
            {button.icon}
          </button>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-blue-700 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${
          isExpanded ? 'rotate-180' : 'rotate-0'
        }`}
        title={isExpanded ? 'Sembunyikan' : 'Tampilkan Media Sosial'}
      >
        {isExpanded ? (
          <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
        ) : (
          <ChevronUp className="h-7 w-7 sm:h-8 sm:w-8" />
        )}
      </button>

      {/* WhatsApp Button (Always Visible) */}
      <button
        onClick={() => window.open('https://wa.me/6285368148449', '_blank')}
        className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
        title="WhatsApp"
      >
        <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
        </svg>
      </button>
    </div>
  );
};

export default FloatingSocialButtons;