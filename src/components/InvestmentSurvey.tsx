import React, { useState } from 'react';

const InvestmentSurvey: React.FC = () => {
  const [investmentTendency, setInvestmentTendency] = useState<string | null>(null);
  const [holdingPeriod, setHoldingPeriod] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (investmentTendency && holdingPeriod) {
      alert(`선택된 투자 성향: ${investmentTendency}, 선택된 보유 기간: ${holdingPeriod}`);
      // 여기에 선택된 값들을 기반으로 주식 추천 로직을 추가할 수 있습니다.
    } else {
      alert('모든 질문에 답변해주세요.');
    }
  };

  return (
    <div className="investment-survey-container">
      <h1>나의 투자 성향 분석</h1>
      <form onSubmit={handleSubmit}>
        <section className="survey-section">
          <h2>1. 당신의 투자 성향은?</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="tendency"
                value="공격성향"
                checked={investmentTendency === '공격성향'}
                onChange={(e) => setInvestmentTendency(e.target.value)}
              />
              공격성향
            </label>
            <label>
              <input
                type="radio"
                name="tendency"
                value="안정성향"
                checked={investmentTendency === '안정성향'}
                onChange={(e) => setInvestmentTendency(e.target.value)}
              />
              안정성향
            </label>
          </div>
        </section>

        <section className="survey-section">
          <h2>2. 주식 보유 기간은 어느 정도로 예상하십니까?</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="period"
                value="단타"
                checked={holdingPeriod === '단타'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              단타 (단기 투자)
            </label>
            <label>
              <input
                type="radio"
                name="period"
                value="중타"
                checked={holdingPeriod === '중타'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              중타 (중기 투자)
            </label>
            <label>
              <input
                type="radio"
                name="period"
                value="장타"
                checked={holdingPeriod === '장타'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              장타 (장기 투자)
            </label>
          </div>
        </section>

        <button type="submit">결과 확인</button>
      </form>
    </div>
  );
};

export default InvestmentSurvey;
