import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface PtRecommenderProps {
  onBack: () => void;
  onShowPlan: (title: string) => void;
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

interface Recommendation {
    recommendedSessions: number;
    recommendationTitle: string;
    reasoning: string;
}

const PtRecommender: React.FC<PtRecommenderProps> = ({ onBack, onShowPlan }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        goal: '',
        experience: '',
        frequency: '',
        concerns: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<Recommendation | null>(null);

    const isFormValid = Object.values(formData).every(value => value.trim() !== '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            setError('모든 항목을 입력해주세요.');
            return;
        }
        setError(null);
        setIsLoading(true);
        setResult(null);

        const prompt = `
            You are an expert personal trainer AI at 'BurnLab Fitness'. Your goal is to provide a personalized and encouraging recommendation for the number of PT sessions a new member should take.

            The available PT session packages are 10, 20, 30, 50, and 100 sessions.

            Analyze the user's information below:
            - Name: ${formData.name}
            - Age: ${formData.age}
            - Height: ${formData.height} cm
            - Weight: ${formData.weight} kg
            - Primary Goal: ${formData.goal}
            - Exercise Experience: ${formData.experience}
            - Desired Weekly Frequency: ${formData.frequency}
            - Health Concerns/Injuries: ${formData.concerns}

            Based on this information, return a JSON object with your recommendation. The reasoning should be professional, empathetic, and motivating, explaining *why* the recommended number of sessions is the best starting point for them to achieve their goals safely and effectively. The entire response must be in Korean.
        `;
        
        const responseSchema = {
          type: Type.OBJECT,
          properties: {
            recommendedSessions: {
              type: Type.INTEGER,
              description: '추천하는 PT 세션 횟수. 반드시 10, 20, 30, 50, 100 중 하나여야 합니다.'
            },
            recommendationTitle: {
              type: Type.STRING,
              description: '추천에 대한 짧고 매력적인 한글 제목. 예: "체계적인 변화를 위한 30회 플랜"'
            },
            reasoning: {
              type: Type.STRING,
              description: '사용자의 목표와 프로필을 연결하여 이 세션 횟수를 추천하는 이유에 대한 상세하고 격려가 되는 한글 설명.'
            }
          }
        };

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema,
                }
            });

            const jsonText = response.text.trim();
            const parsedResult: Recommendation = JSON.parse(jsonText);
            setResult(parsedResult);

        } catch (err) {
            console.error("Gemini API error:", err);
            setError("추천을 생성하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };
    
    if (result) {
        return (
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 animate-fade-in">
                 <div className="text-center py-10 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {formData.name}님을 위한 AI 추천 플랜은...
                    </h2>
                    <h3 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                        "{result.recommendationTitle}"
                    </h3>
                    <p className="mt-2 text-2xl font-semibold text-gray-700">{result.recommendedSessions}회 PT 프로그램</p>
                    <div className="mt-6 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-orange-200 text-left">
                        <p className="text-xl text-gray-700 whitespace-pre-wrap">{result.reasoning}</p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button
                            onClick={() => onShowPlan('PT (개인 트레이닝)')}
                            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-50 focus:ring-orange-500"
                        >
                            PT 가격 상세 보기
                        </button>
                        <button
                            onClick={() => setResult(null)}
                            className="text-gray-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors text-xl"
                        >
                            다시 추천받기
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-2">
                트레이닝 데이터 기반 적합도 확인
            </h2>
            <p className="text-center text-lg text-gray-600 mb-8">개인 데이터와 운동 목표를 기반으로 AI가 적합도를 분석해 드립니다.</p>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 p-6 bg-gray-50 rounded-lg border">
                    <h3 className="md:col-span-2 text-xl font-bold text-gray-700">1. 기본 정보</h3>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">이름</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-lg font-medium text-gray-700">나이</label>
                        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-lg font-medium text-gray-700">신장 (cm)</label>
                        <input type="number" name="height" id="height" value={formData.height} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-lg font-medium text-gray-700">체중 (kg)</label>
                        <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                </div>
                
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 p-6 bg-gray-50 rounded-lg border">
                    <h3 className="md:col-span-2 text-xl font-bold text-gray-700">2. 운동 목표 및 경험</h3>
                    <div>
                        <label htmlFor="goal" className="block text-lg font-medium text-gray-700">가장 중요한 운동 목표는 무엇인가요?</label>
                        <select name="goal" id="goal" value={formData.goal} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required>
                            <option value="">선택하세요</option>
                            <option value="체중 감량 (다이어트)">체중 감량 (다이어트)</option>
                            <option value="근력 및 근육량 증가">근력 및 근육량 증가</option>
                            <option value="체형 교정 (자세 개선)">체형 교정 (자세 개선)</option>
                            <option value="재활 및 통증 관리">재활 및 통증 관리</option>
                            <option value="전반적인 체력 향상">전반적인 체력 향상</option>
                            <option value="바디프로필 준비">바디프로필 준비</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="experience" className="block text-lg font-medium text-gray-700">운동 경험은 어느 정도인가요?</label>
                        <select name="experience" id="experience" value={formData.experience} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required>
                            <option value="">선택하세요</option>
                            <option value="전혀 없음 (완전 초보)">전혀 없음 (완전 초보)</option>
                            <option value="3개월 미만">3개월 미만</option>
                            <option value="6개월 이상">6개월 이상</option>
                            <option value="1년 이상 꾸준히">1년 이상 꾸준히</option>
                        </select>
                    </div>
                     <div className="md:col-span-2">
                        <label htmlFor="frequency" className="block text-lg font-medium text-gray-700">일주일에 몇 번 운동 가능하신가요?</label>
                        <select name="frequency" id="frequency" value={formData.frequency} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" required>
                            <option value="">선택하세요</option>
                            <option value="주 1-2회">주 1-2회</option>
                            <option value="주 3-4회">주 3-4회</option>
                            <option value="주 5회 이상">주 5회 이상</option>
                        </select>
                    </div>
                </div>

                 <div className="p-6 bg-gray-50 rounded-lg border">
                    <h3 className="text-xl font-bold text-gray-700">3. 건강 상태</h3>
                     <div>
                        <label htmlFor="concerns" className="block text-lg font-medium text-gray-700">특별히 불편하거나 통증이 있는 부위, 또는 기타 건강상 특이사항이 있다면 알려주세요.</label>
                        <textarea name="concerns" id="concerns" value={formData.concerns} onChange={handleChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" placeholder="예: 허리 디스크, 어깨 회전근개 부상, 고혈압 등 (없으시면 '없음'으로 기재해주세요)" required></textarea>
                    </div>
                </div>
                
                {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
                
                <div className="text-center pt-4">
                    <button type="submit" disabled={isLoading || !isFormValid} className="w-full md:w-auto bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl hover:bg-orange-500 transition-colors disabled:bg-orange-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center justify-center mx-auto">
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                AI가 분석 중...
                            </>
                        ) : 'AI로 적합도 분석하기'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PtRecommender;