import React, { useState } from 'react';

const App = () => {
  // Sample image data
  const initialImages = [
    {
      id: 1,
      url: 'https://www.sngwallpaper.com/wp-content/uploads/2021/05/3D-beach-sea-mural.jpg',
      alt: 'Nature',
      likes: 248,
      isLiked: false,
      comments: [
        { id: 1, user: 'nature_lover', text: 'Beautiful shot!' },
        { id: 2, user: 'outdoor_enthusiast', text: 'Where was this taken?' }
      ],
    },
    {
      id: 2,
      url: 'https://c4.wallpaperflare.com/wallpaper/298/369/156/tokyo-tower-city-lights-cityscape-night-lights-wallpaper-thumb.jpg',
      alt: 'City',
      likes: 512,
      isLiked: false,
      comments: [
        { id: 1, user: 'urban_explorer', text: 'Great cityscape!' }
      ],
    },
    {
      id: 3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rm9Cxs7KmPSypKRGf6S1H6wU1dC1a1Y5tw&s',
      alt: 'Food',
      likes: 1200,
      isLiked: false,
      comments: [
        { id: 1, user: 'foodie', text: 'delicious!' }
      ],
    },
    {
      id: 4,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWhjILnbq12LtuBa0Sb8iMwT7azLAafsGKw&s',
      alt: 'Animal',
      likes: 876,
      isLiked: false,
      comments: [
        { id: 1, user: 'Animallover', text: 'playing kids!' }
      ],
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1729731322011-f945437445be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wyNTkxMjcwfHxlbnwwfHx8fHw%3D',
      alt: 'Portrait',
      likes: 2400,
      isLiked: false,
      comments: [
        { id: 1, user: 'traveler', text: 'road of peace!' }
      ],
    },
    {
      id: 6,
      url: 'https://img.freepik.com/free-photo/traveling-items-wooden-background-flat-lay_23-2148971048.jpg',
      alt: 'Travel',
      likes: 763,
      isLiked: false,
      comments: [
        { id: 1, user: 'travellover', text: 'travel gives experience!' }
      ],
    }
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleLike = (id) => {
    setImages(images.map(image => {
      if (image.id === id) {
        return {
          ...image,
          likes: image.isLiked ? image.likes - 1 : image.likes + 1,
          isLiked: !image.isLiked
        };
      }
      return image;
    }));
  };

  const openComments = (image) => {
    setSelectedImage(image);
  };

  const closeComments = () => {
    setSelectedImage(null);
    setNewComment('');
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !selectedImage) return;
    
    const updatedImages = images.map(image => {
      if (image.id === selectedImage.id) {
        return {
          ...image,
          comments: [
            ...image.comments,
            {
              id: Date.now(),
              user: 'current_user',
              text: newComment
            }
          ]
        };
      }
      return image;
    });

    setImages(updatedImages);
    setSelectedImage({
      ...selectedImage,
      comments: [
        ...selectedImage.comments,
        {
          id: Date.now(),
          user: 'current_user',
          text: newComment
        }
      ]
    });
    setNewComment('');
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Instagram Gallery</h1>
        
        {/* Image Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard 
              key={image.id}
              image={image}
              onLike={() => handleLike(image.id)}
              onComment={() => openComments(image)}
            />
          ))}
        </div>

        {/* Comments Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="border-b p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Comments</h2>
                <button 
                  onClick={closeComments}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              {/* Image and Comments */}
              <div className="flex-1 overflow-y-auto">
                {/* Image */}
                <div className="p-4">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded" 
                  />
                </div>
                
                {/* Comments List */}
                <div className="px-4 pb-4 space-y-4">
                  {selectedImage.comments.map(comment => (
                    <div key={comment.id} className="flex space-x-3">
                      <div className="font-semibold">{comment.user}</div>
                      <div>{comment.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Add Comment */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                  />
                  <button
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className={`px-4 py-2 rounded-full ${newComment.trim() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Image Card Component
const ImageCard = ({ image, onLike, onComment }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200">
      {/* Main Image */}
      <img 
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
      
      {/* Icons Container */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-6 text-white">
          {/* Like Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            className="flex items-center focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${image.isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={image.isLiked ? 0 : 2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span className="ml-1">{formatNumber(image.likes)}</span>
          </button>
          
          {/* Comment Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onComment();
            }}
            className="flex items-center focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="ml-1">{image.comments.length}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to format numbers (e.g., 1200 -> 1.2k)
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

export default App;