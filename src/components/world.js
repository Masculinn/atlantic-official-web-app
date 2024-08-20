"use client"

import React, { useState, useEffect, useRef }from 'react';
import { animated, useSpring } from '@react-spring/web';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useMediaQuery } from 'react-responsive';

const MapContainer = dynamic(() => import('react-leaflet').then(module => module.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(module => module.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(module => module.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(module => module.Popup), { ssr: false });

const Map = () => {
    const [hoveredMarker, setHoveredMarker] = useState(null)
    const [isClient, setIsClient] = useState(false);
    
    if (!isClient) {
        return null;
    }
    useEffect(() => {
        setIsClient(true);
    }, []);
    const isResponsive = useMediaQuery({
        query: '(max-width:768px)'
    })
    const zoomLevel = isResponsive ? 1 : 1.5;
    
    const officeLocations = [
        { lat: 42.69744437111342, lng: 23.323370269239742, name: 'Atlantic Valley Sofya / Bulgaristan' },
        { lat: 41.002448398192776, lng: 29.053941082517355, name: 'Atlantic Valley İstanbul / Türkiye' },
        { lat: 43.065193154206334, lng: -107.1578067176503, name: 'Atlantic Valley Wyoming / ABD' },
        { lat: 52.225651199978536, lng: 21.013623195334112, name: 'Atlantic Valley Varşova / Polonya' }
    ];
    return (
        <MapContainer center={[60.6974, -28.3234]} zoom={zoomLevel ? 1.5 : 1} id='map'>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {officeLocations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            eventHandlers={{
              mouseover: () => {
                setHoveredMarker(index);
              },
              mouseout: () => {
                setHoveredMarker(null);
              },
            }}
          >
            {(hoveredMarker === index) && <Popup autoClose={true} autoPan={true}>{location.name}</Popup>}
          </Marker>
        ))}
      </MapContainer>    
    )
}


const World = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => !prev);
            observer.disconnect();
          }
        }, { threshold: 0.1 });
    
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        }
      }, []);
  
  const officeLocations = [
    {
      location: 'ABD / Wyoming',
      tel: '',
      def: 'E-Ticaret Operasyon Merkezi'
    },
    {
      location: 'Polonya / Varşova',
      tel: '+48 731 384 284',
      def: 'Avrupa Yatırım Danışmanlık Ofisi'
    },
    {
      location: 'Türkiye / İstanbul',
      tel: '+90 537 405 11 68',
      def: 'Türkiye Faaliyetleri Yatırım Merkezi'
    },
    {
      location: 'Bulgaristan / Sofya',
      tel: '',
      def: 'Operasyonel Faaliyetler Şubesi'
    }
  ];

  const Locations = () => {
        return (
        <div className="flex flex-wrap justify-center">
            {officeLocations.map((office, index) => (
            <Office key={index} {...office} />
            ))}
        </div>
        );
    }

    const Office = ({location, tel, def}) => {
        const styles = useSpring({
            from: { opacity: 0, transform: 'translateX(-50px)' },
            to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            },
            delay: 200,
        });


    return (
      <animated.div style={styles} className="w-full h-auto md:w-1/2 lg:w-1/2 py-6 px-2" ref={ref}>
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{location}</div>
            <h2 className='mb-2 text-gray-500'>{def}</h2>
            <div className="items-center -mx-3 mb-4 ">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                {tel === '' ? (
                  <div>
                  <div className="text-white">Telefon</div>
                  <div className={`font-bold text-sm text-white`}>0000000</div>                  
                </div>                
                ) : (
                  <div>
                    <div className="text-gray-800">Telefon</div>
                    <div className={`font-bold text-sm`}>{tel}</div>                  
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </animated.div> 
    
    );
  };
    return (
      <div className='w-full h-auto mb-24'>
        <center>
          <h2 className='text-2xl mt-12 lg:mt-36 lg:text-3xl md:text-xl' id='section_font'>Atlantic Valley Partners Ofisleri</h2>
          <hr className='border border-black lg:block md:block sm:hidden hidden mt-8' width={'50%'} />
        </center>
        <div className='flex flex-col lg:flex-row items-center justify-center mx-8 lg:mx-0'>
          <Map className='h-auto w-full' />
          <div className='h-auto w-full lg:w-1/2  pt-8 pb-8' id='section_font'>
              <div className='pt-8 w-full h-auto'>
                <Locations />
              </div>
          </div>
        </div>
      </div>
  )

}

export {World}