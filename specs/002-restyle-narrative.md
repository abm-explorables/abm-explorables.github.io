# spec 002: restyle + narrative — Cont-Bouchaud explorable

Status: draft (Yuito レビュー待ち)
前提資料: specs/001-v0-kickoff.md (v0, 完遂済み), notes/ui-de-ai-research.md (§5 補正含む)

## Goal
v0 で公開した Cont-Bouchaud explorable から AI tell を除去し、copy を読者(金融サラリーマン)向けに書き直す。
ページ構造(1画面1デモ)と sim ロジックは不変。

## Locked decisions (Yuito, 2026-06-07)
- **視覚文法: dark 維持**。背景・基本レイアウトは現行のまま、tell だけ除去する
- **構造: 現構造維持**。scrollytelling / インライン widget はやらない
- **copy: 書き直す**。最優先は金融用語の正確性 — 実在する標準用語のみ使い、**存在しない名詞を無理やり連結した造語を作らない**。トーンは ncase 寄り(話しかける・実験を促す)だが用語の正確性に従属
- **配色: regime 軸に一本化**。sub=青 / near=琥珀 / super=赤 の3色を唯一の意味色システムに昇格、装飾用 accent は全廃
- **見出しの italic 廃止は確定**。書体は現状維持(注: Fraunces はラテン専用で、日本語見出しの実体はフォールバック serif。Fraunces が効くのは数字・英語ラベルのみ)
- **「いま見えていること」の更新を間引く**(Yuito, 2026-06-07 追記)。臨界近傍で regime 判定がバタつくと文章がチカチカするため、ヒステリシスを入れる
- 実装中に新たな美的判断が発生したら、実装を止めて選択肢+帰結を Yuito に提示する(AI は実装担当、方向決定はしない)

## Non-goals
明背景化 / カード解体 / scrollytelling / 文中インライン widget / 2本目のデモ / sim ロジック・パラメータの変更 / 配信構成(Astro・Pages)の変更

## Requirements (EARS)

### Visual — tell 除去
- WHEN ページが表示される THE SYSTEM SHALL gradient 背景のサーフェスを表示しない(カード・トラック等は単色サーフェスのみ)
- WHEN ページが表示される THE SYSTEM SHALL pill 形状(`border-radius: 999px` 等)の要素を表示しない
- WHEN ページが表示される THE SYSTEM SHALL eyebrow(uppercase + letter-spacing のセクションラベル)および「· 01」型の連番マーカーを表示しない
- WHEN 見出しが表示される THE SYSTEM SHALL italic を使用しない(現 `h1 em` の italic 廃止)
- WHEN 任意の要素が表示される THE SYSTEM SHALL 同一要素に border と box-shadow を併用しない
- WHEN テキストが表示される THE SYSTEM SHALL monospace フォントの使用を数値リードアウト・軸ラベル・モデル引用に限定する(UI ラベル一般には使わない)

### Visual — 色の意味論
- WHEN 色が意味を持って使われる THE SYSTEM SHALL regime 3色(sub=青 / near=琥珀 / super=赤)のみを使用する。neutral(bg / text / muted / 罫線)は無彩色〜低彩度に限る
- WHEN regime が遷移する THE SYSTEM SHALL バッジ・リードアウト・本文強調・図中要素を同一の regime 色で連動させる(現実装の連動は維持)
- WHEN 正規分布オーバーレイが描画される THE SYSTEM SHALL regime 色と衝突しない neutral で描画する

### Copy
- WHEN copy(lede / stories / foot / badge / UI 文言)を含む THE SYSTEM SHALL 実在の金融・統計用語のみを使用する(各用語は標準的な定義が確認可能であること)
- WHEN copy を書き直す THE SYSTEM SHALL 新規造語・不自然な名詞連結を含まない
- WHEN copy draft が完成する、実装者 SHALL Yuito のレビュー通過までデプロイしない(**gate**)

### 挙動 — regime 表示の安定化
- WHEN regime 判定が tick 間で変動する THE SYSTEM SHALL story(「いま見えていること」)および badge の文言・色を即時切替せず、新しい regime が連続 N tick(既定 20 ≈ 1.5 秒)維持された場合のみ切り替える
- WHEN regime が安定している THE SYSTEM SHALL 表示を現行どおり維持する(間引きは「切替の抑制」であり、定常表示には影響しない)
- 数値リードアウト(巨大クラスタ % / κ / 最大変動)は対象外(毎フレーム更新を維持)

### Sim 不変
- WHEN restyle 後のページで同一のパラメータ操作を行う THE SYSTEM SHALL criticality.html と同一の sim 挙動(c=1 近傍の相転移、super-critical での fat tail、尖度上昇)を示す
- 担保方法: `<script>` ブロックの diff ゼロ。例外は次の2つのみ、いずれも表示層で `step()` / `stats()` は不変:
  1. 色値の直書き箇所(#ff5e57 等)— regime 一本化に伴う色値のみの変更、該当行を PR で列挙
  2. `paintUI()` 内の regime 表示ヒステリシス追加(上記「regime 表示の安定化」要件)

## Constraints
- sim ロジック無改変(v0 から継続)。ただし script 内の hex 直書き色(#ff5e57 等)は regime 一本化に伴い変更が必要になる可能性がある → 変更するなら「色値のみ・該当行列挙」を条件に許可
- 美的判断の追加発生時は Yuito に戻す(memory: design-direction-is-yuitos)

## Tasks
1. **棚卸し**: 現 CSS+script 内色値から tell 該当箇所と全色値を列挙 → 削除/置換マッピング表を作る(このとき script 内の色変更が必要な行を確定)
2. **style 差し替え**: ContBouchaud.astro / Base.astro の token を regime 3色 + neutral に再編、tell 除去要件を全適用
3. **copy draft**: lede / stories(sub・near・super)/ foot / badge 文言を書き直し → **Yuito レビュー(gate)**
4. レビュー反映 → ローカルで criticality.html と並べて挙動目視比較 → push & deploy
5. 本番 URL で acceptance criteria 確認

## Acceptance criteria
- [ ] gradient / pill / eyebrow / 連番 / italic 見出しが DOM・CSS に存在しない(grep で確認可能)
- [ ] 使用色 = neutral 系 + regime 3色のみ(CSS と script の色値棚卸し表で照合)
- [ ] mono フォントが数値・軸ラベル・モデル引用以外に使われていない
- [ ] copy が Yuito レビュー通過(用語の実在性・造語ゼロ)
- [ ] sim 挙動が criticality.html と一致(相転移 / 分布 / スライダー応答)
- [ ] 本番 URL で上記すべて成立

## Checklist — 要件の完全性検証
- [ ] 「AIっぽさ」が曖昧語のまま残っておらず、除去対象が列挙で閉じている(gradient / pill / eyebrow / 連番 / italic / border+shadow 併用 / mono 濫用)
- [ ] copy の合否判定者が明記されている(Yuito gate)
- [ ] regime 3色「以外」に許される色(neutral)の範囲が定義されている
- [ ] sim 不変の検証方法が具体的(script diff ゼロ + 例外条件の明示)
- [ ] 「工数最小(dark 維持)」の決定と矛盾するタスクが混入していない(カード解体・構造変更が入っていない)
- [ ] 美的判断が必要になった場合のエスカレーション先が書かれている

## Open(kickoff をブロックしない)
- Fraunces の読み込みを落とすか(日本語には効いておらず、消すと font 1書体分軽くなる。見た目への影響は数字・英語ラベルのみ)— 既定は現状維持
