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
├─ assets/                  # 독립 프리뷰용 디자인 시스템
├─ data/                    # 콘텐츠 원본
├─ preview/                 # Cafe24 이식 전 정적 프리뷰
├─ skin/                    # 실제 Cafe24 스마트디자인 이식용
│  ├─ index.html
│  ├─ brand/index.html
│  ├─ program/index.html
│  ├─ results/index.html
│  ├─ location/index.html
│  ├─ journal/index.html
│  ├─ product/list.html
│  └─ layout/basic/
│     ├─ main.html
│     ├─ layout.html
│     ├─ header.html
│     ├─ footer.html
│     ├─ css/
│     │  ├─ gm.css
│     │  └─ gm-cafe24-modules.css
│     └─ js/gm.js
└─ INSTALL-SKIN1.md         # ggmspa skin-skin1 적용 순서
```

## `skin/`의 역할

`skin/`은 일반 정적 HTML이 아니라 Cafe24 스마트디자인 문법을 사용합니다.

- `<!--@layout(...)-->`
- `<!--@import(...)-->`
- `module="Layout_category"`
- `module="Layout_statelogoff"`
- `module="product_listmain_1"`
- `module="product_listnormal"`
- `module="board_listpackage_5"`
- `{$product_name}`, `{$product_price}` 등 Cafe24 변수

따라서 `cafe24/skin/`의 경로를 그대로 스마트디자인에 대응시켜 운영 스킨으로 이식할 수 있습니다.

## Cafe24 이식 원칙

### 브랜드 페이지
브랜드 소개, 프로그램, 변화 사례, 지점 안내는 커스텀 HTML 페이지로 제작합니다.

### 쇼핑 기능
상품 목록은 건강미 템플릿으로 제작하되, 상품 상세/장바구니/주문/회원/마이페이지는 Cafe24 기본 모듈을 유지합니다.

`gm-cafe24-modules.css`가 기존 `xans-product-detail`, `xans-product-additional` 등에 브랜드 스타일을 적용하므로 기능 HTML을 불필요하게 교체하지 않습니다.

### 게시판
건강미 저널은 1차로 Cafe24 자유게시판 `board_no=5`를 연결합니다. 실제 운영 게시판을 새로 만들 경우 시퀀스를 변경합니다.

## 개발 규칙

- CSS에서 `!important`는 Cafe24 모듈 충돌 대응이 필요한 경우 외에는 사용하지 않습니다.
- 신규 커스텀 클래스는 `gm-` prefix를 사용합니다.
- 페이지별 CSS가 공통 컴포넌트를 다시 정의하지 않습니다.
- JS는 DOM 존재 여부를 확인한 뒤 실행합니다.
- 상품/주문/회원 관련 Cafe24 변수와 module 속성을 임의로 삭제하지 않습니다.
- 외부 CDN 이미지는 임시 사용 후 Cafe24 파일 경로로 이전합니다.

## 적용 대상

현재 적용 예정 스킨은 `ggmspa.cafe24.com/skin-skin1`입니다.

실제 복사 순서와 관리자 설정은 [`INSTALL-SKIN1.md`](./INSTALL-SKIN1.md)를 기준으로 진행합니다.

## 기존 프로토타입 처리

루트의 기존 HTML/CSS/JS는 현재 디자인과 콘텐츠를 확인하기 위한 `legacy prototype`로 유지합니다. 새 구조 검수 후 필요하면 `legacy/`로 이동합니다.
