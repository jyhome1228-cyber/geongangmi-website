# 건강미 Cafe24 Rebuild

건강미 공식 홈페이지를 `ggmspa.cafe24.com/skin-skin1`의 실제 Cafe24 Easy Design 스킨을 기준으로 재구축하는 작업 영역입니다.

## 기준 우선순위

1. `cafe24/source/skin-skin1/` — Cafe24에서 직접 가져온 원본 스킨. 최우선 기준이며 수정하지 않습니다.
2. `cafe24/skin/` — 원본의 Easy Design 구조와 Cafe24 모듈을 보존하면서 건강미로 수정하는 작업본입니다.
3. 루트 legacy prototype — 기존 건강미 콘텐츠/디자인을 참고하기 위한 1차 프로토타입입니다.
4. `cafe24/preview/` — 독립 브라우저 프리뷰용 참고 구현입니다.

## 원본 스냅샷

현재 확보한 실제 `skin-skin1` 원본:

```text
cafe24/source/skin-skin1/
├─ index.html
└─ layout/basic/
   └─ header.html
```

추가로 Cafe24에서 CSS/JS/푸터/레이아웃/상품 상세 파일을 가져오는 즉시 같은 경로에 원본을 누적합니다.

## 중요한 원칙

실제 `skin-skin1`은 일반 스마트디자인 샘플이 아니라 Easy Design 메타데이터를 포함하고 있습니다. 따라서 아래 구조를 임의로 제거하거나 새 마크업으로 갈아엎지 않습니다.

- `data-ez-module`, `data-ez-role`, `data-ez-layout`, `data-ez-contents`
- `<ez-prop>`, `<ez-var>`, `<ez-item>`
- `<!--#ez="..."-->`
- `<!--@import(...)-->`, `<!--@layout(...)-->`, `<!--@js(...)-->`, `<!--@css(...)-->`
- `module="Layout_*"`, `module="product_listmain_*"` 등 Cafe24 모듈
- `{$...}` Cafe24 변수

이 구조를 보존해야 Cafe24 디자인 편집기에서 모듈 편집 기능을 계속 사용할 수 있습니다.

## 현재 메인 원본에서 확인한 구성

- Smart Banner
- New Product `product_listmain_1`
- Text / Long banner
- Image Gallery 3단
- Video
- Weekly Highlight 상품 슬라이드
- Best Select 카테고리 탭
- Map

건강미 메인은 이 모듈 중 필요한 것을 재사용하고, 불필요한 것은 제거하기보다 우선 `data-ez-display`/Easy Design 편집 가능 구조를 고려해 정리합니다.

## 현재 헤더 원본에서 확인한 기능

- 최상단 배너
- 멀티쇼핑몰/언어
- 적립금·예치금·쿠폰·관심상품·장바구니
- 로그인/회원/주문조회/마이페이지/최근본상품
- 고객센터 게시판
- Cafe24 로고 모듈
- Easy Design 메인 메뉴
- 마이페이지/장바구니/검색/모바일 메뉴 아이콘
- 검색 모듈

따라서 건강미 헤더는 기능을 다시 구현하지 않고 기존 기능을 유지하면서 메뉴·타이포·레이아웃만 브랜드에 맞춰 수정합니다.

## 권장 IA

1. 건강미 소개
2. 프로그램
3. 변화 사례
4. 지점 안내
5. 건강미 저널
6. 쇼핑몰
7. 상담 예약 CTA

## 다음에 받을 원본 파일

우선순위는 다음과 같습니다.

1. `/layout/basic/layout.html`
2. `/layout/basic/footer.html`
3. `/layout/basic/css/layout.css` 또는 헤더 관련 CSS
4. `/layout/basic/css/main.css`
5. `/layout/basic/js/main.js`
6. `/product/detail.html`
7. `/product/list.html`

이 파일들이 확보되면 `skin-skin1`을 거의 그대로 GitHub에서 재현하고 그 위에서 건강미 콘텐츠를 순차적으로 적용합니다.
