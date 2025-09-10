import React from 'react';
import type { PricingCategory } from '../types';

interface PricingCardProps {
  category: PricingCategory;
}

const GiftIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const ReviewIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const CheckIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const PlusCircleIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PROGRAM_DETAILS = {
  'coupleShare': {
    title: '❤️ 함께라 더 쉬운 변화! 부부/커플 쉐어 PT',
    cardTitle: '부부/커플 쉐어PT',
    description: '혼자서는 작심삼일, 둘이 함께라면 평생 습관! 서로의 가장 든든한 서포터가 되어 건강과 사랑, 두 마리 토끼를 모두 잡으세요.',
    sessions: 50,
    price: '3,300,000원',
    details: [
      {
        term: '1~8주차: 파트너십 빌딩 & 기초 다지기',
        goal: '서로의 운동 능력과 목표를 이해하고, 함께 운동하는 즐거움을 느끼며 기초 체력을 다집니다.',
        method: '파트너 스트레칭, 소도구를 이용한 협력 운동 등 커플이 함께 할 수 있는 동작 위주로 진행합니다. 각자의 체력 수준에 맞는 기본 운동 자세를 배우고, 운동 목표를 공유하며 구체적인 계획을 세웁니다.',
        effect: '운동이 데이트처럼 즐거워집니다. 서로를 응원하며 동기부여가 배가 되고, 혼자 할 때보다 쉽게 운동 습관을 형성할 수 있습니다.',
      },
      {
        term: '9~17주차: 공동 목표 집중 훈련',
        goal: '다이어트, 근력 증가 등 두 사람의 공통 목표 달성에 박차를 가합니다. 선의의 경쟁과 협력을 통해 운동 효과를 극대화하는 시기입니다.',
        method: '개인별 맞춤 운동과 파트너 운동을 5:5 비율로 병행합니다. 함께 칼로리를 소모하는 서킷 트레이닝이나, 무게를 보조해주는 파트너 웨이트 트레이닝 등을 통해 한계를 넘어섭니다.',
        effect: '눈에 띄는 신체 변화를 함께 경험하며 성취감이 두 배가 됩니다. 서로의 달라진 모습에 매력을 느끼고, 건강한 라이프스타일을 공유하며 관계가 더욱 돈독해집니다.',
      },
       {
        term: '18~25주차: 라이프스타일 완성 및 평생 파트너십',
        goal: '함께 이룬 건강한 몸을 유지하고, 운동을 평생의 공통 취미로 만듭니다. 프로그램 종료 후에도 둘이서 함께 운동을 즐길 수 있는 능력을 기릅니다.',
        method: '헬스장에서 둘이 함께 할 수 있는 운동 루틴을 설계하고, 스포츠 활동(등산, 배드민턴 등)과 연계하여 운동의 재미를 확장합니다. 건강한 식단을 함께 계획하고 요리하는 등 라이프스타일 전반을 관리합니다.',
        effect: '‘운동 메이트’를 넘어 ‘평생 건강 파트너’가 됩니다. 함께 땀 흘리며 쌓은 유대감은 어떤 것과도 바꿀 수 없는 소중한 자산이 됩니다.',
      },
    ],
  },
  'bodyChallenge': {
    title: '🔥 70kg→48kg 감량 신화! 인생 마지막 다이어트',
    cardTitle: '70kg→48kg 특급 감량반',
    description: '22kg 감량 신화의 주인공이 직접, 당신의 인생 마지막 다이어트를 책임집니다. 결과로 증명하는 체계적인 관리!',
    sessions: 50,
    price: '3,300,000원',
    details: [
      {
        term: '1~8주차: 식습관 개선 및 운동 적응기',
        goal: '잘못된 식습관을 바로잡고, 운동에 흥미를 붙여 꾸준히 지속할 수 있는 기반을 마련합니다. 몸의 긍정적인 변화를 느끼며 다이어트에 대한 자신감을 회복하는 단계입니다.',
        method: '개인별 기초대사량과 활동량을 계산하여 맞춤 식단을 제공하고, 매일 식단 피드백을 통해 올바른 식습관을 형성합니다. 전신 근력을 사용하는 핵심 운동 위주로 진행하여 기초 체력을 빠르게 끌어올립니다.',
        effect: '몸이 가벼워지고 아침에 일어나는 것이 상쾌해집니다. 식단 조절에 대한 스트레스 없이 건강하게 먹는 법을 배우고, 운동에 대한 막연한 두려움이 즐거움으로 바뀌게 됩니다.',
      },
      {
        term: '9~17주차: 체지방 집중 감량 및 근력 강화',
        goal: '눈에 띄는 체중 변화와 함께 숨겨져 있던 바디 라인을 되찾습니다. 정체기 없이 꾸준히 체지방을 감량하며, 근력을 키워 탄력 있는 몸매를 만드는 가장 중요한 시기입니다.',
        method: '서킷 트레이닝, 인터벌 등 칼로리 소모를 극대화하는 운동 프로그램을 도입합니다. 주 1회 체성분 분석을 통해 몸의 변화를 데이터로 확인하고, 그에 맞춰 운동 강도와 식단을 정밀하게 조절합니다.',
        effect: '오랜만에 만난 지인들이 "살 빠졌다"고 먼저 알아볼 정도의 드라마틱한 변화를 경험합니다. 체력이 향상되어 일상 생활에 활력이 넘치고, 옷 사이즈가 줄어드는 즐거움을 느끼게 됩니다.',
      },
       {
        term: '18~25주차: 바디라인 완성 및 유지어터 플랜',
        goal: '목표 체중에 도달하고, 만족스러운 바디 라인을 완성합니다. 요요 현상 없이 감량된 체중을 평생 유지할 수 있도록, 스스로 건강을 관리하는 능력을 기르는 단계입니다.',
        method: '원하는 부위를 더욱 디테일하게 다듬는 부위별 집중 운동을 진행합니다. 일반식을 포함한 현실적인 유지어트 식단을 구성하는 노하우를 배우고, 스스로 운동 루틴을 계획하는 방법을 습득합니다.',
        effect: '인생 최고의 몸매를 갖게 되며 자신감이 급상승합니다. 더 이상 다이어트 강박에 시달리지 않고, 먹는 즐거움과 운동하는 즐거움을 모두 누리는 ‘유지어터’로 거듭나게 됩니다.',
      },
    ],
  },
    'bulkUp': {
    title: '💪🏻 어좁이 탈출! 멸치에서 헬창으로',
    cardTitle: '남자는 어깨! 벌크업 전문',
    description: '옷걸이가 달라집니다. 마른 몸이 콤플렉스라면, 3대 운동 기반의 체계적인 훈련과 영양 전략으로 누구보다 넓은 어깨와 탄탄한 몸을 만드세요.',
    sessions: 50,
    price: '3,300,000원',
    details: [
       {
            term: '1~8주차: 근신경계 적응 및 3대 운동 자세 확립',
            goal: '고중량 훈련을 위한 몸의 기반을 다집니다. 올바른 자세로 3대 운동(스쿼트, 벤치프레스, 데드리프트)을 수행하여 부상 위험 없이 운동 효과를 극대화할 준비를 합니다.',
            method: '저중량 고반복 훈련을 통해 각 운동의 정확한 자세를 몸에 익히고, 근신경계를 활성화하여 근육의 동원 능력을 향상시킵니다.',
            effect: '운동 자세가 안정되고, 이전에 사용하지 못했던 근육들이 깨어나는 것을 느낍니다. 본격적인 중량 증가를 위한 자신감을 얻게 됩니다.',
        },
        {
            term: '9~17주차: 점진적 과부하 및 본격적인 근비대 훈련',
            goal: '본격적인 사이즈 증가를 경험합니다. 꾸준한 중량 증가와 다양한 근비대 훈련 프로그램을 통해 눈에 띄는 근육량의 변화를 만들어냅니다.',
            method: '점진적 과부하 원칙에 따라 매주 훈련 강도를 체계적으로 높여나갑니다. 벌크업에 최적화된 영양 섭취 타이밍과 식단 구성법을 배우고 실천합니다.',
            effect: '옷이 몸에 끼기 시작하며 어깨가 넓어지고 몸이 두꺼워지는 것을 체감합니다. 주변에서 "운동 열심히 하네"라는 말을 듣기 시작합니다.',
        },
        {
            term: '18~25주차: 분할 훈련 심화 및 약점 보완',
            goal: '전체적인 근육의 균형과 심미적 완성도를 높입니다. 상대적으로 발달이 더딘 약점 부위를 집중 공략하여 완벽한 신체 밸런스를 만듭니다.',
            method: '3분할, 4분할 등 개인의 회복 능력에 맞는 고강도 분할 훈련을 도입합니다. 드롭세트, 슈퍼세트 등 다양한 훈련 기법을 적용하여 근육에 새로운 자극을 줍니다.',
            effect: '누가 봐도 ‘운동한 몸’이라는 것을 알 수 있을 만큼 뚜렷한 근육의 선명도와 탄탄한 바디 라인을 갖게 됩니다. 스스로의 변화에 대한 만족감과 성취감이 극대화됩니다.',
        }
    ]
  },
  'postureSolution': {
    title: '✨ 지긋지긋한 통증 탈출! 거북목, 굽은등 교정 전문',
    cardTitle: '통증 ZERO 자세교정 마스터',
    description: '컴퓨터와 스마트폰이 만든 고질병, 거북목과 라운드숄더. 통증의 근본 원인을 해결하고 숨겨진 1cm의 키를 찾아드립니다.',
    sessions: 30,
    price: '2,640,000원',
    details: [
      {
        term: '1~5주차: 통증 원인 분석 및 이완 테크닉',
        goal: '만성적인 통증의 근본 원인을 정확히 파악하고, 과긴장된 근육을 효과적으로 이완하여 즉각적인 통증 감소를 경험하는 단계입니다. 내 몸에 대한 이해도를 높이고 올바른 움직임의 기초를 다집니다.',
        method: '체형 분석과 움직임 테스트를 통해 통증을 유발하는 원인 근육과 잘못된 생활 습관을 찾아냅니다. 폼롤러, 마사지볼 등 다양한 소도구를 활용한 근막 이완 테크닉을 익혀 스스로 통증을 관리하는 능력을 기릅니다.',
        effect: '어깨와 목을 짓누르던 통증이 눈에 띄게 완화되고, 몸의 가동범위가 회복되어 움직임이 편안해집니다. 내 몸의 문제점을 명확히 인지하고, 통증 개선에 대한 희망과 확신을 갖게 됩니다.',
      },
      {
        term: '6~10주차: 약화된 근육 강화 및 자세 교정 운동',
        goal: '바른 자세를 유지하는 데 필수적인 속근육(코어)을 강화하고, 신체의 불균형을 바로잡아 통증의 재발을 방지합니다. 누가 봐도 안정적이고 곧은 자세를 만드는 핵심 과정입니다.',
        method: '약해진 특정 근육을 타겟하는 1:1 맞춤 교정 운동을 집중적으로 수행합니다. 불안정한 신체 부위를 안정화시키는 훈련을 통해, 무의식 중에도 바른 자세를 유지할 수 있도록 몸의 인지 능력을 향상시킵니다.',
        effect: '구부정했던 등이 펴지고 어깨가 넓어지며, 주변 사람들로부터 "자세 좋아졌다", "키 커보인다"는 말을 듣게 됩니다. 일상 생활에서 허리나 목에 느껴지던 부담감이 사라져 삶의 질이 향상됩니다.',
      },
      {
        term: '11~15주차: 올바른 움직임 패턴 학습 및 재발 방지',
        goal: '교정된 바른 자세를 일상 생활의 모든 움직임(걷기, 앉기, 물건 들기 등)에 적용하여, 평생 통증 없이 건강한 몸을 유지하는 방법을 체득합니다.',
        method: '실생활에서 마주할 수 있는 다양한 상황을 시뮬레이션하며 올바른 움직임 패턴을 반복적으로 학습합니다. 개인별 맞춤 스트레칭과 강화 운동으로 구성된 ‘평생 운동 루틴’을 설계하여 프로그램 종료 후에도 스스로 건강을 관리할 수 있도록 합니다.',
        effect: '더 이상 통증 재발에 대한 두려움 없이, 자신감 있고 활기찬 일상을 되찾게 됩니다. 운동이 통증을 이겨내는 가장 확실한 방법임을 깨닫고, 건강한 움직임을 삶의 일부로 받아들이게 됩니다.',
      },
    ],
  },
  'postpartumCare': {
    title: '🤱🏻 출산 전 몸매로! 엄마를 위한 1:1 건강 회복',
    cardTitle: '출산 후 100일, 골든타임 회복',
    description: '출산 후 6개월은 평생 건강을 좌우하는 골든타임! 약해진 코어와 골반을 바로잡고, 육아 체력과 출산 전 몸매를 되찾으세요.',
    sessions: 30,
    price: '2,640,000원',
    details: [
        {
            term: '1~5주차: 코어 및 골반 안정화',
            goal: '임신과 출산으로 약해진 코어 근육과 골반기저근의 기능을 회복하여 허리 통증을 완화하고 몸의 중심을 바로잡습니다.',
            method: '호흡을 통한 심부 근육 활성화 훈련부터 시작하여, 몸에 무리가 가지 않는 선에서 점진적으로 코어와 골반 주변 근육을 강화하는 재활 운동을 진행합니다.',
            effect: '아이를 안을 때마다 느껴지던 허리 통증이 줄어들고, 복직근 이개 현상이 개선되기 시작합니다. 몸의 중심이 안정되어 육아 활동이 한결 수월해집니다.',
        },
        {
            term: '6~10주차: 틀어진 체형 교정 & 근력 강화',
            goal: '수유, 아기띠 착용 등으로 인해 틀어진 어깨와 골반의 불균형을 바로잡고, 육아에 필수적인 전신 근력을 안전하게 강화합니다.',
            method: '개인의 체형에 맞는 맞춤 교정 운동과 스트레칭을 통해 신체 불균형을 해소합니다. 가벼운 무게부터 시작하여 전신 근력을 점진적으로 향상시킵니다.',
            effect: '구부정했던 자세가 펴지고 몸의 순환이 원활해져 부종이 감소합니다. 아이를 안고 계단을 오르내리는 것이 더 이상 힘들지 않게 됩니다.',
        },
        {
            term: '11~15주차: 일상 활력 증진 & 체중 관리',
            goal: '건강한 체력을 바탕으로 활기찬 육아 라이프를 즐기고, 건강한 방식으로 출산 전 체중으로 점진적으로 회복합니다.',
            method: '체력 수준에 맞는 유산소 운동을 병행하여 심폐지구력을 높이고, 건강한 식단 가이드를 통해 영양 균형을 맞추며 체중 감량을 돕습니다.',
            effect: '만성 피로가 사라지고 하루 종일 아이와 함께할 에너지를 얻게 됩니다. 건강을 되찾으며 엄마로서의 자신감도 함께 상승합니다.',
        }
    ]
  },
  'seniorHealth': {
    title: '🧓🏻 100세 시대, 아프지 않고 활기차게!',
    cardTitle: '시니어 맞춤, 10년 젊어지는 PT',
    description: '더 이상 자식들에게 짐이 되지 마세요. 관절 통증 완화, 낙상 예방, 만성질환 관리를 통해 10년은 젊어지는 건강 활력을 되찾아 드립니다.',
    sessions: 20,
    price: '1,760,000원',
    details: [
       {
            term: '1~4주차: 균형 감각 및 안정성 강화',
            goal: '낙상의 가장 큰 원인인 균형 감각 저하를 개선하고, 코어 근육을 강화하여 일상생활에서의 안정성을 높입니다.',
            method: '한 발 서기, 밸런스 패드 위 걷기 등 다양한 균형 훈련을 통해 신체 조절 능력을 향상시킵니다. 의자나 벽을 이용하여 안전하게 코어 근력을 기릅니다.',
            effect: '걸음걸이가 안정되고, 계단을 오르내릴 때 불안감이 줄어듭니다. 일상생활에서의 움직임에 자신감이 생깁니다.',
        },
        {
            term: '5~7주차: 관절 보호 근력 운동',
            goal: '퇴행성 관절염 예방 및 통증 완화를 위해 무릎, 허리, 어깨 등 주요 관절 주변의 근육을 강화합니다.',
            method: '관절에 부담이 적은 수중 운동(아쿠아로빅 원리)이나, 밴드, 가벼운 덤벨을 이용한 저강도 근력 운동을 개인의 몸 상태에 맞춰 진행합니다.',
            effect: '무릎과 허리 통증이 완화되고, 앉았다 일어서거나 물건을 드는 등의 일상적인 동작이 훨씬 수월해집니다.',
        },
        {
            term: '8~10주차: 활기찬 일상을 위한 통합 기능 운동',
            goal: '일상생활에 필요한 복합적인 움직임(걷기, 물건 옮기기 등)을 더 쉽고 안전하게 수행할 수 있도록 전반적인 신체 기능을 향상시킵니다.',
            method: '실제 생활 동작을 모방한 기능성 운동을 통해 여러 근육을 함께 사용하는 능력을 기릅니다. 건강한 생활 습관에 대한 교육을 병행합니다.',
            effect: '장보기, 손주 돌보기 등 일상의 모든 활동에서 지치지 않는 체력을 갖게 됩니다. 삶의 활력이 넘치고, 더욱 건강하고 독립적인 노년을 보낼 수 있게 됩니다.',
        }
    ]
  },
};

