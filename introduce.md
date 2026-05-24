# Kang — Quality Engineering Lead

> "결함을 찾는 사람이 아니라, 결함이 생기기 어려운 시스템을 만드는 사람."

---

## 한 줄 소개

2008년 커머스 플랫폼 Test Engineer로 시작해, 17년간 결제·주문·재고·프로모션 등 이커머스 핵심 도메인을 깊이 파고들었습니다. 수동 테스트에서 자동화, CI/CD 품질 게이트, 관측성(Observability), 그리고 QE 조직 설계까지 — **품질을 '검증 단계'가 아니라 '제품 설계의 일부'로 만드는 것**을 전문으로 합니다.

현재 QE Lead로서, 엔지니어링 조직 전체가 같은 품질 언어를 쓰도록 프레임워크·프로세스·문화를 설계하고 있습니다.

---

## 이 페이지를 보고 계신 분께

새로운 회사, 새로운 팀과 함께하기 전에 **저라는 사람이 어떤 문제를 풀어왔고, 어떤 방식으로 일하는지**를 먼저 공유하고 싶어 이 소개글을 준비했습니다.

이 문서는 이력서의 나열이 아니라, **함께 일했을 때의 모습**을 미리 보여드리기 위한 것입니다.  
궁금한 점이 있으면 언제든 연락 주세요. 커피챗도 환영합니다.

---

## 핵심 키워드

| 영역 | 키워드 |
|------|--------|
| 도메인 | E-Commerce, 결제, 주문/배송, 재고, 프로모션, 회원 |
| 역할 | QE Lead, Test Architect, Quality Coach |
| 기술 | Test Automation, CI/CD, Contract Testing, Performance, Chaos |
| 조직 | QE Chapter, Quality Guild, Shift-Left, Blameless Postmortem |
| 가치 | 사용자 신뢰, 재현 가능한 품질, 데이터 기반 의사결정 |

---

## 경력 요약

```
2008 ─── Test Engineer (커머스 플랫폼)
2012 ─── Senior Test Engineer (자동화 전환 주도)
2016 ─── QA Engineer → Test Architect (플랫폼 QE 설계)
2020 ─── Staff QE / QE Chapter Lead
2023 ─── QE Lead (현재)
```

17년 동안 한 가지 산업 — **커머스** — 안에서만 일했습니다.  
업종을 옮기지 않은 이유는 단순합니다. 이 도메인은 표면적으로 단순해 보이지만, 실제로는 **상태 전이, 동시성, 외부 연동, 프로모션 규칙**이 겹치면서 품질 리스크가 기하급수적으로 커지기 때문입니다. 그 복잡함을 이해하는 데 17년이 필요했고, 아직도 배울 것이 많습니다.

---

## 2008–2011: Test Engineer — "버그를 재현하는 법을 배우다"

### 시작

2008년, 국내 중견 커머스 플랫폼의 QA팀에 합류했습니다. 당시 QE라는 직함은 흔하지 않았고, 우리 팀 이름은 plain하게 **Test Engineer**였습니다.

입사 첫날 받은 업무는:

- 신규 기획전(프로모션) 수동 테스트
- 결제 모듈(PG 연동) 회귀 테스트
- 모바일 웹(당시는 스마트폰 초기) 주문 플로우 점검

하루에 200건이 넘는 테스트 케이스를 Excel 시트로 관리했습니다.  
Release 전날 밤 11시까지 남아 **"이번 배포, 정말 괜찮을까?"**를 확인하는 날이 많았습니다.

### 이 시기에 배운 것

1. **도메인 지식이 테스트의 절반이다**  
   "결제 실패 후 재시도"와 "결제 취소 후 재결제"는 코드상 비슷해 보여도,  
   재고·쿠폰·포인트·정산 관점에서는 완전히 다른 시나리오입니다.

2. **재현 가능한 버그 리포트가 팀을 살린다**  
   "가끔 안 돼요"는 아무도 고치지 못합니다.  
   환경, 계정 상태, 시간, 선행 주문 이력까지 적은 버그 리포트가 곧 존경받는 문서였습니다.

