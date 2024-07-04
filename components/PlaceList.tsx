import React, { useState, useEffect } from 'react';
import PlaceItemCard from './PlaceItemCard';
import SideDrawer from './SideDrawer';
import Skelton from './Skelton';

function PlaceList({ placeList = [] }: any) {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (placeList.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [placeList]);

  return (
    <div className='px-[10px] md:px-[120px] mt-7 z-10'>
      <h2 className='text-[20px] font-bold relative'>Search Results</h2>
      <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <Skelton key={index} />)
          : placeList.map((place: any, index: number) => (
            <div className='z-10' key={index} onClick={() => setSelectedPlace(place)}>
              <PlaceItemCard place={place} />
            </div>
          ))}
      </div>
      {selectedPlace?.name && (
        <div className='fixed top-0 right-0 z-20'>
          <SideDrawer place={selectedPlace} close={() => setSelectedPlace([])} />
        </div>
      )}
    </div>
  );
}

export default PlaceList;