const YOGA_CLASS_DESCRIPTIONS: { [key: string]: { title: string; description: string } } = {
    '마인드풀빈야사': { title: '마인드풀 빈야사', description: '호흡과 움직임의 조화에 집중하며, 물 흐르듯 이어지는 동작 속에서 마음챙김(Mindfulness)을 경험하는 수련입니다. 현재 순간에 머무르며 몸과 마음의 연결을 강화합니다.' },
    '하타': { title: '하타 요가', description: '가장 전통적인 요가 스타일 중 하나로, 한 자세를 깊게 유지하며 신체의 정렬을 바로잡고 근력과 유연성의 균형을 찾습니다. 차분하고 안정적인 에너지를 원하는 분들께 추천합니다.' },
    '테라피': { title: '테라피 요가', description: '통증 완화와 신체 교정에 초점을 맞춘 치유 요가입니다. 소도구를 활용하여 뭉친 근육을 부드럽게 이완하고, 약해진 부위를 강화하여 신체의 불균형을 해소합니다.' },
    '빈야사': { title: '빈야사 요가', description: '‘흐름’을 의미하는 빈야사는 호흡에 맞춰 멈춤 없이 동작을 연결하여 진행됩니다. 역동적인 움직임을 통해 심박수를 높이고, 몸의 열기를 발산하며 노폐물을 배출하는 효과가 뛰어납니다.' },
    '인요가': { title: '인요가', description: '한 자세에서 3~5분간 머무르며 근육보다 깊은 결합 조직(인대, 관절, 근막)을 자극하는 정적인 요가입니다. 몸의 깊은 이완과 마음의 평온을 가져다줍니다.' },
    '시바난다': { title: '시바난다 요가', description: '아사나(자세), 프라나야마(호흡), 사바사나(이완), 디야나(명상), 긍정적 사고라는 5가지 원칙에 기반한 통합적인 요가 수련입니다. 심신의 완벽한 조화와 균형을 목표로 합니다.' },
    '요가베이직': { title: '요가 베이직', description: '요가를 처음 시작하는 분들을 위한 입문 수업입니다. 기본적인 요가 자세와 호흡법을 차근차근 배우며, 안전하게 요가 수련의 기초를 다집니다.' },
    '코어요가': { title: '코어 요가', description: '복부와 허리, 엉덩이를 포함한 신체의 중심부, 즉 코어 근육 강화에 집중하는 수업입니다. 탄탄한 코어는 바른 자세를 만들고 모든 움직임의 안정성을 높여줍니다.' },
    '아쉬탕가': { title: '아쉬탕가 요가', description: '정해진 시퀀스(순서)에 따라 역동적인 동작들을 반복하는 강도 높은 수련입니다. 근력, 유연성, 집중력을 동시에 향상시키며 내면의 강인함을 기를 수 있습니다.' },
};

