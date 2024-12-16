// app/dashboard/[wallpaperId]/RelatedWallpapers.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Wallpaper = {
  id: string;
  title: string;
  imageUrl: string;
  category?: string;
};

type RelatedWallpapersProps = {
  wallpapers: Wallpaper[];
};

const RelatedWallpapers = ({ wallpapers }: RelatedWallpapersProps) => {
  if (wallpapers.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Wallpapers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wallpapers.map((wallpaper) => (
          <Link 
            href={`/dashboard/${wallpaper.id}`} 
            key={wallpaper.id}
            className="group"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={wallpaper.imageUrl}
                alt={wallpaper.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm font-semibold truncate max-w-[150px]">
                  {wallpaper.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedWallpapers;