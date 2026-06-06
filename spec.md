# spec: ABM Explorables Site — v0 kickoff

## Goal
ABM を一般（金融サラリーマン中心、大学生も）に広めるための explorable explanation サイト。
v0 は Cont-Bouchaud の臨界デモ一本を Astro で GitHub Pages に公開するところまで。

## Locked decisions
- Framework: **Astro**（content = MDX, interactive = island）
- Hosting: **GitHub Pages（無料）**, URL = `https://<USERNAME>.github.io/<REPO>`（カスタムドメインなし）
- Demos run **client-side**（ブラウザ内 JS、バックエンドなし、Python なし）
- MVP scope: **Cont-Bouchaud デモ 1 本 + 最小 landing**
- UI / visual design は**後回し**（機能優先。restyle は後で scoped style を差し替えるだけ）

## Non-goals (v0)
複数デモ / 凝ったデザイン / narrative essay の完成版 / speculation-game-info の全モデル port。

## Repo structure
```
src/
  layouts/Base.astro              # 共通 chrome（head, fonts 読み込み, footer）
  pages/index.mdx                 # landing（プレースホルダ copy で可）
  components/ContBouchaud.astro   # 既存 criticality.html を移植した scoped component
astro.config.mjs
.github/workflows/deploy.yml
```

## Tasks
1. `npm create astro@latest`（minimal template）+ `@astrojs/mdx` を追加。TS は軽くで可、無理に使わない。
2. 既存 **criticality.html**（Cont-Bouchaud デモ）を `ContBouchaud.astro` に移植:
   - markup → template / `<style>` → scoped `<style>`（Astro が自動スコープ。**Shadow DOM 不要**）/ IIFE → `<script>`
   - **sim ロジックは一文字も変えない**。self-contained のまま（既に IIFE でスコープ済み）
   - `src/pages/index.mdx` の本文中に `<ContBouchaud />` を 1 つ置く
   - Google Fonts の `<link>` は `Base.astro` の `<head>` に移す
3. `astro.config.mjs`:
   - `site: 'https://<USERNAME>.github.io'`
   - `base: '/<REPO>'`
   - `integrations: [mdx()]`
   - **重要 / 地雷**: project page なので base path 必須。内部リンク・静的アセットは
     `import.meta.env.BASE_URL` 経由にして `/REPO` 配下で 404 させないこと。
4. Deploy: 公式の **Astro GitHub Pages workflow**（`withastro/action` + `actions/deploy-pages`、
   その時点の最新版を使う）を `.github/workflows/deploy.yml` に置く。
   repo の **Settings → Pages → Source = GitHub Actions** に設定。
5. push → Actions が走って `https://<USERNAME>.github.io/<REPO>` で公開を確認。

## speculation-game-info（v0 では触らない。次フェーズの仕様だけ記録）
- Lux-Marchesi / Minority Game / GCMG / SG の**実装を JS port 元（= 仕様）として読む**。
- 既存の結果（fat tail / vol clustering / 相転移）は **port の validation target**
  （port した JS が同じ定性挙動を再現するか確認してから載せる）。
- **CSV をサイトに流し込まない**。各デモは client-side で live に走らせる。
- 重いモデル（CLOB harness, LangGraph 系）は対象外。60fps 出る軽量 ABM だけ。

## Acceptance criteria
- [ ] `https://<USERNAME>.github.io/<REPO>` で Cont-Bouchaud デモが動く（スライダー / 相転移 / 分布パネル）
- [ ] base path 配下でアセット・リンクが 404 しない
- [ ] デモの sim 挙動が criticality.html と一致（張りぼて化していない）
- [ ] push で自動 deploy が走る

## Open（軽い。kickoff をブロックしない）
- repo 名（暫定 `abm-explorables`。変えるならここで確定）
- package manager（npm 既定）