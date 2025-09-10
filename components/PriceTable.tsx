import React, { useState } from 'react';
import { PRICING_DATA } from '../constants';
import PricingCard from './PricingCard';
import SalesPage from './SalesPage';
import PtRecommender from './PtRecommender';
import Questionnaire from './Questionnaire';
import type { PricingCategory } from '../types';

const PriceTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PricingCategory | null>(null);

  if (selectedCategory) {
    const isSalesPage = selectedCategory.title === '번랩 피트니스 알아보기';
    const isPtRecommender = selectedCategory.title === '트레이닝 데이터 기반 적합도 확인';
    const isQuestionnaire = selectedCategory.title === '운동 기초 설문지';
    const isPricingCard = !isSalesPage && !isPtRecommender && !isQuestionnaire;

    const handleShowPlan = (title: string) => {
        const category = PRICING_DATA.find(c => c.title === title);
        if (category) {
            setSelectedCategory(category);
        }
    };

    return (
      <section className="animate-fade-in">
        <div className="mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-lg"
            aria-label="Go back to category selection"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>뒤로가기</span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            {isSalesPage && <SalesPage onGoToPlans={() => setSelectedCategory(null)} />}
            {isPtRecommender && <PtRecommender onBack={() => setSelectedCategory(null)} onShowPlan={handleShowPlan} />}
            {isQuestionnaire && <Questionnaire onBack={() => setSelectedCategory(null)} />}
            {isPricingCard && <PricingCard category={selectedCategory} />}
          </div>
        </div>
      </section>
    );
  }

  const actionCategories = PRICING_DATA.filter(cat => !cat.plans && !cat.planGroups && !cat.ptPlans);
  const mainCategories = PRICING_DATA.filter(cat => cat.plans || cat.planGroups || cat.ptPlans);

  return (
    <section>
        {actionCategories.length > 0 && (
            <div className="mb-12 space-y-6">
                {actionCategories.map(category => (
                    <div
                        key={category.title}
                        className="bg-white border-2 border-orange-400 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedCategory(category)}
                    >
                        <div className="text-orange-400 mb-4 md:mb-0 md:mr-8 flex-shrink-0">{React.cloneElement(category.icon, { className: 'w-16 h-16' })}</div>
                        <div className="flex-grow">
                            <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                            <p className="mt-2 text-gray-600 text-lg">{category.description}</p>
                        </div>
                         <button
                            className="mt-6 md:mt-0 md:ml-8 w-full md:w-auto flex-shrink-0 bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-500 text-lg"
                            aria-label={`${category.title} 바로보기`}
                        >
                            바로가기
                        </button>
                    </div>
                ))}
            </div>
        )}

      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">상담을 원하시는 상품을 선택해주세요</h2>
        <p className="mt-4 text-xl text-gray-600">
          헬스, 요가, PT 중 원하시는 프로그램을 선택하시면 상세 가격을 안내해드립니다.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg hover:border-orange-300"
          >
            <div className="text-orange-400">{React.cloneElement(category.icon, { className: 'w-16 h-16 mb-4' })}</div>
            <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
            <p className="mt-4 text-gray-600 flex-grow text-lg">{category.description}</p>
            <button
              onClick={() => setSelectedCategory(category)}
              className="mt-6 w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500 text-lg"
              aria-label={`${category.title} 가격 바로보기`}
            >
              바로가기
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceTable;