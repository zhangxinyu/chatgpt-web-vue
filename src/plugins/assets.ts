/*
 * @Author: mjjh
 * @LastEditTime: 2023-04-08 14:14:40
 * @FilePath: \chatgpt-web\src\plugins\assets.ts
 * @Description: 导入css样式
 */
import 'katex/dist/katex.min.css'
import '@/styles/lib/tailwind.css'
import '@/styles/lib/highlight.less'
import '@/styles/lib/github-markdown.less'
import '@/styles/global.less'

/** Tailwind's Preflight Style Override */
function naiveStyleOverride() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

function setupAssets() {
  naiveStyleOverride()
}

export default setupAssets
