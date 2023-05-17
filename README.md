# Viteで作成したプロジェクトで、 Custom Elements内にReactを使ったサンプル

# Custom Elements内にReactを使ったサンプル

![React Version Badge](https://img.shields.io/badge/React-18.2.0-blue.svg)

## 概要

- Web Components (Custom Elements) 内にReact使用し、外部と内部とでデータのやり取りを検証したサンプル
- Viteで作成したReactプロジェクトをベースにしている

## 検証した項目

- Webコンポーネントの属性値を内部のReactにPropsとし渡す
- React内からCustom Elements外へイベントを送る
- Custom Elements内に外部のCSSファイルを読み込み
- Viteで複数のエントリポイントをビルドする指定方法
- Viteでファイル名を固定してビルドする指定方法

## スクリーンショット

初期値 | 更新後
--- | ---
![初期値](https://user-images.githubusercontent.com/1934996/237022461-e116383d-ab99-4c99-b86b-ba1d8078af61.png) | ![値の更新後](https://user-images.githubusercontent.com/1934996/237017949-3a64cef4-022a-41dc-9e76-65810658be2c.png)


## 使い方

### 初期設定

```sh
npm ci
```

### ローカル環境でビルド

```sh
npm build
```

### ローカル環境で起動

```sh
npm run dev
```
