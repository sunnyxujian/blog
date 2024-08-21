(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{489:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{attrs:{align:"center"}},[t("p",[t("img",{attrs:{src:"https://1-1253772569.cos.ap-guangzhou.myqcloud.com/mini-react.png",alt:"mini-react.png"}})])]),s._v(" "),t("h2",{attrs:{id:"_1-项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目结构"}},[s._v("#")]),s._v(" 1. 项目结构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://1-1253772569.cos.ap-guangzhou.myqcloud.com/minireact.png",alt:"mini react"}})]),s._v(" "),t("h2",{attrs:{id:"_2-项目介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目介绍"}},[s._v("#")]),s._v(" 2. 项目介绍")]),s._v(" "),t("h3",{attrs:{id:"_2-1-依赖介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-依赖介绍"}},[s._v("#")]),s._v(" 2.1 依赖介绍")]),s._v(" "),t("p",[s._v("devDependencies：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@babel/core"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.16.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@babel/plugin-transform-react-jsx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^7.17.12"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"babel-loader"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^8.2.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"html-webpack-plugin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.5.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webpack"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^5.63.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webpack-cli"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.9.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"webpack-dev-server"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.9.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("我们的项目打包工具使用webpack，编译转换依赖于babel平台。使用"),t("code",[s._v("@babel/plugin-transform-react-jsx")]),s._v("babel插件做JSX转换，我们重点是理解React的原理而不是编译部分，所以JSX转换插件直接使用官方插件，后面可以再手动实现一下这个JSX转换插件。然后使用"),t("code",[s._v("babel-loader")]),s._v("编译js文件。使用"),t("code",[s._v("html-webpack-plugin")]),s._v(" + "),t("code",[s._v("webpack-dev-server")]),s._v("搭建开发服务器，便于我们验证实际的渲染结果。")]),s._v(" "),t("h3",{attrs:{id:"_2-2-文件功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-文件功能"}},[s._v("#")]),s._v(" 2.2 文件功能")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("jsx.js")]),s._v("：jsx语法糖相关逻辑，主要实现"),t("code",[s._v("@babel/plugin-transform-react-jsx")]),s._v("插件所需要的"),t("code",[s._v("React.createElement")]),s._v("方法，用于将jsx语法糖转成拟DOM。")]),s._v(" "),t("li",[t("strong",[s._v("element.js")]),s._v("：声明所有需要用到的React元素标识及一些常量。")]),s._v(" "),t("li",[t("strong",[s._v("component.js")]),s._v("：类组件实现及更新器相关实现。")]),s._v(" "),t("li",[t("strong",[s._v("react-dom.js")]),s._v("：runtime-dom相关逻辑，将虚拟DOM渲染("),t("code",[s._v("mount")]),s._v(")成真实dom，根据拟DOM对真实dom进行增、删、改、查操作。")]),s._v(" "),t("li",[t("strong",[s._v("react.js")]),s._v("：runtime-core相关逻辑，主要是一些React的核心方法。")]),s._v(" "),t("li",[t("strong",[s._v("event.js")]),s._v("：React事件处理逻辑，包括事件缓存、事件代理、事件派发等。")]),s._v(" "),t("li",[t("strong",[s._v("hooks.js")]),s._v("：react hooks功能的基本实现，主要理解hooks原理和执行机制。")]),s._v(" "),t("li",[t("strong",[s._v("utils.js")]),s._v("：存放一些工具函数。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);