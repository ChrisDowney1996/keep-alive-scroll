<script>
export default {
  name: 'keep-alive-scroll',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  activated () {
    const keepAliveScrollDOM = this.$refs.keepAliveScroll
    if (keepAliveScrollDOM) {
      const scrollTop = Number.parseInt(keepAliveScrollDOM.getAttribute('data-keep-alive-scroll-top'))
      const scrollLeft = Number.parseInt(keepAliveScrollDOM.getAttribute('data-keep-alive-scroll-left'))
      keepAliveScrollDOM.scrollTop = (!Number.isNaN(scrollTop) && scrollTop > 0) ? scrollTop : 0
      keepAliveScrollDOM.scrollLeft = (!Number.isNaN(scrollLeft) && scrollLeft > 0) ? scrollLeft : 0
    }
    this._hasKeepAlive = true
  },
  methods: {
    scrollListener (e) {
      if (this._hasKeepAlive) {
        const el = e.target
        el.setAttribute('data-keep-alive-scroll-top', el.scrollTop.toString())
        el.setAttribute('data-keep-alive-scroll-left', el.scrollLeft.toString())
      }
    }
  },
  render (h) {
    return (
      h(this.tag, {
      ref: 'keepAliveScroll',
      on: {
        scroll: this.scrollListener
      }},
      this.$slots.default)
    )
  }
}
</script>
