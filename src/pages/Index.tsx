import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  // Circular progress component
  const CircularProgress = ({ 
    percentage, 
    color, 
    label, 
    size = 120 
  }: { 
    percentage: number; 
    color: string; 
    label: string; 
    size?: number; 
  }) => {
    const radius = (size - 16) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center space-y-3">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            className="transform -rotate-90"
          >
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#f3f4f6"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300 ease-in-out"
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {percentage}%
            </span>
          </div>
        </div>
        {/* Label */}
        <span className="text-sm font-medium text-gray-600">
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pt-8 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Привет, Анна!
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              28 июля 2025
            </p>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <Icon name="Settings" size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Metrics Dashboard */}
        <Card className="p-6 bg-white shadow-sm border-0">
          <div className="flex justify-between items-center space-x-8">
            <CircularProgress
              percentage={75}
              color="#10B981"
              label="Био"
            />
            <CircularProgress
              percentage={60}
              color="#2563EB"
              label="Психо"
            />
            <CircularProgress
              percentage={80}
              color="#F59E0B"
              label="Социо"
            />
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Icon name="Heart" size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Пульс</p>
                <p className="text-lg font-semibold text-gray-900">72 уд/мин</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon name="Brain" size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Настроение</p>
                <p className="text-lg font-semibold text-gray-900">7/10</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional metrics */}
        <div className="space-y-4">
          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Сон</span>
              <span className="text-sm text-gray-500">7ч 30м</span>
            </div>
            <Progress value={85} className="h-2" />
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Активность</span>
              <span className="text-sm text-gray-500">8,540 шагов</span>
            </div>
            <Progress value={68} className="h-2" />
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Вода</span>
              <span className="text-sm text-gray-500">1.8л / 2.5л</span>
            </div>
            <Progress value={72} className="h-2" />
          </Card>
        </div>

        {/* Main Action Button */}
        <div className="pt-6 pb-8">
          <Button 
            className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg"
            size="lg"
          >
            Пройти опросы
          </Button>
        </div>

        {/* Bottom Navigation Placeholder */}
        <div className="flex justify-around items-center py-4 bg-white rounded-2xl shadow-sm">
          <button className="p-3 rounded-xl bg-blue-600 text-white">
            <Icon name="Home" size={20} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:text-gray-600">
            <Icon name="BarChart3" size={20} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:text-gray-600">
            <Icon name="User" size={20} />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:text-gray-600">
            <Icon name="Settings" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}