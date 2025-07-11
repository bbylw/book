# 经典思想书单 (A Curated Reading List)

这是一个精美的静态网页项目，用于展示一份精心策划的、专注于经济、政治与社会思想的经典著作书单。项目采用现代、典雅的设计风格，响应式布局确保在桌面和移动设备上都有出色的浏览体验。

## ✨ 项目特色

- **典雅设计**：采用“午夜蓝”与“复古金”的配色方案，营造出“学者书房”般的静谧、高级感。
- **精美卡片**：每本书都以带有模拟书脊效果的精装书卡片形式展示，视觉效果出众。
- **响应式布局**：无论在电脑、平板还是手机上，都能完美适配屏幕，提供舒适的阅读体验。
- **纯静态**：项目仅由 HTML, CSS, 和 JavaScript 构成，无需任何后端或复杂的构建过程，部署极其简单快速。
- **高度可定制**：您可以非常轻松地通过编辑 `index.html` 文件来添加、删除或修改书单内容。

## 🚀 免费部署指南

您可以将此项目免费部署到互联网上。以下是使用两个流行平台（GitHub Pages 和 Cloudflare Pages）的详细步骤。

### 方案一：使用 GitHub Pages 部署

GitHub Pages 是托管静态网站最简单、最直接的方式之一。

**前提**：您需要一个 [GitHub](https://github.com/) 账户。

1.  **创建新的代码仓库 (Repository)**
    - 在 GitHub 上，点击右上角的 `+` 号，选择 `New repository`。
    - 为仓库命名，例如 `classic-books-list`。
    - 确保仓库是 `Public` (公开) 的。
    - 点击 `Create repository`。

2.  **上传项目文件**
    - 在新创建的仓库页面，点击 `Add file` > `Upload files`。
    - 将项目中的 `index.html` 文件以及 `css` 和 `js` 两个文件夹拖拽到上传区域。
    - 提交更改 (Commit changes)。

3.  **启用 GitHub Pages**
    - 进入您的仓库主页，点击上方的 `Settings` 标签。
    - 在左侧菜单中，选择 `Pages`。
    - 在 `Branch` 部分，选择 `main` (或 `master`) 分支，文件夹选择 `/(root)`。
    - 点击 `Save`。

4.  **完成！**
    - 等待几分钟，GitHub Pages 会为您生成一个网址，通常格式为 `https://<你的GitHub用户名>.github.io/<仓库名>/`。
    - 您可以在刚才的 `Pages` 设置页面找到这个链接。您的书单网站现在已经成功上线！

### 方案二：使用 Cloudflare Pages 部署

Cloudflare Pages 提供了更快的全球访问速度和更强大的功能（如自定义域名、重定向等），同样完全免费。

**前提**：
- 您需要一个 [Cloudflare](https://www.cloudflare.com/) 账户。
- 您已经按照**方案一**的步骤，将代码上传到了一个 GitHub 仓库。

1.  **登录 Cloudflare 并连接到 Git**
    - 登录您的 Cloudflare 仪表板。
    - 在左侧菜单中，进入 `Workers & Pages`。
    - 点击 `Create application` > 选择 `Pages` 标签 > 点击 `Connect to Git`。

2.  **选择代码仓库**
    - 选择您刚刚创建并上传了项目文件的 GitHub 仓库（例如 `classic-books-list`）。
    - 点击 `Begin setup`。

3.  **配置构建与部署**
    - **项目名称**：可以保持默认或自定义。
    - **生产分支**：选择 `main` (或 `master`)。
    - **构建设置**：这是最关键的一步！
        - **框架预设 (Framework preset)**：选择 `None`。
        - **构建命令 (Build command)**：**留空**，因为我们是纯静态网站，不需要构建。
        - **构建输出目录 (Build output directory)**：**留空** (或设置为 `/`)。

4.  **部署！**
    - 点击 `Save and Deploy`。
    - Cloudflare 会立即开始部署您的网站。整个过程通常在几十秒内完成。
    - 部署成功后，Cloudflare 会提供一个 `*.pages.dev` 的免费域名。您的书单网站现在已经通过全球 CDN 网络发布！

## 💻 本地预览

无需任何服务器，直接在您的文件浏览器中找到 `index.html` 文件，然后用任意现代浏览器（如 Chrome, Firefox, Edge）打开它即可预览。

## ✍️ 如何修改书单

1.  用任何文本编辑器打开 `index.html` 文件。
2.  找到 `<!-- 书籍卡片 -->` 注释所在的位置。
3.  复制一个现有的 `<div class="book-card">...</div>` 代码块。
4.  修改其中的书名、作者和推荐理由等文本即可。

---

*该项目由 Gemini AI 协助构建。*