3. **릴리즈 직전 QA는 구조적으로 지속 불가능하다**  
   기능이 늘수록 회귀 범위는 넓어지고, 사람의 집중력은 줄어듭니다.  
   이 불균형을 처음으로 체감한 시기입니다.

### 대표 에피소드: 2010년 추석 대목 프로모션

추석 연휴 3일간 진행된 **"전 품목 50% + 추가 10% 쿠폰"** 이벤트에서,  
특정 조합(카테고리 제외 + 멤버십 할인 + 배송비 쿠폰)에서 **실결제 금액이 0원**이 되는 버그가 발생했습니다.

- 원인: 할인 적용 순서와 `floor()` 처리 순서 불일치
- 영향: 약 340건, 2시간 17분
- 대응: 실시간 모니터링 알람 + 긴급 hotfix + 고객 보상 정책 협의

이 사건 이후 저는 **"경계값은 항상 실제 돈과 연결된다"**는 사실을 몸으로 배웠습니다.  
커머스 QA는 UI 테스트가 아니라 **금융·물류·마케팅 규칙의 교차점**을 검증하는 일입니다.

---

## 2012–2015: Senior Test Engineer — "자동화, 선택이 아니라 생존"

### 배경

서비스 트래픽이 연 40% 이상 성장하면서, 분기별 대규모 기능 추가와  
마이크로서비스 전환 POC가 동시에 진행되었습니다.  
수동 회귀 테스트는 3일 → 5일 → **7일**로 늘어났고, 그 사이 개발팀은 배포를 기다리기 시작했습니다.

2012년, 저는 **테스트 자동화 전환 TF**의 실무 리더로 지명되었습니다.

### 한 일

#### 1. E2E 자동화 프레임워크 도입 (Selenium → 내부 Wrapper)

- 핵심 사용자 여정 12개를 우선 자동화
  - 회원가입 → 첫 구매
  - 쿠폰 적용 → 결제 → 주문 취소 → 환불
  - 비회원 주문 → 배송 조회
- Page Object 패턴 + 테스트 데이터 Factory 표준화
- Staging 환경 전용 **"Golden Account Set"** 구축 (재현성 확보)

#### 2. Smoke / Regression Suite 분리

| Suite | 목적 | 실행 시간 | 실행 시점 |
|-------|------|-----------|-----------|
| Smoke | 배포 직후 핵심 경로 | ~8분 | Every deploy |
| Regression | 주요 기능 전체 | ~2.5시간 | Nightly |
| Full | 대규모 릴리즈 전 | ~6시간 | Weekly / Pre-release |

#### 3. "Flaky Test 0" 캠페인

Flaky test는 CI 신뢰를 깎아먹습니다.  
6개월간 flaky rate **23% → 4%**까지 낮췄습니다.

- 실패 시 스크린샷 + HAR + 서버 correlation ID 자동 수집
- 3회 연속 flaky 발생 시 **Quarantine** 후 원인 분석 의무화
- 시간 의존 테스트 → Clock injection으로 전환

### 이 시기의 전환점

자동화 커버리지 60%를 넘긴 어느 날, PM이 물었습니다.

> "이제 QA 없이 배포해도 되나요?"

저의 대답은 **"아니요. 자동화는 회귀를 빠르게 확인하는 도구지,  
품질을 보장하는 증명서가 아닙니다"**였습니다.

이 경험이 이후 제 QA 철학의 출발점이 되었습니다.

---

## 2016–2019: Test Architect — "품질을 시스템으로 설계하다"

### 역할 변화

직함이 Test Architect로 바뀌면서, 저는 **개별 기능 테스트**에서  
**플랫폼 전체의 품질 아키텍처**를 설계하는 역할로 이동했습니다.

마이크로서비스 전환 본격화,  
MSA 40여 개 서비스,  
API Gateway + Event-driven 주문 파이프라인.

"서비스가 쪼개지면 QA도 쪼개져야 하나?" —  
아니요. **품질 신호는 더 통합되어야 합니다.**

### 주요 프로젝트

#### A. Contract Testing 도입 (Pact 기반)

문제:
- 주문 서비스 ↔ 재고 서비스 ↔ 결제 서비스 간 **스키마 불일치**로 인한 integration failure 급증
- Staging 통합 테스트만으로는 조합 폭발

해결:
- Consumer-driven contract test CI 게이트
- Breaking change PR에 **contract diff 리뷰** 필수
- 월 1회 "Contract Drift Report" 자동 생성

결과:
- Integration defect **월 47건 → 11건** (6개월)
- 서비스 독립 배포 가능성 ↑

#### B. Synthetic Monitoring + Real User Monitoring 병행

- 핵심 여정 5분 간격 synthetic check (Production)
- RUM 기반 LCP, 결제 완료율, 장바구니 이탈률 대시보드
- 장애 MTTD **18분 → 4분**

#### C. Test Environment as Code

- Docker + Terraform 기반 ephemeral environment
- PR 단위 preview env + seed data 자동 주입
- "내 로컬에서는 됐는데" 비율 유의미하게 감소

#### D. Quality Scorecard

각 product squad에 분기별 품질 점수 부여:

| 지표 | 가중치 |
|------|--------|
| Production incident (Sev1/2) | 30% |
| Change failure rate | 25% |
| MTTR | 15% |
| Test coverage (meaningful) | 15% |
| Flaky rate | 10% |
| Postmortem action item closure | 5% |

점수 자체가 목적이 아니라, **대화의 언어**가 되도록 설계했습니다.

### 이 시기에 정립한 원칙

> **Quality is a property of the system, not a phase in the process.**

테스트는 릴리즈 직전에 "하는 것"이 아니라,  
설계·개발·배포·운영 전 단계에 **내재되어야** 합니다.

---

## 2020–2022: Staff QE / QE Chapter Lead — "사람과 문화"

### QE Chapter 설립

2020년, Engineering 조직이 Squad + Chapter 모델로 재편되면서  
**QE Chapter**의 첫 Lead를 맡았습니다.

Chapter의 목표:
- Squad마다 제각각이던 QA 방식 → **공통 프레임워크**
- QE 인력의 성장 경로 명확화
- "QA팀이 아니라, 전사 품질 코치"

### Chapter에서 만든 것

#### 1. QE Career Ladder

| Level | 기대 역할 |
|-------|-----------|
| QE I | Feature test design, automation |
| QE II | Domain ownership, CI integration |
| Senior QE | Cross-squad quality initiative |
| Staff QE | Platform-level quality architecture |
| Principal QE | Industry benchmark, org-wide strategy |

#### 2. Quality Guild (월 1회)

- 최근 incident review (blameless)
- Testing tip / tool demo
- "이번 달의 Flaky Hall of Shame" — 학습 목적, 개인 비난 없음

#### 3. Pair Testing with Developers

- Sprint 중 2시간 "Quality Pairing" 슬롯
- Dev가 test 작성, QE가 edge case 제안
- Shift-left를 슬로건이 아니라 **캘린더에 넣는 습관**으로

#### 4. On-call for Quality

- Sev1 incident 시 QE Chapter on-call 로테이션
- 재현 → 영향 범위 → 회귀 테스트 추가까지 **24시간 내** action item 생성

### COVID-19 기간: 커머스 트래픽 3배

2020–2021, 비대면 소비 급증으로 **블랙프라이데이급 트래픽이 평일에** 발생했습니다.

한 일:
- Load test 시나리오 재설계 (실제 traffic shape 기반)
- Auto-scaling 검증 + DB connection pool 한계 테스트
- "Graceful degradation" 시나리오 6종 문서화 및 리허설

결과:
- Peak season **Sev1 zero** (2020–2021)
- 이 경험은 이후 performance testing을 "연 2회"가 아니라 **상시 capability**로 바꾸는 계기

---

## 2023–현재: QE Lead — "조직의 품질 운영체제"

### 현재 역할

QE Lead로서 다음을 책임집니다:

1. **Quality Strategy** — 연간 품질 OKR, investment priority
2. **QE Org Design** — headcount, skill mix, hiring bar
3. **Engineering Partnership** — VP Eng, PM, SRE와 quality roadmap 공동 수립
4. **Incident & Learning Loop** — postmortem quality, prevention tracking
5. **External Benchmark** — conference, community, vendor evaluation

### 2024–2025 주요 성과 (가상)

| Initiative | Before | After |
|------------|--------|-------|
| Change failure rate | 14.2% | 6.1% |
| Deploy frequency (core services) | 주 2회 | 일 4회+ |
| Mean time to detect (Sev2+) | 22 min | 7 min |
| Automated regression (critical paths) | 71% | 94% |
| QE hiring time-to-fill | 94 days | 52 days |

숫자는 결과이고, 더 중요한 변화는 **문화**입니다:

- PR description에 "Test plan" 섹션이 **기본 템플릿**이 됨
- Feature flag + staged rollout이 **예외가 아닌 기본**
- "QA 승인" gate 제거 → **automated quality gate**로 대체 (사람 병목 해소)

### 지금 진행 중인 프로젝트

#### 1. AI-assisted Test Generation (실험 단계)

- PR diff → suggested test cases (human review 필수)
- Historical incident corpus → "이 변경이 과거 어떤 장애 패턴과 유사한가" 힌트
- **목표:** QE의 반복 labor ↓, exploratory depth ↑

#### 2. Quality Observability Platform

- Test result, coverage, flaky, deploy, incident 데이터 **단일 graph**
- "이 서비스, 왜 자꾸 깨지지?"를 데이터로 답하기

#### 3. Chaos Engineering Program (Production-lite)

- Staging + 5% canary에서 fault injection
- Payment timeout, inventory lock delay, Kafka lag 시뮬레이션

---

## 기술 스택 & 도구

### Automation & Testing

| 분류 | 도구 / 경험 |
|------|-------------|
| E2E | Selenium, Playwright, Cypress |
| API | REST Assured, Postman/Newman, k6 |
| Contract | Pact, OpenAPI diff |
| Performance | k6, Gatling, JMeter |
| Mobile | Appium |
| Visual | Percy (limited), custom snapshot |

### CI/CD & Infrastructure

- Jenkins → GitHub Actions / Argo CD migration 경험
- Docker, Kubernetes (test env orchestration)
- Terraform (ephemeral env)
- Feature flag: LaunchDarkly / in-house

### Observability

- Datadog, Grafana, Prometheus
- ELK / OpenSearch (log correlation)
- Sentry (client-side error)

### Languages

- **Java** — 초기 automation framework, enterprise integration
- **Python** — test tooling, data analysis, internal scripts
- **JavaScript/TypeScript** — Playwright, frontend test
- **SQL** — data validation, reconciliation test

---

## 테스트 철학

### 1. Testing Pyramid은 정답이 아니, 대화의 시작점

```
        /\
       /  \     E2E — 적게, 의미 있게
      /----\
     /      \   Integration / Contract — 넓게
    /--------\
   /          \ Unit — 개발자 ownership
  /____________\
```

Pyramid 비율은 팀·도메인·아키텍처마다 다릅니다.  
중요한 것은 **"왜 이 레벨에 이 테스트가 있는가"**를 설명할 수 있는 것.

### 2. 커버리지 %는 vanity metric일 수 있다

100% line coverage보다:
- Critical path coverage
- Past incident regression coverage
- Contract coverage

이 세 가지가 더 솔직한 지표입니다.

### 3. Flaky test는 기술 부채이자 신뢰 부채

Flaky test 하나는 CI 전체의 cry wolf입니다.  
Quarantine → fix → re-admit. 예외 없음.

### 4. Exploratory testing은 자동화를 대체하지 않는다

자동화는 **알고 있는 것을 지키는** 일.  
Exploratory는 **모르는 것을 찾는** 일.  
둘 다 필요합니다.

### 5. Production is the ultimate test environment — but not a playground

실 사용자 환경에서만 발견되는 문제가 있습니다.  
그래서 RUM, synthetic, canary가 필요합니다.  
하지만 **실험은 통제된 범위** 안에서.