type ProgramKeys = keyof typeof PROGRAM_DETAILS;

const DetailModal: React.FC<{
  planData: { title: string; details: { term: string; goal: string; method: string; effect: string }[] } | null;
  onClose: () => void;
}> = ({ planData, onClose }) => {
  if (!planData) return null;

  const isTimeline = planData.details.length > 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-gray-100 rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {planData.title}
            </h3>
            <p className="mt-1 text-lg text-gray-600">체계적인 플랜으로 목표 달성을 지원합니다.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className={`space-y-8 ${isTimeline ? 'mt-4' : ''}`}>
          {planData.details.map((detail, index) => (
            <div key={index} className={`flex ${isTimeline ? 'gap-x-4 md:gap-x-6' : ''}`}>
              {/* Timeline graphics */}
              {isTimeline && (
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white font-bold text-xl ring-4 ring-orange-100">
                    {index + 1}
                  </div>
                  {index !== planData.details.length - 1 && (
                    <div className="w-0.5 flex-grow bg-orange-200 my-2"></div>
                  )}
                </div>
              )}

              {/* Content card */}
              <div className="flex-grow bg-white border border-gray-200 rounded-lg p-5 w-full">
                <h4 className="font-bold text-2xl text-gray-800 mb-4">{detail.term}</h4>
                
                <div className="space-y-4 text-base md:text-lg">
                  <div>
                    <p className="font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-2xl">🎯</span> 
                      <span className="text-xl">목표</span>
                    </p>
                    <p className="mt-1 text-gray-600 pl-9">{detail.goal}</p>
                  </div>
                  <div>
                     <p className="font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-2xl">🏋️‍♀️</span>
                      <span className="text-xl">훈련 방식</span>
                     </p>
                    <p className="mt-1 text-gray-600 pl-9">{detail.method}</p>
                  </div>
                  <div className="bg-orange-50/70 border-l-4 border-orange-400 p-4 rounded-r-lg mt-5">
                     <p className="font-semibold text-orange-800 flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="text-xl">기대 효과</span>
                    </p>
                    <p className="mt-1 text-orange-900/90 pl-9">{detail.effect}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const YogaClassDetailModal: React.FC<{ className: string | null; onClose: () => void }> = ({ className, onClose }) => {
  if (!className) return null;
  const classData = YOGA_CLASS_DESCRIPTIONS[className];
  if (!classData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            {classData.title}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-700 text-lg">{classData.description}</p>
      </div>
    </div>
  );
};


const YogaScheduleTable: React.FC<{ onClassClick: (className: string) => void }> = ({ onClassClick }) => {
    const levelColorMap: { [key: string]: string } = {
        'LV.1': 'bg-yellow-100',
        'LV.1.5': 'bg-red-100',
        'LV.2': 'bg-green-100',
        'LV.3': 'bg-purple-100',
    };

    const ClassCell: React.FC<{ time?: string, name?: string, instructor?: string, level?: string, onClick: (className: string) => void }> = ({ time, name, instructor, level, onClick }) => {
        if (!time || !name) {
            return <td className="p-2 border-r border-gray-200 h-24"></td>;
        }
        const colorClass = level ? levelColorMap[level] : 'bg-white';
        return (
            <td className={`p-0 border-r border-gray-200 align-top ${colorClass} hover:ring-2 hover:ring-orange-400 transition-all duration-200`}>
                <button onClick={() => onClick(name)} className="w-full h-full text-left p-2" aria-label={`${name} 수업 정보 보기`}>
                    <p className="font-semibold text-gray-800">{time}</p>
                    <p className="font-medium text-gray-900">{name}</p>
                    <p className="text-sm text-gray-600">{instructor}</p>
                </button>
            </td>
        );
    };
    
    const scheduleData = [
        [
            { time: '09:30', name: '마인드풀빈야사', instructor: '배채원', level: 'LV.2' },
            { time: '09:30', name: '하타', instructor: '전소라', level: 'LV.2' },
            { time: '09:30', name: '테라피', instructor: '전소라', level: 'LV.1' },
            { time: '09:30', name: '하타', instructor: '전소라', level: 'LV.2' },
            { time: '09:30', name: '빈야사', instructor: '배채원', level: 'LV.2' },
            { time: '10:00', name: '인요가', instructor: '예현', level: 'LV.1' },
        ],
        [
            { time: '10:40', name: '빈야사', instructor: '배채원', level: 'LV.2' },
            { time: '10:40', name: '하타', instructor: '전소라', level: 'LV.2' },
            { time: '10:40', name: '테라피', instructor: '전소라', level: 'LV.1' },
            { time: '10:40', name: '하타', instructor: '전소라', level: 'LV.2' },
            { time: '10:40', name: '마인드풀빈야사', instructor: '배채원', level: 'LV.2' },
            { time: '11:10', name: '시바난다', instructor: '예현', level: 'LV.2' },
        ],
        [ {}, {}, {}, {}, {}, {} ],
        [
            { time: '18:30', name: '요가베이직', instructor: '오원준', level: 'LV.1.5' },
            {},
            { time: '18:30', name: '코어요가', instructor: '오원준', level: 'LV.2' },
            {},
            { time: '18:30', name: '하타', instructor: '유니타', level: 'LV.1.5' },
            {},
        ],
        [
            { time: '19:40', name: '빈야사', instructor: '오원준', level: 'LV.2' },
            { time: '19:00', name: '하타', instructor: '유니타', level: 'LV.1.5' },
            { time: '19:40', name: '인요가', instructor: '오원준', level: 'LV.1' },
            { time: '19:00', name: '빈야사', instructor: '배채원', level: 'LV.2' },
            { time: '19:40', name: '테라피', instructor: '유니타', level: 'LV.1' },
            {},
        ],
        [
            {},
            { time: '20:10', name: '테라피', instructor: '유니타', level: 'LV.1' },
            {},
            { time: '20:10', name: '아쉬탕가', instructor: '배채원', level: 'LV.1' },
            {},
            {},
        ],
    ];

    return (
        <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md max-w-4xl mx-auto">
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse min-w-[600px] table-fixed">
                    <thead className="text-base">
                        <tr>
                            <th className="p-3 font-bold text-white bg-orange-600 border-r border-orange-500">월(MON)</th>
                            <th className="p-3 font-bold text-white bg-orange-600 border-r border-orange-500">화(TUE)</th>
                            <th className="p-3 font-bold text-white bg-orange-600 border-r border-orange-500">수(WED)</th>
                            <th className="p-3 font-bold text-white bg-orange-600 border-r border-orange-500">목(THU)</th>
                            <th className="p-3 font-bold text-white bg-orange-600 border-r border-orange-500">금(FRI)</th>
                            <th className="p-3 font-bold text-white bg-orange-600">토(SAT)</th>
                        </tr>
                    </thead>
                    <tbody className="text-base bg-white">
                        {scheduleData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-t border-gray-200">
                                {row.map((cell, cellIndex) => (
                                    <ClassCell key={cellIndex} {...cell} onClick={onClassClick} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <div className="p-2 bg-gray-50 text-sm border-t border-gray-200">
                <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold">*수업 난이도:</span>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-yellow-100 border border-gray-300"></span><span>LV.1</span></div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-red-100 border border-gray-300"></span><span>LV.1.5</span></div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-green-100 border border-gray-300"></span><span>LV.2</span></div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-purple-100 border border-gray-300"></span><span>LV.3</span></div>
                </div>
            </div>
        </div>
    );
};


const PricingCard: React.FC<PricingCardProps> = ({ category }) => {
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const [reviewDiscountApplied, setReviewDiscountApplied] = React.useState(false);
  const [healthAddonApplied, setHealthAddonApplied] = React.useState(false);
  const [ptBenefitApplied, setPtBenefitApplied] = React.useState(false);
  const [ptAddonApplied, setPtAddonApplied] = React.useState(false);
  const [selectedProgramKey, setSelectedProgramKey] = React.useState<ProgramKeys | null>(null);
  const [membershipAddon, setMembershipAddon] = React.useState<'none' | '3' | '6' | '12'>('none');
  const [selectedYogaClass, setSelectedYogaClass] = React.useState<string | null>(null);

  const formatPrice = (price: number) => `${price.toLocaleString()}원`;

  const handlePtBenefitToggle = () => {
    const isTurningOff = ptBenefitApplied;
    setPtBenefitApplied(!ptBenefitApplied);
    if (isTurningOff) {
      setPtAddonApplied(false);
    }
  };

  const handlePtAddonToggle = () => {
    setPtAddonApplied(!ptAddonApplied);
  };

  const handleDiscountToggle = () => {
    const isTurningOff = discountApplied;
    setDiscountApplied(!discountApplied);
    if (isTurningOff) {
      setReviewDiscountApplied(false);
      setHealthAddonApplied(false);
    }
  };

  const handleReviewDiscountToggle = () => {
    setReviewDiscountApplied(!reviewDiscountApplied);
  };

  const handleHealthAddonToggle = () => {
      setHealthAddonApplied(!healthAddonApplied);
  };

  const handleMembershipAddonSelect = (term: 'none' | '3' | '6' | '12') => {
    setMembershipAddon(current => (current === term ? 'none' : term));
  };

  const hasAnyDiscount = React.useMemo(() => {
    return category.plans?.some(p => p.discountedPrice) ?? false;
  }, [category]);
  
  const hasYogaBenefit = category.title === '요가 회원권';
  const hasPtBenefit = category.title === 'PT (개인 트레이닝)';
  
  const sortedPrograms = hasPtBenefit ? Object.entries(PROGRAM_DETAILS)
    .sort(([, a]: [string, any], [, b]: [string, any]) => {
      if (b.sessions !== a.sessions) {
        return b.sessions - a.sessions;
      }
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      return priceB - priceA;
    }) : [];

  const membershipOptions = [
    { term: '3' as const, label: '3개월', price: 225000, priceText: "+225,000원" },
    { term: '6' as const, label: '6개월', price: 408000, priceText: "+408,000원" },
    { term: '12' as const, label: '12개월', price: 708000, priceText: "+708,000원" },
  ];

  const renderPtTableView = () => (
    <div className="mt-8 rounded-lg overflow-hidden border border-gray-300 shadow-md">
        <div className="overflow-x-auto">
            <table className="w-full text-center">
                <thead className="text-lg text-white uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold tracking-wider bg-black">횟수</th>
                        <th scope="col" colSpan={2} className="px-6 py-4 font-semibold tracking-wider bg-gray-700">노멀 PT</th>
                        <th scope="col" className="w-2 bg-gray-300"></th>
                        <th scope="col" colSpan={2} className="px-6 py-4 font-semibold tracking-wider bg-black">프리미엄 PT</th>
                    </tr>
                     <tr>
                        <th scope="col" className="bg-black"></th>
                        <th scope="col" className="px-6 py-3 font-medium tracking-wider bg-gray-600">가격</th>
                        <th scope="col" className="px-6 py-3 font-medium tracking-wider bg-gray-600">회당 단가</th>
                        <th scope="col" className="bg-gray-300"></th>
                        <th scope="col" className="px-6 py-3 font-medium tracking-wider bg-gray-900">가격</th>
                        <th scope="col" className="px-6 py-3 font-medium tracking-wider bg-gray-900">회당 단가</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-xl">
                    {category.ptPlans!.map((plan) => {
                         const originalSessions = parseInt(plan.sessions);
                         const isEligibleForBenefit = originalSessions >= 20;
 
                         let sessions = originalSessions;

                         const selectedMembership = membershipOptions.find(opt => opt.term === membershipAddon);
                         const membershipPrice = selectedMembership ? selectedMembership.price : 0;
 
                         let normalPriceNum = plan.normalPrice + membershipPrice;
                         let premiumPriceNum = plan.premiumPrice + membershipPrice;

                         if (ptBenefitApplied && isEligibleForBenefit) {
                             normalPriceNum -= 225000;
                             premiumPriceNum -= 225000;
                         }
 
                         if (ptAddonApplied && isEligibleForBenefit) {
                             sessions += 5;
                             normalPriceNum += 99000;
                             premiumPriceNum += 99000;
                         }

                         normalPriceNum = Math.max(0, normalPriceNum);
                         premiumPriceNum = Math.max(0, premiumPriceNum);
 
                         const normalPerSessionNum = sessions > 0 ? Math.round(normalPriceNum / sessions) : 0;
                         const premiumPerSessionNum = sessions > 0 ? Math.round(premiumPriceNum / sessions) : 0;
 
                         const normalPrice = formatPrice(normalPriceNum);
                         const normalPerSession = formatPrice(normalPerSessionNum);
                         const premiumPrice = formatPrice(premiumPriceNum);
                         const premiumPerSession = formatPrice(premiumPerSessionNum);
 
                         let appliedClass = '';
                         let rowBgClass = plan.isPopular ? 'bg-orange-50' : '';

                         if (isEligibleForBenefit) {
                             if (ptAddonApplied) {
                                 appliedClass = 'text-blue-600 font-bold';
                                 rowBgClass = 'bg-blue-50';
                             } else if (ptBenefitApplied) {
                                 appliedClass = 'text-green-600 font-bold';
                                 rowBgClass = 'bg-green-50';
                             }
                         }
                         const rowClass = `border-t border-gray-200 transition-colors duration-300 ${rowBgClass}`;

                        return (
                        <tr key={plan.sessions} className={rowClass}>
                            <td className="px-6 py-5 font-bold text-white bg-orange-500 text-2xl relative">
                                {plan.isPopular && (
                                    <div className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider -rotate-12">
                                    Best
                                    </div>
                                )}
                                <span className={ptAddonApplied && isEligibleForBenefit ? 'text-yellow-300' : ''}>{sessions}회</span>
                            </td>
                            <td className={`px-6 py-5 font-semibold text-gray-800 ${appliedClass}`}>{normalPrice}</td>
                            <td className={`px-6 py-5 text-gray-600 ${appliedClass}`}>{normalPerSession}</td>
                            <td className="bg-gray-300"></td>
                            <td className={`px-6 py-5 font-semibold text-gray-800 ${appliedClass}`}>{premiumPrice}</td>
                            <td className={`px-6 py-5 text-gray-600 ${appliedClass}`}>{premiumPerSession}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
  );

  const renderTableView = () => (
    <div className="space-y-8 mt-8">
      {category.planGroups!.map((group) => {
        let benefitText = '';
        if (discountApplied) {
            switch (group.title) {
                case '12개월':
                    benefitText = '헬스 회원권 12개월 증정';
                    break;
                case '6개월':
                    benefitText = '헬스 회원권 6개월 증정';
                    break;
                case '3개월':
                    benefitText = '헬스 회원권 3개월 증정';
                    break;
            }
        }
        
        return (
            <div key={group.title} className="flex rounded-lg overflow-hidden border border-gray-300 shadow-md">
                <div className="bg-orange-500 text-white p-4 text-2xl font-bold flex items-center justify-center w-28">
                    <span>{group.title}</span>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-center min-w-max">
                        <thead className="text-base text-white uppercase bg-black">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold tracking-wider">횟수</th>
                                <th scope="col" className="px-4 py-3 font-semibold tracking-wider">가격</th>
                                <th scope="col" className="px-4 py-3 font-semibold tracking-wider">회당 단가</th>
                                {discountApplied && <th scope="col" className="px-4 py-3 font-semibold tracking-wider">혜택</th>}
                            </tr>
                        </thead>
                        <tbody className="bg-white text-lg">
                            {group.plans.map((plan) => (
                                <tr key={plan.term} className="border-t border-gray-200">
                                    <td className="px-4 py-4 font-medium text-gray-900">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{plan.term}</span>
                                            {plan.isPopular && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">BEST</span>}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-800">{formatPrice(plan.price)}</td>
                                    <td className="px-4 py-4 text-gray-600">{plan.perSessionPrice ? formatPrice(plan.perSessionPrice) : '-'}</td>
                                    {discountApplied && 
                                      <td className="px-4 py-4 text-green-600 font-semibold text-base animate-fade-in">
                                          {benefitText}
                                      </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
      })}
    </div>
  );

  const renderListView = () => (
    <ul className="space-y-6 mt-8">
        {category.plans!.map((plan) => {
            const showReviewDiscount = reviewDiscountApplied && plan.reviewDiscountPrice;
            const showSameDayDiscount = discountApplied && plan.discountedPrice;
            
            let currentNote = plan.note;
            let basePriceNum = plan.price;
            const originalPriceStr = formatPrice(plan.price);
            let hasDiscountApplied = false;

            if (showReviewDiscount && plan.reviewDiscountPrice) {
                currentNote = plan.reviewDiscountNote;
                basePriceNum = plan.reviewDiscountPrice;
                hasDiscountApplied = true;
            } else if (showSameDayDiscount && plan.discountedPrice) {
                currentNote = plan.discountedNote;
                basePriceNum = plan.discountedPrice;
                hasDiscountApplied = true;
            }

            let finalPriceNum = basePriceNum;
            const isAddonApplied = healthAddonApplied && discountApplied;

            if (isAddonApplied) {
                finalPriceNum += 99000;
            }
            
            const finalPriceStr = formatPrice(finalPriceNum);
            const shouldShowOriginalPrice = hasDiscountApplied || isAddonApplied;

            let priceColorClass = 'text-orange-600';
            if (isAddonApplied) {
                priceColorClass = 'text-blue-600';
            } else if (showReviewDiscount) {
                priceColorClass = 'text-green-600';
            }


            return (
                <li
                key={plan.term}
                className={`relative flex flex-col p-6 rounded-lg transition-all duration-300 ${
                    plan.isPopular
                    ? 'bg-orange-50 border-2 border-orange-400'
                    : 'bg-gray-50 border border-gray-200'
                }`}
                >
                {plan.isPopular && (
                    <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Best
                    </div>
                )}
                <div className="flex justify-between items-start">
                    <div className="flex-grow">
                        <p className="font-semibold text-gray-800 text-2xl">{plan.term}</p>
                        <p className="text-lg text-gray-500 mt-1">
                        {currentNote}
                        </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                        {shouldShowOriginalPrice ? (
                             <>
                                <p className="text-lg text-gray-400 line-through">{originalPriceStr}</p>
                                <p className={`text-3xl font-bold ${priceColorClass}`}>{finalPriceStr}</p>
                            </>
                        ) : (
                            <p className="text-3xl font-bold text-orange-600">{formatPrice(plan.price)}</p>
                        )}
                    </div>
                </div>

                {plan.benefits && plan.benefits.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <ul className="space-y-3 text-lg text-gray-600">
                            {plan.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </li>
            );
        })}
    </ul>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col h-full shadow-xl">
      <div className="flex items-center gap-4 text-orange-500">
        {category.icon}
        <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
      </div>
      <p className="mt-4 text-lg text-gray-600">{category.description}</p>
      
      {hasPtBenefit && (
        <div className="mt-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-center mb-6 font-bold text-2xl">
                  🔥 목표별 추천 프로그램
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPrograms.map(([key, program]: [string, any]) => (
                   <div 
                    key={key}
                    onClick={() => setSelectedProgramKey(key as ProgramKeys)}
                    className="bg-white p-6 rounded-lg border-2 border-orange-200 cursor-pointer hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col text-left h-full"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedProgramKey(key as ProgramKeys)}
                  >
                      <p className="font-bold text-orange-500 text-2xl">{program.cardTitle}</p>
                      <p className="mt-2 text-base text-gray-600 flex-grow">{program.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                          <div className="text-left">
                              <p className="text-sm text-gray-500">추천 횟수</p>
                              <p className="font-bold text-xl text-gray-800">{program.sessions}회</p>
                          </div>
                          <div className="text-right">
                              <p className="text-sm text-gray-500">프로그램 가격</p>
                              <p className="font-bold text-xl text-orange-600">{program.price}</p>
                          </div>
                      </div>

                      <p className="mt-4 text-base text-orange-600 font-semibold self-start">
                          자세히 보기 &rarr;
                      </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}

      {hasYogaBenefit && (
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-gray-900 mb-4 text-center">🗓️ 25년 9월 요가 시간표</h4>
              <p className="text-xs text-center text-gray-500 mb-3">수업을 클릭하면 상세 설명을 볼 수 있습니다.</p>
              <YogaScheduleTable onClassClick={(className) => setSelectedYogaClass(className)} />
              <p className="text-xs text-gray-500 text-center mt-2">*모든 수업은 60분이며 어플을 통한 사전예약제로 진행됩니다.</p>
            </div>
      )}

      {category.ptPlans ? renderPtTableView() : category.planGroups ? renderTableView() : category.plans ? renderListView() : null}
      
      {hasPtBenefit && (
        <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in">
          <h4 className="font-semibold text-2xl text-gray-900 mb-4 text-center">✨ PT 선택 가이드 ✨</h4>
          <div className="space-y-4 text-lg text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <p className="text-center mb-4 font-bold text-xl">
                  나에게 맞는 PT는 무엇일까요?
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md border">
                      <p className="font-bold text-gray-800 text-xl">💪 노멀 PT (Normal)</p>
                      <p className="mt-2 text-base">기본적인 웨이트 트레이닝 중심으로 <span className="font-semibold">근력 증가, 체중 감량, 체력 향상</span>을 목표로 합니다.</p>
                      <p className="mt-3 text-base font-semibold text-orange-600">이런 분께 추천해요!</p>
                      <ul className="mt-1 text-base list-disc list-inside text-gray-600 space-y-1">
                          <li>운동 입문자</li>
                          <li>다이어트 & 근육 증가</li>
                          <li>운동 습관 형성</li>
                      </ul>
                  </div>
                  <div className="bg-white p-4 rounded-md border border-orange-400 ring-2 ring-orange-200">
                      <p className="font-bold text-orange-500 text-xl">🌟 프리미엄 PT (Premium)</p>
                      <p className="mt-2 text-base"><span className="font-semibold">재활, 교정, 테라피</span>가 포함된 전문 케어로 신체 기능 개선에 집중합니다.</p>
                       <p className="mt-3 text-base font-semibold text-orange-600">이런 분께 추천해요!</p>
                      <ul className="mt-1 text-base list-disc list-inside text-gray-600 space-y-1">
                          <li>만성 통증 완화</li>
                          <li>수술 후 재활</li>
                          <li>자세 및 체형 교정</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      )}

      {hasYogaBenefit && (
        <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in">
            <div className="mb-12">
              <h4 className="font-semibold text-xl text-gray-900 mb-4 text-center">✨ 횟수 선택 가이드 ✨</h4>
              <div className="space-y-4 text-base text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-center mb-4">
                      어떤 플랜을 선택할지 고민되시나요? 회원님의 운동 스타일에 맞는 횟수를 추천해 드립니다.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white p-3 rounded-md border">
                          <p className="font-bold text-orange-500 text-lg">주 5회+ (매일매일)</p>
                          <p className="mt-1 text-sm">요가를 삶의 일부로! 가장 꾸준하고 경제적인 선택입니다.</p>
                      </div>
                      <div className="bg-white p-3 rounded-md border border-orange-400 ring-2 ring-orange-200">
                          <p className="font-bold text-orange-500 text-lg">주 3회 (규칙적으로)</p>
                          <p className="mt-1 text-sm">가장 많은 분들이 선택하는 인기 플랜! 건강한 습관을 만들어보세요.</p>
                      </div>
                      <div className="bg-white p-3 rounded-md border">
                          <p className="font-bold text-orange-500 text-lg">주 2회 (틈틈이)</p>
                          <p className="mt-1 text-sm">바쁜 일상 속, 나를 위한 시간을 만드는 합리적인 플랜입니다.</p>
                      </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                      * 위 횟수는 평균적인 추천 기준이며, 등록 기간 내에 자유롭게 횟수를 소진하시면 됩니다. (예: 주 10회 이용도 가능!)
                  </p>
              </div>
            </div>
        </div>
      )}


      {(hasAnyDiscount || hasYogaBenefit || hasPtBenefit) && (
        <div className="mt-8 space-y-4">
            {hasPtBenefit ? (
                <>
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h4 className="font-semibold text-lg text-center text-gray-800 mb-3 flex items-center justify-center gap-2">
                        <PlusCircleIcon className="w-6 h-6 text-orange-500" />
                        <span>헬스 회원권 추가 (선택)</span>
                      </h4>
                      <p className="text-sm text-center text-gray-500 mb-4">PT와 함께 헬스장도 이용해보세요! (VAT 포함)</p>
                      <div className="grid grid-cols-3 gap-2">
                        {membershipOptions.map(opt => (
                            <button
                                key={opt.term}
                                onClick={() => handleMembershipAddonSelect(opt.term)}
                                className={`w-full p-3 border-2 rounded-lg transition-colors text-base ${
                                    membershipAddon === opt.term
                                        ? 'border-orange-500 bg-orange-500 text-white font-bold'
                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-orange-50'
                                }`}
                            >
                                <span className="block font-semibold">{opt.label}</span>
                                <span className="block text-sm">{opt.priceText}</span>
                            </button>
                        ))}
                      </div>
                    </div>

                    <button
                        onClick={handlePtBenefitToggle}
                        className={`w-full border-2 border-dashed font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-xl ${
                            ptBenefitApplied
                                ? 'border-green-500 bg-green-500/10 text-green-600'
                                : 'border-orange-500 text-orange-400 hover:bg-orange-500/10'
                        }`}
                    >
                        <GiftIcon className="w-5 h-5" />
                        <span>{ptBenefitApplied ? '당일 혜택 적용됨 (클릭하여 취소)' : '당일 등록 시 특별 혜택 적용'}</span>
                    </button>

                    {ptBenefitApplied && (
                        <>
                            <div className="text-center text-green-600 bg-green-500/10 p-3 rounded-lg animate-fade-in">
                                <p className="font-semibold text-lg">✅ 혜택 1. 225,000원 즉시 할인!</p>
                                <p className="text-base mt-1">(3개월 회원권 상당 / 20회 이상 등록 시 자동 적용)</p>
                            </div>
                            <button
                                onClick={handlePtAddonToggle}
                                className={`w-full border-2 border-dashed font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 animate-fade-in text-xl ${
                                    ptAddonApplied
                                        ? 'border-blue-500 bg-blue-500/10 text-blue-600'
                                        : 'border-red-500 text-red-400 hover:bg-red-500/10'
                                }`}
                            >
                                <PlusCircleIcon className="w-6 h-6" />
                                <span>{ptAddonApplied ? 'PT 5회 추가 적용됨 (클릭하여 취소)' : '혜택 2. +99,000원으로 PT 5회 추가'}</span>
                            </button>
                        </>
                    )}
                </>
            ) : (
                <>
                    <button
                        onClick={handleDiscountToggle}
                         className={`w-full border-2 border-dashed font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-3 text-xl ${
                            discountApplied
                                ? 'border-green-500 bg-green-500/10 text-green-600'
                                : 'border-orange-500 text-orange-400 hover:bg-orange-500/10'
                        }`}
                    >
                        <GiftIcon className="w-6 h-6" />
                        <span>{discountApplied ? (hasYogaBenefit ? '당일 등록 혜택 적용됨 (취소)' : '당일 등록 할인 적용됨 (취소)') : (hasYogaBenefit ? '당일 등록 시 특별 혜택 적용' : '당일 등록 시 특별 할인 적용')}</span>
                    </button>

                    {hasAnyDiscount && discountApplied && (
                        <>
                            {category.plans?.some(p => p.reviewDiscountPrice) && (
                                <button
                                    onClick={handleReviewDiscountToggle}
                                    className={`w-full border-2 border-dashed font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-3 animate-fade-in text-xl ${
                                        reviewDiscountApplied
                                            ? 'border-green-500 bg-green-500/10 text-green-600'
                                            : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                                    }`}
                                >
                                    <ReviewIcon className="w-6 h-6" />
                                    <span>{reviewDiscountApplied ? '리뷰 추가 할인 적용됨 (취소)' : '리뷰 작성 시 추가 할인'}</span>
                                </button>
                            )}
                             <button
                                onClick={handleHealthAddonToggle}
                                className={`w-full border-2 border-dashed font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-3 animate-fade-in text-xl ${
                                    healthAddonApplied
                                        ? 'border-blue-500 bg-blue-500/10 text-blue-600'
                                        : 'border-red-500 text-red-400 hover:bg-red-500/10'
                                }`}
                            >
                                <PlusCircleIcon className="w-6 h-6" />
                                <span>{healthAddonApplied ? 'PT 5회 추가 적용됨 (취소)' : '99,000원 추가시 PT 5회'}</span>
                            </button>
                        </>
                    )}
                </>
            )}
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-2xl text-gray-900 mb-4">추가 옵션</h4>
        <ul className="space-y-3 text-lg text-gray-600">
            <li className="flex justify-between items-center">
                <span>운동복 대여</span>
                <span className="font-medium text-gray-800">월 10,000원</span>
            </li>
            <li className="flex justify-between items-center">
                <span>개인 락카</span>
                <span className="font-medium text-gray-800">월 15,000원</span>
            </li>
        </ul>
      </div>
      
      <DetailModal planData={selectedProgramKey ? PROGRAM_DETAILS[selectedProgramKey] : null} onClose={() => setSelectedProgramKey(null)} />

      <YogaClassDetailModal className={selectedYogaClass} onClose={() => setSelectedYogaClass(null)} />
    </div>
  );
};

export default PricingCard;