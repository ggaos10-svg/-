import React, { useState } from 'react';

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const BadgeCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

const ChatAlt2Icon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h1m6 4l-2-2m0 0l-2 2m2-2v6" />
    </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);


interface SalesPageProps {
  onGoToPlans: () => void;
}

const SalesPage: React.FC<SalesPageProps> = ({ onGoToPlans }) => {
    const [openWhyUsIndex, setOpenWhyUsIndex] = useState<number | null>(0);

    const concerns = [
        {
            title: "운동, 어떻게 시작해야 할지 막막해요.",
            description: "유튜브를 봐도 뭘 따라해야 할지 모르겠고, 기구 사용법도 어려워요."
        },
        {
            title: "헬스장에 돈만 기부하고 있어요.",
            description: "큰맘 먹고 등록했지만, 작심삼일로 끝나고 가는 날보다 안 가는 날이 많아요."
        },
        {
            title: "열심히 하는데 몸의 변화가 없어요.",
            description: "나름대로 열심히 하는데, 눈에 띄는 변화가 없어서 동기부여가 안돼요."
        },
        {
            title: "혼자서는 재미도 없고 의지가 약해져요.",
            description: "함께 운동할 친구도 없고, 매번 같은 운동만 하니 금방 지루해져요."
        },
        {
            title: "PT 가격이 부담스러워 망설여져요.",
            description: "효과가 있을지 확신도 없는데, 큰 돈을 쓰기에는 부담스러워요."
        }
    ];
    
    const testimonials = [
      {
        rating: 5,
        quote: "시설이 정말 깨끗하고 관리가 잘 되어있어서 올 때마다 기분이 좋아요. 트레이너 선생님들도 항상 친절하게 자세를 봐주셔서 큰 도움이 됩니다.",
        author: "이지은님 (헬스 12개월)",
        isFeatured: false,
      },
      {
        rating: 5,
        quote: "PT 가격이 아깝지 않아요. 단순히 운동만 가르쳐주는 게 아니라 제 생활 습관 전체를 바꿔주셨습니다. 덕분에 바디프로필 성공!",
        author: "최현우님 (PT 50회)",
        isFeatured: true,
      },
       {
        rating: 5,
        quote: "나이가 들어서 운동을 시작하기 두려웠는데, 선생님께서 제 몸 상태에 맞춰 차근차근 알려주셔서 자신감이 붙었어요. 요즘은 하루하루 몸이 가벼워지는 게 느껴져요.",
        author: "정영희님 (프리미엄 PT 20회)",
        isFeatured: false,
      },
      {
        rating: 5,
        quote: "운동 정체기가 와서 힘들었는데, 트레이너님이 새로운 루틴을 짜주시고 식단도 꼼꼼히 봐주신 덕분에 다시 변화가 보이기 시작했어요. 혼자였다면 포기했을 거예요.",
        author: "박서준님 (PT 30회)",
        isFeatured: false,
      },
      {
        rating: 5,
        quote: "사람 많은 헬스장은 처음이라 걱정했는데, 분위기가 너무 좋고 다들 자기 운동에 집중해서 편하게 운동할 수 있었어요. 특히 AI 머신이 자세를 잡아줘서 신기하고 재밌어요.",
        author: "김민지님 (헬스 3개월)",
        isFeatured: false,
      },
      {
        rating: 5,
        quote: "다양한 요가 수업이 있어서 지루할 틈이 없어요. 특히 아침 요가 수업은 하루를 상쾌하게 시작하게 해주는 활력소예요.",
        author: "윤서아님 (요가 6개월)",
        isFeatured: false,
      },
    ];

    const whyUsItems = [
      {
        icon: <SparklesIcon className="w-8 h-8"/>,
        title: "✨ 3개월 후, 달라진 당신을 상상해보세요.",
        description: "회원님이 오늘 시작하시면 3개월 뒤, 6개월 뒤 거울 앞에서 변화된 자기 모습을 상상해보세요. 혹은 정말 나와 딱 맞는 트레이너와 함께 세달 만에 몸이 확 달라진다면 어떠시겠어요? 상상해보세요. 주변 사람들이 '살 많이 빠졌다. 탄탄해졌다' 라고 말해준다면 어떠시겠어요?",
      },
      {
        icon: <BadgeCheckIcon className="w-8 h-8"/>,
        title: "🏆 '회원권'이 아닌 '자신감'을 얻는 과정",
        description: "사실 회원님이 선택하는건 단순한 3개월권, 6개월권, 12개월권이 아닙니다. 3개월뒤 6개월뒤, '아 기간 끝났네?' 가 아닌 '꾸준히 해냈다' 라는 자신감을 사시는것입니다.",
      },
      {
        icon: <ChatAlt2Icon className="w-8 h-8"/>,
        title: "💬 '시간'이 아닌 '경험'에 투자하세요.",
        description: "회원님이 투자하시는건 트레이너의 시간 10회, 10시간이 아닌 3개월 후 주변 사람들에게 '진짜 달라졌다' 라는 말을 듣는 경험을 사시는 것입니다.",
      },
      {
        icon: <ShieldCheckIcon className="w-8 h-8"/>,
        title: "🛡️ 성공을 넘어, '실패하지 않는 선택'",
        description: "피티는 사실 트레이너를 어떻게 만나느냐에 따라 결과가 완전히 달라집니다. 저희 번랩은 성공하는 피티가 아닌 '실패하지 않는 선택'임을 자신합니다.",
      }
    ];

    const handleToggleWhyUs = (index: number) => {
        setOpenWhyUsIndex(openWhyUsIndex === index ? null : index);
    };


  return (
    <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 mb-16">
      {/* 1. Hero Section */}
      <section className="text-center py-10 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
          인생을 바꾸는 가장 확실한 투자,
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          번랩피트니스에서 시작하세요.
        </h3>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          결과가 증명합니다. 단순한 헬스장이 아닌, 당신의 삶을 변화시킬 공간입니다.
        </p>
         <div className="mt-8">
            <button
                onClick={onGoToPlans}
                className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-50 focus:ring-orange-500"
                aria-label="가격 플랜 보러가기"
            >
                가격 플랜 보러가기
            </button>
        </div>
      </section>

      {/* 2. Problem/Agitation Section */}
      <section className="mt-16 text-center">
          <h3 className="text-4xl font-bold text-gray-900">혹시, 이런 고민 하고 계신가요?</h3>
          <div className="mt-8">
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {concerns.map((concern, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-lg border border-gray-200 text-left">
                  <p className="font-semibold text-xl">"{concern.title}"</p>
                  <p className="mt-2 text-lg text-gray-600">{concern.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* 3. Why Us / Solution Section */}
      <section className="mt-16 bg-gray-900 text-white rounded-lg py-12 px-8">
        <h3 className="text-4xl font-bold text-center">그렇다면, 번랩피트니스가 정답입니다.</h3>
        <p className="text-center text-gray-300 mt-2 max-w-3xl mx-auto text-lg">회원님이 투자하는 것은 단순한 시간이 아닌, '완전히 달라진 삶'에 대한 경험입니다.</p>
        <div className="mt-10 max-w-4xl mx-auto space-y-4">
            {whyUsItems.map((item, index) => (
                 <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
                    <button
                        onClick={() => handleToggleWhyUs(index)}
                        className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-gray-700"
                        aria-expanded={openWhyUsIndex === index}
                    >
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 text-orange-400">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-xl text-white">{item.title}</h4>
                        </div>
                        <div className="flex-shrink-0">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`w-6 h-6 transform transition-transform duration-300 ${openWhyUsIndex === index ? 'rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openWhyUsIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="px-6 pb-6">
                            <p className="ml-12 text-base text-gray-300">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>


       {/* 4. Testimonials Section */}
      <section className="mt-16">
        <h3 className="text-4xl font-bold text-center text-gray-900">회원님들이 직접 말하는 번랩피트니스</h3>
        <p className="text-center text-lg text-gray-600 mt-2">생생한 리얼 후기</p>
        <div className="mt-8">
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-80 md:w-96 bg-gray-50 p-6 rounded-lg border flex flex-col justify-between ${testimonial.isFeatured ? 'border-2 border-orange-400' : 'border-gray-200'}`}
                >
                  <div>
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="mt-4 text-gray-700 min-h-[9rem] text-lg">"{testimonial.quote}"</blockquote>
                  </div>
                  <p className="mt-4 font-bold text-right text-lg">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="mt-16">
        <h3 className="text-4xl font-bold text-center text-gray-900">자주 묻는 질문</h3>
        <p className="text-center text-lg text-gray-600 mt-2">궁금한 점을 해결해 드립니다.</p>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
            <details className="p-4 rounded-lg bg-gray-50 border cursor-pointer">
                <summary className="font-semibold text-lg">운동을 전혀 해본 적 없는 초보자도 괜찮을까요?</summary>
                <p className="mt-2 text-lg text-gray-600">물론입니다. 번랩피트니스는 개인의 체력 수준과 목표에 맞는 1:1 맞춤형 프로그램을 제공하여, 초보자도 부상 없이 안전하고 효과적으로 운동을 시작할 수 있도록 도와드립니다.</p>
            </details>
            <details className="p-4 rounded-lg bg-gray-50 border cursor-pointer">
                <summary className="font-semibold text-lg">샤워 시설이나 주차 공간은 잘 되어 있나요?</summary>
                <p className="mt-2 text-lg text-gray-600">네, 쾌적하고 넓은 샤워 시설과 락커룸이 완비되어 있으며, 넉넉한 주차 공간을 확보하여 회원님들이 편안하게 시설을 이용하실 수 있습니다.</p>
            </details>
             <details className="p-4 rounded-lg bg-gray-50 border cursor-pointer">
                <summary className="font-semibold text-lg">회원권을 중간에 일시정지 할 수 있나요?</summary>
                <p className="mt-2 text-lg text-gray-600">네, 장기 회원권의 경우 출장, 여행 등의 사유로 일정 기간 회원권 정지가 가능합니다. 자세한 규정은 데스크에 문의해주세요.</p>
            </details>
        </div>
      </section>
      
      {/* 6. Final CTA Section */}
      <section className="mt-16 text-center py-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg">
        <h3 className="text-4xl font-bold text-white">망설일 시간이 없습니다.</h3>
        <p className="mt-3 text-xl text-white max-w-2xl mx-auto">
            당신의 가장 건강하고 멋진 모습, 번랩피트니스에서 만들어 드립니다.
        </p>
        <div className="mt-8">
            <button
                onClick={onGoToPlans}
                className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg text-xl hover:bg-gray-100 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white"
                aria-label="가격 플랜 바로보기"
            >
                가격 플랜 바로가기
            </button>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;