---

## 리더십 스타일

### 저는 이런 리더입니다

- **Coach first** — 정답을 던지기보다, 스스로 trade-off를 articulation하게 돕습니다
- **Data-informed, not data-blind** — 숫자 없이 논하지 않지만, 숫자만으로도 결정하지 않습니다
- **Blameless, but accountable** — 사람 탓이 아니라 시스템 탓. 단, action item은 반드시 owner가 있습니다
- **Write it down** — 회의록, RFC, postmortem, test strategy. 문서는 미래의 동료에게 보내는 편지입니다

### 1:1에서 자주 하는 질문

- "이번 스프린트, 품질 관점에서 가장 불안한 지점은?"
- "자동화 안 하는 이유가 시간인가, 설계인가, 우선순위인가?"
- "만약 이 기능이 Production에서 터지면, 어디서 알 수 있을까?"

### 피드백 원칙

> Specific, Timely, Kind — 순서는 바꿔도 Specific은 지킨다.

---

## 함께 일했던 동료들이 (가상) 말해주는 것

> "Kang은 'No'라고 말할 때 항상 대안을 가져온다."  
> — Backend Chapter Lead

> "장애 후 postmortem에서 가장 먼저 '우리 시스템이 왜 이 실수를 허용했나'를 묻는다."  
> — SRE Manager

> "QA 승인 gate 없애자고 했을 때 가장 반대했던 사람이 6개월 후 가장 강력한 지지자가 됐다."  
> — Engineering Director

> "Flaky test 하나를 quarantine하는 데 3시간 쓰는 걸 보면서, 테스트 코드도 프로덕션 코드다 배웠다."  
> — Junior QE

---

## 대표 프로젝트 Deep Dive

### Project: Order Pipeline v3 Migration

**기간:** 2021.03 – 2021.11  
**규모:** 7 squads, 23 services, 14-week migration  
**역할:** Quality Lead

**배경:**  
Monolithic order module → event-driven pipeline 전환.  
Dual write 기간 8주, cutover weekend 1회.

**Quality Strategy:**

1. **Shadow traffic comparison** — old vs new pipeline output diff (99.99% match target)
2. **Reconciliation batch** — nightly order count, amount, status mismatch report
3. **Progressive traffic shift** — 1% → 5% → 25% → 100% over 4 weeks
4. **Rollback drill** — 3회 full rehearsal

**결과:**
- Cutover weekend incident **zero**
- Post-migration 30일 order discrepancy **0건**
- 이후 사내 "large migration playbook" 표준 템플릿으로 채택

---

### Project: Promotion Engine Rewrite

**기간:** 2018.01 – 2018.09  
**역할:** Senior Test Engineer → Test Architect

**배경:**  
"장바구니 쿠폰 + 카테고리 할인 + 멤버십 + 배송비" 조합 폭발.  
Legacy rule engine → DSL 기반 promotion engine.

**접근:**

- Property-based testing으로 discount combination fuzz
- Golden test suite — 과거 5년 프로모션 incident 38건 regression
- Business rule → executable spec (PM/기획 참여 워크숍)

**결과:**  
Launch 후 60일 **promotion-related Sev2+ zero**.

---

## 커뮤니티 & 지식 공유

- 사내 **Quality Engineering Monthly** 발표 (2021–현재, 29회)
- Meetup 발표: "Contract Testing in Real Commerce" (2022)
- 사내 Wiki: **"Commerce Testing Patterns"** 120+ 페이지 직접 작성/curate
- Mentoring: Junior QE → Senior QE 승격 7명 코칭
- Hiring: QE loop design — practical test + system design + values interview

---

## 학력 & 자격 (가상)

| 항목 | 내용 |
|------|------|
| 학사 | 컴퓨터공학 (2004–2008) |
| 자격 | ISTQB Advanced Test Analyst (2014) |
| 자격 | CKA (2021, test env K8s 운영 목적) |

학력보다 **17년간의 production incident와 postmortem**이 저의 실질적 학위입니다.

---

## 개인적으로

### 일하는 방식

