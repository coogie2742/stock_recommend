import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentSurvey: React.FC = () => {
  const [investmentTendency, setInvestmentTendency] = useState<string | null>(null);
  const [holdingPeriod, setHoldingPeriod] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (investmentTendency && holdingPeriod) {
      navigate('/recommendation', { state: { investmentTendency, holdingPeriod } });
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
                value="중도"
                checked={investmentTendency === '중도'}
                onChange={(e) => setInvestmentTendency(e.target.value)}
              />
              중도
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
                value="일주일 이내"
                checked={holdingPeriod === '일주일 이내'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              일주일 이내 (단기 투자 성향)
            </label>
            <label>
              <input
                type="radio"
                name="period"
                value="3개월"
                checked={holdingPeriod === '3개월'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              3개월 (중기 투자 성향)
            </label>
            <label>
              <input
                type="radio"
                name="period"
                value="1년"
                checked={holdingPeriod === '1년'}
                onChange={(e) => setHoldingPeriod(e.target.value)}
              />
              1년 (장기 투자 성향)
            </label>
          </div>
        </section>

        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default InvestmentSurvey;
