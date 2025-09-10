import React from 'react';
import Header from './components/Header';
import PriceTable from './components/PriceTable';

const CreditCardIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const BankIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h1v5h-1z" />
  </svg>
);

const UsersIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 3a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

const App: React.FC = () => {

  const installmentPlans = [
    { name: 'BC카드', period: '2~5개월' },
    { name: 'NH농협카드', period: '2~6개월' },
    { name: '롯데카드', period: '2~5개월' },
    { name: '삼성카드', period: '2~3개월' },
    { name: 'KB국민카드', period: '2~5개월' },
    { name: '하나카드', period: '2~5개월' },
    { name: '현대카드', period: '2~3개월' },
    { name: '신한카드', period: '2~3개월' },
    { name: '우리카드', period: '2~5개월' },
  ];

  const trainers = [
    { name: '유지인', link: 'https://ibb.co/M5sF2hD5' },
    { name: '성도윤', link: 'https://ibb.co/Gfyhd8ZJ' },
    { name: '김민규', link: 'https://ibb.co/ZzmgQF98' },
    { name: '구재욱', link: 'https://ibb.co/8V2sMX4' },
    { name: '이연우', link: 'https://ibb.co/d07d1Fgg' },
    { name: '카림', link: 'https://ibb.co/Q3BYtzsq' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <PriceTable />
      </main>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-4 py-10 space-y-10">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
              <UsersIcon className="w-7 h-7 text-orange-500" />
              <span>트레이너 프로필 보러가기</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {trainers.map((trainer) => (
                <a
                  key={trainer.name}
                  href={trainer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-orange-200 transition-colors text-center text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-500"
                  aria-label={`${trainer.name} 트레이너 프로필 보기`}
                >
                  {trainer.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                '디랙스핏' 앱으로 예약 및 관리
              </h3>
              <div className="text-left space-y-6">
                  <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mr-5" aria-hidden="true">1</div>
                      <div>
                          <h4 className="font-semibold text-xl text-gray-800">'디랙스핏(DRAXFIT)' 앱 다운로드</h4>
                          <p className="text-gray-600 text-lg">앱스토어 또는 플레이스토어에서 검색하여 설치해주세요.</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mr-5" aria-hidden="true">2</div>
                      <div>
                          <h4 className="font-semibold text-xl text-gray-800">회원가입 및 센터 등록</h4>
                          <p className="text-gray-600 text-lg">회원가입 후, '번랩피트니스'를 검색하여 센터 등록을 완료하시면 바로 이용 가능합니다.</p>
                      </div>
                  </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                <CreditCardIcon className="w-7 h-7 text-orange-500" />
                <span>카드사 무이자 할부 안내</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {installmentPlans.map((plan) => (
                  <div key={plan.name} className="border border-gray-200 rounded-md p-3 text-center bg-gray-50">
                    <p className="font-semibold text-gray-700 text-base">{plan.name}</p>
                    <p className="text-gray-600 text-base">{plan.period}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://mms.lightpay.kr/main.do"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition-colors text-center text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-500"
                aria-label="무이자 결제하러가기"
              >
                무이자 결제하러가기
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
                <BankIcon className="w-7 h-7 text-orange-500" />
                <span>계좌 안내</span>
              </h3>
              <div className="text-center text-gray-700 space-y-2 text-lg">
                  <p><span className="font-semibold">은행:</span> KB국민은행</p>
                  <p><span className="font-semibold">예금주:</span> 마이베네핏 반포(번랩)</p>
                  <p className="font-bold text-xl text-orange-600 mt-1">671001-04-068276</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-6 bg-gray-800 text-gray-400 text-base">
          <p>&copy; 2024 BurnLab Fitness. All rights reserved.</p>
          <p>문의: 02-1234-5678</p>
        </div>
      </footer>
    </div>
  );
};

export default App;