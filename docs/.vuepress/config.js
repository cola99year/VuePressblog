module.exports = {
   title: '可贺博客', // 设置网站标题
   head: [
   // 网站logo
    ['link', {rel: 'icon', href: '/img/logo.png'}],
   //  样式
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
  ],
   //网站首页欢迎语
   description: '~ 鄙人的一些笔记汇总 ~',

   //插件
   plugins: [
      ['@vuepress/medium-zoom'],//解决图片资源中文路径问题
      ['vuepress-plugin-code-copy', true],//一键复制代码
      ['@vuepress/back-to-top'],//右侧的一键置顶
      ['@vuepress/last-updated'],//文章的末尾会自动显示文章的更新日期
   ],
   markdown:{
      // 解决中文路径问题
      extendMarkdown: md => {
         md.use(require("markdown-it-disable-url-encode"));
       },
      // 网站浏览文章的侧边栏可以读取到markdown的2-4级标题
      extractHeaders:['h2','h3','h4']
   },
   
   themeConfig: {
      // 配置顶头导航栏、
      nav: require('./nav'),
      // 设置侧边栏自动读取markdown笔记的标题
      sidebar: 'auto',
   }
}