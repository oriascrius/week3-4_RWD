// postcss.config.js
// 使用 ES 模块语法
import tailwindcss from 'tailwindcss';  // 提供了高效的样式编写方式
import autoprefixer from 'autoprefixer'; // 确保样式在各种浏览器中兼容
// import cssnano from "cssnano"; // 优化和压缩最终生成的 CSS 文件，提高页面加载速度。
// 上面要先改成 ES 模块 要不然照著 tailwind 安裝順序只有貼下方會錯誤
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
// export default {
//   plugins: [tailwindcss("./tailwind.config.js"), autoprefixer, cssnano],
// };