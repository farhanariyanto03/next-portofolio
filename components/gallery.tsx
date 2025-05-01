import RollingGallery from "@/ui/roolling_gallery";

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950/30 to black">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-blue-500 text-blue-400 rounded-full text-sm mb-4">
            Gallery
          </span>
          <h2 className="text-4xl font-bold text-white">My Album</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My album during competition or organization activities.
          </p>
        </div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default Gallery;
