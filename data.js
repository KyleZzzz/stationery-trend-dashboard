const CATEGORIES = ["中性笔","笔记本/记事本","学习套装/礼盒/盲盒","马克笔","文具盒/笔袋/痛包笔袋","铅笔","橡皮擦","荧光笔","手帐","火漆印章","水彩笔","标签贴纸","手工DIY套装","卷笔刀/卷笔器","便签本/便条纸/N次贴","笔筒","文具收纳盒","桌面收纳架","错题打印机","护眼台灯","书皮/书套","美术颜料","办公文具","笔类套装/礼盒","文创用品","姓名贴","电动橡皮擦","拼豆/咕卡套装","彩色铅笔","白板笔","按扣/拉链文件资料袋/收纳袋","修正带","钢笔","画纸/画本","胶水","笔芯/替芯/笔壳","记号笔","练字帖/描红本","圆珠笔","蜡笔","书签","桌面吸尘器"];

const DASHBOARD_DATA = {
  updateTime: '2026-06-17',
  timeRange: '近7天 (2026-06-10 ~ 2026-06-17)',
  promoActivities: [
  {
    "platform": "京东",
    "platformKey": "jd",
    "title": "618高潮期·文具主会场",
    "highlights": [
      "自营文具跨店每满200减30",
      "文具品类券满99减15叠加",
      "得力/晨光品牌秒杀每日10点场"
    ],
    "badge": "今日生效",
    "period": "6.15-6.18 高潮期"
  },
  {
    "platform": "淘宝/天猫",
    "platformKey": "taobao",
    "title": "618狂欢日·跨店满减",
    "highlights": [
      "跨店每满300减50 今日可用",
      "文具品类额外满200减25券",
      "天猫超市文具满88免运费"
    ],
    "badge": "今日生效",
    "period": "6.15-6.18 冲刺期"
  },
  {
    "platform": "拼多多",
    "platformKey": "pdd",
    "title": "百亿补贴·文具加码中",
    "highlights": [
      "文具专区今日加码再降10%",
      "9.9特卖文具限量抢",
      "品牌文具百亿补贴直降"
    ],
    "badge": "今日生效",
    "period": "618加码中 持续至6.18"
  },
  {
    "platform": "抖音电商",
    "platformKey": "douyin",
    "title": "618好物节·文具直播专场",
    "highlights": [
      "今日整点文具秒杀场",
      "文具直播间粉丝券满50减15",
      "达人带货专属价限今日"
    ],
    "badge": "今日生效",
    "period": "6.10-6.18 好物节"
  },
  {
    "platform": "小红书",
    "platformKey": "xhs",
    "title": "618薯你会买·文具专题",
    "highlights": [
      "笔记种草领满99减20券 今日可领",
      "文具集合店限时免邮",
      "学生专属满3件85折"
    ],
    "badge": "今日生效",
    "period": "6.8-6.18 活动期"
  }
],
  promoProducts: [
  {
    "name": "广博 磨砂包书膜",
    "platform": "天猫",
    "price": 7.6,
    "sales": 497856,
    "category": "书皮/书套",
    "rank": 1
  },
  {
    "name": "齐心 透明书皮 加厚",
    "platform": "天猫",
    "price": 7,
    "sales": 492571,
    "category": "书皮/书套",
    "rank": 2
  },
  {
    "name": "晨光 考试专用透明袋",
    "platform": "天猫",
    "price": 11.7,
    "sales": 476365,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 3
  },
  {
    "name": "晨光 可擦中性笔",
    "platform": "拼多多",
    "price": 7.5,
    "sales": 450261,
    "category": "中性笔",
    "rank": 4
  },
  {
    "name": "辉柏嘉 超净橡皮",
    "platform": "天猫",
    "price": 32.5,
    "sales": 445016,
    "category": "橡皮擦",
    "rank": 5
  },
  {
    "name": "齐心 网格收纳袋",
    "platform": "京东",
    "price": 16.7,
    "sales": 439146,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 6
  },
  {
    "name": "齐心 牛津布资料袋",
    "platform": "抖音",
    "price": 22.8,
    "sales": 433468,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 7
  },
  {
    "name": "三菱 子弹头中性笔 0.38mm",
    "platform": "拼多多",
    "price": 2.5,
    "sales": 423228,
    "category": "中性笔",
    "rank": 8
  },
  {
    "name": "得力 创意橡皮 食物造型",
    "platform": "抖音",
    "price": 14.9,
    "sales": 421902,
    "category": "橡皮擦",
    "rank": 9
  },
  {
    "name": "得力 A4书皮 50张",
    "platform": "拼多多",
    "price": 12.3,
    "sales": 384382,
    "category": "书皮/书套",
    "rank": 10
  },
  {
    "name": "得力 大容量笔芯",
    "platform": "抖音",
    "price": 8.5,
    "sales": 373966,
    "category": "笔芯/替芯/笔壳",
    "rank": 11
  },
  {
    "name": "百乐 彩色中性笔套装",
    "platform": "抖音",
    "price": 6.1,
    "sales": 373378,
    "category": "中性笔",
    "rank": 12
  },
  {
    "name": "三木 透明文具袋 A4",
    "platform": "天猫",
    "price": 21.2,
    "sales": 371089,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 13
  },
  {
    "name": "齐心 拉链文件袋 5个装",
    "platform": "天猫",
    "price": 15.3,
    "sales": 368291,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 14
  },
  {
    "name": "马可 自动铅笔 0.5mm",
    "platform": "京东",
    "price": 36.6,
    "sales": 357977,
    "category": "铅笔",
    "rank": 15
  },
  {
    "name": "蜻蜓 可爱卡通橡皮",
    "platform": "抖音",
    "price": 20.4,
    "sales": 351322,
    "category": "橡皮擦",
    "rank": 16
  },
  {
    "name": "真彩 全针管笔芯",
    "platform": "抖音",
    "price": 10.7,
    "sales": 338616,
    "category": "笔芯/替芯/笔壳",
    "rank": 17
  },
  {
    "name": "齐心 告示贴 荧光色",
    "platform": "抖音",
    "price": 24.3,
    "sales": 337915,
    "category": "便签本/便条纸/N次贴",
    "rank": 18
  },
  {
    "name": "百乐 子弹头笔芯 100支",
    "platform": "拼多多",
    "price": 6.4,
    "sales": 336350,
    "category": "笔芯/替芯/笔壳",
    "rank": 19
  },
  {
    "name": "得力 修正带 不断带",
    "platform": "京东",
    "price": 9.6,
    "sales": 334537,
    "category": "修正带",
    "rank": 20
  },
  {
    "name": "辉柏嘉 洞洞铅笔 矫姿",
    "platform": "天猫",
    "price": 40.7,
    "sales": 330179,
    "category": "铅笔",
    "rank": 21
  },
  {
    "name": "得力 中性笔芯 0.5mm 黑",
    "platform": "抖音",
    "price": 11.1,
    "sales": 328376,
    "category": "笔芯/替芯/笔壳",
    "rank": 22
  },
  {
    "name": "蜻蜓 自动橡皮擦 替芯",
    "platform": "天猫",
    "price": 22,
    "sales": 325810,
    "category": "橡皮擦",
    "rank": 23
  },
  {
    "name": "辉柏嘉 彩色铅笔 水溶性",
    "platform": "拼多多",
    "price": 47.3,
    "sales": 325519,
    "category": "铅笔",
    "rank": 24
  },
  {
    "name": "百乐 ST笔头中性笔",
    "platform": "淘宝",
    "price": 6.5,
    "sales": 317174,
    "category": "中性笔",
    "rank": 25
  },
  {
    "name": "晨光 便利贴套装",
    "platform": "淘宝",
    "price": 19.1,
    "sales": 313383,
    "category": "便签本/便条纸/N次贴",
    "rank": 26
  },
  {
    "name": "得力 素描橡皮 软",
    "platform": "淘宝",
    "price": 16.2,
    "sales": 312488,
    "category": "橡皮擦",
    "rank": 27
  },
  {
    "name": "广博 透明便签",
    "platform": "天猫",
    "price": 3.3,
    "sales": 309717,
    "category": "便签本/便条纸/N次贴",
    "rank": 28
  },
  {
    "name": "得力 加厚便签纸",
    "platform": "天猫",
    "price": 23.2,
    "sales": 308897,
    "category": "便签本/便条纸/N次贴",
    "rank": 29
  },
  {
    "name": "晨光 笔杆 金属",
    "platform": "拼多多",
    "price": 11.7,
    "sales": 308314,
    "category": "笔芯/替芯/笔壳",
    "rank": 30
  },
  {
    "name": "真彩 可替芯修正带",
    "platform": "淘宝",
    "price": 11.9,
    "sales": 306685,
    "category": "修正带",
    "rank": 31
  },
  {
    "name": "得力 书皮 一年级专用",
    "platform": "淘宝",
    "price": 20.8,
    "sales": 304996,
    "category": "书皮/书套",
    "rank": 32
  },
  {
    "name": "晨光 线圈便签本",
    "platform": "抖音",
    "price": 16.6,
    "sales": 303949,
    "category": "便签本/便条纸/N次贴",
    "rank": 33
  },
  {
    "name": "得力 包书皮 自粘透明",
    "platform": "淘宝",
    "price": 19.9,
    "sales": 297443,
    "category": "书皮/书套",
    "rank": 34
  },
  {
    "name": "PLUS 涂改带 考试用",
    "platform": "拼多多",
    "price": 6.3,
    "sales": 295112,
    "category": "修正带",
    "rank": 35
  },
  {
    "name": "得力 创意便签 造型",
    "platform": "抖音",
    "price": 5.3,
    "sales": 294094,
    "category": "便签本/便条纸/N次贴",
    "rank": 36
  },
  {
    "name": "得力 防水资料袋",
    "platform": "淘宝",
    "price": 14.7,
    "sales": 293665,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 37
  },
  {
    "name": "百乐 中性笔套装 12支",
    "platform": "淘宝",
    "price": 1.6,
    "sales": 291780,
    "category": "中性笔",
    "rank": 38
  },
  {
    "name": "无印良品 康奈尔笔记本",
    "platform": "淘宝",
    "price": 37,
    "sales": 291464,
    "category": "笔记本/记事本",
    "rank": 39
  },
  {
    "name": "得力 环保包书皮",
    "platform": "天猫",
    "price": 16.1,
    "sales": 290000,
    "category": "书皮/书套",
    "rank": 40
  },
  {
    "name": "得力 橡皮擦 不留痕",
    "platform": "淘宝",
    "price": 33.2,
    "sales": 286806,
    "category": "橡皮擦",
    "rank": 41
  },
  {
    "name": "晨光 16K书皮 小学生",
    "platform": "拼多多",
    "price": 17.2,
    "sales": 276812,
    "category": "书皮/书套",
    "rank": 42
  },
  {
    "name": "三菱 考试专用中性笔",
    "platform": "拼多多",
    "price": 7,
    "sales": 274855,
    "category": "中性笔",
    "rank": 43
  },
  {
    "name": "得力 错题本 活页",
    "platform": "抖音",
    "price": 25.8,
    "sales": 274235,
    "category": "笔记本/记事本",
    "rank": 44
  },
  {
    "name": "得力 按动修正带",
    "platform": "抖音",
    "price": 11.4,
    "sales": 274162,
    "category": "修正带",
    "rank": 45
  },
  {
    "name": "得力 修正带 大容量",
    "platform": "拼多多",
    "price": 11,
    "sales": 266268,
    "category": "修正带",
    "rank": 46
  },
  {
    "name": "齐心 胶棒 固体胶",
    "platform": "京东",
    "price": 40.5,
    "sales": 263858,
    "category": "办公文具",
    "rank": 47
  },
  {
    "name": "广博 美工刀 自动锁",
    "platform": "京东",
    "price": 53.9,
    "sales": 262141,
    "category": "办公文具",
    "rank": 48
  },
  {
    "name": "真彩 针管笔芯",
    "platform": "京东",
    "price": 19.9,
    "sales": 259085,
    "category": "笔芯/替芯/笔壳",
    "rank": 49
  },
  {
    "name": "UHU 双面胶点 替芯",
    "platform": "淘宝",
    "price": 12.7,
    "sales": 259051,
    "category": "胶水",
    "rank": 50
  },
  {
    "name": "晨光 包书纸 花色",
    "platform": "抖音",
    "price": 9.1,
    "sales": 251288,
    "category": "书皮/书套",
    "rank": 51
  },
  {
    "name": "晨光 迷你修正带",
    "platform": "拼多多",
    "price": 8.2,
    "sales": 249851,
    "category": "修正带",
    "rank": 52
  },
  {
    "name": "宝克 防水记号笔",
    "platform": "淘宝",
    "price": 24,
    "sales": 249048,
    "category": "记号笔",
    "rank": 53
  },
  {
    "name": "辉柏嘉 素描铅笔套装",
    "platform": "拼多多",
    "price": 16.5,
    "sales": 244074,
    "category": "铅笔",
    "rank": 54
  },
  {
    "name": "得力 手工胶水套装",
    "platform": "拼多多",
    "price": 13,
    "sales": 243586,
    "category": "胶水",
    "rank": 55
  },
  {
    "name": "三菱 HB铅笔 三角杆",
    "platform": "天猫",
    "price": 29.1,
    "sales": 241789,
    "category": "铅笔",
    "rank": 56
  },
  {
    "name": "晨光 儿童剪贴画材料",
    "platform": "京东",
    "price": 48.6,
    "sales": 240435,
    "category": "手工DIY套装",
    "rank": 57
  },
  {
    "name": "UHU 液体胶水 透明",
    "platform": "淘宝",
    "price": 19.8,
    "sales": 240329,
    "category": "胶水",
    "rank": 58
  },
  {
    "name": "幻彩 超轻粘土套装",
    "platform": "京东",
    "price": 62.8,
    "sales": 239650,
    "category": "手工DIY套装",
    "rank": 59
  },
  {
    "name": "晨光 记号笔套装 12色",
    "platform": "天猫",
    "price": 19.7,
    "sales": 236900,
    "category": "记号笔",
    "rank": 60
  },
  {
    "name": "晨光 横线笔记本套装",
    "platform": "淘宝",
    "price": 33.3,
    "sales": 235294,
    "category": "笔记本/记事本",
    "rank": 61
  },
  {
    "name": "得力 木质手工模型",
    "platform": "抖音",
    "price": 16.2,
    "sales": 233438,
    "category": "手工DIY套装",
    "rank": 62
  },
  {
    "name": "PLUS 宽幅修正带",
    "platform": "淘宝",
    "price": 7.1,
    "sales": 226372,
    "category": "修正带",
    "rank": 63
  },
  {
    "name": "晨光 水彩笔画纸套装",
    "platform": "抖音",
    "price": 22,
    "sales": 226187,
    "category": "水彩笔",
    "rank": 64
  },
  {
    "name": "得力 电动橡皮擦 充电",
    "platform": "抖音",
    "price": 8.8,
    "sales": 223986,
    "category": "橡皮擦",
    "rank": 65
  },
  {
    "name": "得力 金属色水彩笔",
    "platform": "抖音",
    "price": 64.9,
    "sales": 223408,
    "category": "水彩笔",
    "rank": 66
  },
  {
    "name": "真彩 可擦水彩笔",
    "platform": "抖音",
    "price": 35.6,
    "sales": 221669,
    "category": "水彩笔",
    "rank": 67
  },
  {
    "name": "三菱 商务签字笔",
    "platform": "拼多多",
    "price": 5.9,
    "sales": 221341,
    "category": "中性笔",
    "rank": 68
  },
  {
    "name": "得力 白板 磁性",
    "platform": "天猫",
    "price": 56.7,
    "sales": 220124,
    "category": "办公文具",
    "rank": 69
  },
  {
    "name": "UHU 热熔胶枪",
    "platform": "抖音",
    "price": 16.9,
    "sales": 217875,
    "category": "胶水",
    "rank": 70
  },
  {
    "name": "真彩 按动笔芯 替换装",
    "platform": "拼多多",
    "price": 19.4,
    "sales": 215243,
    "category": "笔芯/替芯/笔壳",
    "rank": 71
  },
  {
    "name": "得力 课本书套 防水",
    "platform": "抖音",
    "price": 8.2,
    "sales": 212759,
    "category": "书皮/书套",
    "rank": 72
  },
  {
    "name": "得力 速干笔芯",
    "platform": "天猫",
    "price": 16.2,
    "sales": 211213,
    "category": "笔芯/替芯/笔壳",
    "rank": 73
  },
  {
    "name": "得力 加厚笔记本 200页",
    "platform": "淘宝",
    "price": 26.8,
    "sales": 210953,
    "category": "笔记本/记事本",
    "rank": 74
  },
  {
    "name": "得力 记号笔 黑色 粗头",
    "platform": "京东",
    "price": 4.7,
    "sales": 208580,
    "category": "记号笔",
    "rank": 75
  },
  {
    "name": "得力 考研专用笔记本",
    "platform": "天猫",
    "price": 31.2,
    "sales": 208092,
    "category": "笔记本/记事本",
    "rank": 76
  },
  {
    "name": "宝克 金色记号笔",
    "platform": "淘宝",
    "price": 23.4,
    "sales": 205556,
    "category": "记号笔",
    "rank": 77
  },
  {
    "name": "晨光 4B美术橡皮",
    "platform": "天猫",
    "price": 29.3,
    "sales": 201130,
    "category": "橡皮擦",
    "rank": 78
  },
  {
    "name": "广博 自粘书套 免裁剪",
    "platform": "淘宝",
    "price": 18.9,
    "sales": 199825,
    "category": "书皮/书套",
    "rank": 79
  },
  {
    "name": "得力 编织手链材料包",
    "platform": "淘宝",
    "price": 31.5,
    "sales": 198694,
    "category": "手工DIY套装",
    "rank": 80
  },
  {
    "name": "真彩 红色笔芯",
    "platform": "京东",
    "price": 3.7,
    "sales": 198260,
    "category": "笔芯/替芯/笔壳",
    "rank": 81
  },
  {
    "name": "真彩 双头水彩笔",
    "platform": "淘宝",
    "price": 15.4,
    "sales": 197286,
    "category": "水彩笔",
    "rank": 82
  },
  {
    "name": "宝克 双头记号笔",
    "platform": "淘宝",
    "price": 24.5,
    "sales": 192313,
    "category": "记号笔",
    "rank": 83
  },
  {
    "name": "广博 双层拉链袋",
    "platform": "拼多多",
    "price": 12.9,
    "sales": 190088,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 84
  },
  {
    "name": "晨光 衍纸套装",
    "platform": "京东",
    "price": 16.5,
    "sales": 189593,
    "category": "手工DIY套装",
    "rank": 85
  },
  {
    "name": "touch 水性马克笔 24色",
    "platform": "天猫",
    "price": 29.3,
    "sales": 188194,
    "category": "马克笔",
    "rank": 86
  },
  {
    "name": "晨光 彩色圆珠笔 多色",
    "platform": "淘宝",
    "price": 30.2,
    "sales": 187926,
    "category": "圆珠笔",
    "rank": 87
  },
  {
    "name": "广博 长尾夹 混合装 盒装",
    "platform": "京东",
    "price": 11.9,
    "sales": 187303,
    "category": "办公文具",
    "rank": 88
  },
  {
    "name": "樱花 高光橡皮",
    "platform": "抖音",
    "price": 5.9,
    "sales": 183402,
    "category": "橡皮擦",
    "rank": 89
  },
  {
    "name": "马利 水彩笔 补充装",
    "platform": "拼多多",
    "price": 54.9,
    "sales": 183285,
    "category": "水彩笔",
    "rank": 90
  },
  {
    "name": "晨光 粗杆专用削笔器",
    "platform": "京东",
    "price": 40.9,
    "sales": 182804,
    "category": "卷笔刀/卷笔器",
    "rank": 91
  },
  {
    "name": "touch 马克笔补充液",
    "platform": "拼多多",
    "price": 144.2,
    "sales": 182281,
    "category": "马克笔",
    "rank": 92
  },
  {
    "name": "得力 橡皮擦套装",
    "platform": "抖音",
    "price": 25.3,
    "sales": 181266,
    "category": "橡皮擦",
    "rank": 93
  },
  {
    "name": "斯塔 荧光马克笔套装",
    "platform": "天猫",
    "price": 146.8,
    "sales": 181103,
    "category": "马克笔",
    "rank": 94
  },
  {
    "name": "晨光 CD记号笔",
    "platform": "淘宝",
    "price": 11.5,
    "sales": 180705,
    "category": "记号笔",
    "rank": 95
  },
  {
    "name": "齐心 便利贴 莫兰迪色",
    "platform": "拼多多",
    "price": 13.8,
    "sales": 180020,
    "category": "便签本/便条纸/N次贴",
    "rank": 96
  },
  {
    "name": "晨光 樱花橡皮",
    "platform": "拼多多",
    "price": 23.3,
    "sales": 179306,
    "category": "橡皮擦",
    "rank": 97
  },
  {
    "name": "晨光 快递记号笔",
    "platform": "淘宝",
    "price": 6.2,
    "sales": 176676,
    "category": "记号笔",
    "rank": 98
  },
  {
    "name": "得力 牛皮封面记事本",
    "platform": "天猫",
    "price": 36.1,
    "sales": 175989,
    "category": "笔记本/记事本",
    "rank": 99
  },
  {
    "name": "华夏万卷 楷书练字帖",
    "platform": "抖音",
    "price": 15.5,
    "sales": 174664,
    "category": "练字帖/描红本",
    "rank": 100
  },
  {
    "name": "得力 PVA白乳胶",
    "platform": "拼多多",
    "price": 28.3,
    "sales": 172885,
    "category": "胶水",
    "rank": 101
  },
  {
    "name": "斑马 多功能圆珠笔",
    "platform": "抖音",
    "price": 31.4,
    "sales": 172792,
    "category": "圆珠笔",
    "rank": 102
  },
  {
    "name": "施耐德 圆珠笔 按动 0.7mm",
    "platform": "拼多多",
    "price": 18.2,
    "sales": 172780,
    "category": "圆珠笔",
    "rank": 103
  },
  {
    "name": "得力 儿童水彩笔 粗头",
    "platform": "淘宝",
    "price": 57.8,
    "sales": 172577,
    "category": "水彩笔",
    "rank": 104
  },
  {
    "name": "齐心 索引标签贴",
    "platform": "天猫",
    "price": 6.7,
    "sales": 171406,
    "category": "便签本/便条纸/N次贴",
    "rank": 105
  },
  {
    "name": "田英章 练字帖 行楷",
    "platform": "淘宝",
    "price": 32.3,
    "sales": 169057,
    "category": "练字帖/描红本",
    "rank": 106
  },
  {
    "name": "马利 蜡笔套装 桶装",
    "platform": "京东",
    "price": 34,
    "sales": 168197,
    "category": "蜡笔",
    "rank": 107
  },
  {
    "name": "晨光 油性记号笔",
    "platform": "抖音",
    "price": 20.2,
    "sales": 167519,
    "category": "记号笔",
    "rank": 108
  },
  {
    "name": "得力 软头水彩笔 48色",
    "platform": "京东",
    "price": 18.1,
    "sales": 166702,
    "category": "水彩笔",
    "rank": 109
  },
  {
    "name": "百乐 直液式走珠笔",
    "platform": "淘宝",
    "price": 5.1,
    "sales": 166535,
    "category": "中性笔",
    "rank": 110
  },
  {
    "name": "晨光 透明杆圆珠笔",
    "platform": "天猫",
    "price": 12.3,
    "sales": 165738,
    "category": "圆珠笔",
    "rank": 111
  },
  {
    "name": "得力 透明卷笔刀",
    "platform": "天猫",
    "price": 29.8,
    "sales": 165206,
    "category": "卷笔刀/卷笔器",
    "rank": 112
  },
  {
    "name": "得力 科目分类袋",
    "platform": "天猫",
    "price": 17,
    "sales": 164386,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 113
  },
  {
    "name": "马利 蜡笔 48色 专业",
    "platform": "抖音",
    "price": 14.5,
    "sales": 163020,
    "category": "蜡笔",
    "rank": 114
  },
  {
    "name": "广博 回形针 100枚",
    "platform": "抖音",
    "price": 17.7,
    "sales": 160577,
    "category": "办公文具",
    "rank": 115
  },
  {
    "name": "广博 双面胶 强力",
    "platform": "抖音",
    "price": 22.6,
    "sales": 160491,
    "category": "办公文具",
    "rank": 116
  },
  {
    "name": "司马彦 凹槽练字帖 自动消失",
    "platform": "天猫",
    "price": 33.3,
    "sales": 160048,
    "category": "练字帖/描红本",
    "rank": 117
  },
  {
    "name": "华夏万卷 硬笔书法字帖",
    "platform": "天猫",
    "price": 24.8,
    "sales": 159752,
    "category": "练字帖/描红本",
    "rank": 118
  },
  {
    "name": "慕娜美 迷你荧光笔",
    "platform": "京东",
    "price": 31.8,
    "sales": 158744,
    "category": "荧光笔",
    "rank": 119
  },
  {
    "name": "中华 铅笔帽 保护套",
    "platform": "抖音",
    "price": 40.8,
    "sales": 158304,
    "category": "铅笔",
    "rank": 120
  },
  {
    "name": "真彩 细头水彩笔 勾线",
    "platform": "拼多多",
    "price": 35.8,
    "sales": 157857,
    "category": "水彩笔",
    "rank": 121
  },
  {
    "name": "绘儿乐 蜡笔 36色 儿童",
    "platform": "京东",
    "price": 17,
    "sales": 157732,
    "category": "蜡笔",
    "rank": 122
  },
  {
    "name": "三木 加厚透明袋",
    "platform": "抖音",
    "price": 5.5,
    "sales": 157121,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 123
  },
  {
    "name": "纳川 办公桌面架",
    "platform": "淘宝",
    "price": 22.8,
    "sales": 156966,
    "category": "桌面收纳架",
    "rank": 124
  },
  {
    "name": "真彩 液体粉笔 无尘",
    "platform": "京东",
    "price": 7.1,
    "sales": 156361,
    "category": "白板笔",
    "rank": 125
  },
  {
    "name": "得力 白板擦+笔套装",
    "platform": "天猫",
    "price": 13.9,
    "sales": 153130,
    "category": "白板笔",
    "rank": 126
  },
  {
    "name": "得力 速干中性笔 0.5mm",
    "platform": "淘宝",
    "price": 5.3,
    "sales": 150149,
    "category": "中性笔",
    "rank": 127
  },
  {
    "name": "三菱 木质铅笔 HB 50支",
    "platform": "抖音",
    "price": 52.3,
    "sales": 149868,
    "category": "铅笔",
    "rank": 128
  },
  {
    "name": "国誉 手账胶带 和纸",
    "platform": "京东",
    "price": 69.6,
    "sales": 149600,
    "category": "手帐",
    "rank": 129
  },
  {
    "name": "中华 2B考试铅笔 涂卡专用",
    "platform": "抖音",
    "price": 10.9,
    "sales": 149578,
    "category": "铅笔",
    "rank": 130
  },
  {
    "name": "宜家 折叠收纳盒",
    "platform": "抖音",
    "price": 78.6,
    "sales": 149412,
    "category": "文具收纳盒",
    "rank": 131
  },
  {
    "name": "得力 圆珠笔 速干 蓝色",
    "platform": "拼多多",
    "price": 2.3,
    "sales": 149123,
    "category": "圆珠笔",
    "rank": 132
  },
  {
    "name": "绘儿乐 丝滑蜡笔 24色",
    "platform": "抖音",
    "price": 22.5,
    "sales": 148719,
    "category": "蜡笔",
    "rank": 133
  },
  {
    "name": "得力 细头记号笔",
    "platform": "淘宝",
    "price": 23.4,
    "sales": 147873,
    "category": "记号笔",
    "rank": 134
  },
  {
    "name": "三丽鸥 高考加油礼盒",
    "platform": "京东",
    "price": 107.4,
    "sales": 147367,
    "category": "学习套装/礼盒/盲盒",
    "rank": 135
  },
  {
    "name": "晨光 学生胶水 安全",
    "platform": "抖音",
    "price": 23.3,
    "sales": 147239,
    "category": "胶水",
    "rank": 136
  },
  {
    "name": "三年二班 折叠文具盒",
    "platform": "抖音",
    "price": 39.9,
    "sales": 147121,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 137
  },
  {
    "name": "创意工坊 拼豆豆 补充装",
    "platform": "天猫",
    "price": 44.2,
    "sales": 145831,
    "category": "拼豆/咕卡套装",
    "rank": 138
  },
  {
    "name": "可得优 印台 速干",
    "platform": "京东",
    "price": 33,
    "sales": 145369,
    "category": "办公文具",
    "rank": 139
  },
  {
    "name": "晨光 圆珠笔芯 替换",
    "platform": "抖音",
    "price": 21.2,
    "sales": 145075,
    "category": "圆珠笔",
    "rank": 140
  },
  {
    "name": "温莎 临摹纸 拷贝纸",
    "platform": "淘宝",
    "price": 31.4,
    "sales": 144661,
    "category": "画纸/画本",
    "rank": 141
  },
  {
    "name": "无印良品 透明笔筒",
    "platform": "拼多多",
    "price": 12.3,
    "sales": 144417,
    "category": "笔筒",
    "rank": 142
  },
  {
    "name": "宝克 白色记号笔",
    "platform": "天猫",
    "price": 10.9,
    "sales": 144141,
    "category": "记号笔",
    "rank": 143
  },
  {
    "name": "得力 彩色分类文件袋",
    "platform": "京东",
    "price": 6,
    "sales": 142967,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 144
  },
  {
    "name": "真彩 修正带替芯 3个",
    "platform": "抖音",
    "price": 14.1,
    "sales": 141960,
    "category": "修正带",
    "rank": 145
  },
  {
    "name": "晨光 水溶性蜡笔",
    "platform": "京东",
    "price": 45.3,
    "sales": 141811,
    "category": "蜡笔",
    "rank": 146
  },
  {
    "name": "Hobonichi 手账印章套装",
    "platform": "拼多多",
    "price": 49.2,
    "sales": 141131,
    "category": "手帐",
    "rank": 147
  },
  {
    "name": "迪士尼 大容量笔袋",
    "platform": "抖音",
    "price": 54.3,
    "sales": 140995,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 148
  },
  {
    "name": "晨光 透明笔袋 考试用",
    "platform": "拼多多",
    "price": 45.3,
    "sales": 138198,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 149
  },
  {
    "name": "无印良品 斜插式笔筒",
    "platform": "抖音",
    "price": 11.5,
    "sales": 137029,
    "category": "笔筒",
    "rank": 150
  },
  {
    "name": "三菱 刷题专用中性笔",
    "platform": "京东",
    "price": 2.1,
    "sales": 136217,
    "category": "中性笔",
    "rank": 151
  },
  {
    "name": "斑马 荧光笔 粗细双头",
    "platform": "京东",
    "price": 16.1,
    "sales": 136094,
    "category": "荧光笔",
    "rank": 152
  },
  {
    "name": "晨光 白板笔 12色套装",
    "platform": "抖音",
    "price": 25.1,
    "sales": 135317,
    "category": "白板笔",
    "rank": 153
  },
  {
    "name": "晨光 书脊标签",
    "platform": "京东",
    "price": 95,
    "sales": 134751,
    "category": "标签贴纸",
    "rank": 154
  },
  {
    "name": "迪士尼 IP联名文具盲盒",
    "platform": "抖音",
    "price": 66.3,
    "sales": 134251,
    "category": "学习套装/礼盒/盲盒",
    "rank": 155
  },
  {
    "name": "UHU 万能胶",
    "platform": "天猫",
    "price": 9.4,
    "sales": 134066,
    "category": "胶水",
    "rank": 156
  },
  {
    "name": "华夏万卷 成人行书字帖",
    "platform": "淘宝",
    "price": 19.6,
    "sales": 133760,
    "category": "练字帖/描红本",
    "rank": 157
  },
  {
    "name": "纽赛 桌面书架 置物架",
    "platform": "淘宝",
    "price": 26,
    "sales": 133604,
    "category": "桌面收纳架",
    "rank": 158
  },
  {
    "name": "UHU 胶棒 36g 可水洗",
    "platform": "天猫",
    "price": 14.5,
    "sales": 132369,
    "category": "胶水",
    "rank": 159
  },
  {
    "name": "纽赛 铁艺收纳架",
    "platform": "抖音",
    "price": 31.8,
    "sales": 132078,
    "category": "桌面收纳架",
    "rank": 160
  },
  {
    "name": "白雪 白板笔 可擦 黑色",
    "platform": "京东",
    "price": 8.5,
    "sales": 131547,
    "category": "白板笔",
    "rank": 161
  },
  {
    "name": "马利 丙烯马克笔",
    "platform": "淘宝",
    "price": 139.8,
    "sales": 131161,
    "category": "马克笔",
    "rank": 162
  },
  {
    "name": "手工达人 拼豆镊子工具",
    "platform": "抖音",
    "price": 58.2,
    "sales": 130990,
    "category": "拼豆/咕卡套装",
    "rank": 163
  },
  {
    "name": "kinbor TN旅行手账",
    "platform": "抖音",
    "price": 38.7,
    "sales": 130713,
    "category": "手帐",
    "rank": 164
  },
  {
    "name": "田英章 控笔训练字帖",
    "platform": "淘宝",
    "price": 29.2,
    "sales": 130529,
    "category": "练字帖/描红本",
    "rank": 165
  },
  {
    "name": "国誉 手账大礼盒套装",
    "platform": "京东",
    "price": 32.4,
    "sales": 130093,
    "category": "手帐",
    "rank": 166
  },
  {
    "name": "司马彦 数字描红本",
    "platform": "拼多多",
    "price": 15.9,
    "sales": 129973,
    "category": "练字帖/描红本",
    "rank": 167
  },
  {
    "name": "真彩 牛皮纸书套",
    "platform": "天猫",
    "price": 8.8,
    "sales": 129963,
    "category": "书皮/书套",
    "rank": 168
  },
  {
    "name": "白雪 迷你白板笔",
    "platform": "抖音",
    "price": 6.5,
    "sales": 129670,
    "category": "白板笔",
    "rank": 169
  },
  {
    "name": "纽赛 透明分层收纳架",
    "platform": "拼多多",
    "price": 66.4,
    "sales": 129244,
    "category": "桌面收纳架",
    "rank": 170
  },
  {
    "name": "广博 订书机 省力型",
    "platform": "拼多多",
    "price": 48.8,
    "sales": 129201,
    "category": "办公文具",
    "rank": 171
  },
  {
    "name": "康颂 刮画纸 彩色",
    "platform": "抖音",
    "price": 33.1,
    "sales": 128951,
    "category": "画纸/画本",
    "rank": 172
  },
  {
    "name": "拼豆世界 咕卡底卡 透明",
    "platform": "京东",
    "price": 25.8,
    "sales": 128355,
    "category": "拼豆/咕卡套装",
    "rank": 173
  },
  {
    "name": "施耐德 圆珠笔 粗杆",
    "platform": "天猫",
    "price": 14,
    "sales": 126322,
    "category": "圆珠笔",
    "rank": 174
  },
  {
    "name": "晨光 削笔器 替换刀片",
    "platform": "抖音",
    "price": 44.2,
    "sales": 125369,
    "category": "卷笔刀/卷笔器",
    "rank": 175
  },
  {
    "name": "斑马 蓝色笔芯 子弹头",
    "platform": "拼多多",
    "price": 11.2,
    "sales": 125231,
    "category": "笔芯/替芯/笔壳",
    "rank": 176
  },
  {
    "name": "兄弟 标签打印机 蓝牙",
    "platform": "拼多多",
    "price": 120,
    "sales": 124135,
    "category": "标签贴纸",
    "rank": 177
  },
  {
    "name": "纽赛 分格笔筒",
    "platform": "抖音",
    "price": 33.7,
    "sales": 123796,
    "category": "笔筒",
    "rank": 178
  },
  {
    "name": "晨光 商务圆珠笔",
    "platform": "京东",
    "price": 6.1,
    "sales": 122498,
    "category": "圆珠笔",
    "rank": 179
  },
  {
    "name": "马利 双头马克笔 学生用",
    "platform": "淘宝",
    "price": 104.8,
    "sales": 121809,
    "category": "马克笔",
    "rank": 180
  },
  {
    "name": "得力 文具福袋 随机",
    "platform": "抖音",
    "price": 44.8,
    "sales": 121648,
    "category": "学习套装/礼盒/盲盒",
    "rank": 181
  },
  {
    "name": "温莎 手绘本 硬壳",
    "platform": "抖音",
    "price": 35.3,
    "sales": 121648,
    "category": "画纸/画本",
    "rank": 182
  },
  {
    "name": "广博 N次贴 强粘",
    "platform": "拼多多",
    "price": 24.2,
    "sales": 120577,
    "category": "便签本/便条纸/N次贴",
    "rank": 183
  },
  {
    "name": "兄弟 开学姓名贴 定制",
    "platform": "拼多多",
    "price": 41.4,
    "sales": 119411,
    "category": "姓名贴",
    "rank": 184
  },
  {
    "name": "幻彩 暑假手工材料包 100件",
    "platform": "京东",
    "price": 16.4,
    "sales": 119263,
    "category": "手工DIY套装",
    "rank": 185
  },
  {
    "name": "墨点 小学生字帖",
    "platform": "京东",
    "price": 29.8,
    "sales": 118992,
    "category": "练字帖/描红本",
    "rank": 186
  },
  {
    "name": "3M 502胶水",
    "platform": "抖音",
    "price": 21,
    "sales": 118661,
    "category": "胶水",
    "rank": 187
  },
  {
    "name": "老人头 素描纸 160g A4",
    "platform": "天猫",
    "price": 65,
    "sales": 117955,
    "category": "画纸/画本",
    "rank": 188
  },
  {
    "name": "三丽鸥 新学期必备套装",
    "platform": "抖音",
    "price": 85.3,
    "sales": 117922,
    "category": "学习套装/礼盒/盲盒",
    "rank": 189
  },
  {
    "name": "天文 静音电动橡皮",
    "platform": "抖音",
    "price": 25.1,
    "sales": 117814,
    "category": "电动橡皮擦",
    "rank": 190
  },
  {
    "name": "得力 学生修正带套装",
    "platform": "拼多多",
    "price": 14.5,
    "sales": 117777,
    "category": "修正带",
    "rank": 191
  },
  {
    "name": "晨光 指示标签 箭头",
    "platform": "京东",
    "price": 13.5,
    "sales": 117386,
    "category": "便签本/便条纸/N次贴",
    "rank": 192
  },
  {
    "name": "晨光 显示器增高收纳",
    "platform": "天猫",
    "price": 42.6,
    "sales": 116733,
    "category": "桌面收纳架",
    "rank": 193
  },
  {
    "name": "晨光 固体胶棒 大号",
    "platform": "淘宝",
    "price": 21.1,
    "sales": 116173,
    "category": "胶水",
    "rank": 194
  },
  {
    "name": "马可 素描彩铅",
    "platform": "拼多多",
    "price": 119.8,
    "sales": 116007,
    "category": "彩色铅笔",
    "rank": 195
  },
  {
    "name": "得力 桌面杂物收纳",
    "platform": "拼多多",
    "price": 59.3,
    "sales": 115630,
    "category": "文具收纳盒",
    "rank": 196
  },
  {
    "name": "kinbor 盐系手账本",
    "platform": "京东",
    "price": 79.3,
    "sales": 115119,
    "category": "手帐",
    "rank": 197
  },
  {
    "name": "得力 三角蜡笔 幼儿",
    "platform": "淘宝",
    "price": 19.6,
    "sales": 114971,
    "category": "蜡笔",
    "rank": 198
  },
  {
    "name": "得力 水彩笔套装 36色 可水洗",
    "platform": "淘宝",
    "price": 49,
    "sales": 114967,
    "category": "水彩笔",
    "rank": 199
  },
  {
    "name": "晨光 软皮笔记本",
    "platform": "京东",
    "price": 29.4,
    "sales": 114199,
    "category": "笔记本/记事本",
    "rank": 200
  },
  {
    "name": "纽赛 办公笔筒套装",
    "platform": "拼多多",
    "price": 43.8,
    "sales": 113976,
    "category": "笔筒",
    "rank": 201
  },
  {
    "name": "精臣 刺绣姓名贴",
    "platform": "抖音",
    "price": 42,
    "sales": 113963,
    "category": "姓名贴",
    "rank": 202
  },
  {
    "name": "辉柏嘉 活动铅笔 金属杆",
    "platform": "拼多多",
    "price": 44.5,
    "sales": 113902,
    "category": "铅笔",
    "rank": 203
  },
  {
    "name": "辉柏嘉 马克雷诺彩铅",
    "platform": "京东",
    "price": 50.2,
    "sales": 113108,
    "category": "彩色铅笔",
    "rank": 204
  },
  {
    "name": "得力 胶水笔 细头",
    "platform": "抖音",
    "price": 26.4,
    "sales": 112972,
    "category": "胶水",
    "rank": 205
  },
  {
    "name": "司马彦 英文练字帖",
    "platform": "拼多多",
    "price": 13,
    "sales": 111332,
    "category": "练字帖/描红本",
    "rank": 206
  },
  {
    "name": "齐心 彩色白板笔 套装",
    "platform": "抖音",
    "price": 20.6,
    "sales": 108696,
    "category": "白板笔",
    "rank": 207
  },
  {
    "name": "创意家居 亚克力笔筒",
    "platform": "抖音",
    "price": 38.8,
    "sales": 108689,
    "category": "笔筒",
    "rank": 208
  },
  {
    "name": "三丽鸥 中考文具套装",
    "platform": "拼多多",
    "price": 21.6,
    "sales": 108114,
    "category": "学习套装/礼盒/盲盒",
    "rank": 209
  },
  {
    "name": "得力 拼豆套装",
    "platform": "京东",
    "price": 21.6,
    "sales": 108096,
    "category": "手工DIY套装",
    "rank": 210
  },
  {
    "name": "辉柏嘉 水彩笔 桶装 24色",
    "platform": "京东",
    "price": 61.1,
    "sales": 107690,
    "category": "水彩笔",
    "rank": 211
  },
  {
    "name": "咕卡星球 咕卡装饰宝石",
    "platform": "抖音",
    "price": 47.9,
    "sales": 107624,
    "category": "拼豆/咕卡套装",
    "rank": 212
  },
  {
    "name": "猫太子 静音电动削笔器",
    "platform": "拼多多",
    "price": 38.1,
    "sales": 106650,
    "category": "卷笔刀/卷笔器",
    "rank": 213
  },
  {
    "name": "晨光 大头笔 物流用",
    "platform": "拼多多",
    "price": 6.2,
    "sales": 106215,
    "category": "记号笔",
    "rank": 214
  },
  {
    "name": "温莎 彩铅纸 细纹",
    "platform": "京东",
    "price": 21.7,
    "sales": 105413,
    "category": "画纸/画本",
    "rank": 215
  },
  {
    "name": "得力 价格标签贴",
    "platform": "抖音",
    "price": 106.5,
    "sales": 105325,
    "category": "标签贴纸",
    "rank": 216
  },
  {
    "name": "得力 银色记号笔",
    "platform": "抖音",
    "price": 20.5,
    "sales": 105225,
    "category": "记号笔",
    "rank": 217
  },
  {
    "name": "真彩 白板笔 大容量",
    "platform": "抖音",
    "price": 31,
    "sales": 104892,
    "category": "白板笔",
    "rank": 218
  },
  {
    "name": "辉柏嘉 素描电动橡皮套装",
    "platform": "淘宝",
    "price": 28.7,
    "sales": 104876,
    "category": "电动橡皮擦",
    "rank": 219
  },
  {
    "name": "手工达人 拼豆套装 5mm",
    "platform": "淘宝",
    "price": 44.3,
    "sales": 104699,
    "category": "拼豆/咕卡套装",
    "rank": 220
  },
  {
    "name": "DIY乐园 咕卡贴纸 闪钻",
    "platform": "拼多多",
    "price": 30.4,
    "sales": 104344,
    "category": "拼豆/咕卡套装",
    "rank": 221
  },
  {
    "name": "真彩 布料蜡笔",
    "platform": "天猫",
    "price": 23.2,
    "sales": 104154,
    "category": "蜡笔",
    "rank": 222
  },
  {
    "name": "得力 按动中性笔 黑色",
    "platform": "淘宝",
    "price": 4.4,
    "sales": 103307,
    "category": "中性笔",
    "rank": 223
  },
  {
    "name": "kinbor 线圈笔记本 A5",
    "platform": "抖音",
    "price": 25.9,
    "sales": 103284,
    "category": "笔记本/记事本",
    "rank": 224
  },
  {
    "name": "康颂 马克笔专用纸",
    "platform": "京东",
    "price": 20.2,
    "sales": 103221,
    "category": "画纸/画本",
    "rank": 225
  },
  {
    "name": "得力 收纳标签贴",
    "platform": "淘宝",
    "price": 112.1,
    "sales": 100635,
    "category": "标签贴纸",
    "rank": 226
  },
  {
    "name": "纽赛 儿童卡通笔筒",
    "platform": "抖音",
    "price": 21.3,
    "sales": 100139,
    "category": "笔筒",
    "rank": 227
  },
  {
    "name": "得力 卡通卷笔刀",
    "platform": "抖音",
    "price": 35.4,
    "sales": 99867,
    "category": "卷笔刀/卷笔器",
    "rank": 228
  },
  {
    "name": "纽赛 竹木收纳架",
    "platform": "抖音",
    "price": 44.2,
    "sales": 99638,
    "category": "桌面收纳架",
    "rank": 229
  },
  {
    "name": "兄弟 姓名贴打印机",
    "platform": "天猫",
    "price": 98.5,
    "sales": 99412,
    "category": "姓名贴",
    "rank": 230
  },
  {
    "name": "九木杂物社 文艺笔记本",
    "platform": "抖音",
    "price": 30,
    "sales": 99258,
    "category": "文创用品",
    "rank": 231
  },
  {
    "name": "齐心 便签本 横线",
    "platform": "抖音",
    "price": 20.8,
    "sales": 99150,
    "category": "便签本/便条纸/N次贴",
    "rank": 232
  },
  {
    "name": "敦煌 古风书签 流苏",
    "platform": "拼多多",
    "price": 31.4,
    "sales": 98782,
    "category": "书签",
    "rank": 233
  },
  {
    "name": "天文 电动卷笔刀 USB充电",
    "platform": "天猫",
    "price": 48.4,
    "sales": 98356,
    "category": "卷笔刀/卷笔器",
    "rank": 234
  },
  {
    "name": "得力 痛包笔袋 可展示",
    "platform": "淘宝",
    "price": 62.6,
    "sales": 98105,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 235
  },
  {
    "name": "纽赛 木质笔筒",
    "platform": "拼多多",
    "price": 36.8,
    "sales": 98050,
    "category": "笔筒",
    "rank": 236
  },
  {
    "name": "无印良品 磁吸收纳盒 模块化",
    "platform": "拼多多",
    "price": 75.9,
    "sales": 97936,
    "category": "文具收纳盒",
    "rank": 237
  },
  {
    "name": "晨光 亚克力多层收纳架",
    "platform": "淘宝",
    "price": 68.8,
    "sales": 97628,
    "category": "桌面收纳架",
    "rank": 238
  },
  {
    "name": "三年二班 卡通笔袋",
    "platform": "拼多多",
    "price": 36.4,
    "sales": 97324,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 239
  },
  {
    "name": "得力 自动橡皮擦 笔形",
    "platform": "拼多多",
    "price": 37.3,
    "sales": 97321,
    "category": "电动橡皮擦",
    "rank": 240
  },
  {
    "name": "晨光 旋转收纳盒",
    "platform": "京东",
    "price": 35.2,
    "sales": 97301,
    "category": "文具收纳盒",
    "rank": 241
  },
  {
    "name": "百乐 窗口荧光笔",
    "platform": "天猫",
    "price": 14.7,
    "sales": 96888,
    "category": "荧光笔",
    "rank": 242
  },
  {
    "name": "创意工坊 拼豆挂件材料",
    "platform": "京东",
    "price": 48.1,
    "sales": 96677,
    "category": "拼豆/咕卡套装",
    "rank": 243
  },
  {
    "name": "法卡勒 马克笔收纳盒",
    "platform": "京东",
    "price": 130.4,
    "sales": 95413,
    "category": "马克笔",
    "rank": 244
  },
  {
    "name": "作业帮 错题打印机 高清",
    "platform": "京东",
    "price": 181.5,
    "sales": 94831,
    "category": "错题打印机",
    "rank": 245
  },
  {
    "name": "晨光 透明亚克力书签",
    "platform": "京东",
    "price": 19.5,
    "sales": 94755,
    "category": "书签",
    "rank": 246
  },
  {
    "name": "无印良品 活页本 B5",
    "platform": "抖音",
    "price": 18.6,
    "sales": 94508,
    "category": "笔记本/记事本",
    "rank": 247
  },
  {
    "name": "晨光 儿童彩色铅笔 24色",
    "platform": "抖音",
    "price": 99,
    "sales": 94488,
    "category": "彩色铅笔",
    "rank": 248
  },
  {
    "name": "得力 彩铅画本套装",
    "platform": "京东",
    "price": 46.9,
    "sales": 93734,
    "category": "彩色铅笔",
    "rank": 249
  },
  {
    "name": "国誉 空白素描本",
    "platform": "抖音",
    "price": 13.9,
    "sales": 93702,
    "category": "笔记本/记事本",
    "rank": 250
  },
  {
    "name": "马可 考试涂卡铅笔 20支",
    "platform": "抖音",
    "price": 7.1,
    "sales": 93582,
    "category": "铅笔",
    "rank": 251
  },
  {
    "name": "宝虹 绘画本 A3",
    "platform": "天猫",
    "price": 64.8,
    "sales": 92426,
    "category": "画纸/画本",
    "rank": 252
  },
  {
    "name": "晨光 透明胶带 封箱",
    "platform": "拼多多",
    "price": 20.1,
    "sales": 91590,
    "category": "办公文具",
    "rank": 253
  },
  {
    "name": "晨光 多层文具收纳",
    "platform": "天猫",
    "price": 17.9,
    "sales": 91390,
    "category": "文具收纳盒",
    "rank": 254
  },
  {
    "name": "晨光 卡通书签",
    "platform": "京东",
    "price": 24.9,
    "sales": 90975,
    "category": "书签",
    "rank": 255
  },
  {
    "name": "得力 圆珠笔 旋转出芯",
    "platform": "抖音",
    "price": 24.8,
    "sales": 90898,
    "category": "圆珠笔",
    "rank": 256
  },
  {
    "name": "斑马 大容量中性笔",
    "platform": "拼多多",
    "price": 5.4,
    "sales": 90838,
    "category": "中性笔",
    "rank": 257
  },
  {
    "name": "慕娜美 护眼荧光笔 莫兰迪",
    "platform": "京东",
    "price": 20,
    "sales": 90458,
    "category": "荧光笔",
    "rank": 258
  },
  {
    "name": "晨光 电动橡皮 细节擦除",
    "platform": "淘宝",
    "price": 39.5,
    "sales": 90322,
    "category": "电动橡皮擦",
    "rank": 259
  },
  {
    "name": "晨光 直液式荧光笔",
    "platform": "天猫",
    "price": 8.4,
    "sales": 90276,
    "category": "荧光笔",
    "rank": 260
  },
  {
    "name": "得力 创意修正带",
    "platform": "拼多多",
    "price": 7.4,
    "sales": 89568,
    "category": "修正带",
    "rank": 261
  },
  {
    "name": "晨光 烫印姓名贴",
    "platform": "淘宝",
    "price": 38,
    "sales": 89427,
    "category": "姓名贴",
    "rank": 262
  },
  {
    "name": "拼豆世界 拼豆收纳盒",
    "platform": "京东",
    "price": 53.2,
    "sales": 88971,
    "category": "拼豆/咕卡套装",
    "rank": 263
  },
  {
    "name": "九木 金属书签 创意",
    "platform": "天猫",
    "price": 32.2,
    "sales": 88947,
    "category": "书签",
    "rank": 264
  },
  {
    "name": "辉柏嘉 高光电动橡皮",
    "platform": "抖音",
    "price": 35.4,
    "sales": 88900,
    "category": "电动橡皮擦",
    "rank": 265
  },
  {
    "name": "小猿 AI错题整理打印机",
    "platform": "拼多多",
    "price": 112.9,
    "sales": 88459,
    "category": "错题打印机",
    "rank": 266
  },
  {
    "name": "晨光 复古圆珠笔",
    "platform": "淘宝",
    "price": 16.1,
    "sales": 88372,
    "category": "圆珠笔",
    "rank": 267
  },
  {
    "name": "三木 A5文件袋",
    "platform": "淘宝",
    "price": 24.2,
    "sales": 88124,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 268
  },
  {
    "name": "3M 抽取式便签",
    "platform": "天猫",
    "price": 9.2,
    "sales": 87783,
    "category": "便签本/便条纸/N次贴",
    "rank": 269
  },
  {
    "name": "慕娜美 果冻色荧光笔",
    "platform": "抖音",
    "price": 30.7,
    "sales": 87769,
    "category": "荧光笔",
    "rank": 270
  },
  {
    "name": "汉印 便携打印机 墨盒",
    "platform": "拼多多",
    "price": 175.6,
    "sales": 87724,
    "category": "错题打印机",
    "rank": 271
  },
  {
    "name": "纽赛 创意笔筒 收纳",
    "platform": "淘宝",
    "price": 29.3,
    "sales": 87485,
    "category": "笔筒",
    "rank": 272
  },
  {
    "name": "东洋 淡色荧光笔 双头",
    "platform": "淘宝",
    "price": 22.5,
    "sales": 87310,
    "category": "荧光笔",
    "rank": 273
  },
  {
    "name": "慕娜美 儿童马克笔 可水洗",
    "platform": "抖音",
    "price": 60.5,
    "sales": 86635,
    "category": "马克笔",
    "rank": 274
  },
  {
    "name": "辉柏嘉 彩色铅笔 48色 水溶性",
    "platform": "抖音",
    "price": 61.2,
    "sales": 86484,
    "category": "彩色铅笔",
    "rank": 275
  },
  {
    "name": "英雄 文具笔礼盒",
    "platform": "京东",
    "price": 90.4,
    "sales": 86159,
    "category": "笔类套装/礼盒",
    "rank": 276
  },
  {
    "name": "九木杂物社 莫兰迪色文具",
    "platform": "京东",
    "price": 20.6,
    "sales": 85750,
    "category": "文创用品",
    "rank": 277
  },
  {
    "name": "晨光 绘图铅笔 2H-8B",
    "platform": "拼多多",
    "price": 32.5,
    "sales": 85357,
    "category": "铅笔",
    "rank": 278
  },
  {
    "name": "手工 夜光书签",
    "platform": "天猫",
    "price": 12.1,
    "sales": 85285,
    "category": "书签",
    "rank": 279
  },
  {
    "name": "法卡勒 动漫专用马克笔",
    "platform": "天猫",
    "price": 107.4,
    "sales": 84638,
    "category": "马克笔",
    "rank": 280
  },
  {
    "name": "Hobonichi 手账周计划本",
    "platform": "京东",
    "price": 85.8,
    "sales": 84629,
    "category": "手帐",
    "rank": 281
  },
  {
    "name": "斑马 笔壳 透明",
    "platform": "京东",
    "price": 15.3,
    "sales": 84285,
    "category": "笔芯/替芯/笔壳",
    "rank": 282
  },
  {
    "name": "得力 弹射文具盒",
    "platform": "京东",
    "price": 52.7,
    "sales": 84155,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 283
  },
  {
    "name": "得力 密码锁文具盒",
    "platform": "京东",
    "price": 21.9,
    "sales": 83426,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 284
  },
  {
    "name": "晨光 文具姓名贴",
    "platform": "抖音",
    "price": 88.2,
    "sales": 83405,
    "category": "姓名贴",
    "rank": 285
  },
  {
    "name": "晨光 升学礼物套装",
    "platform": "天猫",
    "price": 100.7,
    "sales": 83399,
    "category": "学习套装/礼盒/盲盒",
    "rank": 286
  },
  {
    "name": "幻彩 毛毡手工包",
    "platform": "天猫",
    "price": 65.3,
    "sales": 83096,
    "category": "手工DIY套装",
    "rank": 287
  },
  {
    "name": "得力 电动橡皮擦 充电式",
    "platform": "天猫",
    "price": 48.7,
    "sales": 83047,
    "category": "电动橡皮擦",
    "rank": 288
  },
  {
    "name": "得力 热敏打印机 学生",
    "platform": "京东",
    "price": 189.1,
    "sales": 82431,
    "category": "错题打印机",
    "rank": 289
  },
  {
    "name": "得力 折叠伸缩笔筒",
    "platform": "抖音",
    "price": 26.1,
    "sales": 82183,
    "category": "笔筒",
    "rank": 290
  },
  {
    "name": "晨光 手写标签纸",
    "platform": "淘宝",
    "price": 54,
    "sales": 82072,
    "category": "标签贴纸",
    "rank": 291
  },
  {
    "name": "得力 抽屉式收纳盒",
    "platform": "淘宝",
    "price": 49.3,
    "sales": 81743,
    "category": "文具收纳盒",
    "rank": 292
  },
  {
    "name": "纳川 笔筒收纳架",
    "platform": "淘宝",
    "price": 65.5,
    "sales": 81724,
    "category": "文具收纳盒",
    "rank": 293
  },
  {
    "name": "晨光 姓名贴 防水免缝",
    "platform": "抖音",
    "price": 33.9,
    "sales": 81329,
    "category": "姓名贴",
    "rank": 294
  },
  {
    "name": "MUJI 创意书签 金属",
    "platform": "淘宝",
    "price": 34.5,
    "sales": 81059,
    "category": "文创用品",
    "rank": 295
  },
  {
    "name": "斑马 笔芯0.38mm 细",
    "platform": "淘宝",
    "price": 18.3,
    "sales": 80997,
    "category": "笔芯/替芯/笔壳",
    "rank": 296
  },
  {
    "name": "得力 桌面笔筒 多功能",
    "platform": "抖音",
    "price": 17.8,
    "sales": 80846,
    "category": "笔筒",
    "rank": 297
  },
  {
    "name": "无印良品 桌面收纳盒 透明",
    "platform": "天猫",
    "price": 82.3,
    "sales": 80395,
    "category": "文具收纳盒",
    "rank": 298
  },
  {
    "name": "得力 折纸套装 1000张",
    "platform": "天猫",
    "price": 44,
    "sales": 80286,
    "category": "手工DIY套装",
    "rank": 299
  },
  {
    "name": "晨光 方格本 网格",
    "platform": "抖音",
    "price": 42.2,
    "sales": 80213,
    "category": "笔记本/记事本",
    "rank": 300
  },
  {
    "name": "齐心 文件夹 A4双夹",
    "platform": "拼多多",
    "price": 46.9,
    "sales": 80135,
    "category": "办公文具",
    "rank": 301
  },
  {
    "name": "欧普 USB台灯 宿舍",
    "platform": "天猫",
    "price": 128.8,
    "sales": 79853,
    "category": "护眼台灯",
    "rank": 302
  },
  {
    "name": "樱花 迷你电动橡皮",
    "platform": "抖音",
    "price": 39.5,
    "sales": 79689,
    "category": "电动橡皮擦",
    "rank": 303
  },
  {
    "name": "晨光 人体彩绘蜡笔",
    "platform": "拼多多",
    "price": 44.9,
    "sales": 79675,
    "category": "蜡笔",
    "rank": 304
  },
  {
    "name": "美的 橡皮屑吸尘器",
    "platform": "天猫",
    "price": 78.5,
    "sales": 79646,
    "category": "桌面吸尘器",
    "rank": 305
  },
  {
    "name": "得力 塑料书皮 卡通",
    "platform": "抖音",
    "price": 17.9,
    "sales": 79206,
    "category": "书皮/书套",
    "rank": 306
  },
  {
    "name": "迪士尼 自动进铅卷笔器",
    "platform": "京东",
    "price": 51.3,
    "sales": 79160,
    "category": "卷笔刀/卷笔器",
    "rank": 307
  },
  {
    "name": "迪士尼 小学生文具套装",
    "platform": "天猫",
    "price": 30,
    "sales": 78620,
    "category": "学习套装/礼盒/盲盒",
    "rank": 308
  },
  {
    "name": "兄弟 姓名贴 刺绣",
    "platform": "天猫",
    "price": 77.2,
    "sales": 78224,
    "category": "标签贴纸",
    "rank": 309
  },
  {
    "name": "幻彩 串珠手工材料",
    "platform": "抖音",
    "price": 41.4,
    "sales": 77524,
    "category": "手工DIY套装",
    "rank": 310
  },
  {
    "name": "兄弟 硅胶姓名扣",
    "platform": "拼多多",
    "price": 18.6,
    "sales": 77479,
    "category": "姓名贴",
    "rank": 311
  },
  {
    "name": "百乐 透明示范钢笔",
    "platform": "抖音",
    "price": 198.3,
    "sales": 77222,
    "category": "钢笔",
    "rank": 312
  },
  {
    "name": "作业帮 错题本打印机 A4",
    "platform": "抖音",
    "price": 275.9,
    "sales": 76498,
    "category": "错题打印机",
    "rank": 313
  },
  {
    "name": "雅柯莱 分类标签贴",
    "platform": "拼多多",
    "price": 117.4,
    "sales": 76361,
    "category": "标签贴纸",
    "rank": 314
  },
  {
    "name": "印迹 火漆封蜡枪",
    "platform": "天猫",
    "price": 55.6,
    "sales": 76344,
    "category": "火漆印章",
    "rank": 315
  },
  {
    "name": "得力 考试专用橡皮",
    "platform": "天猫",
    "price": 24.1,
    "sales": 75942,
    "category": "橡皮擦",
    "rank": 316
  },
  {
    "name": "晨光 开学大礼包",
    "platform": "京东",
    "price": 76.3,
    "sales": 75170,
    "category": "学习套装/礼盒/盲盒",
    "rank": 317
  },
  {
    "name": "欧普 充电台灯 夹式",
    "platform": "京东",
    "price": 276.8,
    "sales": 75163,
    "category": "护眼台灯",
    "rank": 318
  },
  {
    "name": "得力 静音吸尘器",
    "platform": "抖音",
    "price": 30.5,
    "sales": 74995,
    "category": "桌面吸尘器",
    "rank": 319
  },
  {
    "name": "天文 电动橡皮 替芯装",
    "platform": "淘宝",
    "price": 18.1,
    "sales": 74491,
    "category": "电动橡皮擦",
    "rank": 320
  },
  {
    "name": "手帐星球 火漆信封套装",
    "platform": "抖音",
    "price": 30.8,
    "sales": 74121,
    "category": "火漆印章",
    "rank": 321
  },
  {
    "name": "得力 可水洗蜡笔",
    "platform": "抖音",
    "price": 37.4,
    "sales": 74057,
    "category": "蜡笔",
    "rank": 322
  },
  {
    "name": "小米 手持吸尘器 桌面",
    "platform": "淘宝",
    "price": 57.1,
    "sales": 73817,
    "category": "桌面吸尘器",
    "rank": 323
  },
  {
    "name": "晨光 旋转笔筒 大容量",
    "platform": "抖音",
    "price": 10,
    "sales": 73675,
    "category": "笔筒",
    "rank": 324
  },
  {
    "name": "晨光 透明标签贴",
    "platform": "抖音",
    "price": 90,
    "sales": 73180,
    "category": "标签贴纸",
    "rank": 325
  },
  {
    "name": "kinbor 手账素材本",
    "platform": "天猫",
    "price": 79,
    "sales": 73160,
    "category": "手帐",
    "rank": 326
  },
  {
    "name": "松下 智能调光台灯",
    "platform": "天猫",
    "price": 332.1,
    "sales": 73001,
    "category": "护眼台灯",
    "rank": 327
  },
  {
    "name": "纽赛 学生桌面清洁器",
    "platform": "淘宝",
    "price": 72.9,
    "sales": 72952,
    "category": "桌面吸尘器",
    "rank": 328
  },
  {
    "name": "咕卡星球 拼豆模板 卡通",
    "platform": "淘宝",
    "price": 31.8,
    "sales": 72815,
    "category": "拼豆/咕卡套装",
    "rank": 329
  },
  {
    "name": "百乐 可替换墨囊钢笔",
    "platform": "抖音",
    "price": 93.9,
    "sales": 72797,
    "category": "钢笔",
    "rank": 330
  },
  {
    "name": "得力 桌面吸尘器 迷你",
    "platform": "拼多多",
    "price": 59.8,
    "sales": 72549,
    "category": "桌面吸尘器",
    "rank": 331
  },
  {
    "name": "兄弟 姓名贴 防水",
    "platform": "拼多多",
    "price": 56.2,
    "sales": 72335,
    "category": "标签贴纸",
    "rank": 332
  },
  {
    "name": "英雄 EF尖钢笔",
    "platform": "天猫",
    "price": 129,
    "sales": 71093,
    "category": "钢笔",
    "rank": 333
  },
  {
    "name": "DIY乐园 迷你咕卡材料包",
    "platform": "京东",
    "price": 50.8,
    "sales": 70786,
    "category": "拼豆/咕卡套装",
    "rank": 334
  },
  {
    "name": "明基 触控台灯",
    "platform": "拼多多",
    "price": 226.9,
    "sales": 70283,
    "category": "护眼台灯",
    "rank": 335
  },
  {
    "name": "三年二班 电动文具盒 多功能",
    "platform": "拼多多",
    "price": 35,
    "sales": 69643,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 336
  },
  {
    "name": "真彩 荧光蜡笔",
    "platform": "天猫",
    "price": 31.8,
    "sales": 69182,
    "category": "蜡笔",
    "rank": 337
  },
  {
    "name": "真彩 透明修正带",
    "platform": "淘宝",
    "price": 3.5,
    "sales": 68530,
    "category": "修正带",
    "rank": 338
  },
  {
    "name": "晨光 磁吸笔筒",
    "platform": "抖音",
    "price": 13,
    "sales": 68352,
    "category": "笔筒",
    "rank": 339
  },
  {
    "name": "斑马 彩色荧光笔 学生用",
    "platform": "拼多多",
    "price": 12.8,
    "sales": 68231,
    "category": "荧光笔",
    "rank": 340
  },
  {
    "name": "东洋 速干荧光笔",
    "platform": "拼多多",
    "price": 26.7,
    "sales": 67839,
    "category": "荧光笔",
    "rank": 341
  },
  {
    "name": "得力 桌上小书架",
    "platform": "天猫",
    "price": 59.9,
    "sales": 67644,
    "category": "桌面收纳架",
    "rank": 342
  },
  {
    "name": "喵喵机 学习打印机 护眼",
    "platform": "淘宝",
    "price": 210.3,
    "sales": 67543,
    "category": "错题打印机",
    "rank": 343
  },
  {
    "name": "晨光 中性笔套装 12色",
    "platform": "天猫",
    "price": 79.8,
    "sales": 67292,
    "category": "笔类套装/礼盒",
    "rank": 344
  },
  {
    "name": "晨光 压花书签",
    "platform": "天猫",
    "price": 30.7,
    "sales": 67208,
    "category": "书签",
    "rank": 345
  },
  {
    "name": "MUJI 复古文具",
    "platform": "天猫",
    "price": 12.2,
    "sales": 67029,
    "category": "文创用品",
    "rank": 346
  },
  {
    "name": "印迹 火漆印章头 定制",
    "platform": "淘宝",
    "price": 44.9,
    "sales": 66644,
    "category": "火漆印章",
    "rank": 347
  },
  {
    "name": "宜家 亚克力收纳架",
    "platform": "淘宝",
    "price": 35.1,
    "sales": 66451,
    "category": "文具收纳盒",
    "rank": 348
  },
  {
    "name": "三年二班 创意笔筒 北欧",
    "platform": "抖音",
    "price": 75.4,
    "sales": 66424,
    "category": "文创用品",
    "rank": 349
  },
  {
    "name": "得力 键盘吸尘器",
    "platform": "天猫",
    "price": 59.2,
    "sales": 65905,
    "category": "桌面吸尘器",
    "rank": 350
  },
  {
    "name": "得力 文件收纳架",
    "platform": "抖音",
    "price": 34.9,
    "sales": 65583,
    "category": "桌面收纳架",
    "rank": 351
  },
  {
    "name": "英雄 马克笔+彩铅套装",
    "platform": "抖音",
    "price": 196.9,
    "sales": 65516,
    "category": "笔类套装/礼盒",
    "rank": 352
  },
  {
    "name": "MUJI ins风文具套装",
    "platform": "拼多多",
    "price": 50.6,
    "sales": 65380,
    "category": "文创用品",
    "rank": 353
  },
  {
    "name": "Hobonichi 手账装饰花边剪刀",
    "platform": "拼多多",
    "price": 70.8,
    "sales": 65373,
    "category": "手帐",
    "rank": 354
  },
  {
    "name": "斯塔 马克笔套装 80色",
    "platform": "淘宝",
    "price": 125.4,
    "sales": 65256,
    "category": "马克笔",
    "rank": 355
  },
  {
    "name": "法卡勒 金属色马克笔",
    "platform": "抖音",
    "price": 32.4,
    "sales": 65054,
    "category": "马克笔",
    "rank": 356
  },
  {
    "name": "国誉 道林纸笔记本",
    "platform": "天猫",
    "price": 10,
    "sales": 65047,
    "category": "笔记本/记事本",
    "rank": 357
  },
  {
    "name": "晨光 学生笔类大礼包",
    "platform": "拼多多",
    "price": 77,
    "sales": 64794,
    "category": "笔类套装/礼盒",
    "rank": 358
  },
  {
    "name": "精臣 幼儿园名字贴",
    "platform": "天猫",
    "price": 77.5,
    "sales": 64492,
    "category": "姓名贴",
    "rank": 359
  },
  {
    "name": "晨光 资料收纳盒",
    "platform": "淘宝",
    "price": 64.2,
    "sales": 64343,
    "category": "文具收纳盒",
    "rank": 360
  },
  {
    "name": "晨光 钢笔礼盒 毕业礼物",
    "platform": "天猫",
    "price": 176.5,
    "sales": 63907,
    "category": "笔类套装/礼盒",
    "rank": 361
  },
  {
    "name": "施耐德 学生圆珠笔 套装",
    "platform": "抖音",
    "price": 14.9,
    "sales": 62943,
    "category": "圆珠笔",
    "rank": 362
  },
  {
    "name": "奥特曼 幼儿园文具礼盒",
    "platform": "抖音",
    "price": 48.8,
    "sales": 62783,
    "category": "学习套装/礼盒/盲盒",
    "rank": 363
  },
  {
    "name": "Hobonichi 手账本 A6 活页",
    "platform": "抖音",
    "price": 35.2,
    "sales": 62720,
    "category": "手帐",
    "rank": 364
  },
  {
    "name": "鲁本斯 金属色颜料",
    "platform": "抖音",
    "price": 25.6,
    "sales": 62400,
    "category": "美术颜料",
    "rank": 365
  },
  {
    "name": "田英章 幼儿描红",
    "platform": "抖音",
    "price": 30.6,
    "sales": 62383,
    "category": "练字帖/描红本",
    "rank": 366
  },
  {
    "name": "派克 学生钢笔 正姿",
    "platform": "抖音",
    "price": 59.5,
    "sales": 62238,
    "category": "钢笔",
    "rank": 367
  },
  {
    "name": "慕娜美 荧光笔套装 6色",
    "platform": "淘宝",
    "price": 27.1,
    "sales": 62163,
    "category": "荧光笔",
    "rank": 368
  },
  {
    "name": "百乐 画笔套装 水彩",
    "platform": "天猫",
    "price": 182.3,
    "sales": 61800,
    "category": "笔类套装/礼盒",
    "rank": 369
  },
  {
    "name": "飞利浦 全光谱台灯",
    "platform": "拼多多",
    "price": 389.2,
    "sales": 61652,
    "category": "护眼台灯",
    "rank": 370
  },
  {
    "name": "东洋 柔和色荧光笔",
    "platform": "淘宝",
    "price": 33.2,
    "sales": 61427,
    "category": "荧光笔",
    "rank": 371
  },
  {
    "name": "kinbor 手账贴纸 100张",
    "platform": "抖音",
    "price": 76.7,
    "sales": 61191,
    "category": "手帐",
    "rank": 372
  },
  {
    "name": "温莎牛顿 水彩颜料 36色",
    "platform": "拼多多",
    "price": 66,
    "sales": 60961,
    "category": "美术颜料",
    "rank": 373
  },
  {
    "name": "松下 无频闪护眼灯",
    "platform": "抖音",
    "price": 67.4,
    "sales": 60631,
    "category": "护眼台灯",
    "rank": 374
  },
  {
    "name": "得力 手工白胶",
    "platform": "天猫",
    "price": 16.2,
    "sales": 60631,
    "category": "胶水",
    "rank": 375
  },
  {
    "name": "晨光 毛笔套装 书法",
    "platform": "京东",
    "price": 144,
    "sales": 60263,
    "category": "笔类套装/礼盒",
    "rank": 376
  },
  {
    "name": "青竹 国画颜料 12色",
    "platform": "京东",
    "price": 25.4,
    "sales": 59972,
    "category": "美术颜料",
    "rank": 377
  },
  {
    "name": "百乐 荧光笔 大容量",
    "platform": "拼多多",
    "price": 13.1,
    "sales": 59387,
    "category": "荧光笔",
    "rank": 378
  },
  {
    "name": "雅柯莱 书本姓名贴 透明",
    "platform": "淘宝",
    "price": 72.9,
    "sales": 58095,
    "category": "姓名贴",
    "rank": 379
  },
  {
    "name": "马利 建筑手绘马克笔",
    "platform": "京东",
    "price": 121.8,
    "sales": 57856,
    "category": "马克笔",
    "rank": 380
  },
  {
    "name": "晨光 衣物姓名标",
    "platform": "拼多多",
    "price": 56.2,
    "sales": 57805,
    "category": "姓名贴",
    "rank": 381
  },
  {
    "name": "施耐德 油性圆珠笔",
    "platform": "拼多多",
    "price": 33.9,
    "sales": 57388,
    "category": "圆珠笔",
    "rank": 382
  },
  {
    "name": "得力 油性彩铅 72色",
    "platform": "拼多多",
    "price": 69.7,
    "sales": 57146,
    "category": "彩色铅笔",
    "rank": 383
  },
  {
    "name": "老人头 儿童画本 空白",
    "platform": "京东",
    "price": 64.8,
    "sales": 56884,
    "category": "画纸/画本",
    "rank": 384
  },
  {
    "name": "晨光 计算器 太阳能",
    "platform": "抖音",
    "price": 33.3,
    "sales": 56874,
    "category": "办公文具",
    "rank": 385
  },
  {
    "name": "晨光 学习用品礼盒",
    "platform": "京东",
    "price": 46.9,
    "sales": 56556,
    "category": "学习套装/礼盒/盲盒",
    "rank": 386
  },
  {
    "name": "喵喵机 错题打印机 蓝牙",
    "platform": "抖音",
    "price": 157.5,
    "sales": 56543,
    "category": "错题打印机",
    "rank": 387
  },
  {
    "name": "温莎 速写本 A4",
    "platform": "抖音",
    "price": 56,
    "sales": 55673,
    "category": "画纸/画本",
    "rank": 388
  },
  {
    "name": "印迹 火漆印章 花朵款",
    "platform": "抖音",
    "price": 63.1,
    "sales": 55060,
    "category": "火漆印章",
    "rank": 389
  },
  {
    "name": "慢作 火漆勺 木柄",
    "platform": "拼多多",
    "price": 49.9,
    "sales": 54666,
    "category": "火漆印章",
    "rank": 390
  },
  {
    "name": "纳川 文具整理架",
    "platform": "京东",
    "price": 48.4,
    "sales": 54372,
    "category": "文具收纳盒",
    "rank": 391
  },
  {
    "name": "得力 双行修正带",
    "platform": "天猫",
    "price": 13.9,
    "sales": 53238,
    "category": "修正带",
    "rank": 392
  },
  {
    "name": "马利 颜料补充装",
    "platform": "京东",
    "price": 76.7,
    "sales": 53228,
    "category": "美术颜料",
    "rank": 393
  },
  {
    "name": "得力 考试文具套装 68件",
    "platform": "京东",
    "price": 127.3,
    "sales": 53187,
    "category": "学习套装/礼盒/盲盒",
    "rank": 394
  },
  {
    "name": "明基 阅读台灯 防蓝光",
    "platform": "天猫",
    "price": 326.4,
    "sales": 52885,
    "category": "护眼台灯",
    "rank": 395
  },
  {
    "name": "三菱 粗杆铅笔 幼儿用",
    "platform": "京东",
    "price": 6,
    "sales": 52730,
    "category": "铅笔",
    "rank": 396
  },
  {
    "name": "九木 永生花书签",
    "platform": "京东",
    "price": 15.3,
    "sales": 52565,
    "category": "书签",
    "rank": 397
  },
  {
    "name": "三年二班 国潮文具套装",
    "platform": "京东",
    "price": 46.4,
    "sales": 52546,
    "category": "文创用品",
    "rank": 398
  },
  {
    "name": "得力 彩铅收纳笔帘",
    "platform": "拼多多",
    "price": 32.2,
    "sales": 52176,
    "category": "彩色铅笔",
    "rank": 399
  },
  {
    "name": "晨光 票据收纳袋",
    "platform": "天猫",
    "price": 12.9,
    "sales": 51412,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 400
  },
  {
    "name": "松下 长臂台灯 办公",
    "platform": "淘宝",
    "price": 251.8,
    "sales": 51045,
    "category": "护眼台灯",
    "rank": 401
  },
  {
    "name": "敦煌 书签尺 多功能",
    "platform": "京东",
    "price": 10.2,
    "sales": 48673,
    "category": "书签",
    "rank": 402
  },
  {
    "name": "纽赛 可爱卡通吸尘器",
    "platform": "拼多多",
    "price": 67.8,
    "sales": 48640,
    "category": "桌面吸尘器",
    "rank": 403
  },
  {
    "name": "得力 错题打印机 彩色",
    "platform": "抖音",
    "price": 219.4,
    "sales": 48624,
    "category": "错题打印机",
    "rank": 404
  },
  {
    "name": "DIY乐园 咕卡套装 全套材料",
    "platform": "天猫",
    "price": 31.9,
    "sales": 48538,
    "category": "拼豆/咕卡套装",
    "rank": 405
  },
  {
    "name": "欧普 床头台灯 护眼",
    "platform": "抖音",
    "price": 127.1,
    "sales": 48331,
    "category": "护眼台灯",
    "rank": 406
  },
  {
    "name": "真彩 油画棒 重彩",
    "platform": "京东",
    "price": 15.1,
    "sales": 47888,
    "category": "蜡笔",
    "rank": 407
  },
  {
    "name": "齐心 剪刀 安全圆头",
    "platform": "天猫",
    "price": 46.5,
    "sales": 47680,
    "category": "办公文具",
    "rank": 408
  },
  {
    "name": "明基 护眼台灯 国AA级",
    "platform": "京东",
    "price": 70.7,
    "sales": 47345,
    "category": "护眼台灯",
    "rank": 409
  },
  {
    "name": "敦煌 定制书签",
    "platform": "抖音",
    "price": 22.5,
    "sales": 47007,
    "category": "书签",
    "rank": 410
  },
  {
    "name": "温莎牛顿 纺织颜料 手绘",
    "platform": "拼多多",
    "price": 17.5,
    "sales": 46731,
    "category": "美术颜料",
    "rank": 411
  },
  {
    "name": "老人头 油画纸 亚麻",
    "platform": "拼多多",
    "price": 30.6,
    "sales": 46475,
    "category": "画纸/画本",
    "rank": 412
  },
  {
    "name": "纽赛 多功能桌面清洁",
    "platform": "天猫",
    "price": 32.3,
    "sales": 45733,
    "category": "桌面吸尘器",
    "rank": 413
  },
  {
    "name": "手帐星球 火漆蜡条 彩色",
    "platform": "淘宝",
    "price": 24.9,
    "sales": 45419,
    "category": "火漆印章",
    "rank": 414
  },
  {
    "name": "KOKUYO 帆布笔袋 简约",
    "platform": "淘宝",
    "price": 37.9,
    "sales": 45166,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 415
  },
  {
    "name": "手帐星球 火漆蜡粒 多色",
    "platform": "京东",
    "price": 72.6,
    "sales": 44658,
    "category": "火漆印章",
    "rank": 416
  },
  {
    "name": "派克 钢笔礼盒 商务",
    "platform": "天猫",
    "price": 28.6,
    "sales": 44238,
    "category": "钢笔",
    "rank": 417
  },
  {
    "name": "马利 白板用水彩笔",
    "platform": "天猫",
    "price": 49.1,
    "sales": 43976,
    "category": "水彩笔",
    "rank": 418
  },
  {
    "name": "晨光生活馆 设计感便签",
    "platform": "京东",
    "price": 41.3,
    "sales": 43852,
    "category": "文创用品",
    "rank": 419
  },
  {
    "name": "毕加索 彩色笔全套",
    "platform": "抖音",
    "price": 118.2,
    "sales": 43685,
    "category": "笔类套装/礼盒",
    "rank": 420
  },
  {
    "name": "兄弟 贴纸式姓名贴",
    "platform": "拼多多",
    "price": 53.8,
    "sales": 43165,
    "category": "姓名贴",
    "rank": 421
  },
  {
    "name": "晨光 桌面卷笔器 大容量",
    "platform": "淘宝",
    "price": 52.7,
    "sales": 42918,
    "category": "卷笔刀/卷笔器",
    "rank": 422
  },
  {
    "name": "晨光生活馆 治愈系文具",
    "platform": "天猫",
    "price": 56,
    "sales": 42209,
    "category": "文创用品",
    "rank": 423
  },
  {
    "name": "宜家 可调节桌面架",
    "platform": "天猫",
    "price": 87.6,
    "sales": 41704,
    "category": "桌面收纳架",
    "rank": 424
  },
  {
    "name": "派克 速写钢笔",
    "platform": "淘宝",
    "price": 78.1,
    "sales": 41585,
    "category": "钢笔",
    "rank": 425
  },
  {
    "name": "晨光 签字笔礼盒",
    "platform": "天猫",
    "price": 183.5,
    "sales": 41538,
    "category": "笔类套装/礼盒",
    "rank": 426
  },
  {
    "name": "迪士尼 便携卷笔刀",
    "platform": "拼多多",
    "price": 36.5,
    "sales": 41305,
    "category": "卷笔刀/卷笔器",
    "rank": 427
  },
  {
    "name": "故宫文创 刺绣书签",
    "platform": "京东",
    "price": 24.2,
    "sales": 40836,
    "category": "书签",
    "rank": 428
  },
  {
    "name": "MARCO 彩铅套装 专业级",
    "platform": "京东",
    "price": 34.4,
    "sales": 40245,
    "category": "彩色铅笔",
    "rank": 429
  },
  {
    "name": "三年二班 硅胶笔袋 创意",
    "platform": "京东",
    "price": 38.9,
    "sales": 39978,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 430
  },
  {
    "name": "马利 丙烯颜料套装",
    "platform": "拼多多",
    "price": 40.4,
    "sales": 39759,
    "category": "美术颜料",
    "rank": 431
  },
  {
    "name": "晨光 三角杆水彩笔",
    "platform": "淘宝",
    "price": 60.3,
    "sales": 39458,
    "category": "水彩笔",
    "rank": 432
  },
  {
    "name": "晨光 吸尘器 配件刷头",
    "platform": "京东",
    "price": 45.7,
    "sales": 39395,
    "category": "桌面吸尘器",
    "rank": 433
  },
  {
    "name": "晨光 手摇卷笔刀 儿童",
    "platform": "天猫",
    "price": 55.5,
    "sales": 39253,
    "category": "卷笔刀/卷笔器",
    "rank": 434
  },
  {
    "name": "三年二班 原创设计笔",
    "platform": "抖音",
    "price": 46.4,
    "sales": 38913,
    "category": "文创用品",
    "rank": 435
  },
  {
    "name": "精臣 文件标签 彩色索引",
    "platform": "拼多多",
    "price": 32.9,
    "sales": 37968,
    "category": "标签贴纸",
    "rank": 436
  },
  {
    "name": "文谷 手账打孔器",
    "platform": "拼多多",
    "price": 71.8,
    "sales": 37891,
    "category": "手帐",
    "rank": 437
  },
  {
    "name": "晨光 电动橡皮+替芯组合",
    "platform": "拼多多",
    "price": 31.7,
    "sales": 37598,
    "category": "电动橡皮擦",
    "rank": 438
  },
  {
    "name": "宝虹 水彩纸 300g",
    "platform": "京东",
    "price": 48.2,
    "sales": 37437,
    "category": "画纸/画本",
    "rank": 439
  },
  {
    "name": "英雄 复古钢笔",
    "platform": "京东",
    "price": 163.1,
    "sales": 37419,
    "category": "钢笔",
    "rank": 440
  },
  {
    "name": "纽赛 USB充电吸尘器",
    "platform": "淘宝",
    "price": 77.3,
    "sales": 37293,
    "category": "桌面吸尘器",
    "rank": 441
  },
  {
    "name": "墨点 古诗词字帖",
    "platform": "天猫",
    "price": 24.1,
    "sales": 37186,
    "category": "练字帖/描红本",
    "rank": 442
  },
  {
    "name": "手工达人 咕卡奶油胶",
    "platform": "淘宝",
    "price": 33.6,
    "sales": 36897,
    "category": "拼豆/咕卡套装",
    "rank": 443
  },
  {
    "name": "齐心 速干白板笔",
    "platform": "天猫",
    "price": 20.8,
    "sales": 36497,
    "category": "白板笔",
    "rank": 444
  },
  {
    "name": "晨光 秘密花园彩铅",
    "platform": "抖音",
    "price": 40,
    "sales": 36359,
    "category": "彩色铅笔",
    "rank": 445
  },
  {
    "name": "暮光之印 星座火漆印章",
    "platform": "抖音",
    "price": 69.3,
    "sales": 36211,
    "category": "火漆印章",
    "rank": 446
  },
  {
    "name": "晨光 文具盲盒 联名款",
    "platform": "拼多多",
    "price": 52.8,
    "sales": 36122,
    "category": "学习套装/礼盒/盲盒",
    "rank": 447
  },
  {
    "name": "暮光之印 复古火漆印章套装",
    "platform": "京东",
    "price": 84.6,
    "sales": 35889,
    "category": "火漆印章",
    "rank": 448
  },
  {
    "name": "kinbor 手绘明信片套装",
    "platform": "淘宝",
    "price": 21,
    "sales": 35648,
    "category": "文创用品",
    "rank": 449
  },
  {
    "name": "温莎牛顿 水粉颜料 果冻",
    "platform": "淘宝",
    "price": 36.8,
    "sales": 35628,
    "category": "美术颜料",
    "rank": 450
  },
  {
    "name": "百乐 彩笔套装 150件",
    "platform": "抖音",
    "price": 47.7,
    "sales": 35282,
    "category": "笔类套装/礼盒",
    "rank": 451
  },
  {
    "name": "天文 USB充电橡皮擦",
    "platform": "淘宝",
    "price": 18.9,
    "sales": 34781,
    "category": "电动橡皮擦",
    "rank": 452
  },
  {
    "name": "百乐 考试笔套装",
    "platform": "拼多多",
    "price": 121.4,
    "sales": 34563,
    "category": "笔类套装/礼盒",
    "rank": 453
  },
  {
    "name": "晨光 钢笔套装 含墨囊",
    "platform": "京东",
    "price": 134.3,
    "sales": 34517,
    "category": "钢笔",
    "rank": 454
  },
  {
    "name": "得力 无线吸尘器 小型",
    "platform": "淘宝",
    "price": 33.5,
    "sales": 34155,
    "category": "桌面吸尘器",
    "rank": 455
  },
  {
    "name": "得力 多功能桌面架",
    "platform": "京东",
    "price": 23,
    "sales": 33900,
    "category": "桌面收纳架",
    "rank": 456
  },
  {
    "name": "晨光 环保白板笔",
    "platform": "淘宝",
    "price": 20.9,
    "sales": 33485,
    "category": "白板笔",
    "rank": 457
  },
  {
    "name": "晨光 旋转蜡笔 不脏手",
    "platform": "抖音",
    "price": 44.7,
    "sales": 33435,
    "category": "蜡笔",
    "rank": 458
  },
  {
    "name": "Hobonichi 手账模板尺",
    "platform": "京东",
    "price": 64.7,
    "sales": 33264,
    "category": "手帐",
    "rank": 459
  },
  {
    "name": "宜家 杂志收纳架",
    "platform": "抖音",
    "price": 76.4,
    "sales": 32723,
    "category": "桌面收纳架",
    "rank": 460
  },
  {
    "name": "樱花 学生电动橡皮",
    "platform": "抖音",
    "price": 26.2,
    "sales": 32723,
    "category": "电动橡皮擦",
    "rank": 461
  },
  {
    "name": "手帐星球 火漆蜡片 成品",
    "platform": "淘宝",
    "price": 43.2,
    "sales": 31726,
    "category": "火漆印章",
    "rank": 462
  },
  {
    "name": "晨光 磁性书签 套装",
    "platform": "京东",
    "price": 32.9,
    "sales": 31324,
    "category": "书签",
    "rank": 463
  },
  {
    "name": "六品堂 笔画练字",
    "platform": "抖音",
    "price": 19.2,
    "sales": 31298,
    "category": "练字帖/描红本",
    "rank": 464
  },
  {
    "name": "得力 迷你卷笔刀",
    "platform": "拼多多",
    "price": 24,
    "sales": 30419,
    "category": "卷笔刀/卷笔器",
    "rank": 465
  },
  {
    "name": "三年二班 铁皮文具盒",
    "platform": "天猫",
    "price": 36.5,
    "sales": 29112,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 466
  },
  {
    "name": "晨光 金属杆钢笔",
    "platform": "抖音",
    "price": 16.6,
    "sales": 29087,
    "category": "钢笔",
    "rank": 467
  },
  {
    "name": "白雪 白板笔 替换芯",
    "platform": "天猫",
    "price": 18.8,
    "sales": 28985,
    "category": "白板笔",
    "rank": 468
  },
  {
    "name": "儿童乐园 剪纸套装",
    "platform": "拼多多",
    "price": 18.4,
    "sales": 28742,
    "category": "手工DIY套装",
    "rank": 469
  },
  {
    "name": "真彩 细头白板笔",
    "platform": "淘宝",
    "price": 31.9,
    "sales": 28416,
    "category": "白板笔",
    "rank": 470
  },
  {
    "name": "老人头 牛皮纸画本",
    "platform": "抖音",
    "price": 9.3,
    "sales": 28404,
    "category": "画纸/画本",
    "rank": 471
  },
  {
    "name": "兄弟 热敏标签纸 卷装",
    "platform": "天猫",
    "price": 22.4,
    "sales": 28132,
    "category": "标签贴纸",
    "rank": 472
  },
  {
    "name": "欧普 折叠台灯 便携",
    "platform": "天猫",
    "price": 184.2,
    "sales": 28044,
    "category": "护眼台灯",
    "rank": 473
  },
  {
    "name": "MARCO 金属色彩铅",
    "platform": "天猫",
    "price": 22.4,
    "sales": 27878,
    "category": "彩色铅笔",
    "rank": 474
  },
  {
    "name": "辉柏嘉 软芯彩铅",
    "platform": "淘宝",
    "price": 67.7,
    "sales": 27252,
    "category": "彩色铅笔",
    "rank": 475
  },
  {
    "name": "得力 双孔卷笔刀",
    "platform": "京东",
    "price": 35.4,
    "sales": 27008,
    "category": "卷笔刀/卷笔器",
    "rank": 476
  },
  {
    "name": "迪士尼 多层文具盒",
    "platform": "抖音",
    "price": 26.6,
    "sales": 26919,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 477
  },
  {
    "name": "得力 彩铅补充装",
    "platform": "淘宝",
    "price": 68.3,
    "sales": 26464,
    "category": "彩色铅笔",
    "rank": 478
  },
  {
    "name": "派克 旋转吸墨钢笔",
    "platform": "抖音",
    "price": 128.9,
    "sales": 26455,
    "category": "钢笔",
    "rank": 479
  },
  {
    "name": "得力 标签打印一体机",
    "platform": "京东",
    "price": 97.7,
    "sales": 26433,
    "category": "错题打印机",
    "rank": 480
  },
  {
    "name": "兄弟 校服姓名标签",
    "platform": "抖音",
    "price": 10.8,
    "sales": 26227,
    "category": "姓名贴",
    "rank": 481
  },
  {
    "name": "得力 铅笔套装 绘画用",
    "platform": "天猫",
    "price": 121.3,
    "sales": 26162,
    "category": "笔类套装/礼盒",
    "rank": 482
  },
  {
    "name": "晨光 创意美劳材料包",
    "platform": "拼多多",
    "price": 27.3,
    "sales": 26127,
    "category": "手工DIY套装",
    "rank": 483
  },
  {
    "name": "touch 软头马克笔套装",
    "platform": "天猫",
    "price": 44.5,
    "sales": 25162,
    "category": "马克笔",
    "rank": 484
  },
  {
    "name": "樱花 电动橡皮 素描专用",
    "platform": "京东",
    "price": 28.9,
    "sales": 25024,
    "category": "电动橡皮擦",
    "rank": 485
  },
  {
    "name": "温莎牛顿 手指画颜料 儿童",
    "platform": "京东",
    "price": 64.3,
    "sales": 24105,
    "category": "美术颜料",
    "rank": 486
  },
  {
    "name": "樱花 颜料调色盘",
    "platform": "抖音",
    "price": 57.3,
    "sales": 22187,
    "category": "美术颜料",
    "rank": 487
  },
  {
    "name": "晨光生活馆 极简文具",
    "platform": "抖音",
    "price": 41.1,
    "sales": 22074,
    "category": "文创用品",
    "rank": 488
  },
  {
    "name": "白雪 磁吸白板笔",
    "platform": "天猫",
    "price": 24.1,
    "sales": 21527,
    "category": "白板笔",
    "rank": 489
  },
  {
    "name": "雅柯莱 标签纸 打印机用",
    "platform": "天猫",
    "price": 93.4,
    "sales": 21366,
    "category": "标签贴纸",
    "rank": 490
  },
  {
    "name": "小猿 迷你口袋打印机",
    "platform": "淘宝",
    "price": 281.1,
    "sales": 20686,
    "category": "错题打印机",
    "rank": 491
  },
  {
    "name": "故宫文创 木质书签",
    "platform": "拼多多",
    "price": 13.8,
    "sales": 20673,
    "category": "书签",
    "rank": 492
  },
  {
    "name": "温莎牛顿 固体水彩 便携",
    "platform": "淘宝",
    "price": 75.4,
    "sales": 19966,
    "category": "美术颜料",
    "rank": 493
  },
  {
    "name": "百乐 明尖钢笔",
    "platform": "淘宝",
    "price": 24.2,
    "sales": 19655,
    "category": "钢笔",
    "rank": 494
  },
  {
    "name": "温莎牛顿 颜料画笔套装",
    "platform": "抖音",
    "price": 94.3,
    "sales": 19522,
    "category": "美术颜料",
    "rank": 495
  },
  {
    "name": "得力 可叠加收纳盒",
    "platform": "抖音",
    "price": 43.7,
    "sales": 19352,
    "category": "文具收纳盒",
    "rank": 496
  },
  {
    "name": "暮光之印 火漆印章礼盒",
    "platform": "天猫",
    "price": 21.3,
    "sales": 18552,
    "category": "火漆印章",
    "rank": 497
  },
  {
    "name": "森活记 毕业纪念火漆套装",
    "platform": "淘宝",
    "price": 65.1,
    "sales": 18158,
    "category": "火漆印章",
    "rank": 498
  },
  {
    "name": "鲁本斯 油画颜料 24色",
    "platform": "淘宝",
    "price": 66.6,
    "sales": 18141,
    "category": "美术颜料",
    "rank": 499
  },
  {
    "name": "晨光 大吸力桌面吸尘",
    "platform": "拼多多",
    "price": 29.7,
    "sales": 16416,
    "category": "桌面吸尘器",
    "rank": 500
  },
  {
    "name": "作业帮 智能打印机 WiFi",
    "platform": "抖音",
    "price": 247.3,
    "sales": 12725,
    "category": "错题打印机",
    "rank": 501
  },
  {
    "name": "得力 拍照打印机 作业",
    "platform": "淘宝",
    "price": 244.1,
    "sales": 12563,
    "category": "错题打印机",
    "rank": 502
  },
  {
    "name": "飞利浦 LED台灯 学生书桌",
    "platform": "京东",
    "price": 110.3,
    "sales": 11731,
    "category": "护眼台灯",
    "rank": 503
  },
  {
    "name": "百乐 练字钢笔 暗尖",
    "platform": "抖音",
    "price": 131.3,
    "sales": 10927,
    "category": "钢笔",
    "rank": 504
  }
],
  seasonalTrends: [
  {
    "name": "中性笔 618爆款",
    "category": "中性笔",
    "growth": 205,
    "heat": "热"
  },
  {
    "name": "中性笔 暑期热卖",
    "category": "中性笔",
    "growth": 70,
    "heat": "热"
  },
  {
    "name": "中性笔 考试必备",
    "category": "中性笔",
    "growth": 24,
    "heat": "热"
  },
  {
    "name": "中性笔 开学预热",
    "category": "中性笔",
    "growth": 97,
    "heat": "稳"
  },
  {
    "name": "中性笔 毕业季精选",
    "category": "中性笔",
    "growth": 240,
    "heat": "爆"
  },
  {
    "name": "中性笔 日常刚需",
    "category": "中性笔",
    "growth": 220,
    "heat": "暖"
  },
  {
    "name": "笔记本/记事本 618爆款",
    "category": "笔记本/记事本",
    "growth": 174,
    "heat": "热"
  },
  {
    "name": "笔记本/记事本 暑期热卖",
    "category": "笔记本/记事本",
    "growth": 143,
    "heat": "爆"
  },
  {
    "name": "笔记本/记事本 考试必备",
    "category": "笔记本/记事本",
    "growth": 125,
    "heat": "稳"
  },
  {
    "name": "笔记本/记事本 开学预热",
    "category": "笔记本/记事本",
    "growth": 38,
    "heat": "爆"
  },
  {
    "name": "笔记本/记事本 毕业季精选",
    "category": "笔记本/记事本",
    "growth": 49,
    "heat": "暖"
  },
  {
    "name": "笔记本/记事本 日常刚需",
    "category": "笔记本/记事本",
    "growth": 107,
    "heat": "暖"
  },
  {
    "name": "学习套装/礼盒/盲盒 618爆款",
    "category": "学习套装/礼盒/盲盒",
    "growth": 144,
    "heat": "暖"
  },
  {
    "name": "学习套装/礼盒/盲盒 暑期热卖",
    "category": "学习套装/礼盒/盲盒",
    "growth": 217,
    "heat": "稳"
  },
  {
    "name": "学习套装/礼盒/盲盒 考试必备",
    "category": "学习套装/礼盒/盲盒",
    "growth": 227,
    "heat": "暖"
  },
  {
    "name": "学习套装/礼盒/盲盒 开学预热",
    "category": "学习套装/礼盒/盲盒",
    "growth": 208,
    "heat": "爆"
  },
  {
    "name": "学习套装/礼盒/盲盒 毕业季精选",
    "category": "学习套装/礼盒/盲盒",
    "growth": 89,
    "heat": "热"
  },
  {
    "name": "学习套装/礼盒/盲盒 日常刚需",
    "category": "学习套装/礼盒/盲盒",
    "growth": 224,
    "heat": "稳"
  },
  {
    "name": "马克笔 618爆款",
    "category": "马克笔",
    "growth": 113,
    "heat": "暖"
  },
  {
    "name": "马克笔 暑期热卖",
    "category": "马克笔",
    "growth": 61,
    "heat": "稳"
  },
  {
    "name": "马克笔 考试必备",
    "category": "马克笔",
    "growth": 98,
    "heat": "爆"
  },
  {
    "name": "马克笔 开学预热",
    "category": "马克笔",
    "growth": 149,
    "heat": "热"
  },
  {
    "name": "马克笔 毕业季精选",
    "category": "马克笔",
    "growth": 128,
    "heat": "稳"
  },
  {
    "name": "马克笔 日常刚需",
    "category": "马克笔",
    "growth": 110,
    "heat": "爆"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 618爆款",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 82,
    "heat": "暖"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 暑期热卖",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 134,
    "heat": "暖"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 考试必备",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 199,
    "heat": "稳"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 开学预热",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 90,
    "heat": "热"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 毕业季精选",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 167,
    "heat": "热"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 日常刚需",
    "category": "文具盒/笔袋/痛包笔袋",
    "growth": 227,
    "heat": "爆"
  },
  {
    "name": "铅笔 618爆款",
    "category": "铅笔",
    "growth": 52,
    "heat": "稳"
  },
  {
    "name": "铅笔 暑期热卖",
    "category": "铅笔",
    "growth": 208,
    "heat": "热"
  },
  {
    "name": "铅笔 考试必备",
    "category": "铅笔",
    "growth": 70,
    "heat": "热"
  },
  {
    "name": "铅笔 开学预热",
    "category": "铅笔",
    "growth": 30,
    "heat": "暖"
  },
  {
    "name": "铅笔 毕业季精选",
    "category": "铅笔",
    "growth": 207,
    "heat": "稳"
  },
  {
    "name": "铅笔 日常刚需",
    "category": "铅笔",
    "growth": 113,
    "heat": "热"
  },
  {
    "name": "橡皮擦 618爆款",
    "category": "橡皮擦",
    "growth": 21,
    "heat": "稳"
  },
  {
    "name": "橡皮擦 暑期热卖",
    "category": "橡皮擦",
    "growth": 52,
    "heat": "爆"
  },
  {
    "name": "橡皮擦 考试必备",
    "category": "橡皮擦",
    "growth": 171,
    "heat": "爆"
  },
  {
    "name": "橡皮擦 开学预热",
    "category": "橡皮擦",
    "growth": 201,
    "heat": "稳"
  },
  {
    "name": "橡皮擦 毕业季精选",
    "category": "橡皮擦",
    "growth": 246,
    "heat": "热"
  },
  {
    "name": "橡皮擦 日常刚需",
    "category": "橡皮擦",
    "growth": 230,
    "heat": "热"
  },
  {
    "name": "荧光笔 618爆款",
    "category": "荧光笔",
    "growth": 220,
    "heat": "爆"
  },
  {
    "name": "荧光笔 暑期热卖",
    "category": "荧光笔",
    "growth": 125,
    "heat": "爆"
  },
  {
    "name": "荧光笔 考试必备",
    "category": "荧光笔",
    "growth": 42,
    "heat": "暖"
  },
  {
    "name": "荧光笔 开学预热",
    "category": "荧光笔",
    "growth": 142,
    "heat": "稳"
  },
  {
    "name": "荧光笔 毕业季精选",
    "category": "荧光笔",
    "growth": 55,
    "heat": "稳"
  },
  {
    "name": "荧光笔 日常刚需",
    "category": "荧光笔",
    "growth": 116,
    "heat": "暖"
  },
  {
    "name": "手帐 618爆款",
    "category": "手帐",
    "growth": 190,
    "heat": "爆"
  },
  {
    "name": "手帐 暑期热卖",
    "category": "手帐",
    "growth": 199,
    "heat": "稳"
  },
  {
    "name": "手帐 考试必备",
    "category": "手帐",
    "growth": 143,
    "heat": "热"
  },
  {
    "name": "手帐 开学预热",
    "category": "手帐",
    "growth": 83,
    "heat": "爆"
  },
  {
    "name": "手帐 毕业季精选",
    "category": "手帐",
    "growth": 95,
    "heat": "热"
  },
  {
    "name": "手帐 日常刚需",
    "category": "手帐",
    "growth": 233,
    "heat": "稳"
  },
  {
    "name": "火漆印章 618爆款",
    "category": "火漆印章",
    "growth": 159,
    "heat": "爆"
  },
  {
    "name": "火漆印章 暑期热卖",
    "category": "火漆印章",
    "growth": 43,
    "heat": "暖"
  },
  {
    "name": "火漆印章 考试必备",
    "category": "火漆印章",
    "growth": 244,
    "heat": "爆"
  },
  {
    "name": "火漆印章 开学预热",
    "category": "火漆印章",
    "growth": 23,
    "heat": "爆"
  },
  {
    "name": "火漆印章 毕业季精选",
    "category": "火漆印章",
    "growth": 134,
    "heat": "爆"
  },
  {
    "name": "火漆印章 日常刚需",
    "category": "火漆印章",
    "growth": 119,
    "heat": "稳"
  },
  {
    "name": "水彩笔 618爆款",
    "category": "水彩笔",
    "growth": 128,
    "heat": "热"
  },
  {
    "name": "水彩笔 暑期热卖",
    "category": "水彩笔",
    "growth": 116,
    "heat": "暖"
  },
  {
    "name": "水彩笔 考试必备",
    "category": "水彩笔",
    "growth": 115,
    "heat": "暖"
  },
  {
    "name": "水彩笔 开学预热",
    "category": "水彩笔",
    "growth": 194,
    "heat": "热"
  },
  {
    "name": "水彩笔 毕业季精选",
    "category": "水彩笔",
    "growth": 174,
    "heat": "暖"
  },
  {
    "name": "水彩笔 日常刚需",
    "category": "水彩笔",
    "growth": 236,
    "heat": "爆"
  },
  {
    "name": "标签贴纸 618爆款",
    "category": "标签贴纸",
    "growth": 97,
    "heat": "热"
  },
  {
    "name": "标签贴纸 暑期热卖",
    "category": "标签贴纸",
    "growth": 190,
    "heat": "热"
  },
  {
    "name": "标签贴纸 考试必备",
    "category": "标签贴纸",
    "growth": 216,
    "heat": "热"
  },
  {
    "name": "标签贴纸 开学预热",
    "category": "标签贴纸",
    "growth": 135,
    "heat": "热"
  },
  {
    "name": "标签贴纸 毕业季精选",
    "category": "标签贴纸",
    "growth": 213,
    "heat": "爆"
  },
  {
    "name": "标签贴纸 日常刚需",
    "category": "标签贴纸",
    "growth": 123,
    "heat": "爆"
  },
  {
    "name": "手工DIY套装 618爆款",
    "category": "手工DIY套装",
    "growth": 67,
    "heat": "热"
  },
  {
    "name": "手工DIY套装 暑期热卖",
    "category": "手工DIY套装",
    "growth": 34,
    "heat": "爆"
  },
  {
    "name": "手工DIY套装 考试必备",
    "category": "手工DIY套装",
    "growth": 87,
    "heat": "稳"
  },
  {
    "name": "手工DIY套装 开学预热",
    "category": "手工DIY套装",
    "growth": 76,
    "heat": "暖"
  },
  {
    "name": "手工DIY套装 毕业季精选",
    "category": "手工DIY套装",
    "growth": 22,
    "heat": "暖"
  },
  {
    "name": "手工DIY套装 日常刚需",
    "category": "手工DIY套装",
    "growth": 239,
    "heat": "热"
  },
  {
    "name": "卷笔刀/卷笔器 618爆款",
    "category": "卷笔刀/卷笔器",
    "growth": 36,
    "heat": "暖"
  },
  {
    "name": "卷笔刀/卷笔器 暑期热卖",
    "category": "卷笔刀/卷笔器",
    "growth": 107,
    "heat": "爆"
  },
  {
    "name": "卷笔刀/卷笔器 考试必备",
    "category": "卷笔刀/卷笔器",
    "growth": 188,
    "heat": "暖"
  },
  {
    "name": "卷笔刀/卷笔器 开学预热",
    "category": "卷笔刀/卷笔器",
    "growth": 246,
    "heat": "稳"
  },
  {
    "name": "卷笔刀/卷笔器 毕业季精选",
    "category": "卷笔刀/卷笔器",
    "growth": 62,
    "heat": "爆"
  },
  {
    "name": "卷笔刀/卷笔器 日常刚需",
    "category": "卷笔刀/卷笔器",
    "growth": 126,
    "heat": "暖"
  },
  {
    "name": "便签本/便条纸/N次贴 618爆款",
    "category": "便签本/便条纸/N次贴",
    "growth": 235,
    "heat": "暖"
  },
  {
    "name": "便签本/便条纸/N次贴 暑期热卖",
    "category": "便签本/便条纸/N次贴",
    "growth": 181,
    "heat": "稳"
  },
  {
    "name": "便签本/便条纸/N次贴 考试必备",
    "category": "便签本/便条纸/N次贴",
    "growth": 60,
    "heat": "爆"
  },
  {
    "name": "便签本/便条纸/N次贴 开学预热",
    "category": "便签本/便条纸/N次贴",
    "growth": 187,
    "heat": "稳"
  },
  {
    "name": "便签本/便条纸/N次贴 毕业季精选",
    "category": "便签本/便条纸/N次贴",
    "growth": 101,
    "heat": "暖"
  },
  {
    "name": "便签本/便条纸/N次贴 日常刚需",
    "category": "便签本/便条纸/N次贴",
    "growth": 242,
    "heat": "暖"
  },
  {
    "name": "笔筒 618爆款",
    "category": "笔筒",
    "growth": 205,
    "heat": "暖"
  },
  {
    "name": "笔筒 暑期热卖",
    "category": "笔筒",
    "growth": 24,
    "heat": "暖"
  },
  {
    "name": "笔筒 考试必备",
    "category": "笔筒",
    "growth": 161,
    "heat": "稳"
  },
  {
    "name": "笔筒 开学预热",
    "category": "笔筒",
    "growth": 128,
    "heat": "爆"
  },
  {
    "name": "笔筒 毕业季精选",
    "category": "笔筒",
    "growth": 140,
    "heat": "爆"
  },
  {
    "name": "笔筒 日常刚需",
    "category": "笔筒",
    "growth": 129,
    "heat": "稳"
  },
  {
    "name": "文具收纳盒 618爆款",
    "category": "文具收纳盒",
    "growth": 174,
    "heat": "稳"
  },
  {
    "name": "文具收纳盒 暑期热卖",
    "category": "文具收纳盒",
    "growth": 98,
    "heat": "热"
  },
  {
    "name": "文具收纳盒 考试必备",
    "category": "文具收纳盒",
    "growth": 32,
    "heat": "热"
  },
  {
    "name": "文具收纳盒 开学预热",
    "category": "文具收纳盒",
    "growth": 69,
    "heat": "爆"
  },
  {
    "name": "文具收纳盒 毕业季精选",
    "category": "文具收纳盒",
    "growth": 180,
    "heat": "稳"
  },
  {
    "name": "文具收纳盒 日常刚需",
    "category": "文具收纳盒",
    "growth": 245,
    "heat": "稳"
  },
  {
    "name": "桌面收纳架 618爆款",
    "category": "桌面收纳架",
    "growth": 143,
    "heat": "稳"
  },
  {
    "name": "桌面收纳架 暑期热卖",
    "category": "桌面收纳架",
    "growth": 172,
    "heat": "热"
  },
  {
    "name": "桌面收纳架 考试必备",
    "category": "桌面收纳架",
    "growth": 133,
    "heat": "爆"
  },
  {
    "name": "桌面收纳架 开学预热",
    "category": "桌面收纳架",
    "growth": 239,
    "heat": "热"
  },
  {
    "name": "桌面收纳架 毕业季精选",
    "category": "桌面收纳架",
    "growth": 219,
    "heat": "热"
  },
  {
    "name": "桌面收纳架 日常刚需",
    "category": "桌面收纳架",
    "growth": 132,
    "heat": "爆"
  },
  {
    "name": "错题打印机 618爆款",
    "category": "错题打印机",
    "growth": 113,
    "heat": "稳"
  },
  {
    "name": "错题打印机 暑期热卖",
    "category": "错题打印机",
    "growth": 245,
    "heat": "爆"
  },
  {
    "name": "错题打印机 考试必备",
    "category": "错题打印机",
    "growth": 234,
    "heat": "暖"
  },
  {
    "name": "错题打印机 开学预热",
    "category": "错题打印机",
    "growth": 180,
    "heat": "暖"
  },
  {
    "name": "错题打印机 毕业季精选",
    "category": "错题打印机",
    "growth": 29,
    "heat": "稳"
  },
  {
    "name": "错题打印机 日常刚需",
    "category": "错题打印机",
    "growth": 248,
    "heat": "热"
  },
  {
    "name": "护眼台灯 618爆款",
    "category": "护眼台灯",
    "growth": 82,
    "heat": "爆"
  },
  {
    "name": "护眼台灯 暑期热卖",
    "category": "护眼台灯",
    "growth": 89,
    "heat": "稳"
  },
  {
    "name": "护眼台灯 考试必备",
    "category": "护眼台灯",
    "growth": 105,
    "heat": "热"
  },
  {
    "name": "护眼台灯 开学预热",
    "category": "护眼台灯",
    "growth": 121,
    "heat": "暖"
  },
  {
    "name": "护眼台灯 毕业季精选",
    "category": "护眼台灯",
    "growth": 68,
    "heat": "热"
  },
  {
    "name": "护眼台灯 日常刚需",
    "category": "护眼台灯",
    "growth": 135,
    "heat": "热"
  },
  {
    "name": "书皮/书套 618爆款",
    "category": "书皮/书套",
    "growth": 51,
    "heat": "爆"
  },
  {
    "name": "书皮/书套 暑期热卖",
    "category": "书皮/书套",
    "growth": 163,
    "heat": "稳"
  },
  {
    "name": "书皮/书套 考试必备",
    "category": "书皮/书套",
    "growth": 206,
    "heat": "爆"
  },
  {
    "name": "书皮/书套 开学预热",
    "category": "书皮/书套",
    "growth": 61,
    "heat": "稳"
  },
  {
    "name": "书皮/书套 毕业季精选",
    "category": "书皮/书套",
    "growth": 107,
    "heat": "稳"
  },
  {
    "name": "书皮/书套 日常刚需",
    "category": "书皮/书套",
    "growth": 22,
    "heat": "暖"
  },
  {
    "name": "美术颜料 618爆款",
    "category": "美术颜料",
    "growth": 21,
    "heat": "爆"
  },
  {
    "name": "美术颜料 暑期热卖",
    "category": "美术颜料",
    "growth": 236,
    "heat": "暖"
  },
  {
    "name": "美术颜料 考试必备",
    "category": "美术颜料",
    "growth": 77,
    "heat": "暖"
  },
  {
    "name": "美术颜料 开学预热",
    "category": "美术颜料",
    "growth": 232,
    "heat": "稳"
  },
  {
    "name": "美术颜料 毕业季精选",
    "category": "美术颜料",
    "growth": 147,
    "heat": "热"
  },
  {
    "name": "美术颜料 日常刚需",
    "category": "美术颜料",
    "growth": 138,
    "heat": "暖"
  },
  {
    "name": "办公文具 618爆款",
    "category": "办公文具",
    "growth": 220,
    "heat": "热"
  },
  {
    "name": "办公文具 暑期热卖",
    "category": "办公文具",
    "growth": 80,
    "heat": "热"
  },
  {
    "name": "办公文具 考试必备",
    "category": "办公文具",
    "growth": 178,
    "heat": "热"
  },
  {
    "name": "办公文具 开学预热",
    "category": "办公文具",
    "growth": 173,
    "heat": "爆"
  },
  {
    "name": "办公文具 毕业季精选",
    "category": "办公文具",
    "growth": 186,
    "heat": "稳"
  },
  {
    "name": "办公文具 日常刚需",
    "category": "办公文具",
    "growth": 25,
    "heat": "稳"
  },
  {
    "name": "笔类套装/礼盒 618爆款",
    "category": "笔类套装/礼盒",
    "growth": 189,
    "heat": "热"
  },
  {
    "name": "笔类套装/礼盒 暑期热卖",
    "category": "笔类套装/礼盒",
    "growth": 154,
    "heat": "热"
  },
  {
    "name": "笔类套装/礼盒 考试必备",
    "category": "笔类套装/礼盒",
    "growth": 49,
    "heat": "稳"
  },
  {
    "name": "笔类套装/礼盒 开学预热",
    "category": "笔类套装/礼盒",
    "growth": 114,
    "heat": "爆"
  },
  {
    "name": "笔类套装/礼盒 毕业季精选",
    "category": "笔类套装/礼盒",
    "growth": 225,
    "heat": "暖"
  },
  {
    "name": "笔类套装/礼盒 日常刚需",
    "category": "笔类套装/礼盒",
    "growth": 141,
    "heat": "爆"
  },
  {
    "name": "文创用品 618爆款",
    "category": "文创用品",
    "growth": 159,
    "heat": "热"
  },
  {
    "name": "文创用品 暑期热卖",
    "category": "文创用品",
    "growth": 227,
    "heat": "爆"
  },
  {
    "name": "文创用品 考试必备",
    "category": "文创用品",
    "growth": 150,
    "heat": "暖"
  },
  {
    "name": "文创用品 开学预热",
    "category": "文创用品",
    "growth": 54,
    "heat": "热"
  },
  {
    "name": "文创用品 毕业季精选",
    "category": "文创用品",
    "growth": 35,
    "heat": "爆"
  },
  {
    "name": "文创用品 日常刚需",
    "category": "文创用品",
    "growth": 28,
    "heat": "爆"
  },
  {
    "name": "姓名贴 618爆款",
    "category": "姓名贴",
    "growth": 128,
    "heat": "暖"
  },
  {
    "name": "姓名贴 暑期热卖",
    "category": "姓名贴",
    "growth": 71,
    "heat": "稳"
  },
  {
    "name": "姓名贴 考试必备",
    "category": "姓名贴",
    "growth": 21,
    "heat": "爆"
  },
  {
    "name": "姓名贴 开学预热",
    "category": "姓名贴",
    "growth": 225,
    "heat": "暖"
  },
  {
    "name": "姓名贴 毕业季精选",
    "category": "姓名贴",
    "growth": 74,
    "heat": "暖"
  },
  {
    "name": "姓名贴 日常刚需",
    "category": "姓名贴",
    "growth": 144,
    "heat": "热"
  },
  {
    "name": "电动橡皮擦 618爆款",
    "category": "电动橡皮擦",
    "growth": 97,
    "heat": "暖"
  },
  {
    "name": "电动橡皮擦 暑期热卖",
    "category": "电动橡皮擦",
    "growth": 145,
    "heat": "稳"
  },
  {
    "name": "电动橡皮擦 考试必备",
    "category": "电动橡皮擦",
    "growth": 123,
    "heat": "稳"
  },
  {
    "name": "电动橡皮擦 开学预热",
    "category": "电动橡皮擦",
    "growth": 166,
    "heat": "暖"
  },
  {
    "name": "电动橡皮擦 毕业季精选",
    "category": "电动橡皮擦",
    "growth": 114,
    "heat": "爆"
  },
  {
    "name": "电动橡皮擦 日常刚需",
    "category": "电动橡皮擦",
    "growth": 31,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 618爆款",
    "category": "拼豆/咕卡套装",
    "growth": 66,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 暑期热卖",
    "category": "拼豆/咕卡套装",
    "growth": 218,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 考试必备",
    "category": "拼豆/咕卡套装",
    "growth": 224,
    "heat": "热"
  },
  {
    "name": "拼豆/咕卡套装 开学预热",
    "category": "拼豆/咕卡套装",
    "growth": 107,
    "heat": "稳"
  },
  {
    "name": "拼豆/咕卡套装 毕业季精选",
    "category": "拼豆/咕卡套装",
    "growth": 153,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 日常刚需",
    "category": "拼豆/咕卡套装",
    "growth": 147,
    "heat": "暖"
  },
  {
    "name": "彩色铅笔 618爆款",
    "category": "彩色铅笔",
    "growth": 36,
    "heat": "稳"
  },
  {
    "name": "彩色铅笔 暑期热卖",
    "category": "彩色铅笔",
    "growth": 62,
    "heat": "热"
  },
  {
    "name": "彩色铅笔 考试必备",
    "category": "彩色铅笔",
    "growth": 95,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 开学预热",
    "category": "彩色铅笔",
    "growth": 47,
    "heat": "稳"
  },
  {
    "name": "彩色铅笔 毕业季精选",
    "category": "彩色铅笔",
    "growth": 192,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 日常刚需",
    "category": "彩色铅笔",
    "growth": 34,
    "heat": "稳"
  },
  {
    "name": "白板笔 618爆款",
    "category": "白板笔",
    "growth": 235,
    "heat": "稳"
  },
  {
    "name": "白板笔 暑期热卖",
    "category": "白板笔",
    "growth": 136,
    "heat": "爆"
  },
  {
    "name": "白板笔 考试必备",
    "category": "白板笔",
    "growth": 196,
    "heat": "稳"
  },
  {
    "name": "白板笔 开学预热",
    "category": "白板笔",
    "growth": 218,
    "heat": "爆"
  },
  {
    "name": "白板笔 毕业季精选",
    "category": "白板笔",
    "growth": 232,
    "heat": "暖"
  },
  {
    "name": "白板笔 日常刚需",
    "category": "白板笔",
    "growth": 151,
    "heat": "稳"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 618爆款",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 204,
    "heat": "爆"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 暑期热卖",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 209,
    "heat": "爆"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 考试必备",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 67,
    "heat": "热"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 开学预热",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 159,
    "heat": "爆"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 毕业季精选",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 41,
    "heat": "热"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 日常刚需",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "growth": 37,
    "heat": "爆"
  },
  {
    "name": "修正带 618爆款",
    "category": "修正带",
    "growth": 174,
    "heat": "爆"
  },
  {
    "name": "修正带 暑期热卖",
    "category": "修正带",
    "growth": 53,
    "heat": "稳"
  },
  {
    "name": "修正带 考试必备",
    "category": "修正带",
    "growth": 168,
    "heat": "爆"
  },
  {
    "name": "修正带 开学预热",
    "category": "修正带",
    "growth": 100,
    "heat": "热"
  },
  {
    "name": "修正带 毕业季精选",
    "category": "修正带",
    "growth": 80,
    "heat": "稳"
  },
  {
    "name": "修正带 日常刚需",
    "category": "修正带",
    "growth": 154,
    "heat": "热"
  },
  {
    "name": "钢笔 618爆款",
    "category": "钢笔",
    "growth": 143,
    "heat": "爆"
  },
  {
    "name": "钢笔 暑期热卖",
    "category": "钢笔",
    "growth": 127,
    "heat": "暖"
  },
  {
    "name": "钢笔 考试必备",
    "category": "钢笔",
    "growth": 39,
    "heat": "暖"
  },
  {
    "name": "钢笔 开学预热",
    "category": "钢笔",
    "growth": 40,
    "heat": "暖"
  },
  {
    "name": "钢笔 毕业季精选",
    "category": "钢笔",
    "growth": 120,
    "heat": "热"
  },
  {
    "name": "钢笔 日常刚需",
    "category": "钢笔",
    "growth": 40,
    "heat": "热"
  },
  {
    "name": "画纸/画本 618爆款",
    "category": "画纸/画本",
    "growth": 112,
    "heat": "热"
  },
  {
    "name": "画纸/画本 暑期热卖",
    "category": "画纸/画本",
    "growth": 200,
    "heat": "暖"
  },
  {
    "name": "画纸/画本 考试必备",
    "category": "画纸/画本",
    "growth": 140,
    "heat": "热"
  },
  {
    "name": "画纸/画本 开学预热",
    "category": "画纸/画本",
    "growth": 211,
    "heat": "暖"
  },
  {
    "name": "画纸/画本 毕业季精选",
    "category": "画纸/画本",
    "growth": 159,
    "heat": "稳"
  },
  {
    "name": "画纸/画本 日常刚需",
    "category": "画纸/画本",
    "growth": 157,
    "heat": "暖"
  },
  {
    "name": "胶水 618爆款",
    "category": "胶水",
    "growth": 82,
    "heat": "热"
  },
  {
    "name": "胶水 暑期热卖",
    "category": "胶水",
    "growth": 44,
    "heat": "热"
  },
  {
    "name": "胶水 考试必备",
    "category": "胶水",
    "growth": 241,
    "heat": "稳"
  },
  {
    "name": "胶水 开学预热",
    "category": "胶水",
    "growth": 152,
    "heat": "稳"
  },
  {
    "name": "胶水 毕业季精选",
    "category": "胶水",
    "growth": 199,
    "heat": "热"
  },
  {
    "name": "胶水 日常刚需",
    "category": "胶水",
    "growth": 43,
    "heat": "暖"
  },
  {
    "name": "笔芯/替芯/笔壳 618爆款",
    "category": "笔芯/替芯/笔壳",
    "growth": 51,
    "heat": "热"
  },
  {
    "name": "笔芯/替芯/笔壳 暑期热卖",
    "category": "笔芯/替芯/笔壳",
    "growth": 118,
    "heat": "爆"
  },
  {
    "name": "笔芯/替芯/笔壳 考试必备",
    "category": "笔芯/替芯/笔壳",
    "growth": 112,
    "heat": "暖"
  },
  {
    "name": "笔芯/替芯/笔壳 开学预热",
    "category": "笔芯/替芯/笔壳",
    "growth": 92,
    "heat": "稳"
  },
  {
    "name": "笔芯/替芯/笔壳 毕业季精选",
    "category": "笔芯/替芯/笔壳",
    "growth": 238,
    "heat": "稳"
  },
  {
    "name": "笔芯/替芯/笔壳 日常刚需",
    "category": "笔芯/替芯/笔壳",
    "growth": 160,
    "heat": "稳"
  },
  {
    "name": "记号笔 618爆款",
    "category": "记号笔",
    "growth": 20,
    "heat": "暖"
  },
  {
    "name": "记号笔 暑期热卖",
    "category": "记号笔",
    "growth": 191,
    "heat": "爆"
  },
  {
    "name": "记号笔 考试必备",
    "category": "记号笔",
    "growth": 213,
    "heat": "爆"
  },
  {
    "name": "记号笔 开学预热",
    "category": "记号笔",
    "growth": 33,
    "heat": "爆"
  },
  {
    "name": "记号笔 毕业季精选",
    "category": "记号笔",
    "growth": 47,
    "heat": "热"
  },
  {
    "name": "记号笔 日常刚需",
    "category": "记号笔",
    "growth": 46,
    "heat": "爆"
  },
  {
    "name": "练字帖/描红本 618爆款",
    "category": "练字帖/描红本",
    "growth": 220,
    "heat": "暖"
  },
  {
    "name": "练字帖/描红本 暑期热卖",
    "category": "练字帖/描红本",
    "growth": 35,
    "heat": "稳"
  },
  {
    "name": "练字帖/描红本 考试必备",
    "category": "练字帖/描红本",
    "growth": 84,
    "heat": "稳"
  },
  {
    "name": "练字帖/描红本 开学预热",
    "category": "练字帖/描红本",
    "growth": 204,
    "heat": "热"
  },
  {
    "name": "练字帖/描红本 毕业季精选",
    "category": "练字帖/描红本",
    "growth": 87,
    "heat": "爆"
  },
  {
    "name": "练字帖/描红本 日常刚需",
    "category": "练字帖/描红本",
    "growth": 163,
    "heat": "爆"
  },
  {
    "name": "圆珠笔 618爆款",
    "category": "圆珠笔",
    "growth": 189,
    "heat": "暖"
  },
  {
    "name": "圆珠笔 暑期热卖",
    "category": "圆珠笔",
    "growth": 109,
    "heat": "暖"
  },
  {
    "name": "圆珠笔 考试必备",
    "category": "圆珠笔",
    "growth": 185,
    "heat": "热"
  },
  {
    "name": "圆珠笔 开学预热",
    "category": "圆珠笔",
    "growth": 145,
    "heat": "热"
  },
  {
    "name": "圆珠笔 毕业季精选",
    "category": "圆珠笔",
    "growth": 126,
    "heat": "暖"
  },
  {
    "name": "圆珠笔 日常刚需",
    "category": "圆珠笔",
    "growth": 50,
    "heat": "热"
  },
  {
    "name": "蜡笔 618爆款",
    "category": "蜡笔",
    "growth": 158,
    "heat": "稳"
  },
  {
    "name": "蜡笔 暑期热卖",
    "category": "蜡笔",
    "growth": 182,
    "heat": "热"
  },
  {
    "name": "蜡笔 考试必备",
    "category": "蜡笔",
    "growth": 57,
    "heat": "爆"
  },
  {
    "name": "蜡笔 开学预热",
    "category": "蜡笔",
    "growth": 85,
    "heat": "暖"
  },
  {
    "name": "蜡笔 毕业季精选",
    "category": "蜡笔",
    "growth": 165,
    "heat": "爆"
  },
  {
    "name": "蜡笔 日常刚需",
    "category": "蜡笔",
    "growth": 166,
    "heat": "热"
  },
  {
    "name": "书签 618爆款",
    "category": "书签",
    "growth": 128,
    "heat": "稳"
  },
  {
    "name": "书签 暑期热卖",
    "category": "书签",
    "growth": 26,
    "heat": "热"
  },
  {
    "name": "书签 考试必备",
    "category": "书签",
    "growth": 158,
    "heat": "稳"
  },
  {
    "name": "书签 开学预热",
    "category": "书签",
    "growth": 26,
    "heat": "暖"
  },
  {
    "name": "书签 毕业季精选",
    "category": "书签",
    "growth": 205,
    "heat": "暖"
  },
  {
    "name": "书签 日常刚需",
    "category": "书签",
    "growth": 53,
    "heat": "暖"
  },
  {
    "name": "桌面吸尘器 618爆款",
    "category": "桌面吸尘器",
    "growth": 97,
    "heat": "稳"
  },
  {
    "name": "桌面吸尘器 暑期热卖",
    "category": "桌面吸尘器",
    "growth": 100,
    "heat": "爆"
  },
  {
    "name": "桌面吸尘器 考试必备",
    "category": "桌面吸尘器",
    "growth": 29,
    "heat": "热"
  },
  {
    "name": "桌面吸尘器 开学预热",
    "category": "桌面吸尘器",
    "growth": 197,
    "heat": "稳"
  },
  {
    "name": "桌面吸尘器 毕业季精选",
    "category": "桌面吸尘器",
    "growth": 244,
    "heat": "爆"
  },
  {
    "name": "桌面吸尘器 日常刚需",
    "category": "桌面吸尘器",
    "growth": 169,
    "heat": "稳"
  }
],
  hotwords: [
  {
    "word": "中性笔推荐",
    "category": "中性笔",
    "platforms": {
      "jd": 3025108,
      "taobao": 4457602,
      "pdd": 1211476,
      "douyin": 24559344,
      "xhs": 2441618
    }
  },
  {
    "word": "中性笔测评",
    "category": "中性笔",
    "platforms": {
      "jd": 7411353,
      "taobao": 9863086,
      "pdd": 2881259,
      "douyin": 18621326,
      "xhs": 5293304
    }
  },
  {
    "word": "中性笔平替",
    "category": "中性笔",
    "platforms": {
      "jd": 1389449,
      "taobao": 6601568,
      "pdd": 1145560,
      "douyin": 8357655,
      "xhs": 9457332
    }
  },
  {
    "word": "中性笔学生党",
    "category": "中性笔",
    "platforms": {
      "jd": 5733683,
      "taobao": 6397479,
      "pdd": 1653208,
      "douyin": 8000612,
      "xhs": 10719964
    }
  },
  {
    "word": "中性笔性价比",
    "category": "中性笔",
    "platforms": {
      "jd": 7113664,
      "taobao": 9986554,
      "pdd": 4334431,
      "douyin": 21468490,
      "xhs": 6622969
    }
  },
  {
    "word": "中性笔好物分享",
    "category": "中性笔",
    "platforms": {
      "jd": 1648679,
      "taobao": 2389193,
      "pdd": 3468972,
      "douyin": 17336790,
      "xhs": 14829489
    }
  },
  {
    "word": "笔记本/记事本推荐",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 3033596,
      "taobao": 1090738,
      "pdd": 4303194,
      "douyin": 10065925,
      "xhs": 10873943
    }
  },
  {
    "word": "笔记本/记事本测评",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 1773491,
      "taobao": 6529461,
      "pdd": 4657452,
      "douyin": 7113573,
      "xhs": 2512689
    }
  },
  {
    "word": "笔记本/记事本平替",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 6740818,
      "taobao": 7361395,
      "pdd": 2978972,
      "douyin": 15483461,
      "xhs": 11319830
    }
  },
  {
    "word": "笔记本/记事本学生党",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 6374926,
      "taobao": 9085352,
      "pdd": 2813438,
      "douyin": 6502176,
      "xhs": 10484984
    }
  },
  {
    "word": "笔记本/记事本性价比",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 7762629,
      "taobao": 9931379,
      "pdd": 3285263,
      "douyin": 20519045,
      "xhs": 3277076
    }
  },
  {
    "word": "笔记本/记事本好物分享",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 3260560,
      "taobao": 7733723,
      "pdd": 1650585,
      "douyin": 10635791,
      "xhs": 14010895
    }
  },
  {
    "word": "学习套装/礼盒/盲盒推荐",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 3042083,
      "taobao": 8723873,
      "pdd": 1894912,
      "douyin": 17572505,
      "xhs": 5306268
    }
  },
  {
    "word": "学习套装/礼盒/盲盒测评",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 3635629,
      "taobao": 3195836,
      "pdd": 933644,
      "douyin": 17605820,
      "xhs": 13732073
    }
  },
  {
    "word": "学习套装/礼盒/盲盒平替",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 4592187,
      "taobao": 8121222,
      "pdd": 4812383,
      "douyin": 22609267,
      "xhs": 13182329
    }
  },
  {
    "word": "学习套装/礼盒/盲盒学生党",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 7016169,
      "taobao": 11773226,
      "pdd": 3973667,
      "douyin": 5003740,
      "xhs": 10250003
    }
  },
  {
    "word": "学习套装/礼盒/盲盒性价比",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 911593,
      "taobao": 9876203,
      "pdd": 2236095,
      "douyin": 19569600,
      "xhs": 13931183
    }
  },
  {
    "word": "学习套装/礼盒/盲盒好物分享",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 4872440,
      "taobao": 2078252,
      "pdd": 5332198,
      "douyin": 3934793,
      "xhs": 13192301
    }
  },
  {
    "word": "马克笔推荐",
    "category": "马克笔",
    "platforms": {
      "jd": 3050571,
      "taobao": 5357009,
      "pdd": 4986630,
      "douyin": 3079086,
      "xhs": 13738593
    }
  },
  {
    "word": "马克笔测评",
    "category": "马克笔",
    "platforms": {
      "jd": 5497767,
      "taobao": 10862210,
      "pdd": 2709836,
      "douyin": 6098067,
      "xhs": 10951458
    }
  },
  {
    "word": "马克笔平替",
    "category": "马克笔",
    "platforms": {
      "jd": 2443557,
      "taobao": 8881049,
      "pdd": 1145795,
      "douyin": 7735074,
      "xhs": 1044827
    }
  },
  {
    "word": "马克笔学生党",
    "category": "马克笔",
    "platforms": {
      "jd": 7657411,
      "taobao": 3461099,
      "pdd": 5133897,
      "douyin": 3505304,
      "xhs": 10015023
    }
  },
  {
    "word": "马克笔性价比",
    "category": "马克笔",
    "platforms": {
      "jd": 1560557,
      "taobao": 9821027,
      "pdd": 1186928,
      "douyin": 18620155,
      "xhs": 10585289
    }
  },
  {
    "word": "马克笔好物分享",
    "category": "马克笔",
    "platforms": {
      "jd": 6484321,
      "taobao": 7422782,
      "pdd": 3513811,
      "douyin": 19233794,
      "xhs": 12373707
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋推荐",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 3059058,
      "taobao": 1990145,
      "pdd": 2578348,
      "douyin": 10585667,
      "xhs": 8170918
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋测评",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 7359905,
      "taobao": 7528585,
      "pdd": 4486029,
      "douyin": 16590314,
      "xhs": 8170842
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋平替",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 7794926,
      "taobao": 9640876,
      "pdd": 2979206,
      "douyin": 14860880,
      "xhs": 2907326
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋学生党",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 798654,
      "taobao": 6148972,
      "pdd": 794127,
      "douyin": 24006868,
      "xhs": 9780042
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋性价比",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 2209522,
      "taobao": 9765852,
      "pdd": 5637760,
      "douyin": 17670709,
      "xhs": 7239396
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋好物分享",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 596202,
      "taobao": 1767312,
      "pdd": 1695424,
      "douyin": 12532796,
      "xhs": 11555112
    }
  },
  {
    "word": "铅笔推荐",
    "category": "铅笔",
    "platforms": {
      "jd": 3067546,
      "taobao": 9623280,
      "pdd": 5670066,
      "douyin": 18092248,
      "xhs": 2603242
    }
  },
  {
    "word": "铅笔测评",
    "category": "铅笔",
    "platforms": {
      "jd": 1722043,
      "taobao": 4194960,
      "pdd": 762221,
      "douyin": 5082562,
      "xhs": 5390227
    }
  },
  {
    "word": "铅笔平替",
    "category": "铅笔",
    "platforms": {
      "jd": 5646295,
      "taobao": 10400702,
      "pdd": 4812618,
      "douyin": 21986687,
      "xhs": 4769824
    }
  },
  {
    "word": "铅笔学生党",
    "category": "铅笔",
    "platforms": {
      "jd": 1439896,
      "taobao": 8836846,
      "pdd": 1954356,
      "douyin": 22508432,
      "xhs": 9545062
    }
  },
  {
    "word": "铅笔性价比",
    "category": "铅笔",
    "platforms": {
      "jd": 2858486,
      "taobao": 9710676,
      "pdd": 4588593,
      "douyin": 16721264,
      "xhs": 3893503
    }
  },
  {
    "word": "铅笔好物分享",
    "category": "铅笔",
    "platforms": {
      "jd": 2208083,
      "taobao": 7111842,
      "pdd": 5377037,
      "douyin": 5831798,
      "xhs": 10736518
    }
  },
  {
    "word": "橡皮擦推荐",
    "category": "橡皮擦",
    "platforms": {
      "jd": 3076033,
      "taobao": 6256416,
      "pdd": 3261784,
      "douyin": 3598828,
      "xhs": 11035567
    }
  },
  {
    "word": "橡皮擦测评",
    "category": "橡皮擦",
    "platforms": {
      "jd": 3584181,
      "taobao": 11861335,
      "pdd": 2538414,
      "douyin": 15574809,
      "xhs": 2609611
    }
  },
  {
    "word": "橡皮擦平替",
    "category": "橡皮擦",
    "platforms": {
      "jd": 3497665,
      "taobao": 11160529,
      "pdd": 1146029,
      "douyin": 7112493,
      "xhs": 6632323
    }
  },
  {
    "word": "橡皮擦学生党",
    "category": "橡皮擦",
    "platforms": {
      "jd": 2081139,
      "taobao": 11524719,
      "pdd": 3114586,
      "douyin": 21009996,
      "xhs": 9310081
    }
  },
  {
    "word": "橡皮擦性价比",
    "category": "橡皮擦",
    "platforms": {
      "jd": 3507451,
      "taobao": 9655501,
      "pdd": 3539425,
      "douyin": 15771819,
      "xhs": 14547610
    }
  },
  {
    "word": "橡皮擦好物分享",
    "category": "橡皮擦",
    "platforms": {
      "jd": 3819964,
      "taobao": 1456371,
      "pdd": 3558650,
      "douyin": 21130799,
      "xhs": 9917924
    }
  },
  {
    "word": "荧光笔推荐",
    "category": "荧光笔",
    "platforms": {
      "jd": 3084521,
      "taobao": 2889552,
      "pdd": 853502,
      "douyin": 11105409,
      "xhs": 5467892
    }
  },
  {
    "word": "荧光笔测评",
    "category": "荧光笔",
    "platforms": {
      "jd": 5446319,
      "taobao": 8527710,
      "pdd": 4314606,
      "douyin": 4067056,
      "xhs": 13828996
    }
  },
  {
    "word": "荧光笔平替",
    "category": "荧光笔",
    "platforms": {
      "jd": 1349034,
      "taobao": 11920356,
      "pdd": 2979441,
      "douyin": 14238300,
      "xhs": 8494821
    }
  },
  {
    "word": "荧光笔学生党",
    "category": "荧光笔",
    "platforms": {
      "jd": 2722382,
      "taobao": 3212592,
      "pdd": 4274815,
      "douyin": 19511559,
      "xhs": 9075101
    }
  },
  {
    "word": "荧光笔性价比",
    "category": "荧光笔",
    "platforms": {
      "jd": 4156415,
      "taobao": 9600325,
      "pdd": 2490257,
      "douyin": 14822374,
      "xhs": 11201716
    }
  },
  {
    "word": "荧光笔好物分享",
    "category": "荧光笔",
    "platforms": {
      "jd": 5431845,
      "taobao": 6800901,
      "pdd": 1740263,
      "douyin": 14429801,
      "xhs": 9099330
    }
  },
  {
    "word": "手帐推荐",
    "category": "手帐",
    "platforms": {
      "jd": 3093008,
      "taobao": 10522687,
      "pdd": 3945220,
      "douyin": 18611990,
      "xhs": 13900217
    }
  },
  {
    "word": "手帐测评",
    "category": "手帐",
    "platforms": {
      "jd": 7308457,
      "taobao": 5194085,
      "pdd": 590798,
      "douyin": 14559303,
      "xhs": 11048380
    }
  },
  {
    "word": "手帐平替",
    "category": "手帐",
    "platforms": {
      "jd": 6700403,
      "taobao": 1680183,
      "pdd": 4812852,
      "douyin": 21364106,
      "xhs": 10357319
    }
  },
  {
    "word": "手帐学生党",
    "category": "手帐",
    "platforms": {
      "jd": 3363624,
      "taobao": 5900465,
      "pdd": 5435045,
      "douyin": 18013123,
      "xhs": 8840121
    }
  },
  {
    "word": "手帐性价比",
    "category": "手帐",
    "platforms": {
      "jd": 4805379,
      "taobao": 9545150,
      "pdd": 1441090,
      "douyin": 13872929,
      "xhs": 7855823
    }
  },
  {
    "word": "手帐好物分享",
    "category": "手帐",
    "platforms": {
      "jd": 7043726,
      "taobao": 1145431,
      "pdd": 5421876,
      "douyin": 7728803,
      "xhs": 8280736
    }
  },
  {
    "word": "火漆印章推荐",
    "category": "火漆印章",
    "platforms": {
      "jd": 3101496,
      "taobao": 7155823,
      "pdd": 1536938,
      "douyin": 4118570,
      "xhs": 8332542
    }
  },
  {
    "word": "火漆印章测评",
    "category": "火漆印章",
    "platforms": {
      "jd": 1670595,
      "taobao": 1860459,
      "pdd": 2366991,
      "douyin": 3051550,
      "xhs": 8267765
    }
  },
  {
    "word": "火漆印章平替",
    "category": "火漆印章",
    "platforms": {
      "jd": 4551773,
      "taobao": 2440009,
      "pdd": 1146264,
      "douyin": 6489912,
      "xhs": 12219818
    }
  },
  {
    "word": "火漆印章学生党",
    "category": "火漆印章",
    "platforms": {
      "jd": 4004867,
      "taobao": 8588339,
      "pdd": 1095274,
      "douyin": 16514687,
      "xhs": 8605140
    }
  },
  {
    "word": "火漆印章性价比",
    "category": "火漆印章",
    "platforms": {
      "jd": 5454344,
      "taobao": 9489974,
      "pdd": 5891922,
      "douyin": 12923483,
      "xhs": 4509930
    }
  },
  {
    "word": "火漆印章好物分享",
    "category": "火漆印章",
    "platforms": {
      "jd": 1155607,
      "taobao": 6489961,
      "pdd": 3603489,
      "douyin": 23027804,
      "xhs": 7462141
    }
  },
  {
    "word": "水彩笔推荐",
    "category": "水彩笔",
    "platforms": {
      "jd": 3109983,
      "taobao": 3788959,
      "pdd": 4628656,
      "douyin": 11625151,
      "xhs": 2764866
    }
  },
  {
    "word": "水彩笔测评",
    "category": "水彩笔",
    "platforms": {
      "jd": 3532732,
      "taobao": 9526834,
      "pdd": 4143183,
      "douyin": 13543797,
      "xhs": 5487149
    }
  },
  {
    "word": "水彩笔平替",
    "category": "水彩笔",
    "platforms": {
      "jd": 2403142,
      "taobao": 3199836,
      "pdd": 2979675,
      "douyin": 13615719,
      "xhs": 14082316
    }
  },
  {
    "word": "水彩笔学生党",
    "category": "水彩笔",
    "platforms": {
      "jd": 4646109,
      "taobao": 11276212,
      "pdd": 2255504,
      "douyin": 15016251,
      "xhs": 8370160
    }
  },
  {
    "word": "水彩笔性价比",
    "category": "水彩笔",
    "platforms": {
      "jd": 6103308,
      "taobao": 9434799,
      "pdd": 4842755,
      "douyin": 11974038,
      "xhs": 1164037
    }
  },
  {
    "word": "水彩笔好物分享",
    "category": "水彩笔",
    "platforms": {
      "jd": 2767488,
      "taobao": 11834490,
      "pdd": 1785102,
      "douyin": 16326806,
      "xhs": 6643547
    }
  },
  {
    "word": "标签贴纸推荐",
    "category": "标签贴纸",
    "platforms": {
      "jd": 3118471,
      "taobao": 11422095,
      "pdd": 2220374,
      "douyin": 19131732,
      "xhs": 11197191
    }
  },
  {
    "word": "标签贴纸测评",
    "category": "标签贴纸",
    "platforms": {
      "jd": 5394870,
      "taobao": 6193209,
      "pdd": 5919375,
      "douyin": 24036044,
      "xhs": 2706534
    }
  },
  {
    "word": "标签贴纸平替",
    "category": "标签贴纸",
    "platforms": {
      "jd": 7754511,
      "taobao": 3959663,
      "pdd": 4813087,
      "douyin": 20741525,
      "xhs": 1944815
    }
  },
  {
    "word": "标签贴纸学生党",
    "category": "标签贴纸",
    "platforms": {
      "jd": 5287352,
      "taobao": 2964085,
      "pdd": 3415734,
      "douyin": 13517815,
      "xhs": 8135179
    }
  },
  {
    "word": "标签贴纸性价比",
    "category": "标签贴纸",
    "platforms": {
      "jd": 6752273,
      "taobao": 9379623,
      "pdd": 3793587,
      "douyin": 11024593,
      "xhs": 11818143
    }
  },
  {
    "word": "标签贴纸好物分享",
    "category": "标签贴纸",
    "platforms": {
      "jd": 4379369,
      "taobao": 6179020,
      "pdd": 5466715,
      "douyin": 9625808,
      "xhs": 5824953
    }
  },
  {
    "word": "手工DIY套装推荐",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 3126958,
      "taobao": 8055230,
      "pdd": 5312092,
      "douyin": 4638312,
      "xhs": 5629516
    }
  },
  {
    "word": "手工DIY套装测评",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 7257008,
      "taobao": 2859584,
      "pdd": 2195568,
      "douyin": 12528291,
      "xhs": 13925918
    }
  },
  {
    "word": "手工DIY套装平替",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 5605881,
      "taobao": 4719490,
      "pdd": 1146499,
      "douyin": 5867332,
      "xhs": 3807313
    }
  },
  {
    "word": "手工DIY套装学生党",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 5928595,
      "taobao": 5651959,
      "pdd": 4575963,
      "douyin": 12019379,
      "xhs": 7900199
    }
  },
  {
    "word": "手工DIY套装性价比",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 7401237,
      "taobao": 9324447,
      "pdd": 2744419,
      "douyin": 10075148,
      "xhs": 8472250
    }
  },
  {
    "word": "手工DIY套装好物分享",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 5991250,
      "taobao": 11523550,
      "pdd": 3648328,
      "douyin": 24924809,
      "xhs": 5006359
    }
  },
  {
    "word": "卷笔刀/卷笔器推荐",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 3135446,
      "taobao": 4688366,
      "pdd": 2903810,
      "douyin": 12144893,
      "xhs": 14061841
    }
  },
  {
    "word": "卷笔刀/卷笔器测评",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 1619146,
      "taobao": 10525959,
      "pdd": 3971760,
      "douyin": 23020538,
      "xhs": 11145303
    }
  },
  {
    "word": "卷笔刀/卷笔器平替",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 3457250,
      "taobao": 5479317,
      "pdd": 2979910,
      "douyin": 12993138,
      "xhs": 5669812
    }
  },
  {
    "word": "卷笔刀/卷笔器学生党",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 6569837,
      "taobao": 8339832,
      "pdd": 5736193,
      "douyin": 10520943,
      "xhs": 7665218
    }
  },
  {
    "word": "卷笔刀/卷笔器性价比",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 550201,
      "taobao": 9269272,
      "pdd": 1695252,
      "douyin": 9125703,
      "xhs": 5126357
    }
  },
  {
    "word": "卷笔刀/卷笔器好物分享",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 7603131,
      "taobao": 5868080,
      "pdd": 1829941,
      "douyin": 18223811,
      "xhs": 4187765
    }
  },
  {
    "word": "便签本/便条纸/N次贴推荐",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 3143934,
      "taobao": 1321502,
      "pdd": 5995528,
      "douyin": 19651474,
      "xhs": 8494166
    }
  },
  {
    "word": "便签本/便条纸/N次贴测评",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 3481284,
      "taobao": 7192333,
      "pdd": 5747953,
      "douyin": 11512786,
      "xhs": 8364687
    }
  },
  {
    "word": "便签本/便条纸/N次贴平替",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 1308619,
      "taobao": 6239143,
      "pdd": 4813322,
      "douyin": 20118944,
      "xhs": 7532310
    }
  },
  {
    "word": "便签本/便条纸/N次贴学生党",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 7211080,
      "taobao": 11027705,
      "pdd": 1396422,
      "douyin": 9022507,
      "xhs": 7430238
    }
  },
  {
    "word": "便签本/便条纸/N次贴性价比",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 1199166,
      "taobao": 9214096,
      "pdd": 646084,
      "douyin": 8176258,
      "xhs": 1780463
    }
  },
  {
    "word": "便签本/便条纸/N次贴好物分享",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 1715012,
      "taobao": 11212609,
      "pdd": 5511554,
      "douyin": 11522813,
      "xhs": 3369170
    }
  },
  {
    "word": "笔筒推荐",
    "category": "笔筒",
    "platforms": {
      "jd": 3152421,
      "taobao": 8954637,
      "pdd": 3587246,
      "douyin": 5158055,
      "xhs": 2926491
    }
  },
  {
    "word": "笔筒测评",
    "category": "笔筒",
    "platforms": {
      "jd": 5343422,
      "taobao": 3858708,
      "pdd": 2024145,
      "douyin": 22005033,
      "xhs": 5584072
    }
  },
  {
    "word": "笔筒平替",
    "category": "笔筒",
    "platforms": {
      "jd": 6659988,
      "taobao": 6998970,
      "pdd": 1146733,
      "douyin": 5244751,
      "xhs": 9394808
    }
  },
  {
    "word": "笔筒学生党",
    "category": "笔筒",
    "platforms": {
      "jd": 7852322,
      "taobao": 2715579,
      "pdd": 2556652,
      "douyin": 7524071,
      "xhs": 7195258
    }
  },
  {
    "word": "笔筒性价比",
    "category": "笔筒",
    "platforms": {
      "jd": 1848130,
      "taobao": 9158921,
      "pdd": 5096916,
      "douyin": 7226812,
      "xhs": 12434570
    }
  },
  {
    "word": "笔筒好物分享",
    "category": "笔筒",
    "platforms": {
      "jd": 3326893,
      "taobao": 5557139,
      "pdd": 3693167,
      "douyin": 4821814,
      "xhs": 2550576
    }
  },
  {
    "word": "文具收纳盒推荐",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 3160909,
      "taobao": 5587773,
      "pdd": 1178964,
      "douyin": 12664635,
      "xhs": 11358815
    }
  },
  {
    "word": "文具收纳盒测评",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 7205560,
      "taobao": 11525083,
      "pdd": 3800337,
      "douyin": 10497280,
      "xhs": 2803456
    }
  },
  {
    "word": "文具收纳盒平替",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 4511358,
      "taobao": 7758797,
      "pdd": 2980145,
      "douyin": 12370557,
      "xhs": 11257307
    }
  },
  {
    "word": "文具收纳盒学生党",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 993565,
      "taobao": 5403452,
      "pdd": 3716881,
      "douyin": 6025634,
      "xhs": 6960277
    }
  },
  {
    "word": "文具收纳盒性价比",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 2497095,
      "taobao": 9103745,
      "pdd": 4047749,
      "douyin": 6277367,
      "xhs": 9088677
    }
  },
  {
    "word": "文具收纳盒好物分享",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 4938774,
      "taobao": 10901669,
      "pdd": 1874780,
      "douyin": 20120816,
      "xhs": 1731982
    }
  },
  {
    "word": "桌面收纳架推荐",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 3169396,
      "taobao": 2220909,
      "pdd": 4270682,
      "douyin": 20171216,
      "xhs": 5791140
    }
  },
  {
    "word": "桌面收纳架测评",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 1567698,
      "taobao": 8191458,
      "pdd": 5576530,
      "douyin": 20989527,
      "xhs": 14022841
    }
  },
  {
    "word": "桌面收纳架平替",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 2362727,
      "taobao": 8518624,
      "pdd": 4813556,
      "douyin": 19496364,
      "xhs": 13119805
    }
  },
  {
    "word": "桌面收纳架学生党",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 1634808,
      "taobao": 8091325,
      "pdd": 4877111,
      "douyin": 4527198,
      "xhs": 6725297
    }
  },
  {
    "word": "桌面收纳架性价比",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 3146059,
      "taobao": 9048570,
      "pdd": 2998581,
      "douyin": 5327922,
      "xhs": 5742784
    }
  },
  {
    "word": "桌面收纳架好物分享",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 6550655,
      "taobao": 5246198,
      "pdd": 5556393,
      "douyin": 13419817,
      "xhs": 14913388
    }
  },
  {
    "word": "错题打印机推荐",
    "category": "错题打印机",
    "platforms": {
      "jd": 3177884,
      "taobao": 9854044,
      "pdd": 1862400,
      "douyin": 5677797,
      "xhs": 14223465
    }
  },
  {
    "word": "错题打印机测评",
    "category": "错题打印机",
    "platforms": {
      "jd": 3429836,
      "taobao": 4857833,
      "pdd": 1852722,
      "douyin": 9481774,
      "xhs": 11242225
    }
  },
  {
    "word": "错题打印机平替",
    "category": "错题打印机",
    "platforms": {
      "jd": 7714096,
      "taobao": 9278450,
      "pdd": 1146968,
      "douyin": 4622170,
      "xhs": 14982304
    }
  },
  {
    "word": "错题打印机学生党",
    "category": "错题打印机",
    "platforms": {
      "jd": 2276050,
      "taobao": 10779199,
      "pdd": 537341,
      "douyin": 3028762,
      "xhs": 6490316
    }
  },
  {
    "word": "错题打印机性价比",
    "category": "错题打印机",
    "platforms": {
      "jd": 3795023,
      "taobao": 8993394,
      "pdd": 1949414,
      "douyin": 4378477,
      "xhs": 2396890
    }
  },
  {
    "word": "错题打印机好物分享",
    "category": "错题打印机",
    "platforms": {
      "jd": 662536,
      "taobao": 10590728,
      "pdd": 3738006,
      "douyin": 6718819,
      "xhs": 14094794
    }
  },
  {
    "word": "护眼台灯推荐",
    "category": "护眼台灯",
    "platforms": {
      "jd": 3186371,
      "taobao": 6487180,
      "pdd": 4954118,
      "douyin": 13184377,
      "xhs": 8655790
    }
  },
  {
    "word": "护眼台灯测评",
    "category": "护眼台灯",
    "platforms": {
      "jd": 5291974,
      "taobao": 1524208,
      "pdd": 3628915,
      "douyin": 19974021,
      "xhs": 8461610
    }
  },
  {
    "word": "护眼台灯平替",
    "category": "护眼台灯",
    "platforms": {
      "jd": 5565466,
      "taobao": 10038277,
      "pdd": 2980379,
      "douyin": 11747977,
      "xhs": 2844802
    }
  },
  {
    "word": "护眼台灯学生党",
    "category": "护眼台灯",
    "platforms": {
      "jd": 2917293,
      "taobao": 2467072,
      "pdd": 1697570,
      "douyin": 23530326,
      "xhs": 6255336
    }
  },
  {
    "word": "护眼台灯性价比",
    "category": "护眼台灯",
    "platforms": {
      "jd": 4443988,
      "taobao": 8938219,
      "pdd": 900246,
      "douyin": 3429032,
      "xhs": 13050997
    }
  },
  {
    "word": "护眼台灯好物分享",
    "category": "护眼台灯",
    "platforms": {
      "jd": 2274417,
      "taobao": 4935258,
      "pdd": 1919618,
      "douyin": 22017821,
      "xhs": 13276199
    }
  },
  {
    "word": "书皮/书套推荐",
    "category": "书皮/书套",
    "platforms": {
      "jd": 3194859,
      "taobao": 3120316,
      "pdd": 2545836,
      "douyin": 20690958,
      "xhs": 3088115
    }
  },
  {
    "word": "书皮/书套测评",
    "category": "书皮/书套",
    "platforms": {
      "jd": 7154112,
      "taobao": 9190582,
      "pdd": 5405107,
      "douyin": 8466268,
      "xhs": 5680994
    }
  },
  {
    "word": "书皮/书套平替",
    "category": "书皮/书套",
    "platforms": {
      "jd": 3416835,
      "taobao": 10798104,
      "pdd": 4813791,
      "douyin": 18873783,
      "xhs": 4707301
    }
  },
  {
    "word": "书皮/书套学生党",
    "category": "书皮/书套",
    "platforms": {
      "jd": 3558535,
      "taobao": 5154945,
      "pdd": 2857800,
      "douyin": 22031890,
      "xhs": 6020356
    }
  },
  {
    "word": "书皮/书套性价比",
    "category": "书皮/书套",
    "platforms": {
      "jd": 5092952,
      "taobao": 8883043,
      "pdd": 5351078,
      "douyin": 24479586,
      "xhs": 9705104
    }
  },
  {
    "word": "书皮/书套好物分享",
    "category": "书皮/书套",
    "platforms": {
      "jd": 3886298,
      "taobao": 10279788,
      "pdd": 5601231,
      "douyin": 15316822,
      "xhs": 12457605
    }
  },
  {
    "word": "美术颜料推荐",
    "category": "美术颜料",
    "platforms": {
      "jd": 3203346,
      "taobao": 10753451,
      "pdd": 5637554,
      "douyin": 6197539,
      "xhs": 11520440
    }
  },
  {
    "word": "美术颜料测评",
    "category": "美术颜料",
    "platforms": {
      "jd": 1516250,
      "taobao": 5856957,
      "pdd": 1681299,
      "douyin": 18958515,
      "xhs": 2900379
    }
  },
  {
    "word": "美术颜料平替",
    "category": "美术颜料",
    "platforms": {
      "jd": 1268204,
      "taobao": 11557931,
      "pdd": 1147202,
      "douyin": 3999589,
      "xhs": 6569799
    }
  },
  {
    "word": "美术颜料学生党",
    "category": "美术颜料",
    "platforms": {
      "jd": 4199778,
      "taobao": 7842818,
      "pdd": 4018029,
      "douyin": 20533454,
      "xhs": 5785375
    }
  },
  {
    "word": "美术颜料性价比",
    "category": "美术颜料",
    "platforms": {
      "jd": 5741917,
      "taobao": 8827867,
      "pdd": 4301911,
      "douyin": 23530141,
      "xhs": 6359211
    }
  },
  {
    "word": "美术颜料好物分享",
    "category": "美术颜料",
    "platforms": {
      "jd": 5498179,
      "taobao": 4624317,
      "pdd": 3782844,
      "douyin": 8615824,
      "xhs": 11639011
    }
  },
  {
    "word": "办公文具推荐",
    "category": "办公文具",
    "platforms": {
      "jd": 3211834,
      "taobao": 7386587,
      "pdd": 3229272,
      "douyin": 13704120,
      "xhs": 5952764
    }
  },
  {
    "word": "办公文具测评",
    "category": "办公文具",
    "platforms": {
      "jd": 3378388,
      "taobao": 2523332,
      "pdd": 3457492,
      "douyin": 7450762,
      "xhs": 14119763
    }
  },
  {
    "word": "办公文具平替",
    "category": "办公文具",
    "platforms": {
      "jd": 6619574,
      "taobao": 1317758,
      "pdd": 2980614,
      "douyin": 11125396,
      "xhs": 8432297
    }
  },
  {
    "word": "办公文具学生党",
    "category": "办公文具",
    "platforms": {
      "jd": 4841021,
      "taobao": 10530692,
      "pdd": 5178259,
      "douyin": 19035018,
      "xhs": 5550395
    }
  },
  {
    "word": "办公文具性价比",
    "category": "办公文具",
    "platforms": {
      "jd": 6390881,
      "taobao": 8772692,
      "pdd": 3252743,
      "douyin": 22580696,
      "xhs": 3013317
    }
  },
  {
    "word": "办公文具好物分享",
    "category": "办公文具",
    "platforms": {
      "jd": 7110060,
      "taobao": 9968847,
      "pdd": 1964457,
      "douyin": 23914826,
      "xhs": 10820417
    }
  },
  {
    "word": "笔类套装/礼盒推荐",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 3220321,
      "taobao": 4019723,
      "pdd": 820990,
      "douyin": 21210700,
      "xhs": 14385089
    }
  },
  {
    "word": "笔类套装/礼盒测评",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 5240526,
      "taobao": 10189707,
      "pdd": 5233684,
      "douyin": 17943010,
      "xhs": 11339148
    }
  },
  {
    "word": "笔类套装/礼盒平替",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 4470943,
      "taobao": 2077584,
      "pdd": 4814025,
      "douyin": 18251202,
      "xhs": 10294796
    }
  },
  {
    "word": "笔类套装/礼盒学生党",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 5482263,
      "taobao": 2218565,
      "pdd": 838488,
      "douyin": 17536582,
      "xhs": 5315414
    }
  },
  {
    "word": "笔类套装/礼盒性价比",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 7039845,
      "taobao": 8717516,
      "pdd": 2203575,
      "douyin": 21631251,
      "xhs": 13667424
    }
  },
  {
    "word": "笔类套装/礼盒好物分享",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 1221940,
      "taobao": 4313377,
      "pdd": 5646070,
      "douyin": 17213827,
      "xhs": 10001823
    }
  },
  {
    "word": "文创用品推荐",
    "category": "文创用品",
    "platforms": {
      "jd": 3228809,
      "taobao": 11652858,
      "pdd": 3912708,
      "douyin": 6717281,
      "xhs": 8817414
    }
  },
  {
    "word": "文创用品测评",
    "category": "文创用品",
    "platforms": {
      "jd": 7102664,
      "taobao": 6856082,
      "pdd": 1509876,
      "douyin": 6435257,
      "xhs": 8558532
    }
  },
  {
    "word": "文创用品平替",
    "category": "文创用品",
    "platforms": {
      "jd": 2322312,
      "taobao": 2837411,
      "pdd": 1147437,
      "douyin": 3377009,
      "xhs": 12157294
    }
  },
  {
    "word": "文创用品学生党",
    "category": "文创用品",
    "platforms": {
      "jd": 6123506,
      "taobao": 4906438,
      "pdd": 1998718,
      "douyin": 16038146,
      "xhs": 5080434
    }
  },
  {
    "word": "文创用品性价比",
    "category": "文创用品",
    "platforms": {
      "jd": 7688810,
      "taobao": 8662341,
      "pdd": 1154408,
      "douyin": 20681806,
      "xhs": 10321531
    }
  },
  {
    "word": "文创用品好物分享",
    "category": "文创用品",
    "platforms": {
      "jd": 2833821,
      "taobao": 9657907,
      "pdd": 3827683,
      "douyin": 10512829,
      "xhs": 9183228
    }
  },
  {
    "word": "姓名贴推荐",
    "category": "姓名贴",
    "platforms": {
      "jd": 3237296,
      "taobao": 8285994,
      "pdd": 1504426,
      "douyin": 14223862,
      "xhs": 3249739
    }
  },
  {
    "word": "姓名贴测评",
    "category": "姓名贴",
    "platforms": {
      "jd": 1464802,
      "taobao": 3522457,
      "pdd": 3286069,
      "douyin": 16927504,
      "xhs": 5777917
    }
  },
  {
    "word": "姓名贴平替",
    "category": "姓名贴",
    "platforms": {
      "jd": 7673682,
      "taobao": 3597238,
      "pdd": 2980848,
      "douyin": 10502815,
      "xhs": 14019793
    }
  },
  {
    "word": "姓名贴学生党",
    "category": "姓名贴",
    "platforms": {
      "jd": 6764748,
      "taobao": 7594312,
      "pdd": 3158948,
      "douyin": 14539709,
      "xhs": 4845453
    }
  },
  {
    "word": "姓名贴性价比",
    "category": "姓名贴",
    "platforms": {
      "jd": 837774,
      "taobao": 8607165,
      "pdd": 5605240,
      "douyin": 19732360,
      "xhs": 6975638
    }
  },
  {
    "word": "姓名贴好物分享",
    "category": "姓名贴",
    "platforms": {
      "jd": 4445702,
      "taobao": 4002436,
      "pdd": 2009296,
      "douyin": 3811831,
      "xhs": 8364634
    }
  },
  {
    "word": "电动橡皮擦推荐",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 3245784,
      "taobao": 4919130,
      "pdd": 4596144,
      "douyin": 21730442,
      "xhs": 11682064
    }
  },
  {
    "word": "电动橡皮擦测评",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 3326940,
      "taobao": 11188831,
      "pdd": 5062261,
      "douyin": 5419751,
      "xhs": 2997301
    }
  },
  {
    "word": "电动橡皮擦平替",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 5525051,
      "taobao": 4357065,
      "pdd": 4814260,
      "douyin": 17628621,
      "xhs": 1882291
    }
  },
  {
    "word": "电动橡皮擦学生党",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 7405991,
      "taobao": 10282185,
      "pdd": 4319177,
      "douyin": 13041273,
      "xhs": 4610473
    }
  },
  {
    "word": "电动橡皮擦性价比",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 1486738,
      "taobao": 8551990,
      "pdd": 4556073,
      "douyin": 18782915,
      "xhs": 3629744
    }
  },
  {
    "word": "电动橡皮擦好物分享",
    "category": "电动橡皮擦",
    "platforms": {
      "jd": 6057583,
      "taobao": 9346966,
      "pdd": 5690909,
      "douyin": 19110832,
      "xhs": 7546040
    }
  },
  {
    "word": "拼豆/咕卡套装推荐",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 3254271,
      "taobao": 1552266,
      "pdd": 2187862,
      "douyin": 7237023,
      "xhs": 6114388
    }
  },
  {
    "word": "拼豆/咕卡套装测评",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 5189078,
      "taobao": 7855206,
      "pdd": 1338454,
      "douyin": 15911998,
      "xhs": 14216686
    }
  },
  {
    "word": "拼豆/咕卡套装平替",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 3376420,
      "taobao": 5116891,
      "pdd": 1147671,
      "douyin": 24754428,
      "xhs": 3744790
    }
  },
  {
    "word": "拼豆/咕卡套装学生党",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 547234,
      "taobao": 1970058,
      "pdd": 5479407,
      "douyin": 11542837,
      "xhs": 4375493
    }
  },
  {
    "word": "拼豆/咕卡套装性价比",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 2135703,
      "taobao": 8496814,
      "pdd": 3506905,
      "douyin": 17833470,
      "xhs": 14283851
    }
  },
  {
    "word": "拼豆/咕卡套装好物分享",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 7669464,
      "taobao": 3691496,
      "pdd": 3872522,
      "douyin": 12409834,
      "xhs": 6727446
    }
  },
  {
    "word": "彩色铅笔推荐",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 3262759,
      "taobao": 9185401,
      "pdd": 5279580,
      "douyin": 14743604,
      "xhs": 14546713
    }
  },
  {
    "word": "彩色铅笔测评",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 7051216,
      "taobao": 4521581,
      "pdd": 3114646,
      "douyin": 4404245,
      "xhs": 11436070
    }
  },
  {
    "word": "彩色铅笔平替",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 1227790,
      "taobao": 5876718,
      "pdd": 2981083,
      "douyin": 9880234,
      "xhs": 5607288
    }
  },
  {
    "word": "彩色铅笔学生党",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 1188476,
      "taobao": 4657932,
      "pdd": 1139636,
      "douyin": 10044401,
      "xhs": 4140512
    }
  },
  {
    "word": "彩色铅笔性价比",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 2784667,
      "taobao": 8441638,
      "pdd": 2457737,
      "douyin": 16884025,
      "xhs": 10937958
    }
  },
  {
    "word": "彩色铅笔好物分享",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 1781345,
      "taobao": 9036026,
      "pdd": 2054135,
      "douyin": 5708836,
      "xhs": 5908852
    }
  },
  {
    "word": "白板笔推荐",
    "category": "白板笔",
    "platforms": {
      "jd": 3271246,
      "taobao": 5818537,
      "pdd": 2871298,
      "douyin": 22250184,
      "xhs": 8979038
    }
  },
  {
    "word": "白板笔测评",
    "category": "白板笔",
    "platforms": {
      "jd": 1413354,
      "taobao": 1187956,
      "pdd": 4890838,
      "douyin": 14896492,
      "xhs": 8655455
    }
  },
  {
    "word": "白板笔平替",
    "category": "白板笔",
    "platforms": {
      "jd": 6579159,
      "taobao": 6636545,
      "pdd": 4814494,
      "douyin": 17006041,
      "xhs": 7469786
    }
  },
  {
    "word": "白板笔学生党",
    "category": "白板笔",
    "platforms": {
      "jd": 1829719,
      "taobao": 7345805,
      "pdd": 2299866,
      "douyin": 8545965,
      "xhs": 3905532
    }
  },
  {
    "word": "白板笔性价比",
    "category": "白板笔",
    "platforms": {
      "jd": 3433632,
      "taobao": 8386463,
      "pdd": 1408570,
      "douyin": 15934580,
      "xhs": 7592064
    }
  },
  {
    "word": "白板笔好物分享",
    "category": "白板笔",
    "platforms": {
      "jd": 3393226,
      "taobao": 3380555,
      "pdd": 5735748,
      "douyin": 21007837,
      "xhs": 5090257
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋推荐",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 3279734,
      "taobao": 2451673,
      "pdd": 5963016,
      "douyin": 7756765,
      "xhs": 3411363
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋测评",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 3275492,
      "taobao": 8854331,
      "pdd": 1167031,
      "douyin": 3388739,
      "xhs": 5874839
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋平替",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 4430528,
      "taobao": 7396372,
      "pdd": 1147906,
      "douyin": 24131847,
      "xhs": 9332285
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋学生党",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 2470961,
      "taobao": 10033678,
      "pdd": 3460095,
      "douyin": 7047529,
      "xhs": 3670551
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋性价比",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 4082596,
      "taobao": 8331287,
      "pdd": 5859402,
      "douyin": 14985134,
      "xhs": 4246171
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋好物分享",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 5005107,
      "taobao": 8725085,
      "pdd": 3917361,
      "douyin": 14306839,
      "xhs": 4271663
    }
  },
  {
    "word": "修正带推荐",
    "category": "修正带",
    "platforms": {
      "jd": 3288222,
      "taobao": 10084808,
      "pdd": 3554733,
      "douyin": 15263346,
      "xhs": 11843688
    }
  },
  {
    "word": "修正带测评",
    "category": "修正带",
    "platforms": {
      "jd": 5137630,
      "taobao": 5520705,
      "pdd": 2943223,
      "douyin": 13880987,
      "xhs": 3094224
    }
  },
  {
    "word": "修正带平替",
    "category": "修正带",
    "platforms": {
      "jd": 2281898,
      "taobao": 8156199,
      "pdd": 2981317,
      "douyin": 9257654,
      "xhs": 11194783
    }
  },
  {
    "word": "修正带学生党",
    "category": "修正带",
    "platforms": {
      "jd": 3112204,
      "taobao": 1721552,
      "pdd": 4620325,
      "douyin": 5549093,
      "xhs": 3435571
    }
  },
  {
    "word": "修正带性价比",
    "category": "修正带",
    "platforms": {
      "jd": 4731560,
      "taobao": 8276112,
      "pdd": 4810234,
      "douyin": 14035689,
      "xhs": 14900278
    }
  },
  {
    "word": "修正带好物分享",
    "category": "修正带",
    "platforms": {
      "jd": 6616988,
      "taobao": 3069615,
      "pdd": 2098974,
      "douyin": 7605841,
      "xhs": 3453069
    }
  },
  {
    "word": "钢笔推荐",
    "category": "钢笔",
    "platforms": {
      "jd": 3296709,
      "taobao": 6717944,
      "pdd": 1146451,
      "douyin": 22769927,
      "xhs": 6276013
    }
  },
  {
    "word": "钢笔测评",
    "category": "钢笔",
    "platforms": {
      "jd": 6999768,
      "taobao": 2187080,
      "pdd": 4719415,
      "douyin": 24373234,
      "xhs": 14313608
    }
  },
  {
    "word": "钢笔平替",
    "category": "钢笔",
    "platforms": {
      "jd": 7633267,
      "taobao": 8916025,
      "pdd": 4814729,
      "douyin": 16383460,
      "xhs": 13057282
    }
  },
  {
    "word": "钢笔学生党",
    "category": "钢笔",
    "platforms": {
      "jd": 3753447,
      "taobao": 4409425,
      "pdd": 5780554,
      "douyin": 4050657,
      "xhs": 3200590
    }
  },
  {
    "word": "钢笔性价比",
    "category": "钢笔",
    "platforms": {
      "jd": 5380525,
      "taobao": 8220936,
      "pdd": 3761067,
      "douyin": 13086244,
      "xhs": 11554385
    }
  },
  {
    "word": "钢笔好物分享",
    "category": "钢笔",
    "platforms": {
      "jd": 728869,
      "taobao": 8414145,
      "pdd": 5780587,
      "douyin": 22904842,
      "xhs": 2634475
    }
  },
  {
    "word": "画纸/画本推荐",
    "category": "画纸/画本",
    "platforms": {
      "jd": 3305197,
      "taobao": 3351080,
      "pdd": 4238169,
      "douyin": 8276507,
      "xhs": 14708337
    }
  },
  {
    "word": "画纸/画本测评",
    "category": "画纸/画本",
    "platforms": {
      "jd": 1361906,
      "taobao": 9853455,
      "pdd": 995608,
      "douyin": 12865481,
      "xhs": 11532993
    }
  },
  {
    "word": "画纸/画本平替",
    "category": "画纸/画本",
    "platforms": {
      "jd": 5484636,
      "taobao": 9675852,
      "pdd": 1148140,
      "douyin": 23509266,
      "xhs": 14919780
    }
  },
  {
    "word": "画纸/画本学生党",
    "category": "画纸/画本",
    "platforms": {
      "jd": 4394689,
      "taobao": 7097298,
      "pdd": 1440784,
      "douyin": 24552221,
      "xhs": 2965610
    }
  },
  {
    "word": "画纸/画本性价比",
    "category": "画纸/画本",
    "platforms": {
      "jd": 6029489,
      "taobao": 8165761,
      "pdd": 2711899,
      "douyin": 12136799,
      "xhs": 8208491
    }
  },
  {
    "word": "画纸/画本好物分享",
    "category": "画纸/画本",
    "platforms": {
      "jd": 2340750,
      "taobao": 2758674,
      "pdd": 3962200,
      "douyin": 16203844,
      "xhs": 1815880
    }
  },
  {
    "word": "胶水推荐",
    "category": "胶水",
    "platforms": {
      "jd": 3313684,
      "taobao": 10984215,
      "pdd": 1829887,
      "douyin": 15783088,
      "xhs": 9140662
    }
  },
  {
    "word": "胶水测评",
    "category": "胶水",
    "platforms": {
      "jd": 3224044,
      "taobao": 6519830,
      "pdd": 2771800,
      "douyin": 23357728,
      "xhs": 8752377
    }
  },
  {
    "word": "胶水平替",
    "category": "胶水",
    "platforms": {
      "jd": 3336006,
      "taobao": 10435679,
      "pdd": 2981552,
      "douyin": 8635073,
      "xhs": 2782279
    }
  },
  {
    "word": "胶水学生党",
    "category": "胶水",
    "platforms": {
      "jd": 5035932,
      "taobao": 9785172,
      "pdd": 2601014,
      "douyin": 23053784,
      "xhs": 2730630
    }
  },
  {
    "word": "胶水性价比",
    "category": "胶水",
    "platforms": {
      "jd": 6678454,
      "taobao": 8110585,
      "pdd": 1662732,
      "douyin": 11187354,
      "xhs": 4862598
    }
  },
  {
    "word": "胶水好物分享",
    "category": "胶水",
    "platforms": {
      "jd": 3952631,
      "taobao": 8103204,
      "pdd": 2143813,
      "douyin": 9502845,
      "xhs": 14997286
    }
  },
  {
    "word": "笔芯/替芯/笔壳推荐",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 3322172,
      "taobao": 7617351,
      "pdd": 4921605,
      "douyin": 23289669,
      "xhs": 3572987
    }
  },
  {
    "word": "笔芯/替芯/笔壳测评",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5086182,
      "taobao": 3186205,
      "pdd": 4547993,
      "douyin": 11849975,
      "xhs": 5971762
    }
  },
  {
    "word": "笔芯/替芯/笔壳平替",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 1187375,
      "taobao": 11195506,
      "pdd": 4814963,
      "douyin": 15760879,
      "xhs": 4644777
    }
  },
  {
    "word": "笔芯/替芯/笔壳学生党",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5677174,
      "taobao": 1473045,
      "pdd": 3761243,
      "douyin": 21555348,
      "xhs": 2495649
    }
  },
  {
    "word": "笔芯/替芯/笔壳性价比",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 7327418,
      "taobao": 8055410,
      "pdd": 613564,
      "douyin": 10237908,
      "xhs": 1516705
    }
  },
  {
    "word": "笔芯/替芯/笔壳好物分享",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5564512,
      "taobao": 2447734,
      "pdd": 5825426,
      "douyin": 24801847,
      "xhs": 14178692
    }
  },
  {
    "word": "记号笔推荐",
    "category": "记号笔",
    "platforms": {
      "jd": 3330659,
      "taobao": 4250487,
      "pdd": 2513323,
      "douyin": 8796249,
      "xhs": 12005312
    }
  },
  {
    "word": "记号笔测评",
    "category": "记号笔",
    "platforms": {
      "jd": 6948320,
      "taobao": 10852580,
      "pdd": 824185,
      "douyin": 22342222,
      "xhs": 3191146
    }
  },
  {
    "word": "记号笔平替",
    "category": "记号笔",
    "platforms": {
      "jd": 6538744,
      "taobao": 11955332,
      "pdd": 1148375,
      "douyin": 22886686,
      "xhs": 6507275
    }
  },
  {
    "word": "记号笔学生党",
    "category": "记号笔",
    "platforms": {
      "jd": 6318417,
      "taobao": 4160918,
      "pdd": 4921473,
      "douyin": 20056912,
      "xhs": 2260669
    }
  },
  {
    "word": "记号笔性价比",
    "category": "记号笔",
    "platforms": {
      "jd": 7976382,
      "taobao": 8000234,
      "pdd": 5064396,
      "douyin": 9288463,
      "xhs": 12170812
    }
  },
  {
    "word": "记号笔好物分享",
    "category": "记号笔",
    "platforms": {
      "jd": 7176393,
      "taobao": 7792264,
      "pdd": 4007039,
      "douyin": 18100849,
      "xhs": 13360098
    }
  },
  {
    "word": "练字帖/描红本推荐",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 3339147,
      "taobao": 11883622,
      "pdd": 5605041,
      "douyin": 16302830,
      "xhs": 6437637
    }
  },
  {
    "word": "练字帖/描红本测评",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 1310458,
      "taobao": 7518954,
      "pdd": 2600377,
      "douyin": 10834469,
      "xhs": 14410531
    }
  },
  {
    "word": "练字帖/描红本平替",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 4390114,
      "taobao": 1715159,
      "pdd": 2981786,
      "douyin": 8012492,
      "xhs": 8369774
    }
  },
  {
    "word": "练字帖/描红本学生党",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 6959659,
      "taobao": 6848791,
      "pdd": 581702,
      "douyin": 18558476,
      "xhs": 2025688
    }
  },
  {
    "word": "练字帖/描红本性价比",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 1125347,
      "taobao": 7945058,
      "pdd": 4015229,
      "douyin": 8339018,
      "xhs": 8824918
    }
  },
  {
    "word": "练字帖/描红本好物分享",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 1288274,
      "taobao": 2136793,
      "pdd": 2188652,
      "douyin": 11399850,
      "xhs": 12541504
    }
  },
  {
    "word": "圆珠笔推荐",
    "category": "圆珠笔",
    "platforms": {
      "jd": 3347634,
      "taobao": 8516758,
      "pdd": 3196759,
      "douyin": 23809411,
      "xhs": 14869962
    }
  },
  {
    "word": "圆珠笔测评",
    "category": "圆珠笔",
    "platforms": {
      "jd": 3172596,
      "taobao": 4185329,
      "pdd": 4376570,
      "douyin": 21326716,
      "xhs": 11629915
    }
  },
  {
    "word": "圆珠笔平替",
    "category": "圆珠笔",
    "platforms": {
      "jd": 2241483,
      "taobao": 2474986,
      "pdd": 4815198,
      "douyin": 15138299,
      "xhs": 10232272
    }
  },
  {
    "word": "圆珠笔学生党",
    "category": "圆珠笔",
    "platforms": {
      "jd": 7600902,
      "taobao": 9536665,
      "pdd": 1741932,
      "douyin": 17060040,
      "xhs": 1790708
    }
  },
  {
    "word": "圆珠笔性价比",
    "category": "圆珠笔",
    "platforms": {
      "jd": 1774311,
      "taobao": 7889883,
      "pdd": 2966061,
      "douyin": 7389573,
      "xhs": 5479025
    }
  },
  {
    "word": "圆珠笔好物分享",
    "category": "圆珠笔",
    "platforms": {
      "jd": 2900155,
      "taobao": 7481323,
      "pdd": 5870265,
      "douyin": 4698852,
      "xhs": 11722909
    }
  },
  {
    "word": "蜡笔推荐",
    "category": "蜡笔",
    "platforms": {
      "jd": 3356122,
      "taobao": 5149894,
      "pdd": 788477,
      "douyin": 9315992,
      "xhs": 9302286
    }
  },
  {
    "word": "蜡笔测评",
    "category": "蜡笔",
    "platforms": {
      "jd": 5034734,
      "taobao": 11851704,
      "pdd": 652762,
      "douyin": 9818963,
      "xhs": 8849300
    }
  },
  {
    "word": "蜡笔平替",
    "category": "蜡笔",
    "platforms": {
      "jd": 7592852,
      "taobao": 3234813,
      "pdd": 1148609,
      "douyin": 22264105,
      "xhs": 12094771
    }
  },
  {
    "word": "蜡笔学生党",
    "category": "蜡笔",
    "platforms": {
      "jd": 742145,
      "taobao": 1224538,
      "pdd": 2902161,
      "douyin": 15561604,
      "xhs": 1555727
    }
  },
  {
    "word": "蜡笔性价比",
    "category": "蜡笔",
    "platforms": {
      "jd": 2423276,
      "taobao": 7834707,
      "pdd": 1916893,
      "douyin": 6440128,
      "xhs": 2133132
    }
  },
  {
    "word": "蜡笔好物分享",
    "category": "蜡笔",
    "platforms": {
      "jd": 4512036,
      "taobao": 1825853,
      "pdd": 4051878,
      "douyin": 19997854,
      "xhs": 10904315
    }
  },
  {
    "word": "书签推荐",
    "category": "书签",
    "platforms": {
      "jd": 3364609,
      "taobao": 1783029,
      "pdd": 3880195,
      "douyin": 16822572,
      "xhs": 3734611
    }
  },
  {
    "word": "书签测评",
    "category": "书签",
    "platforms": {
      "jd": 6896872,
      "taobao": 8518079,
      "pdd": 2428955,
      "douyin": 20311211,
      "xhs": 6068684
    }
  },
  {
    "word": "书签平替",
    "category": "书签",
    "platforms": {
      "jd": 5444221,
      "taobao": 3994640,
      "pdd": 2982021,
      "douyin": 7389911,
      "xhs": 13957269
    }
  },
  {
    "word": "书签学生党",
    "category": "书签",
    "platforms": {
      "jd": 1383387,
      "taobao": 3912411,
      "pdd": 4062391,
      "douyin": 14063168,
      "xhs": 1320747
    }
  },
  {
    "word": "书签性价比",
    "category": "书签",
    "platforms": {
      "jd": 3072240,
      "taobao": 7779532,
      "pdd": 867726,
      "douyin": 5490683,
      "xhs": 12787239
    }
  },
  {
    "word": "书签好物分享",
    "category": "书签",
    "platforms": {
      "jd": 6123917,
      "taobao": 7170382,
      "pdd": 2233491,
      "douyin": 13296855,
      "xhs": 10085721
    }
  },
  {
    "word": "桌面吸尘器推荐",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 3373097,
      "taobao": 9416165,
      "pdd": 1471913,
      "douyin": 24329153,
      "xhs": 12166936
    }
  },
  {
    "word": "桌面吸尘器测评",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 1259010,
      "taobao": 5184454,
      "pdd": 4205147,
      "douyin": 8803458,
      "xhs": 3288069
    }
  },
  {
    "word": "桌面吸尘器平替",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 3295591,
      "taobao": 4754466,
      "pdd": 4815432,
      "douyin": 14515718,
      "xhs": 1819768
    }
  },
  {
    "word": "桌面吸尘器学生党",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 2024630,
      "taobao": 6600285,
      "pdd": 5222621,
      "douyin": 12564732,
      "xhs": 1085767
    }
  },
  {
    "word": "桌面吸尘器性价比",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 3721204,
      "taobao": 7724356,
      "pdd": 5318558,
      "douyin": 4541237,
      "xhs": 9441345
    }
  },
  {
    "word": "桌面吸尘器好物分享",
    "category": "桌面吸尘器",
    "platforms": {
      "jd": 7735798,
      "taobao": 1514912,
      "pdd": 5915104,
      "douyin": 6595857,
      "xhs": 9267127
    }
  }
],
  trendProductData: [
  {
    "name": "百乐 大容量中性笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 6.4,
        "sales": 116112,
        "revenue": 743117
      },
      {
        "platform": "天猫",
        "avgPrice": 6.4,
        "sales": 25702,
        "revenue": 164493
      },
      {
        "platform": "京东",
        "avgPrice": 7.4,
        "sales": 33154,
        "revenue": 245340
      },
      {
        "platform": "抖音",
        "avgPrice": 6.4,
        "sales": 209045,
        "revenue": 1337888
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.5,
        "sales": 245002,
        "revenue": 1102509
      }
    ]
  },
  {
    "name": "斑马 可擦中性笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 2.6,
        "sales": 105850,
        "revenue": 275210
      },
      {
        "platform": "天猫",
        "avgPrice": 2.6,
        "sales": 81545,
        "revenue": 212017
      },
      {
        "platform": "京东",
        "avgPrice": 3,
        "sales": 130124,
        "revenue": 390372
      },
      {
        "platform": "抖音",
        "avgPrice": 2.6,
        "sales": 212626,
        "revenue": 552828
      },
      {
        "platform": "拼多多",
        "avgPrice": 1.8,
        "sales": 229736,
        "revenue": 413525
      }
    ]
  },
  {
    "name": "晨光 直液式走珠笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.6,
        "sales": 139558,
        "revenue": 502409
      },
      {
        "platform": "天猫",
        "avgPrice": 3.6,
        "sales": 77062,
        "revenue": 277423
      },
      {
        "platform": "京东",
        "avgPrice": 4.1,
        "sales": 109908,
        "revenue": 450623
      },
      {
        "platform": "抖音",
        "avgPrice": 3.6,
        "sales": 17921,
        "revenue": 64516
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.5,
        "sales": 167275,
        "revenue": 418188
      }
    ]
  },
  {
    "name": "得力 子弹头中性笔 0.38mm",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.6,
        "sales": 74884,
        "revenue": 344466
      },
      {
        "platform": "天猫",
        "avgPrice": 4.6,
        "sales": 154470,
        "revenue": 710562
      },
      {
        "platform": "京东",
        "avgPrice": 5.3,
        "sales": 179672,
        "revenue": 952262
      },
      {
        "platform": "抖音",
        "avgPrice": 4.6,
        "sales": 144906,
        "revenue": 666568
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.2,
        "sales": 156836,
        "revenue": 501875
      }
    ]
  },
  {
    "name": "得力 中性笔套装 12支",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4,
        "sales": 113306,
        "revenue": 453224
      },
      {
        "platform": "天猫",
        "avgPrice": 4,
        "sales": 234958,
        "revenue": 939832
      },
      {
        "platform": "京东",
        "avgPrice": 4.6,
        "sales": 70323,
        "revenue": 323486
      },
      {
        "platform": "抖音",
        "avgPrice": 4,
        "sales": 231395,
        "revenue": 925580
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.8,
        "sales": 238237,
        "revenue": 667064
      }
    ]
  },
  {
    "name": "百乐 商务签字笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.5,
        "sales": 20959,
        "revenue": 157193
      },
      {
        "platform": "天猫",
        "avgPrice": 7.5,
        "sales": 74974,
        "revenue": 562305
      },
      {
        "platform": "京东",
        "avgPrice": 8.6,
        "sales": 142148,
        "revenue": 1222473
      },
      {
        "platform": "抖音",
        "avgPrice": 7.5,
        "sales": 133019,
        "revenue": 997643
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.3,
        "sales": 238778,
        "revenue": 1265523
      }
    ]
  },
  {
    "name": "kinbor 方格本 网格",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37.2,
        "sales": 87581,
        "revenue": 3258013
      },
      {
        "platform": "天猫",
        "avgPrice": 37.2,
        "sales": 80154,
        "revenue": 2981729
      },
      {
        "platform": "京东",
        "avgPrice": 42.8,
        "sales": 53700,
        "revenue": 2298360
      },
      {
        "platform": "抖音",
        "avgPrice": 37.2,
        "sales": 48931,
        "revenue": 1820233
      },
      {
        "platform": "拼多多",
        "avgPrice": 26,
        "sales": 100101,
        "revenue": 2602626
      }
    ]
  },
  {
    "name": "晨光 加厚笔记本 200页",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14,
        "sales": 42549,
        "revenue": 595686
      },
      {
        "platform": "天猫",
        "avgPrice": 14,
        "sales": 140253,
        "revenue": 1963542
      },
      {
        "platform": "京东",
        "avgPrice": 16.1,
        "sales": 114074,
        "revenue": 1836591
      },
      {
        "platform": "抖音",
        "avgPrice": 14,
        "sales": 87547,
        "revenue": 1225658
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.8,
        "sales": 29839,
        "revenue": 292422
      }
    ]
  },
  {
    "name": "kinbor 康奈尔笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37.9,
        "sales": 57278,
        "revenue": 2170836
      },
      {
        "platform": "天猫",
        "avgPrice": 37.9,
        "sales": 60434,
        "revenue": 2290449
      },
      {
        "platform": "京东",
        "avgPrice": 43.6,
        "sales": 121752,
        "revenue": 5308387
      },
      {
        "platform": "抖音",
        "avgPrice": 37.9,
        "sales": 136796,
        "revenue": 5184568
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.5,
        "sales": 122661,
        "revenue": 3250517
      }
    ]
  },
  {
    "name": "无印良品 错题本 活页",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.1,
        "sales": 116184,
        "revenue": 5007530
      },
      {
        "platform": "天猫",
        "avgPrice": 43.1,
        "sales": 38764,
        "revenue": 1670728
      },
      {
        "platform": "京东",
        "avgPrice": 49.6,
        "sales": 42410,
        "revenue": 2103536
      },
      {
        "platform": "抖音",
        "avgPrice": 43.1,
        "sales": 55107,
        "revenue": 2375112
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.2,
        "sales": 87937,
        "revenue": 2655697
      }
    ]
  },
  {
    "name": "kinbor 考研专用笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.5,
        "sales": 33516,
        "revenue": 687078
      },
      {
        "platform": "天猫",
        "avgPrice": 20.5,
        "sales": 33317,
        "revenue": 682999
      },
      {
        "platform": "京东",
        "avgPrice": 23.6,
        "sales": 56402,
        "revenue": 1331087
      },
      {
        "platform": "抖音",
        "avgPrice": 20.5,
        "sales": 102283,
        "revenue": 2096802
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.3,
        "sales": 13000,
        "revenue": 185900
      }
    ]
  },
  {
    "name": "国誉 道林纸笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.2,
        "sales": 121413,
        "revenue": 4637977
      },
      {
        "platform": "天猫",
        "avgPrice": 38.2,
        "sales": 103891,
        "revenue": 3968636
      },
      {
        "platform": "京东",
        "avgPrice": 43.9,
        "sales": 126109,
        "revenue": 5536185
      },
      {
        "platform": "抖音",
        "avgPrice": 38.2,
        "sales": 91129,
        "revenue": 3481128
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.7,
        "sales": 135866,
        "revenue": 3627622
      }
    ]
  },
  {
    "name": "迪士尼 学习用品礼盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 110,
        "sales": 53221,
        "revenue": 5854310
      },
      {
        "platform": "天猫",
        "avgPrice": 110,
        "sales": 72498,
        "revenue": 7974780
      },
      {
        "platform": "京东",
        "avgPrice": 126.5,
        "sales": 44418,
        "revenue": 5618877
      },
      {
        "platform": "抖音",
        "avgPrice": 110,
        "sales": 57107,
        "revenue": 6281770
      },
      {
        "platform": "拼多多",
        "avgPrice": 77,
        "sales": 27630,
        "revenue": 2127510
      }
    ]
  },
  {
    "name": "得力 小学生文具套装",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.7,
        "sales": 12160,
        "revenue": 446272
      },
      {
        "platform": "天猫",
        "avgPrice": 36.7,
        "sales": 45922,
        "revenue": 1685337
      },
      {
        "platform": "京东",
        "avgPrice": 42.2,
        "sales": 6036,
        "revenue": 254719
      },
      {
        "platform": "抖音",
        "avgPrice": 36.7,
        "sales": 24850,
        "revenue": 911995
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.7,
        "sales": 32346,
        "revenue": 831292
      }
    ]
  },
  {
    "name": "三丽鸥 中考文具套装",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 52.4,
        "sales": 16678,
        "revenue": 873927
      },
      {
        "platform": "天猫",
        "avgPrice": 52.4,
        "sales": 38118,
        "revenue": 1997383
      },
      {
        "platform": "京东",
        "avgPrice": 60.3,
        "sales": 19486,
        "revenue": 1175006
      },
      {
        "platform": "抖音",
        "avgPrice": 52.4,
        "sales": 61220,
        "revenue": 3207928
      },
      {
        "platform": "拼多多",
        "avgPrice": 36.7,
        "sales": 72532,
        "revenue": 2661924
      }
    ]
  },
  {
    "name": "奥特曼 高考加油礼盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 65.6,
        "sales": 24320,
        "revenue": 1595392
      },
      {
        "platform": "天猫",
        "avgPrice": 65.6,
        "sales": 63180,
        "revenue": 4144608
      },
      {
        "platform": "京东",
        "avgPrice": 75.4,
        "sales": 59349,
        "revenue": 4474915
      },
      {
        "platform": "抖音",
        "avgPrice": 65.6,
        "sales": 12984,
        "revenue": 851750
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.9,
        "sales": 41612,
        "revenue": 1909991
      }
    ]
  },
  {
    "name": "迪士尼 文具福袋 随机",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 51.6,
        "sales": 70131,
        "revenue": 3618760
      },
      {
        "platform": "天猫",
        "avgPrice": 51.6,
        "sales": 34217,
        "revenue": 1765597
      },
      {
        "platform": "京东",
        "avgPrice": 59.3,
        "sales": 36149,
        "revenue": 2143636
      },
      {
        "platform": "抖音",
        "avgPrice": 51.6,
        "sales": 33761,
        "revenue": 1742068
      },
      {
        "platform": "拼多多",
        "avgPrice": 36.1,
        "sales": 13369,
        "revenue": 482621
      }
    ]
  },
  {
    "name": "奥特曼 IP联名文具盲盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 96.2,
        "sales": 45271,
        "revenue": 4355070
      },
      {
        "platform": "天猫",
        "avgPrice": 96.2,
        "sales": 12262,
        "revenue": 1179604
      },
      {
        "platform": "京东",
        "avgPrice": 110.6,
        "sales": 14285,
        "revenue": 1579921
      },
      {
        "platform": "抖音",
        "avgPrice": 96.2,
        "sales": 51729,
        "revenue": 4976330
      },
      {
        "platform": "拼多多",
        "avgPrice": 67.3,
        "sales": 64462,
        "revenue": 4338293
      }
    ]
  },
  {
    "name": "touch 动漫专用马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 150.4,
        "sales": 81989,
        "revenue": 12331146
      },
      {
        "platform": "天猫",
        "avgPrice": 150.4,
        "sales": 44880,
        "revenue": 6749952
      },
      {
        "platform": "京东",
        "avgPrice": 173,
        "sales": 80571,
        "revenue": 13938783
      },
      {
        "platform": "抖音",
        "avgPrice": 150.4,
        "sales": 23424,
        "revenue": 3522970
      },
      {
        "platform": "拼多多",
        "avgPrice": 105.3,
        "sales": 98172,
        "revenue": 10337512
      }
    ]
  },
  {
    "name": "马利 建筑手绘马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 46.4,
        "sales": 94329,
        "revenue": 4376866
      },
      {
        "platform": "天猫",
        "avgPrice": 46.4,
        "sales": 26110,
        "revenue": 1211504
      },
      {
        "platform": "京东",
        "avgPrice": 53.4,
        "sales": 28933,
        "revenue": 1545022
      },
      {
        "platform": "抖音",
        "avgPrice": 46.4,
        "sales": 98977,
        "revenue": 4592533
      },
      {
        "platform": "拼多多",
        "avgPrice": 32.5,
        "sales": 63313,
        "revenue": 2057673
      }
    ]
  },
  {
    "name": "斯塔 儿童马克笔 可水洗",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 138.4,
        "sales": 96860,
        "revenue": 13405424
      },
      {
        "platform": "天猫",
        "avgPrice": 138.4,
        "sales": 58568,
        "revenue": 8105811
      },
      {
        "platform": "京东",
        "avgPrice": 159.2,
        "sales": 60964,
        "revenue": 9705469
      },
      {
        "platform": "抖音",
        "avgPrice": 138.4,
        "sales": 70797,
        "revenue": 9798305
      },
      {
        "platform": "拼多多",
        "avgPrice": 96.9,
        "sales": 16185,
        "revenue": 1568327
      }
    ]
  },
  {
    "name": "touch 软头马克笔套装",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 153.3,
        "sales": 78117,
        "revenue": 11975336
      },
      {
        "platform": "天猫",
        "avgPrice": 153.3,
        "sales": 47121,
        "revenue": 7223649
      },
      {
        "platform": "京东",
        "avgPrice": 176.3,
        "sales": 34046,
        "revenue": 6002310
      },
      {
        "platform": "抖音",
        "avgPrice": 153.3,
        "sales": 88103,
        "revenue": 13506190
      },
      {
        "platform": "拼多多",
        "avgPrice": 107.3,
        "sales": 49615,
        "revenue": 5323690
      }
    ]
  },
  {
    "name": "touch 马克笔补充液",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 60.8,
        "sales": 69916,
        "revenue": 4250893
      },
      {
        "platform": "天猫",
        "avgPrice": 60.8,
        "sales": 66136,
        "revenue": 4021069
      },
      {
        "platform": "京东",
        "avgPrice": 69.9,
        "sales": 55852,
        "revenue": 3904055
      },
      {
        "platform": "抖音",
        "avgPrice": 60.8,
        "sales": 18166,
        "revenue": 1104493
      },
      {
        "platform": "拼多多",
        "avgPrice": 42.6,
        "sales": 22190,
        "revenue": 945294
      }
    ]
  },
  {
    "name": "斯塔 丙烯马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 110.3,
        "sales": 37069,
        "revenue": 4088711
      },
      {
        "platform": "天猫",
        "avgPrice": 110.3,
        "sales": 53065,
        "revenue": 5853070
      },
      {
        "platform": "京东",
        "avgPrice": 126.8,
        "sales": 43615,
        "revenue": 5530382
      },
      {
        "platform": "抖音",
        "avgPrice": 110.3,
        "sales": 75458,
        "revenue": 8323017
      },
      {
        "platform": "拼多多",
        "avgPrice": 77.2,
        "sales": 80403,
        "revenue": 6207112
      }
    ]
  },
  {
    "name": "KOKUYO 痛包笔袋 可展示",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 63.5,
        "sales": 84922,
        "revenue": 5392547
      },
      {
        "platform": "天猫",
        "avgPrice": 63.5,
        "sales": 80259,
        "revenue": 5096447
      },
      {
        "platform": "京东",
        "avgPrice": 73,
        "sales": 10496,
        "revenue": 766208
      },
      {
        "platform": "抖音",
        "avgPrice": 63.5,
        "sales": 61589,
        "revenue": 3910902
      },
      {
        "platform": "拼多多",
        "avgPrice": 44.4,
        "sales": 60979,
        "revenue": 2707468
      }
    ]
  },
  {
    "name": "晨光 多层文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20,
        "sales": 72836,
        "revenue": 1456720
      },
      {
        "platform": "天猫",
        "avgPrice": 20,
        "sales": 79604,
        "revenue": 1592080
      },
      {
        "platform": "京东",
        "avgPrice": 23,
        "sales": 49671,
        "revenue": 1142433
      },
      {
        "platform": "抖音",
        "avgPrice": 20,
        "sales": 65696,
        "revenue": 1313920
      },
      {
        "platform": "拼多多",
        "avgPrice": 14,
        "sales": 77614,
        "revenue": 1086596
      }
    ]
  },
  {
    "name": "得力 硅胶笔袋 创意",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28,
        "sales": 71807,
        "revenue": 2010596
      },
      {
        "platform": "天猫",
        "avgPrice": 28,
        "sales": 62515,
        "revenue": 1750420
      },
      {
        "platform": "京东",
        "avgPrice": 32.2,
        "sales": 88931,
        "revenue": 2863578
      },
      {
        "platform": "抖音",
        "avgPrice": 28,
        "sales": 56022,
        "revenue": 1568616
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.6,
        "sales": 30639,
        "revenue": 600524
      }
    ]
  },
  {
    "name": "晨光 帆布笔袋 简约",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.8,
        "sales": 30286,
        "revenue": 993381
      },
      {
        "platform": "天猫",
        "avgPrice": 32.8,
        "sales": 12772,
        "revenue": 418922
      },
      {
        "platform": "京东",
        "avgPrice": 37.7,
        "sales": 77262,
        "revenue": 2912777
      },
      {
        "platform": "抖音",
        "avgPrice": 32.8,
        "sales": 61095,
        "revenue": 2003916
      },
      {
        "platform": "拼多多",
        "avgPrice": 23,
        "sales": 42867,
        "revenue": 985941
      }
    ]
  },
  {
    "name": "迪士尼 铁皮文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.6,
        "sales": 43844,
        "revenue": 1034718
      },
      {
        "platform": "天猫",
        "avgPrice": 23.6,
        "sales": 80255,
        "revenue": 1894018
      },
      {
        "platform": "京东",
        "avgPrice": 27.1,
        "sales": 60174,
        "revenue": 1630715
      },
      {
        "platform": "抖音",
        "avgPrice": 23.6,
        "sales": 80418,
        "revenue": 1897865
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.5,
        "sales": 29252,
        "revenue": 482658
      }
    ]
  },
  {
    "name": "得力 密码锁文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 39.3,
        "sales": 16817,
        "revenue": 660908
      },
      {
        "platform": "天猫",
        "avgPrice": 39.3,
        "sales": 83920,
        "revenue": 3298056
      },
      {
        "platform": "京东",
        "avgPrice": 45.2,
        "sales": 65175,
        "revenue": 2945910
      },
      {
        "platform": "抖音",
        "avgPrice": 39.3,
        "sales": 75421,
        "revenue": 2964045
      },
      {
        "platform": "拼多多",
        "avgPrice": 27.5,
        "sales": 68740,
        "revenue": 1890350
      }
    ]
  },
  {
    "name": "中华 素描铅笔套装",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 53.2,
        "sales": 24312,
        "revenue": 1293398
      },
      {
        "platform": "天猫",
        "avgPrice": 53.2,
        "sales": 76113,
        "revenue": 4049212
      },
      {
        "platform": "京东",
        "avgPrice": 61.2,
        "sales": 63903,
        "revenue": 3910864
      },
      {
        "platform": "抖音",
        "avgPrice": 53.2,
        "sales": 33263,
        "revenue": 1769592
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.2,
        "sales": 71334,
        "revenue": 2653625
      }
    ]
  },
  {
    "name": "辉柏嘉 彩色铅笔 水溶性",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.8,
        "sales": 132939,
        "revenue": 1568680
      },
      {
        "platform": "天猫",
        "avgPrice": 11.8,
        "sales": 110077,
        "revenue": 1298909
      },
      {
        "platform": "京东",
        "avgPrice": 13.6,
        "sales": 156099,
        "revenue": 2122946
      },
      {
        "platform": "抖音",
        "avgPrice": 11.8,
        "sales": 91244,
        "revenue": 1076679
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.3,
        "sales": 27773,
        "revenue": 230516
      }
    ]
  },
  {
    "name": "辉柏嘉 洞洞铅笔 矫姿",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.9,
        "sales": 123266,
        "revenue": 5411377
      },
      {
        "platform": "天猫",
        "avgPrice": 43.9,
        "sales": 156297,
        "revenue": 6861438
      },
      {
        "platform": "京东",
        "avgPrice": 50.5,
        "sales": 83973,
        "revenue": 4240637
      },
      {
        "platform": "抖音",
        "avgPrice": 43.9,
        "sales": 102629,
        "revenue": 4505413
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.7,
        "sales": 94457,
        "revenue": 2899830
      }
    ]
  },
  {
    "name": "马可 活动铅笔 金属杆",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 47.3,
        "sales": 158929,
        "revenue": 7517342
      },
      {
        "platform": "天猫",
        "avgPrice": 47.3,
        "sales": 140123,
        "revenue": 6627818
      },
      {
        "platform": "京东",
        "avgPrice": 54.4,
        "sales": 83783,
        "revenue": 4557795
      },
      {
        "platform": "抖音",
        "avgPrice": 47.3,
        "sales": 91684,
        "revenue": 4336653
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.1,
        "sales": 84374,
        "revenue": 2792779
      }
    ]
  },
  {
    "name": "中华 考试涂卡铅笔 20支",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13.2,
        "sales": 48865,
        "revenue": 645018
      },
      {
        "platform": "天猫",
        "avgPrice": 13.2,
        "sales": 34250,
        "revenue": 452100
      },
      {
        "platform": "京东",
        "avgPrice": 15.2,
        "sales": 150978,
        "revenue": 2294866
      },
      {
        "platform": "抖音",
        "avgPrice": 13.2,
        "sales": 129426,
        "revenue": 1708423
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.2,
        "sales": 76313,
        "revenue": 702080
      }
    ]
  },
  {
    "name": "马可 绘图铅笔 2H-8B",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.9,
        "sales": 178348,
        "revenue": 4262517
      },
      {
        "platform": "天猫",
        "avgPrice": 23.9,
        "sales": 76686,
        "revenue": 1832795
      },
      {
        "platform": "京东",
        "avgPrice": 27.5,
        "sales": 197857,
        "revenue": 5441068
      },
      {
        "platform": "抖音",
        "avgPrice": 23.9,
        "sales": 181867,
        "revenue": 4346621
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 141687,
        "revenue": 2366173
      }
    ]
  },
  {
    "name": "辉柏嘉 可爱卡通橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 2.2,
        "sales": 62669,
        "revenue": 137872
      },
      {
        "platform": "天猫",
        "avgPrice": 2.2,
        "sales": 203629,
        "revenue": 447984
      },
      {
        "platform": "京东",
        "avgPrice": 2.5,
        "sales": 137677,
        "revenue": 344193
      },
      {
        "platform": "抖音",
        "avgPrice": 2.2,
        "sales": 150374,
        "revenue": 330823
      },
      {
        "platform": "拼多多",
        "avgPrice": 1.5,
        "sales": 246051,
        "revenue": 369077
      }
    ]
  },
  {
    "name": "晨光 素描橡皮 软",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 6.3,
        "sales": 132755,
        "revenue": 836357
      },
      {
        "platform": "天猫",
        "avgPrice": 6.3,
        "sales": 57298,
        "revenue": 360977
      },
      {
        "platform": "京东",
        "avgPrice": 7.2,
        "sales": 23059,
        "revenue": 166025
      },
      {
        "platform": "抖音",
        "avgPrice": 6.3,
        "sales": 49928,
        "revenue": 314546
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.4,
        "sales": 91758,
        "revenue": 403735
      }
    ]
  },
  {
    "name": "辉柏嘉 橡皮擦 不留痕",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.9,
        "sales": 111774,
        "revenue": 1218337
      },
      {
        "platform": "天猫",
        "avgPrice": 10.9,
        "sales": 219428,
        "revenue": 2391765
      },
      {
        "platform": "京东",
        "avgPrice": 12.5,
        "sales": 198641,
        "revenue": 2483013
      },
      {
        "platform": "抖音",
        "avgPrice": 10.9,
        "sales": 105231,
        "revenue": 1147018
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.6,
        "sales": 156440,
        "revenue": 1188944
      }
    ]
  },
  {
    "name": "蜻蜓 高光橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12.6,
        "sales": 84556,
        "revenue": 1065406
      },
      {
        "platform": "天猫",
        "avgPrice": 12.6,
        "sales": 87393,
        "revenue": 1101152
      },
      {
        "platform": "京东",
        "avgPrice": 14.5,
        "sales": 230986,
        "revenue": 3349297
      },
      {
        "platform": "抖音",
        "avgPrice": 12.6,
        "sales": 63951,
        "revenue": 805783
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.8,
        "sales": 97170,
        "revenue": 855096
      }
    ]
  },
  {
    "name": "辉柏嘉 樱花橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 6,
        "sales": 238782,
        "revenue": 1432692
      },
      {
        "platform": "天猫",
        "avgPrice": 6,
        "sales": 100318,
        "revenue": 601908
      },
      {
        "platform": "京东",
        "avgPrice": 6.9,
        "sales": 212882,
        "revenue": 1468886
      },
      {
        "platform": "抖音",
        "avgPrice": 6,
        "sales": 102765,
        "revenue": 616590
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.2,
        "sales": 115560,
        "revenue": 485352
      }
    ]
  },
  {
    "name": "樱花 超净橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.9,
        "sales": 170359,
        "revenue": 1856913
      },
      {
        "platform": "天猫",
        "avgPrice": 10.9,
        "sales": 194749,
        "revenue": 2122764
      },
      {
        "platform": "京东",
        "avgPrice": 12.5,
        "sales": 82521,
        "revenue": 1031513
      },
      {
        "platform": "抖音",
        "avgPrice": 10.9,
        "sales": 246245,
        "revenue": 2684071
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.6,
        "sales": 165862,
        "revenue": 1260551
      }
    ]
  },
  {
    "name": "斑马 迷你荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.3,
        "sales": 38082,
        "revenue": 354163
      },
      {
        "platform": "天猫",
        "avgPrice": 9.3,
        "sales": 32589,
        "revenue": 303078
      },
      {
        "platform": "京东",
        "avgPrice": 10.7,
        "sales": 77761,
        "revenue": 832043
      },
      {
        "platform": "抖音",
        "avgPrice": 9.3,
        "sales": 11553,
        "revenue": 107443
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.5,
        "sales": 68182,
        "revenue": 443183
      }
    ]
  },
  {
    "name": "斑马 直液式荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.3,
        "sales": 40484,
        "revenue": 457469
      },
      {
        "platform": "天猫",
        "avgPrice": 11.3,
        "sales": 83355,
        "revenue": 941912
      },
      {
        "platform": "京东",
        "avgPrice": 13,
        "sales": 34218,
        "revenue": 444834
      },
      {
        "platform": "抖音",
        "avgPrice": 11.3,
        "sales": 86690,
        "revenue": 979597
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.9,
        "sales": 59227,
        "revenue": 467893
      }
    ]
  },
  {
    "name": "百乐 彩色荧光笔 学生用",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.6,
        "sales": 28707,
        "revenue": 821020
      },
      {
        "platform": "天猫",
        "avgPrice": 28.6,
        "sales": 97171,
        "revenue": 2779091
      },
      {
        "platform": "京东",
        "avgPrice": 32.9,
        "sales": 24872,
        "revenue": 818289
      },
      {
        "platform": "抖音",
        "avgPrice": 28.6,
        "sales": 33563,
        "revenue": 959902
      },
      {
        "platform": "拼多多",
        "avgPrice": 20,
        "sales": 77691,
        "revenue": 1553820
      }
    ]
  },
  {
    "name": "斑马 护眼荧光笔 莫兰迪",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.4,
        "sales": 81092,
        "revenue": 2384105
      },
      {
        "platform": "天猫",
        "avgPrice": 29.4,
        "sales": 92421,
        "revenue": 2717177
      },
      {
        "platform": "京东",
        "avgPrice": 33.8,
        "sales": 50338,
        "revenue": 1701424
      },
      {
        "platform": "抖音",
        "avgPrice": 29.4,
        "sales": 97477,
        "revenue": 2865824
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.6,
        "sales": 36076,
        "revenue": 743166
      }
    ]
  },
  {
    "name": "晨光 窗口荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.1,
        "sales": 73355,
        "revenue": 740886
      },
      {
        "platform": "天猫",
        "avgPrice": 10.1,
        "sales": 62807,
        "revenue": 634351
      },
      {
        "platform": "京东",
        "avgPrice": 11.6,
        "sales": 94611,
        "revenue": 1097488
      },
      {
        "platform": "抖音",
        "avgPrice": 10.1,
        "sales": 18657,
        "revenue": 188436
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.1,
        "sales": 54404,
        "revenue": 386268
      }
    ]
  },
  {
    "name": "东洋 荧光笔 粗细双头",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12.3,
        "sales": 48004,
        "revenue": 590449
      },
      {
        "platform": "天猫",
        "avgPrice": 12.3,
        "sales": 25346,
        "revenue": 311756
      },
      {
        "platform": "京东",
        "avgPrice": 14.1,
        "sales": 60653,
        "revenue": 855207
      },
      {
        "platform": "抖音",
        "avgPrice": 12.3,
        "sales": 14831,
        "revenue": 182421
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.6,
        "sales": 62222,
        "revenue": 535109
      }
    ]
  },
  {
    "name": "三年二班 手账大礼盒套装",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.7,
        "sales": 35987,
        "revenue": 816905
      },
      {
        "platform": "天猫",
        "avgPrice": 22.7,
        "sales": 55142,
        "revenue": 1251723
      },
      {
        "platform": "京东",
        "avgPrice": 26.1,
        "sales": 74674,
        "revenue": 1948991
      },
      {
        "platform": "抖音",
        "avgPrice": 22.7,
        "sales": 38730,
        "revenue": 879171
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.9,
        "sales": 26900,
        "revenue": 427710
      }
    ]
  },
  {
    "name": "三年二班 手账模板尺",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.7,
        "sales": 18411,
        "revenue": 454752
      },
      {
        "platform": "天猫",
        "avgPrice": 24.7,
        "sales": 37268,
        "revenue": 920520
      },
      {
        "platform": "京东",
        "avgPrice": 28.4,
        "sales": 42037,
        "revenue": 1193851
      },
      {
        "platform": "抖音",
        "avgPrice": 24.7,
        "sales": 44674,
        "revenue": 1103448
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.3,
        "sales": 59911,
        "revenue": 1036460
      }
    ]
  },
  {
    "name": "kinbor 手账印章套装",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.1,
        "sales": 6539,
        "revenue": 236058
      },
      {
        "platform": "天猫",
        "avgPrice": 36.1,
        "sales": 9407,
        "revenue": 339593
      },
      {
        "platform": "京东",
        "avgPrice": 41.5,
        "sales": 44700,
        "revenue": 1855050
      },
      {
        "platform": "抖音",
        "avgPrice": 36.1,
        "sales": 16052,
        "revenue": 579477
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.3,
        "sales": 68865,
        "revenue": 1742285
      }
    ]
  },
  {
    "name": "国誉 手账素材本",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37.3,
        "sales": 25478,
        "revenue": 950329
      },
      {
        "platform": "天猫",
        "avgPrice": 37.3,
        "sales": 42169,
        "revenue": 1572904
      },
      {
        "platform": "京东",
        "avgPrice": 42.9,
        "sales": 74329,
        "revenue": 3188714
      },
      {
        "platform": "抖音",
        "avgPrice": 37.3,
        "sales": 57128,
        "revenue": 2130874
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.1,
        "sales": 22394,
        "revenue": 584483
      }
    ]
  },
  {
    "name": "文谷 手账周计划本",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.9,
        "sales": 37124,
        "revenue": 664520
      },
      {
        "platform": "天猫",
        "avgPrice": 17.9,
        "sales": 62857,
        "revenue": 1125140
      },
      {
        "platform": "京东",
        "avgPrice": 20.6,
        "sales": 7429,
        "revenue": 153037
      },
      {
        "platform": "抖音",
        "avgPrice": 17.9,
        "sales": 64205,
        "revenue": 1149270
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.5,
        "sales": 45205,
        "revenue": 565063
      }
    ]
  },
  {
    "name": "国誉 手账装饰花边剪刀",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.1,
        "sales": 18636,
        "revenue": 355948
      },
      {
        "platform": "天猫",
        "avgPrice": 19.1,
        "sales": 46616,
        "revenue": 890366
      },
      {
        "platform": "京东",
        "avgPrice": 22,
        "sales": 64927,
        "revenue": 1428394
      },
      {
        "platform": "抖音",
        "avgPrice": 19.1,
        "sales": 14677,
        "revenue": 280331
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.4,
        "sales": 42032,
        "revenue": 563229
      }
    ]
  },
  {
    "name": "印迹 火漆封蜡枪",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.5,
        "sales": 24226,
        "revenue": 666215
      },
      {
        "platform": "天猫",
        "avgPrice": 27.5,
        "sales": 9564,
        "revenue": 263010
      },
      {
        "platform": "京东",
        "avgPrice": 31.6,
        "sales": 11700,
        "revenue": 369720
      },
      {
        "platform": "抖音",
        "avgPrice": 27.5,
        "sales": 37891,
        "revenue": 1042003
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.3,
        "sales": 39449,
        "revenue": 761366
      }
    ]
  },
  {
    "name": "印迹 火漆信封套装",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.8,
        "sales": 4800,
        "revenue": 123840
      },
      {
        "platform": "天猫",
        "avgPrice": 25.8,
        "sales": 7162,
        "revenue": 184780
      },
      {
        "platform": "京东",
        "avgPrice": 29.7,
        "sales": 32147,
        "revenue": 954766
      },
      {
        "platform": "抖音",
        "avgPrice": 25.8,
        "sales": 13580,
        "revenue": 350364
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.1,
        "sales": 3740,
        "revenue": 67694
      }
    ]
  },
  {
    "name": "森活记 火漆印章 花朵款",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 70.3,
        "sales": 34127,
        "revenue": 2399128
      },
      {
        "platform": "天猫",
        "avgPrice": 70.3,
        "sales": 9301,
        "revenue": 653860
      },
      {
        "platform": "京东",
        "avgPrice": 80.8,
        "sales": 38742,
        "revenue": 3130354
      },
      {
        "platform": "抖音",
        "avgPrice": 70.3,
        "sales": 5138,
        "revenue": 361201
      },
      {
        "platform": "拼多多",
        "avgPrice": 49.2,
        "sales": 5631,
        "revenue": 277045
      }
    ]
  },
  {
    "name": "暮光之印 火漆蜡条 彩色",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 70,
        "sales": 32708,
        "revenue": 2289560
      },
      {
        "platform": "天猫",
        "avgPrice": 70,
        "sales": 8621,
        "revenue": 603470
      },
      {
        "platform": "京东",
        "avgPrice": 80.5,
        "sales": 22488,
        "revenue": 1810284
      },
      {
        "platform": "抖音",
        "avgPrice": 70,
        "sales": 22266,
        "revenue": 1558620
      },
      {
        "platform": "拼多多",
        "avgPrice": 49,
        "sales": 10774,
        "revenue": 527926
      }
    ]
  },
  {
    "name": "手帐星球 火漆勺 木柄",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 87.4,
        "sales": 11077,
        "revenue": 968130
      },
      {
        "platform": "天猫",
        "avgPrice": 87.4,
        "sales": 5377,
        "revenue": 469950
      },
      {
        "platform": "京东",
        "avgPrice": 100.5,
        "sales": 8265,
        "revenue": 830633
      },
      {
        "platform": "抖音",
        "avgPrice": 87.4,
        "sales": 24742,
        "revenue": 2162451
      },
      {
        "platform": "拼多多",
        "avgPrice": 61.2,
        "sales": 27265,
        "revenue": 1668618
      }
    ]
  },
  {
    "name": "印迹 火漆印章礼盒",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 83.8,
        "sales": 38979,
        "revenue": 3266440
      },
      {
        "platform": "天猫",
        "avgPrice": 83.8,
        "sales": 3561,
        "revenue": 298412
      },
      {
        "platform": "京东",
        "avgPrice": 96.4,
        "sales": 8426,
        "revenue": 812266
      },
      {
        "platform": "抖音",
        "avgPrice": 83.8,
        "sales": 11311,
        "revenue": 947862
      },
      {
        "platform": "拼多多",
        "avgPrice": 58.7,
        "sales": 20756,
        "revenue": 1218377
      }
    ]
  },
  {
    "name": "马利 三角杆水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22,
        "sales": 90283,
        "revenue": 1986226
      },
      {
        "platform": "天猫",
        "avgPrice": 22,
        "sales": 82836,
        "revenue": 1822392
      },
      {
        "platform": "京东",
        "avgPrice": 25.3,
        "sales": 64090,
        "revenue": 1621477
      },
      {
        "platform": "抖音",
        "avgPrice": 22,
        "sales": 55456,
        "revenue": 1220032
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.4,
        "sales": 84687,
        "revenue": 1304180
      }
    ]
  },
  {
    "name": "真彩 水彩笔 补充装",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.8,
        "sales": 113399,
        "revenue": 2018502
      },
      {
        "platform": "天猫",
        "avgPrice": 17.8,
        "sales": 97183,
        "revenue": 1729857
      },
      {
        "platform": "京东",
        "avgPrice": 20.5,
        "sales": 13998,
        "revenue": 286959
      },
      {
        "platform": "抖音",
        "avgPrice": 17.8,
        "sales": 9239,
        "revenue": 164454
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.5,
        "sales": 38467,
        "revenue": 480838
      }
    ]
  },
  {
    "name": "马利 水彩笔 桶装 24色",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.4,
        "sales": 84823,
        "revenue": 2154504
      },
      {
        "platform": "天猫",
        "avgPrice": 25.4,
        "sales": 40434,
        "revenue": 1027024
      },
      {
        "platform": "京东",
        "avgPrice": 29.2,
        "sales": 50969,
        "revenue": 1488295
      },
      {
        "platform": "抖音",
        "avgPrice": 25.4,
        "sales": 119398,
        "revenue": 3032709
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.8,
        "sales": 35589,
        "revenue": 633484
      }
    ]
  },
  {
    "name": "真彩 细头水彩笔 勾线",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.1,
        "sales": 44757,
        "revenue": 1078644
      },
      {
        "platform": "天猫",
        "avgPrice": 24.1,
        "sales": 98265,
        "revenue": 2368187
      },
      {
        "platform": "京东",
        "avgPrice": 27.7,
        "sales": 16299,
        "revenue": 451482
      },
      {
        "platform": "抖音",
        "avgPrice": 24.1,
        "sales": 43210,
        "revenue": 1041361
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.9,
        "sales": 28300,
        "revenue": 478270
      }
    ]
  },
  {
    "name": "得力 双头水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 65.1,
        "sales": 121968,
        "revenue": 7940117
      },
      {
        "platform": "天猫",
        "avgPrice": 65.1,
        "sales": 43882,
        "revenue": 2856718
      },
      {
        "platform": "京东",
        "avgPrice": 74.9,
        "sales": 37196,
        "revenue": 2785980
      },
      {
        "platform": "抖音",
        "avgPrice": 65.1,
        "sales": 47093,
        "revenue": 3065754
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.6,
        "sales": 94171,
        "revenue": 4294198
      }
    ]
  },
  {
    "name": "真彩 可擦水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 58.5,
        "sales": 95338,
        "revenue": 5577273
      },
      {
        "platform": "天猫",
        "avgPrice": 58.5,
        "sales": 59221,
        "revenue": 3464429
      },
      {
        "platform": "京东",
        "avgPrice": 67.3,
        "sales": 59593,
        "revenue": 4010609
      },
      {
        "platform": "抖音",
        "avgPrice": 58.5,
        "sales": 44366,
        "revenue": 2595411
      },
      {
        "platform": "拼多多",
        "avgPrice": 40.9,
        "sales": 58578,
        "revenue": 2395840
      }
    ]
  },
  {
    "name": "得力 文件标签 彩色索引",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37.2,
        "sales": 63116,
        "revenue": 2347915
      },
      {
        "platform": "天猫",
        "avgPrice": 37.2,
        "sales": 12597,
        "revenue": 468608
      },
      {
        "platform": "京东",
        "avgPrice": 42.8,
        "sales": 55313,
        "revenue": 2367396
      },
      {
        "platform": "抖音",
        "avgPrice": 37.2,
        "sales": 65199,
        "revenue": 2425403
      },
      {
        "platform": "拼多多",
        "avgPrice": 26,
        "sales": 28070,
        "revenue": 729820
      }
    ]
  },
  {
    "name": "兄弟 手写标签纸",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.8,
        "sales": 57842,
        "revenue": 1203114
      },
      {
        "platform": "天猫",
        "avgPrice": 20.8,
        "sales": 34145,
        "revenue": 710216
      },
      {
        "platform": "京东",
        "avgPrice": 23.9,
        "sales": 26590,
        "revenue": 635501
      },
      {
        "platform": "抖音",
        "avgPrice": 20.8,
        "sales": 55554,
        "revenue": 1155523
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.6,
        "sales": 39676,
        "revenue": 579270
      }
    ]
  },
  {
    "name": "兄弟 热敏标签纸 卷装",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 103.8,
        "sales": 38154,
        "revenue": 3960385
      },
      {
        "platform": "天猫",
        "avgPrice": 103.8,
        "sales": 31645,
        "revenue": 3284751
      },
      {
        "platform": "京东",
        "avgPrice": 119.4,
        "sales": 58274,
        "revenue": 6957916
      },
      {
        "platform": "抖音",
        "avgPrice": 103.8,
        "sales": 64349,
        "revenue": 6679426
      },
      {
        "platform": "拼多多",
        "avgPrice": 72.7,
        "sales": 32727,
        "revenue": 2379253
      }
    ]
  },
  {
    "name": "精臣 价格标签贴",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 98.5,
        "sales": 62138,
        "revenue": 6120593
      },
      {
        "platform": "天猫",
        "avgPrice": 98.5,
        "sales": 32712,
        "revenue": 3222132
      },
      {
        "platform": "京东",
        "avgPrice": 113.3,
        "sales": 47341,
        "revenue": 5363735
      },
      {
        "platform": "抖音",
        "avgPrice": 98.5,
        "sales": 10770,
        "revenue": 1060845
      },
      {
        "platform": "拼多多",
        "avgPrice": 68.9,
        "sales": 14464,
        "revenue": 996570
      }
    ]
  },
  {
    "name": "雅柯莱 书脊标签",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 126.6,
        "sales": 56330,
        "revenue": 7131378
      },
      {
        "platform": "天猫",
        "avgPrice": 126.6,
        "sales": 43065,
        "revenue": 5452029
      },
      {
        "platform": "京东",
        "avgPrice": 145.6,
        "sales": 29725,
        "revenue": 4327960
      },
      {
        "platform": "抖音",
        "avgPrice": 126.6,
        "sales": 10771,
        "revenue": 1363609
      },
      {
        "platform": "拼多多",
        "avgPrice": 88.6,
        "sales": 62074,
        "revenue": 5499756
      }
    ]
  },
  {
    "name": "兄弟 收纳标签贴",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 102.5,
        "sales": 41617,
        "revenue": 4265743
      },
      {
        "platform": "天猫",
        "avgPrice": 102.5,
        "sales": 64699,
        "revenue": 6631648
      },
      {
        "platform": "京东",
        "avgPrice": 117.9,
        "sales": 56070,
        "revenue": 6610653
      },
      {
        "platform": "抖音",
        "avgPrice": 102.5,
        "sales": 32575,
        "revenue": 3338938
      },
      {
        "platform": "拼多多",
        "avgPrice": 71.8,
        "sales": 31869,
        "revenue": 2288194
      }
    ]
  },
  {
    "name": "幻彩 串珠手工材料",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.2,
        "sales": 119690,
        "revenue": 3255568
      },
      {
        "platform": "天猫",
        "avgPrice": 27.2,
        "sales": 72678,
        "revenue": 1976842
      },
      {
        "platform": "京东",
        "avgPrice": 31.3,
        "sales": 119647,
        "revenue": 3744951
      },
      {
        "platform": "抖音",
        "avgPrice": 27.2,
        "sales": 44563,
        "revenue": 1212114
      },
      {
        "platform": "拼多多",
        "avgPrice": 19,
        "sales": 123499,
        "revenue": 2346481
      }
    ]
  },
  {
    "name": "儿童乐园 毛毡手工包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.2,
        "sales": 78314,
        "revenue": 1347001
      },
      {
        "platform": "天猫",
        "avgPrice": 17.2,
        "sales": 14033,
        "revenue": 241368
      },
      {
        "platform": "京东",
        "avgPrice": 19.8,
        "sales": 72562,
        "revenue": 1436728
      },
      {
        "platform": "抖音",
        "avgPrice": 17.2,
        "sales": 58528,
        "revenue": 1006682
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 92344,
        "revenue": 1108128
      }
    ]
  },
  {
    "name": "儿童乐园 编织手链材料包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.7,
        "sales": 40208,
        "revenue": 993138
      },
      {
        "platform": "天猫",
        "avgPrice": 24.7,
        "sales": 63002,
        "revenue": 1556149
      },
      {
        "platform": "京东",
        "avgPrice": 28.4,
        "sales": 25523,
        "revenue": 724853
      },
      {
        "platform": "抖音",
        "avgPrice": 24.7,
        "sales": 94399,
        "revenue": 2331655
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.3,
        "sales": 71592,
        "revenue": 1238542
      }
    ]
  },
  {
    "name": "得力 衍纸套装",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 21.4,
        "sales": 44975,
        "revenue": 962465
      },
      {
        "platform": "天猫",
        "avgPrice": 21.4,
        "sales": 8056,
        "revenue": 172398
      },
      {
        "platform": "京东",
        "avgPrice": 24.6,
        "sales": 23404,
        "revenue": 575738
      },
      {
        "platform": "抖音",
        "avgPrice": 21.4,
        "sales": 106592,
        "revenue": 2281069
      },
      {
        "platform": "拼多多",
        "avgPrice": 15,
        "sales": 16776,
        "revenue": 251640
      }
    ]
  },
  {
    "name": "美乐 创意美劳材料包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 61.1,
        "sales": 64484,
        "revenue": 3939972
      },
      {
        "platform": "天猫",
        "avgPrice": 61.1,
        "sales": 98403,
        "revenue": 6012423
      },
      {
        "platform": "京东",
        "avgPrice": 70.3,
        "sales": 59741,
        "revenue": 4199792
      },
      {
        "platform": "抖音",
        "avgPrice": 61.1,
        "sales": 102663,
        "revenue": 6272709
      },
      {
        "platform": "拼多多",
        "avgPrice": 42.8,
        "sales": 112204,
        "revenue": 4802331
      }
    ]
  },
  {
    "name": "儿童乐园 拼豆套装",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 46.9,
        "sales": 41350,
        "revenue": 1939315
      },
      {
        "platform": "天猫",
        "avgPrice": 46.9,
        "sales": 39048,
        "revenue": 1831351
      },
      {
        "platform": "京东",
        "avgPrice": 53.9,
        "sales": 9282,
        "revenue": 500300
      },
      {
        "platform": "抖音",
        "avgPrice": 46.9,
        "sales": 62187,
        "revenue": 2916570
      },
      {
        "platform": "拼多多",
        "avgPrice": 32.8,
        "sales": 45386,
        "revenue": 1488661
      }
    ]
  },
  {
    "name": "天文 自动进铅卷笔器",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.1,
        "sales": 13694,
        "revenue": 343719
      },
      {
        "platform": "天猫",
        "avgPrice": 25.1,
        "sales": 7298,
        "revenue": 183180
      },
      {
        "platform": "京东",
        "avgPrice": 28.9,
        "sales": 24256,
        "revenue": 700998
      },
      {
        "platform": "抖音",
        "avgPrice": 25.1,
        "sales": 78653,
        "revenue": 1974190
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.6,
        "sales": 67532,
        "revenue": 1188563
      }
    ]
  },
  {
    "name": "猫太子 双孔卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.1,
        "sales": 48677,
        "revenue": 686346
      },
      {
        "platform": "天猫",
        "avgPrice": 14.1,
        "sales": 72111,
        "revenue": 1016765
      },
      {
        "platform": "京东",
        "avgPrice": 16.2,
        "sales": 82050,
        "revenue": 1329210
      },
      {
        "platform": "抖音",
        "avgPrice": 14.1,
        "sales": 20137,
        "revenue": 283932
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.9,
        "sales": 95874,
        "revenue": 949153
      }
    ]
  },
  {
    "name": "迪士尼 静音电动削笔器",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 45.1,
        "sales": 14528,
        "revenue": 655213
      },
      {
        "platform": "天猫",
        "avgPrice": 45.1,
        "sales": 59866,
        "revenue": 2699957
      },
      {
        "platform": "京东",
        "avgPrice": 51.9,
        "sales": 57623,
        "revenue": 2990634
      },
      {
        "platform": "抖音",
        "avgPrice": 45.1,
        "sales": 65548,
        "revenue": 2956215
      },
      {
        "platform": "拼多多",
        "avgPrice": 31.6,
        "sales": 72138,
        "revenue": 2279561
      }
    ]
  },
  {
    "name": "猫太子 透明卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 41.3,
        "sales": 83482,
        "revenue": 3447807
      },
      {
        "platform": "天猫",
        "avgPrice": 41.3,
        "sales": 64499,
        "revenue": 2663809
      },
      {
        "platform": "京东",
        "avgPrice": 47.5,
        "sales": 69128,
        "revenue": 3283580
      },
      {
        "platform": "抖音",
        "avgPrice": 41.3,
        "sales": 64050,
        "revenue": 2645265
      },
      {
        "platform": "拼多多",
        "avgPrice": 28.9,
        "sales": 9311,
        "revenue": 269088
      }
    ]
  },
  {
    "name": "迪士尼 桌面卷笔器 大容量",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 50.1,
        "sales": 28609,
        "revenue": 1433311
      },
      {
        "platform": "天猫",
        "avgPrice": 50.1,
        "sales": 6951,
        "revenue": 348245
      },
      {
        "platform": "京东",
        "avgPrice": 57.6,
        "sales": 57265,
        "revenue": 3298464
      },
      {
        "platform": "抖音",
        "avgPrice": 50.1,
        "sales": 57762,
        "revenue": 2893876
      },
      {
        "platform": "拼多多",
        "avgPrice": 35.1,
        "sales": 97135,
        "revenue": 3409439
      }
    ]
  },
  {
    "name": "猫太子 便携卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34.6,
        "sales": 11638,
        "revenue": 402675
      },
      {
        "platform": "天猫",
        "avgPrice": 34.6,
        "sales": 70509,
        "revenue": 2439611
      },
      {
        "platform": "京东",
        "avgPrice": 39.8,
        "sales": 34639,
        "revenue": 1378632
      },
      {
        "platform": "抖音",
        "avgPrice": 34.6,
        "sales": 57294,
        "revenue": 1982372
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.2,
        "sales": 31375,
        "revenue": 759275
      }
    ]
  },
  {
    "name": "广博 索引标签贴",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.8,
        "sales": 46051,
        "revenue": 497351
      },
      {
        "platform": "天猫",
        "avgPrice": 10.8,
        "sales": 89083,
        "revenue": 962096
      },
      {
        "platform": "京东",
        "avgPrice": 12.4,
        "sales": 82738,
        "revenue": 1025951
      },
      {
        "platform": "抖音",
        "avgPrice": 10.8,
        "sales": 49553,
        "revenue": 535172
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.6,
        "sales": 64482,
        "revenue": 490063
      }
    ]
  },
  {
    "name": "得力 创意便签 造型",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.7,
        "sales": 61773,
        "revenue": 290333
      },
      {
        "platform": "天猫",
        "avgPrice": 4.7,
        "sales": 69215,
        "revenue": 325311
      },
      {
        "platform": "京东",
        "avgPrice": 5.4,
        "sales": 22491,
        "revenue": 121451
      },
      {
        "platform": "抖音",
        "avgPrice": 4.7,
        "sales": 153240,
        "revenue": 720228
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.3,
        "sales": 42991,
        "revenue": 141870
      }
    ]
  },
  {
    "name": "齐心 便签本 横线",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.6,
        "sales": 159203,
        "revenue": 1209943
      },
      {
        "platform": "天猫",
        "avgPrice": 7.6,
        "sales": 121819,
        "revenue": 925824
      },
      {
        "platform": "京东",
        "avgPrice": 8.7,
        "sales": 166031,
        "revenue": 1444470
      },
      {
        "platform": "抖音",
        "avgPrice": 7.6,
        "sales": 97969,
        "revenue": 744564
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.3,
        "sales": 152460,
        "revenue": 808038
      }
    ]
  },
  {
    "name": "广博 便利贴套装",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.5,
        "sales": 65728,
        "revenue": 361504
      },
      {
        "platform": "天猫",
        "avgPrice": 5.5,
        "sales": 51110,
        "revenue": 281105
      },
      {
        "platform": "京东",
        "avgPrice": 6.3,
        "sales": 45871,
        "revenue": 288987
      },
      {
        "platform": "抖音",
        "avgPrice": 5.5,
        "sales": 75858,
        "revenue": 417219
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.8,
        "sales": 173616,
        "revenue": 659741
      }
    ]
  },
  {
    "name": "晨光 指示标签 箭头",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.1,
        "sales": 174360,
        "revenue": 3504636
      },
      {
        "platform": "天猫",
        "avgPrice": 20.1,
        "sales": 52194,
        "revenue": 1049099
      },
      {
        "platform": "京东",
        "avgPrice": 23.1,
        "sales": 117320,
        "revenue": 2710092
      },
      {
        "platform": "抖音",
        "avgPrice": 20.1,
        "sales": 59500,
        "revenue": 1195950
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.1,
        "sales": 19816,
        "revenue": 279406
      }
    ]
  },
  {
    "name": "得力 加厚便签纸",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.6,
        "sales": 147595,
        "revenue": 1712102
      },
      {
        "platform": "天猫",
        "avgPrice": 11.6,
        "sales": 28958,
        "revenue": 335913
      },
      {
        "platform": "京东",
        "avgPrice": 13.3,
        "sales": 108852,
        "revenue": 1447732
      },
      {
        "platform": "抖音",
        "avgPrice": 11.6,
        "sales": 114030,
        "revenue": 1322748
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.1,
        "sales": 47446,
        "revenue": 384313
      }
    ]
  },
  {
    "name": "纽赛 创意笔筒 收纳",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.4,
        "sales": 29180,
        "revenue": 741172
      },
      {
        "platform": "天猫",
        "avgPrice": 25.4,
        "sales": 70308,
        "revenue": 1785823
      },
      {
        "platform": "京东",
        "avgPrice": 29.2,
        "sales": 52488,
        "revenue": 1532650
      },
      {
        "platform": "抖音",
        "avgPrice": 25.4,
        "sales": 53462,
        "revenue": 1357935
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.8,
        "sales": 74265,
        "revenue": 1321917
      }
    ]
  },
  {
    "name": "无印良品 木质笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12.7,
        "sales": 16812,
        "revenue": 213512
      },
      {
        "platform": "天猫",
        "avgPrice": 12.7,
        "sales": 74911,
        "revenue": 951370
      },
      {
        "platform": "京东",
        "avgPrice": 14.6,
        "sales": 28058,
        "revenue": 409647
      },
      {
        "platform": "抖音",
        "avgPrice": 12.7,
        "sales": 46200,
        "revenue": 586740
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.9,
        "sales": 35267,
        "revenue": 313876
      }
    ]
  },
  {
    "name": "晨光 斜插式笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37.3,
        "sales": 55366,
        "revenue": 2065152
      },
      {
        "platform": "天猫",
        "avgPrice": 37.3,
        "sales": 59435,
        "revenue": 2216926
      },
      {
        "platform": "京东",
        "avgPrice": 42.9,
        "sales": 29513,
        "revenue": 1266108
      },
      {
        "platform": "抖音",
        "avgPrice": 37.3,
        "sales": 35073,
        "revenue": 1308223
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.1,
        "sales": 7369,
        "revenue": 192331
      }
    ]
  },
  {
    "name": "得力 透明笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.9,
        "sales": 63612,
        "revenue": 2092835
      },
      {
        "platform": "天猫",
        "avgPrice": 32.9,
        "sales": 65170,
        "revenue": 2144093
      },
      {
        "platform": "京东",
        "avgPrice": 37.8,
        "sales": 57337,
        "revenue": 2167339
      },
      {
        "platform": "抖音",
        "avgPrice": 32.9,
        "sales": 17452,
        "revenue": 574171
      },
      {
        "platform": "拼多多",
        "avgPrice": 23,
        "sales": 71398,
        "revenue": 1642154
      }
    ]
  },
  {
    "name": "得力 磁吸笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.5,
        "sales": 57862,
        "revenue": 2227687
      },
      {
        "platform": "天猫",
        "avgPrice": 38.5,
        "sales": 39331,
        "revenue": 1514244
      },
      {
        "platform": "京东",
        "avgPrice": 44.3,
        "sales": 57536,
        "revenue": 2548845
      },
      {
        "platform": "抖音",
        "avgPrice": 38.5,
        "sales": 8220,
        "revenue": 316470
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.9,
        "sales": 14720,
        "revenue": 395968
      }
    ]
  },
  {
    "name": "无印良品 儿童卡通笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 21,
        "sales": 47660,
        "revenue": 1000860
      },
      {
        "platform": "天猫",
        "avgPrice": 21,
        "sales": 42005,
        "revenue": 882105
      },
      {
        "platform": "京东",
        "avgPrice": 24.1,
        "sales": 66975,
        "revenue": 1614098
      },
      {
        "platform": "抖音",
        "avgPrice": 21,
        "sales": 54729,
        "revenue": 1149309
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.7,
        "sales": 17383,
        "revenue": 255530
      }
    ]
  },
  {
    "name": "晨光 磁吸收纳盒 模块化",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 47.5,
        "sales": 37141,
        "revenue": 1764198
      },
      {
        "platform": "天猫",
        "avgPrice": 47.5,
        "sales": 32073,
        "revenue": 1523468
      },
      {
        "platform": "京东",
        "avgPrice": 54.6,
        "sales": 68902,
        "revenue": 3762049
      },
      {
        "platform": "抖音",
        "avgPrice": 47.5,
        "sales": 14746,
        "revenue": 700435
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.3,
        "sales": 50799,
        "revenue": 1691607
      }
    ]
  },
  {
    "name": "无印良品 亚克力收纳架",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.9,
        "sales": 5066,
        "revenue": 100813
      },
      {
        "platform": "天猫",
        "avgPrice": 19.9,
        "sales": 50072,
        "revenue": 996433
      },
      {
        "platform": "京东",
        "avgPrice": 22.9,
        "sales": 45038,
        "revenue": 1031370
      },
      {
        "platform": "抖音",
        "avgPrice": 19.9,
        "sales": 25560,
        "revenue": 508644
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.9,
        "sales": 50902,
        "revenue": 707538
      }
    ]
  },
  {
    "name": "纳川 旋转收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.3,
        "sales": 41711,
        "revenue": 1222132
      },
      {
        "platform": "天猫",
        "avgPrice": 29.3,
        "sales": 66195,
        "revenue": 1939514
      },
      {
        "platform": "京东",
        "avgPrice": 33.7,
        "sales": 56428,
        "revenue": 1901624
      },
      {
        "platform": "抖音",
        "avgPrice": 29.3,
        "sales": 26727,
        "revenue": 783101
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.5,
        "sales": 17046,
        "revenue": 349443
      }
    ]
  },
  {
    "name": "无印良品 可叠加收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.6,
        "sales": 28491,
        "revenue": 558424
      },
      {
        "platform": "天猫",
        "avgPrice": 19.6,
        "sales": 37998,
        "revenue": 744761
      },
      {
        "platform": "京东",
        "avgPrice": 22.5,
        "sales": 24256,
        "revenue": 545760
      },
      {
        "platform": "抖音",
        "avgPrice": 19.6,
        "sales": 70783,
        "revenue": 1387347
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.7,
        "sales": 68237,
        "revenue": 934847
      }
    ]
  },
  {
    "name": "宜家 笔筒收纳架",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 66,
        "sales": 40256,
        "revenue": 2656896
      },
      {
        "platform": "天猫",
        "avgPrice": 66,
        "sales": 55227,
        "revenue": 3644982
      },
      {
        "platform": "京东",
        "avgPrice": 75.9,
        "sales": 64260,
        "revenue": 4877334
      },
      {
        "platform": "抖音",
        "avgPrice": 66,
        "sales": 58991,
        "revenue": 3893406
      },
      {
        "platform": "拼多多",
        "avgPrice": 46.2,
        "sales": 18939,
        "revenue": 874982
      }
    ]
  },
  {
    "name": "宜家 资料收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.9,
        "sales": 30984,
        "revenue": 864454
      },
      {
        "platform": "天猫",
        "avgPrice": 27.9,
        "sales": 70741,
        "revenue": 1973674
      },
      {
        "platform": "京东",
        "avgPrice": 32.1,
        "sales": 16711,
        "revenue": 536423
      },
      {
        "platform": "抖音",
        "avgPrice": 27.9,
        "sales": 59947,
        "revenue": 1672521
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.5,
        "sales": 12431,
        "revenue": 242405
      }
    ]
  },
  {
    "name": "纳川 铁艺收纳架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 58,
        "sales": 54948,
        "revenue": 3186984
      },
      {
        "platform": "天猫",
        "avgPrice": 58,
        "sales": 77192,
        "revenue": 4477136
      },
      {
        "platform": "京东",
        "avgPrice": 66.7,
        "sales": 17605,
        "revenue": 1174254
      },
      {
        "platform": "抖音",
        "avgPrice": 58,
        "sales": 56040,
        "revenue": 3250320
      },
      {
        "platform": "拼多多",
        "avgPrice": 40.6,
        "sales": 32210,
        "revenue": 1307726
      }
    ]
  },
  {
    "name": "得力 可调节桌面架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.6,
        "sales": 77977,
        "revenue": 1918234
      },
      {
        "platform": "天猫",
        "avgPrice": 24.6,
        "sales": 29647,
        "revenue": 729316
      },
      {
        "platform": "京东",
        "avgPrice": 28.3,
        "sales": 75492,
        "revenue": 2136424
      },
      {
        "platform": "抖音",
        "avgPrice": 24.6,
        "sales": 5768,
        "revenue": 141893
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.2,
        "sales": 80784,
        "revenue": 1389485
      }
    ]
  },
  {
    "name": "晨光 桌上小书架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 74.1,
        "sales": 33585,
        "revenue": 2488649
      },
      {
        "platform": "天猫",
        "avgPrice": 74.1,
        "sales": 87931,
        "revenue": 6515687
      },
      {
        "platform": "京东",
        "avgPrice": 85.2,
        "sales": 15817,
        "revenue": 1347608
      },
      {
        "platform": "抖音",
        "avgPrice": 74.1,
        "sales": 22387,
        "revenue": 1658877
      },
      {
        "platform": "拼多多",
        "avgPrice": 51.9,
        "sales": 33235,
        "revenue": 1724897
      }
    ]
  },
  {
    "name": "宜家 杂志收纳架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 62.3,
        "sales": 76803,
        "revenue": 4784827
      },
      {
        "platform": "天猫",
        "avgPrice": 62.3,
        "sales": 12430,
        "revenue": 774389
      },
      {
        "platform": "京东",
        "avgPrice": 71.6,
        "sales": 74307,
        "revenue": 5320381
      },
      {
        "platform": "抖音",
        "avgPrice": 62.3,
        "sales": 65581,
        "revenue": 4085696
      },
      {
        "platform": "拼多多",
        "avgPrice": 43.6,
        "sales": 78060,
        "revenue": 3403416
      }
    ]
  },
  {
    "name": "纽赛 显示器增高收纳",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 71,
        "sales": 26964,
        "revenue": 1914444
      },
      {
        "platform": "天猫",
        "avgPrice": 71,
        "sales": 86238,
        "revenue": 6122898
      },
      {
        "platform": "京东",
        "avgPrice": 81.6,
        "sales": 85591,
        "revenue": 6984226
      },
      {
        "platform": "抖音",
        "avgPrice": 71,
        "sales": 48420,
        "revenue": 3437820
      },
      {
        "platform": "拼多多",
        "avgPrice": 49.7,
        "sales": 28717,
        "revenue": 1427235
      }
    ]
  },
  {
    "name": "纽赛 多功能桌面架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25,
        "sales": 17116,
        "revenue": 427900
      },
      {
        "platform": "天猫",
        "avgPrice": 25,
        "sales": 35054,
        "revenue": 876350
      },
      {
        "platform": "京东",
        "avgPrice": 28.7,
        "sales": 44062,
        "revenue": 1264579
      },
      {
        "platform": "抖音",
        "avgPrice": 25,
        "sales": 78608,
        "revenue": 1965200
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.5,
        "sales": 9631,
        "revenue": 168543
      }
    ]
  },
  {
    "name": "得力 热敏打印机 学生",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 199.3,
        "sales": 36703,
        "revenue": 7314908
      },
      {
        "platform": "天猫",
        "avgPrice": 199.3,
        "sales": 17537,
        "revenue": 3495124
      },
      {
        "platform": "京东",
        "avgPrice": 229.2,
        "sales": 21473,
        "revenue": 4921612
      },
      {
        "platform": "抖音",
        "avgPrice": 199.3,
        "sales": 5833,
        "revenue": 1162517
      },
      {
        "platform": "拼多多",
        "avgPrice": 139.5,
        "sales": 49599,
        "revenue": 6919061
      }
    ]
  },
  {
    "name": "小猿 错题打印机 高清",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 100.1,
        "sales": 36404,
        "revenue": 3644040
      },
      {
        "platform": "天猫",
        "avgPrice": 100.1,
        "sales": 47266,
        "revenue": 4731327
      },
      {
        "platform": "京东",
        "avgPrice": 115.1,
        "sales": 7025,
        "revenue": 808578
      },
      {
        "platform": "抖音",
        "avgPrice": 100.1,
        "sales": 37354,
        "revenue": 3739135
      },
      {
        "platform": "拼多多",
        "avgPrice": 70.1,
        "sales": 8933,
        "revenue": 626203
      }
    ]
  },
  {
    "name": "小猿 拍照打印机 作业",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 126.3,
        "sales": 10169,
        "revenue": 1284345
      },
      {
        "platform": "天猫",
        "avgPrice": 126.3,
        "sales": 6595,
        "revenue": 832949
      },
      {
        "platform": "京东",
        "avgPrice": 145.2,
        "sales": 27823,
        "revenue": 4039900
      },
      {
        "platform": "抖音",
        "avgPrice": 126.3,
        "sales": 7847,
        "revenue": 991076
      },
      {
        "platform": "拼多多",
        "avgPrice": 88.4,
        "sales": 26228,
        "revenue": 2318555
      }
    ]
  },
  {
    "name": "作业帮 标签打印一体机",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 91.3,
        "sales": 19496,
        "revenue": 1779985
      },
      {
        "platform": "天猫",
        "avgPrice": 91.3,
        "sales": 36387,
        "revenue": 3322133
      },
      {
        "platform": "京东",
        "avgPrice": 105,
        "sales": 19575,
        "revenue": 2055375
      },
      {
        "platform": "抖音",
        "avgPrice": 91.3,
        "sales": 25965,
        "revenue": 2370605
      },
      {
        "platform": "拼多多",
        "avgPrice": 63.9,
        "sales": 41382,
        "revenue": 2644310
      }
    ]
  },
  {
    "name": "作业帮 错题本打印机 A4",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 215.6,
        "sales": 3860,
        "revenue": 832216
      },
      {
        "platform": "天猫",
        "avgPrice": 215.6,
        "sales": 12046,
        "revenue": 2597118
      },
      {
        "platform": "京东",
        "avgPrice": 247.9,
        "sales": 5312,
        "revenue": 1316845
      },
      {
        "platform": "抖音",
        "avgPrice": 215.6,
        "sales": 14959,
        "revenue": 3225160
      },
      {
        "platform": "拼多多",
        "avgPrice": 150.9,
        "sales": 19999,
        "revenue": 3017849
      }
    ]
  },
  {
    "name": "作业帮 便携打印机 墨盒",
    "category": "错题打印机",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 289.6,
        "sales": 46214,
        "revenue": 13383574
      },
      {
        "platform": "天猫",
        "avgPrice": 289.6,
        "sales": 39431,
        "revenue": 11419218
      },
      {
        "platform": "京东",
        "avgPrice": 333,
        "sales": 38354,
        "revenue": 12771882
      },
      {
        "platform": "抖音",
        "avgPrice": 289.6,
        "sales": 47510,
        "revenue": 13758896
      },
      {
        "platform": "拼多多",
        "avgPrice": 202.7,
        "sales": 3354,
        "revenue": 679856
      }
    ]
  },
  {
    "name": "欧普 智能调光台灯",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 252.3,
        "sales": 34233,
        "revenue": 8636986
      },
      {
        "platform": "天猫",
        "avgPrice": 252.3,
        "sales": 31430,
        "revenue": 7929789
      },
      {
        "platform": "京东",
        "avgPrice": 290.1,
        "sales": 26414,
        "revenue": 7662701
      },
      {
        "platform": "抖音",
        "avgPrice": 252.3,
        "sales": 22157,
        "revenue": 5590211
      },
      {
        "platform": "拼多多",
        "avgPrice": 176.6,
        "sales": 27377,
        "revenue": 4834778
      }
    ]
  },
  {
    "name": "飞利浦 无频闪护眼灯",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 74.8,
        "sales": 23796,
        "revenue": 1779941
      },
      {
        "platform": "天猫",
        "avgPrice": 74.8,
        "sales": 24812,
        "revenue": 1855938
      },
      {
        "platform": "京东",
        "avgPrice": 86,
        "sales": 15616,
        "revenue": 1342976
      },
      {
        "platform": "抖音",
        "avgPrice": 74.8,
        "sales": 19541,
        "revenue": 1461667
      },
      {
        "platform": "拼多多",
        "avgPrice": 52.4,
        "sales": 16330,
        "revenue": 855692
      }
    ]
  },
  {
    "name": "飞利浦 全光谱台灯",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 286.7,
        "sales": 38701,
        "revenue": 11095577
      },
      {
        "platform": "天猫",
        "avgPrice": 286.7,
        "sales": 9555,
        "revenue": 2739419
      },
      {
        "platform": "京东",
        "avgPrice": 329.7,
        "sales": 37186,
        "revenue": 12260224
      },
      {
        "platform": "抖音",
        "avgPrice": 286.7,
        "sales": 39891,
        "revenue": 11436750
      },
      {
        "platform": "拼多多",
        "avgPrice": 200.7,
        "sales": 27136,
        "revenue": 5446195
      }
    ]
  },
  {
    "name": "飞利浦 折叠台灯 便携",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 223.9,
        "sales": 34684,
        "revenue": 7765748
      },
      {
        "platform": "天猫",
        "avgPrice": 223.9,
        "sales": 15134,
        "revenue": 3388503
      },
      {
        "platform": "京东",
        "avgPrice": 257.5,
        "sales": 35889,
        "revenue": 9241418
      },
      {
        "platform": "抖音",
        "avgPrice": 223.9,
        "sales": 12725,
        "revenue": 2849128
      },
      {
        "platform": "拼多多",
        "avgPrice": 156.7,
        "sales": 31598,
        "revenue": 4951407
      }
    ]
  },
  {
    "name": "欧普 触控台灯",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 249.4,
        "sales": 31632,
        "revenue": 7889021
      },
      {
        "platform": "天猫",
        "avgPrice": 249.4,
        "sales": 18871,
        "revenue": 4706427
      },
      {
        "platform": "京东",
        "avgPrice": 286.8,
        "sales": 8549,
        "revenue": 2451853
      },
      {
        "platform": "抖音",
        "avgPrice": 249.4,
        "sales": 39822,
        "revenue": 9931607
      },
      {
        "platform": "拼多多",
        "avgPrice": 174.6,
        "sales": 19284,
        "revenue": 3366986
      }
    ]
  },
  {
    "name": "欧普 阅读台灯 防蓝光",
    "category": "护眼台灯",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 346.6,
        "sales": 28580,
        "revenue": 9905828
      },
      {
        "platform": "天猫",
        "avgPrice": 346.6,
        "sales": 10137,
        "revenue": 3513484
      },
      {
        "platform": "京东",
        "avgPrice": 398.6,
        "sales": 4544,
        "revenue": 1811238
      },
      {
        "platform": "抖音",
        "avgPrice": 346.6,
        "sales": 4010,
        "revenue": 1389866
      },
      {
        "platform": "拼多多",
        "avgPrice": 242.6,
        "sales": 38336,
        "revenue": 9300314
      }
    ]
  },
  {
    "name": "得力 磨砂包书膜",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.2,
        "sales": 243226,
        "revenue": 4183487
      },
      {
        "platform": "天猫",
        "avgPrice": 17.2,
        "sales": 68460,
        "revenue": 1177512
      },
      {
        "platform": "京东",
        "avgPrice": 19.8,
        "sales": 220054,
        "revenue": 4357069
      },
      {
        "platform": "抖音",
        "avgPrice": 17.2,
        "sales": 244181,
        "revenue": 4199913
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 91662,
        "revenue": 1099944
      }
    ]
  },
  {
    "name": "广博 16K书皮 小学生",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.8,
        "sales": 112148,
        "revenue": 650458
      },
      {
        "platform": "天猫",
        "avgPrice": 5.8,
        "sales": 70748,
        "revenue": 410338
      },
      {
        "platform": "京东",
        "avgPrice": 6.7,
        "sales": 155126,
        "revenue": 1039344
      },
      {
        "platform": "抖音",
        "avgPrice": 5.8,
        "sales": 53344,
        "revenue": 309395
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.1,
        "sales": 154657,
        "revenue": 634094
      }
    ]
  },
  {
    "name": "得力 包书纸 花色",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.2,
        "sales": 197654,
        "revenue": 1620763
      },
      {
        "platform": "天猫",
        "avgPrice": 8.2,
        "sales": 80298,
        "revenue": 658444
      },
      {
        "platform": "京东",
        "avgPrice": 9.4,
        "sales": 90139,
        "revenue": 847307
      },
      {
        "platform": "抖音",
        "avgPrice": 8.2,
        "sales": 224382,
        "revenue": 1839932
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.7,
        "sales": 205458,
        "revenue": 1171111
      }
    ]
  },
  {
    "name": "齐心 自粘书套 免裁剪",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.2,
        "sales": 99992,
        "revenue": 2419806
      },
      {
        "platform": "天猫",
        "avgPrice": 24.2,
        "sales": 237206,
        "revenue": 5740385
      },
      {
        "platform": "京东",
        "avgPrice": 27.8,
        "sales": 114900,
        "revenue": 3194220
      },
      {
        "platform": "抖音",
        "avgPrice": 24.2,
        "sales": 23704,
        "revenue": 573637
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.9,
        "sales": 186362,
        "revenue": 3149518
      }
    ]
  },
  {
    "name": "得力 透明书皮 加厚",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.3,
        "sales": 139409,
        "revenue": 2132958
      },
      {
        "platform": "天猫",
        "avgPrice": 15.3,
        "sales": 171373,
        "revenue": 2622007
      },
      {
        "platform": "京东",
        "avgPrice": 17.6,
        "sales": 73921,
        "revenue": 1301010
      },
      {
        "platform": "抖音",
        "avgPrice": 15.3,
        "sales": 187948,
        "revenue": 2875604
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.7,
        "sales": 136855,
        "revenue": 1464349
      }
    ]
  },
  {
    "name": "得力 课本书套 防水",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.7,
        "sales": 123860,
        "revenue": 2440042
      },
      {
        "platform": "天猫",
        "avgPrice": 19.7,
        "sales": 158509,
        "revenue": 3122627
      },
      {
        "platform": "京东",
        "avgPrice": 22.7,
        "sales": 92840,
        "revenue": 2107468
      },
      {
        "platform": "抖音",
        "avgPrice": 19.7,
        "sales": 40276,
        "revenue": 793437
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.8,
        "sales": 227100,
        "revenue": 3133980
      }
    ]
  },
  {
    "name": "鲁本斯 油画颜料 24色",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 89,
        "sales": 7616,
        "revenue": 677824
      },
      {
        "platform": "天猫",
        "avgPrice": 89,
        "sales": 35270,
        "revenue": 3139030
      },
      {
        "platform": "京东",
        "avgPrice": 102.3,
        "sales": 8280,
        "revenue": 847044
      },
      {
        "platform": "抖音",
        "avgPrice": 89,
        "sales": 23338,
        "revenue": 2077082
      },
      {
        "platform": "拼多多",
        "avgPrice": 62.3,
        "sales": 49699,
        "revenue": 3096248
      }
    ]
  },
  {
    "name": "樱花 水粉颜料 果冻",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.8,
        "sales": 15443,
        "revenue": 290328
      },
      {
        "platform": "天猫",
        "avgPrice": 18.8,
        "sales": 44592,
        "revenue": 838330
      },
      {
        "platform": "京东",
        "avgPrice": 21.6,
        "sales": 43025,
        "revenue": 929340
      },
      {
        "platform": "抖音",
        "avgPrice": 18.8,
        "sales": 44326,
        "revenue": 833329
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.2,
        "sales": 41931,
        "revenue": 553489
      }
    ]
  },
  {
    "name": "青竹 手指画颜料 儿童",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 88.9,
        "sales": 30712,
        "revenue": 2730297
      },
      {
        "platform": "天猫",
        "avgPrice": 88.9,
        "sales": 20792,
        "revenue": 1848409
      },
      {
        "platform": "京东",
        "avgPrice": 102.2,
        "sales": 36630,
        "revenue": 3743586
      },
      {
        "platform": "抖音",
        "avgPrice": 88.9,
        "sales": 39891,
        "revenue": 3546310
      },
      {
        "platform": "拼多多",
        "avgPrice": 62.2,
        "sales": 48523,
        "revenue": 3018131
      }
    ]
  },
  {
    "name": "鲁本斯 纺织颜料 手绘",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 64,
        "sales": 43750,
        "revenue": 2800000
      },
      {
        "platform": "天猫",
        "avgPrice": 64,
        "sales": 29469,
        "revenue": 1886016
      },
      {
        "platform": "京东",
        "avgPrice": 73.6,
        "sales": 48182,
        "revenue": 3546195
      },
      {
        "platform": "抖音",
        "avgPrice": 64,
        "sales": 41129,
        "revenue": 2632256
      },
      {
        "platform": "拼多多",
        "avgPrice": 44.8,
        "sales": 35218,
        "revenue": 1577766
      }
    ]
  },
  {
    "name": "鲁本斯 颜料画笔套装",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 68.5,
        "sales": 16393,
        "revenue": 1122921
      },
      {
        "platform": "天猫",
        "avgPrice": 68.5,
        "sales": 45389,
        "revenue": 3109147
      },
      {
        "platform": "京东",
        "avgPrice": 78.8,
        "sales": 19520,
        "revenue": 1538176
      },
      {
        "platform": "抖音",
        "avgPrice": 68.5,
        "sales": 25405,
        "revenue": 1740243
      },
      {
        "platform": "拼多多",
        "avgPrice": 47.9,
        "sales": 31057,
        "revenue": 1487630
      }
    ]
  },
  {
    "name": "鲁本斯 固体水彩 便携",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 85.8,
        "sales": 14051,
        "revenue": 1205576
      },
      {
        "platform": "天猫",
        "avgPrice": 85.8,
        "sales": 4337,
        "revenue": 372115
      },
      {
        "platform": "京东",
        "avgPrice": 98.7,
        "sales": 32175,
        "revenue": 3175673
      },
      {
        "platform": "抖音",
        "avgPrice": 85.8,
        "sales": 11828,
        "revenue": 1014842
      },
      {
        "platform": "拼多多",
        "avgPrice": 60.1,
        "sales": 42953,
        "revenue": 2581475
      }
    ]
  },
  {
    "name": "得力 文件夹 A4双夹",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 42.1,
        "sales": 40763,
        "revenue": 1716122
      },
      {
        "platform": "天猫",
        "avgPrice": 42.1,
        "sales": 29541,
        "revenue": 1243676
      },
      {
        "platform": "京东",
        "avgPrice": 48.4,
        "sales": 58647,
        "revenue": 2838515
      },
      {
        "platform": "抖音",
        "avgPrice": 42.1,
        "sales": 134517,
        "revenue": 5663166
      },
      {
        "platform": "拼多多",
        "avgPrice": 29.5,
        "sales": 102197,
        "revenue": 3014812
      }
    ]
  },
  {
    "name": "得力 剪刀 安全圆头",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.5,
        "sales": 25366,
        "revenue": 114147
      },
      {
        "platform": "天猫",
        "avgPrice": 4.5,
        "sales": 84101,
        "revenue": 378455
      },
      {
        "platform": "京东",
        "avgPrice": 5.2,
        "sales": 24075,
        "revenue": 125190
      },
      {
        "platform": "抖音",
        "avgPrice": 4.5,
        "sales": 92949,
        "revenue": 418271
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.1,
        "sales": 17789,
        "revenue": 55146
      }
    ]
  },
  {
    "name": "广博 胶棒 固体胶",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.2,
        "sales": 65678,
        "revenue": 735594
      },
      {
        "platform": "天猫",
        "avgPrice": 11.2,
        "sales": 76573,
        "revenue": 857618
      },
      {
        "platform": "京东",
        "avgPrice": 12.9,
        "sales": 24697,
        "revenue": 318591
      },
      {
        "platform": "抖音",
        "avgPrice": 11.2,
        "sales": 104717,
        "revenue": 1172830
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.8,
        "sales": 26866,
        "revenue": 209555
      }
    ]
  },
  {
    "name": "可得优 双面胶 强力",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 53.8,
        "sales": 61502,
        "revenue": 3308808
      },
      {
        "platform": "天猫",
        "avgPrice": 53.8,
        "sales": 34488,
        "revenue": 1855454
      },
      {
        "platform": "京东",
        "avgPrice": 61.9,
        "sales": 79154,
        "revenue": 4899633
      },
      {
        "platform": "抖音",
        "avgPrice": 53.8,
        "sales": 91550,
        "revenue": 4925390
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.7,
        "sales": 99489,
        "revenue": 3750735
      }
    ]
  },
  {
    "name": "晨光 透明胶带 封箱",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.1,
        "sales": 14711,
        "revenue": 398668
      },
      {
        "platform": "天猫",
        "avgPrice": 27.1,
        "sales": 28508,
        "revenue": 772567
      },
      {
        "platform": "京东",
        "avgPrice": 31.2,
        "sales": 72768,
        "revenue": 2270362
      },
      {
        "platform": "抖音",
        "avgPrice": 27.1,
        "sales": 39662,
        "revenue": 1074840
      },
      {
        "platform": "拼多多",
        "avgPrice": 19,
        "sales": 104230,
        "revenue": 1980370
      }
    ]
  },
  {
    "name": "晨光 美工刀 自动锁",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32,
        "sales": 9990,
        "revenue": 319680
      },
      {
        "platform": "天猫",
        "avgPrice": 32,
        "sales": 71918,
        "revenue": 2301376
      },
      {
        "platform": "京东",
        "avgPrice": 36.8,
        "sales": 137346,
        "revenue": 5054333
      },
      {
        "platform": "抖音",
        "avgPrice": 32,
        "sales": 46801,
        "revenue": 1497632
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.4,
        "sales": 121459,
        "revenue": 2720682
      }
    ]
  },
  {
    "name": "英雄 彩笔套装 150件",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 155.1,
        "sales": 19559,
        "revenue": 3033601
      },
      {
        "platform": "天猫",
        "avgPrice": 155.1,
        "sales": 31425,
        "revenue": 4874018
      },
      {
        "platform": "京东",
        "avgPrice": 178.4,
        "sales": 30818,
        "revenue": 5497931
      },
      {
        "platform": "抖音",
        "avgPrice": 155.1,
        "sales": 19340,
        "revenue": 2999634
      },
      {
        "platform": "拼多多",
        "avgPrice": 108.6,
        "sales": 18432,
        "revenue": 2001715
      }
    ]
  },
  {
    "name": "英雄 文具笔礼盒",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.5,
        "sales": 48468,
        "revenue": 1575210
      },
      {
        "platform": "天猫",
        "avgPrice": 32.5,
        "sales": 11476,
        "revenue": 372970
      },
      {
        "platform": "京东",
        "avgPrice": 37.4,
        "sales": 20025,
        "revenue": 748935
      },
      {
        "platform": "抖音",
        "avgPrice": 32.5,
        "sales": 17640,
        "revenue": 573300
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.8,
        "sales": 16929,
        "revenue": 385981
      }
    ]
  },
  {
    "name": "得力 画笔套装 水彩",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 137.6,
        "sales": 13074,
        "revenue": 1798982
      },
      {
        "platform": "天猫",
        "avgPrice": 137.6,
        "sales": 30257,
        "revenue": 4163363
      },
      {
        "platform": "京东",
        "avgPrice": 158.2,
        "sales": 26835,
        "revenue": 4245297
      },
      {
        "platform": "抖音",
        "avgPrice": 137.6,
        "sales": 29920,
        "revenue": 4116992
      },
      {
        "platform": "拼多多",
        "avgPrice": 96.3,
        "sales": 16387,
        "revenue": 1578068
      }
    ]
  },
  {
    "name": "得力 毛笔套装 书法",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 93.9,
        "sales": 44252,
        "revenue": 4155263
      },
      {
        "platform": "天猫",
        "avgPrice": 93.9,
        "sales": 40523,
        "revenue": 3805110
      },
      {
        "platform": "京东",
        "avgPrice": 108,
        "sales": 4587,
        "revenue": 495396
      },
      {
        "platform": "抖音",
        "avgPrice": 93.9,
        "sales": 19905,
        "revenue": 1869080
      },
      {
        "platform": "拼多多",
        "avgPrice": 65.7,
        "sales": 31108,
        "revenue": 2043796
      }
    ]
  },
  {
    "name": "毕加索 签字笔礼盒",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 94.8,
        "sales": 40415,
        "revenue": 3831342
      },
      {
        "platform": "天猫",
        "avgPrice": 94.8,
        "sales": 20617,
        "revenue": 1954492
      },
      {
        "platform": "京东",
        "avgPrice": 109,
        "sales": 28992,
        "revenue": 3160128
      },
      {
        "platform": "抖音",
        "avgPrice": 94.8,
        "sales": 48036,
        "revenue": 4553813
      },
      {
        "platform": "拼多多",
        "avgPrice": 66.4,
        "sales": 38429,
        "revenue": 2551686
      }
    ]
  },
  {
    "name": "毕加索 学生笔类大礼包",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 98.4,
        "sales": 39609,
        "revenue": 3897526
      },
      {
        "platform": "天猫",
        "avgPrice": 98.4,
        "sales": 43608,
        "revenue": 4291027
      },
      {
        "platform": "京东",
        "avgPrice": 113.2,
        "sales": 12389,
        "revenue": 1402435
      },
      {
        "platform": "抖音",
        "avgPrice": 98.4,
        "sales": 19373,
        "revenue": 1906303
      },
      {
        "platform": "拼多多",
        "avgPrice": 68.9,
        "sales": 38020,
        "revenue": 2619578
      }
    ]
  },
  {
    "name": "晨光生活馆 设计感便签",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 64.6,
        "sales": 25530,
        "revenue": 1649238
      },
      {
        "platform": "天猫",
        "avgPrice": 64.6,
        "sales": 6002,
        "revenue": 387729
      },
      {
        "platform": "京东",
        "avgPrice": 74.3,
        "sales": 42087,
        "revenue": 3127064
      },
      {
        "platform": "抖音",
        "avgPrice": 64.6,
        "sales": 40842,
        "revenue": 2638393
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.2,
        "sales": 49799,
        "revenue": 2250915
      }
    ]
  },
  {
    "name": "晨光生活馆 创意笔筒 北欧",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13,
        "sales": 41481,
        "revenue": 539253
      },
      {
        "platform": "天猫",
        "avgPrice": 13,
        "sales": 41918,
        "revenue": 544934
      },
      {
        "platform": "京东",
        "avgPrice": 14.9,
        "sales": 32025,
        "revenue": 477173
      },
      {
        "platform": "抖音",
        "avgPrice": 13,
        "sales": 4297,
        "revenue": 55861
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.1,
        "sales": 27928,
        "revenue": 254145
      }
    ]
  },
  {
    "name": "九木杂物社 手绘明信片套装",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.8,
        "sales": 4255,
        "revenue": 88504
      },
      {
        "platform": "天猫",
        "avgPrice": 20.8,
        "sales": 34989,
        "revenue": 727771
      },
      {
        "platform": "京东",
        "avgPrice": 23.9,
        "sales": 45437,
        "revenue": 1085944
      },
      {
        "platform": "抖音",
        "avgPrice": 20.8,
        "sales": 24935,
        "revenue": 518648
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.6,
        "sales": 23819,
        "revenue": 347757
      }
    ]
  },
  {
    "name": "MUJI 复古文具",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 69.4,
        "sales": 21003,
        "revenue": 1457608
      },
      {
        "platform": "天猫",
        "avgPrice": 69.4,
        "sales": 22551,
        "revenue": 1565039
      },
      {
        "platform": "京东",
        "avgPrice": 79.8,
        "sales": 29789,
        "revenue": 2377162
      },
      {
        "platform": "抖音",
        "avgPrice": 69.4,
        "sales": 9293,
        "revenue": 644934
      },
      {
        "platform": "拼多多",
        "avgPrice": 48.6,
        "sales": 29054,
        "revenue": 1412024
      }
    ]
  },
  {
    "name": "MUJI 国潮文具套装",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 35.1,
        "sales": 28926,
        "revenue": 1015303
      },
      {
        "platform": "天猫",
        "avgPrice": 35.1,
        "sales": 31731,
        "revenue": 1113758
      },
      {
        "platform": "京东",
        "avgPrice": 40.4,
        "sales": 33728,
        "revenue": 1362611
      },
      {
        "platform": "抖音",
        "avgPrice": 35.1,
        "sales": 35852,
        "revenue": 1258405
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.6,
        "sales": 42116,
        "revenue": 1036054
      }
    ]
  },
  {
    "name": "kinbor 治愈系文具",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32,
        "sales": 28888,
        "revenue": 924416
      },
      {
        "platform": "天猫",
        "avgPrice": 32,
        "sales": 16243,
        "revenue": 519776
      },
      {
        "platform": "京东",
        "avgPrice": 36.8,
        "sales": 25996,
        "revenue": 956653
      },
      {
        "platform": "抖音",
        "avgPrice": 32,
        "sales": 23145,
        "revenue": 740640
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.4,
        "sales": 35553,
        "revenue": 796387
      }
    ]
  },
  {
    "name": "兄弟 幼儿园名字贴",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 83.4,
        "sales": 38155,
        "revenue": 3182127
      },
      {
        "platform": "天猫",
        "avgPrice": 83.4,
        "sales": 33525,
        "revenue": 2795985
      },
      {
        "platform": "京东",
        "avgPrice": 95.9,
        "sales": 8463,
        "revenue": 811602
      },
      {
        "platform": "抖音",
        "avgPrice": 83.4,
        "sales": 19075,
        "revenue": 1590855
      },
      {
        "platform": "拼多多",
        "avgPrice": 58.4,
        "sales": 41302,
        "revenue": 2412037
      }
    ]
  },
  {
    "name": "晨光 衣物姓名标",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.7,
        "sales": 41690,
        "revenue": 362703
      },
      {
        "platform": "天猫",
        "avgPrice": 8.7,
        "sales": 30903,
        "revenue": 268856
      },
      {
        "platform": "京东",
        "avgPrice": 10,
        "sales": 52945,
        "revenue": 529450
      },
      {
        "platform": "抖音",
        "avgPrice": 8.7,
        "sales": 45776,
        "revenue": 398251
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.1,
        "sales": 46925,
        "revenue": 286243
      }
    ]
  },
  {
    "name": "晨光 开学姓名贴 定制",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 64.7,
        "sales": 51068,
        "revenue": 3304100
      },
      {
        "platform": "天猫",
        "avgPrice": 64.7,
        "sales": 47862,
        "revenue": 3096671
      },
      {
        "platform": "京东",
        "avgPrice": 74.4,
        "sales": 21078,
        "revenue": 1568203
      },
      {
        "platform": "抖音",
        "avgPrice": 64.7,
        "sales": 24515,
        "revenue": 1586121
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.3,
        "sales": 37860,
        "revenue": 1715058
      }
    ]
  },
  {
    "name": "兄弟 烫印姓名贴",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.1,
        "sales": 53805,
        "revenue": 2049971
      },
      {
        "platform": "天猫",
        "avgPrice": 38.1,
        "sales": 6363,
        "revenue": 242430
      },
      {
        "platform": "京东",
        "avgPrice": 43.8,
        "sales": 10394,
        "revenue": 455257
      },
      {
        "platform": "抖音",
        "avgPrice": 38.1,
        "sales": 54900,
        "revenue": 2091690
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.7,
        "sales": 32839,
        "revenue": 876801
      }
    ]
  },
  {
    "name": "精臣 硅胶姓名扣",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 35.4,
        "sales": 21548,
        "revenue": 762799
      },
      {
        "platform": "天猫",
        "avgPrice": 35.4,
        "sales": 51551,
        "revenue": 1824905
      },
      {
        "platform": "京东",
        "avgPrice": 40.7,
        "sales": 46378,
        "revenue": 1887585
      },
      {
        "platform": "抖音",
        "avgPrice": 35.4,
        "sales": 28905,
        "revenue": 1023237
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.8,
        "sales": 55043,
        "revenue": 1365066
      }
    ]
  },
  {
    "name": "得力 校服姓名标签",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.2,
        "sales": 22410,
        "revenue": 564732
      },
      {
        "platform": "天猫",
        "avgPrice": 25.2,
        "sales": 43325,
        "revenue": 1091790
      },
      {
        "platform": "京东",
        "avgPrice": 29,
        "sales": 47722,
        "revenue": 1383938
      },
      {
        "platform": "抖音",
        "avgPrice": 25.2,
        "sales": 32744,
        "revenue": 825149
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.6,
        "sales": 40027,
        "revenue": 704475
      }
    ]
  },
  {
    "name": "得力 电动橡皮 替芯装",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 44.6,
        "sales": 45206,
        "revenue": 2016188
      },
      {
        "platform": "天猫",
        "avgPrice": 44.6,
        "sales": 59005,
        "revenue": 2631623
      },
      {
        "platform": "京东",
        "avgPrice": 51.3,
        "sales": 21770,
        "revenue": 1116801
      },
      {
        "platform": "抖音",
        "avgPrice": 44.6,
        "sales": 44465,
        "revenue": 1983139
      },
      {
        "platform": "拼多多",
        "avgPrice": 31.2,
        "sales": 22841,
        "revenue": 712639
      }
    ]
  },
  {
    "name": "樱花 USB充电橡皮擦",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.1,
        "sales": 33440,
        "revenue": 504944
      },
      {
        "platform": "天猫",
        "avgPrice": 15.1,
        "sales": 11351,
        "revenue": 171400
      },
      {
        "platform": "京东",
        "avgPrice": 17.4,
        "sales": 11615,
        "revenue": 202101
      },
      {
        "platform": "抖音",
        "avgPrice": 15.1,
        "sales": 30020,
        "revenue": 453302
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.6,
        "sales": 59913,
        "revenue": 635078
      }
    ]
  },
  {
    "name": "樱花 高光电动橡皮",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.9,
        "sales": 40654,
        "revenue": 768361
      },
      {
        "platform": "天猫",
        "avgPrice": 18.9,
        "sales": 53451,
        "revenue": 1010224
      },
      {
        "platform": "京东",
        "avgPrice": 21.7,
        "sales": 43045,
        "revenue": 934077
      },
      {
        "platform": "抖音",
        "avgPrice": 18.9,
        "sales": 18628,
        "revenue": 352069
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.2,
        "sales": 46636,
        "revenue": 615595
      }
    ]
  },
  {
    "name": "辉柏嘉 自动橡皮擦 笔形",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 42.4,
        "sales": 26352,
        "revenue": 1117325
      },
      {
        "platform": "天猫",
        "avgPrice": 42.4,
        "sales": 40640,
        "revenue": 1723136
      },
      {
        "platform": "京东",
        "avgPrice": 48.8,
        "sales": 40154,
        "revenue": 1959515
      },
      {
        "platform": "抖音",
        "avgPrice": 42.4,
        "sales": 42368,
        "revenue": 1796403
      },
      {
        "platform": "拼多多",
        "avgPrice": 29.7,
        "sales": 30413,
        "revenue": 903266
      }
    ]
  },
  {
    "name": "晨光 电动橡皮 细节擦除",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.8,
        "sales": 7981,
        "revenue": 189948
      },
      {
        "platform": "天猫",
        "avgPrice": 23.8,
        "sales": 9175,
        "revenue": 218365
      },
      {
        "platform": "京东",
        "avgPrice": 27.4,
        "sales": 51970,
        "revenue": 1423978
      },
      {
        "platform": "抖音",
        "avgPrice": 23.8,
        "sales": 14517,
        "revenue": 345505
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 59395,
        "revenue": 991897
      }
    ]
  },
  {
    "name": "辉柏嘉 素描电动橡皮套装",
    "category": "电动橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.7,
        "sales": 9750,
        "revenue": 172575
      },
      {
        "platform": "天猫",
        "avgPrice": 17.7,
        "sales": 11011,
        "revenue": 194895
      },
      {
        "platform": "京东",
        "avgPrice": 20.4,
        "sales": 8290,
        "revenue": 169116
      },
      {
        "platform": "抖音",
        "avgPrice": 17.7,
        "sales": 37198,
        "revenue": 658405
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.4,
        "sales": 37114,
        "revenue": 460214
      }
    ]
  },
  {
    "name": "DIY乐园 咕卡贴纸 闪钻",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 54.8,
        "sales": 65165,
        "revenue": 3571042
      },
      {
        "platform": "天猫",
        "avgPrice": 54.8,
        "sales": 35603,
        "revenue": 1951044
      },
      {
        "platform": "京东",
        "avgPrice": 63,
        "sales": 43341,
        "revenue": 2730483
      },
      {
        "platform": "抖音",
        "avgPrice": 54.8,
        "sales": 17019,
        "revenue": 932641
      },
      {
        "platform": "拼多多",
        "avgPrice": 38.4,
        "sales": 74848,
        "revenue": 2874163
      }
    ]
  },
  {
    "name": "咕卡星球 拼豆豆 补充装",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 58.8,
        "sales": 30781,
        "revenue": 1809923
      },
      {
        "platform": "天猫",
        "avgPrice": 58.8,
        "sales": 58866,
        "revenue": 3461321
      },
      {
        "platform": "京东",
        "avgPrice": 67.6,
        "sales": 31538,
        "revenue": 2131969
      },
      {
        "platform": "抖音",
        "avgPrice": 58.8,
        "sales": 16903,
        "revenue": 993896
      },
      {
        "platform": "拼多多",
        "avgPrice": 41.2,
        "sales": 20889,
        "revenue": 860627
      }
    ]
  },
  {
    "name": "创意工坊 迷你咕卡材料包",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 39.8,
        "sales": 37196,
        "revenue": 1480401
      },
      {
        "platform": "天猫",
        "avgPrice": 39.8,
        "sales": 73779,
        "revenue": 2936404
      },
      {
        "platform": "京东",
        "avgPrice": 45.8,
        "sales": 10866,
        "revenue": 497663
      },
      {
        "platform": "抖音",
        "avgPrice": 39.8,
        "sales": 14968,
        "revenue": 595726
      },
      {
        "platform": "拼多多",
        "avgPrice": 27.9,
        "sales": 69172,
        "revenue": 1929899
      }
    ]
  },
  {
    "name": "创意工坊 拼豆镊子工具",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.6,
        "sales": 67884,
        "revenue": 1602062
      },
      {
        "platform": "天猫",
        "avgPrice": 23.6,
        "sales": 23449,
        "revenue": 553396
      },
      {
        "platform": "京东",
        "avgPrice": 27.1,
        "sales": 17094,
        "revenue": 463247
      },
      {
        "platform": "抖音",
        "avgPrice": 23.6,
        "sales": 36685,
        "revenue": 865766
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.5,
        "sales": 34334,
        "revenue": 566511
      }
    ]
  },
  {
    "name": "创意工坊 咕卡底卡 透明",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.4,
        "sales": 62188,
        "revenue": 1268635
      },
      {
        "platform": "天猫",
        "avgPrice": 20.4,
        "sales": 27110,
        "revenue": 553044
      },
      {
        "platform": "京东",
        "avgPrice": 23.5,
        "sales": 71904,
        "revenue": 1689744
      },
      {
        "platform": "抖音",
        "avgPrice": 20.4,
        "sales": 69448,
        "revenue": 1416739
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.3,
        "sales": 9261,
        "revenue": 132432
      }
    ]
  },
  {
    "name": "拼豆世界 拼豆挂件材料",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 57.5,
        "sales": 65588,
        "revenue": 3771310
      },
      {
        "platform": "天猫",
        "avgPrice": 57.5,
        "sales": 42224,
        "revenue": 2427880
      },
      {
        "platform": "京东",
        "avgPrice": 66.1,
        "sales": 29725,
        "revenue": 1964822
      },
      {
        "platform": "抖音",
        "avgPrice": 57.5,
        "sales": 51695,
        "revenue": 2972463
      },
      {
        "platform": "拼多多",
        "avgPrice": 40.3,
        "sales": 42229,
        "revenue": 1701829
      }
    ]
  },
  {
    "name": "马可 儿童彩色铅笔 24色",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 123.2,
        "sales": 59308,
        "revenue": 7306746
      },
      {
        "platform": "天猫",
        "avgPrice": 123.2,
        "sales": 54465,
        "revenue": 6710088
      },
      {
        "platform": "京东",
        "avgPrice": 141.7,
        "sales": 48384,
        "revenue": 6856013
      },
      {
        "platform": "抖音",
        "avgPrice": 123.2,
        "sales": 39745,
        "revenue": 4896584
      },
      {
        "platform": "拼多多",
        "avgPrice": 86.2,
        "sales": 41420,
        "revenue": 3570404
      }
    ]
  },
  {
    "name": "晨光 彩铅画本套装",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 126.7,
        "sales": 16938,
        "revenue": 2146045
      },
      {
        "platform": "天猫",
        "avgPrice": 126.7,
        "sales": 27746,
        "revenue": 3515418
      },
      {
        "platform": "京东",
        "avgPrice": 145.7,
        "sales": 39955,
        "revenue": 5821444
      },
      {
        "platform": "抖音",
        "avgPrice": 126.7,
        "sales": 54009,
        "revenue": 6842940
      },
      {
        "platform": "拼多多",
        "avgPrice": 88.7,
        "sales": 30390,
        "revenue": 2695593
      }
    ]
  },
  {
    "name": "辉柏嘉 金属色彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.4,
        "sales": 19826,
        "revenue": 523406
      },
      {
        "platform": "天猫",
        "avgPrice": 26.4,
        "sales": 9127,
        "revenue": 240953
      },
      {
        "platform": "京东",
        "avgPrice": 30.4,
        "sales": 31478,
        "revenue": 956931
      },
      {
        "platform": "抖音",
        "avgPrice": 26.4,
        "sales": 6854,
        "revenue": 180946
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.5,
        "sales": 8688,
        "revenue": 160728
      }
    ]
  },
  {
    "name": "得力 马克雷诺彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 100.1,
        "sales": 26945,
        "revenue": 2697195
      },
      {
        "platform": "天猫",
        "avgPrice": 100.1,
        "sales": 53694,
        "revenue": 5374769
      },
      {
        "platform": "京东",
        "avgPrice": 115.1,
        "sales": 44175,
        "revenue": 5084543
      },
      {
        "platform": "抖音",
        "avgPrice": 100.1,
        "sales": 17306,
        "revenue": 1732331
      },
      {
        "platform": "拼多多",
        "avgPrice": 70.1,
        "sales": 25560,
        "revenue": 1791756
      }
    ]
  },
  {
    "name": "MARCO 素描彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34.4,
        "sales": 36347,
        "revenue": 1250337
      },
      {
        "platform": "天猫",
        "avgPrice": 34.4,
        "sales": 35424,
        "revenue": 1218586
      },
      {
        "platform": "京东",
        "avgPrice": 39.6,
        "sales": 7655,
        "revenue": 303138
      },
      {
        "platform": "抖音",
        "avgPrice": 34.4,
        "sales": 41241,
        "revenue": 1418690
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.1,
        "sales": 12601,
        "revenue": 303684
      }
    ]
  },
  {
    "name": "辉柏嘉 彩铅收纳笔帘",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 112.3,
        "sales": 39930,
        "revenue": 4484139
      },
      {
        "platform": "天猫",
        "avgPrice": 112.3,
        "sales": 57384,
        "revenue": 6444223
      },
      {
        "platform": "京东",
        "avgPrice": 129.1,
        "sales": 40426,
        "revenue": 5218997
      },
      {
        "platform": "抖音",
        "avgPrice": 112.3,
        "sales": 46108,
        "revenue": 5177928
      },
      {
        "platform": "拼多多",
        "avgPrice": 78.6,
        "sales": 31289,
        "revenue": 2459315
      }
    ]
  },
  {
    "name": "齐心 液体粉笔 无尘",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5,
        "sales": 15625,
        "revenue": 78125
      },
      {
        "platform": "天猫",
        "avgPrice": 5,
        "sales": 36187,
        "revenue": 180935
      },
      {
        "platform": "京东",
        "avgPrice": 5.8,
        "sales": 8559,
        "revenue": 49642
      },
      {
        "platform": "抖音",
        "avgPrice": 5,
        "sales": 13772,
        "revenue": 68860
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.5,
        "sales": 33938,
        "revenue": 118783
      }
    ]
  },
  {
    "name": "晨光 白板笔 大容量",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34.5,
        "sales": 12338,
        "revenue": 425661
      },
      {
        "platform": "天猫",
        "avgPrice": 34.5,
        "sales": 11590,
        "revenue": 399855
      },
      {
        "platform": "京东",
        "avgPrice": 39.7,
        "sales": 81109,
        "revenue": 3220027
      },
      {
        "platform": "抖音",
        "avgPrice": 34.5,
        "sales": 57085,
        "revenue": 1969433
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.1,
        "sales": 64843,
        "revenue": 1562716
      }
    ]
  },
  {
    "name": "齐心 白板擦+笔套装",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.8,
        "sales": 13434,
        "revenue": 306295
      },
      {
        "platform": "天猫",
        "avgPrice": 22.8,
        "sales": 21461,
        "revenue": 489311
      },
      {
        "platform": "京东",
        "avgPrice": 26.2,
        "sales": 80078,
        "revenue": 2098044
      },
      {
        "platform": "抖音",
        "avgPrice": 22.8,
        "sales": 84652,
        "revenue": 1930066
      },
      {
        "platform": "拼多多",
        "avgPrice": 16,
        "sales": 25620,
        "revenue": 409920
      }
    ]
  },
  {
    "name": "真彩 磁吸白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.8,
        "sales": 82419,
        "revenue": 972544
      },
      {
        "platform": "天猫",
        "avgPrice": 11.8,
        "sales": 48335,
        "revenue": 570353
      },
      {
        "platform": "京东",
        "avgPrice": 13.6,
        "sales": 27091,
        "revenue": 368438
      },
      {
        "platform": "抖音",
        "avgPrice": 11.8,
        "sales": 6416,
        "revenue": 75709
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.3,
        "sales": 34202,
        "revenue": 283877
      }
    ]
  },
  {
    "name": "白雪 环保白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.9,
        "sales": 33668,
        "revenue": 299645
      },
      {
        "platform": "天猫",
        "avgPrice": 8.9,
        "sales": 72667,
        "revenue": 646736
      },
      {
        "platform": "京东",
        "avgPrice": 10.2,
        "sales": 19240,
        "revenue": 196248
      },
      {
        "platform": "抖音",
        "avgPrice": 8.9,
        "sales": 39831,
        "revenue": 354496
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.2,
        "sales": 24849,
        "revenue": 154064
      }
    ]
  },
  {
    "name": "真彩 速干白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.5,
        "sales": 40463,
        "revenue": 1112733
      },
      {
        "platform": "天猫",
        "avgPrice": 27.5,
        "sales": 37134,
        "revenue": 1021185
      },
      {
        "platform": "京东",
        "avgPrice": 31.6,
        "sales": 84693,
        "revenue": 2676299
      },
      {
        "platform": "抖音",
        "avgPrice": 27.5,
        "sales": 75717,
        "revenue": 2082218
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.3,
        "sales": 42136,
        "revenue": 813225
      }
    ]
  },
  {
    "name": "晨光 考试专用透明袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4,
        "sales": 71783,
        "revenue": 287132
      },
      {
        "platform": "天猫",
        "avgPrice": 4,
        "sales": 207339,
        "revenue": 829356
      },
      {
        "platform": "京东",
        "avgPrice": 4.6,
        "sales": 78504,
        "revenue": 361118
      },
      {
        "platform": "抖音",
        "avgPrice": 4,
        "sales": 144249,
        "revenue": 576996
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.8,
        "sales": 249992,
        "revenue": 699978
      }
    ]
  },
  {
    "name": "三木 双层拉链袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.5,
        "sales": 232797,
        "revenue": 5703527
      },
      {
        "platform": "天猫",
        "avgPrice": 24.5,
        "sales": 182849,
        "revenue": 4479801
      },
      {
        "platform": "京东",
        "avgPrice": 28.2,
        "sales": 50127,
        "revenue": 1413581
      },
      {
        "platform": "抖音",
        "avgPrice": 24.5,
        "sales": 91202,
        "revenue": 2234449
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.1,
        "sales": 234617,
        "revenue": 4011951
      }
    ]
  },
  {
    "name": "晨光 防水资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.9,
        "sales": 226703,
        "revenue": 1110845
      },
      {
        "platform": "天猫",
        "avgPrice": 4.9,
        "sales": 81916,
        "revenue": 401388
      },
      {
        "platform": "京东",
        "avgPrice": 5.6,
        "sales": 80255,
        "revenue": 449428
      },
      {
        "platform": "抖音",
        "avgPrice": 4.9,
        "sales": 210112,
        "revenue": 1029549
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.4,
        "sales": 107049,
        "revenue": 363967
      }
    ]
  },
  {
    "name": "得力 A5文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.4,
        "sales": 112546,
        "revenue": 2070846
      },
      {
        "platform": "天猫",
        "avgPrice": 18.4,
        "sales": 43574,
        "revenue": 801762
      },
      {
        "platform": "京东",
        "avgPrice": 21.2,
        "sales": 200015,
        "revenue": 4240318
      },
      {
        "platform": "抖音",
        "avgPrice": 18.4,
        "sales": 198103,
        "revenue": 3645095
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.9,
        "sales": 83625,
        "revenue": 1078763
      }
    ]
  },
  {
    "name": "三木 彩色分类文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.9,
        "sales": 34960,
        "revenue": 171304
      },
      {
        "platform": "天猫",
        "avgPrice": 4.9,
        "sales": 22080,
        "revenue": 108192
      },
      {
        "platform": "京东",
        "avgPrice": 5.6,
        "sales": 75720,
        "revenue": 424032
      },
      {
        "platform": "抖音",
        "avgPrice": 4.9,
        "sales": 48725,
        "revenue": 238753
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.4,
        "sales": 86164,
        "revenue": 292958
      }
    ]
  },
  {
    "name": "齐心 牛津布资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.1,
        "sales": 57810,
        "revenue": 988551
      },
      {
        "platform": "天猫",
        "avgPrice": 17.1,
        "sales": 200277,
        "revenue": 3424737
      },
      {
        "platform": "京东",
        "avgPrice": 19.7,
        "sales": 68187,
        "revenue": 1343284
      },
      {
        "platform": "抖音",
        "avgPrice": 17.1,
        "sales": 228904,
        "revenue": 3914258
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 103761,
        "revenue": 1245132
      }
    ]
  },
  {
    "name": "真彩 双行修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.3,
        "sales": 72094,
        "revenue": 310004
      },
      {
        "platform": "天猫",
        "avgPrice": 4.3,
        "sales": 57243,
        "revenue": 246145
      },
      {
        "platform": "京东",
        "avgPrice": 4.9,
        "sales": 95130,
        "revenue": 466137
      },
      {
        "platform": "抖音",
        "avgPrice": 4.3,
        "sales": 13218,
        "revenue": 56837
      },
      {
        "platform": "拼多多",
        "avgPrice": 3,
        "sales": 120777,
        "revenue": 362331
      }
    ]
  },
  {
    "name": "PLUS 透明修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.5,
        "sales": 138836,
        "revenue": 2429630
      },
      {
        "platform": "天猫",
        "avgPrice": 17.5,
        "sales": 70999,
        "revenue": 1242483
      },
      {
        "platform": "京东",
        "avgPrice": 20.1,
        "sales": 77981,
        "revenue": 1567418
      },
      {
        "platform": "抖音",
        "avgPrice": 17.5,
        "sales": 18581,
        "revenue": 325168
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.3,
        "sales": 39476,
        "revenue": 485555
      }
    ]
  },
  {
    "name": "得力 学生修正带套装",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.7,
        "sales": 128255,
        "revenue": 1500584
      },
      {
        "platform": "天猫",
        "avgPrice": 11.7,
        "sales": 74826,
        "revenue": 875464
      },
      {
        "platform": "京东",
        "avgPrice": 13.5,
        "sales": 121776,
        "revenue": 1643976
      },
      {
        "platform": "抖音",
        "avgPrice": 11.7,
        "sales": 130043,
        "revenue": 1521503
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.2,
        "sales": 101621,
        "revenue": 833292
      }
    ]
  },
  {
    "name": "得力 创意修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.6,
        "sales": 162031,
        "revenue": 907374
      },
      {
        "platform": "天猫",
        "avgPrice": 5.6,
        "sales": 132489,
        "revenue": 741938
      },
      {
        "platform": "京东",
        "avgPrice": 6.4,
        "sales": 64733,
        "revenue": 414291
      },
      {
        "platform": "抖音",
        "avgPrice": 5.6,
        "sales": 102200,
        "revenue": 572320
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.9,
        "sales": 52474,
        "revenue": 204649
      }
    ]
  },
  {
    "name": "PLUS 修正带替芯 3个",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.6,
        "sales": 149000,
        "revenue": 536400
      },
      {
        "platform": "天猫",
        "avgPrice": 3.6,
        "sales": 55455,
        "revenue": 199638
      },
      {
        "platform": "京东",
        "avgPrice": 4.1,
        "sales": 70541,
        "revenue": 289218
      },
      {
        "platform": "抖音",
        "avgPrice": 3.6,
        "sales": 156136,
        "revenue": 562090
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.5,
        "sales": 74144,
        "revenue": 185360
      }
    ]
  },
  {
    "name": "晨光 宽幅修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11,
        "sales": 167512,
        "revenue": 1842632
      },
      {
        "platform": "天猫",
        "avgPrice": 11,
        "sales": 45608,
        "revenue": 501688
      },
      {
        "platform": "京东",
        "avgPrice": 12.6,
        "sales": 96081,
        "revenue": 1210621
      },
      {
        "platform": "抖音",
        "avgPrice": 11,
        "sales": 173451,
        "revenue": 1907961
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.7,
        "sales": 65011,
        "revenue": 500585
      }
    ]
  },
  {
    "name": "凌美 明尖钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 39,
        "sales": 21342,
        "revenue": 832338
      },
      {
        "platform": "天猫",
        "avgPrice": 39,
        "sales": 30256,
        "revenue": 1179984
      },
      {
        "platform": "京东",
        "avgPrice": 44.8,
        "sales": 30741,
        "revenue": 1377197
      },
      {
        "platform": "抖音",
        "avgPrice": 39,
        "sales": 20203,
        "revenue": 787917
      },
      {
        "platform": "拼多多",
        "avgPrice": 27.3,
        "sales": 15385,
        "revenue": 420011
      }
    ]
  },
  {
    "name": "英雄 EF尖钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 192.2,
        "sales": 26291,
        "revenue": 5053130
      },
      {
        "platform": "天猫",
        "avgPrice": 192.2,
        "sales": 3357,
        "revenue": 645215
      },
      {
        "platform": "京东",
        "avgPrice": 221,
        "sales": 27424,
        "revenue": 6060704
      },
      {
        "platform": "抖音",
        "avgPrice": 192.2,
        "sales": 30990,
        "revenue": 5956278
      },
      {
        "platform": "拼多多",
        "avgPrice": 134.5,
        "sales": 17896,
        "revenue": 2407012
      }
    ]
  },
  {
    "name": "英雄 透明示范钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.8,
        "sales": 22447,
        "revenue": 624027
      },
      {
        "platform": "天猫",
        "avgPrice": 27.8,
        "sales": 20987,
        "revenue": 583439
      },
      {
        "platform": "京东",
        "avgPrice": 32,
        "sales": 5563,
        "revenue": 178016
      },
      {
        "platform": "抖音",
        "avgPrice": 27.8,
        "sales": 25870,
        "revenue": 719186
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.5,
        "sales": 29194,
        "revenue": 569283
      }
    ]
  },
  {
    "name": "凌美 旋转吸墨钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 134.6,
        "sales": 18754,
        "revenue": 2524288
      },
      {
        "platform": "天猫",
        "avgPrice": 134.6,
        "sales": 16202,
        "revenue": 2180789
      },
      {
        "platform": "京东",
        "avgPrice": 154.8,
        "sales": 34810,
        "revenue": 5388588
      },
      {
        "platform": "抖音",
        "avgPrice": 134.6,
        "sales": 15121,
        "revenue": 2035287
      },
      {
        "platform": "拼多多",
        "avgPrice": 94.2,
        "sales": 10570,
        "revenue": 995694
      }
    ]
  },
  {
    "name": "英雄 速写钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 198.8,
        "sales": 25054,
        "revenue": 4980735
      },
      {
        "platform": "天猫",
        "avgPrice": 198.8,
        "sales": 21614,
        "revenue": 4296863
      },
      {
        "platform": "京东",
        "avgPrice": 228.6,
        "sales": 20017,
        "revenue": 4575886
      },
      {
        "platform": "抖音",
        "avgPrice": 198.8,
        "sales": 26126,
        "revenue": 5193849
      },
      {
        "platform": "拼多多",
        "avgPrice": 139.2,
        "sales": 20008,
        "revenue": 2785114
      }
    ]
  },
  {
    "name": "派克 钢笔套装 含墨囊",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 92.9,
        "sales": 29860,
        "revenue": 2773994
      },
      {
        "platform": "天猫",
        "avgPrice": 92.9,
        "sales": 26086,
        "revenue": 2423389
      },
      {
        "platform": "京东",
        "avgPrice": 106.8,
        "sales": 32798,
        "revenue": 3502826
      },
      {
        "platform": "抖音",
        "avgPrice": 92.9,
        "sales": 5618,
        "revenue": 521912
      },
      {
        "platform": "拼多多",
        "avgPrice": 65,
        "sales": 13091,
        "revenue": 850915
      }
    ]
  },
  {
    "name": "老人头 油画纸 亚麻",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.4,
        "sales": 48405,
        "revenue": 890652
      },
      {
        "platform": "天猫",
        "avgPrice": 18.4,
        "sales": 18301,
        "revenue": 336738
      },
      {
        "platform": "京东",
        "avgPrice": 21.2,
        "sales": 74262,
        "revenue": 1574354
      },
      {
        "platform": "抖音",
        "avgPrice": 18.4,
        "sales": 69531,
        "revenue": 1279370
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.9,
        "sales": 4647,
        "revenue": 59946
      }
    ]
  },
  {
    "name": "宝虹 马克笔专用纸",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 65.4,
        "sales": 38397,
        "revenue": 2511164
      },
      {
        "platform": "天猫",
        "avgPrice": 65.4,
        "sales": 50844,
        "revenue": 3325198
      },
      {
        "platform": "京东",
        "avgPrice": 75.2,
        "sales": 69038,
        "revenue": 5191658
      },
      {
        "platform": "抖音",
        "avgPrice": 65.4,
        "sales": 37818,
        "revenue": 2473297
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.8,
        "sales": 49382,
        "revenue": 2261696
      }
    ]
  },
  {
    "name": "获多福 彩铅纸 细纹",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 41.7,
        "sales": 28325,
        "revenue": 1181153
      },
      {
        "platform": "天猫",
        "avgPrice": 41.7,
        "sales": 45870,
        "revenue": 1912779
      },
      {
        "platform": "京东",
        "avgPrice": 48,
        "sales": 37287,
        "revenue": 1789776
      },
      {
        "platform": "抖音",
        "avgPrice": 41.7,
        "sales": 40599,
        "revenue": 1692978
      },
      {
        "platform": "拼多多",
        "avgPrice": 29.2,
        "sales": 65558,
        "revenue": 1914294
      }
    ]
  },
  {
    "name": "宝虹 儿童画本 空白",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.5,
        "sales": 70144,
        "revenue": 1087232
      },
      {
        "platform": "天猫",
        "avgPrice": 15.5,
        "sales": 73195,
        "revenue": 1134523
      },
      {
        "platform": "京东",
        "avgPrice": 17.8,
        "sales": 32415,
        "revenue": 576987
      },
      {
        "platform": "抖音",
        "avgPrice": 15.5,
        "sales": 11677,
        "revenue": 180994
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.8,
        "sales": 15841,
        "revenue": 171083
      }
    ]
  },
  {
    "name": "宝虹 绘画本 A3",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 65.3,
        "sales": 29288,
        "revenue": 1912506
      },
      {
        "platform": "天猫",
        "avgPrice": 65.3,
        "sales": 56638,
        "revenue": 3698461
      },
      {
        "platform": "京东",
        "avgPrice": 75.1,
        "sales": 44028,
        "revenue": 3306503
      },
      {
        "platform": "抖音",
        "avgPrice": 65.3,
        "sales": 30287,
        "revenue": 1977741
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.7,
        "sales": 42437,
        "revenue": 1939371
      }
    ]
  },
  {
    "name": "康颂 牛皮纸画本",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.8,
        "sales": 39599,
        "revenue": 1061253
      },
      {
        "platform": "天猫",
        "avgPrice": 26.8,
        "sales": 7442,
        "revenue": 199446
      },
      {
        "platform": "京东",
        "avgPrice": 30.8,
        "sales": 11187,
        "revenue": 344560
      },
      {
        "platform": "抖音",
        "avgPrice": 26.8,
        "sales": 15148,
        "revenue": 405966
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.8,
        "sales": 20028,
        "revenue": 376526
      }
    ]
  },
  {
    "name": "UHU 502胶水",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.9,
        "sales": 114724,
        "revenue": 906320
      },
      {
        "platform": "天猫",
        "avgPrice": 7.9,
        "sales": 101334,
        "revenue": 800539
      },
      {
        "platform": "京东",
        "avgPrice": 9.1,
        "sales": 41331,
        "revenue": 376112
      },
      {
        "platform": "抖音",
        "avgPrice": 7.9,
        "sales": 62566,
        "revenue": 494271
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.5,
        "sales": 103395,
        "revenue": 568673
      }
    ]
  },
  {
    "name": "晨光 学生胶水 安全",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.7,
        "sales": 55834,
        "revenue": 1546602
      },
      {
        "platform": "天猫",
        "avgPrice": 27.7,
        "sales": 52014,
        "revenue": 1440788
      },
      {
        "platform": "京东",
        "avgPrice": 31.9,
        "sales": 33076,
        "revenue": 1055124
      },
      {
        "platform": "抖音",
        "avgPrice": 27.7,
        "sales": 35608,
        "revenue": 986342
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.4,
        "sales": 131761,
        "revenue": 2556163
      }
    ]
  },
  {
    "name": "UHU 胶棒 36g 可水洗",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.5,
        "sales": 30193,
        "revenue": 105676
      },
      {
        "platform": "天猫",
        "avgPrice": 3.5,
        "sales": 105938,
        "revenue": 370783
      },
      {
        "platform": "京东",
        "avgPrice": 4,
        "sales": 130381,
        "revenue": 521524
      },
      {
        "platform": "抖音",
        "avgPrice": 3.5,
        "sales": 66242,
        "revenue": 231847
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.4,
        "sales": 12411,
        "revenue": 29786
      }
    ]
  },
  {
    "name": "得力 万能胶",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.2,
        "sales": 70541,
        "revenue": 1283846
      },
      {
        "platform": "天猫",
        "avgPrice": 18.2,
        "sales": 92473,
        "revenue": 1683009
      },
      {
        "platform": "京东",
        "avgPrice": 20.9,
        "sales": 140436,
        "revenue": 2935112
      },
      {
        "platform": "抖音",
        "avgPrice": 18.2,
        "sales": 132518,
        "revenue": 2411828
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.7,
        "sales": 25518,
        "revenue": 324079
      }
    ]
  },
  {
    "name": "晨光 热熔胶枪",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.6,
        "sales": 24108,
        "revenue": 641273
      },
      {
        "platform": "天猫",
        "avgPrice": 26.6,
        "sales": 146618,
        "revenue": 3900039
      },
      {
        "platform": "京东",
        "avgPrice": 30.6,
        "sales": 102264,
        "revenue": 3129278
      },
      {
        "platform": "抖音",
        "avgPrice": 26.6,
        "sales": 24022,
        "revenue": 638985
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.6,
        "sales": 95932,
        "revenue": 1784335
      }
    ]
  },
  {
    "name": "3M 双面胶点 替芯",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.5,
        "sales": 47034,
        "revenue": 352755
      },
      {
        "platform": "天猫",
        "avgPrice": 7.5,
        "sales": 73790,
        "revenue": 553425
      },
      {
        "platform": "京东",
        "avgPrice": 8.6,
        "sales": 63195,
        "revenue": 543477
      },
      {
        "platform": "抖音",
        "avgPrice": 7.5,
        "sales": 41613,
        "revenue": 312098
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.3,
        "sales": 32655,
        "revenue": 173072
      }
    ]
  },
  {
    "name": "晨光 红色笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.7,
        "sales": 177219,
        "revenue": 1541805
      },
      {
        "platform": "天猫",
        "avgPrice": 8.7,
        "sales": 36081,
        "revenue": 313905
      },
      {
        "platform": "京东",
        "avgPrice": 10,
        "sales": 101776,
        "revenue": 1017760
      },
      {
        "platform": "抖音",
        "avgPrice": 8.7,
        "sales": 169914,
        "revenue": 1478252
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.1,
        "sales": 77315,
        "revenue": 471622
      }
    ]
  },
  {
    "name": "得力 蓝色笔芯 子弹头",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.8,
        "sales": 48946,
        "revenue": 1164915
      },
      {
        "platform": "天猫",
        "avgPrice": 23.8,
        "sales": 191262,
        "revenue": 4552036
      },
      {
        "platform": "京东",
        "avgPrice": 27.4,
        "sales": 93823,
        "revenue": 2570750
      },
      {
        "platform": "抖音",
        "avgPrice": 23.8,
        "sales": 182391,
        "revenue": 4340906
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 34364,
        "revenue": 573879
      }
    ]
  },
  {
    "name": "百乐 笔芯0.38mm 细",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15,
        "sales": 193093,
        "revenue": 2896395
      },
      {
        "platform": "天猫",
        "avgPrice": 15,
        "sales": 160815,
        "revenue": 2412225
      },
      {
        "platform": "京东",
        "avgPrice": 17.3,
        "sales": 62480,
        "revenue": 1080904
      },
      {
        "platform": "抖音",
        "avgPrice": 15,
        "sales": 70482,
        "revenue": 1057230
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.5,
        "sales": 48729,
        "revenue": 511655
      }
    ]
  },
  {
    "name": "百乐 速干笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.6,
        "sales": 189233,
        "revenue": 870472
      },
      {
        "platform": "天猫",
        "avgPrice": 4.6,
        "sales": 53778,
        "revenue": 247379
      },
      {
        "platform": "京东",
        "avgPrice": 5.3,
        "sales": 101652,
        "revenue": 538756
      },
      {
        "platform": "抖音",
        "avgPrice": 4.6,
        "sales": 135292,
        "revenue": 622343
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.2,
        "sales": 28585,
        "revenue": 91472
      }
    ]
  },
  {
    "name": "得力 子弹头笔芯 100支",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.1,
        "sales": 174601,
        "revenue": 3858682
      },
      {
        "platform": "天猫",
        "avgPrice": 22.1,
        "sales": 54309,
        "revenue": 1200229
      },
      {
        "platform": "京东",
        "avgPrice": 25.4,
        "sales": 156009,
        "revenue": 3962629
      },
      {
        "platform": "抖音",
        "avgPrice": 22.1,
        "sales": 171749,
        "revenue": 3795653
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.5,
        "sales": 143569,
        "revenue": 2225320
      }
    ]
  },
  {
    "name": "斑马 针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.1,
        "sales": 22703,
        "revenue": 115785
      },
      {
        "platform": "天猫",
        "avgPrice": 5.1,
        "sales": 177297,
        "revenue": 904215
      },
      {
        "platform": "京东",
        "avgPrice": 5.9,
        "sales": 139666,
        "revenue": 824029
      },
      {
        "platform": "抖音",
        "avgPrice": 5.1,
        "sales": 72640,
        "revenue": 370464
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.6,
        "sales": 36328,
        "revenue": 130781
      }
    ]
  },
  {
    "name": "宝克 白色记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.7,
        "sales": 9453,
        "revenue": 91694
      },
      {
        "platform": "天猫",
        "avgPrice": 9.7,
        "sales": 75474,
        "revenue": 732098
      },
      {
        "platform": "京东",
        "avgPrice": 11.2,
        "sales": 91224,
        "revenue": 1021709
      },
      {
        "platform": "抖音",
        "avgPrice": 9.7,
        "sales": 43202,
        "revenue": 419059
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.8,
        "sales": 9489,
        "revenue": 64525
      }
    ]
  },
  {
    "name": "斑马 防水记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.6,
        "sales": 13041,
        "revenue": 307768
      },
      {
        "platform": "天猫",
        "avgPrice": 23.6,
        "sales": 78654,
        "revenue": 1856234
      },
      {
        "platform": "京东",
        "avgPrice": 27.1,
        "sales": 88041,
        "revenue": 2385911
      },
      {
        "platform": "抖音",
        "avgPrice": 23.6,
        "sales": 81028,
        "revenue": 1912261
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.5,
        "sales": 48289,
        "revenue": 796769
      }
    ]
  },
  {
    "name": "晨光 金色记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.9,
        "sales": 98903,
        "revenue": 385722
      },
      {
        "platform": "天猫",
        "avgPrice": 3.9,
        "sales": 112110,
        "revenue": 437229
      },
      {
        "platform": "京东",
        "avgPrice": 4.5,
        "sales": 84684,
        "revenue": 381078
      },
      {
        "platform": "抖音",
        "avgPrice": 3.9,
        "sales": 31484,
        "revenue": 122788
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.7,
        "sales": 48491,
        "revenue": 130926
      }
    ]
  },
  {
    "name": "斑马 细头记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15,
        "sales": 60869,
        "revenue": 913035
      },
      {
        "platform": "天猫",
        "avgPrice": 15,
        "sales": 104957,
        "revenue": 1574355
      },
      {
        "platform": "京东",
        "avgPrice": 17.3,
        "sales": 9535,
        "revenue": 164956
      },
      {
        "platform": "抖音",
        "avgPrice": 15,
        "sales": 58235,
        "revenue": 873525
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.5,
        "sales": 12447,
        "revenue": 130694
      }
    ]
  },
  {
    "name": "斑马 记号笔套装 12色",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 21.2,
        "sales": 80718,
        "revenue": 1711222
      },
      {
        "platform": "天猫",
        "avgPrice": 21.2,
        "sales": 61079,
        "revenue": 1294875
      },
      {
        "platform": "京东",
        "avgPrice": 24.4,
        "sales": 109105,
        "revenue": 2662162
      },
      {
        "platform": "抖音",
        "avgPrice": 21.2,
        "sales": 77214,
        "revenue": 1636937
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.8,
        "sales": 98714,
        "revenue": 1460967
      }
    ]
  },
  {
    "name": "晨光 大头笔 物流用",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.7,
        "sales": 103370,
        "revenue": 2553239
      },
      {
        "platform": "天猫",
        "avgPrice": 24.7,
        "sales": 43226,
        "revenue": 1067682
      },
      {
        "platform": "京东",
        "avgPrice": 28.4,
        "sales": 120752,
        "revenue": 3429357
      },
      {
        "platform": "抖音",
        "avgPrice": 24.7,
        "sales": 54453,
        "revenue": 1344989
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.3,
        "sales": 16285,
        "revenue": 281731
      }
    ]
  },
  {
    "name": "六品堂 控笔训练字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.8,
        "sales": 18309,
        "revenue": 344209
      },
      {
        "platform": "天猫",
        "avgPrice": 18.8,
        "sales": 9022,
        "revenue": 169614
      },
      {
        "platform": "京东",
        "avgPrice": 21.6,
        "sales": 95168,
        "revenue": 2055629
      },
      {
        "platform": "抖音",
        "avgPrice": 18.8,
        "sales": 76718,
        "revenue": 1442298
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.2,
        "sales": 69129,
        "revenue": 912503
      }
    ]
  },
  {
    "name": "六品堂 硬笔书法字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.9,
        "sales": 89300,
        "revenue": 3295170
      },
      {
        "platform": "天猫",
        "avgPrice": 36.9,
        "sales": 29328,
        "revenue": 1082203
      },
      {
        "platform": "京东",
        "avgPrice": 42.4,
        "sales": 94051,
        "revenue": 3987762
      },
      {
        "platform": "抖音",
        "avgPrice": 36.9,
        "sales": 37681,
        "revenue": 1390429
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.8,
        "sales": 59836,
        "revenue": 1543769
      }
    ]
  },
  {
    "name": "华夏万卷 英文练字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.5,
        "sales": 61215,
        "revenue": 1499768
      },
      {
        "platform": "天猫",
        "avgPrice": 24.5,
        "sales": 99019,
        "revenue": 2425966
      },
      {
        "platform": "京东",
        "avgPrice": 28.2,
        "sales": 10534,
        "revenue": 297059
      },
      {
        "platform": "抖音",
        "avgPrice": 24.5,
        "sales": 14249,
        "revenue": 349101
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.1,
        "sales": 52865,
        "revenue": 903992
      }
    ]
  },
  {
    "name": "司马彦 数字描红本",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.7,
        "sales": 95534,
        "revenue": 831146
      },
      {
        "platform": "天猫",
        "avgPrice": 8.7,
        "sales": 47813,
        "revenue": 415973
      },
      {
        "platform": "京东",
        "avgPrice": 10,
        "sales": 56838,
        "revenue": 568380
      },
      {
        "platform": "抖音",
        "avgPrice": 8.7,
        "sales": 24673,
        "revenue": 214655
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.1,
        "sales": 98684,
        "revenue": 601972
      }
    ]
  },
  {
    "name": "六品堂 笔画练字",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.3,
        "sales": 41138,
        "revenue": 1328757
      },
      {
        "platform": "天猫",
        "avgPrice": 32.3,
        "sales": 70430,
        "revenue": 2274889
      },
      {
        "platform": "京东",
        "avgPrice": 37.1,
        "sales": 96592,
        "revenue": 3583563
      },
      {
        "platform": "抖音",
        "avgPrice": 32.3,
        "sales": 36908,
        "revenue": 1192128
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.6,
        "sales": 86072,
        "revenue": 1945227
      }
    ]
  },
  {
    "name": "司马彦 古诗词字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 35.2,
        "sales": 61030,
        "revenue": 2148256
      },
      {
        "platform": "天猫",
        "avgPrice": 35.2,
        "sales": 73006,
        "revenue": 2569811
      },
      {
        "platform": "京东",
        "avgPrice": 40.5,
        "sales": 29772,
        "revenue": 1205766
      },
      {
        "platform": "抖音",
        "avgPrice": 35.2,
        "sales": 50377,
        "revenue": 1773270
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.6,
        "sales": 6970,
        "revenue": 171462
      }
    ]
  },
  {
    "name": "斑马 圆珠笔 速干 蓝色",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.9,
        "sales": 31364,
        "revenue": 467324
      },
      {
        "platform": "天猫",
        "avgPrice": 14.9,
        "sales": 52940,
        "revenue": 788806
      },
      {
        "platform": "京东",
        "avgPrice": 17.1,
        "sales": 24923,
        "revenue": 426183
      },
      {
        "platform": "抖音",
        "avgPrice": 14.9,
        "sales": 26906,
        "revenue": 400899
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.4,
        "sales": 38854,
        "revenue": 404082
      }
    ]
  },
  {
    "name": "斑马 商务圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.5,
        "sales": 75720,
        "revenue": 2460900
      },
      {
        "platform": "天猫",
        "avgPrice": 32.5,
        "sales": 90368,
        "revenue": 2936960
      },
      {
        "platform": "京东",
        "avgPrice": 37.4,
        "sales": 25263,
        "revenue": 944836
      },
      {
        "platform": "抖音",
        "avgPrice": 32.5,
        "sales": 12416,
        "revenue": 403520
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.8,
        "sales": 82124,
        "revenue": 1872427
      }
    ]
  },
  {
    "name": "百乐 学生圆珠笔 套装",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 2.8,
        "sales": 44477,
        "revenue": 124536
      },
      {
        "platform": "天猫",
        "avgPrice": 2.8,
        "sales": 15849,
        "revenue": 44377
      },
      {
        "platform": "京东",
        "avgPrice": 3.2,
        "sales": 48573,
        "revenue": 155434
      },
      {
        "platform": "抖音",
        "avgPrice": 2.8,
        "sales": 98306,
        "revenue": 275257
      },
      {
        "platform": "拼多多",
        "avgPrice": 2,
        "sales": 68244,
        "revenue": 136488
      }
    ]
  },
  {
    "name": "晨光 圆珠笔芯 替换",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.4,
        "sales": 49849,
        "revenue": 917222
      },
      {
        "platform": "天猫",
        "avgPrice": 18.4,
        "sales": 13274,
        "revenue": 244242
      },
      {
        "platform": "京东",
        "avgPrice": 21.2,
        "sales": 14627,
        "revenue": 310092
      },
      {
        "platform": "抖音",
        "avgPrice": 18.4,
        "sales": 97490,
        "revenue": 1793816
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.9,
        "sales": 94661,
        "revenue": 1221127
      }
    ]
  },
  {
    "name": "斑马 油性圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.4,
        "sales": 19466,
        "revenue": 513902
      },
      {
        "platform": "天猫",
        "avgPrice": 26.4,
        "sales": 92775,
        "revenue": 2449260
      },
      {
        "platform": "京东",
        "avgPrice": 30.4,
        "sales": 13467,
        "revenue": 409397
      },
      {
        "platform": "抖音",
        "avgPrice": 26.4,
        "sales": 13934,
        "revenue": 367858
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.5,
        "sales": 93549,
        "revenue": 1730657
      }
    ]
  },
  {
    "name": "百乐 多功能圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.3,
        "sales": 40552,
        "revenue": 1107070
      },
      {
        "platform": "天猫",
        "avgPrice": 27.3,
        "sales": 19580,
        "revenue": 534534
      },
      {
        "platform": "京东",
        "avgPrice": 31.4,
        "sales": 57672,
        "revenue": 1810901
      },
      {
        "platform": "抖音",
        "avgPrice": 27.3,
        "sales": 58594,
        "revenue": 1599616
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.1,
        "sales": 96099,
        "revenue": 1835491
      }
    ]
  },
  {
    "name": "绘儿乐 丝滑蜡笔 24色",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.3,
        "sales": 38343,
        "revenue": 1008421
      },
      {
        "platform": "天猫",
        "avgPrice": 26.3,
        "sales": 85829,
        "revenue": 2257303
      },
      {
        "platform": "京东",
        "avgPrice": 30.2,
        "sales": 41963,
        "revenue": 1267283
      },
      {
        "platform": "抖音",
        "avgPrice": 26.3,
        "sales": 62051,
        "revenue": 1631941
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.4,
        "sales": 6532,
        "revenue": 120189
      }
    ]
  },
  {
    "name": "绘儿乐 可水洗蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 45.7,
        "sales": 55464,
        "revenue": 2534705
      },
      {
        "platform": "天猫",
        "avgPrice": 45.7,
        "sales": 51660,
        "revenue": 2360862
      },
      {
        "platform": "京东",
        "avgPrice": 52.6,
        "sales": 43577,
        "revenue": 2292150
      },
      {
        "platform": "抖音",
        "avgPrice": 45.7,
        "sales": 70618,
        "revenue": 3227243
      },
      {
        "platform": "拼多多",
        "avgPrice": 32,
        "sales": 9425,
        "revenue": 301600
      }
    ]
  },
  {
    "name": "绘儿乐 蜡笔套装 桶装",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.6,
        "sales": 23817,
        "revenue": 704983
      },
      {
        "platform": "天猫",
        "avgPrice": 29.6,
        "sales": 22039,
        "revenue": 652354
      },
      {
        "platform": "京东",
        "avgPrice": 34,
        "sales": 76545,
        "revenue": 2602530
      },
      {
        "platform": "抖音",
        "avgPrice": 29.6,
        "sales": 79552,
        "revenue": 2354739
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.7,
        "sales": 74444,
        "revenue": 1540991
      }
    ]
  },
  {
    "name": "绘儿乐 水溶性蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 47.8,
        "sales": 86906,
        "revenue": 4154107
      },
      {
        "platform": "天猫",
        "avgPrice": 47.8,
        "sales": 63122,
        "revenue": 3017232
      },
      {
        "platform": "京东",
        "avgPrice": 55,
        "sales": 57514,
        "revenue": 3163270
      },
      {
        "platform": "抖音",
        "avgPrice": 47.8,
        "sales": 68754,
        "revenue": 3286441
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.5,
        "sales": 81479,
        "revenue": 2729547
      }
    ]
  },
  {
    "name": "绘儿乐 荧光蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.9,
        "sales": 80333,
        "revenue": 2964288
      },
      {
        "platform": "天猫",
        "avgPrice": 36.9,
        "sales": 19303,
        "revenue": 712281
      },
      {
        "platform": "京东",
        "avgPrice": 42.4,
        "sales": 19883,
        "revenue": 843039
      },
      {
        "platform": "抖音",
        "avgPrice": 36.9,
        "sales": 74067,
        "revenue": 2733072
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.8,
        "sales": 6730,
        "revenue": 173634
      }
    ]
  },
  {
    "name": "得力 三角蜡笔 幼儿",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 35.3,
        "sales": 16854,
        "revenue": 594946
      },
      {
        "platform": "天猫",
        "avgPrice": 35.3,
        "sales": 52063,
        "revenue": 1837824
      },
      {
        "platform": "京东",
        "avgPrice": 40.6,
        "sales": 75880,
        "revenue": 3080728
      },
      {
        "platform": "抖音",
        "avgPrice": 35.3,
        "sales": 59141,
        "revenue": 2087677
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.7,
        "sales": 82049,
        "revenue": 2026610
      }
    ]
  },
  {
    "name": "九木 卡通书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.3,
        "sales": 27068,
        "revenue": 522412
      },
      {
        "platform": "天猫",
        "avgPrice": 19.3,
        "sales": 22244,
        "revenue": 429309
      },
      {
        "platform": "京东",
        "avgPrice": 22.2,
        "sales": 34391,
        "revenue": 763480
      },
      {
        "platform": "抖音",
        "avgPrice": 19.3,
        "sales": 8863,
        "revenue": 171056
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.5,
        "sales": 34664,
        "revenue": 467964
      }
    ]
  },
  {
    "name": "手工 木质书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.3,
        "sales": 23689,
        "revenue": 765155
      },
      {
        "platform": "天猫",
        "avgPrice": 32.3,
        "sales": 11990,
        "revenue": 387277
      },
      {
        "platform": "京东",
        "avgPrice": 37.1,
        "sales": 36025,
        "revenue": 1336528
      },
      {
        "platform": "抖音",
        "avgPrice": 32.3,
        "sales": 25812,
        "revenue": 833728
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.6,
        "sales": 15916,
        "revenue": 359702
      }
    ]
  },
  {
    "name": "晨光 压花书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.2,
        "sales": 4150,
        "revenue": 21580
      },
      {
        "platform": "天猫",
        "avgPrice": 5.2,
        "sales": 16707,
        "revenue": 86876
      },
      {
        "platform": "京东",
        "avgPrice": 6,
        "sales": 14074,
        "revenue": 84444
      },
      {
        "platform": "抖音",
        "avgPrice": 5.2,
        "sales": 39168,
        "revenue": 203674
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.6,
        "sales": 48728,
        "revenue": 175421
      }
    ]
  },
  {
    "name": "敦煌 夜光书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.3,
        "sales": 25020,
        "revenue": 457866
      },
      {
        "platform": "天猫",
        "avgPrice": 18.3,
        "sales": 16989,
        "revenue": 310899
      },
      {
        "platform": "京东",
        "avgPrice": 21,
        "sales": 10026,
        "revenue": 210546
      },
      {
        "platform": "抖音",
        "avgPrice": 18.3,
        "sales": 27501,
        "revenue": 503268
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.8,
        "sales": 43178,
        "revenue": 552678
      }
    ]
  },
  {
    "name": "手工 书签尺 多功能",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.6,
        "sales": 33102,
        "revenue": 814309
      },
      {
        "platform": "天猫",
        "avgPrice": 24.6,
        "sales": 21557,
        "revenue": 530302
      },
      {
        "platform": "京东",
        "avgPrice": 28.3,
        "sales": 15504,
        "revenue": 438763
      },
      {
        "platform": "抖音",
        "avgPrice": 24.6,
        "sales": 28900,
        "revenue": 710940
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.2,
        "sales": 7094,
        "revenue": 122017
      }
    ]
  },
  {
    "name": "九木 刺绣书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 21.4,
        "sales": 45352,
        "revenue": 970533
      },
      {
        "platform": "天猫",
        "avgPrice": 21.4,
        "sales": 48409,
        "revenue": 1035953
      },
      {
        "platform": "京东",
        "avgPrice": 24.6,
        "sales": 8707,
        "revenue": 214192
      },
      {
        "platform": "抖音",
        "avgPrice": 21.4,
        "sales": 36506,
        "revenue": 781228
      },
      {
        "platform": "拼多多",
        "avgPrice": 15,
        "sales": 43084,
        "revenue": 646260
      }
    ]
  },
  {
    "name": "小米 橡皮屑吸尘器",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 55,
        "sales": 26648,
        "revenue": 1465640
      },
      {
        "platform": "天猫",
        "avgPrice": 55,
        "sales": 35136,
        "revenue": 1932480
      },
      {
        "platform": "京东",
        "avgPrice": 63.2,
        "sales": 36583,
        "revenue": 2312046
      },
      {
        "platform": "抖音",
        "avgPrice": 55,
        "sales": 24542,
        "revenue": 1349810
      },
      {
        "platform": "拼多多",
        "avgPrice": 38.5,
        "sales": 15620,
        "revenue": 601370
      }
    ]
  },
  {
    "name": "纽赛 学生桌面清洁器",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 74.3,
        "sales": 13787,
        "revenue": 1024374
      },
      {
        "platform": "天猫",
        "avgPrice": 74.3,
        "sales": 34042,
        "revenue": 2529321
      },
      {
        "platform": "京东",
        "avgPrice": 85.4,
        "sales": 38446,
        "revenue": 3283288
      },
      {
        "platform": "抖音",
        "avgPrice": 74.3,
        "sales": 10455,
        "revenue": 776807
      },
      {
        "platform": "拼多多",
        "avgPrice": 52,
        "sales": 21827,
        "revenue": 1135004
      }
    ]
  },
  {
    "name": "晨光 无线吸尘器 小型",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 54,
        "sales": 33963,
        "revenue": 1834002
      },
      {
        "platform": "天猫",
        "avgPrice": 54,
        "sales": 17516,
        "revenue": 945864
      },
      {
        "platform": "京东",
        "avgPrice": 62.1,
        "sales": 26362,
        "revenue": 1637080
      },
      {
        "platform": "抖音",
        "avgPrice": 54,
        "sales": 27548,
        "revenue": 1487592
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.8,
        "sales": 7849,
        "revenue": 296692
      }
    ]
  },
  {
    "name": "美的 手持吸尘器 桌面",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 74.9,
        "sales": 39033,
        "revenue": 2923572
      },
      {
        "platform": "天猫",
        "avgPrice": 74.9,
        "sales": 36864,
        "revenue": 2761114
      },
      {
        "platform": "京东",
        "avgPrice": 86.1,
        "sales": 28371,
        "revenue": 2442743
      },
      {
        "platform": "抖音",
        "avgPrice": 74.9,
        "sales": 13934,
        "revenue": 1043657
      },
      {
        "platform": "拼多多",
        "avgPrice": 52.4,
        "sales": 33012,
        "revenue": 1729829
      }
    ]
  },
  {
    "name": "纽赛 可爱卡通吸尘器",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 59.5,
        "sales": 17653,
        "revenue": 1050354
      },
      {
        "platform": "天猫",
        "avgPrice": 59.5,
        "sales": 26358,
        "revenue": 1568301
      },
      {
        "platform": "京东",
        "avgPrice": 68.4,
        "sales": 16572,
        "revenue": 1133525
      },
      {
        "platform": "抖音",
        "avgPrice": 59.5,
        "sales": 13798,
        "revenue": 820981
      },
      {
        "platform": "拼多多",
        "avgPrice": 41.6,
        "sales": 9125,
        "revenue": 379600
      }
    ]
  },
  {
    "name": "小米 大吸力桌面吸尘",
    "category": "桌面吸尘器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 50.9,
        "sales": 27901,
        "revenue": 1420161
      },
      {
        "platform": "天猫",
        "avgPrice": 50.9,
        "sales": 17205,
        "revenue": 875735
      },
      {
        "platform": "京东",
        "avgPrice": 58.5,
        "sales": 18204,
        "revenue": 1064934
      },
      {
        "platform": "抖音",
        "avgPrice": 50.9,
        "sales": 32347,
        "revenue": 1646462
      },
      {
        "platform": "拼多多",
        "avgPrice": 35.6,
        "sales": 32614,
        "revenue": 1161058
      }
    ]
  }
],
  emergingProducts: [
  {
    "name": "斑马 子弹头中性笔 0.38mm",
    "category": "中性笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 59533,
    "growth7d": 394,
    "predictScore": 80,
    "trendData": [
      16014,
      20875,
      27477,
      36334,
      46891,
      61195,
      80230,
      106417,
      142247,
      183497,
      241640,
      314915,
      59533
    ]
  },
  {
    "name": "斑马 中性笔套装 12支",
    "category": "中性笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 60478,
    "growth7d": 162,
    "predictScore": 73,
    "trendData": [
      26197,
      29113,
      33533,
      38435,
      44386,
      50891,
      57836,
      67057,
      77703,
      88633,
      101827,
      113267,
      60478
    ]
  },
  {
    "name": "百乐 商务签字笔",
    "category": "中性笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 11685,
    "growth7d": 319,
    "predictScore": 79,
    "trendData": [
      3563,
      4464,
      5571,
      7015,
      8831,
      10879,
      13607,
      17143,
      21152,
      26174,
      32345,
      40211,
      11685
    ]
  },
  {
    "name": "晨光 彩色中性笔套装",
    "category": "中性笔",
    "reason": "直播间持续爆单",
    "currentSales": 56801,
    "growth7d": 392,
    "predictScore": 76,
    "trendData": [
      15199,
      19829,
      26205,
      34080,
      45405,
      60418,
      79407,
      104762,
      138701,
      182533,
      237368,
      307130,
      56801
    ]
  },
  {
    "name": "斑马 刷题专用中性笔",
    "category": "中性笔",
    "reason": "社交平台口碑传播",
    "currentSales": 64486,
    "growth7d": 221,
    "predictScore": 94,
    "trendData": [
      23850,
      28533,
      33372,
      39700,
      46700,
      54766,
      65255,
      77077,
      91928,
      109323,
      127762,
      152693,
      64486
    ]
  },
  {
    "name": "百乐 ST笔头中性笔",
    "category": "中性笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 51180,
    "growth7d": 132,
    "predictScore": 96,
    "trendData": [
      24539,
      27519,
      29912,
      33155,
      36111,
      40731,
      44719,
      49453,
      56141,
      62882,
      70226,
      76720,
      51180
    ]
  },
  {
    "name": "国誉 错题本 活页",
    "category": "笔记本/记事本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 60076,
    "growth7d": 92,
    "predictScore": 71,
    "trendData": [
      34051,
      36370,
      39015,
      41729,
      45337,
      48300,
      53272,
      56758,
      60333,
      64755,
      70845,
      74809,
      60076
    ]
  },
  {
    "name": "无印良品 考研专用笔记本",
    "category": "笔记本/记事本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 38801,
    "growth7d": 83,
    "predictScore": 80,
    "trendData": [
      22970,
      24863,
      27285,
      28794,
      31116,
      34101,
      36201,
      38449,
      40458,
      44224,
      47321,
      50409,
      38801
    ]
  },
  {
    "name": "晨光 道林纸笔记本",
    "category": "笔记本/记事本",
    "reason": "618期间搜索量飙升",
    "currentSales": 54148,
    "growth7d": 301,
    "predictScore": 76,
    "trendData": [
      17031,
      20739,
      25418,
      31754,
      39706,
      49516,
      61191,
      76877,
      97226,
      119751,
      146077,
      179537,
      54148
    ]
  },
  {
    "name": "晨光 空白素描本",
    "category": "笔记本/记事本",
    "reason": "直播间持续爆单",
    "currentSales": 65496,
    "growth7d": 80,
    "predictScore": 82,
    "trendData": [
      38844,
      41580,
      44980,
      48486,
      52357,
      56127,
      59450,
      64507,
      68258,
      74776,
      78532,
      82740,
      65496
    ]
  },
  {
    "name": "晨光 横线笔记本套装",
    "category": "笔记本/记事本",
    "reason": "社交平台口碑传播",
    "currentSales": 57812,
    "growth7d": 324,
    "predictScore": 78,
    "trendData": [
      16961,
      21652,
      27431,
      34288,
      43184,
      55119,
      69342,
      87304,
      111580,
      142086,
      182214,
      228637,
      57812
    ]
  },
  {
    "name": "kinbor 牛皮封面记事本",
    "category": "笔记本/记事本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 12612,
    "growth7d": 140,
    "predictScore": 80,
    "trendData": [
      5890,
      6601,
      7297,
      8031,
      8962,
      9887,
      10993,
      12084,
      13355,
      15016,
      16863,
      18664,
      12612
    ]
  },
  {
    "name": "迪士尼 高考加油礼盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 60618,
    "growth7d": 111,
    "predictScore": 94,
    "trendData": [
      31445,
      33949,
      36532,
      40686,
      43911,
      47099,
      51421,
      56636,
      61518,
      67887,
      75908,
      83923,
      60618
    ]
  },
  {
    "name": "奥特曼 文具福袋 随机",
    "category": "学习套装/礼盒/盲盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 17125,
    "growth7d": 325,
    "predictScore": 87,
    "trendData": [
      5152,
      6442,
      7988,
      10076,
      12629,
      15688,
      20138,
      25408,
      31574,
      39228,
      48570,
      61445,
      17125
    ]
  },
  {
    "name": "迪士尼 IP联名文具盲盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 26612,
    "growth7d": 284,
    "predictScore": 73,
    "trendData": [
      8635,
      10651,
      12824,
      15904,
      19764,
      23974,
      29286,
      35249,
      43931,
      53891,
      64920,
      78922,
      26612
    ]
  },
  {
    "name": "奥特曼 新学期必备套装",
    "category": "学习套装/礼盒/盲盒",
    "reason": "直播间持续爆单",
    "currentSales": 74192,
    "growth7d": 88,
    "predictScore": 87,
    "trendData": [
      42018,
      45482,
      49490,
      54513,
      58522,
      62006,
      68224,
      74840,
      81462,
      87256,
      95650,
      101334,
      74192
    ]
  },
  {
    "name": "得力 幼儿园文具礼盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "社交平台口碑传播",
    "currentSales": 51139,
    "growth7d": 107,
    "predictScore": 94,
    "trendData": [
      27286,
      30305,
      32367,
      36063,
      39541,
      42857,
      46216,
      50410,
      56322,
      62598,
      68859,
      73559,
      51139
    ]
  },
  {
    "name": "晨光 升学礼物套装",
    "category": "学习套装/礼盒/盲盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 44044,
    "growth7d": 148,
    "predictScore": 98,
    "trendData": [
      20057,
      22462,
      25242,
      28847,
      32962,
      37198,
      41877,
      47851,
      53837,
      60762,
      68615,
      76925,
      44044
    ]
  },
  {
    "name": "慕娜美 软头马克笔套装",
    "category": "马克笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 61160,
    "growth7d": 130,
    "predictScore": 84,
    "trendData": [
      29272,
      31940,
      36074,
      39965,
      44844,
      50667,
      57283,
      62289,
      69104,
      78347,
      85576,
      94581,
      61160
    ]
  },
  {
    "name": "touch 马克笔补充液",
    "category": "马克笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 65448,
    "growth7d": 247,
    "predictScore": 93,
    "trendData": [
      22216,
      27153,
      32212,
      39339,
      46418,
      55347,
      66944,
      81343,
      96548,
      115433,
      139684,
      170239,
      65448
    ]
  },
  {
    "name": "斯塔 丙烯马克笔",
    "category": "马克笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 69075,
    "growth7d": 266,
    "predictScore": 70,
    "trendData": [
      23211,
      27815,
      34258,
      42148,
      52018,
      63887,
      77086,
      92510,
      113521,
      138607,
      171695,
      206298,
      69075
    ]
  },
  {
    "name": "法卡勒 金属色马克笔",
    "category": "马克笔",
    "reason": "直播间持续爆单",
    "currentSales": 12888,
    "growth7d": 97,
    "predictScore": 93,
    "trendData": [
      6952,
      7614,
      8339,
      8971,
      9581,
      10518,
      11487,
      12172,
      13019,
      14289,
      15617,
      16648,
      12888
    ]
  },
  {
    "name": "马利 荧光马克笔套装",
    "category": "马克笔",
    "reason": "社交平台口碑传播",
    "currentSales": 44466,
    "growth7d": 209,
    "predictScore": 78,
    "trendData": [
      16699,
      19873,
      23144,
      27166,
      32024,
      38005,
      45382,
      53000,
      61050,
      72945,
      84836,
      99862,
      44466
    ]
  },
  {
    "name": "马利 马克笔收纳盒",
    "category": "马克笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 75476,
    "growth7d": 155,
    "predictScore": 83,
    "trendData": [
      33654,
      37639,
      42961,
      48729,
      54510,
      62851,
      71585,
      81269,
      92992,
      105279,
      119458,
      135544,
      75476
    ]
  },
  {
    "name": "晨光 帆布笔袋 简约",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 61702,
    "growth7d": 149,
    "predictScore": 74,
    "trendData": [
      27434,
      30250,
      34267,
      37762,
      42101,
      47873,
      53589,
      60200,
      68184,
      75956,
      84795,
      93687,
      61702
    ]
  },
  {
    "name": "晨光 铁皮文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "小红书种草笔记爆发",
    "currentSales": 43772,
    "growth7d": 169,
    "predictScore": 67,
    "trendData": [
      18339,
      20981,
      23765,
      26881,
      31089,
      35520,
      40331,
      45111,
      51029,
      58621,
      66361,
      74485,
      43772
    ]
  },
  {
    "name": "KOKUYO 密码锁文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "618期间搜索量飙升",
    "currentSales": 41539,
    "growth7d": 248,
    "predictScore": 67,
    "trendData": [
      14488,
      17578,
      21256,
      25942,
      31796,
      37943,
      45214,
      54102,
      65353,
      79420,
      97113,
      115311,
      41539
    ]
  },
  {
    "name": "三年二班 折叠文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "直播间持续爆单",
    "currentSales": 21584,
    "growth7d": 105,
    "predictScore": 65,
    "trendData": [
      11686,
      12939,
      14254,
      15671,
      17421,
      18908,
      20481,
      21947,
      24140,
      25906,
      28209,
      30236,
      21584
    ]
  },
  {
    "name": "KOKUYO 卡通笔袋",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "社交平台口碑传播",
    "currentSales": 37793,
    "growth7d": 312,
    "predictScore": 94,
    "trendData": [
      11624,
      14766,
      18633,
      22995,
      29019,
      35996,
      45377,
      56528,
      69940,
      85958,
      105450,
      130415,
      37793
    ]
  },
  {
    "name": "晨光 弹射文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 36908,
    "growth7d": 163,
    "predictScore": 67,
    "trendData": [
      16075,
      17966,
      20837,
      23472,
      26884,
      30333,
      34971,
      39471,
      43978,
      49977,
      57019,
      65514,
      36908
    ]
  },
  {
    "name": "辉柏嘉 活动铅笔 金属杆",
    "category": "铅笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 62245,
    "growth7d": 168,
    "predictScore": 97,
    "trendData": [
      27021,
      31457,
      35740,
      40963,
      47423,
      54268,
      62854,
      72869,
      84225,
      96371,
      109909,
      126890,
      62245
    ]
  },
  {
    "name": "三菱 考试涂卡铅笔 20支",
    "category": "铅笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 22095,
    "growth7d": 91,
    "predictScore": 74,
    "trendData": [
      12450,
      13271,
      14320,
      15623,
      16922,
      18490,
      19624,
      21036,
      22623,
      24930,
      27522,
      29616,
      22095
    ]
  },
  {
    "name": "马可 绘图铅笔 2H-8B",
    "category": "铅笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 14002,
    "growth7d": 230,
    "predictScore": 97,
    "trendData": [
      5082,
      5988,
      7107,
      8604,
      10042,
      12136,
      14280,
      17037,
      20253,
      24496,
      29563,
      34685,
      14002
    ]
  },
  {
    "name": "晨光 木质铅笔 HB 50支",
    "category": "铅笔",
    "reason": "直播间持续爆单",
    "currentSales": 30280,
    "growth7d": 113,
    "predictScore": 71,
    "trendData": [
      15738,
      17614,
      19516,
      20940,
      23146,
      24833,
      26677,
      28904,
      31224,
      34308,
      37220,
      40112,
      30280
    ]
  },
  {
    "name": "中华 粗杆铅笔 幼儿用",
    "category": "铅笔",
    "reason": "社交平台口碑传播",
    "currentSales": 31120,
    "growth7d": 95,
    "predictScore": 78,
    "trendData": [
      17199,
      18994,
      20191,
      22176,
      24370,
      26757,
      28924,
      31164,
      33548,
      35797,
      39175,
      43101,
      31120
    ]
  },
  {
    "name": "马可 铅笔帽 保护套",
    "category": "铅笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 68340,
    "growth7d": 171,
    "predictScore": 85,
    "trendData": [
      29102,
      32504,
      36671,
      41023,
      46033,
      53103,
      59308,
      66548,
      75473,
      86091,
      98757,
      114884,
      68340
    ]
  },
  {
    "name": "樱花 高光橡皮",
    "category": "橡皮擦",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 62787,
    "growth7d": 187,
    "predictScore": 87,
    "trendData": [
      25589,
      30084,
      34281,
      39090,
      44974,
      51792,
      59407,
      68039,
      76820,
      90220,
      105069,
      121264,
      62787
    ]
  },
  {
    "name": "辉柏嘉 樱花橡皮",
    "category": "橡皮擦",
    "reason": "小红书种草笔记爆发",
    "currentSales": 70419,
    "growth7d": 333,
    "predictScore": 80,
    "trendData": [
      20679,
      26550,
      33760,
      42101,
      52873,
      68152,
      87465,
      111213,
      140781,
      176160,
      224091,
      285921,
      70419
    ]
  },
  {
    "name": "辉柏嘉 超净橡皮",
    "category": "橡皮擦",
    "reason": "618期间搜索量飙升",
    "currentSales": 56466,
    "growth7d": 213,
    "predictScore": 94,
    "trendData": [
      21329,
      25466,
      29675,
      34170,
      39617,
      46527,
      54085,
      64378,
      75347,
      86992,
      103665,
      120238,
      56466
    ]
  },
  {
    "name": "辉柏嘉 创意橡皮 食物造型",
    "category": "橡皮擦",
    "reason": "直播间持续爆单",
    "currentSales": 38975,
    "growth7d": 121,
    "predictScore": 76,
    "trendData": [
      19475,
      21056,
      23464,
      25729,
      28277,
      31398,
      35019,
      38360,
      42603,
      47903,
      51776,
      56102,
      38975
    ]
  },
  {
    "name": "辉柏嘉 自动橡皮擦 替芯",
    "category": "橡皮擦",
    "reason": "社交平台口碑传播",
    "currentSales": 24447,
    "growth7d": 198,
    "predictScore": 95,
    "trendData": [
      9717,
      11511,
      13357,
      15477,
      18295,
      21068,
      24175,
      27930,
      32451,
      37359,
      43266,
      50183,
      24447
    ]
  },
  {
    "name": "得力 橡皮擦套装",
    "category": "橡皮擦",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 29772,
    "growth7d": 179,
    "predictScore": 70,
    "trendData": [
      12405,
      14466,
      16587,
      19256,
      22123,
      24974,
      28240,
      32913,
      37983,
      43489,
      50158,
      56559,
      29772
    ]
  },
  {
    "name": "慕娜美 护眼荧光笔 莫兰迪",
    "category": "荧光笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 63329,
    "growth7d": 206,
    "predictScore": 78,
    "trendData": [
      24338,
      28894,
      34467,
      40824,
      48717,
      56455,
      66947,
      79083,
      91125,
      105219,
      125074,
      144307,
      63329
    ]
  },
  {
    "name": "东洋 窗口荧光笔",
    "category": "荧光笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 48742,
    "growth7d": 255,
    "predictScore": 87,
    "trendData": [
      16761,
      20209,
      24613,
      29707,
      35127,
      41770,
      50512,
      61874,
      74876,
      90187,
      107686,
      132409,
      48742
    ]
  },
  {
    "name": "慕娜美 荧光笔 粗细双头",
    "category": "荧光笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 28929,
    "growth7d": 195,
    "predictScore": 91,
    "trendData": [
      11436,
      13253,
      15147,
      17292,
      19901,
      22679,
      26023,
      29583,
      34057,
      39125,
      46000,
      52703,
      28929
    ]
  },
  {
    "name": "斑马 果冻色荧光笔",
    "category": "荧光笔",
    "reason": "直播间持续爆单",
    "currentSales": 47671,
    "growth7d": 129,
    "predictScore": 82,
    "trendData": [
      22930,
      25066,
      28092,
      31466,
      34384,
      37751,
      41767,
      46249,
      50455,
      55502,
      62541,
      68132,
      47671
    ]
  },
  {
    "name": "百乐 荧光笔 大容量",
    "category": "荧光笔",
    "reason": "社交平台口碑传播",
    "currentSales": 17774,
    "growth7d": 301,
    "predictScore": 78,
    "trendData": [
      5501,
      6958,
      8751,
      10668,
      13497,
      16942,
      21414,
      26408,
      32937,
      40691,
      49719,
      60632,
      17774
    ]
  },
  {
    "name": "百乐 速干荧光笔",
    "category": "荧光笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 61204,
    "growth7d": 187,
    "predictScore": 87,
    "trendData": [
      24971,
      29102,
      33904,
      39095,
      45961,
      53045,
      60722,
      70369,
      82611,
      94940,
      110089,
      125715,
      61204
    ]
  },
  {
    "name": "kinbor 手账素材本",
    "category": "手帐",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 63872,
    "growth7d": 225,
    "predictScore": 68,
    "trendData": [
      23235,
      27852,
      33318,
      39267,
      46577,
      54313,
      63800,
      74471,
      87540,
      103725,
      120612,
      145145,
      63872
    ]
  },
  {
    "name": "kinbor 手账周计划本",
    "category": "手帐",
    "reason": "小红书种草笔记爆发",
    "currentSales": 27065,
    "growth7d": 177,
    "predictScore": 94,
    "trendData": [
      11431,
      12889,
      15006,
      17510,
      20294,
      23120,
      26245,
      29614,
      34186,
      39576,
      46145,
      52294,
      27065
    ]
  },
  {
    "name": "三年二班 手账装饰花边剪刀",
    "category": "手帐",
    "reason": "618期间搜索量飙升",
    "currentSales": 71393,
    "growth7d": 177,
    "predictScore": 88,
    "trendData": [
      29643,
      33313,
      38993,
      44129,
      50412,
      58213,
      65925,
      74711,
      84577,
      96679,
      112125,
      126878,
      71393
    ]
  },
  {
    "name": "国誉 TN旅行手账",
    "category": "手帐",
    "reason": "直播间持续爆单",
    "currentSales": 56367,
    "growth7d": 138,
    "predictScore": 87,
    "trendData": [
      26040,
      28798,
      32480,
      35547,
      40424,
      45930,
      50442,
      56495,
      63390,
      71404,
      80227,
      87929,
      56367
    ]
  },
  {
    "name": "kinbor 盐系手账本",
    "category": "手帐",
    "reason": "社交平台口碑传播",
    "currentSales": 11101,
    "growth7d": 83,
    "predictScore": 95,
    "trendData": [
      6375,
      7000,
      7406,
      8017,
      8429,
      8951,
      9699,
      10321,
      11206,
      12020,
      13086,
      14162,
      11101
    ]
  },
  {
    "name": "文谷 手账打孔器",
    "category": "手帐",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 22636,
    "growth7d": 195,
    "predictScore": 72,
    "trendData": [
      9050,
      10540,
      12473,
      14286,
      16463,
      19417,
      22498,
      25924,
      29655,
      34208,
      39879,
      46110,
      22636
    ]
  },
  {
    "name": "手帐星球 火漆蜡条 彩色",
    "category": "火漆印章",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 64414,
    "growth7d": 243,
    "predictScore": 91,
    "trendData": [
      22307,
      26979,
      32344,
      37905,
      44660,
      52366,
      63505,
      76362,
      91477,
      111085,
      131763,
      158415,
      64414
    ]
  },
  {
    "name": "印迹 火漆勺 木柄",
    "category": "火漆印章",
    "reason": "小红书种草笔记爆发",
    "currentSales": 75389,
    "growth7d": 99,
    "predictScore": 68,
    "trendData": [
      40502,
      44529,
      49456,
      53251,
      57809,
      62978,
      69973,
      75696,
      83164,
      92383,
      100506,
      109243,
      75389
    ]
  },
  {
    "name": "暮光之印 火漆印章礼盒",
    "category": "火漆印章",
    "reason": "618期间搜索量飙升",
    "currentSales": 43856,
    "growth7d": 159,
    "predictScore": 85,
    "trendData": [
      19202,
      21866,
      25105,
      28164,
      31935,
      35764,
      39966,
      45152,
      50249,
      57151,
      65371,
      73048,
      43856
    ]
  },
  {
    "name": "森活记 星座火漆印章",
    "category": "火漆印章",
    "reason": "直播间持续爆单",
    "currentSales": 65063,
    "growth7d": 146,
    "predictScore": 93,
    "trendData": [
      30327,
      33903,
      38453,
      42991,
      48618,
      54633,
      62243,
      70454,
      77668,
      85595,
      95826,
      105585,
      65063
    ]
  },
  {
    "name": "暮光之印 火漆蜡片 成品",
    "category": "火漆印章",
    "reason": "社交平台口碑传播",
    "currentSales": 74428,
    "growth7d": 186,
    "predictScore": 78,
    "trendData": [
      30127,
      33993,
      39274,
      44883,
      50924,
      59359,
      68267,
      77963,
      91301,
      105621,
      121724,
      138989,
      74428
    ]
  },
  {
    "name": "印迹 毕业纪念火漆套装",
    "category": "火漆印章",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 54068,
    "growth7d": 203,
    "predictScore": 89,
    "trendData": [
      21198,
      24673,
      28419,
      33748,
      39793,
      45949,
      53880,
      61728,
      71841,
      83178,
      97484,
      114113,
      54068
    ]
  },
  {
    "name": "真彩 细头水彩笔 勾线",
    "category": "水彩笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 64956,
    "growth7d": 262,
    "predictScore": 81,
    "trendData": [
      21427,
      26161,
      31451,
      38247,
      46700,
      57432,
      69006,
      82009,
      100145,
      119631,
      144784,
      174018,
      64956
    ]
  },
  {
    "name": "辉柏嘉 双头水彩笔",
    "category": "水彩笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 53712,
    "growth7d": 340,
    "predictScore": 74,
    "trendData": [
      15426,
      19539,
      24471,
      31372,
      39452,
      50693,
      65006,
      83247,
      107247,
      135069,
      169547,
      218035,
      53712
    ]
  },
  {
    "name": "马利 可擦水彩笔",
    "category": "水彩笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 16320,
    "growth7d": 142,
    "predictScore": 82,
    "trendData": [
      7544,
      8332,
      9386,
      10444,
      11761,
      13359,
      14739,
      16611,
      18181,
      20588,
      23237,
      25655,
      16320
    ]
  },
  {
    "name": "晨光 水彩笔画纸套装",
    "category": "水彩笔",
    "reason": "直播间持续爆单",
    "currentSales": 73759,
    "growth7d": 154,
    "predictScore": 65,
    "trendData": [
      33217,
      37532,
      42808,
      48868,
      54955,
      61068,
      69029,
      78957,
      89437,
      100857,
      112506,
      124621,
      73759
    ]
  },
  {
    "name": "晨光 金属色水彩笔",
    "category": "水彩笔",
    "reason": "社交平台口碑传播",
    "currentSales": 67754,
    "growth7d": 289,
    "predictScore": 95,
    "trendData": [
      21151,
      25562,
      32020,
      40127,
      48864,
      59580,
      72483,
      88422,
      111099,
      137877,
      167688,
      209857,
      67754
    ]
  },
  {
    "name": "马利 白板用水彩笔",
    "category": "水彩笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 15500,
    "growth7d": 210,
    "predictScore": 74,
    "trendData": [
      5978,
      6949,
      8126,
      9580,
      11066,
      13049,
      15473,
      18386,
      21751,
      25260,
      29742,
      35218,
      15500
    ]
  },
  {
    "name": "得力 价格标签贴",
    "category": "标签贴纸",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 65498,
    "growth7d": 281,
    "predictScore": 71,
    "trendData": [
      21495,
      26492,
      31938,
      38652,
      46917,
      58039,
      71989,
      88144,
      109683,
      134340,
      165824,
      199246,
      65498
    ]
  },
  {
    "name": "雅柯莱 书脊标签",
    "category": "标签贴纸",
    "reason": "小红书种草笔记爆发",
    "currentSales": 32036,
    "growth7d": 262,
    "predictScore": 81,
    "trendData": [
      10734,
      12757,
      15293,
      18228,
      22496,
      27784,
      33570,
      41426,
      51060,
      61915,
      75983,
      90394,
      32036
    ]
  },
  {
    "name": "雅柯莱 收纳标签贴",
    "category": "标签贴纸",
    "reason": "618期间搜索量飙升",
    "currentSales": 58783,
    "growth7d": 124,
    "predictScore": 79,
    "trendData": [
      28934,
      32389,
      35762,
      39441,
      44080,
      48532,
      52818,
      59341,
      66778,
      75236,
      83716,
      91243,
      58783
    ]
  },
  {
    "name": "晨光 透明标签贴",
    "category": "标签贴纸",
    "reason": "直播间持续爆单",
    "currentSales": 12454,
    "growth7d": 162,
    "predictScore": 70,
    "trendData": [
      5424,
      6194,
      7104,
      7922,
      8859,
      10177,
      11413,
      13190,
      14681,
      16932,
      18819,
      20955,
      12454
    ]
  },
  {
    "name": "精臣 姓名贴 刺绣",
    "category": "标签贴纸",
    "reason": "社交平台口碑传播",
    "currentSales": 61081,
    "growth7d": 392,
    "predictScore": 79,
    "trendData": [
      16401,
      21137,
      27477,
      36092,
      46951,
      62114,
      82803,
      107460,
      138821,
      183967,
      244670,
      320788,
      61081
    ]
  },
  {
    "name": "精臣 标签纸 打印机用",
    "category": "标签贴纸",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 46932,
    "growth7d": 218,
    "predictScore": 92,
    "trendData": [
      17033,
      19786,
      23503,
      27526,
      32531,
      37557,
      45058,
      53244,
      61386,
      71551,
      84692,
      101499,
      46932
    ]
  },
  {
    "name": "晨光 衍纸套装",
    "category": "手工DIY套装",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 66041,
    "growth7d": 300,
    "predictScore": 94,
    "trendData": [
      20747,
      25809,
      32492,
      40757,
      51217,
      63729,
      78333,
      98729,
      120210,
      150867,
      189862,
      237552,
      66041
    ]
  },
  {
    "name": "幻彩 创意美劳材料包",
    "category": "手工DIY套装",
    "reason": "小红书种草笔记爆发",
    "currentSales": 10359,
    "growth7d": 184,
    "predictScore": 88,
    "trendData": [
      4239,
      4919,
      5633,
      6488,
      7531,
      8549,
      9696,
      11029,
      12428,
      14488,
      16649,
      19035,
      10359
    ]
  },
  {
    "name": "晨光 拼豆套装",
    "category": "手工DIY套装",
    "reason": "618期间搜索量飙升",
    "currentSales": 31246,
    "growth7d": 106,
    "predictScore": 76,
    "trendData": [
      16480,
      17870,
      19331,
      21129,
      23435,
      26157,
      28075,
      30040,
      33229,
      35586,
      39029,
      41986,
      31246
    ]
  },
  {
    "name": "美乐 木质手工模型",
    "category": "手工DIY套装",
    "reason": "直播间持续爆单",
    "currentSales": 21150,
    "growth7d": 170,
    "predictScore": 76,
    "trendData": [
      8916,
      10288,
      11865,
      13511,
      15699,
      17839,
      20738,
      23178,
      26502,
      29919,
      34630,
      38764,
      21150
    ]
  },
  {
    "name": "晨光 剪纸套装",
    "category": "手工DIY套装",
    "reason": "社交平台口碑传播",
    "currentSales": 54408,
    "growth7d": 174,
    "predictScore": 95,
    "trendData": [
      22456,
      25197,
      28985,
      32665,
      37143,
      41960,
      48366,
      54592,
      61705,
      71730,
      82260,
      92445,
      54408
    ]
  },
  {
    "name": "得力 儿童剪贴画材料",
    "category": "手工DIY套装",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 78364,
    "growth7d": 226,
    "predictScore": 76,
    "trendData": [
      27948,
      32445,
      39137,
      45532,
      55029,
      64922,
      75547,
      88774,
      104119,
      121805,
      144934,
      168525,
      78364
    ]
  },
  {
    "name": "天文 透明卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 66583,
    "growth7d": 319,
    "predictScore": 84,
    "trendData": [
      20070,
      25198,
      31807,
      39711,
      49617,
      62098,
      78739,
      98137,
      121768,
      150415,
      185399,
      231901,
      66583
    ]
  },
  {
    "name": "得力 桌面卷笔器 大容量",
    "category": "卷笔刀/卷笔器",
    "reason": "小红书种草笔记爆发",
    "currentSales": 58682,
    "growth7d": 106,
    "predictScore": 94,
    "trendData": [
      31654,
      34255,
      37389,
      41565,
      45194,
      49053,
      54451,
      59399,
      63621,
      68009,
      72845,
      79911,
      58682
    ]
  },
  {
    "name": "猫太子 便携卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "618期间搜索量飙升",
    "currentSales": 73710,
    "growth7d": 88,
    "predictScore": 73,
    "trendData": [
      41966,
      46132,
      48871,
      52934,
      58260,
      62998,
      66675,
      71107,
      77292,
      82330,
      88984,
      94467,
      73710
    ]
  },
  {
    "name": "猫太子 卡通卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "直播间持续爆单",
    "currentSales": 29846,
    "growth7d": 179,
    "predictScore": 81,
    "trendData": [
      12154,
      14180,
      16455,
      19138,
      22131,
      24888,
      28729,
      32473,
      36516,
      42188,
      48693,
      54827,
      29846
    ]
  },
  {
    "name": "天文 削笔器 替换刀片",
    "category": "卷笔刀/卷笔器",
    "reason": "社交平台口碑传播",
    "currentSales": 47735,
    "growth7d": 277,
    "predictScore": 79,
    "trendData": [
      15671,
      18841,
      23507,
      29086,
      35492,
      43774,
      53368,
      64394,
      78282,
      97590,
      118138,
      145717,
      47735
    ]
  },
  {
    "name": "迪士尼 粗杆专用削笔器",
    "category": "卷笔刀/卷笔器",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 39796,
    "growth7d": 234,
    "predictScore": 94,
    "trendData": [
      13954,
      16887,
      19836,
      23914,
      28346,
      34158,
      40224,
      47001,
      56062,
      65825,
      78733,
      92676,
      39796
    ]
  },
  {
    "name": "齐心 便利贴套装",
    "category": "便签本/便条纸/N次贴",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 67125,
    "growth7d": 338,
    "predictScore": 75,
    "trendData": [
      19451,
      24644,
      31191,
      40319,
      52103,
      65586,
      82428,
      105700,
      133606,
      169077,
      212477,
      265694,
      67125
    ]
  },
  {
    "name": "3M 指示标签 箭头",
    "category": "便签本/便条纸/N次贴",
    "reason": "小红书种草笔记爆发",
    "currentSales": 37006,
    "growth7d": 348,
    "predictScore": 68,
    "trendData": [
      10379,
      13494,
      17326,
      21965,
      27677,
      35473,
      45480,
      58689,
      74036,
      93900,
      121057,
      156990,
      37006
    ]
  },
  {
    "name": "齐心 加厚便签纸",
    "category": "便签本/便条纸/N次贴",
    "reason": "618期间搜索量飙升",
    "currentSales": 46173,
    "growth7d": 391,
    "predictScore": 70,
    "trendData": [
      12236,
      16043,
      21400,
      28252,
      36417,
      47102,
      60776,
      79609,
      104665,
      136732,
      179365,
      232170,
      46173
    ]
  },
  {
    "name": "3M 告示贴 荧光色",
    "category": "便签本/便条纸/N次贴",
    "reason": "直播间持续爆单",
    "currentSales": 38542,
    "growth7d": 187,
    "predictScore": 87,
    "trendData": [
      15221,
      17940,
      20932,
      23791,
      27362,
      31797,
      36421,
      41602,
      48044,
      54336,
      62495,
      70733,
      38542
    ]
  },
  {
    "name": "3M 抽取式便签",
    "category": "便签本/便条纸/N次贴",
    "reason": "社交平台口碑传播",
    "currentSales": 41062,
    "growth7d": 380,
    "predictScore": 95,
    "trendData": [
      11073,
      14201,
      18390,
      23864,
      31104,
      40031,
      51467,
      66108,
      86010,
      110164,
      145891,
      188649,
      41062
    ]
  },
  {
    "name": "得力 线圈便签本",
    "category": "便签本/便条纸/N次贴",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 71228,
    "growth7d": 242,
    "predictScore": 79,
    "trendData": [
      24568,
      29713,
      35449,
      42461,
      51466,
      60747,
      72382,
      87717,
      106376,
      125356,
      150718,
      179567,
      71228
    ]
  },
  {
    "name": "得力 透明笔筒",
    "category": "笔筒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 67667,
    "growth7d": 357,
    "predictScore": 98,
    "trendData": [
      18887,
      24147,
      30643,
      39431,
      50672,
      64152,
      83116,
      105416,
      135694,
      175821,
      225191,
      292770,
      67667
    ]
  },
  {
    "name": "晨光 磁吸笔筒",
    "category": "笔筒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 15329,
    "growth7d": 270,
    "predictScore": 75,
    "trendData": [
      4995,
      6104,
      7510,
      9219,
      11400,
      14043,
      16964,
      20253,
      24420,
      29829,
      36128,
      43372,
      15329
    ]
  },
  {
    "name": "创意家居 儿童卡通笔筒",
    "category": "笔筒",
    "reason": "618期间搜索量飙升",
    "currentSales": 18637,
    "growth7d": 373,
    "predictScore": 67,
    "trendData": [
      5063,
      6461,
      8474,
      11104,
      14219,
      18607,
      23730,
      31000,
      40163,
      52238,
      67693,
      86664,
      18637
    ]
  },
  {
    "name": "纽赛 折叠伸缩笔筒",
    "category": "笔筒",
    "reason": "直播间持续爆单",
    "currentSales": 47238,
    "growth7d": 195,
    "predictScore": 92,
    "trendData": [
      18906,
      21565,
      25299,
      29351,
      33571,
      38594,
      43862,
      50624,
      57468,
      66467,
      76179,
      86665,
      47238
    ]
  },
  {
    "name": "创意家居 办公笔筒套装",
    "category": "笔筒",
    "reason": "社交平台口碑传播",
    "currentSales": 34389,
    "growth7d": 163,
    "predictScore": 79,
    "trendData": [
      15101,
      16861,
      19325,
      21487,
      24503,
      28044,
      32419,
      36186,
      41262,
      46166,
      52717,
      60970,
      34389
    ]
  },
  {
    "name": "创意家居 分格笔筒",
    "category": "笔筒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 32660,
    "growth7d": 250,
    "predictScore": 96,
    "trendData": [
      11086,
      13399,
      16232,
      19316,
      22963,
      27684,
      33372,
      40222,
      47569,
      56260,
      67992,
      81980,
      32660
    ]
  },
  {
    "name": "无印良品 可叠加收纳盒",
    "category": "文具收纳盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 68210,
    "growth7d": 376,
    "predictScore": 88,
    "trendData": [
      18368,
      23695,
      31334,
      40137,
      51291,
      67872,
      87177,
      113703,
      149001,
      190117,
      248085,
      322444,
      68210
    ]
  },
  {
    "name": "无印良品 笔筒收纳架",
    "category": "文具收纳盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 63653,
    "growth7d": 192,
    "predictScore": 82,
    "trendData": [
      25176,
      28797,
      33886,
      38546,
      44837,
      52996,
      60091,
      68942,
      79285,
      93134,
      105531,
      121801,
      63653
    ]
  },
  {
    "name": "宜家 资料收纳盒",
    "category": "文具收纳盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 61100,
    "growth7d": 355,
    "predictScore": 97,
    "trendData": [
      17041,
      22000,
      28361,
      36882,
      46914,
      59756,
      75314,
      98122,
      125243,
      162178,
      207574,
      262811,
      61100
    ]
  },
  {
    "name": "晨光 折叠收纳盒",
    "category": "文具收纳盒",
    "reason": "直播间持续爆单",
    "currentSales": 55933,
    "growth7d": 203,
    "predictScore": 98,
    "trendData": [
      21743,
      25062,
      29561,
      34992,
      41551,
      49327,
      58085,
      67732,
      78944,
      93330,
      106591,
      121886,
      55933
    ]
  },
  {
    "name": "得力 文具整理架",
    "category": "文具收纳盒",
    "reason": "社交平台口碑传播",
    "currentSales": 27716,
    "growth7d": 265,
    "predictScore": 96,
    "trendData": [
      9194,
      10996,
      13114,
      16018,
      19586,
      23452,
      28653,
      34192,
      41881,
      50352,
      60669,
      73739,
      27716
    ]
  },
  {
    "name": "纳川 桌面杂物收纳",
    "category": "文具收纳盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 64092,
    "growth7d": 258,
    "predictScore": 81,
    "trendData": [
      21422,
      25876,
      31824,
      39214,
      47668,
      58674,
      71548,
      85762,
      103136,
      122420,
      148711,
      181434,
      64092
    ]
  },
  {
    "name": "晨光 杂志收纳架",
    "category": "桌面收纳架",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 68752,
    "growth7d": 395,
    "predictScore": 78,
    "trendData": [
      18585,
      24189,
      32068,
      42493,
      56121,
      74670,
      98807,
      127485,
      170021,
      222076,
      295142,
      383498,
      68752
    ]
  },
  {
    "name": "宜家 显示器增高收纳",
    "category": "桌面收纳架",
    "reason": "小红书种草笔记爆发",
    "currentSales": 41976,
    "growth7d": 114,
    "predictScore": 88,
    "trendData": [
      21657,
      24162,
      25928,
      28453,
      31008,
      33554,
      37238,
      40988,
      44853,
      48345,
      53424,
      59186,
      41976
    ]
  },
  {
    "name": "宜家 多功能桌面架",
    "category": "桌面收纳架",
    "reason": "618期间搜索量飙升",
    "currentSales": 33564,
    "growth7d": 337,
    "predictScore": 94,
    "trendData": [
      9623,
      12086,
      15310,
      19759,
      24965,
      32177,
      40073,
      50064,
      62942,
      81143,
      102562,
      128404,
      33564
    ]
  },
  {
    "name": "纽赛 竹木收纳架",
    "category": "桌面收纳架",
    "reason": "直播间持续爆单",
    "currentSales": 64629,
    "growth7d": 211,
    "predictScore": 70,
    "trendData": [
      24419,
      28439,
      33725,
      39030,
      46100,
      54152,
      63283,
      74547,
      89148,
      103221,
      122633,
      140946,
      64629
    ]
  },
  {
    "name": "晨光 办公桌面架",
    "category": "桌面收纳架",
    "reason": "社交平台口碑传播",
    "currentSales": 21043,
    "growth7d": 368,
    "predictScore": 79,
    "trendData": [
      5924,
      7560,
      9752,
      12500,
      16324,
      21239,
      27361,
      34781,
      45572,
      58626,
      74376,
      94834,
      21043
    ]
  },
  {
    "name": "纳川 透明分层收纳架",
    "category": "桌面收纳架",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 25524,
    "growth7d": 265,
    "predictScore": 66,
    "trendData": [
      8422,
      10160,
      12166,
      14887,
      17739,
      21383,
      26356,
      31398,
      38360,
      45667,
      55723,
      68740,
      25524
    ]
  },
  {
    "name": "喵喵机 标签打印一体机",
    "category": "错题打印机",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 69294,
    "growth7d": 93,
    "predictScore": 68,
    "trendData": [
      39404,
      42010,
      45462,
      48749,
      51996,
      56720,
      60415,
      65206,
      69115,
      75299,
      83296,
      91799,
      69294
    ]
  },
  {
    "name": "作业帮 错题本打印机 A4",
    "category": "错题打印机",
    "reason": "小红书种草笔记爆发",
    "currentSales": 20300,
    "growth7d": 356,
    "predictScore": 95,
    "trendData": [
      5785,
      7426,
      9398,
      12250,
      15466,
      19772,
      25344,
      32955,
      42337,
      54072,
      68842,
      90023,
      20300
    ]
  },
  {
    "name": "小猿 便携打印机 墨盒",
    "category": "错题打印机",
    "reason": "618期间搜索量飙升",
    "currentSales": 76027,
    "growth7d": 320,
    "predictScore": 91,
    "trendData": [
      22402,
      28487,
      35471,
      43682,
      54854,
      68833,
      84745,
      105641,
      130872,
      161524,
      201710,
      249835,
      76027
    ]
  },
  {
    "name": "作业帮 智能打印机 WiFi",
    "category": "错题打印机",
    "reason": "直播间持续爆单",
    "currentSales": 73325,
    "growth7d": 220,
    "predictScore": 76,
    "trendData": [
      26879,
      31647,
      37755,
      44612,
      52446,
      60992,
      70779,
      84275,
      99190,
      117466,
      139174,
      160877,
      73325
    ]
  },
  {
    "name": "小猿 错题打印机 彩色",
    "category": "错题打印机",
    "reason": "社交平台口碑传播",
    "currentSales": 14370,
    "growth7d": 151,
    "predictScore": 96,
    "trendData": [
      6459,
      7171,
      8183,
      9378,
      10718,
      11882,
      13172,
      14527,
      16699,
      18778,
      21336,
      24292,
      14370
    ]
  },
  {
    "name": "作业帮 学习打印机 护眼",
    "category": "错题打印机",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 56956,
    "growth7d": 273,
    "predictScore": 83,
    "trendData": [
      18519,
      22327,
      27147,
      33007,
      40212,
      49488,
      59213,
      73109,
      90777,
      112996,
      138581,
      166009,
      56956
    ]
  },
  {
    "name": "明基 折叠台灯 便携",
    "category": "护眼台灯",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 69837,
    "growth7d": 112,
    "predictScore": 91,
    "trendData": [
      36360,
      39183,
      42535,
      47488,
      52684,
      57852,
      63866,
      71228,
      77151,
      86386,
      93324,
      102817,
      69837
    ]
  },
  {
    "name": "松下 触控台灯",
    "category": "护眼台灯",
    "reason": "小红书种草笔记爆发",
    "currentSales": 68623,
    "growth7d": 277,
    "predictScore": 69,
    "trendData": [
      22714,
      27364,
      33143,
      40188,
      49766,
      61103,
      73749,
      88716,
      108961,
      133979,
      166715,
      201821,
      68623
    ]
  },
  {
    "name": "明基 阅读台灯 防蓝光",
    "category": "护眼台灯",
    "reason": "618期间搜索量飙升",
    "currentSales": 48491,
    "growth7d": 302,
    "predictScore": 88,
    "trendData": [
      14733,
      18219,
      22278,
      27215,
      33944,
      41411,
      52435,
      65180,
      79498,
      97662,
      120403,
      147426,
      48491
    ]
  },
  {
    "name": "飞利浦 床头台灯 护眼",
    "category": "护眼台灯",
    "reason": "直播间持续爆单",
    "currentSales": 12021,
    "growth7d": 228,
    "predictScore": 81,
    "trendData": [
      4289,
      5101,
      6118,
      7373,
      8621,
      10349,
      12435,
      14954,
      18054,
      21843,
      25792,
      29965,
      12021
    ]
  },
  {
    "name": "飞利浦 USB台灯 宿舍",
    "category": "护眼台灯",
    "reason": "社交平台口碑传播",
    "currentSales": 77696,
    "growth7d": 254,
    "predictScore": 79,
    "trendData": [
      26005,
      30959,
      36792,
      44385,
      54416,
      65965,
      80815,
      95425,
      113066,
      136657,
      163989,
      196487,
      77696
    ]
  },
  {
    "name": "飞利浦 长臂台灯 办公",
    "category": "护眼台灯",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 18388,
    "growth7d": 281,
    "predictScore": 68,
    "trendData": [
      5894,
      7102,
      8766,
      10590,
      13185,
      15901,
      19247,
      23637,
      28639,
      35771,
      44093,
      53451,
      18388
    ]
  },
  {
    "name": "晨光 自粘书套 免裁剪",
    "category": "书皮/书套",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 70379,
    "growth7d": 131,
    "predictScore": 82,
    "trendData": [
      33820,
      36835,
      40110,
      44546,
      49100,
      54272,
      59307,
      65311,
      72258,
      79479,
      87778,
      96675,
      70379
    ]
  },
  {
    "name": "晨光 透明书皮 加厚",
    "category": "书皮/书套",
    "reason": "小红书种草笔记爆发",
    "currentSales": 46946,
    "growth7d": 199,
    "predictScore": 75,
    "trendData": [
      18010,
      21190,
      24529,
      28759,
      33502,
      39464,
      46680,
      53979,
      63288,
      74856,
      87303,
      101642,
      46946
    ]
  },
  {
    "name": "真彩 课本书套 防水",
    "category": "书皮/书套",
    "reason": "618期间搜索量飙升",
    "currentSales": 20954,
    "growth7d": 284,
    "predictScore": 85,
    "trendData": [
      6578,
      8232,
      10293,
      12473,
      15451,
      19084,
      23878,
      29598,
      37012,
      45256,
      55072,
      66653,
      20954
    ]
  },
  {
    "name": "真彩 塑料书皮 卡通",
    "category": "书皮/书套",
    "reason": "直播间持续爆单",
    "currentSales": 20717,
    "growth7d": 236,
    "predictScore": 87,
    "trendData": [
      7198,
      8647,
      10426,
      12290,
      14907,
      17709,
      21120,
      25650,
      30463,
      36114,
      42497,
      49621,
      20717
    ]
  },
  {
    "name": "广博 书皮 一年级专用",
    "category": "书皮/书套",
    "reason": "社交平台口碑传播",
    "currentSales": 71023,
    "growth7d": 356,
    "predictScore": 96,
    "trendData": [
      20104,
      25531,
      32806,
      41531,
      54338,
      68744,
      88738,
      116059,
      147334,
      190364,
      240427,
      314246,
      71023
    ]
  },
  {
    "name": "真彩 环保包书皮",
    "category": "书皮/书套",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 49820,
    "growth7d": 289,
    "predictScore": 86,
    "trendData": [
      15749,
      19752,
      24743,
      30936,
      37797,
      46537,
      56980,
      69600,
      85715,
      107429,
      133090,
      163242,
      49820
    ]
  },
  {
    "name": "鲁本斯 纺织颜料 手绘",
    "category": "美术颜料",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 70921,
    "growth7d": 150,
    "predictScore": 72,
    "trendData": [
      31668,
      34856,
      39815,
      43985,
      50365,
      56035,
      63409,
      72110,
      81455,
      92057,
      103889,
      114381,
      70921
    ]
  },
  {
    "name": "樱花 颜料画笔套装",
    "category": "美术颜料",
    "reason": "小红书种草笔记爆发",
    "currentSales": 25270,
    "growth7d": 121,
    "predictScore": 82,
    "trendData": [
      12534,
      13767,
      15198,
      16450,
      17955,
      19357,
      21462,
      23818,
      26598,
      28885,
      31434,
      35141,
      25270
    ]
  },
  {
    "name": "鲁本斯 固体水彩 便携",
    "category": "美术颜料",
    "reason": "618期间搜索量飙升",
    "currentSales": 63418,
    "growth7d": 266,
    "predictScore": 82,
    "trendData": [
      21472,
      26120,
      32076,
      38551,
      47426,
      56926,
      70374,
      86984,
      107106,
      130349,
      156545,
      187251,
      63418
    ]
  },
  {
    "name": "马利 金属色颜料",
    "category": "美术颜料",
    "reason": "直播间持续爆单",
    "currentSales": 29412,
    "growth7d": 244,
    "predictScore": 92,
    "trendData": [
      10385,
      12601,
      15274,
      18364,
      22159,
      26048,
      30832,
      36271,
      44178,
      53506,
      62747,
      73631,
      29412
    ]
  },
  {
    "name": "鲁本斯 颜料调色盘",
    "category": "美术颜料",
    "reason": "社交平台口碑传播",
    "currentSales": 64350,
    "growth7d": 139,
    "predictScore": 80,
    "trendData": [
      29654,
      32738,
      37194,
      42035,
      46044,
      51690,
      57438,
      65457,
      72572,
      82013,
      92723,
      103897,
      64350
    ]
  },
  {
    "name": "马利 颜料补充装",
    "category": "美术颜料",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 11253,
    "growth7d": 297,
    "predictScore": 70,
    "trendData": [
      3510,
      4399,
      5372,
      6675,
      8334,
      10472,
      12968,
      15754,
      19716,
      24795,
      30872,
      38308,
      11253
    ]
  },
  {
    "name": "得力 双面胶 强力",
    "category": "办公文具",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 71463,
    "growth7d": 169,
    "predictScore": 95,
    "trendData": [
      29824,
      34661,
      39708,
      45619,
      51908,
      58128,
      65127,
      73150,
      84327,
      97852,
      112788,
      129777,
      71463
    ]
  },
  {
    "name": "广博 透明胶带 封箱",
    "category": "办公文具",
    "reason": "小红书种草笔记爆发",
    "currentSales": 73593,
    "growth7d": 363,
    "predictScore": 89,
    "trendData": [
      20530,
      25999,
      33706,
      43427,
      54902,
      69967,
      89614,
      117338,
      153377,
      197137,
      257527,
      326478,
      73593
    ]
  },
  {
    "name": "广博 美工刀 自动锁",
    "category": "办公文具",
    "reason": "618期间搜索量飙升",
    "currentSales": 35881,
    "growth7d": 249,
    "predictScore": 79,
    "trendData": [
      12583,
      14875,
      17945,
      21404,
      26166,
      31824,
      38890,
      46018,
      55817,
      67653,
      80222,
      94884,
      35881
    ]
  },
  {
    "name": "齐心 计算器 太阳能",
    "category": "办公文具",
    "reason": "直播间持续爆单",
    "currentSales": 38108,
    "growth7d": 252,
    "predictScore": 98,
    "trendData": [
      13119,
      16075,
      19587,
      24012,
      28823,
      34963,
      42821,
      50885,
      60977,
      72366,
      88191,
      104004,
      38108
    ]
  },
  {
    "name": "晨光 白板 磁性",
    "category": "办公文具",
    "reason": "社交平台口碑传播",
    "currentSales": 57677,
    "growth7d": 242,
    "predictScore": 96,
    "trendData": [
      20374,
      24127,
      28552,
      33992,
      40060,
      47122,
      55496,
      67565,
      80678,
      97965,
      117004,
      138082,
      57677
    ]
  },
  {
    "name": "齐心 印台 速干",
    "category": "办公文具",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 42685,
    "growth7d": 305,
    "predictScore": 88,
    "trendData": [
      13140,
      16460,
      20402,
      25191,
      30866,
      38021,
      47613,
      59910,
      73174,
      92337,
      115541,
      145027,
      42685
    ]
  },
  {
    "name": "百乐 毛笔套装 书法",
    "category": "笔类套装/礼盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 72006,
    "growth7d": 188,
    "predictScore": 85,
    "trendData": [
      29475,
      34595,
      39749,
      45434,
      51371,
      60467,
      70095,
      81251,
      95553,
      108989,
      128252,
      147524,
      72006
    ]
  },
  {
    "name": "毕加索 签字笔礼盒",
    "category": "笔类套装/礼盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 51917,
    "growth7d": 285,
    "predictScore": 95,
    "trendData": [
      16732,
      20718,
      25749,
      32142,
      39882,
      48837,
      58932,
      71472,
      89440,
      110771,
      136058,
      166183,
      51917
    ]
  },
  {
    "name": "英雄 学生笔类大礼包",
    "category": "笔类套装/礼盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 78345,
    "growth7d": 231,
    "predictScore": 76,
    "trendData": [
      28588,
      34223,
      40521,
      47933,
      55793,
      65915,
      79563,
      93866,
      112054,
      135172,
      158131,
      184796,
      78345
    ]
  },
  {
    "name": "毕加索 马克笔+彩铅套装",
    "category": "笔类套装/礼盒",
    "reason": "直播间持续爆单",
    "currentSales": 46804,
    "growth7d": 261,
    "predictScore": 70,
    "trendData": [
      15685,
      18636,
      22840,
      27413,
      32753,
      39347,
      47869,
      57491,
      70681,
      85748,
      104220,
      123596,
      46804
    ]
  },
  {
    "name": "毕加索 考试笔套装",
    "category": "笔类套装/礼盒",
    "reason": "社交平台口碑传播",
    "currentSales": 51004,
    "growth7d": 345,
    "predictScore": 80,
    "trendData": [
      14497,
      18331,
      23477,
      29367,
      37051,
      47423,
      61375,
      79502,
      101719,
      132077,
      166166,
      214318,
      51004
    ]
  },
  {
    "name": "毕加索 彩色笔全套",
    "category": "笔类套装/礼盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 74117,
    "growth7d": 313,
    "predictScore": 72,
    "trendData": [
      22526,
      28200,
      35473,
      43523,
      54492,
      68501,
      86737,
      108565,
      134764,
      170632,
      214573,
      272404,
      74117
    ]
  },
  {
    "name": "三年二班 复古文具",
    "category": "文创用品",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 72548,
    "growth7d": 207,
    "predictScore": 75,
    "trendData": [
      28008,
      33195,
      38252,
      45411,
      53290,
      63112,
      72456,
      82972,
      95354,
      111644,
      128486,
      147746,
      72548
    ]
  },
  {
    "name": "九木杂物社 国潮文具套装",
    "category": "文创用品",
    "reason": "小红书种草笔记爆发",
    "currentSales": 30240,
    "growth7d": 207,
    "predictScore": 69,
    "trendData": [
      11721,
      13597,
      16169,
      18727,
      21862,
      25681,
      30370,
      35418,
      40577,
      48355,
      55619,
      65357,
      30240
    ]
  },
  {
    "name": "kinbor 治愈系文具",
    "category": "文创用品",
    "reason": "618期间搜索量飙升",
    "currentSales": 50808,
    "growth7d": 213,
    "predictScore": 73,
    "trendData": [
      19345,
      22480,
      26114,
      30633,
      35395,
      42353,
      50488,
      59387,
      69756,
      80260,
      92612,
      106919,
      50808
    ]
  },
  {
    "name": "晨光生活馆 极简文具",
    "category": "文创用品",
    "reason": "直播间持续爆单",
    "currentSales": 55500,
    "growth7d": 269,
    "predictScore": 76,
    "trendData": [
      18154,
      21787,
      26840,
      32847,
      40681,
      50398,
      60863,
      73822,
      89308,
      110634,
      134021,
      166421,
      55500
    ]
  },
  {
    "name": "kinbor 莫兰迪色文具",
    "category": "文创用品",
    "reason": "社交平台口碑传播",
    "currentSales": 44331,
    "growth7d": 127,
    "predictScore": 96,
    "trendData": [
      21962,
      24108,
      27269,
      30386,
      33360,
      36252,
      40377,
      45477,
      50839,
      55196,
      62092,
      68456,
      44331
    ]
  },
  {
    "name": "晨光生活馆 原创设计笔",
    "category": "文创用品",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 35549,
    "growth7d": 320,
    "predictScore": 90,
    "trendData": [
      10689,
      13365,
      17047,
      21622,
      27633,
      34033,
      43541,
      54178,
      68291,
      86707,
      109508,
      135031,
      35549
    ]
  },
  {
    "name": "得力 烫印姓名贴",
    "category": "姓名贴",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 73090,
    "growth7d": 226,
    "predictScore": 65,
    "trendData": [
      26713,
      31968,
      38544,
      45532,
      53104,
      63277,
      75101,
      88702,
      103998,
      124909,
      146763,
      176048,
      73090
    ]
  },
  {
    "name": "得力 硅胶姓名扣",
    "category": "姓名贴",
    "reason": "小红书种草笔记爆发",
    "currentSales": 78564,
    "growth7d": 129,
    "predictScore": 76,
    "trendData": [
      37365,
      42294,
      45912,
      51333,
      56157,
      63167,
      70020,
      78397,
      85447,
      93552,
      104982,
      118499,
      78564
    ]
  },
  {
    "name": "兄弟 校服姓名标签",
    "category": "姓名贴",
    "reason": "618期间搜索量飙升",
    "currentSales": 23272,
    "growth7d": 195,
    "predictScore": 70,
    "trendData": [
      9274,
      10915,
      12435,
      14464,
      16590,
      19273,
      22686,
      26605,
      30740,
      35193,
      40048,
      45668,
      23272
    ]
  },
  {
    "name": "晨光 文具姓名贴",
    "category": "姓名贴",
    "reason": "直播间持续爆单",
    "currentSales": 64196,
    "growth7d": 277,
    "predictScore": 81,
    "trendData": [
      20505,
      24854,
      30777,
      38390,
      47303,
      58011,
      69539,
      85174,
      105625,
      128273,
      154872,
      193218,
      64196
    ]
  },
  {
    "name": "得力 书本姓名贴 透明",
    "category": "姓名贴",
    "reason": "社交平台口碑传播",
    "currentSales": 37658,
    "growth7d": 230,
    "predictScore": 80,
    "trendData": [
      13481,
      15880,
      18713,
      21981,
      25960,
      30901,
      36472,
      43919,
      52847,
      61825,
      73490,
      85405,
      37658
    ]
  },
  {
    "name": "兄弟 贴纸式姓名贴",
    "category": "姓名贴",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 66981,
    "growth7d": 328,
    "predictScore": 75,
    "trendData": [
      19898,
      24865,
      30930,
      38990,
      48923,
      61490,
      76452,
      94623,
      121157,
      154347,
      195895,
      244357,
      66981
    ]
  },
  {
    "name": "晨光 自动橡皮擦 笔形",
    "category": "电动橡皮擦",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 73633,
    "growth7d": 244,
    "predictScore": 89,
    "trendData": [
      25622,
      30938,
      37382,
      43911,
      53060,
      63568,
      74687,
      90843,
      108548,
      128144,
      153555,
      184021,
      73633
    ]
  },
  {
    "name": "得力 电动橡皮 细节擦除",
    "category": "电动橡皮擦",
    "reason": "小红书种草笔记爆发",
    "currentSales": 56887,
    "growth7d": 371,
    "predictScore": 83,
    "trendData": [
      15514,
      20167,
      25775,
      32840,
      43241,
      54965,
      70385,
      92853,
      118884,
      153859,
      198521,
      253826,
      56887
    ]
  },
  {
    "name": "晨光 素描电动橡皮套装",
    "category": "电动橡皮擦",
    "reason": "618期间搜索量飙升",
    "currentSales": 65735,
    "growth7d": 178,
    "predictScore": 67,
    "trendData": [
      27436,
      31351,
      36607,
      42247,
      48128,
      54272,
      63113,
      73842,
      83960,
      95705,
      107456,
      121098,
      65735
    ]
  },
  {
    "name": "得力 学生电动橡皮",
    "category": "电动橡皮擦",
    "reason": "直播间持续爆单",
    "currentSales": 72891,
    "growth7d": 285,
    "predictScore": 87,
    "trendData": [
      23693,
      29002,
      36098,
      44073,
      54027,
      65583,
      81309,
      100559,
      122727,
      152188,
      190742,
      239083,
      72891
    ]
  },
  {
    "name": "辉柏嘉 静音电动橡皮",
    "category": "电动橡皮擦",
    "reason": "社交平台口碑传播",
    "currentSales": 30985,
    "growth7d": 333,
    "predictScore": 97,
    "trendData": [
      9217,
      11597,
      14795,
      19012,
      24034,
      29898,
      37277,
      47791,
      61587,
      77234,
      96731,
      123018,
      30985
    ]
  },
  {
    "name": "得力 电动橡皮+替芯组合",
    "category": "电动橡皮擦",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 28413,
    "growth7d": 336,
    "predictScore": 92,
    "trendData": [
      8341,
      10417,
      13150,
      16474,
      21112,
      27069,
      34033,
      43599,
      54514,
      69681,
      88872,
      112130,
      28413
    ]
  },
  {
    "name": "创意工坊 拼豆镊子工具",
    "category": "拼豆/咕卡套装",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 74175,
    "growth7d": 263,
    "predictScore": 79,
    "trendData": [
      24588,
      29972,
      36316,
      44262,
      53166,
      64080,
      77776,
      93509,
      113904,
      137910,
      168583,
      201969,
      74175
    ]
  },
  {
    "name": "拼豆世界 咕卡底卡 透明",
    "category": "拼豆/咕卡套装",
    "reason": "小红书种草笔记爆发",
    "currentSales": 35210,
    "growth7d": 293,
    "predictScore": 89,
    "trendData": [
      11052,
      13503,
      16533,
      20402,
      25366,
      30979,
      38923,
      47589,
      58278,
      72695,
      88123,
      108590,
      35210
    ]
  },
  {
    "name": "手工达人 拼豆挂件材料",
    "category": "拼豆/咕卡套装",
    "reason": "618期间搜索量飙升",
    "currentSales": 38199,
    "growth7d": 160,
    "predictScore": 97,
    "trendData": [
      16810,
      19459,
      22286,
      25500,
      28833,
      32951,
      37825,
      42231,
      47208,
      53541,
      61938,
      68925,
      38199
    ]
  },
  {
    "name": "手工达人 咕卡装饰宝石",
    "category": "拼豆/咕卡套装",
    "reason": "直播间持续爆单",
    "currentSales": 11587,
    "growth7d": 293,
    "predictScore": 92,
    "trendData": [
      3681,
      4550,
      5692,
      7084,
      8639,
      10811,
      13307,
      16616,
      20783,
      25265,
      31564,
      39748,
      11587
    ]
  },
  {
    "name": "拼豆世界 拼豆收纳盒",
    "category": "拼豆/咕卡套装",
    "reason": "社交平台口碑传播",
    "currentSales": 24312,
    "growth7d": 116,
    "predictScore": 80,
    "trendData": [
      12366,
      13507,
      14545,
      15988,
      17605,
      19392,
      21664,
      24129,
      26008,
      28403,
      31812,
      34524,
      24312
    ]
  },
  {
    "name": "手工达人 咕卡奶油胶",
    "category": "拼豆/咕卡套装",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 59845,
    "growth7d": 344,
    "predictScore": 77,
    "trendData": [
      17366,
      22544,
      28873,
      37390,
      47046,
      59157,
      75201,
      95842,
      121746,
      156139,
      200112,
      255348,
      59845
    ]
  },
  {
    "name": "晨光 马克雷诺彩铅",
    "category": "彩色铅笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 74717,
    "growth7d": 282,
    "predictScore": 69,
    "trendData": [
      23659,
      29112,
      35372,
      42905,
      53373,
      64716,
      77824,
      96366,
      119621,
      148448,
      185043,
      230874,
      74717
    ]
  },
  {
    "name": "晨光 素描彩铅",
    "category": "彩色铅笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 13534,
    "growth7d": 214,
    "predictScore": 96,
    "trendData": [
      5095,
      6077,
      7110,
      8483,
      9918,
      11611,
      13719,
      16124,
      18834,
      21655,
      25627,
      30372,
      13534
    ]
  },
  {
    "name": "晨光 彩铅收纳笔帘",
    "category": "彩色铅笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 10662,
    "growth7d": 142,
    "predictScore": 94,
    "trendData": [
      4970,
      5579,
      6265,
      7107,
      7975,
      8836,
      10011,
      11142,
      12242,
      13814,
      15760,
      17315,
      10662
    ]
  },
  {
    "name": "辉柏嘉 秘密花园彩铅",
    "category": "彩色铅笔",
    "reason": "直播间持续爆单",
    "currentSales": 20283,
    "growth7d": 302,
    "predictScore": 98,
    "trendData": [
      6290,
      7855,
      9883,
      12046,
      15226,
      18876,
      23080,
      29112,
      35863,
      44545,
      55505,
      70263,
      20283
    ]
  },
  {
    "name": "马可 软芯彩铅",
    "category": "彩色铅笔",
    "reason": "社交平台口碑传播",
    "currentSales": 17638,
    "growth7d": 218,
    "predictScore": 97,
    "trendData": [
      6404,
      7503,
      8804,
      10202,
      12074,
      13938,
      16487,
      19634,
      22825,
      26831,
      31742,
      37903,
      17638
    ]
  },
  {
    "name": "辉柏嘉 彩铅补充装",
    "category": "彩色铅笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 21277,
    "growth7d": 352,
    "predictScore": 95,
    "trendData": [
      6104,
      7919,
      10288,
      13243,
      17017,
      21828,
      28052,
      35566,
      45887,
      59046,
      76042,
      98120,
      21277
    ]
  },
  {
    "name": "得力 磁吸白板笔",
    "category": "白板笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 75259,
    "growth7d": 301,
    "predictScore": 92,
    "trendData": [
      23758,
      29507,
      35951,
      45194,
      55896,
      68181,
      84637,
      103615,
      131025,
      160009,
      195311,
      243614,
      75259
    ]
  },
  {
    "name": "齐心 环保白板笔",
    "category": "白板笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 61857,
    "growth7d": 136,
    "predictScore": 70,
    "trendData": [
      29651,
      33051,
      36897,
      40698,
      44593,
      49980,
      55351,
      62476,
      69496,
      76652,
      84728,
      96491,
      61857
    ]
  },
  {
    "name": "齐心 速干白板笔",
    "category": "白板笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 53126,
    "growth7d": 124,
    "predictScore": 91,
    "trendData": [
      26373,
      28680,
      31563,
      35491,
      39526,
      44394,
      49631,
      55063,
      62195,
      69825,
      78550,
      85189,
      53126
    ]
  },
  {
    "name": "白雪 白板笔 12色套装",
    "category": "白板笔",
    "reason": "直播间持续爆单",
    "currentSales": 28979,
    "growth7d": 310,
    "predictScore": 70,
    "trendData": [
      8791,
      11084,
      14016,
      17413,
      21900,
      26876,
      33965,
      43246,
      54587,
      69200,
      85947,
      109301,
      28979
    ]
  },
  {
    "name": "齐心 迷你白板笔",
    "category": "白板笔",
    "reason": "社交平台口碑传播",
    "currentSales": 10965,
    "growth7d": 321,
    "predictScore": 81,
    "trendData": [
      3286,
      4114,
      5228,
      6635,
      8404,
      10573,
      13210,
      16760,
      20914,
      26345,
      32846,
      41180,
      10965
    ]
  },
  {
    "name": "白雪 白板笔 替换芯",
    "category": "白板笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 52709,
    "growth7d": 360,
    "predictScore": 79,
    "trendData": [
      14957,
      19394,
      24583,
      31452,
      41257,
      53964,
      70104,
      91925,
      120434,
      155487,
      201210,
      262511,
      52709
    ]
  },
  {
    "name": "晨光 A5文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 75802,
    "growth7d": 320,
    "predictScore": 82,
    "trendData": [
      22960,
      28781,
      36602,
      45798,
      58604,
      74839,
      95807,
      120736,
      149441,
      187016,
      232786,
      290273,
      75802
    ]
  },
  {
    "name": "得力 彩色分类文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "小红书种草笔记爆发",
    "currentSales": 40181,
    "growth7d": 378,
    "predictScore": 76,
    "trendData": [
      10731,
      13764,
      18016,
      23584,
      31094,
      40954,
      52401,
      66984,
      87265,
      113646,
      150406,
      193822,
      40181
    ]
  },
  {
    "name": "三木 牛津布资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "618期间搜索量飙升",
    "currentSales": 25589,
    "growth7d": 107,
    "predictScore": 88,
    "trendData": [
      13557,
      14956,
      16136,
      17997,
      19904,
      21677,
      23926,
      26479,
      29421,
      31413,
      34862,
      37342,
      25589
    ]
  },
  {
    "name": "三木 加厚透明袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "直播间持续爆单",
    "currentSales": 37675,
    "growth7d": 318,
    "predictScore": 75,
    "trendData": [
      11185,
      14237,
      18094,
      22906,
      28664,
      36253,
      45491,
      56189,
      69819,
      86808,
      107467,
      137296,
      37675
    ]
  },
  {
    "name": "晨光 科目分类袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "社交平台口碑传播",
    "currentSales": 74292,
    "growth7d": 104,
    "predictScore": 97,
    "trendData": [
      39033,
      42388,
      45435,
      49222,
      54324,
      57886,
      61923,
      68145,
      74081,
      81319,
      90620,
      96711,
      74292
    ]
  },
  {
    "name": "三木 票据收纳袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 14141,
    "growth7d": 368,
    "predictScore": 97,
    "trendData": [
      3970,
      5145,
      6616,
      8413,
      10840,
      13911,
      18265,
      23830,
      30504,
      39513,
      51378,
      65198,
      14141
    ]
  },
  {
    "name": "真彩 创意修正带",
    "category": "修正带",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 76344,
    "growth7d": 339,
    "predictScore": 72,
    "trendData": [
      22233,
      28125,
      35862,
      46455,
      59111,
      75914,
      96335,
      120050,
      151379,
      194017,
      246177,
      306881,
      76344
    ]
  },
  {
    "name": "得力 修正带替芯 3个",
    "category": "修正带",
    "reason": "小红书种草笔记爆发",
    "currentSales": 18504,
    "growth7d": 300,
    "predictScore": 83,
    "trendData": [
      5670,
      7113,
      8929,
      10884,
      13551,
      16495,
      20708,
      25506,
      31807,
      39934,
      49734,
      61786,
      18504
    ]
  },
  {
    "name": "真彩 宽幅修正带",
    "category": "修正带",
    "reason": "618期间搜索量飙升",
    "currentSales": 68053,
    "growth7d": 89,
    "predictScore": 85,
    "trendData": [
      38907,
      41558,
      43907,
      46343,
      50858,
      53617,
      58377,
      64400,
      70322,
      74681,
      81689,
      86345,
      68053
    ]
  },
  {
    "name": "得力 按动修正带",
    "category": "修正带",
    "reason": "直播间持续爆单",
    "currentSales": 46370,
    "growth7d": 326,
    "predictScore": 81,
    "trendData": [
      13478,
      17317,
      22118,
      27416,
      34135,
      42746,
      53257,
      66416,
      84542,
      107281,
      137744,
      176782,
      46370
    ]
  },
  {
    "name": "得力 涂改带 考试用",
    "category": "修正带",
    "reason": "社交平台口碑传播",
    "currentSales": 67619,
    "growth7d": 207,
    "predictScore": 81,
    "trendData": [
      25958,
      30272,
      35394,
      42250,
      50142,
      58627,
      69546,
      81950,
      96085,
      113562,
      133791,
      157452,
      67619
    ]
  },
  {
    "name": "得力 修正带 不断带",
    "category": "修正带",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 45573,
    "growth7d": 375,
    "predictScore": 82,
    "trendData": [
      12679,
      16412,
      21394,
      28092,
      36926,
      48291,
      61629,
      79951,
      103875,
      134917,
      176165,
      225938,
      45573
    ]
  },
  {
    "name": "百乐 旋转吸墨钢笔",
    "category": "钢笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 76886,
    "growth7d": 358,
    "predictScore": 95,
    "trendData": [
      21567,
      27531,
      35197,
      45387,
      57426,
      74166,
      96995,
      124362,
      159703,
      201528,
      260566,
      337752,
      76886
    ]
  },
  {
    "name": "凌美 速写钢笔",
    "category": "钢笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 66828,
    "growth7d": 222,
    "predictScore": 90,
    "trendData": [
      24385,
      28685,
      34469,
      40633,
      47605,
      55574,
      65650,
      77805,
      92689,
      107397,
      125370,
      149943,
      66828
    ]
  },
  {
    "name": "晨光 钢笔套装 含墨囊",
    "category": "钢笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 40516,
    "growth7d": 391,
    "predictScore": 82,
    "trendData": [
      10815,
      14376,
      19124,
      24704,
      32982,
      43390,
      57273,
      74215,
      97885,
      127486,
      168797,
      217581,
      40516
    ]
  },
  {
    "name": "晨光 金属杆钢笔",
    "category": "钢笔",
    "reason": "直播间持续爆单",
    "currentSales": 55066,
    "growth7d": 334,
    "predictScore": 86,
    "trendData": [
      16309,
      20334,
      26101,
      32968,
      42488,
      54800,
      70526,
      88792,
      111278,
      138496,
      177265,
      228538,
      55066
    ]
  },
  {
    "name": "晨光 复古钢笔",
    "category": "钢笔",
    "reason": "社交平台口碑传播",
    "currentSales": 60946,
    "growth7d": 309,
    "predictScore": 97,
    "trendData": [
      18395,
      22913,
      29002,
      36348,
      46132,
      58685,
      73472,
      92241,
      115955,
      146718,
      182094,
      225016,
      60946
    ]
  },
  {
    "name": "派克 可替换墨囊钢笔",
    "category": "钢笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 77005,
    "growth7d": 383,
    "predictScore": 66,
    "trendData": [
      20408,
      26401,
      34902,
      45557,
      58824,
      75475,
      97373,
      125678,
      165789,
      216043,
      283437,
      367576,
      77005
    ]
  },
  {
    "name": "宝虹 儿童画本 空白",
    "category": "画纸/画本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 77429,
    "growth7d": 377,
    "predictScore": 86,
    "trendData": [
      20956,
      26992,
      34599,
      44414,
      58096,
      75453,
      97835,
      128959,
      168600,
      217852,
      286925,
      371815,
      77429
    ]
  },
  {
    "name": "宝虹 绘画本 A3",
    "category": "画纸/画本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 45151,
    "growth7d": 144,
    "predictScore": 97,
    "trendData": [
      20802,
      22844,
      25082,
      28562,
      31366,
      35053,
      38811,
      44189,
      50179,
      55792,
      63564,
      69900,
      45151
    ]
  },
  {
    "name": "获多福 牛皮纸画本",
    "category": "画纸/画本",
    "reason": "618期间搜索量飙升",
    "currentSales": 12979,
    "growth7d": 373,
    "predictScore": 79,
    "trendData": [
      3552,
      4597,
      6012,
      7707,
      9838,
      12600,
      16443,
      21249,
      27619,
      35813,
      46847,
      59723,
      12979
    ]
  },
  {
    "name": "康颂 手绘本 硬壳",
    "category": "画纸/画本",
    "reason": "直播间持续爆单",
    "currentSales": 63762,
    "growth7d": 343,
    "predictScore": 92,
    "trendData": [
      18471,
      23266,
      30030,
      38661,
      49610,
      63405,
      81083,
      103112,
      132432,
      168320,
      214888,
      278464,
      63762
    ]
  },
  {
    "name": "温莎 临摹纸 拷贝纸",
    "category": "画纸/画本",
    "reason": "社交平台口碑传播",
    "currentSales": 54273,
    "growth7d": 92,
    "predictScore": 81,
    "trendData": [
      30954,
      33421,
      35656,
      38063,
      40200,
      43401,
      46540,
      50597,
      55470,
      61202,
      64796,
      71223,
      54273
    ]
  },
  {
    "name": "老人头 刮画纸 彩色",
    "category": "画纸/画本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 38437,
    "growth7d": 391,
    "predictScore": 84,
    "trendData": [
      10087,
      13041,
      16828,
      21834,
      28777,
      37650,
      49098,
      65501,
      84437,
      110393,
      145516,
      190797,
      38437
    ]
  },
  {
    "name": "晨光 万能胶",
    "category": "胶水",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 77971,
    "growth7d": 395,
    "predictScore": 76,
    "trendData": [
      20424,
      26527,
      35398,
      46975,
      61072,
      79713,
      106391,
      138662,
      184398,
      243697,
      314467,
      407149,
      77971
    ]
  },
  {
    "name": "3M 热熔胶枪",
    "category": "胶水",
    "reason": "小红书种草笔记爆发",
    "currentSales": 23474,
    "growth7d": 386,
    "predictScore": 70,
    "trendData": [
      6373,
      8388,
      10825,
      14016,
      18514,
      24325,
      32334,
      41651,
      55228,
      72415,
      94676,
      123031,
      23474
    ]
  },
  {
    "name": "3M 双面胶点 替芯",
    "category": "胶水",
    "reason": "618期间搜索量飙升",
    "currentSales": 55443,
    "growth7d": 356,
    "predictScore": 76,
    "trendData": [
      15553,
      19595,
      25205,
      32081,
      40705,
      52780,
      68127,
      87854,
      112574,
      145413,
      188009,
      237171,
      55443
    ]
  },
  {
    "name": "齐心 胶水笔 细头",
    "category": "胶水",
    "reason": "直播间持续爆单",
    "currentSales": 72458,
    "growth7d": 351,
    "predictScore": 97,
    "trendData": [
      20573,
      26160,
      33932,
      42788,
      54636,
      69147,
      87808,
      112710,
      142544,
      184825,
      235215,
      306179,
      72458
    ]
  },
  {
    "name": "得力 PVA白乳胶",
    "category": "胶水",
    "reason": "社交平台口碑传播",
    "currentSales": 47600,
    "growth7d": 195,
    "predictScore": 98,
    "trendData": [
      18585,
      21557,
      25096,
      29559,
      33676,
      39848,
      45380,
      52870,
      62476,
      71067,
      83324,
      96558,
      47600
    ]
  },
  {
    "name": "UHU 手工胶水套装",
    "category": "胶水",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 69869,
    "growth7d": 399,
    "predictScore": 68,
    "trendData": [
      18161,
      23467,
      30713,
      41146,
      53272,
      71045,
      93638,
      124302,
      162714,
      213428,
      282661,
      374665,
      69869
    ]
  },
  {
    "name": "真彩 速干笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 78513,
    "growth7d": 94,
    "predictScore": 66,
    "trendData": [
      44789,
      47662,
      52029,
      55933,
      61345,
      65414,
      70473,
      77037,
      85272,
      94281,
      100726,
      110618,
      78513
    ]
  },
  {
    "name": "晨光 子弹头笔芯 100支",
    "category": "笔芯/替芯/笔壳",
    "reason": "小红书种草笔记爆发",
    "currentSales": 71798,
    "growth7d": 308,
    "predictScore": 77,
    "trendData": [
      22326,
      27639,
      34186,
      42892,
      53508,
      67634,
      84891,
      105398,
      133881,
      169277,
      208101,
      260786,
      71798
    ]
  },
  {
    "name": "得力 针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "618期间搜索量飙升",
    "currentSales": 27906,
    "growth7d": 338,
    "predictScore": 73,
    "trendData": [
      8047,
      10258,
      12965,
      16374,
      20636,
      26039,
      33220,
      42722,
      53924,
      69345,
      88553,
      110456,
      27906
    ]
  },
  {
    "name": "晨光 全针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "直播间持续爆单",
    "currentSales": 11154,
    "growth7d": 359,
    "predictScore": 70,
    "trendData": [
      3105,
      3985,
      5194,
      6672,
      8477,
      11047,
      14482,
      18762,
      24297,
      30912,
      39215,
      51275,
      11154
    ]
  },
  {
    "name": "得力 笔壳 透明",
    "category": "笔芯/替芯/笔壳",
    "reason": "社交平台口碑传播",
    "currentSales": 40927,
    "growth7d": 298,
    "predictScore": 81,
    "trendData": [
      12941,
      16048,
      20244,
      25066,
      30642,
      37902,
      47580,
      59138,
      71975,
      87931,
      108703,
      132450,
      40927
    ]
  },
  {
    "name": "得力 笔杆 金属",
    "category": "笔芯/替芯/笔壳",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 31301,
    "growth7d": 87,
    "predictScore": 86,
    "trendData": [
      17732,
      19421,
      20995,
      22795,
      24512,
      26050,
      28285,
      30398,
      32915,
      35213,
      38187,
      41764,
      31301
    ]
  },
  {
    "name": "晨光 细头记号笔",
    "category": "记号笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 79055,
    "growth7d": 113,
    "predictScore": 89,
    "trendData": [
      41309,
      44435,
      48656,
      54454,
      59332,
      63697,
      71096,
      76721,
      82868,
      89985,
      98305,
      107924,
      79055
    ]
  },
  {
    "name": "得力 记号笔套装 12色",
    "category": "记号笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 50121,
    "growth7d": 230,
    "predictScore": 84,
    "trendData": [
      17737,
      21459,
      25391,
      29569,
      34716,
      40414,
      47731,
      57038,
      66421,
      77551,
      93162,
      112432,
      50121
    ]
  },
  {
    "name": "雪人 大头笔 物流用",
    "category": "记号笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 70370,
    "growth7d": 320,
    "predictScore": 70,
    "trendData": [
      20892,
      25901,
      32157,
      40295,
      50442,
      64413,
      81213,
      100097,
      124424,
      159293,
      200875,
      247718,
      70370
    ]
  },
  {
    "name": "斑马 银色记号笔",
    "category": "记号笔",
    "reason": "直播间持续爆单",
    "currentSales": 19849,
    "growth7d": 367,
    "predictScore": 75,
    "trendData": [
      5419,
      7021,
      9196,
      12029,
      15809,
      20404,
      26566,
      34733,
      44297,
      57492,
      75578,
      99262,
      19849
    ]
  },
  {
    "name": "斑马 快递记号笔",
    "category": "记号笔",
    "reason": "社交平台口碑传播",
    "currentSales": 34254,
    "growth7d": 81,
    "predictScore": 98,
    "trendData": [
      20232,
      21733,
      23095,
      24305,
      25749,
      28181,
      30314,
      32577,
      34411,
      36466,
      38429,
      41578,
      34254
    ]
  },
  {
    "name": "得力 CD记号笔",
    "category": "记号笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 62733,
    "growth7d": 95,
    "predictScore": 71,
    "trendData": [
      34353,
      37599,
      41337,
      44560,
      49108,
      53431,
      58760,
      62762,
      69209,
      74336,
      81076,
      89830,
      62733
    ]
  },
  {
    "name": "田英章 数字描红本",
    "category": "练字帖/描红本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 79598,
    "growth7d": 132,
    "predictScore": 79,
    "trendData": [
      38401,
      41749,
      45855,
      51051,
      57810,
      65372,
      72235,
      80549,
      88872,
      99191,
      110754,
      121551,
      79598
    ]
  },
  {
    "name": "田英章 笔画练字",
    "category": "练字帖/描红本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 28445,
    "growth7d": 151,
    "predictScore": 90,
    "trendData": [
      12650,
      14306,
      16149,
      18146,
      20866,
      23235,
      25702,
      29497,
      32683,
      36604,
      41087,
      45596,
      28445
    ]
  },
  {
    "name": "华夏万卷 古诗词字帖",
    "category": "练字帖/描红本",
    "reason": "618期间搜索量飙升",
    "currentSales": 42833,
    "growth7d": 302,
    "predictScore": 67,
    "trendData": [
      13115,
      16455,
      20061,
      24940,
      31008,
      38516,
      47985,
      58974,
      72176,
      88380,
      110042,
      134147,
      42833
    ]
  },
  {
    "name": "华夏万卷 楷书练字帖",
    "category": "练字帖/描红本",
    "reason": "直播间持续爆单",
    "currentSales": 28545,
    "growth7d": 376,
    "predictScore": 81,
    "trendData": [
      7934,
      10380,
      13670,
      17531,
      22943,
      29343,
      37966,
      50119,
      65479,
      83438,
      109414,
      144425,
      28545
    ]
  },
  {
    "name": "六品堂 幼儿描红",
    "category": "练字帖/描红本",
    "reason": "社交平台口碑传播",
    "currentSales": 27580,
    "growth7d": 183,
    "predictScore": 81,
    "trendData": [
      11451,
      13210,
      15313,
      17794,
      20317,
      23310,
      26607,
      30645,
      34963,
      39967,
      46634,
      53200,
      27580
    ]
  },
  {
    "name": "司马彦 成人行书字帖",
    "category": "练字帖/描红本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 24165,
    "growth7d": 103,
    "predictScore": 88,
    "trendData": [
      12812,
      14013,
      14964,
      16014,
      17276,
      19234,
      21420,
      23809,
      25539,
      27540,
      30208,
      32392,
      24165
    ]
  },
  {
    "name": "施耐德 圆珠笔芯 替换",
    "category": "圆珠笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 10140,
    "growth7d": 151,
    "predictScore": 69,
    "trendData": [
      4547,
      5223,
      5754,
      6372,
      7170,
      8160,
      9333,
      10743,
      12102,
      13873,
      15825,
      18153,
      10140
    ]
  },
  {
    "name": "百乐 油性圆珠笔",
    "category": "圆珠笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 76768,
    "growth7d": 393,
    "predictScore": 97,
    "trendData": [
      20424,
      26529,
      35054,
      46612,
      61650,
      80751,
      107256,
      139135,
      180654,
      238340,
      307597,
      402821,
      76768
    ]
  },
  {
    "name": "施耐德 多功能圆珠笔",
    "category": "圆珠笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 15297,
    "growth7d": 285,
    "predictScore": 97,
    "trendData": [
      4829,
      5893,
      7352,
      9073,
      11210,
      13543,
      16680,
      20454,
      24657,
      30070,
      36984,
      44591,
      15297
    ]
  },
  {
    "name": "得力 圆珠笔 旋转出芯",
    "category": "圆珠笔",
    "reason": "直播间持续爆单",
    "currentSales": 37241,
    "growth7d": 384,
    "predictScore": 86,
    "trendData": [
      10157,
      13410,
      17746,
      23177,
      30186,
      39738,
      51060,
      65460,
      84235,
      109497,
      143144,
      189784,
      37241
    ]
  },
  {
    "name": "施耐德 透明杆圆珠笔",
    "category": "圆珠笔",
    "reason": "社交平台口碑传播",
    "currentSales": 20907,
    "growth7d": 286,
    "predictScore": 98,
    "trendData": [
      6671,
      8231,
      9931,
      12139,
      14870,
      18602,
      22470,
      27630,
      33882,
      41584,
      51172,
      63987,
      20907
    ]
  },
  {
    "name": "晨光 圆珠笔 粗杆",
    "category": "圆珠笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 55597,
    "growth7d": 110,
    "predictScore": 73,
    "trendData": [
      28699,
      31346,
      34025,
      37823,
      41786,
      45456,
      48949,
      54046,
      59008,
      63839,
      70372,
      76413,
      55597
    ]
  },
  {
    "name": "绘儿乐 水溶性蜡笔",
    "category": "蜡笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 10682,
    "growth7d": 170,
    "predictScore": 93,
    "trendData": [
      4478,
      5195,
      6001,
      6911,
      7727,
      8850,
      10024,
      11398,
      13105,
      14764,
      17197,
      19721,
      10682
    ]
  },
  {
    "name": "真彩 荧光蜡笔",
    "category": "蜡笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 55091,
    "growth7d": 315,
    "predictScore": 71,
    "trendData": [
      16737,
      21268,
      26962,
      33422,
      41751,
      52605,
      65973,
      82509,
      102532,
      130472,
      164725,
      208088,
      55091
    ]
  },
  {
    "name": "马利 三角蜡笔 幼儿",
    "category": "蜡笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 57760,
    "growth7d": 267,
    "predictScore": 94,
    "trendData": [
      18876,
      23318,
      28568,
      34973,
      42913,
      52493,
      63866,
      78092,
      96545,
      117188,
      142264,
      169511,
      57760
    ]
  },
  {
    "name": "马利 蜡笔 48色 专业",
    "category": "蜡笔",
    "reason": "直播间持续爆单",
    "currentSales": 45937,
    "growth7d": 392,
    "predictScore": 92,
    "trendData": [
      12300,
      16387,
      21790,
      28972,
      37551,
      48966,
      64929,
      84014,
      110659,
      146682,
      191164,
      254567,
      45937
    ]
  },
  {
    "name": "晨光 人体彩绘蜡笔",
    "category": "蜡笔",
    "reason": "社交平台口碑传播",
    "currentSales": 14234,
    "growth7d": 389,
    "predictScore": 82,
    "trendData": [
      3751,
      4929,
      6426,
      8564,
      11202,
      14615,
      19357,
      25309,
      33197,
      43537,
      56351,
      73824,
      14234
    ]
  },
  {
    "name": "晨光 布料蜡笔",
    "category": "蜡笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 17029,
    "growth7d": 118,
    "predictScore": 91,
    "trendData": [
      8534,
      9315,
      10283,
      11351,
      12276,
      13665,
      14906,
      16360,
      18188,
      19755,
      21900,
      24094,
      17029
    ]
  },
  {
    "name": "九木 夜光书签",
    "category": "书签",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 11224,
    "growth7d": 189,
    "predictScore": 83,
    "trendData": [
      4421,
      5180,
      6001,
      6876,
      7982,
      9200,
      10777,
      12642,
      14829,
      17154,
      19537,
      22397,
      11224
    ]
  },
  {
    "name": "手工 书签尺 多功能",
    "category": "书签",
    "reason": "小红书种草笔记爆发",
    "currentSales": 33415,
    "growth7d": 237,
    "predictScore": 77,
    "trendData": [
      11997,
      14307,
      17370,
      20835,
      24498,
      29645,
      34982,
      42121,
      49995,
      58778,
      69621,
      84723,
      33415
    ]
  },
  {
    "name": "手工 刺绣书签",
    "category": "书签",
    "reason": "618期间搜索量飙升",
    "currentSales": 30224,
    "growth7d": 249,
    "predictScore": 91,
    "trendData": [
      10247,
      12299,
      14793,
      17964,
      21890,
      26014,
      31261,
      38114,
      46390,
      56043,
      67142,
      79052,
      30224
    ]
  },
  {
    "name": "故宫文创 定制书签",
    "category": "书签",
    "reason": "直播间持续爆单",
    "currentSales": 54633,
    "growth7d": 80,
    "predictScore": 97,
    "trendData": [
      32427,
      33988,
      37043,
      39154,
      42820,
      46903,
      50229,
      53228,
      55961,
      59039,
      62172,
      67852,
      54633
    ]
  },
  {
    "name": "晨光 透明亚克力书签",
    "category": "书签",
    "reason": "社交平台口碑传播",
    "currentSales": 77561,
    "growth7d": 172,
    "predictScore": 65,
    "trendData": [
      32763,
      37616,
      43445,
      49827,
      57055,
      66307,
      75907,
      86475,
      99523,
      114403,
      132928,
      149351,
      77561
    ]
  },
  {
    "name": "手工 永生花书签",
    "category": "书签",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 48461,
    "growth7d": 126,
    "predictScore": 75,
    "trendData": [
      23609,
      25751,
      28900,
      31675,
      35105,
      38208,
      42209,
      46047,
      52110,
      56822,
      63344,
      70596,
      48461
    ]
  },
  {
    "name": "得力 手持吸尘器 桌面",
    "category": "桌面吸尘器",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 11767,
    "growth7d": 208,
    "predictScore": 73,
    "trendData": [
      4563,
      5399,
      6273,
      7464,
      8611,
      9987,
      11587,
      13429,
      15392,
      18271,
      21249,
      24352,
      11767
    ]
  },
  {
    "name": "得力 可爱卡通吸尘器",
    "category": "桌面吸尘器",
    "reason": "小红书种草笔记爆发",
    "currentSales": 11738,
    "growth7d": 159,
    "predictScore": 84,
    "trendData": [
      5027,
      5602,
      6221,
      6902,
      7954,
      8831,
      10208,
      11305,
      12788,
      14436,
      16694,
      18707,
      11738
    ]
  },
  {
    "name": "美的 大吸力桌面吸尘",
    "category": "桌面吸尘器",
    "reason": "618期间搜索量飙升",
    "currentSales": 72687,
    "growth7d": 231,
    "predictScore": 88,
    "trendData": [
      25632,
      29866,
      35254,
      42463,
      51381,
      61840,
      73386,
      85547,
      102482,
      123219,
      145656,
      169432,
      72687
    ]
  },
  {
    "name": "晨光 静音吸尘器",
    "category": "桌面吸尘器",
    "reason": "直播间持续爆单",
    "currentSales": 63328,
    "growth7d": 88,
    "predictScore": 70,
    "trendData": [
      35894,
      38052,
      41715,
      45075,
      49011,
      53072,
      56361,
      60397,
      65330,
      70598,
      77590,
      85131,
      63328
    ]
  },
  {
    "name": "晨光 多功能桌面清洁",
    "category": "桌面吸尘器",
    "reason": "社交平台口碑传播",
    "currentSales": 70888,
    "growth7d": 274,
    "predictScore": 82,
    "trendData": [
      22838,
      28036,
      33685,
      40641,
      49884,
      60611,
      73371,
      89243,
      110259,
      135941,
      166515,
      205215,
      70888
    ]
  },
  {
    "name": "小米 吸尘器 配件刷头",
    "category": "桌面吸尘器",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 79893,
    "growth7d": 134,
    "predictScore": 93,
    "trendData": [
      37880,
      41289,
      45033,
      49007,
      55624,
      61947,
      69298,
      78606,
      86593,
      94793,
      106262,
      119949,
      79893
    ]
  }
]
};
