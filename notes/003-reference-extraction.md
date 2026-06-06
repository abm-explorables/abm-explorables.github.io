# 003 参照抽出 — Macrocosm / Simudyne / ACES(Yuito, 2026-06-07)

HOME 設計(spec 003)の一次資料。Yuito 自身による3サイトの実地調査と抽出。

## 三者三様の性格

### Macrocosm(macrocosm.group / Framer 製)
- J. Doyne Farmer の会社。copy が「testable, tractable, actionable」「Backtested. Verified. Trusted.」のような**短い断定の三連**で組まれる
- "Built on agent-based AI — not black boxes" / "Most machine learning breaks with the unexpected. Macrocosm thrives on it... counterfactual simulations" — **反ML・反 equilibrium のポジショニングを正面に**
- 読者を名指しで segmenting(asset manager / energy firm / central bank / insurance / policy maker)、partner ロゴの壁、抽象 hero、大きめ type + 余白 + モーション

### Simudyne(simudyne.com / WordPress)
- enterprise/金融寄りで一番「硬い」。プロダクトを動詞ラベリング(Discover / Simulate / Reason)、01/02/03 numbered カード、dark セクションに白抜きロゴ壁
- hero が「Nasdaq の実データに基づく可視化」。信頼語彙(firewall・proprietary・patents・6-step calibration)+ 技術シグナル(Parquet・Jupyter)
- **Model Garden と Research を別サブドメインに分離**、/brand/ ページあり → multi-demo + 研究信頼性の構造に直接効く参照

### ACES(acesinc.co.jp / Studio.Design)
- **3社で一番 slop から遠く、本サイトに一番近い**。制作 = necco、設計を全公開
- 配色 near-monochrome: White #FCFCFC / Light Gray #E9E9E9 / Gray #4B4B4B / Black #1C1C1C。**色相アクセントゼロ**。グラデ・バッジ無し
- signature は1つだけ: ロゴ「A」内に Three.js で「複雑な世界」をガラス箱として描画、カーソル連動。背景 Lottie。アイコンは線のみ
- コンテンツ哲学:「複雑で高度な技術を分かりやすい言葉に、**かつ情報の密度は上げる**(平易にしすぎない)」「言葉を大切にし、デザイン主導になりすぎない」
- necco の出発点:「優秀な会社なのは分かるが、具体的に何がすごいのか普通の人には分からない」— **ABM が抱える問題そのもの**

## 共通フォーミュラ(抽出)
1. **抑制=信頼**。装飾最小・余白・最小パレット・強い type 一系統。これがそのまま反スロップの作法
2. **三連の断片見出し**。短い断定×3 + ピリオド。営業臭くない自信の出し方
3. **反ML・反均衡のウェッジを正面に**。言い回しは研究材料(コピペ禁止、自分の言葉で)
4. **信頼の足場**: ロゴ壁・backtested/calibration の明示・実データ hero。読者ゼロの現状では「**デモが実際の stylized facts を再現すること」自体が credibility**
5. **signature モーメントは1つ**。インタラクションを撒かない、記憶に残る hero を1つ
6. **Research / Model 置き場の分離**(Simudyne)— multi-demo 構造の伏線

## 借用の重み付け
- **ACES: レイアウトまで借りてよい**(無彩色・content-first が essay グラマーと一致、借りてもスロップが戻らない)
- **Macrocosm / Simudyne: copy discipline だけ**(三連・反MLウェッジ)。chrome(ロゴ壁・numbered card・free-trial CTA)は SaaS 寄りなので借りない

## navy の色システム原則(Yuito)
ACES が credible なのは**パレットの抑制とレイアウトが1つのシステム**だから — 切り離せない。
- navy は「グレー/黒が担ってた役割」を引き継ぐ **neutral anchor**。装飾アクセントとして撒かない
- 構成: navy を一番暗いベース + off-white + くすんだ navy グレー。field 全体は静かに
- **色相が pop してよいのはデータ意味論を背負う箇所だけ**(regime 色: 赤=危険、青=安定)。背景が静かだからこそデータ色が効く
- **禁じ手**: navy gradient / navy 塗りのカード / navy バッジ — 足した瞬間、消したスロップが navy の皮を被って裏口から戻る。navy は「落ち着いた地」であって「飾り」ではない

## 深掘り結果(CC 取得, 2026-06-07)

### Simudyne /brand/ — brand token
([simudyne.com/brand](https://simudyne.com/brand/))
- Primary: Dark Purple `#0F033C` / Vivid Blue `#002DFF`。Secondary: Cyan `#00B5FF` / Light Grey `#E4E8E8`
- **Diagram 専用色をトークンレベルで分離**: Deep Blue `#09148A` / Purple `#3D0098` / Pink `#E61B72` — **「UI 色」と「データ色」の分離 = navy 原則と同型の構造**を ABM シミュレーション分野の先行事例が既にやっている
- Pink `#E61B72` を「データ内の異質要素」に当てる用法 → criticality 系可視化(感染ノード・avalanche)に流用可能なパターン
- Type: PX Grotesque(本文)+ IBM Plex Sans(console/数値)— 本文と数値表示のフォント分離、これも現行実装(Spectral + Plex Mono)と同方針
- トーン6属性: Optimistic / Expertise / Open / Authentic / Direct / Modern

### necco note 15506 — ACES 制作裏側
([necco.inc/note/15506](https://necco.inc/note/15506/), [制作実績](https://necco.inc/project/aces-corporate-site/))
- デザインコンセプト(verbatim): 「シンプル」「余白」「**複雑なものを複雑なまま扱う**」「柔軟性」「構造化」「知性」
- メインビジュアルの核: 「背景に広がる複雑な世界を、複雑なまま、ACES の視点で切り取ってシンプルにする」— **複雑さは消さず、視点(フレーミング)で整理する**。explorable の HOME hero にそのまま使える設計思想
- 配色は純白・純黒を避けて丸める(`#FCFCFC` / `#1C1C1C`)→ dark navy でも純 #000 を避ける同手法(現行 --bg #0b0d12 は既に準拠)
- **無彩色 anchor の冷たさ補償リスト**: 言葉・余白・オブジェクトサイズ・文字サイズ/ウェイト・幾何学モチーフ・白黒グラデ・動き・写真 — navy anchor に転用できるチェックリスト
- 役割分担: 宣言的・再生型モーション = Lottie / 生成的・連続的背景 = WebGL。ABM では canvas/WebGL = シミュレーション本体、Lottie 的手法は遷移・説明図に限定が筋
- ロール別 IA 手順: 誰が何を確かめに来るか → 必要ページ逆算 → **新規で見せたいページからワイヤー着手** → HOME の section 設計手順に流用
- 借用不可(非公開): Three.js shader 詳細、タイポの数値スケール — この2点は自前で決める