- **아침형** — deep work는 07:00–10:00
- **노트:** 모든 incident timeline은 Obsidian에 archive
- **독서:** SW testing, distributed systems, org design 분야 연 10권+
- **취미:** 홈카페 (테스트와 같이 — 변수 통제와 extraction yield에 집착)

### 믿는 것

- 좋은 QA는 **제품을 깨는 사람**이 아니라 **제품이 깨지기 전에 구조를 고치는 사람**
- Trust is built in drops and lost in buckets — especially in commerce
- Perfect quality doesn't exist; **recoverable quality** does

---

## 새로운 회사에서 기대하는 것

### 제가 contribution할 수 있는 영역

1. **E-Commerce / Marketplace / Fintech-adjacent** domain quality
2. **QE org build / scale** — 5명 → 30명 규모 경험
3. **CI/CD quality gate design** — speed vs safety trade-off
4. **Incident learning culture** — postmortem that actually changes systems
5. **Cross-functional partnership** — Eng, PM, SRE, Data alignment

### 함께 만들고 싶은 조직

- "QA team"이 아니라 **"Quality is everyone's job"**이 실제로 작동하는 곳
- Deploy가 두렵지 않은 곳 — not because we don't break things, but because we **detect and recover fast**
- Junior QE가 **2년 안에 Staff track을 상상할 수 있는** 성장 경로

### 저에게 맞는 환경

| Fit ✅ | Less Fit ⚠️ |
|--------|---------------|
| Product-engineering partnership | QA as final gatekeeper |
| Blameless learning culture | Hero-driven firefighting |
| Incremental quality investment | "출시 후에 QA 더 뽑자" |
| Data-informed decisions | Coverage % vanity |

---

## 인터뷰에서 자주 받는 질문 & 답변

### Q. QA 승인 gate를 없앴다고 했는데, 품질은 어떻게 보장하나요?

**A.** Gate를 **사람 → automation**으로 옮겼습니다.  
PR merge 조건: unit + contract + smoke pass, coverage threshold, no open Sev2+ regression.  
사람의 역할은 gatekeeping이 아니라 **exploratory, risk assessment, test design review**입니다.

### Q. 개발자가 테스트를 안 짜면요?

**A.** "안 짜면"이 아니라 **"짜기 어렵게 설계되어 있으면"**이 문제입니다.  
Testability review를 design phase에 넣고, untestable design은 RFC 단계에서 challenge합니다.  
그리고 Pair testing — 함께 한 번 짜면 다음부터 혼자도 합니다.

### Q. QE Lead인데 직접 테스트도 하나요?

**A.** 네. 분기당 1–2번 **"Gemba week"** — 실제 squad에 embed되어 test plan 작성, CI 디버깅, on-call 참여.  
리더가 현장을 모르면 strategy는 공중에 뜹니다.

### Q. 가장 어려웠던 결정은?

**A.** 2022년, **전사 E2E suite 40% 삭제** 결정.  
유지 비용 > 발견 가치. 대신 contract + integration + targeted E2E로 재구성.  
반대 여론이 강했지만, 6개월 후 change failure rate 개선으로 consensus가 형성됐습니다.

---

## 연락처 (가상)

| | |
|---|---|
| Email | kang.qe@example.com |
| GitHub | github.com/kang-qe |
| LinkedIn | linkedin.com/in/kang-qe |
| Location | Seoul, Korea (Hybrid OK) |

---

## 마무리

17년 전, Test Engineer로 시작할 때 저는 **"버그를 찾는 사람"**이라고 생각했습니다.

지금은 **"버그가 찾아오기 어려운 시스템을 만드는 사람"**이라고 소개합니다.

새로운 팀, 새로운 제품, 새로운 동료와 함께  
**사용자가 신뢰할 수 있는 커머스 경험**을 만들고 싶습니다.

이 소개글이 **함께 일할지 판단하는 데 도움이 되었으면** 합니다.  
더 깊은 이야기는 커피 한 잔으로 이어가요.

---

*Last updated: 2025년 5월*  
*Document version: 1.0 — Personal introduction for professional site*
