import React, { useState, useRef } from 'react';

// Declaration for html2canvas since it's loaded from a CDN
declare const html2canvas: any;

const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <fieldset className="p-4 md:p-6 bg-white rounded-lg shadow-md border border-gray-200">
    <legend className="text-xl font-bold text-gray-800 px-2 bg-white">{title}</legend>
    {subtitle && <p className="text-sm text-gray-500 mb-4 -mt-2 ml-2">{subtitle}</p>}
    <div className="space-y-6">
      {children}
    </div>
  </fieldset>
);

const FormGroup: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({ label, children, className }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="font-semibold text-gray-700 mb-2">{label}</label>
    {children}
  </div>
);

const Checkbox: React.FC<{ label: string; name: string; }> = ({ label, name }) => (
    <label className="flex items-center space-x-2 text-gray-700">
        <input type="checkbox" name={name} value={label} className="h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
        <span>{label}</span>
    </label>
);

const CheckboxGroup: React.FC<{ name: string; options: string[]; cols?: number; otherOption?: boolean; }> = ({ name, options, cols = 4, otherOption = false }) => (
    <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-x-6 gap-y-3`}>
        {options.map(opt => <Checkbox key={opt} label={opt} name={name} />)}
        {otherOption && (
            <div className="flex items-center space-x-2 col-span-2 md:col-span-full">
                <Checkbox label="기타" name={name} />
                <span>(</span>
                <input type="text" name={`${name}Other`} className="flex-grow p-1 border-b-2 border-gray-300 focus:border-orange-500 outline-none transition bg-transparent" />
                <span>)</span>
            </div>
        )}
    </div>
);

const DietHabitRow: React.FC<{ question: string; name: string; }> = ({ question, name }) => (
    <tr>
        <td className="p-2 border text-left">{question}</td>
        <td className="p-2 border"><input type="radio" name={name} value="그렇다" className="h-5 w-5 text-orange-600 focus:ring-orange-500"/></td>
        <td className="p-2 border"><input type="radio" name={name} value="보통이다" className="h-5 w-5 text-orange-600 focus:ring-orange-500"/></td>
        <td className="p-2 border"><input type="radio" name={name} value="그렇지 않다" className="h-5 w-5 text-orange-600 focus:ring-orange-500"/></td>
    </tr>
);


const Questionnaire: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleDownloadJpg = async () => {
    const formElement = formRef.current;
    if (!formElement || isDownloading) return;

    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(formElement, {
        scale: 2, // Higher resolution for better quality
        useCORS: true,
        onclone: (documentClone: Document) => {
          const clonedForm = documentClone.querySelector('form');
          if (!clonedForm) return;

          // 1. Fix text clipping by adding padding to input and textarea elements.
          const textInputs = clonedForm.querySelectorAll('input[type="text"], input[type="number"], input[type="tel"], textarea');
          textInputs.forEach(el => {
              const inputElement = el as HTMLElement;
              // Add sufficient padding at the bottom to avoid text getting cut off.
              inputElement.style.paddingBottom = '15px';
          });

          // 2. Highlight selected checkboxes and radio buttons by making their labels red and bold.
          const checkedInputs = clonedForm.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked');
          checkedInputs.forEach(input => {
              // Find the closest parent <label> element.
              const label = input.closest('label');
              if (label) {
                  // Apply styles to the entire label for better visibility of the selection.
                  label.style.color = '#DC2626'; // Tailwind red-600
                  label.style.fontWeight = 'bold';
              }
          });
        }
      });

      const link = document.createElement('a');
      link.download = 'burnlab_questionnaire.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();

    } catch (error) {
      console.error('Error generating image:', error);
      alert('이미지 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsDownloading(false);
    }
  };
  

  return (
    <div className="bg-gray-50 p-4 md:p-8 rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-2">
        운동 기초 설문지
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">BASIC WORKOUT QUESTIONNAIRE</p>
      
      <form ref={formRef} className="space-y-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
                <Section title="기본정보" subtitle="Basic Info">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormGroup label="회원명">
                            <input name="memberName" type="text" className="p-2 border rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500" />
                        </FormGroup>
                        <FormGroup label="나이">
                            <div className="flex items-center">
                                <input name="age" type="number" className="p-2 w-full border rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500" /><span className="ml-2 text-gray-700">세</span>
                            </div>
                        </FormGroup>
                        <FormGroup label="신장/체중">
                           <div className="flex items-center gap-1">
                                <input name="height" type="number" className="p-2 w-full border rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500" /> <span className="text-gray-700">cm/</span>
                                <input name="weight" type="number" className="p-2 w-full border rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500" /> <span className="text-gray-700">kg</span>
                            </div>
                        </FormGroup>
                        <FormGroup label="성별">
                            <div className="flex items-center space-x-4 h-full">
                                <label className="flex items-center space-x-2"><input type="radio" name="gender" value="남" className="h-5 w-5 text-orange-600 focus:ring-orange-500" /> <span>남</span></label>
                                <label className="flex items-center space-x-2"><input type="radio" name="gender" value="여" className="h-5 w-5 text-orange-600 focus:ring-orange-500" /> <span>여</span></label>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormGroup label="휴대전화번호"><input name="phone" type="tel" className="p-2 border rounded-md border-gray-300"/></FormGroup>
                        <FormGroup label="직업"><input name="job" type="text" className="p-2 border rounded-md border-gray-300"/></FormGroup>
                        <FormGroup label="알게된 경로"><input name="referral" type="text" className="p-2 border rounded-md border-gray-300"/></FormGroup>
                    </div>
                </Section>
                <Section title="자가진단" subtitle="Self Diagnosis">
                    <FormGroup label="운동 목적"><CheckboxGroup name="goals" options={['다이어트 (체지방 감소)', '기초체력 향상', '건강 유지', '스트레스 해소', '근육량 증가', '재활']} /></FormGroup>
                    <FormGroup label="집중 관리하고 싶은 부위"><CheckboxGroup name="focusAreas" options={['가슴', '복부', '어깨', '팔', '엉덩이', '허벅지', '종아리', '목', '등']} /></FormGroup>
                    <FormGroup label="운동을 생각한 계기를 자세히 적어주세요.">
                        <textarea name="motivation" rows={2} className="p-2 border rounded-md border-gray-300 w-full"></textarea>
                        <p className="text-sm text-gray-500">EX. 다이어트 해서 예쁜 청바지 핏을 원해요, 체형교정을 통한 통증개선 등 자유롭게!</p>
                    </FormGroup>
                </Section>
                <Section title="운동경험" subtitle="Exercising Experience">
                    <FormGroup label="경험해 본 운동 (다이어트) 종류"><CheckboxGroup name="exerciseExperience" options={['없음', '헬스', '스쿼시', '요가', '필라테스', '스피닝', '수영', '테니스', '골프']} otherOption/></FormGroup>
                    <FormGroup label="운동 경력 (다이어트 기간)은?">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
                            <Checkbox label="3개월 미만" name="experienceDuration"/>
                            <Checkbox label="3-6개월" name="experienceDuration"/>
                            <Checkbox label="6-12개월" name="experienceDuration"/>
                            <div className="flex items-center space-x-1">
                                <Checkbox label="1년 이상" name="experienceDuration"/>
                                <span>(</span>
                                <input type="text" name="experienceDurationOther" className="flex-grow p-1 border-b-2 border-gray-300 focus:border-orange-500 outline-none transition bg-transparent w-16" />
                                <span>)</span>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup label="헬스 경험이 있다면, 주로 어떤 방법으로 운동하셨나요?"><CheckboxGroup name="gymMethod" cols={2} options={['유산소 위주', '웨이트-머신운동 위주', '머신+프리웨이트 병행', '웨이트-프리웨이트 위주']} /></FormGroup>
                    <FormGroup label="운동 (다이어트)을 지속하지 못했다면 그 이유는?"><CheckboxGroup name="stopReason" cols={3} options={['귀찮아서', '업무량 증가', '잦은 회식', '폭식', '의지상실', '혼자해서']} /></FormGroup>
                    <FormGroup label="PT (개인레슨) 경험이 있다면 그 만족도는?">
                      <div className="flex space-x-6">
                        <span>번랩PT (</span>
                        <label><input type="radio" name="burnlabPtSatisfaction" value="상" className="mr-1"/>상</label>
                        <label><input type="radio" name="burnlabPtSatisfaction" value="중" className="mr-1"/>중</label>
                        <label><input type="radio" name="burnlabPtSatisfaction" value="하" className="mr-1"/>하</label>
                        <span>)</span>
                      </div>
                       <div className="flex space-x-6 mt-2">
                        <span>타 센터 (</span>
                        <label><input type="radio" name="otherPtSatisfaction" value="상" className="mr-1"/>상</label>
                        <label><input type="radio" name="otherPtSatisfaction" value="중" className="mr-1"/>중</label>
                        <label><input type="radio" name="otherPtSatisfaction" value="하" className="mr-1"/>하</label>
                         <span>)</span>
                      </div>
                    </FormGroup>
                    <FormGroup label="PT에 대해 만족 또는 불만족했던 이유를 자유롭게 적어주세요."><textarea name="ptFeedback" rows={2} className="p-2 border rounded-md border-gray-300 w-full"></textarea></FormGroup>
                </Section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                 <Section title="의료정보" subtitle="Medical Info">
                    <FormGroup label="현재 통증이 있는 부위가 있나요?"><CheckboxGroup name="painAreas" options={['없음', '손목', '발목', '어깨결림', '무릎', '허리통증', '뒷목뻐근', '잦은 두통']} /></FormGroup>
                    <FormGroup label="자주 일어나는 질환은?"><CheckboxGroup name="commonAilments" options={['없음', '호흡기질환 (천식/알러지)', '소화기질환', '허리질환', '관절질환']} otherOption/></FormGroup>
                    <FormGroup label="과거 혹은 최근 수술 경험 / 그 외 병력"><CheckboxGroup name="medicalHistory" options={['없음']} otherOption/></FormGroup>
                 </Section>
                 <Section title="운동계획" subtitle="Workout Plan">
                     <FormGroup label="운동 가능 시간"><input name="availableTime" type="text" placeholder="AM / PM" className="p-2 border rounded-md"/></FormGroup>
                     <FormGroup label="1주에 몇 회의 운동을 계획하시나요? (권장 주 4회)"><CheckboxGroup name="weeklyFrequency" options={['모름', '주 2회', '주 3회', '주 4회', '주 5회', '주 6회 이상']} /></FormGroup>
                     <FormGroup label="1주일 운동 횟수에 대한 이유가 있다면?"><CheckboxGroup name="frequencyReason" options={['모름', '그 정도가 적당해서', '요일 및 시간적 요인 때문에']} otherOption/></FormGroup>
                     <FormGroup label="운동을 지속하고 싶은 기간은?"><CheckboxGroup name="desiredDuration" options={['지속적으로 꾸준히', '단기적으로 계획']} otherOption/></FormGroup>
                     <FormGroup label="‘단기적으로 계획‘ 을 선택했다면, 그 이유는?"><CheckboxGroup name="shortTermReason" cols={3} options={['일 때문에 확실하지 않음', '그 후 계획이 있어서', '자신이 없어서']} /></FormGroup>
                 </Section>
                 <Section title="식습관">
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">식습관</th><th className="p-2 border">그렇다</th><th className="p-2 border">보통이다</th><th className="p-2 border">그렇지 않다</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DietHabitRow question="식사 후 소화를 시킨 뒤 눕는다." name="habit_lieDown" />
                            <DietHabitRow question="식사시간이 규칙적인 편이다." name="habit_regularMeals" />
                            <DietHabitRow question="과식이나 폭식을 하지 않는다." name="habit_overeating" />
                            <DietHabitRow question="하루 1.5L 이상의 물을 섭취한다." name="habit_waterIntake" />
                            <DietHabitRow question="인스턴트, 기름진 음식을 피한다." name="habit_junkFood" />
                        </tbody>
                    </table>
                 </Section>
                <Section title="식단">
                    <div className="grid grid-cols-2 gap-4">
                        <FormGroup label="아침:"><input name="meal_morning" type="text" className="p-2 border rounded-md"/></FormGroup>
                        <FormGroup label="저녁:"><input name="meal_evening" type="text" className="p-2 border rounded-md"/></FormGroup>
                        <FormGroup label="점심:"><input name="meal_lunch" type="text" className="p-2 border rounded-md"/></FormGroup>
                        <FormGroup label="야식:"><input name="meal_night" type="text" className="p-2 border rounded-md"/></FormGroup>
                    </div>
                </Section>
            </div>
        </div>

        <Section title="담당 코치님에게 하고 싶은 말을 자유롭게 적어주세요.">
            <textarea name="messageToCoach" rows={3} className="w-full p-2 border rounded-md"></textarea>
        </Section>
        
        <div className="text-center text-sm text-gray-500">
            <p>CAUTION : THIS SHEET CONTAINS PERSONAL INFORMATION.</p>
            <p>이 문서는 개인 정보를 다루고 있습니다. 유출에 주의하십시오.</p>
        </div>

        <div className="flex justify-center mt-10 space-x-4">
             <button type="button" onClick={onBack} className="bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-400 transition-colors">
                뒤로가기
            </button>
            <button type="button" onClick={handleDownloadJpg} disabled={isDownloading} className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-500 transition-colors disabled:bg-orange-300 disabled:cursor-not-allowed flex items-center justify-center">
                 {isDownloading && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                 )}
                {isDownloading ? '저장 중...' : 'JPG로 다운로드'}
            </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;