"use client"
import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Skelton from "@/components/Skelton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [placeList, setPlaceList] = useState([])

  useEffect(() => {
    getPlaceList('Hotels in Mumbai');

  }, [])

  const getPlaceList = async (value:string) => {
    setPlaceList([]);
    setIsLoading(true);
    
    const result = await fetch("/api/google-places-api?q="+value)
    const data = await result.json() 
    console.log(data.resp.results);
    setPlaceList(data.resp.results);
    setIsLoading(false);
    
  }
  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)}/>

      {placeList ? <PlaceList placeList={placeList} /> : null}

      <div>
        {isLoading ? <div><Skelton /></div> : <PlaceList placeList={placeList} />}
      </div>
      <div className="justify-center flex line-clamp-4">
        <div style={{ marginBottom: '1rem' }}></div>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 BIZSCAPE All rights reserved.</p>
          </div>
        </footer>
      </div>
        
    </div>

  );
}
