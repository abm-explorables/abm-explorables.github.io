# spec 003: HOME 追加とサイト IA 再編

Status: draft — 参照抽出は受領済み(notes/003-reference-extraction.md)。残 input: HOME メッセージ実文言と signature moment の方向(下記)
前提資料: specs/001-v0-kickoff.md, specs/002-restyle-narrative.md, notes/ui-de-ai-research.md

## Goal
サイトを「デモ1枚」から「メッセージを持つサイト」に再編する。
HOME で「ABM はいいぞ」という本当に伝えたいメッセージを打ち出し、そこから具体的な事例(explorable)に飛ぶ構造。
参照モデル: **Macrocosm(商品を持たない版)** — 良さの抽出は Yuito から後送。

## Vision(Yuito, 2026-06-07)
- HOME = かっこいい画面 + コアメッセージ「ABM はいいぞ」の配置
- HOME → 個別事例ページへ誘導
- 事例は金融に限定しない: 将来的に交通(例: Nagel-Schreckenberg、渋滞の自然発生)、疫学(例: ネットワーク上の SIR)等も「事例の一つ」として並ぶ
- 金融 ABM は最初の事例であって、サイトの定義ではない

## IA(情報設計)
```
/                       HOME — メッセージ + 事例への導線
/cases/cont-bouchaud/   既存 Cont-Bouchaud explorable(index から移動)
/cases/...              将来の事例(v0 では作らない。IA 上の枠だけ)
```
- WHEN ルート URL にアクセスする THE SYSTEM SHALL HOME を表示する(デモ直置きをやめる)
- WHEN HOME から事例導線を辿る THE SYSTEM SHALL Cont-Bouchaud ページに遷移する
- WHEN 旧 URL 構造を変更する THE SYSTEM SHALL base path(/abm-explorables)配下で全リンク・アセットを 404 させない(001 の地雷を継続警戒)

## Inputs
- [x] 参照3社の抽出(Macrocosm / Simudyne / ACES)— 受領 2026-06-07、notes/003-reference-extraction.md
- [x] 色システム原則 — navy = neutral anchor、hue pop はデータ意味論のみ(同 notes)
- [ ] HOME のコアメッセージ実文言 — CC が draft を出し、Yuito が gate(三連断定スタイル・反ML/反均衡ウェッジ・Yuito の言葉に直す)
- [ ] signature moment の中身(1つだけ。何を hero にするかは方向決定 = Yuito)
- [ ] (補強材料、background 取得中) Simudyne /brand/ token、necco note 15506

## signature moment — 採択: firefront(延焼 / 森林火災 SOC)
Yuito 採択 2026-06-07。`public/sketches/firefront.html` を本採用、他4候補(contagion/murmuration/sandpile/physarum)と比較ページは削除済み(tuning は本 spec と HTML 冒頭に保持)。
- **色変更**: 火を赤→**青い炎(濃青 #2a4a8a → 淡青 #afcdff、芯ほど熱い)** に。Yuito 指定
- **意味論メモ**: サイトの色システムでは青=安定/sub-critical だが、HOME hero は「警告」ではなく「現象そのものの美」を見せる場、と割り切る。青の強度が火の前線という data を背負う(hue pop = データ意味論、の原則は維持)。デモページ(Cont-Bouchaud)の青=安定とは文脈で役割が異なる — 要 Yuito 最終確認
- 本実装で HOME hero に組み込む際は component 化(spec 003 Task 群)。tuning constants は HTML 冒頭(GROWTH_FRACTION / LIGHTNING_PER_FRAME / FIRE_SWEEPS_PER_FRAME / GLOW_FADE_S 等)

## Visual requirements(抽出より確定)
- WHEN HOME を表示する THE SYSTEM SHALL near-monochrome の静かな field(navy 最暗ベース + off-white + くすんだ navy グレー)で構成し、色相を持つ要素はデータ意味論を背負う箇所に限る
- WHEN HOME を構成する THE SYSTEM SHALL navy gradient / navy 塗りカード / navy バッジを含まない(禁じ手)
- WHEN インタラクティブ要素を置く THE SYSTEM SHALL signature moment を1つに限る(撒かない)
- WHEN 信頼を示す THE SYSTEM SHALL ロゴ壁・実績バッジ等の SaaS chrome ではなく「デモが実際の stylized facts(fat tail / vol clustering / 相転移)を再現すること」を credibility として提示する
- copy は短い断定の三連を基本形とし、反ML・反均衡のウェッジを正面に置く(参照の言い回しをコピペしない)
- レイアウトの借用重み: ACES はレイアウトまで可、Macrocosm/Simudyne は copy discipline のみ

## 002 との関係
- 002(restyle + narrative)は **Cont-Bouchaud ページ単体の品質**の話で、003 と独立に有効
- 002 の成果物は移動先 `/cases/cont-bouchaud/` にそのまま載る
- 推奨順序: **002 → 003**(002 は要件が閉じていて今動ける。003 は Yuito input 待ちでブロック中)— 順序の確定は Yuito
- HOME のビジュアル言語が確定したら、002 で決めた「dark 維持」と整合するか再確認する(齟齬が出たら spec に戻る)

## Non-goals (003)
2本目以降のデモ実装 / カスタムドメイン / CMS・ブログ機能 / Macrocosm の模倣(良さの「抽出」であってパスティーシュではない — notes §5 メタ警告)

## Constraints
- Astro + GitHub Pages 構成は維持(001 の locked decisions 継続)
- demos client-side 原則は維持
- 美的方向性の決定は Yuito(memory: design-direction-is-yuitos)。AI は選択肢提示と実装

## Tasks(Pending inputs 解消後に確定)
1. Macrocosm 抽出 + メッセージ copy を本 spec に反映、HOME のビジュアル/コンテンツ要件を EARS で確定
2. ルーティング再編: index.mdx → HOME、デモを /cases/cont-bouchaud/ へ。内部リンクは BASE_URL 経由
3. HOME 実装 → Yuito レビュー(gate)
4. deploy + 404 全数チェック(001 acceptance の再実行)

## Acceptance criteria(暫定 — input 後に追記)
- [ ] / で HOME、/cases/cont-bouchaud/ でデモが表示される
- [ ] base path 配下で 404 ゼロ(リンク・アセット全数)
- [ ] デモの sim 挙動が移動後も不変
- [ ] HOME のメッセージ・ビジュアルが Yuito レビュー通過

## Checklist
- [ ] HOME の「かっこいい」が Yuito の言葉で要件化されているか(AI の解釈で埋めていないか)
- [ ] メッセージ copy の出所が Yuito か
- [ ] URL 移動に伴うリンク切れの検証方法が書かれているか
- [ ] 002 との依存関係・順序が明記されているか
- [ ] 事例の将来拡張(交通・疫学)が IA に枠として存在するが、実装スコープに混入していないか

## Open
- デモ移動後、旧 index URL(= 新 HOME)を踏んだ既存共有リンクへの配慮は不要か(v0 共有がまだ少ない今のうちに動かすのが安い、という判断でよいか)
- 事例 URL 命名: /cases/cont-bouchaud/ か /finance/criticality/ か(ドメイン軸 vs モデル軸。事例が増えたときの分類に効く)
