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

      // Placeholder logic for Korean stock recommendations - expanded to 10 stocks and detailed reasons
      // This will be replaced with actual recommendation logic
      if (investmentTendency === '공격성향') {
        if (holdingPeriod === '일주일 이내') {
          // 공격성향, 단기 투자 성향: 최근 변동성이 높고 테마에 민감한 종목
          recommendedStocks = [
            { name: '카카오', code: '035720', description: '최근 높은 거래량과 급격한 주가 변동성을 보여 단기적 시세 차익을 노리는 공격적 투자자에게 적합합니다. 기술 성장주로서 테마에 민감하게 반응합니다.' },
            { name: '네이버', code: '035420', description: '플랫폼 선두주자로, 새로운 서비스 출시에 따른 단기 모멘텀 플레이가 가능합니다. 기술적인 반등 구간을 활용하는 전략이 유효합니다.' },
            { name: 'LG전자', code: '066570', description: '전장 사업 확대 및 신사업 기대감으로 단기 고변동성을 보이며, 뉴스에 민감하게 반응하는 경향이 있습니다.' },
            { name: 'HMM', code: '011200', description: '해운 운임 지수 변동에 따라 주가 등락이 심해 단기 트레이딩 관점에서 접근할 수 있는 대표적인 종목입니다.' },
            { name: '두산에너빌리티', code: '034020', description: '원자력 발전 테마 및 수소 관련 정책에 따라 주가 변동이 큰 편으로, 단기 테마 플레이에 적합합니다.' },
            { name: 'SK이노베이션', code: '096770', description: '정유 및 배터리 사업의 불확실성과 기대감이 공존하여 단기적인 주가 랠리를 노릴 수 있습니다.' },
            { name: '현대중공업', code: '329180', description: '조선업황 개선 기대감과 대규모 수주 소식에 따라 단기적으로 강한 상승세를 보일 수 있습니다.' },
            { name: 'OCI', code: '010060', description: '태양광 업황 및 폴리실리콘 가격 변동에 따라 민감하게 반응하며, 단기 급등락이 자주 발생합니다.' },
            { name: '한화솔루션', code: '009830', description: '태양광, 수소 등 신재생에너지 테마의 대장주로, 정책 변화와 수주 소식에 따라 단기 주가 탄력이 좋습니다.' },
            { name: '셀트리온', code: '068270', description: '바이오시밀러 개발 및 글로벌 임상 결과에 따라 주가 변동성이 매우 커 단기적인 이슈 플레이에 적합합니다.' },
          ];
        } else if (holdingPeriod === '3개월') {
          // 공격성향, 중기 투자 성향: 성장성이 돋보이며 업황 개선 기대감이 있는 종목
          recommendedStocks = [
            { name: '삼성전자우', code: '005935', description: '반도체 업황의 점진적 개선과 AI 반도체 수요 증가 기대로 중기적인 관점에서 성장과 배당을 동시에 기대할 수 있습니다.' },
            { name: 'SK하이닉스', code: '000660', description: 'HBM 등 고부가가치 메모리 반도체 시장에서의 경쟁력 강화로 3개월 내 추가 상승 모멘텀이 예상됩니다.' },
            { name: 'LG화학', code: '051910', description: '배터리 소재 사업의 성장성과 전통 화학 사업의 턴어라운드 기대감으로 중기적인 주가 우상향이 가능합니다.' },
            { name: '포스코퓨처엠', code: '003670', description: '2차전지 소재 사업의 확장과 신규 고객사 확보를 통해 중기적인 실적 성장이 기대되는 종목입니다.' },
            { name: '삼성SDI', code: '006400', description: '차세대 배터리 기술 개발 및 전고체 배터리 상용화 기대감으로 3개월 내 주가 재평가가 이루어질 수 있습니다.' },
            { name: '에코프로비엠', code: '247540', description: '양극재 시장의 높은 성장성 속에 꾸준한 고객사 확대를 통해 중기적인 실적 개선과 주가 상승이 기대됩니다.' },
            { name: '현대차', code: '005380', description: '글로벌 전기차 시장 경쟁력 강화 및 신차 출시 효과로 중기적인 실적 개선과 주가 상승이 예상됩니다.' },
            { name: '기아', code: '000270', description: 'SUV 및 전기차 판매 호조에 힘입어 중기적인 실적 성장과 함께 주주 환원 정책 강화가 기대됩니다.' },
            { name: '하나금융지주', code: '086790', description: '금리 인상 수혜와 견고한 실적을 바탕으로 중기적인 배당 수익과 함께 주가 상승을 노릴 수 있습니다.' },
            { name: 'KB금융', code: '105560', description: '안정적인 이자 이익 기반의 실적 성장과 적극적인 주주 환원 정책으로 중기 투자 매력이 높습니다.' },
          ];
        } else if (holdingPeriod === '1년') {
          // 공격성향, 장기 투자 성향: 메가 트렌드 수혜 및 산업 패러다임 변화를 선도하는 종목
          recommendedStocks = [
            { name: 'LG에너지솔루션', code: '373220', description: '글로벌 전기차 배터리 시장의 확고한 선두주자로, 장기적인 관점에서 전기차 시대의 핵심 성장 동력을 확보하고 있어 꾸준한 우상향이 기대됩니다.' },
            { name: '삼성전자', code: '005930', description: '반도체 산업의 기술 리더십과 AI, 전장 등 신사업을 통한 포트폴리오 다변화로 장기적인 기업 가치 성장이 예상됩니다.' },
            { name: '네이버', code: '035420', description: '커머스, 웹툰, 클라우드 등 다양한 플랫폼 사업의 확장을 통해 장기적인 관점에서 안정적인 수익성과 성장성을 겸비하고 있습니다.' },
            { name: '카카오', code: '035720', description: '콘텐츠, 핀테크, 모빌리티 등 다양한 신규 사업의 성장 가능성이 높아 장기적으로 플랫폼 비즈니스의 확대를 기대할 수 있습니다.' },
            { name: '현대차', code: '005380', description: '전기차 및 수소차 등 친환경 모빌리티로의 성공적인 전환과 자율주행 기술 개발을 통해 장기적인 산업 패러다임 변화를 선도할 것으로 보입니다.' },
            { name: '기아', code: '000270', description: '혁신적인 디자인과 기술력을 바탕으로 글로벌 시장 점유율을 확대하고 있으며, 전기차 라인업 강화로 장기적인 성장 동력을 확보했습니다.' },
            { name: 'SK하이닉스', code: '000660', description: '고성능 메모리 반도체(HBM) 시장의 독보적인 기술력으로 AI 시대의 최대 수혜주이며, 장기적인 관점에서 반도체 산업의 성장을 주도할 것입니다.' },
            { name: '셀트리온', code: '068270', description: '바이오시밀러 시장의 글로벌 리더로서 신약 개발 및 파이프라인 확대를 통해 장기적인 성장 기반을 다지고 있습니다.' },
            { name: 'POSCO홀딩스', code: '005490', description: '철강 사업의 안정성을 기반으로 2차전지 소재, 수소 등 친환경 미래 소재 사업으로의 전환을 통해 장기적인 기업 가치 재평가가 기대됩니다.' },
            { name: 'LG화학', code: '051910', description: '전기차 배터리 소재와 친환경 신소재 사업의 성장을 통해 장기적인 관점에서 지속 가능한 기업으로의 변화를 추구하고 있습니다.' },
          ];
        }
      } else if (investmentTendency === '중도') {
        if (holdingPeriod === '일주일 이내') {
          // 중도성향, 단기 투자 성향: 실적 기반의 기술적 반등이나 이벤트성 수혜 종목
          recommendedStocks = [
            { name: '한국전력', code: '015760', description: '계절적 요인 및 유가 변동에 따른 단기적인 실적 개선 기대감으로 기술적 반등을 노릴 수 있는 방어적 성격의 종목입니다.' },
            { name: '포스코인터내셔널', code: '047050', description: '에너지 및 무역 사업의 견조한 실적을 바탕으로 단기적인 수급 개선과 함께 기술적 반등을 기대할 수 있습니다.' },
            { name: '대한항공', code: '003490', description: '국제선 운항 재개 및 여객 수요 회복에 따른 단기적인 실적 개선 기대감으로 접근할 수 있습니다.' },
            { name: '아시아나항공', code: '020560', description: '대한항공과의 합병 이슈 및 국제선 회복 기대감으로 단기적인 주가 변동을 활용한 매매가 가능합니다.' },
            { name: 'GS리테일', code: '007070', description: '편의점 및 슈퍼마켓 등 오프라인 유통의 안정적인 실적과 온라인 전환에 따른 단기적인 모멘텀을 기대할 수 있습니다.' },
            { name: '롯데쇼핑', code: '023530', description: '백화점 및 마트 사업의 점진적 회복과 온라인 채널 강화를 통해 단기적인 주가 반등을 노릴 수 있습니다.' },
            { name: '엔씨소프트', code: '036570', description: '신작 게임 출시 및 기존 게임의 업데이트에 따른 단기적인 기대감으로 주가 변동성을 활용한 매매가 가능합니다.' },
            { name: '펄어비스', code: '263750', description: '글로벌 게임 시장에서의 경쟁력과 신작 게임 출시 기대감으로 단기적인 수급 개선을 기대할 수 있습니다.' },
            { name: 'SK텔레콤', code: '017670', description: '통신 시장의 안정적인 수익 구조와 5G 가입자 증가에 따른 단기적인 실적 개선을 기대할 수 있습니다.' },
            { name: 'KT', code: '030200', description: '통신 사업의 견고함과 미디어, 콘텐츠 등 신사업 성장에 따른 단기적인 재평가 모멘텀을 활용할 수 있습니다.' },
          ];
        } else if (holdingPeriod === '3개월') {
          // 중도성향, 중기 투자 성향: 안정적인 실적 기반에 배당 매력 및 성장 잠재력 겸비
          recommendedStocks = [
            { name: 'KB금융', code: '105560', description: '고금리 기조 유지에 따른 이자 이익 확대와 견고한 자산 건전성을 바탕으로 중기적인 배당 수익과 함께 주가 상승을 기대할 수 있습니다.' },
            { name: '신한지주', code: '055550', description: '안정적인 금융 지주사로서 꾸준한 실적 성장과 적극적인 주주 환원 정책을 통해 중기적인 투자 매력이 높습니다.' },
            { name: '하나금융지주', code: '086790', description: '금리 인상 수혜와 견고한 실적을 바탕으로 중기적인 배당 수익과 함께 주가 상승을 노릴 수 있습니다.' },
            { name: '우리금융지주', code: '316140', description: '은행 중심의 안정적인 실적과 비은행 부문 강화 노력을 통해 중기적인 기업 가치 성장이 기대됩니다.' },
            { name: '삼성화재', code: '000810', description: '손해보험 업계 선두주자로서 견고한 실적과 안정적인 배당을 제공하며, 중기적인 관점에서 안정적인 수익을 기대할 수 있습니다.' },
            { name: '현대해상', code: '001450', description: '안정적인 영업 기반과 꾸준한 시장 점유율을 바탕으로 중기적인 관점에서 우수한 배당 수익과 함께 주가 상승을 기대할 수 있습니다.' },
            { name: 'NH투자증권', code: '005940', description: '증권 업황의 회복과 적극적인 해외 사업 확대를 통해 중기적인 이익 성장과 배당 매력을 동시에 갖추고 있습니다.' },
            { name: '한국금융지주', code: '071050', description: '자회사 카카오뱅크의 성장과 증권 사업의 견조한 실적을 바탕으로 중기적인 기업 가치 성장이 기대됩니다.' },
            { name: '삼성물산', code: '028260', description: '상사, 건설, 패션 등 다양한 사업 포트폴리오의 안정성과 바이오 사업의 성장 잠재력을 통해 중기적인 가치 투자가 가능합니다.' },
            { name: 'KT&G', code: '033780', description: '내수 시장의 안정적인 수요와 해외 수출 확대를 통해 꾸준한 실적 성장이 기대되며, 배당 매력도 높은 중기 투자 종목입니다.' },
          ];
        } else if (holdingPeriod === '1년') {
          // 중도성향, 장기 투자 성향: 안정적인 배당과 함께 꾸준한 실적 및 성장성을 겸비한 종목
          recommendedStocks = [
            { name: '삼성전자', code: '005930', description: '반도체 산업의 사이클 회복과 AI, 파운드리 등 미래 성장 동력 확보를 통해 장기적인 관점에서 꾸준한 이익 성장과 배당을 기대할 수 있습니다.' },
            { name: '현대차', code: '005380', description: '전기차 및 수소차 전환을 통한 미래 모빌리티 시장 선점과 글로벌 시장 점유율 확대를 통해 장기적인 성장이 예상됩니다.' },
            { name: 'SK텔레콤', code: '017670', description: '통신 본업의 안정적인 수익 구조와 미디어, AI 등 신사업의 성장을 통해 장기적인 관점에서 배당과 성장을 동시에 추구할 수 있습니다.' },
            { name: 'KT', code: '030200', description: '통신 산업의 견고함과 함께 디지털 전환 및 B2B 사업 확대를 통해 장기적인 실적 개선과 배당 매력이 높은 종목입니다.' },
            { name: 'KB금융', code: '105560', description: '고배당 정책과 안정적인 이자 이익 기반의 실적 성장을 통해 장기적인 관점에서 안정적인 수익과 함께 기업 가치 상승을 기대할 수 있습니다.' },
            { name: '삼성물산', code: '028260', description: '상사, 건설, 바이오 등 다양한 사업 부문의 안정적인 수익 창출과 성장 잠재력을 통해 장기적인 가치 투자가 가능한 대표 종목입니다.' },
            { name: 'POSCO홀딩스', code: '005490', description: '철강 사업의 견조함을 바탕으로 2차전지 소재, 수소 등 친환경 미래 소재 사업으로의 성공적인 전환을 통해 장기적인 기업 가치 성장이 기대됩니다.' },
            { name: 'LG화학', code: '051910', description: '배터리 소재 및 친환경 신소재 사업의 꾸준한 성장을 통해 장기적인 관점에서 지속 가능한 기업으로의 변화를 추구합니다.' },
            { name: 'SK이노베이션', code: '096770', description: '정유 사업의 안정성과 함께 배터리, 분리막 등 친환경 에너지 사업으로의 포트폴리오 전환을 통해 장기적인 성장이 기대됩니다.' },
            { name: '한국항공우주', code: '047810', description: '방산 수출 확대 및 위성, UAM 등 미래 항공우주 산업의 성장을 통해 장기적인 관점에서 안정적인 성장이 가능한 종목입니다.' },
          ];
        }
      } else if (investmentTendency === '안정성향') {
        if (holdingPeriod === '일주일 이내') {
          // 안정성향, 단기 투자 성향: 경기 방어적 성격이 강하며 단기 변동성이 낮은 종목
          recommendedStocks = [
            { name: 'KT', code: '030200', description: '통신 산업의 대표적인 경기 방어주로, 안정적인 실적과 낮은 변동성을 바탕으로 단기적인 시장 불안정 시 방어적 접근에 용이합니다.' },
            { name: 'SK텔레콤', code: '017670', description: '견고한 내수 기반 통신 사업과 꾸준한 배당으로 시장 변동성이 큰 시기에도 비교적 안정적인 주가 흐름을 기대할 수 있습니다.' },
            { name: '맥쿼리인프라', code: '088980', description: '안정적인 현금 흐름을 바탕으로 꾸준히 배당을 지급하는 대표적인 인프라 투자 종목으로, 단기적으로도 낮은 변동성을 보입니다.' },
            { name: '한국전력', code: '015760', description: '국가 기간 산업의 특성상 경기 변동에 덜 민감하며, 단기적으로도 주가 변동 폭이 크지 않아 안정적인 성향의 투자자에게 적합합니다.' },
            { name: '지역난방공사', code: '071320', description: '공공성이 강한 사업 특성상 안정적인 실적을 유지하며, 주가 변동성이 낮아 단기적인 방어적 투자에 용이합니다.' },
            { name: '삼성카드', code: '029780', description: '견고한 본업 경쟁력과 안정적인 실적을 바탕으로 금융 시장 변동성이 큰 시기에도 비교적 안정적인 주가 흐름을 유지합니다.' },
            { name: '신한카드', code: '000000', description: '금융 지주사 계열의 안정적인 카드 사업자로, 꾸준한 실적과 낮은 주가 변동성을 기대할 수 있습니다. (가상 코드)' },
            { name: 'S-Oil', code: '010950', description: '정유 산업의 특성상 유가 변동에 따라 단기 등락은 있으나, 대체로 안정적인 실적을 바탕으로 주가 변동성이 낮은 편입니다.' },
            { name: '현대글로비스', code: '086280', description: '현대차그룹 물류를 담당하는 안정적인 사업 구조로, 시장 변동성이 큰 시기에도 꾸준한 실적을 바탕으로 안정적인 주가 흐름을 기대할 수 있습니다.' },
            { name: '엔씨소프트', code: '036570', description: '주요 게임 IP의 견조한 실적과 게임 산업의 특성상 경기 방어적 성격을 일부 가지며, 단기적인 변동성은 있지만 안정적인 수익 구조를 보입니다.' }, // 이 종목은 공격성향 단기와 겹칠 수 있으나 안정성향 단기로도 해석 가능하여 포함
          ];
        } else if (holdingPeriod === '3개월') {
          // 안정성향, 중기 투자 성향: 안정적인 배당과 함께 꾸준한 실적을 기반으로 하는 종목
          recommendedStocks = [
            { name: '삼성화재', code: '000810', description: '손해보험 시장의 선두주자로서 견고한 실적과 안정적인 배당을 꾸준히 제공합니다. 중기적인 관점에서 시장 변동성에 강한 방어적 성격을 가집니다.' },
            { name: '현대해상', code: '001450', description: '안정적인 영업 기반과 꾸준한 시장 점유율을 바탕으로 중기적인 관점에서 우수한 배당 수익과 함께 안정적인 주가 흐름을 기대할 수 있습니다.' },
            { name: 'DB손해보험', code: '005830', description: '손해보험 업계의 안정적인 플레이어로, 꾸준한 실적과 배당 매력을 통해 중기적인 안정적인 투자를 원하는 분께 적합합니다.' },
            { name: 'KT&G', code: '033780', description: '내수 시장의 안정적인 수요와 해외 수출 확대를 통해 꾸준한 실적 성장이 기대됩니다. 배당 매력도 높아 중기 투자 종목으로 매력적입니다.' },
            { name: '맥쿼리인프라', code: '088980', description: '고속도로, 항만 등 인프라 자산에 투자하여 안정적인 현금 흐름을 창출하며, 꾸준한 배당을 통해 중기적인 안정 수익을 추구하는 데 적합합니다.' },
            { name: 'SK텔레콤', code: '017670', description: '통신 본업의 견고한 수익 구조와 함께 자회사들의 성장으로 안정적인 실적을 바탕으로 중기적인 배당 수익을 기대할 수 있습니다.' },
            { name: 'KB금융', code: '105560', description: '안정적인 금융 지주사로서 꾸준한 이자 이익과 적극적인 주주 환원 정책을 통해 중기적인 배당 수익과 함께 안정적인 주가 흐름을 기대할 수 있습니다.' },
            { name: '신한지주', code: '055550', description: '균형 잡힌 사업 포트폴리오와 견고한 실적을 바탕으로 중기적인 관점에서 안정적인 수익성과 배당을 동시에 추구할 수 있습니다.' },
            { name: '삼성증권', code: '016360', description: '자산 관리 및 투자 중개 사업의 안정적인 수익을 기반으로 배당 매력을 갖추고 있어 중기적인 안정 투자를 원하는 분께 적합합니다.' },
            { name: 'NH투자증권', code: '005940', description: '증권 업황의 회복과 적극적인 주주 환원 정책을 통해 중기적인 관점에서 안정적인 수익과 함께 배당을 기대할 수 있습니다.' },
          ];
        } else if (holdingPeriod === '1년') {
          // 안정성향, 장기 투자 성향: 주가 변동폭이 적고 장기적으로 꾸준히 상승하는 우량주 및 배당주
          recommendedStocks = [
            { name: '삼성전자', code: '005930', description: '글로벌 반도체 시장의 압도적인 점유율과 기술력을 바탕으로 장기적인 관점에서 꾸준한 이익 성장과 안정적인 배당을 기대할 수 있는 대한민국 대표 우량주입니다.' },
            { name: '현대차', code: '005380', description: '글로벌 완성차 시장에서의 확고한 입지와 전기차, 수소차 등 미래 모빌리티 시장으로의 성공적인 전환을 통해 장기적인 성장이 예상됩니다. 꾸준한 배당도 매력적입니다.' },
            { name: 'SK텔레콤', code: '017670', description: '통신 본업의 안정적인 현금 흐름과 더불어 미디어, AI, 클라우드 등 신사업의 성장을 통해 장기적으로 안정적인 수익성과 배당을 기대할 수 있습니다.' },
            { name: 'KT&G', code: '033780', description: '내수 시장의 견고한 점유율과 해외 수출 확대를 통해 꾸준한 실적 성장이 기대되며, 경기 방어적 성격이 강해 장기적인 안정 투자를 원하는 분께 적합합니다. 고배당 매력도 있습니다.' },
            { name: 'KB금융', code: '105560', description: '안정적인 금융 지주사로서 꾸준한 이자 이익과 비이자 이익 성장을 바탕으로 장기적인 관점에서 안정적인 수익과 배당을 기대할 수 있습니다. 적극적인 주주 환원 정책도 긍정적입니다.' },
            { name: '삼성물산', code: '028260', description: '상사, 건설, 패션, 리조트 등 다양한 사업 포트폴리오를 통해 안정적인 수익을 창출하며, 바이오 사업의 성장 잠재력으로 장기적인 가치 투자가 가능한 우량주입니다.' },
            { name: '맥쿼리인프라', code: '088980', description: '고속도로, 항만 등 사회기반시설에 투자하여 안정적인 통행료 수익을 바탕으로 꾸준한 배당을 지급합니다. 주가 변동성이 매우 낮아 장기 안정 수익을 추구하는 대표적인 종목입니다.' },
            { name: '고려아연', code: '010130', description: '아연, 납, 금, 은 등 비철금속 제련 분야의 글로벌 리더로서 안정적인 실적과 높은 시장 점유율을 자랑합니다. 원자재 시장의 변화에도 비교적 견고하며 장기적인 가치 투자가 가능합니다.' },
            { name: '포스코홀딩스', code: '005490', description: '철강 사업의 안정적인 기반 위에 2차전지 소재, 수소 등 친환경 미래 소재 사업으로의 성공적인 전환을 추진하고 있어 장기적인 기업 가치 상승이 기대됩니다.' },
            { name: '삼성화재', code: '000810', description: '손해보험 업계의 확고한 1위 기업으로, 경기 변동에 덜 민감한 사업 특성상 안정적인 실적과 꾸준한 배당을 통해 장기적인 안정 수익을 추구하는 분께 적합합니다.' },
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
      <div className="summary-card">
        <p>선택하신 투자 성향: <strong>{investmentTendency}</strong></p>
        <p>선택하신 보유 기간: <strong>{holdingPeriod}</strong></p>
      </div>

      <section className="recommendation-list">
        <h2>투자자님을 위한 추천 종목 (한국 주식)</h2>
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

      <button onClick={() => navigate('/')} className="back-button">투자 성향 다시 입력하기</button>
    </div>
  );
};

export default StockRecommendation;