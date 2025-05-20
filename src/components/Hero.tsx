
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onStartAnalysis: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartAnalysis }) => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 soil-gradient">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-soil-dark">
            Soil<span className="text-plant-medium">Sense</span>
          </h1>
          <p className="text-xl md:text-2xl text-soil-medium max-w-[700px] mx-auto">
            Analyze your soil quality with just a photo. Get instant insights for better farming and gardening decisions.
          </p>
        </div>
        <Button 
          onClick={onStartAnalysis} 
          className="bg-plant-medium hover:bg-plant-dark text-white text-lg px-8 py-6"
        >
          Start Analysis
        </Button>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-soil-light flex items-center justify-center mb-2">
              <span className="text-white font-bold">1</span>
            </div>
            <p className="text-soil-medium">Upload Image</p>
          </div>
          <div className="w-8 h-0.5 bg-soil-light"></div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-soil-light flex items-center justify-center mb-2">
              <span className="text-white font-bold">2</span>
            </div>
            <p className="text-soil-medium">Process</p>
          </div>
          <div className="w-8 h-0.5 bg-soil-light"></div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-soil-light flex items-center justify-center mb-2">
              <span className="text-white font-bold">3</span>
            </div>
            <p className="text-soil-medium">Get Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
