/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'i.imgur.com',
        'images.unsplash.com',  // Unsplash images
        'res.cloudinary.com',   // Cloudinary images
        'hebbkx1anhila5yf.public.blob.vercel-storage.com',  // Vercel storage
        'i.pravatar.cc'         // Pravatar for avatarss
        // Add any other domains you need here
      ],
    },
  };
  
  export default nextConfig;
