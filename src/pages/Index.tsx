
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ImageUploader from '@/components/ImageUploader';
import AnalysisResult, { SoilAnalysisResult } from '@/components/AnalysisResult';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<SoilAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const uploadSectionRef = useRef<HTMLDivElement>(null);

  const handleImageSelected = (image: File) => {
    setSelectedImage(image);
    setAnalysisResult(null);
  };

  const scrollToUploadSection = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const analyzeSoil = () => {
    if (!selectedImage) {
      toast.error('Please upload a soil image first');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result - in a real app, this would come from an API
      const mockResult: SoilAnalysisResult = {
        overallQuality: Math.floor(Math.random() * 30) + 60, // Random between 60-90
        ph: Math.floor(Math.random() * 3) + 5, // Random between 5-8
        fertility: Math.floor(Math.random() * 40) + 50, // Random between 50-90
        moisture: Math.floor(Math.random() * 40) + 50, // Random between 50-90
        organicMatter: Math.floor(Math.random() * 40) + 50, // Random between 50-90
        recommendations: [
          'Add compost to improve organic matter content',
          'Consider liming to adjust pH levels',
          'Implement crop rotation to improve soil structure',
          'Test for specific nutrient deficiencies'
        ],
        suitableCrops: [
          'Corn',
          'Soybeans',
          'Wheat',
          'Tomatoes',
          'Peppers',
          'Carrots'
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      toast.success('Soil analysis completed!');
    }, 3000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero onStartAnalysis={scrollToUploadSection} />
        
        <div 
          ref={uploadSectionRef}
          className="w-full py-16 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-soil-dark mb-4">
                Upload Your Soil Image
              </h2>
              <p className="text-lg text-soil-medium">
                Take a clear, well-lit photo of your soil sample and upload it below 
                for AI-powered analysis and recommendations.
              </p>
            </div>
            
            <ImageUploader onImageSelected={handleImageSelected} />
            
            <div className="flex justify-center mt-6">
              <Button 
                onClick={analyzeSoil}
                disabled={!selectedImage || isAnalyzing}
                className="bg-plant-medium hover:bg-plant-dark text-white text-lg px-8 py-2"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Soil'}
              </Button>
            </div>
          </div>
        </div>
        
        <AnalysisResult result={analysisResult} isLoading={isAnalyzing} />
        
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
