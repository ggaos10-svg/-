import React, { useState } from 'react';

interface ProductFinderProps {
  onBack: () => void;
  onShowPlan: (title: string) => void;
}

const ProgressBar: React.FC<{ step: number; totalSteps: number }> = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
      <div
        className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

interface StepProps {
    title: string;
    options: string[];
    options2?: string[];
    onSelect: (value: string) => void;
    onSelect2?: (value: string) => void;
}

const Step: React.FC<StepProps> = ({ title, options, options2, onSelect, onSelect2 }) => {
    return (
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h3>
            <div className={`mt-8 grid ${options.length > 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'} gap-4 max-w-3xl mx-auto`}>
                {options.map(opt => (
                    <button key={opt} onClick={() => onSelect(opt)} className="p-4 md:p-6 border-2 border-gray-200 rounded-lg text-xl font-semibold text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
                        {opt}
                    </button>
                ))}
            </div>
             {options2 && (
                 <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {options2.map(opt => (
                        <button key={opt} onClick={() => onSelect2?.(opt)} className="p-4 md:p-6 border-2 border-gray-200 rounded-lg text-xl font-semibold text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

interface MultiSelectStepProps {
    title: string;
    options: string[];
    selectedOptions: string[];
    onSelect: (value: string) => void;
    onNext: () => void;
}

const MultiSelectStep: React.FC<MultiSelectStepProps> = ({ title, options, selectedOptions, onSelect, onNext }) => {
    return (
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-lg text-gray-500">해당하는 모든 항목을 선택해주세요.</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {options.map(opt => {
                    const isSelected = selectedOptions.includes(opt);
                    return (
                        <button 
                            key={opt} 
                            onClick={() => onSelect(opt)} 
                            className={`p-4 md:p-5 border-2 rounded-lg text-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                                isSelected 
                                ? 'bg-orange-500 text-white border-orange-500' 
                                : 'border-gray-200 text-gray-700 hover:bg-orange-100 hover:border-orange-200'
                            }`}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>
            <div className="mt-10">
                 <button
                    onClick={onNext}
                    className="bg-orange-600 text-white font-bold py-3 px-12 rounded-lg text-xl hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                    결과 보기
                </button>
            </div>
        </div>
    )
}

const ResultView: React.FC<{ result: { title: string; specificPlan: string; reason: string } | null, onShowPlan: (title: string) => void, onReset: () => void }> = ({ result, onShowPlan, onReset }) => {
    if (!result) return null;

    return (
        <div className="text-center py-10 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
             <h2 className="text-3xl font-bold text-gray-800">
                회원님을 위한 최적의 플랜은...
            </h2>
            <h3 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                "{result.specificPlan}"
            </h3>
            <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg border border-orange-200">
                <p className="text-xl text-gray-700">{result.reason}</p>
            </div>
             <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                    onClick={() => onShowPlan(result.title)}
                    className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-50 focus:ring-orange-500"
                >
                    '{result.title}' 상세 가격 보기
                </button>
                <button
                    onClick={onReset}
                    className="text-gray-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors text-xl"
                >
                    다시 추천받기
                </button>
            </div>
        </div>
    )
}

const ProductFinder: React.FC<ProductFinderProps> = ({ onBack, onShowPlan }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    goal: '',
    experience: '',
    concerns: [] as string[],
  });
  const [result, setResult] = useState<{ title: string; specificPlan: string; reason: string } | null>(null);

  const totalSteps = 4;

  const handleNext = () => setStep((prev) => prev + 1);

  const handleSelect = (field: keyof Omit<typeof formData, 'concerns'>, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(handleNext, 300);
  };
  
  const handleConcernSelect = (concern: string) => {
    setFormData(p => {
        const currentConcerns = p.concerns;
        if (concern === '없음') {
            return { ...p, concerns: currentConcerns.includes('없음') ? [] : ['없음'] };
        }
        
        let newConcerns = currentConcerns.filter(c => c !== '없음');
        if (newConcerns.includes(concern)) {
            newConcerns = newConcerns.filter(c => c !== concern);
        } else {
            newConcerns.push(concern);
        }
        return { ...p, concerns: newConcerns };
    });
  };

  const calculateResult = () => {
    const { goal, experience, concerns: rawConcerns } = formData;
    const concerns = rawConcerns.filter(c => c !== '없음');

    let recommendation = {
      title: '헬스 회원권',
      specificPlan: '헬스 6개월 플랜',
      reason: '운동 경험이 있으시니 6개월 회원권으로 다시 꾸준한 습관을 만들어보세요. 다양한 최신 기구들이 운동의 재미를 더해줄 것입니다.',
    };

    if (goal === '재활' || concerns.length >= 2 || (goal === '체형 교정' && concerns.length > 0)) {
      recommendation = {
        title: 'PT (개인 트레이닝)',
        specificPlan: '프리미엄 PT 50회',
        reason: '재활, 체형 교정 또는 여러 부위의 불편함 개선을 위해서는 전문가의 장기적이고 체계적인 프리미엄 케어가 가장 효과적입니다. 50회 세션을 통해 근본적인 원인을 해결하고 건강한 신체를 되찾으세요.',
      };
    } else if ((goal === '체중 감량' || goal === '근력 증가') && (experience === '운동 완전 처음' || experience === '가끔 하는 편')) {
       recommendation = {
        title: 'PT (개인 트레이닝)',
        specificPlan: '노멀 PT 30회',
        reason: '운동 초보자에게는 올바른 자세와 방법으로 기본기를 다지는 것이 가장 중요합니다. 30회 PT를 통해 부상 위험 없이 가장 효과적으로 목표를 달성해보세요.',
      };
    } else if (concerns.length === 1) {
       recommendation = {
        title: 'PT (개인 트레이닝)',
        specificPlan: '노멀 PT 20회',
        reason: '특정 부위의 불편함을 집중적으로 관리하고 싶으시군요. 20회 PT를 통해 통증을 완화하고 주변 근력을 강화하여 문제를 개선할 수 있습니다.',
      };
    } else if (goal === '스트레스 해소' || goal === '유연성 향상') {
      recommendation = {
        title: '요가 회원권',
        specificPlan: '요가 6개월 / 주 3회',
        reason: '심신의 안정과 스트레스 해소를 위해서는 꾸준한 수련이 중요합니다. 6개월간 주 3회 요가를 통해 건강한 습관을 만들고 활력을 되찾으세요.',
      };
    } else if (experience === '꾸준히 하는 중') {
      recommendation = {
        title: '헬스 회원권',
        specificPlan: '헬스 12개월 플랜',
        reason: '이미 꾸준히 운동을 하고 계시군요! 12개월 플랜으로 가장 경제적으로 최고의 시설을 이용하며 운동 루틴을 이어가세요.',
      };
    }
    
    setResult(recommendation);
    handleNext();
  };

  const initialFormState = {
    gender: '',
    age: '',
    goal: '',
    experience: '',
    concerns: [] as string[],
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step title="성별과 연령대를 선택해주세요." options={['남성', '여성']} options2={['20대', '30대', '40대', '50대 이상']} onSelect={(val) => setFormData(p => ({...p, gender: val}))} onSelect2={(val) => { setFormData(p => ({...p, age: val})); setTimeout(handleNext, 300); }} />;
      case 2:
        return <Step title="가장 중요한 운동 목표는 무엇인가요?" options={['체중 감량', '근력 증가', '체력 향상', '유연성 향상', '체형 교정', '재활', '스트레스 해소']} onSelect={(val) => handleSelect('goal', val)} />;
      case 3:
        return <Step title="현재 운동 경험은 어느 정도이신가요?" options={['운동 완전 처음', '가끔 하는 편', '꾸준히 하는 중']} onSelect={(val) => handleSelect('experience', val)} />;
      case 4:
         return <MultiSelectStep 
            title="특별히 불편하거나 아픈 곳이 있나요? (중복 선택 가능)" 
            options={['없음', '목', '어깨', '허리', '손목/팔꿈치', '무릎', '발목']} 
            selectedOptions={formData.concerns}
            onSelect={handleConcernSelect}
            onNext={calculateResult}
        />
      case 5:
        return <ResultView result={result} onShowPlan={onShowPlan} onReset={() => {setStep(1); setResult(null); setFormData(initialFormState);}}/>
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 md:p-8">
        {!result && (
             <div className="max-w-xl mx-auto text-center">
                 <ProgressBar step={step} totalSteps={totalSteps} />
             </div>
        )}
        <div className="animate-fade-in">
            {renderStep()}
        </div>
    </div>
  );
};

export default ProductFinder;