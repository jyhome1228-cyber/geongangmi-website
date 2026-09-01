# ggmspa Cafe24 `skin-skin1` 적용 가이드

대상 프리뷰: `https://ggmspa.cafe24.com/skin-skin1`

이 문서는 `cafe24/skin/`의 파일을 Cafe24 스마트디자인의 `skin-skin1`에 이식할 때 사용하는 경로 매핑입니다.

## 1. 먼저 백업

Cafe24 관리자 > 디자인 > 디자인 보관함에서 `skin-skin1`을 복제한 뒤 작업합니다.

운영 중인 상품 상세/장바구니/주문/회원 파일은 바로 덮어쓰지 않습니다.

## 2. 파일 매핑

| GitHub | Cafe24 스마트디자인 |
| --- | --- |
| `cafe24/skin/index.html` | `/index.html` |
| `cafe24/skin/layout/basic/main.html` | `/layout/basic/main.html` |
| `cafe24/skin/layout/basic/layout.html` | `/layout/basic/layout.html` |
| `cafe24/skin/layout/basic/header.html` | `/layout/basic/header.html` |
| `cafe24/skin/layout/basic/footer.html` | `/layout/basic/footer.html` |
| `cafe24/skin/layout/basic/css/gm.css` | `/layout/basic/css/gm.css` |
| `cafe24/skin/layout/basic/js/gm.js` | `/layout/basic/js/gm.js` |
| `cafe24/skin/brand/index.html` | `/brand/index.html` |
| `cafe24/skin/program/index.html` | `/program/index.html` |
| `cafe24/skin/results/index.html` | `/results/index.html` |
| `cafe24/skin/location/index.html` | `/location/index.html` |
| `cafe24/skin/journal/index.html` | `/journal/index.html` |
| `cafe24/skin/product/list.html` | `/product/list.html` |

## 3. 현재 유지해야 하는 Cafe24 기본 기능

아래 파일은 1차 적용에서는 `skin-skin1`의 기존 파일을 유지합니다.

- `/product/detail.html`
- `/order/basket.html`
- `/order/orderform.html`
- `/member/*`
- `/myshop/*`
- 결제/옵션/쿠폰/리뷰/Q&A 관련 모듈 파일

이 영역은 Cafe24 동작 모듈이 많기 때문에 기존 HTML은 살리고 `gm.css`의 브랜드 스타일을 추가하는 방식으로 2차 정리합니다.

## 4. 관리자 설정

### 메인 SHOP
`index.html`은 `product_listmain_1` 모듈을 사용합니다.

관리자 > 상품 > 상품 진열 > 메인 진열에서 메인분류 1에 건강미 SHOP 노출 상품을 등록합니다.

### 상품 카테고리
현재 링크의 `cate_no=1`은 임시값입니다. 실제 SHOP 대표 카테고리를 만든 뒤 해당 카테고리 번호로 변경합니다.

### 건강미 저널
`/journal/index.html`은 자유게시판 시퀀스 `board_no=5`를 사용합니다.

관리자에서 자유게시판 이름을 `건강미 저널`로 변경하거나, 새 게시판을 만든 경우 파일 안의 `board_listpackage_5`, `board_list_5`, `board_no=5`를 새 시퀀스로 교체합니다.

### 반응형
이 스킨은 PC/모바일 통합 반응형입니다. 반응형 스킨을 대표 디자인으로 적용하는 경우 모바일 전용 디자인이 별도로 노출되지 않도록 Cafe24 설정을 확인합니다.

## 5. 적용 순서

1. `layout/basic/css/gm.css`
2. `layout/basic/js/gm.js`
3. `header.html`, `footer.html`
4. `main.html`, `layout.html`
5. `index.html`
6. 브랜드 커스텀 페이지 5개
7. `product/list.html`
8. 관리자 메인 상품 진열 / 카테고리 / 저널 게시판 설정
9. 모바일 확인
10. 상품 상세 스타일 2차 작업

## 6. 이미지

현재 메인 히어로 일부는 기존 건강미 Imweb CDN 이미지를 임시로 사용합니다.

최종 운영 시 Cafe24 웹FTP/파일업로더 경로로 옮겨 외부 서비스 종속성을 제거합니다.

## 7. 작업 원칙

- Cafe24 `module="..."` 속성 및 `{$...}` 변수는 임의로 제거하지 않습니다.
- 상품/주문/회원 기능은 디자인보다 동작 보존을 우선합니다.
- 커스텀 브랜드 페이지는 `<!--@layout(/layout/basic/layout.html)-->`을 공통으로 사용합니다.
- 모든 신규 스타일은 `gm-` prefix를 사용해 Cafe24 기본 클래스와 충돌을 줄입니다.
