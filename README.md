# ゆめみ フロントエンド コーディング テスト

## 環境構築の手順

### 1. リポジトリをクローンする

```bash
git clone https://github.com/nyk9/yumemi-coding-test.git
```

### 2. プロジェクトのディレクトリに移動する

```bash
cd ./yumemi-coding-test/
```

### 3. 依存パッケージをインストールする

```bash
bun i
```

または

```bash
pnpm i
```

- ※　手元の環境ではbun もしくは pnpm でのみパッケージが正しくインストールされたので、2つのみ記載しています。以下はbunでの手順を記載しています

### 4. 環境変数を設定する

```bash
touch .env.local
```

- .env.local ファイルを作成し、以下の内容を記述する
- ※ この課題では共通のAPI Keyを使用しているため、publicリポジトリで公開しています。ご容赦ください。

```bash
NEXT_PUBLIC_API_URL = https://yumemi-frontend-engineer-codecheck-api.vercel.app
NEXT_PUBLIC_API_KEY = 8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ
```

### 5. ローカルサーバーを立ち上げる

```bash
bun run dev
```

### 6. ブラウザでアクセスする

[http://localhost:3000](http://localhost:3000)

### 7. テストを実行する

```bash
bun run test
```
