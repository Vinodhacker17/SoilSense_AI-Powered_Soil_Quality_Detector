
import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export interface SoilAnalysisResult {
  overallQuality: number;
  ph: number;
  fertility: number;
  moisture: number;
  organicMatter: number;
  recommendations: string[];
  suitableCrops: string[];
}

interface AnalysisResultProps {
  result: SoilAnalysisResult | null;
  isLoading: boolean;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-xl mx-auto py-8">
        <div className="soil-card p-6 space-y-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-soil-dark">Analyzing Soil Sample...</h3>
            <p className="text-soil-medium">Our AI is processing your soil image</p>
            <Progress value={65} className="h-2 bg-soil-light/30" />
            <div className="flex flex-col gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 bg-soil-light/20 rounded animate-pulse-slow" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const getQualityIndicator = (value: number) => {
    if (value >= 75) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    } else if (value >= 40) {
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    } else {
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getQualityText = (value: number) => {
    if (value >= 75) return "Good";
    if (value >= 40) return "Fair";
    return "Poor";
  };

  const getProgressColor = (value: number) => {
    if (value >= 75) return "bg-plant-medium";
    if (value >= 40) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-xl mx-auto py-8">
      <div className="soil-card p-6 space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-soil-light/20 mb-4">
            <span className="text-2xl font-bold text-soil-dark">{result.overallQuality}%</span>
          </div>
          <h3 className="text-2xl font-bold text-soil-dark">
            {getQualityText(result.overallQuality)} Soil Quality
          </h3>
          <p className="text-soil-medium mt-1">Overall assessment based on visual analysis</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-soil-dark">Soil Properties</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>pH Level</span>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span>{result.ph.toFixed(1)}</span>
                {getQualityIndicator(result.ph)}
              </div>
            </div>
            <Progress value={result.ph} className={`h-2 ${getProgressColor(result.ph)}`} />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>Fertility</span>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span>{getQualityText(result.fertility)}</span>
                {getQualityIndicator(result.fertility)}
              </div>
            </div>
            <Progress value={result.fertility} className={`h-2 ${getProgressColor(result.fertility)}`} />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>Moisture Content</span>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span>{getQualityText(result.moisture)}</span>
                {getQualityIndicator(result.moisture)}
              </div>
            </div>
            <Progress value={result.moisture} className={`h-2 ${getProgressColor(result.moisture)}`} />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>Organic Matter</span>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span>{getQualityText(result.organicMatter)}</span>
                {getQualityIndicator(result.organicMatter)}
              </div>
            </div>
            <Progress value={result.organicMatter} className={`h-2 ${getProgressColor(result.organicMatter)}`} />
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-soil-dark">Recommendations</h4>
          <ul className="list-disc list-inside text-soil-medium space-y-1">
            {result.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-soil-dark">Suitable Crops</h4>
          <div className="flex flex-wrap gap-2">
            {result.suitableCrops.map((crop, index) => (
              <span key={index} className="bg-plant-light/20 text-plant-dark px-3 py-1 rounded-full text-sm">
                {crop}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
