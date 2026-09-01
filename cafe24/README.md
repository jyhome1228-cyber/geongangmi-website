# 건강미 Cafe24 Rebuild

이 디렉터리는 기존 `geongangmi-website` 프로토타입을 보존하면서, Cafe24 스마트디자인 기반의 공식 운영 사이트로 재구축하기 위한 작업 영역입니다.

## 목표

- 기존 v5~v22 형태의 누적 CSS 제거
- 1440px 기준의 일관된 레이아웃 시스템
- 모바일/데스크톱 공통 컴포넌트 정리
- 브랜드 페이지와 Cafe24 커머스 기능 분리
- 프로그램/지점/브랜드 문구의 단일 원본 관리
- 실제 Cafe24 스킨으로 복사하기 쉬운 HTML/CSS/JS 구조

## 권장 IA

1. 건강미 소개
2. 프로그램
3. 변화 사례
4. 지점 안내
5. 건강미 저널
6. 쇼핑몰
7. 상담 예약 CTA

## 디렉터리

```text
cafe24/
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css       # 컬러, 폰트, 폭, 간격, radius
│  │  ├─ base.css         # reset, typography, global element
│  │  ├─ layout.css       # header, footer, container, section
│  │  ├─ components.css   # button, cards, program rows, CTA
│  │  └─ pages/
│  │     └─ home.css      # 메인 전용
│  └─ js/
│     └─ site.js          # 메뉴, 접근성, 공통 interaction
├─ data/
│  └─ site-content.json   # 메뉴/지점/프로그램/핵심 문구 단일 원본
└─ preview/
   └─ index.html          # Cafe24 이식 전 정적 프리뷰
```

## Cafe24 이식 원칙

### 브랜드 페이지
브랜드 소개, 프로그램, 변화 사례, 지점 안내는 커스텀 HTML 페이지로 제작합니다.

### 쇼핑 기능
상품 목록, 상품 상세, 장바구니, 주문, 회원, 마이페이지는 Cafe24 기본 모듈을 유지하고 CSS를 브랜드 시스템에 맞게 덮어씁니다.

### 게시판
건강미 저널, 공지, 이벤트, 후기 등은 Cafe24 게시판 모듈을 활용합니다.

## 개발 규칙

- CSS에서 `!important`는 Cafe24 모듈 충돌 대응이 필요한 경우 외에는 사용하지 않습니다.
- 페이지별 CSS가 공통 컴포넌트를 다시 정의하지 않습니다.
- JS는 DOM 존재 여부를 확인한 뒤 실행합니다.
- 외부 CDN 이미지 URL은 임시 프리뷰에서만 사용하고 최종 운영 시 Cafe24 파일 경로로 이전합니다.
- 텍스트/지점/프로그램 정보는 `data/site-content.json`을 기준으로 관리합니다.

## 기존 프로토타입 처리

루트의 기존 HTML/CSS/JS는 현재 디자인과 콘텐츠를 확인하기 위한 `legacy prototype`로 유지합니다. 새 구조가 검수된 뒤 Cafe24 스킨에 이식하고, 그 이후 필요하면 legacy 파일을 `legacy/`로 이동합니다.
