
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageSelected: (image: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      toast.error('Please select an image file');
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image file size must be less than 5MB');
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Pass the file to the parent component
    onImageSelected(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileSelect(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileSelect(event.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging ? "border-plant-medium bg-plant-light/10" : "border-soil-light"
        } ${!previewUrl ? "cursor-pointer" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!previewUrl ? triggerFileInput : undefined}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          data-testid="file-input"
        />

        {previewUrl ? (
          <div className="space-y-4">
            <img 
              src={previewUrl} 
              alt="Soil preview" 
              className="max-h-64 mx-auto rounded-md"
            />
            <div className="flex justify-center space-x-3">
              <Button 
                variant="outline" 
                onClick={triggerFileInput}
                className="border-soil-medium text-soil-medium hover:bg-soil-light/10"
              >
                Change Image
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-8">
            <div className="mx-auto w-12 h-12 mb-4 text-soil-medium">
              <Image size={48} />
            </div>
            <p className="text-lg font-medium mb-2 text-soil-dark">
              Drag & Drop or Click to Upload
            </p>
            <p className="text-sm text-soil-medium">
              Upload a clear image of your soil for analysis
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Supported formats: JPG, PNG, WebP (Max 5MB)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
