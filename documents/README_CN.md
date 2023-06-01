<p style="display:flex;flex-flow:row nowrap;width:100%;"><img src="https://raw.githubusercontent.com/fisheva/Eva-Theme/master/screenshots/eva-dark-bold.png" referrerpolicy="no-referrer" style="max-width:50%;"><img src="https://raw.githubusercontent.com/fisheva/Eva-Theme/master/screenshots/eva-light-bold.png" referrerpolicy="no-referrer" style="max-width:50%;"></p>

[![install](https://img.shields.io/vscode-marketplace/i/fisheva.Eva-Theme.svg?style=flat-flat)](https://marketplace.visualstudio.com/items?itemName=fisheva.Eva-Theme) [![rating](https://img.shields.io/visual-studio-marketplace/r/fisheva.Eva-Theme.svg?style=flat)](https://marketplace.visualstudio.com/items/fisheva.Eva-Theme) [![GitHub stars](https://img.shields.io/github/stars/fisheva/Eva-Theme.svg?style=social&label=Star&maxAge=2592000)](https://github.com/fisheva/Eva-Theme)

<a title="Go to the English README." href="https://github.com/fisheva/Eva-Theme/blob/master/README.md" target="_blank">English</a> | 简体中文

### 介绍

<a title="从Github跳转到Eva Theme的插件商店页面。" href="https://marketplace.visualstudio.com/items?itemName=fisheva.Eva-Theme" target="_blank">Eva Theme </a>for VSCode 是一款语义着色代码主题，使您可以更舒适地进行编程, 已支持这些<a href="https://github.com/fisheva/Eva-Theme/blob/master/documents/languages_CN.md" target="_blank">编程语言</a>。

<!-- > VSCode版本要求 ≥ 1.12.0。 -->

里面一共有6种样式: Dark, Dark Bold, Dark Italic; Light, Light Bold, Light Italic。Bold样式加粗了许多关键字和函数名。Italic样式则设置许多关键字为斜体。

### 冲突
<!-- 您可以通过在设置里关闭 C_Cpp.enhancedColorization 项来禁用此功能。 -->
有些插件添加了一些其自身的语义化着色覆盖在主题文件之上, 这会使得某些字符颜色看起来像出错了。目前发现的这类插件有<a href="https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel" target="_blank">Babel JavasSript</a>, <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-atom-grammar" target="_blank">JavaScript Atom Grammar</a>, <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" target="_blank">MS-C/C++</a>(MS-C/C++可以通过如下设置恢复正常: `"C_Cpp.enhancedColorization: disabled"`)。

### 终端

在 VSCode 1.66.0+ 中，如果您想在终端中显示主题原色，请在您的 VSCode settings.json 中添加这行: `“terminal.integrated.minimumContrastRatio”：1`
<!--更多信息请看[issue](https://github.com/microsoft/vscode/issues/146406)。-->
### Issue

这款主题目前还不完善, 您可以在<a href="https://github.com/fisheva/Eva-Theme/issues" target="_blank">这里</a>向我提 issue, 或者到<a href="https://marketplace.visualstudio.com/items?itemName=fisheva.Eva-Theme&ssr=false#review-details" target="_blank">插件商店</a>给我留言。