import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StockRecommendation.css'; // Import the new CSS file

interface StockRecommendationProps {
  investmentTendency: string;
  holdingPeriod: string;
}

interface Stock {
  name: string;
  code: string;
  description: string;
}

const StockRecommendation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<Stock[]>([]);

  // Type assertion for state to ensure it matches StockRecommendationProps
  const { investmentTendency, holdingPeriod } = (location.state as StockRecommendationProps || {});

  useEffect(() => {
    if (!investmentTendency || !holdingPeriod) {
      // If no state is passed, redirect back to the survey
      navigate('/');
      return;
    }

    // Simulate fetching recommendations based on survey results
    const fetchRecommendations = () => {
      let recommendedStocks: Stock[] = [];

      // Placeholder logic for Korean stock recommendations
      // This will be replaced with actual recommendation logic
      if (investmentTendency === '공격성향') {
        if (holdingPeriod === '일주일 이내') {
          recommendedStocks = [
            { name: '카카오', code: '035720', description: '기술 성장주, 단기 변동성 높음' },
            { name: '네이버', code: '035420', description: '플랫폼 선두주자, 단기 모멘텀 플레이' },
          ];
        } else if (holdingPeriod === '3개월') {
          recommendedStocks = [
            { name: '삼성전자우', code: '005935', description: '배당과 성장 겸비, 중기적 관점' },
            { name: 'SK하이닉스', code: '000660', description: '반도체 업황 개선 기대, 중기 스윙' },
          ];
        } else if (holdingPeriod === '1년') {
          recommendedStocks = [
            { name: 'LG에너지솔루션', code: '373220', description: '전기차 배터리 선두, 장기 성장 동력' },
            { name: '현대차', code: '005380', description: '친환경차 전환, 장기적 가치 투자' },
          ];
        }
      } else if (investmentTendency === '중도') {
        if (holdingPeriod === '일주일 이내') {
          recommendedStocks = [
            { name: '한국전력', code: '015760', description: '안정적인 실적, 단기 낙폭과대' },
            { name: '포스코인터내셔널', code: '047050', description: '실적 기반, 단기 기술적 반등' },
          ];
        } else if (holdingPeriod === '3개월') {
          recommendedStocks = [
            { name: 'KB금융', code: '105560', description: '고배당, 금융주 매력, 중기 배당투자' },
            { name: '신한지주', code: '055550', description: '안정적 실적, 중기적 관점에서 우수' },
          ];
        } else if (holdingPeriod === '1년') {
          recommendedStocks = [
            { name: '삼성물산', code: '028260', description: '다양한 사업 포트폴리오, 장기적 가치' },
            { name: 'KT&G', code: '033780', description: '경기 방어주, 장기 배당 성장' },
          ];
        }
      } else if (investmentTendency === '안정성향') {
        if (holdingPeriod === '일주일 이내') {
          recommendedStocks = [
            { name: 'KT', code: '030200', description: '통신 안정성, 단기 변동성 낮음' },
            { name: 'SK텔레콤', code: '017670', description: '꾸준한 실적, 단기 방어적 접근' },
          ];
        } else if (holdingPeriod === '3개월') {
          recommendedStocks = [
            { name: '삼성화재', code: '000810', description: '손해보험 선두, 중기적 안정 수익' },
            { name: '현대해상', code: '001450', description: '안정적 영업, 중기적 관점의 매력' },
          ];
        } else if (holdingPeriod === '1년') {
          recommendedStocks = [
            { name: '맥쿼리인프라', code: '088980', description: '인프라 투자, 장기 안정적 현금 흐름' },
            { name: '고려아연', code: '010130', description: '비철금속 제련, 장기적 가치 투자' },
          ];
        }
      }
      setRecommendations(recommendedStocks);
    };

    fetchRecommendations();
  }, [investmentTendency, holdingPeriod, navigate]);

  if (!investmentTendency || !holdingPeriod) {
    return (
      <div className="stock-recommendation-container">
        <h1>잘못된 접근입니다.</h1>
        <p>설문조사 페이지로 돌아가서 다시 시도해주세요.</p>
        <button onClick={() => navigate('/')}>설문조사로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="stock-recommendation-container">
      <h1 className="recommendation-header">
        <span className="tendency-display">[{investmentTendency}]</span>
        <span className="period-display">[{holdingPeriod}]</span> 투자자님을 위한 추천 종목
      </h1>

      <div className="summary-card">
        <p>선택하신 투자 성향: <strong>{investmentTendency}</strong></p>
        <p>선택하신 보유 기간: <strong>{holdingPeriod}</strong></p>
      </div>

      <section className="recommendation-list">
        <h2>추천 주식 종목 (한국 주식)</h2>
        {recommendations.length > 0 ? (
          <div className="stock-cards-grid">
            {recommendations.map((stock) => (
              <div key={stock.code} className="stock-card">
                <h3>{stock.name} ({stock.code})</h3>
                <p>{stock.description}</p>
                <a href={`https://finance.naver.com/item/main.naver?code=${stock.code}`} target="_blank" rel="noopener noreferrer">
                  네이버 금융에서 자세히 보기
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-recommendations">아쉽게도 해당 조건에 맞는 추천 종목이 없습니다.</p>
        )}
      </section>

      <button onClick={() => navigate('/')} className="back-button">다시 설문조사하기</button>
    </div>
  );
};

export default StockRecommendation;
