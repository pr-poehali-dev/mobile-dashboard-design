import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const surveyData = [
    {
      category: "Сон",
      icon: "Moon",
      color: "blue",
      questions: [
        {
          id: "sleep_hours",
          question: "Сколько часов ты спал прошлой ночью?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "sleep_quality",
          question: "Насколько качественным был твой сон?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "sleep_fall_asleep",
          question: "Как быстро ты заснул?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "sleep_wake_time",
          question: "Во сколько ты проснулся?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "sleep_night_waking",
          question: "Просыпался ли ты ночью?",
          type: "binary",
          options: ["Нет", "Да"]
        }
      ]
    },
    {
      category: "Настроение",
      icon: "Smile",
      color: "yellow",
      questions: [
        {
          id: "mood_today",
          question: "Какое у тебя сегодня настроение?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "mood_stress",
          question: "Чувствуешь ли ты стресс?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "mood_irritated",
          question: "Раздражён ли ты сегодня?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "mood_motivation",
          question: "Насколько ты мотивирован сегодня?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "mood_anxiety",
          question: "Чувствуешь ли ты тревогу?",
          type: "binary",
          options: ["Нет", "Да"]
        }
      ]
    },
    {
      category: "Энергия",
      icon: "Zap",
      color: "green",
      questions: [
        {
          id: "energy_level",
          question: "Сколько у тебя энергии сейчас?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "energy_focus",
          question: "Насколько хорошо ты можешь сосредоточиться?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "energy_tired",
          question: "Чувствуешь ли ты усталость?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "energy_crash",
          question: "Была ли у тебя \"энергетическая яма\" днём?",
          type: "binary",
          options: ["Нет", "Да"]
        }
      ]
    },
    {
      category: "Питание",
      icon: "Apple",
      color: "orange",
      questions: [
        {
          id: "nutrition_balanced",
          question: "Насколько сбалансировано ты питался?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "nutrition_meals",
          question: "Сколько приёмов пищи у тебя было?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "nutrition_overeating",
          question: "Переедал ли ты сегодня?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "nutrition_water",
          question: "Достаточно ли ты выпил воды?",
          type: "binary",
          options: ["Нет", "Да"]
        }
      ]
    },
    {
      category: "Физическая активность",
      icon: "Activity",
      color: "red",
      questions: [
        {
          id: "activity_sport",
          question: "Занимался ли ты спортом сегодня?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "activity_steps",
          question: "Сколько шагов ты прошёл?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "activity_stretching",
          question: "Делал ли ты растяжку?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "activity_active_day",
          question: "Насколько активным был твой день?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        }
      ]
    },
    {
      category: "Социальные контакты",
      icon: "Users",
      color: "purple",
      questions: [
        {
          id: "social_communication",
          question: "Общался ли ты с кем-то сегодня?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "social_pleasant",
          question: "Насколько приятным было общение?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        },
        {
          id: "social_conflicts",
          question: "Были ли у тебя конфликты?",
          type: "binary",
          options: ["Нет", "Да"]
        }
      ]
    },
    {
      category: "Привычки",
      icon: "CheckCircle",
      color: "indigo",
      questions: [
        {
          id: "habits_smoking",
          question: "Курил ли ты сегодня?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "habits_alcohol",
          question: "Употреблял ли ты алкоголь?",
          type: "binary",
          options: ["Нет", "Да"]
        },
        {
          id: "habits_screen_time",
          question: "Сколько времени ты провёл за экранами?",
          type: "scale",
          options: ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Очень хорошо"]
        },
        {
          id: "habits_productivity",
          question: "Насколько продуктивным был твой день?",
          type: "scale",
          options: ["Плохо", "Нормально", "Хорошо"]
        }
      ]
    }
  ];

  const currentSurvey = surveyData[currentCategory];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = currentSurvey?.questions[currentQuestionIndex];

  const handleAnswer = (answer: string, answerIndex: number) => {
    const questionId = currentQuestion.id;
    setAnswers(prev => ({
      ...prev,
      [questionId]: { answer, value: answerIndex }
    }));

    if (currentQuestionIndex < currentSurvey.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentCategory < surveyData.length - 1) {
      setCurrentCategory(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      setShowSurvey(false);
      setCurrentCategory(0);
      setCurrentQuestionIndex(0);
      alert("Опрос завершён! Спасибо за ответы.");
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  if (showSurvey && currentSurvey && currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Survey Header */}
          <div className="flex items-center justify-between pt-8 pb-4">
            <button 
              onClick={() => setShowSurvey(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} className="text-gray-600" />
            </button>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-900">{currentSurvey.category}</h2>
              <p className="text-sm text-gray-500">
                {currentQuestionIndex + 1} из {currentSurvey.questions.length}
              </p>
            </div>
            <div className="w-8"></div>
          </div>

          {/* Progress */}
          <div className="px-2">
            <Progress 
              value={((currentQuestionIndex + 1) / currentSurvey.questions.length) * 100} 
              className="h-2" 
            />
          </div>

          {/* Question Card */}
          <Card className="p-6 bg-white shadow-sm border-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-lg ${getColorClasses(currentSurvey.color)}`}>
                <Icon name={currentSurvey.icon as any} size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentQuestion.question}
                </h3>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option, index)}
                  className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-transparent hover:border-gray-200"
                >
                  <span className="text-gray-900 font-medium">{option}</span>
                </button>
              ))}
            </div>
          </Card>

          {/* Category Progress */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Категория {currentCategory + 1} из {surveyData.length}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
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
            onClick={() => setShowSurvey(true)}
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