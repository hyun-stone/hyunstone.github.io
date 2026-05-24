# Kang — Personal Portfolio (Static Site)

Adri dark 테마 기반 정적 자기소개 사이트입니다.  
콘텐츠 원본: [`introduce.md`](./introduce.md)

## 파일 구조

```
├── index.html
├── css/
│   ├── tokens.css      # Adri design tokens
│   ├── base.css
│   ├── layout.css
│   └── components.css
├── js/
│   └── main.js
└── introduce.md        # copy source (원본)
```

## 로컬에서 미리보기

프로젝트 루트에서 HTTP 서버 실행:

```bash
cd /Users/sean/Study/cursorstudy/cs29
python3 -m http.server 8080
```

브라우저에서 [http://localhost:8080](http://localhost:8080) 접속.

> `index.html`을 직접 열어도 대부분 동작하지만, 상대 경로 확인을 위해 서버 사용을 권장합니다.

## GitHub Pages 배포

**저장소:** [github.com/hyun-stone/hyunstone.github.io](https://github.com/hyun-stone/hyunstone.github.io)  
**라이브 URL (Pages 활성화 후):** [https://hyunstone.github.io](https://hyunstone.github.io)

### 코드 push — 완료

`main` 브랜치 root에 사이트 파일이 push되어 있습니다.

### Pages 활성화 — 한 번만 필요

GitHub PAT 권한 제한으로 Pages 설정은 웹에서 한 번 켜야 합니다:

1. [Settings → Pages](https://github.com/hyun-stone/hyunstone.github.io/settings/pages) 열기
2. **Build and deployment → Source:** `Deploy from a branch`
3. **Branch:** `main` / **`/ (root)`** → **Save**
4. 1~3분 후 [https://hyunstone.github.io](https://hyunstone.github.io) 확인

### 이후 업데이트

```bash
git add .
git commit -m "Update site"
git push origin main
```

## 디자인

[`.cursor/skills/adri-dark-web-design/`](./.cursor/skills/adri-dark-web-design/) 스킬 기준:

- Warm dark canvas (`#0f0f0d`)
- Display weight 400, hairline borders, no drop shadows
- 섹션: Hero → Approach → Stats → Work → Testimonials → Career → FAQ → Contact

## 콘텐츠 수정

`introduce.md` 수정 후 `index.html` 해당 섹션을 수동 업데이트하세요.

## 이미지 출처

| 파일 | 출처 |
|------|------|
| `assets/images/order-pipeline.jpg` | [Unsplash](https://unsplash.com/photos/photo-1558494949-ef010cbdcc31) — Centique (server room) |
| `assets/images/promotion-engine.jpg` | [Pexels](https://www.pexels.com/photo/sale-sign-beside-a-miniature-shopping-cart-5632346/) — Kaboompics (sale sign + shopping cart) |
