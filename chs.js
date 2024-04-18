/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "(auto save every 5 min)": "（每5分钟自动保存一次）",
    "activated portal with 3 settings for prestige": "已激活的门户，具有 3 种声望设置",
    "added 2 new flasks to brew": "添加了 2 个新烧瓶来酿造",
    "added a save button in the settings": "在设置中添加了保存按钮",
    "added movement buttons for the laby for mobile devices without a keyboard.": "为没有键盘的移动设备添加了实验室移动按钮。",
    "added new blue fluids, a new clicker and 2 reactortypes": "添加了新的蓝色液体、新的答题器和 2 种反应器类型",
    "added range slider to change bonus seconds speed": "添加范围滑块以更改奖励秒速度",
    "added soul flasks": "添加了灵魂瓶",
    "adjust fight speed and Throttle/Dead Timer": "调整战斗速度和油门/死亡计时器",
    "adjust Frog Clicker Upgrade to 80%": "将青蛙唱首歌升级调整为80%",
    "adjusted enemy loot mutliplier": "调整敌人战利品乘数",
    "autoclicker is now the 3rd upgrade": "自动点击器现在是第三次升级",
    "AUTOCLICKER!": "自动点击器！",
    "changed formular for loot / enemy HP and Attack": "改变了战利品/敌人生命值和攻击力的公式",
    "Chart": "图表",
    "Delay": "延迟",
    "export": "导出",
    "Export / Import": "导出/导入",
    "fight speed is now faster": "战斗速度现在更快",
    "Frog Clicker": "青蛙点击器",
    "Frog Killer Upgrade gives now 90% clicker speed and 70% clicker duration": "青蛙杀手升级现在提供 90% 的点击速度和 70% 的点击持续时间",
    "Hide Almost buyable fluidupgrade": "隐藏 几乎可以购买的流体升级",
    "Hide Chart": "隐藏图表",
    "I hate clicking!": "我讨厌点击！",
    "import": "导入",
    "imprint": "印记",
    "imprint and privacy opens in new tab": "版本说明和隐私在新选项卡中打开",
    "include many images": "包括许多图像",
    "Increase the click reward by 90% AND the click duration by 60%": "点击奖励增加 90%，点击持续时间增加 60%",
    "mobile improvements": "移动改进",
    "much calculations...": "很多计算...",
    "new dungeon settings": "新的地下城设置",
    "Offline": "离线",
    "Points": "点数",
    "privacy": "隐私保护",
    "Reduces the waiting time by 80%.": "减少 80% 的等待时间。",
    "save now": "立即保存",
    "Shrink Auto Clicker": "缩小自动点击器",
    "thank you Peasantine!": "谢谢农民！",
    "The Fluid Gauges numbers are now rounded down.": "流体压力表数字现已向下舍入。",
    "the least open tab will stay after page reload": "页面重新加载后，最少打开的选项卡将保留",
    "Upgrades": "升级",
    "waiting...": "等待...",
    "World Enboss now drop soul-fluid": "世界魔王现在掉落灵魂液",
    "you can now hold Space or Enter or R and dont have to click at the starting phase": "您现在可以按住 Space 或 Enter 或 R，而不必在开始阶段点击",
    "While you were offline you get 1 bonus second per real second. You can collect up to 21 Days Offline Time. You can change the Speed of the Game. Running the game twice as fast will require 1 extra seconds per second. Running the game 5x faster will require 4 extra seconds per second.": "当您离线时，您每实际每秒获得 1 秒奖励。 您最多可以收集 21 天的离线时间。 您可以更改游戏的速度。 以两倍的速度运行游戏将需要每秒多花 1 秒。 游戏运行速度提高 5 倍将需要每秒多花 4 秒。",
    "Additionally, You can change the consumption of your bonus seconds from 1-4 (accordingly to game speed from 2x - 5x).": "此外，您可以将奖励秒数的消耗从 1 更改为 4（根据游戏速度从 2 倍到 5 倍）。",
    "Bonus Seconds": "奖励秒数",
    "double slime capacity": "双倍粘液容量",
    "Game Speed:": "游戏速度：",
    "No matter if you take a break from the game or not. you won't loose gametime.": "不管你是否从游戏中休息一下。 你不会失去游戏时间。",
    "World": "世界",
    "If you lower the amount of points for the chart, it will slowly update the graph and decrease the points.": "如果您降低图表的点数，它将缓慢更新图表并减少点数。",
    "Do you really want to lose your current Game?": "您真的想覆盖当前的游戏进度吗？",
    "no": "否",
    "yes": "是",
    "auto brewing:": "自动酿造：",
    "blood": "血液",
    "blood flask": "血液烧瓶",
    "Brewing": "酿造",
    "Combat": "战斗",
    "Import Success": "导入成功",
    "Increase your input by 100% and your capacity by 100%": "将您输入入增加 100%，将您的容量增加 100%",
    "Increase your output by 100%": "将你的产量提高 100%",
    "Increase your Power by 100%": "将你的力量提高 100%",
    "Input": "输入",
    "Output": "输出",
    "Produce": "生产",
    "slime": "粘液",
    "slime flask": "粘液烧瓶",
    "slime reactor": "粘液反应器",
    "double blood capacity": "双倍血液容量",
    "Heal or Wait!": "治疗 或 等待！",
    "Decrease blood brewing time by 5s (only new added flasks)": "血液酿造时间减少5秒（仅限新添加的烧瓶）",
    "something new": "新鲜玩意",
    "Unlock the slumpy swamp": "解锁泥泞的沼泽",
    "auto heal when needed": "在需要时自动治疗",
    "autoHeal": "自动治疗",
    "create waterflasks": "制作水瓶",
    "ghost AUTOCLICKER!": "幽灵自动点击器！",
    "increase your ghostwater by 50% but also the clickspeed by 20%": "使你的幽灵水增加 50%，同时点击速度增加 20%",
    "laying on the floor": "趴在地上",
    "double oxygen capacity": "双倍氧气的容量",
    "double ink capacity": "双倍墨水的容量",
    "double water capacity": "双倍水的容量",
    "Ghost can be clicked 50% more often": "幽灵的点击次数可以增加 50%",
    "water": "水",
    "ink": "墨水",
    "buy another reactor": "购买另一个反应器",
    "Reactor - Choose a Production": "反应器 - 选择一个生产",
    "unlock new reactor type": "解锁新的反应器类型",
    "water here wathere there waiter what?": "这里有水，这里有水，那里有水，服务什么?",
    "waterslimer": "水稀释",
    "Decrease water filling time by 30 sec (only new added flasks)": "减少注水时间 30 秒（仅限新添加的烧瓶）",
    "waterslimer reactor": "水稀释反应器",
    "Increase your input by 100%": "将您的输入增加 100%",
    "buy a reactor": "购买一个反应器",
    "new reactortype: transform ink to water": "新反应器类型：将墨水转化为水",
    "Frog Killer": "青蛙杀手",
    "filter oxygen into flasks": "将氧气过滤到烧瓶中",
    "oxygen": "氧气",
    "water extractor": "水提取",
    "water extractor reactor": "水提取反应器",
    "brew blood flasks": "酿造血瓶",
    "buy your first reactor": "购买你的第一个反应器",
    "Decrease blood brewing time by 10s (only new added flasks)": "血液冲泡时间减少10秒（仅限新添加的烧瓶）",
    "Decrease slime brewing time by 25% (only new added flasks)": "将粘液酿造时间减少 25%（仅限新添加的烧瓶）",
    "Enable the ability to store fluids in flasks": "能够在烧瓶中储存液体",
    "kill the frog 20% faster": "杀死青蛙的速度加快 20%",
    "slime flasks will be generated automatically, if the queue is empty": "如果队列为空，粘液烧瓶将自动生成",
    "auto brewing for blood flasks": "血瓶自动酿造",
    "is there anything more?": "还有其它东西吗？",
    "worldmap pro zone 1 labykey Dungeon (Explore) kann erstellt werden, je nachdem welche flasks man reinballert kommen auch diese gegner regler für: weniger gegner pro Zone / einfachere gegner / mehr loot pro 100 gegner 1 labykey": "世界地图每个区域1 labykey 地下城(探索)也可以创建，取决于你重新包装的瓶子，这些敌人规则:每个区域更少的敌人/更简单的敌人/每100个敌人更多的战利品1 labykey",
    "A Labyrinth can only completed once. If you have enough keys you can create your own Labyrinth.": "迷宫只能完成一次。如果你有足够的钥匙，你可以创建自己的迷宫。",
    "clear soul": "纯净的灵魂",
    "double clear soul capacity": "双倍纯净的灵魂容量",
    "double soul capacity": "双倍灵魂容量",
    "Explore": "探索",
    "Here you can progress further to achieve new aims. Completing a Worldzone will give you a key.": "在这里，你可以进一步进步，实现新的目标。完成一个世界地带会给你一把钥匙。",
    "Labyrinth": "迷宫",
    "Maps": "地图",
    "oxygen flask": "氧气瓶",
    "Portal": "传送门",
    "Support": "支持",
    "water flask": "水瓶",
    "Hey everyone, I'm a software developer from germany and I love developing video games in my spare time. My dog is 2 years old, and besides my main job, there's hardly any time to design my own projects. Nonetheless, I really enjoy developing games and hope you like my game.": "大家好，我是一名来自德国的软件开发人员，我喜欢在业余时间开发电子游戏。我的狗2岁了，除了我的主要工作，几乎没有时间设计自己的项目。尽管如此，我真的很喜欢开发游戏，希望你喜欢我的游戏。",
    "Buy me a Dog treat!": "给我买个狗粮！",
    "Decrease oxygen filling time by 30 sec (only new added flasks)": "将充氧时间减少30秒（仅限新添加的烧瓶）",
    "I hope you like the game!": "我希望你喜欢这个游戏！",
    "Thanks for clicking the Button! You already received 1000": "感谢您点击按钮！你已经收到1000",
    "The game is 100% free, but If you want you can:": "游戏是100%免费的，但如果你愿意，你可以：",
    "ETERNAL REACTOR - Choose a Production": "永恒反应器--选择一个生产",
    "None available. You have to buy the first one in the upgrades tab.": "没有可用的。你必须在升级选项卡中购买第一个。",
    "total cost": "总计成本",
    "Brew 3x as many flasks, but the duration is twice as long.": "酿造 3x 的烧瓶,但持续时间的两倍长。",
    "Dungeon Size": "地下城大小",
    "Enemy difficulty": "敌人难度",
    "explore": "探索",
    "Explore a new maze": "探索一个新的迷宫",
    "Frog clicking gives twices the slime": "青蛙的点击会产生双倍的黏液",
    "initial Costs:": "初始成本:",
    "Laby": "实验室",
    "Loot": "战利品",
    "reset game": "重置游戏",
    "Slumpy Swamp": "泥泞的沼泽",
    "total cost": "总成本",
    "(you can immediately close the tab and you dont have to pay for receiving this bonus)": "(你可以立即关闭标签，你不需要支付就能获得这个奖励",
    "pressing the Button will give you 1000": "按下这个按钮你就能得到1000",
    "The game is completely free, but I would appreciate any support.": "这款游戏是完全免费的，但我希望得到任何支持。",
    "Unlock your Combat Map": "解锁战斗地图",
    "inktowater reactor": "墨水到水反应器",
    "soul cleansing reactor": "灵魂净化反应器",
    "make blood for eternity": "用永恒制造血液",
    "make slime for eternity": "用永恒制造粘液",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "w": "w",
    "d": "d",
    "s": "s",
    "a": "a",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-点击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "(max ": "(最大 ",
    "Dmg: ": "伤害: ",
    "throttle reactor ": "节流反应器 ",
    "Produce: ": "生产：",
    "labyBonus ": "实验室奖励 ",
    "total cost: ": "总计成本：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "your loot:": "你的战利品：",
    "Welcome. Click the frog to start. You can also hold the spacebar or Enter or R to get through this anoying starting phase.": "欢迎你，摸鱼人。 点击青蛙即可开始。 您还可以按住空格键或 Enter 或 R 来完成这个烦人的开始阶段。",
    "Reactors can transform fluids into fluids. Awesome!": "反应器可以将流体转化为流体。 太棒了！",
    "SPOILER: Soon you get an autoclicker!": "剧透：很快你就会得到一个自动点击器！",
    "Making more flasks than necessary may throttle your progress!": "制造过多的烧瓶可能会阻碍你的进度！",
    "Look at this graph beside me. Isn't it beautiful?": "看看我旁边的这张图。 是不是很漂亮？",
    "Reactors with green backgrounds are running.": "绿色背景的反应堆正在运行。",
    "Warning: Don't overfill your brewing queue!": "警告：不要让您的冲泡队列过满！",
    "If you brew more than one flask the other are in queue.": "如果您酿造多个烧瓶，则其他烧瓶会排队。",
    // "/s)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)K$/,
    /^([\d\.]+)K \/ ([\d\.]+)K$/,
    /^([\d\.]+)K \/ ([\d\.]+)M$/,
    /^([\d\.]+)M \/ ([\d\.]+)M$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^(.+)你的战利品：$/,
    /^(.+)游戏已保存$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+) $/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) \/$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^clearing this Labyrinth rewards you with (.+) permanent damage$/, '清除此迷宫将奖励你 $1 永久伤害'],
    [/^You running out of Bonus seconds in: (.+)s$/, '您的奖励秒数剩余：$1 秒'],
    [/^You running out of Bonus seconds in: (.+) hours$/, '您的奖励秒数剩余：$1 小时'],
    [/^Bonus Seconds: (.+) hours$/, '奖励秒数：$1 小时'],
    [/^Bonus Seconds: (.+) days (.+)$/, '奖励秒数：$1 天 $2'],
    [/^Bonus Seconds: (.+)$/, '奖励秒数：$1'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+):([\d\.,]+) minutes$/, '$1:$2 分钟'],
    [/^([\d\.]+):([\d\.,]+) beaten: ([\d\.,]+)$/, '$1:$2 击打：$3'],
    [/^([\d\.]+):([\d\.,]+) Game saved$/, '$1:$2 游戏已保存'],
    [/^([\d\.]+):([\d\.,]+):([\d\.,]+) hours$/, '$1:$2:$3 小时'],
    [/^([\d\.]+) days ([\d\.]+):([\d\.,]+):([\d\.,]+)$/, '$1 天 $2:$3:$4'],
    [/^([\d\.]+):([\d\.,]+) Welcome back. You missed nothing.$/, '$1:$2 欢迎回来。 你什么也没错过。'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) \- ([\d\.,]+) enemies$/, '$1 \- $2 敌人'],
    [/^\+([\d\.,]+) water$/, '\+$1 水'],
    [/^\+([\d\.,]+) slime$/, '\+$1 粘液'],
    [/^([\d\.,]+) water every ([\d\.,]+)s \(([\d\.]+)\/s\)$/, '每 $2 秒 $1 水 \($3\/秒\)'],
    [/^([\d\.,]+) slime every ([\d\.,]+)s \(([\d\.]+)\/s\)$/, '每 $2 秒 $1 粘液 \($3\/秒\)'],
    [/^start input ([\d\.,]+)$/, '开始输入 $1'],
    [/^stop input ([\d\.,]+)$/, '停止输入 $1'],
    [/^Slumpy Swamp Level ([\d\.,]+)$/, '泥泞的沼泽等级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^heal for ([\d\.,]+)$/, '治疗 $1'],
    [/^Labyrinth ([\d\.,]+)$/, '迷宫 $1'],
    [/^Dungeon ([\d\.,]+)$/, '地下城 $1'],
    [/^Labyrinth lvl ([\d\.,]+)$/, '迷宫 等级 $1'],
    [/^Normal lvl ([\d\.,]+)$/, '小怪 等级 $1'],
    [/^Smallboss lvl ([\d\.,]+)$/, '小Boss 等级 $1'],
    [/^Worldendboss lvl ([\d\.,]+)$/, '世界最终BOSS 等级 $1'],
    [/^Boss lvl ([\d\.,]+)$/, 'Boss 等级 $1'],
    [/^Dungeon lvl ([\d\.,]+)$/, '地下城 等级 $1'],
    [/^Dungeon cleared. There are ([\d\.,]+)$/, '地下城 已清除。这是第 $1 个'],
    [/^Worldzone cleared. There are ([\d\.,]+)$/, '世界区域 已清除。这是第 $1 个'],
    [/^magicreactor ([\d\.,]+)$/, '魔法反应器 $1'],
    [/^World ([\d\.,]+)$/, '世界 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);