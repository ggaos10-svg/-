import React from 'react';
import type { PricingCategory } from './types';

const DumbbellIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const YogaIcon: React.FC<{className: string}> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PTIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const StarIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const WandIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4m10-4l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);


const ClipboardListIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);


export const PRICING_DATA: PricingCategory[] = [
  {
    title: '트레이닝 데이터 기반 적합도 확인',
    icon: <WandIcon className="w-10 h-10" />,
    description: '개인 데이터와 운동 목표를 입력하여 AI가 분석한 최적의 PT 플랜과 성공 가능성을 확인해보세요.',
  },
  {
    title: '운동 기초 설문지',
    icon: <ClipboardListIcon className="w-10 h-10" />,
    description: '운동 시작 전, 당신의 몸에 대해 알려주세요. 맞춤형 플랜 설계에 큰 도움이 됩니다.',
  },
  {
    title: '번랩 피트니스 알아보기',
    icon: <StarIcon className="w-10 h-10" />,
    description: '회원님들의 놀라운 변화와 생생한 후기를 직접 확인해보세요.',
  },
  {
    title: '헬스 회원권',
    icon: <DumbbellIcon className="w-10 h-10" />,
    description: '최신 기구와 쾌적한 환경에서 자유롭게 운동하세요. 모든 시설 이용이 가능합니다.',
    plans: [
      {
        term: '12개월',
        price: 850000,
        note: '정상가 월 71,000원',
        discountedPrice: 708000,
        discountedNote: '혜택가 월 59,000원',
        reviewDiscountPrice: 698000,
        reviewDiscountNote: '최종혜택가 월 58,167원',
        benefits: [
            '전문 트레이너 무료 PT 1회',
            'AI 머신 운동 루틴/가이드 제공',
            '운동복/수건 무료 제공',
            '회원권 정지 가능',
            '회원권 양도 가능',
        ],
      },
      {
        term: '6개월',
        price: 470000,
        note: '정상가 월 79,000원',
        isPopular: true,
        discountedPrice: 408000,
        discountedNote: '혜택가 월 68,000원',
        reviewDiscountPrice: 403000,
        reviewDiscountNote: '최종혜택가 월 67,167원',
        benefits: [
            '전문 트레이너 무료 PT 1회',
            'AI 머신 운동 루틴/가이드 제공',
        ],
      },
      {
        term: '3개월',
        price: 248000,
        note: '정상가 월 83,000원',
        discountedPrice: 225000,
        discountedNote: '혜택가 월 75,000원',
        benefits: [
            '전문 트레이너 무료 PT 1회',
        ],
      },
    ],
  },
  {
    title: '요가 회원권',
    icon: <YogaIcon className="w-10 h-10" />,
    description: '전문 강사진과 함께 심신의 안정을 찾으세요. 다양한 시간대의 클래스가 준비되어 있습니다.',
    planGroups: [
      {
        title: '12개월',
        plans: [
          { term: '240회', price: 1800000, perSessionPrice: 7500 },
          { term: '144회', price: 1584000, perSessionPrice: 11000, isPopular: true },
          { term: '96회', price: 1440000, perSessionPrice: 15000 },
        ],
      },
      {
        title: '6개월',
        plans: [
          { term: '120회', price: 1260000, perSessionPrice: 10500 },
          { term: '72회', price: 1150000, perSessionPrice: 15900, isPopular: true },
          { term: '48회', price: 960000, perSessionPrice: 20000 },
        ],
      },
      {
        title: '3개월',
        plans: [
          { term: '60회', price: 790000, perSessionPrice: 13100 },
          { term: '36회', price: 700000, perSessionPrice: 19400 },
          { term: '24회', price: 600000, perSessionPrice: 25000 },
        ],
      },
    ]
  },
  {
    title: 'PT (개인 트레이닝)',
    icon: <PTIcon className="w-10 h-10" />,
    description: '1:1 맞춤형 지도를 통해 가장 효과적으로 목표를 달성하세요. 체계적인 관리를 제공합니다.',
    ptPlans: [
      {
        sessions: '100회',
        normalPrice: 5500000,
        normalPerSession: 55000,
        premiumPrice: 6600000,
        premiumPerSession: 66000,
      },
      {
        sessions: '50회',
        normalPrice: 3300000,
        normalPerSession: 66000,
        premiumPrice: 3850000,
        premiumPerSession: 77000,
      },
      {
        sessions: '30회',
        normalPrice: 2178000,
        normalPerSession: 72600,
        premiumPrice: 2640000,
        premiumPerSession: 88000,
        isPopular: true,
      },
      {
        sessions: '20회',
        normalPrice: 1540000,
        normalPerSession: 77000,
        premiumPrice: 1760000,
        premiumPerSession: 88000,
      },
      {
        sessions: '10회',
        normalPrice: 770000,
        normalPerSession: 77000,
        premiumPrice: 880000,
        premiumPerSession: 88000,
      },
    ],
  },
];