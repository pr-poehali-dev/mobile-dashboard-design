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

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon name="Moon" size={24} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Сон</span>
              <span className="text-lg font-bold text-gray-900">85%</span>
              <Progress value={85} className="h-2 w-full" />
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Icon name="Smile" size={24} className="text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Настроение</span>
              <span className="text-lg font-bold text-gray-900">70%</span>
              <Progress value={70} className="h-2 w-full" />
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Icon name="Zap" size={24} className="text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Энергия</span>
              <span className="text-lg font-bold text-gray-900">60%</span>
              <Progress value={60} className="h-2 w-full" />
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Icon name="Apple" size={24} className="text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Питание</span>
              <span className="text-lg font-bold text-gray-900">75%</span>
              <Progress value={75} className="h-2 w-full" />
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-red-100 rounded-lg">
                <Icon name="Activity" size={24} className="text-red-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Физ. активность</span>
              <span className="text-lg font-bold text-gray-900">80%</span>
              <Progress value={80} className="h-2 w-full" />
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-0">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Icon name="Users" size={24} className="text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Соц. контакты</span>
              <span className="text-lg font-bold text-gray-900">65%</span>
              <Progress value={65} className="h-2 w-full" />
            </div>
          </Card>
        </div>

        {/* Habits Card */}
        <Card className="p-4 bg-white shadow-sm border-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-indigo-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Привычки</span>
            </div>
            <span className="text-lg font-bold text-gray-900">90%</span>
          </div>
          <Progress value={90} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">5 из 6 привычек выполнено сегодня</p>
        </Card>

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