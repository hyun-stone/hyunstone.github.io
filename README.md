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

## GitHub Pages 배포 (나중)

1. GitHub에 새 repository 생성 (예: `kang-portfolio`)
2. 이 디렉터리 내용을 push (`index.html`이 repo **root**에 있어야 함)

   ```bash
   git init
   git add index.html css/ js/ README.md introduce.md
   git commit -m "Add Kang portfolio static site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. GitHub **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **`main`** / **`/ (root)`**
4. 1–2분 후 `https://<username>.github.io/<repo>/` 에서 확인

### 배포 시 주의

- CSS/JS 경로는 `./css/...`, `./js/...` 상대 경로 사용 (project site 호환)
- 빌드 도구 불필요 — push만으로 배포됨

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
