# UI の「AIっぽさ」除去 — リサーチノート (2026-06-07)

> restyle フェーズ(v0 では後回し)の一次資料。spec.md「UI / visual design は後回し」の後続作業用。

## 1. AI生成UIの「tell」(シグナル強度順)

ソース: [Impeccable "Slop" catalog](https://impeccable.style/slop/), [925 Studios guide](https://www.925studios.co/blog/ai-slop-web-design-guide), [prg.sh analysis](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website), [Anthropic cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics), [RAXXO dark mode](https://raxxo.shop/blogs/lab/dark-mode-design-that-doesnt-look-ai)

**Tier 1 — 一発でバレる**
1. Purple/indigo→blue gradient(原因は Tailwind の `bg-indigo-500` が学習データを汚染した説: [DEV記事](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p))
2. Dark bg + neon accent + glassmorphism card + gradient orb(「v0 aesthetic」)
3. Gradient text on headings
4. 角丸カード + hairline border + 広いソフト shadow の同時使用(Impeccable いわく "the single most recognizable tell")
5. アイコンタイル+見出し+短文の3カラム同一カードグリッド

**Tier 2 — 構造的な癖**
6. Eyebrow / kicker の濫用(uppercase letter-spaced ラベル)、pill chip
7. Pill badge / pill button everywhere、全要素同一 border-radius
8. 均一 spacing(全セクション同 padding → リズムなし)
9. 全部中央揃え
10. Italic serif display headline(Claude tell の筆頭: [ChatPRD](https://www.chatprd.ai/how-i-ai/claude-design-and-gpt-images-2-building-landing-pages-slides-and-brand-kits))。Instrument Serif / Fraunces italic が典型
11. 番号付きセクションマーカー(01/02/03)
12. フォント: Inter, Space Grotesk, Geist, Instrument Serif。**Fraunces は Anthropic 自身の cookbook が "Editorial" 推奨例に挙げている = LLM デフォルト圏内**

**Tier 3 — 弱いが累積**
13. bounce/spring easing、hover scale、全要素 fade-in
14. flat typography hierarchy(サイズ差 <1.25x、weight 400 vs 600 程度)
15. copy の tell: em-dash 濫用、"streamline/empower" 系
16. cream/beige 背景(「tasteful AI surface」のデフォルト化)

## 2. criticality.html の現状診断

| 要素 | 該当 tell | 深刻度 |
|---|---|---|
| Dark navy + gradient panel card | Tier1 #2/#4 | 高 |
| Pill badge | Tier2 #7 | 高 |
| Mono uppercase eyebrow(+ 「· 01」番号) | Tier2 #6/#11 | 高 |
| Fraunces(しかも h1 em が italic) | Tier2 #10/#12 | 中〜高 |
| IBM Plex Mono を UI ラベル全般に | 「monospace everything = hackathon感」 | 中 |
| Spectral | 無害 | 低 |
| Canvas 可視化 | tell ではない。**最大の資産** | — |

「Fraunces + mono eyebrow + pill badge + dark gradient card」のセット一式 = 2026年現在、LLM に「editorial っぽくして」と頼んだ時の出力そのもの。個々のパーツより**セットで揃っていること**が最強のシグナル。

## 3. 対策(優先順)

a. **カードシステム解体**: explorable 本家(distill.pub / ciechanow.ski / ncase.me)はカードをほぼ使わない。本文1カラム+図はカラム幅を breakout。残すなら gradient 廃止、単色サーフェス3層で深度、radius 1〜2値、shadow か border どちらか片方。
b. **SaaS LP 文法 → 学術エッセイ文法**: eyebrow/pill 削除 → distill 流(タイトル・著者・日付・目次)。hero 中央揃え廃止、左揃え・本文即開始。**content-first density 自体が「人間が書いた」最強のシグナル**。
c. **タイポグラフィ**: 「珍しいフォント」より「凡庸なフォントの精密な組版」。Fraunces italic は即廃止。mono は データ値・軸ラベル専用に限定。階層はサイズ3x級・weight 極端(200 vs 800)で。
d. **色**: 本家は全部明るい背景(distill/ncase/ciechanowski/pudding 全て白基調)。dark 残すなら「1 viewport 1 accent」。色は**データセマンティクスで**割り当てる(buyer=暖色/seller=寒色、価格系列=固定色)— AI には出せないコンテンツ固有判断。
e. **図とインタラクションが本体**: 汎用UIを限界まで薄く、可視化に集中。文中インライン widget(ncase)、本文の単語と図の要素を同色リンク(distill/Wattenberger)。設計論の決定版: [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
f. **根拠ある不均一**: 図の幅3段(本文幅/breakout/full-bleed)、内容の重さで余白を変える。均一性=AI。

## 4. 参照サイト

- [Complexity Explorables](https://www.complexity-explorables.org/) — ABM explorable そのもの。構成が直接参考になる
- [ciechanow.ski](https://ciechanow.ski/) — 密度・組版・図の統合の最高峰
- [distill.pub](https://distill.pub/) + [guide](https://distill.pub/guide/) — breakout グリッド、脚注・目次システム
- [ncase.me](https://ncase.me/) — Parable of the Polygons(Schelling!)。題材的に最近接
- [pudding.cool](https://pudding.cool/) — scrollytelling、手書きアノテーション
- [wattenberger.com](https://wattenberger.com/) — テキスト‐ビジュアル結合
- [Ladder of Abstraction (Bret Victor)](https://worrydream.com/LadderOfAbstraction/) — パラメータ sweep 可視化の設計指針
- setosa.io — 軽量実装の手本

## TL;DR
直し方は色・フォントの差し替えではなく **SaaS LP 文法から学術エッセイ文法への乗り換え**(カード解体・eyebrow/badge 削除・明るい背景・本文即開始・図 breakout)。AI に真似できないのは「コンテンツ固有の設計判断」= データセマンティクスの色、文中 widget、根拠ある不均一。そこに投資する。
