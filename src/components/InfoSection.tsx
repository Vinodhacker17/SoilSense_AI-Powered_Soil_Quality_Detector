
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InfoSection = () => {
  const soilFactors = [
    {
      title: "Soil Texture",
      description: "The relative proportions of sand, silt, and clay particles that make up soil. Affects drainage, aeration, and nutrient retention.",
      icon: "🏝️"
    },
    {
      title: "Soil pH",
      description: "A measure of soil acidity or alkalinity. Most plants prefer a pH between 6.0 and 7.0. Affects nutrient availability.",
      icon: "⚗️"
    },
    {
      title: "Organic Matter",
      description: "Decomposed plant and animal material that improves soil structure, water retention, and provides nutrients.",
      icon: "🍂"
    },
    {
      title: "Soil Moisture",
      description: "The amount of water held in soil. Proper moisture levels are essential for plant growth and microbial activity.",
      icon: "💧"
    },
    {
      title: "Nutrient Content",
      description: "Essential elements like nitrogen, phosphorus, and potassium that plants need for growth and development.",
      icon: "🌱"
    },
    {
      title: "Soil Structure",
      description: "How soil particles are arranged into aggregates. Good structure improves water infiltration and root growth.",
      icon: "🧱"
    }
  ];

  return (
    <div className="w-full py-16 bg-soil-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-soil-dark mb-4">
            Understanding Soil Quality
          </h2>
          <p className="text-lg text-soil-medium">
            Soil quality is determined by various factors that affect plant growth and ecosystem health. 
            Our analysis helps you understand these key components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soilFactors.map((factor, index) => (
            <Card key={index} className="soil-card border-none">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{factor.icon}</div>
                <CardTitle className="text-xl text-soil-dark">{factor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-soil-medium text-base">
                  {factor.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-soil-dark mb-4">
            Why Soil Analysis Matters
          </h3>
          <p className="text-lg text-soil-medium mb-6">
            Proper soil analysis helps you make informed decisions about fertilization, 
            crop selection, and sustainable land management practices.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <blockquote className="italic text-soil-medium">
              "The nation that destroys its soil destroys itself."
              <footer className="text-right mt-2 font-semibold">- Franklin D. Roosevelt</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
