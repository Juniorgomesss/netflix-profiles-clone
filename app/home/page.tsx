"use client"; 

import { Header } from "@/components/Header";
import { PhotoItem } from "@/components/PhotoItem"; 
import { photoList } from "@/app/data/photoList"; 

export default function Home() {
  const handleVideoClick = (url: string) => {
    alert(`Iniciando vídeo: ${url}`);
  }

  return (
    <main className="min-h-screen transition-colors duration-300 bg-[#f5f5f5] text-[#222] dark:bg-[#141414] dark:text-white">
      <Header />
      
      <div className="pt-24 px-4 md:px-12 pb-12">
        <h2 className="text-2xl font-bold mb-4">Filmes em Alta</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photoList.map((item, index) => (
                <PhotoItem 
                    key={index} 
                    photo={item} 
                    onClick={() => handleVideoClick(item.url)} 
                />
            ))}
        </div>
      </div>
    </main>
  );
}