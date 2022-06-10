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

このように、コンポーネントは**props**と呼ばれるパラメータを受け取り、return()でDOMに描画する内容を指定している。このreturn()以下は、DOMに描画すべき
ものの軽量な記述形式である、React要素というもので、このなぜかJavaScriptの中にHTMLタグをべた書きしているような書き方はJSX記法と呼ばれている。

propsは親コンポーネント（ShoppingListコンポーネントのexport先)で`<ShoppingList name="Ken" />`のように渡される。

コンポーネントには関数コンポーネント(functional component)とクラスコンポーネント(class component)の2種類ある。

今では*クラスコンポーネントはほとんど使われていないそう。*(stateという、コンポーネントがもつ状態をコンポーネントに持たせるためには
クラスコンポーネントを使用するしかなかったため、以前(v16.8まで?)はクラスコンポーネントを使用していたが、現在は関数コンポーネント
にもstateを持たせることが可能になっているため、記述量の少なく、thisによる混乱も生じにくい関数コンポーネントが使用される。

React公式のチュートリアルはクラスコンポーネントで記述されていた。自分が、上記のように、現在ではクラスコンポーネントを使用しないと知ったのは
リュートリアルを終えてからだった。

そこで、チュートリアルの発展としてクラスコンポーネントの部分は関数コンポーネントにするべく修正を行った。

また、Reduxの勉強も同時並行でやることになったので、Reduxの内容もこのチュートリアルのコードに組み込んでいけたら、と思って実践した。

わかりやすい公式ドキュメントの記事と、参考にさせていただきましたQiita記事を執筆してくださった方に感謝です。






