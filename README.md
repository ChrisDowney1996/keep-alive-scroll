> keep-alive-scroll让keep-alive下固定宽度或者高度的组件在再次激活组件的时候scroll回到原来的位置

## 快速开始

### 安装

```console
npm install keep-alive-scroll --save
```

```javascript
import KeepAliveScroll from 'keep-alive-scroll'
Vue.use(KeepAliveScroll)
```

### 使用
```vue
<keep-alive-scroll>
  <div>123</div>
</keep-alive-scroll>
```

### Options props

Prop      | Type      | Optional  | Default   | Description
--------- | --------- | --------- | --------- | -----------
tag       | String    | Yes       | div       | 该组件生成的标签，默认是div。

## License

keep-alive-scroll is licensed under by [WTFPL License](http://www.wtfpl.net/).
