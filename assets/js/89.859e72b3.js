(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{516:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("关于子仓库或者说是仓库共用，git官方推荐的工具是git subtree。 了解了git subtree，感觉比git submodule好用，但是也有一些缺点，在可接受的范围内。\n所以对于仓库共用，在git subtree 与 git submodule之中选择的话，我推荐git subtree。")]),t._v(" "),s("h3",{attrs:{id:"git-subtree是什么-为什么使用git-subtree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-subtree是什么-为什么使用git-subtree"}},[t._v("#")]),t._v(" git subtree是什么？为什么使用git subtree")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("git subtree 可以实现一个仓库作为其他仓库的子仓库。")])]),t._v(" "),s("li",[s("p",[t._v("使用git subtree 有以下几个原因：")])])]),t._v(" "),s("ul",[s("li",[t._v("旧版本的git也支持(最老版本可以到 v1.5.2)")]),t._v(" "),s("li",[t._v("git subtree与git submodule不同，它不增加任何像"),s("code",[t._v(".gitmodule")]),t._v("这样的新的元数据文件")]),t._v(" "),s("li",[t._v("git subtree对于项目中的其他成员透明，意味着可以不知道git subtree的存在")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("git subtree也有它的缺点，但是这些缺点还在可以接受的范围内：")])]),t._v(" "),s("ul",[s("li",[t._v("必须学习新的指令(如：git subtree)")]),t._v(" "),s("li",[t._v("子仓库的更新与推送指令相对复杂")])]),t._v(" "),s("h3",{attrs:{id:"git-subtree-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-subtree-的使用"}},[t._v("#")]),t._v(" git subtree 的使用")]),t._v(" "),s("p",[t._v("git subtree的主要命令有：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree pull  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree merge "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"在父仓库中新增子仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在父仓库中新增子仓库"}},[t._v("#")]),t._v(" 在父仓库中新增子仓库：")]),t._v(" "),s("p",[t._v("在主仓库(或者说是业务仓库)中执行以下命令：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sub/common http://code.jms.com/xujian/common.git master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--squash")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://xj-1253772569.file.myqcloud.com/img/image2222.png",alt:"image.png"}})]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("--squash")]),t._v("参数表示不拉取历史信息，而只生成一条commit信息。")])]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("git status")]),t._v("可以看到提示新增两条commit："),s("br"),t._v(" "),s("img",{attrs:{src:"https://xj-1253772569.file.myqcloud.com/img/image22.png",alt:"image.png"}})]),t._v(" "),s("p",[s("code",[t._v("git log")]),t._v("查看详细修改："),s("br"),t._v(" "),s("img",{attrs:{src:"https://xj-1253772569.file.myqcloud.com/img/image333.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("git push")]),t._v("把修改推送到远端network-management仓库，现在本地仓库与远端仓库的目录结构为："),s("br"),t._v(" "),s("img",{attrs:{src:"https://xj-1253772569.file.myqcloud.com/img/image444.png",alt:"image.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("多了一个 "),s("code",[t._v("sub/common")]),t._v(" 目录")])]),t._v(" "),s("p",[s("strong",[t._v("注意：")]),t._v("\n现在的network-management仓库对于其他项目人员来说，可以不需要知道common是一个子仓库。什么意思呢？\n当你"),s("code",[t._v("git clone")]),t._v("或者"),s("code",[t._v("git pull")]),t._v("的时候，你拉取到的是整个network-management(包括common在内，libpng就相当于network-management里的一个普通目录)；当你修改了common里的内容后执行"),s("code",[t._v("git push")]),t._v("，你将会把修改push到network-management上。\n也就是说network-management仓库下的common与其他文件无异。")]),t._v(" "),s("h3",{attrs:{id:"从源仓库拉取更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从源仓库拉取更新"}},[t._v("#")]),t._v(" 从源仓库拉取更新")]),t._v(" "),s("p",[t._v("如果源common仓库更新了，network-management里的common如何拉取更新？使用"),s("code",[t._v("git subtree pull")]),t._v("，例如：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree pull "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sub/common http://code.jms.com/xujian/common.git master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--squash")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"简化git-subtree命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化git-subtree命令"}},[t._v("#")]),t._v(" 简化git subtree命令")]),t._v(" "),s("p",[t._v("我们已经知道了git subtree 的命令的基本用法，但是上述几个命令还是显得有点复杂，特别是子仓库的源仓库地址，特别不方便记忆。\n这里我们把子仓库的地址作为一个remote，方便记忆：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" http://code.jms.com/xujian/common.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后可以这样来使用git subtree命令：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sub/common common master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--squash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree pull "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sub/common common master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--squash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sub/common common master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"进阶用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶用法"}},[t._v("#")]),t._v(" 进阶用法：")]),t._v(" "),s("p",[t._v("配合package.json的 "),s("code",[t._v("workplace")]),t._v(" 的配置属性，可以做到完全忽略了common子项目的存在。")])])}),[],!1,null,null,null);s.default=r.exports}}]);