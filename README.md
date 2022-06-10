## Reactチュートリアルをいじって遊んでみる

まずcloneしたら

```
cd ReactTutorial
```
```
yarn install
```
```
yarn start
```

ReactチュートリアルとReduxの解説を読んだ後で、こちら（[React チュートリアルの三目並べに Redux を導入する](https://qiita.com/hey_cube/items/e20a0267c65b03937818)）の
記事を参考に、Reactチュートリアルで作成したファイルをリファクタリングしてみた。

やったこと

- Reactチュートリアル（解説通り進める)
- 上記の記事を参考に、Reduxを導入
- コンポーネントを切り出してファイル分割
- class componentからfunctional componentにリファクタリング

### Reactとは

宣言的で効率的で柔軟な、JavaScriptライブラリ。UIの構築に役立つ。

UIにおけるパーツをコンポーネントと呼ばれる小さな、独立した(関心を分離した)単位に切り分けることで、修正が容易になったり、大規模なサービスにスケールすることも可能になってくる。(自分がそのように振舞えるとは言っていない)

Reactは従来のJavaScriptのようにDOMを直接いじるのではなく、仮想DOMという形でコピーしたDOM?を操作して、実際のDOMとの差分のみを描画する形で、SPAの仕組みを実現しており、
ユーザがサイト内部で何か操作を行ってもページ遷移がなく、ユーザ体験を損なわない（らしい）

``` javascript
const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Tomato</li>
        <li>Banana</li>
        <li>Egg</li>
      </ul>
    </div>
  )
}

// Example usage: <ShoppingList name="Ken" />
```
上記コードは関数コンポーネント(functional component)の例である。

このように、コンポーネントはpropsと呼ばれるパラメータを受け取り、return()でDOMに描画する内容を指定している。このreturn()以下は、DOMに描画すべき
ものの軽量な記述形式である、React要素というもので、このなぜかJavaScriptの中にHTMLタグをべた書きしているような書き方はJSX記法と呼ばれている。

propsは親コンポーネント（ShoppingListコンポーネントのexport先)で`<ShoppingList name="Ken" />`のように渡される。




