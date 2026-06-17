const CATEGORIES = ["中性笔","笔记本/记事本","学习套装/礼盒/盲盒","马克笔","文具盒/笔袋/痛包笔袋","铅笔","橡皮擦","荧光笔","手帐","火漆印章","水彩笔","标签贴纸","手工DIY套装","卷笔刀/卷笔器","便签本/便条纸/N次贴","笔筒","文具收纳盒","桌面收纳架","书皮/书套","美术颜料","办公文具","笔类套装/礼盒","文创用品","姓名贴","拼豆/咕卡套装","彩色铅笔","白板笔","按扣/拉链文件资料袋/收纳袋","修正带","钢笔","画纸/画本","胶水","笔芯/替芯/笔壳","记号笔","练字帖/描红本","圆珠笔","蜡笔","书签"];

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
    "name": "齐心 双层拉链袋",
    "platform": "天猫",
    "price": 18.4,
    "sales": 486105,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 1
  },
  {
    "name": "广博 16K书皮 小学生",
    "platform": "京东",
    "price": 13.8,
    "sales": 474157,
    "category": "书皮/书套",
    "rank": 2
  },
  {
    "name": "晨光 可擦中性笔",
    "platform": "拼多多",
    "price": 7.5,
    "sales": 450261,
    "category": "中性笔",
    "rank": 3
  },
  {
    "name": "辉柏嘉 超净橡皮",
    "platform": "天猫",
    "price": 32.5,
    "sales": 445016,
    "category": "橡皮擦",
    "rank": 4
  },
  {
    "name": "真彩 牛皮纸书套",
    "platform": "拼多多",
    "price": 7.3,
    "sales": 442297,
    "category": "书皮/书套",
    "rank": 5
  },
  {
    "name": "齐心 课本书套 防水",
    "platform": "拼多多",
    "price": 13.3,
    "sales": 438618,
    "category": "书皮/书套",
    "rank": 6
  },
  {
    "name": "广博 A5文件袋",
    "platform": "抖音",
    "price": 24.7,
    "sales": 436634,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 7
  },
  {
    "name": "晨光 彩色分类文件袋",
    "platform": "京东",
    "price": 10.1,
    "sales": 427848,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 8
  },
  {
    "name": "三菱 子弹头中性笔 0.38mm",
    "platform": "拼多多",
    "price": 2.5,
    "sales": 423228,
    "category": "中性笔",
    "rank": 9
  },
  {
    "name": "得力 创意橡皮 食物造型",
    "platform": "抖音",
    "price": 14.9,
    "sales": 421902,
    "category": "橡皮擦",
    "rank": 10
  },
  {
    "name": "得力 磨砂包书膜",
    "platform": "京东",
    "price": 14.5,
    "sales": 412154,
    "category": "书皮/书套",
    "rank": 11
  },
  {
    "name": "百乐 笔芯0.38mm 细",
    "platform": "抖音",
    "price": 24.9,
    "sales": 386109,
    "category": "笔芯/替芯/笔壳",
    "rank": 12
  },
  {
    "name": "广博 透明书皮 加厚",
    "platform": "抖音",
    "price": 22.8,
    "sales": 382492,
    "category": "书皮/书套",
    "rank": 13
  },
  {
    "name": "百乐 彩色中性笔套装",
    "platform": "抖音",
    "price": 6.1,
    "sales": 373378,
    "category": "中性笔",
    "rank": 14
  },
  {
    "name": "百乐 笔杆 金属",
    "platform": "抖音",
    "price": 12.4,
    "sales": 363985,
    "category": "笔芯/替芯/笔壳",
    "rank": 15
  },
  {
    "name": "得力 加厚透明袋",
    "platform": "抖音",
    "price": 20,
    "sales": 358746,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 16
  },
  {
    "name": "马可 自动铅笔 0.5mm",
    "platform": "京东",
    "price": 36.6,
    "sales": 357977,
    "category": "铅笔",
    "rank": 17
  },
  {
    "name": "晨光 蓝色笔芯 子弹头",
    "platform": "天猫",
    "price": 16.6,
    "sales": 355466,
    "category": "笔芯/替芯/笔壳",
    "rank": 18
  },
  {
    "name": "蜻蜓 可爱卡通橡皮",
    "platform": "抖音",
    "price": 20.4,
    "sales": 351322,
    "category": "橡皮擦",
    "rank": 19
  },
  {
    "name": "广博 透明文具袋 A4",
    "platform": "淘宝",
    "price": 18.4,
    "sales": 348995,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 20
  },
  {
    "name": "三木 考试专用透明袋",
    "platform": "拼多多",
    "price": 12.2,
    "sales": 347812,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 21
  },
  {
    "name": "得力 修正带替芯 3个",
    "platform": "拼多多",
    "price": 16.9,
    "sales": 338212,
    "category": "修正带",
    "rank": 22
  },
  {
    "name": "齐心 告示贴 荧光色",
    "platform": "抖音",
    "price": 24.3,
    "sales": 337915,
    "category": "便签本/便条纸/N次贴",
    "rank": 23
  },
  {
    "name": "晨光 环保包书皮",
    "platform": "淘宝",
    "price": 16.6,
    "sales": 337717,
    "category": "书皮/书套",
    "rank": 24
  },
  {
    "name": "辉柏嘉 洞洞铅笔 矫姿",
    "platform": "天猫",
    "price": 40.7,
    "sales": 330179,
    "category": "铅笔",
    "rank": 25
  },
  {
    "name": "晨光 创意修正带",
    "platform": "京东",
    "price": 7.7,
    "sales": 329653,
    "category": "修正带",
    "rank": 26
  },
  {
    "name": "蜻蜓 自动橡皮擦 替芯",
    "platform": "天猫",
    "price": 22,
    "sales": 325810,
    "category": "橡皮擦",
    "rank": 27
  },
  {
    "name": "辉柏嘉 彩色铅笔 水溶性",
    "platform": "拼多多",
    "price": 47.3,
    "sales": 325519,
    "category": "铅笔",
    "rank": 28
  },
  {
    "name": "齐心 牛津布资料袋",
    "platform": "京东",
    "price": 20.1,
    "sales": 322256,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 29
  },
  {
    "name": "百乐 ST笔头中性笔",
    "platform": "淘宝",
    "price": 6.5,
    "sales": 317174,
    "category": "中性笔",
    "rank": 30
  },
  {
    "name": "晨光 便利贴套装",
    "platform": "淘宝",
    "price": 19.1,
    "sales": 313383,
    "category": "便签本/便条纸/N次贴",
    "rank": 31
  },
  {
    "name": "得力 素描橡皮 软",
    "platform": "淘宝",
    "price": 16.2,
    "sales": 312488,
    "category": "橡皮擦",
    "rank": 32
  },
  {
    "name": "真彩 中性笔芯 0.5mm 黑",
    "platform": "抖音",
    "price": 8.3,
    "sales": 311192,
    "category": "笔芯/替芯/笔壳",
    "rank": 33
  },
  {
    "name": "广博 透明便签",
    "platform": "天猫",
    "price": 3.3,
    "sales": 309717,
    "category": "便签本/便条纸/N次贴",
    "rank": 34
  },
  {
    "name": "得力 加厚便签纸",
    "platform": "天猫",
    "price": 23.2,
    "sales": 308897,
    "category": "便签本/便条纸/N次贴",
    "rank": 35
  },
  {
    "name": "晨光 线圈便签本",
    "platform": "抖音",
    "price": 16.6,
    "sales": 303949,
    "category": "便签本/便条纸/N次贴",
    "rank": 36
  },
  {
    "name": "可得优 文件夹 A4双夹",
    "platform": "天猫",
    "price": 10.3,
    "sales": 298714,
    "category": "办公文具",
    "rank": 37
  },
  {
    "name": "晨光 科目分类袋",
    "platform": "京东",
    "price": 22.4,
    "sales": 296569,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 38
  },
  {
    "name": "齐心 透明胶带 封箱",
    "platform": "天猫",
    "price": 8.5,
    "sales": 295543,
    "category": "办公文具",
    "rank": 39
  },
  {
    "name": "得力 创意便签 造型",
    "platform": "抖音",
    "price": 5.3,
    "sales": 294094,
    "category": "便签本/便条纸/N次贴",
    "rank": 40
  },
  {
    "name": "百乐 中性笔套装 12支",
    "platform": "淘宝",
    "price": 1.6,
    "sales": 291780,
    "category": "中性笔",
    "rank": 41
  },
  {
    "name": "无印良品 康奈尔笔记本",
    "platform": "淘宝",
    "price": 37,
    "sales": 291464,
    "category": "笔记本/记事本",
    "rank": 42
  },
  {
    "name": "得力 橡皮擦 不留痕",
    "platform": "淘宝",
    "price": 33.2,
    "sales": 286806,
    "category": "橡皮擦",
    "rank": 43
  },
  {
    "name": "晨光 手工胶水套装",
    "platform": "京东",
    "price": 13.9,
    "sales": 286532,
    "category": "胶水",
    "rank": 44
  },
  {
    "name": "晨光 包书皮 自粘透明",
    "platform": "抖音",
    "price": 11.5,
    "sales": 282713,
    "category": "书皮/书套",
    "rank": 45
  },
  {
    "name": "三菱 考试专用中性笔",
    "platform": "拼多多",
    "price": 7,
    "sales": 274855,
    "category": "中性笔",
    "rank": 46
  },
  {
    "name": "国誉 双行修正带",
    "platform": "抖音",
    "price": 14.2,
    "sales": 274679,
    "category": "修正带",
    "rank": 47
  },
  {
    "name": "得力 错题本 活页",
    "platform": "抖音",
    "price": 25.8,
    "sales": 274235,
    "category": "笔记本/记事本",
    "rank": 48
  },
  {
    "name": "PLUS 透明修正带",
    "platform": "京东",
    "price": 7.2,
    "sales": 272453,
    "category": "修正带",
    "rank": 49
  },
  {
    "name": "3M 固体胶棒 大号",
    "platform": "淘宝",
    "price": 18.1,
    "sales": 262274,
    "category": "胶水",
    "rank": 50
  },
  {
    "name": "UHU PVA白乳胶",
    "platform": "拼多多",
    "price": 8,
    "sales": 252195,
    "category": "胶水",
    "rank": 51
  },
  {
    "name": "晨光 修正带 大容量",
    "platform": "抖音",
    "price": 9.1,
    "sales": 251048,
    "category": "修正带",
    "rank": 52
  },
  {
    "name": "辉柏嘉 素描铅笔套装",
    "platform": "拼多多",
    "price": 16.5,
    "sales": 244074,
    "category": "铅笔",
    "rank": 53
  },
  {
    "name": "得力 书皮 一年级专用",
    "platform": "抖音",
    "price": 17.4,
    "sales": 243118,
    "category": "书皮/书套",
    "rank": 54
  },
  {
    "name": "得力 网格收纳袋",
    "platform": "淘宝",
    "price": 12.8,
    "sales": 242717,
    "category": "按扣/拉链文件资料袋/收纳袋",
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
    "name": "斑马 快递记号笔",
    "platform": "淘宝",
    "price": 11.6,
    "sales": 241299,
    "category": "记号笔",
    "rank": 57
  },
  {
    "name": "晨光 儿童剪贴画材料",
    "platform": "京东",
    "price": 48.6,
    "sales": 240435,
    "category": "手工DIY套装",
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
    "name": "三木 防水资料袋",
    "platform": "京东",
    "price": 21.3,
    "sales": 235952,
    "category": "按扣/拉链文件资料袋/收纳袋",
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
    "name": "晨光 胶水笔 细头",
    "platform": "抖音",
    "price": 17.2,
    "sales": 233947,
    "category": "胶水",
    "rank": 62
  },
  {
    "name": "得力 木质手工模型",
    "platform": "抖音",
    "price": 16.2,
    "sales": 233438,
    "category": "手工DIY套装",
    "rank": 63
  },
  {
    "name": "得力 订书机 省力型",
    "platform": "拼多多",
    "price": 23.5,
    "sales": 230629,
    "category": "办公文具",
    "rank": 64
  },
  {
    "name": "晨光 液体胶水 透明",
    "platform": "拼多多",
    "price": 16.4,
    "sales": 227072,
    "category": "胶水",
    "rank": 65
  },
  {
    "name": "晨光 水彩笔画纸套装",
    "platform": "抖音",
    "price": 22,
    "sales": 226187,
    "category": "水彩笔",
    "rank": 66
  },
  {
    "name": "得力 电动橡皮擦 充电",
    "platform": "抖音",
    "price": 8.8,
    "sales": 223986,
    "category": "橡皮擦",
    "rank": 67
  },
  {
    "name": "得力 金属色水彩笔",
    "platform": "抖音",
    "price": 64.9,
    "sales": 223408,
    "category": "水彩笔",
    "rank": 68
  },
  {
    "name": "真彩 可擦水彩笔",
    "platform": "抖音",
    "price": 35.6,
    "sales": 221669,
    "category": "水彩笔",
    "rank": 69
  },
  {
    "name": "三菱 商务签字笔",
    "platform": "拼多多",
    "price": 5.9,
    "sales": 221341,
    "category": "中性笔",
    "rank": 70
  },
  {
    "name": "真彩 大容量笔芯",
    "platform": "天猫",
    "price": 4.6,
    "sales": 221188,
    "category": "笔芯/替芯/笔壳",
    "rank": 71
  },
  {
    "name": "得力 CD记号笔",
    "platform": "抖音",
    "price": 12.2,
    "sales": 215698,
    "category": "记号笔",
    "rank": 72
  },
  {
    "name": "得力 手工白胶",
    "platform": "拼多多",
    "price": 11.4,
    "sales": 212774,
    "category": "胶水",
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
    "name": "得力 考研专用笔记本",
    "platform": "天猫",
    "price": 31.2,
    "sales": 208092,
    "category": "笔记本/记事本",
    "rank": 75
  },
  {
    "name": "真彩 子弹头笔芯 100支",
    "platform": "淘宝",
    "price": 10.5,
    "sales": 207925,
    "category": "笔芯/替芯/笔壳",
    "rank": 76
  },
  {
    "name": "斑马 银色记号笔",
    "platform": "抖音",
    "price": 13,
    "sales": 203797,
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
    "name": "得力 编织手链材料包",
    "platform": "淘宝",
    "price": 31.5,
    "sales": 198694,
    "category": "手工DIY套装",
    "rank": 79
  },
  {
    "name": "晨光 记号笔 黑色 粗头",
    "platform": "天猫",
    "price": 23.9,
    "sales": 197778,
    "category": "记号笔",
    "rank": 80
  },
  {
    "name": "真彩 双头水彩笔",
    "platform": "淘宝",
    "price": 15.4,
    "sales": 197286,
    "category": "水彩笔",
    "rank": 81
  },
  {
    "name": "UHU 双面胶点 替芯",
    "platform": "淘宝",
    "price": 9.4,
    "sales": 192324,
    "category": "胶水",
    "rank": 82
  },
  {
    "name": "晨光 衍纸套装",
    "platform": "京东",
    "price": 16.5,
    "sales": 189593,
    "category": "手工DIY套装",
    "rank": 83
  },
  {
    "name": "touch 水性马克笔 24色",
    "platform": "天猫",
    "price": 29.3,
    "sales": 188194,
    "category": "马克笔",
    "rank": 84
  },
  {
    "name": "晨光 笔壳 透明",
    "platform": "京东",
    "price": 20.7,
    "sales": 187094,
    "category": "笔芯/替芯/笔壳",
    "rank": 85
  },
  {
    "name": "施耐德 复古圆珠笔",
    "platform": "抖音",
    "price": 10.3,
    "sales": 186983,
    "category": "圆珠笔",
    "rank": 86
  },
  {
    "name": "樱花 高光橡皮",
    "platform": "抖音",
    "price": 5.9,
    "sales": 183402,
    "category": "橡皮擦",
    "rank": 87
  },
  {
    "name": "马利 水彩笔 补充装",
    "platform": "拼多多",
    "price": 54.9,
    "sales": 183285,
    "category": "水彩笔",
    "rank": 88
  },
  {
    "name": "得力 白板 磁性",
    "platform": "淘宝",
    "price": 47.2,
    "sales": 182998,
    "category": "办公文具",
    "rank": 89
  },
  {
    "name": "晨光 粗杆专用削笔器",
    "platform": "京东",
    "price": 40.9,
    "sales": 182804,
    "category": "卷笔刀/卷笔器",
    "rank": 90
  },
  {
    "name": "touch 马克笔补充液",
    "platform": "拼多多",
    "price": 144.2,
    "sales": 182281,
    "category": "马克笔",
    "rank": 91
  },
  {
    "name": "得力 橡皮擦套装",
    "platform": "抖音",
    "price": 25.3,
    "sales": 181266,
    "category": "橡皮擦",
    "rank": 92
  },
  {
    "name": "斯塔 荧光马克笔套装",
    "platform": "天猫",
    "price": 146.8,
    "sales": 181103,
    "category": "马克笔",
    "rank": 93
  },
  {
    "name": "齐心 便利贴 莫兰迪色",
    "platform": "拼多多",
    "price": 13.8,
    "sales": 180020,
    "category": "便签本/便条纸/N次贴",
    "rank": 94
  },
  {
    "name": "真彩 可水洗蜡笔",
    "platform": "淘宝",
    "price": 47.2,
    "sales": 179308,
    "category": "蜡笔",
    "rank": 95
  },
  {
    "name": "晨光 樱花橡皮",
    "platform": "拼多多",
    "price": 23.3,
    "sales": 179306,
    "category": "橡皮擦",
    "rank": 96
  },
  {
    "name": "得力 长尾夹 混合装 盒装",
    "platform": "淘宝",
    "price": 44.6,
    "sales": 178466,
    "category": "办公文具",
    "rank": 97
  },
  {
    "name": "斑马 金色记号笔",
    "platform": "京东",
    "price": 8,
    "sales": 177340,
    "category": "记号笔",
    "rank": 98
  },
  {
    "name": "得力 迷你白板笔",
    "platform": "抖音",
    "price": 13.9,
    "sales": 176668,
    "category": "白板笔",
    "rank": 99
  },
  {
    "name": "得力 牛皮封面记事本",
    "platform": "天猫",
    "price": 36.1,
    "sales": 175989,
    "category": "笔记本/记事本",
    "rank": 100
  },
  {
    "name": "得力 印台 速干",
    "platform": "天猫",
    "price": 34.2,
    "sales": 174000,
    "category": "办公文具",
    "rank": 101
  },
  {
    "name": "得力 防水记号笔",
    "platform": "京东",
    "price": 7.5,
    "sales": 173768,
    "category": "记号笔",
    "rank": 102
  },
  {
    "name": "田英章 古诗词字帖",
    "platform": "淘宝",
    "price": 20.3,
    "sales": 172701,
    "category": "练字帖/描红本",
    "rank": 103
  },
  {
    "name": "得力 针管笔芯",
    "platform": "京东",
    "price": 17.3,
    "sales": 172586,
    "category": "笔芯/替芯/笔壳",
    "rank": 104
  },
  {
    "name": "得力 儿童水彩笔 粗头",
    "platform": "淘宝",
    "price": 57.8,
    "sales": 172577,
    "category": "水彩笔",
    "rank": 105
  },
  {
    "name": "齐心 索引标签贴",
    "platform": "天猫",
    "price": 6.7,
    "sales": 171406,
    "category": "便签本/便条纸/N次贴",
    "rank": 106
  },
  {
    "name": "得力 荧光蜡笔",
    "platform": "天猫",
    "price": 39.3,
    "sales": 170473,
    "category": "蜡笔",
    "rank": 107
  },
  {
    "name": "斑马 圆珠笔 旋转出芯",
    "platform": "抖音",
    "price": 13.5,
    "sales": 169308,
    "category": "圆珠笔",
    "rank": 108
  },
  {
    "name": "得力 油性圆珠笔",
    "platform": "拼多多",
    "price": 7.1,
    "sales": 168175,
    "category": "圆珠笔",
    "rank": 109
  },
  {
    "name": "得力 软头水彩笔 48色",
    "platform": "京东",
    "price": 18.1,
    "sales": 166702,
    "category": "水彩笔",
    "rank": 110
  },
  {
    "name": "百乐 直液式走珠笔",
    "platform": "淘宝",
    "price": 5.1,
    "sales": 166535,
    "category": "中性笔",
    "rank": 111
  },
  {
    "name": "晨光 剪刀 安全圆头",
    "platform": "拼多多",
    "price": 37.1,
    "sales": 166087,
    "category": "办公文具",
    "rank": 112
  },
  {
    "name": "得力 透明卷笔刀",
    "platform": "天猫",
    "price": 29.8,
    "sales": 165206,
    "category": "卷笔刀/卷笔器",
    "rank": 113
  },
  {
    "name": "PLUS 可替芯修正带",
    "platform": "拼多多",
    "price": 10.3,
    "sales": 164431,
    "category": "修正带",
    "rank": 114
  },
  {
    "name": "施耐德 圆珠笔 按动 0.7mm",
    "platform": "抖音",
    "price": 14.1,
    "sales": 164188,
    "category": "圆珠笔",
    "rank": 115
  },
  {
    "name": "六品堂 成人行书字帖",
    "platform": "拼多多",
    "price": 20.6,
    "sales": 162391,
    "category": "练字帖/描红本",
    "rank": 116
  },
  {
    "name": "三木 拉链文件袋 5个装",
    "platform": "天猫",
    "price": 12.8,
    "sales": 161793,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 117
  },
  {
    "name": "田英章 练字帖 行楷",
    "platform": "淘宝",
    "price": 28.4,
    "sales": 160219,
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
    "name": "纳川 办公桌面架",
    "platform": "淘宝",
    "price": 22.8,
    "sales": 156966,
    "category": "桌面收纳架",
    "rank": 122
  },
  {
    "name": "齐心 速干白板笔",
    "platform": "淘宝",
    "price": 17.1,
    "sales": 156955,
    "category": "白板笔",
    "rank": 123
  },
  {
    "name": "宝克 记号笔套装 12色",
    "platform": "天猫",
    "price": 23.8,
    "sales": 156175,
    "category": "记号笔",
    "rank": 124
  },
  {
    "name": "晨光 圆珠笔 粗杆",
    "platform": "拼多多",
    "price": 15.1,
    "sales": 154157,
    "category": "圆珠笔",
    "rank": 125
  },
  {
    "name": "晨光 胶棒 固体胶",
    "platform": "抖音",
    "price": 14.4,
    "sales": 150773,
    "category": "办公文具",
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
    "name": "绘儿乐 蜡笔 36色 儿童",
    "platform": "京东",
    "price": 12,
    "sales": 149876,
    "category": "蜡笔",
    "rank": 128
  },
  {
    "name": "三菱 木质铅笔 HB 50支",
    "platform": "抖音",
    "price": 52.3,
    "sales": 149868,
    "category": "铅笔",
    "rank": 129
  },
  {
    "name": "PLUS 宽幅修正带",
    "platform": "拼多多",
    "price": 5.3,
    "sales": 149758,
    "category": "修正带",
    "rank": 130
  },
  {
    "name": "国誉 手账胶带 和纸",
    "platform": "京东",
    "price": 69.6,
    "sales": 149600,
    "category": "手帐",
    "rank": 131
  },
  {
    "name": "中华 2B考试铅笔 涂卡专用",
    "platform": "抖音",
    "price": 10.9,
    "sales": 149578,
    "category": "铅笔",
    "rank": 132
  },
  {
    "name": "宜家 折叠收纳盒",
    "platform": "抖音",
    "price": 78.6,
    "sales": 149412,
    "category": "文具收纳盒",
    "rank": 133
  },
  {
    "name": "咕卡星球 拼豆模板 卡通",
    "platform": "抖音",
    "price": 23.1,
    "sales": 148886,
    "category": "拼豆/咕卡套装",
    "rank": 134
  },
  {
    "name": "真彩 蜡笔套装 桶装",
    "platform": "淘宝",
    "price": 46.1,
    "sales": 147677,
    "category": "蜡笔",
    "rank": 135
  },
  {
    "name": "三丽鸥 高考加油礼盒",
    "platform": "京东",
    "price": 107.4,
    "sales": 147367,
    "category": "学习套装/礼盒/盲盒",
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
    "name": "晨光 磁吸白板笔",
    "platform": "拼多多",
    "price": 24.7,
    "sales": 145442,
    "category": "白板笔",
    "rank": 138
  },
  {
    "name": "得力 全针管笔芯",
    "platform": "抖音",
    "price": 3.2,
    "sales": 145436,
    "category": "笔芯/替芯/笔壳",
    "rank": 139
  },
  {
    "name": "田英章 笔画练字",
    "platform": "抖音",
    "price": 25.1,
    "sales": 145250,
    "category": "练字帖/描红本",
    "rank": 140
  },
  {
    "name": "无印良品 透明笔筒",
    "platform": "拼多多",
    "price": 12.3,
    "sales": 144417,
    "category": "笔筒",
    "rank": 141
  },
  {
    "name": "温莎 油画纸 亚麻",
    "platform": "天猫",
    "price": 31.8,
    "sales": 142910,
    "category": "画纸/画本",
    "rank": 142
  },
  {
    "name": "Hobonichi 手账印章套装",
    "platform": "拼多多",
    "price": 49.2,
    "sales": 141131,
    "category": "手帐",
    "rank": 143
  },
  {
    "name": "迪士尼 大容量笔袋",
    "platform": "抖音",
    "price": 54.3,
    "sales": 140995,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 144
  },
  {
    "name": "晨光 透明笔袋 考试用",
    "platform": "拼多多",
    "price": 45.3,
    "sales": 138198,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 145
  },
  {
    "name": "真彩 油画棒 重彩",
    "platform": "淘宝",
    "price": 48.1,
    "sales": 138046,
    "category": "蜡笔",
    "rank": 146
  },
  {
    "name": "无印良品 斜插式笔筒",
    "platform": "抖音",
    "price": 11.5,
    "sales": 137029,
    "category": "笔筒",
    "rank": 147
  },
  {
    "name": "三菱 刷题专用中性笔",
    "platform": "京东",
    "price": 2.1,
    "sales": 136217,
    "category": "中性笔",
    "rank": 148
  },
  {
    "name": "斑马 荧光笔 粗细双头",
    "platform": "京东",
    "price": 16.1,
    "sales": 136094,
    "category": "荧光笔",
    "rank": 149
  },
  {
    "name": "真彩 环保白板笔",
    "platform": "淘宝",
    "price": 26.6,
    "sales": 134776,
    "category": "白板笔",
    "rank": 150
  },
  {
    "name": "晨光 书脊标签",
    "platform": "京东",
    "price": 95,
    "sales": 134751,
    "category": "标签贴纸",
    "rank": 151
  },
  {
    "name": "迪士尼 IP联名文具盲盒",
    "platform": "抖音",
    "price": 66.3,
    "sales": 134251,
    "category": "学习套装/礼盒/盲盒",
    "rank": 152
  },
  {
    "name": "纽赛 桌面书架 置物架",
    "platform": "淘宝",
    "price": 26,
    "sales": 133604,
    "category": "桌面收纳架",
    "rank": 153
  },
  {
    "name": "齐心 白板擦+笔套装",
    "platform": "抖音",
    "price": 23,
    "sales": 132610,
    "category": "白板笔",
    "rank": 154
  },
  {
    "name": "真彩 速干笔芯",
    "platform": "抖音",
    "price": 16.6,
    "sales": 132276,
    "category": "笔芯/替芯/笔壳",
    "rank": 155
  },
  {
    "name": "得力 自粘书套 免裁剪",
    "platform": "京东",
    "price": 5.8,
    "sales": 132165,
    "category": "书皮/书套",
    "rank": 156
  },
  {
    "name": "纽赛 铁艺收纳架",
    "platform": "抖音",
    "price": 31.8,
    "sales": 132078,
    "category": "桌面收纳架",
    "rank": 157
  },
  {
    "name": "康颂 速写本 A4",
    "platform": "京东",
    "price": 45.4,
    "sales": 131744,
    "category": "画纸/画本",
    "rank": 158
  },
  {
    "name": "马利 丙烯马克笔",
    "platform": "淘宝",
    "price": 139.8,
    "sales": 131161,
    "category": "马克笔",
    "rank": 159
  },
  {
    "name": "kinbor TN旅行手账",
    "platform": "抖音",
    "price": 38.7,
    "sales": 130713,
    "category": "手帐",
    "rank": 160
  },
  {
    "name": "国誉 手账大礼盒套装",
    "platform": "京东",
    "price": 32.4,
    "sales": 130093,
    "category": "手帐",
    "rank": 161
  },
  {
    "name": "康颂 牛皮纸画本",
    "platform": "抖音",
    "price": 62,
    "sales": 130041,
    "category": "画纸/画本",
    "rank": 162
  },
  {
    "name": "得力 布料蜡笔",
    "platform": "淘宝",
    "price": 24.5,
    "sales": 129603,
    "category": "蜡笔",
    "rank": 163
  },
  {
    "name": "斑马 多功能圆珠笔",
    "platform": "京东",
    "price": 27.4,
    "sales": 129542,
    "category": "圆珠笔",
    "rank": 164
  },
  {
    "name": "纽赛 透明分层收纳架",
    "platform": "拼多多",
    "price": 66.4,
    "sales": 129244,
    "category": "桌面收纳架",
    "rank": 165
  },
  {
    "name": "咕卡星球 拼豆收纳盒",
    "platform": "京东",
    "price": 16.2,
    "sales": 128626,
    "category": "拼豆/咕卡套装",
    "rank": 166
  },
  {
    "name": "得力 美工刀 自动锁",
    "platform": "抖音",
    "price": 12,
    "sales": 127656,
    "category": "办公文具",
    "rank": 167
  },
  {
    "name": "得力 人体彩绘蜡笔",
    "platform": "淘宝",
    "price": 14.7,
    "sales": 126674,
    "category": "蜡笔",
    "rank": 168
  },
  {
    "name": "晨光 削笔器 替换刀片",
    "platform": "抖音",
    "price": 44.2,
    "sales": 125369,
    "category": "卷笔刀/卷笔器",
    "rank": 169
  },
  {
    "name": "兄弟 标签打印机 蓝牙",
    "platform": "拼多多",
    "price": 120,
    "sales": 124135,
    "category": "标签贴纸",
    "rank": 170
  },
  {
    "name": "纽赛 分格笔筒",
    "platform": "抖音",
    "price": 33.7,
    "sales": 123796,
    "category": "笔筒",
    "rank": 171
  },
  {
    "name": "晨光 白板笔 可擦 黑色",
    "platform": "天猫",
    "price": 34.8,
    "sales": 123691,
    "category": "白板笔",
    "rank": 172
  },
  {
    "name": "广博 票据收纳袋",
    "platform": "淘宝",
    "price": 13.6,
    "sales": 122988,
    "category": "按扣/拉链文件资料袋/收纳袋",
    "rank": 173
  },
  {
    "name": "马利 双头马克笔 学生用",
    "platform": "淘宝",
    "price": 104.8,
    "sales": 121809,
    "category": "马克笔",
    "rank": 174
  },
  {
    "name": "得力 文具福袋 随机",
    "platform": "抖音",
    "price": 44.8,
    "sales": 121648,
    "category": "学习套装/礼盒/盲盒",
    "rank": 175
  },
  {
    "name": "拼豆世界 咕卡套装 全套材料",
    "platform": "淘宝",
    "price": 26.4,
    "sales": 121588,
    "category": "拼豆/咕卡套装",
    "rank": 176
  },
  {
    "name": "广博 N次贴 强粘",
    "platform": "拼多多",
    "price": 24.2,
    "sales": 120577,
    "category": "便签本/便条纸/N次贴",
    "rank": 177
  },
  {
    "name": "得力 旋转蜡笔 不脏手",
    "platform": "抖音",
    "price": 40.2,
    "sales": 120013,
    "category": "蜡笔",
    "rank": 178
  },
  {
    "name": "可得优 双面胶 强力",
    "platform": "淘宝",
    "price": 41.9,
    "sales": 119895,
    "category": "办公文具",
    "rank": 179
  },
  {
    "name": "晨光 金属色彩铅",
    "platform": "拼多多",
    "price": 56.5,
    "sales": 119411,
    "category": "彩色铅笔",
    "rank": 180
  },
  {
    "name": "幻彩 暑假手工材料包 100件",
    "platform": "京东",
    "price": 16.4,
    "sales": 119263,
    "category": "手工DIY套装",
    "rank": 181
  },
  {
    "name": "3M 热熔胶枪",
    "platform": "抖音",
    "price": 22,
    "sales": 118804,
    "category": "胶水",
    "rank": 182
  },
  {
    "name": "白雪 细头白板笔",
    "platform": "抖音",
    "price": 26.6,
    "sales": 118574,
    "category": "白板笔",
    "rank": 183
  },
  {
    "name": "三丽鸥 新学期必备套装",
    "platform": "抖音",
    "price": 85.3,
    "sales": 117922,
    "category": "学习套装/礼盒/盲盒",
    "rank": 184
  },
  {
    "name": "晨光 指示标签 箭头",
    "platform": "京东",
    "price": 13.5,
    "sales": 117386,
    "category": "便签本/便条纸/N次贴",
    "rank": 185
  },
  {
    "name": "晨光 显示器增高收纳",
    "platform": "天猫",
    "price": 42.6,
    "sales": 116733,
    "category": "桌面收纳架",
    "rank": 186
  },
  {
    "name": "得力 桌面杂物收纳",
    "platform": "拼多多",
    "price": 59.3,
    "sales": 115630,
    "category": "文具收纳盒",
    "rank": 187
  },
  {
    "name": "六品堂 幼儿描红",
    "platform": "拼多多",
    "price": 38.2,
    "sales": 115257,
    "category": "练字帖/描红本",
    "rank": 188
  },
  {
    "name": "kinbor 盐系手账本",
    "platform": "京东",
    "price": 79.3,
    "sales": 115119,
    "category": "手帐",
    "rank": 189
  },
  {
    "name": "得力 水彩笔套装 36色 可水洗",
    "platform": "淘宝",
    "price": 49,
    "sales": 114967,
    "category": "水彩笔",
    "rank": 190
  },
  {
    "name": "真彩 迷你修正带",
    "platform": "京东",
    "price": 5.6,
    "sales": 114533,
    "category": "修正带",
    "rank": 191
  },
  {
    "name": "晨光 软皮笔记本",
    "platform": "京东",
    "price": 29.4,
    "sales": 114199,
    "category": "笔记本/记事本",
    "rank": 192
  },
  {
    "name": "纽赛 办公笔筒套装",
    "platform": "拼多多",
    "price": 43.8,
    "sales": 113976,
    "category": "笔筒",
    "rank": 193
  },
  {
    "name": "辉柏嘉 油性彩铅 72色",
    "platform": "抖音",
    "price": 57.2,
    "sales": 113963,
    "category": "彩色铅笔",
    "rank": 194
  },
  {
    "name": "辉柏嘉 活动铅笔 金属杆",
    "platform": "拼多多",
    "price": 44.5,
    "sales": 113902,
    "category": "铅笔",
    "rank": 195
  },
  {
    "name": "获多福 素描纸 160g A4",
    "platform": "天猫",
    "price": 57.5,
    "sales": 111327,
    "category": "画纸/画本",
    "rank": 196
  },
  {
    "name": "得力 液体粉笔 无尘",
    "platform": "淘宝",
    "price": 7.7,
    "sales": 110653,
    "category": "白板笔",
    "rank": 197
  },
  {
    "name": "康颂 水彩纸 300g",
    "platform": "天猫",
    "price": 41.5,
    "sales": 110487,
    "category": "画纸/画本",
    "rank": 198
  },
  {
    "name": "创意家居 亚克力笔筒",
    "platform": "抖音",
    "price": 38.8,
    "sales": 108689,
    "category": "笔筒",
    "rank": 199
  },
  {
    "name": "三丽鸥 中考文具套装",
    "platform": "拼多多",
    "price": 21.6,
    "sales": 108114,
    "category": "学习套装/礼盒/盲盒",
    "rank": 200
  },
  {
    "name": "得力 拼豆套装",
    "platform": "京东",
    "price": 21.6,
    "sales": 108096,
    "category": "手工DIY套装",
    "rank": 201
  },
  {
    "name": "辉柏嘉 水彩笔 桶装 24色",
    "platform": "京东",
    "price": 61.1,
    "sales": 107690,
    "category": "水彩笔",
    "rank": 202
  },
  {
    "name": "斑马 彩色圆珠笔 多色",
    "platform": "拼多多",
    "price": 26.5,
    "sales": 107621,
    "category": "圆珠笔",
    "rank": 203
  },
  {
    "name": "猫太子 静音电动削笔器",
    "platform": "拼多多",
    "price": 38.1,
    "sales": 106650,
    "category": "卷笔刀/卷笔器",
    "rank": 204
  },
  {
    "name": "绘儿乐 水溶性蜡笔",
    "platform": "淘宝",
    "price": 46.1,
    "sales": 105726,
    "category": "蜡笔",
    "rank": 205
  },
  {
    "name": "施耐德 圆珠笔芯 替换",
    "platform": "天猫",
    "price": 21.8,
    "sales": 105606,
    "category": "圆珠笔",
    "rank": 206
  },
  {
    "name": "得力 价格标签贴",
    "platform": "抖音",
    "price": 106.5,
    "sales": 105325,
    "category": "标签贴纸",
    "rank": 207
  },
  {
    "name": "兄弟 衣物姓名标",
    "platform": "京东",
    "price": 40.9,
    "sales": 103852,
    "category": "姓名贴",
    "rank": 208
  },
  {
    "name": "真彩 A4书皮 50张",
    "platform": "淘宝",
    "price": 23.3,
    "sales": 103430,
    "category": "书皮/书套",
    "rank": 209
  },
  {
    "name": "得力 按动中性笔 黑色",
    "platform": "淘宝",
    "price": 4.4,
    "sales": 103307,
    "category": "中性笔",
    "rank": 210
  },
  {
    "name": "kinbor 线圈笔记本 A5",
    "platform": "抖音",
    "price": 25.9,
    "sales": 103284,
    "category": "笔记本/记事本",
    "rank": 211
  },
  {
    "name": "国誉 按动修正带",
    "platform": "抖音",
    "price": 6.3,
    "sales": 103059,
    "category": "修正带",
    "rank": 212
  },
  {
    "name": "真彩 丝滑蜡笔 24色",
    "platform": "天猫",
    "price": 23.3,
    "sales": 103012,
    "category": "蜡笔",
    "rank": 213
  },
  {
    "name": "得力 收纳标签贴",
    "platform": "淘宝",
    "price": 112.1,
    "sales": 100635,
    "category": "标签贴纸",
    "rank": 214
  },
  {
    "name": "拼豆世界 拼豆镊子工具",
    "platform": "天猫",
    "price": 10.1,
    "sales": 100543,
    "category": "拼豆/咕卡套装",
    "rank": 215
  },
  {
    "name": "纽赛 儿童卡通笔筒",
    "platform": "抖音",
    "price": 21.3,
    "sales": 100139,
    "category": "笔筒",
    "rank": 216
  },
  {
    "name": "得力 卡通卷笔刀",
    "platform": "抖音",
    "price": 35.4,
    "sales": 99867,
    "category": "卷笔刀/卷笔器",
    "rank": 217
  },
  {
    "name": "樱花 颜料调色盘",
    "platform": "天猫",
    "price": 38.2,
    "sales": 99811,
    "category": "美术颜料",
    "rank": 218
  },
  {
    "name": "纽赛 竹木收纳架",
    "platform": "抖音",
    "price": 44.2,
    "sales": 99638,
    "category": "桌面收纳架",
    "rank": 219
  },
  {
    "name": "DIY乐园 拼豆豆 补充装",
    "platform": "抖音",
    "price": 56.3,
    "sales": 99637,
    "category": "拼豆/咕卡套装",
    "rank": 220
  },
  {
    "name": "晨光 彩铅套装 专业级",
    "platform": "天猫",
    "price": 127.4,
    "sales": 99412,
    "category": "彩色铅笔",
    "rank": 221
  },
  {
    "name": "齐心 便签本 横线",
    "platform": "抖音",
    "price": 20.8,
    "sales": 99150,
    "category": "便签本/便条纸/N次贴",
    "rank": 222
  },
  {
    "name": "斑马 圆珠笔 速干 蓝色",
    "platform": "京东",
    "price": 3,
    "sales": 99130,
    "category": "圆珠笔",
    "rank": 223
  },
  {
    "name": "天文 电动卷笔刀 USB充电",
    "platform": "天猫",
    "price": 48.4,
    "sales": 98356,
    "category": "卷笔刀/卷笔器",
    "rank": 224
  },
  {
    "name": "百乐 红色笔芯",
    "platform": "淘宝",
    "price": 4.1,
    "sales": 98274,
    "category": "笔芯/替芯/笔壳",
    "rank": 225
  },
  {
    "name": "晨光 细头记号笔",
    "platform": "京东",
    "price": 23.8,
    "sales": 98256,
    "category": "记号笔",
    "rank": 226
  },
  {
    "name": "墨点 硬笔书法字帖",
    "platform": "抖音",
    "price": 32.4,
    "sales": 98159,
    "category": "练字帖/描红本",
    "rank": 227
  },
  {
    "name": "得力 痛包笔袋 可展示",
    "platform": "淘宝",
    "price": 62.6,
    "sales": 98105,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 228
  },
  {
    "name": "拼豆世界 拼豆套装 5mm",
    "platform": "拼多多",
    "price": 38.2,
    "sales": 98070,
    "category": "拼豆/咕卡套装",
    "rank": 229
  },
  {
    "name": "纽赛 木质笔筒",
    "platform": "拼多多",
    "price": 36.8,
    "sales": 98050,
    "category": "笔筒",
    "rank": 230
  },
  {
    "name": "无印良品 磁吸收纳盒 模块化",
    "platform": "拼多多",
    "price": 75.9,
    "sales": 97936,
    "category": "文具收纳盒",
    "rank": 231
  },
  {
    "name": "晨光 胶棒 36g 可水洗",
    "platform": "拼多多",
    "price": 22.6,
    "sales": 97742,
    "category": "胶水",
    "rank": 232
  },
  {
    "name": "晨光 亚克力多层收纳架",
    "platform": "淘宝",
    "price": 68.8,
    "sales": 97628,
    "category": "桌面收纳架",
    "rank": 233
  },
  {
    "name": "三年二班 卡通笔袋",
    "platform": "拼多多",
    "price": 36.4,
    "sales": 97324,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 234
  },
  {
    "name": "晨光 旋转收纳盒",
    "platform": "京东",
    "price": 35.2,
    "sales": 97301,
    "category": "文具收纳盒",
    "rank": 235
  },
  {
    "name": "百乐 窗口荧光笔",
    "platform": "天猫",
    "price": 14.7,
    "sales": 96888,
    "category": "荧光笔",
    "rank": 236
  },
  {
    "name": "斑马 双头记号笔",
    "platform": "抖音",
    "price": 20.6,
    "sales": 96281,
    "category": "记号笔",
    "rank": 237
  },
  {
    "name": "法卡勒 马克笔收纳盒",
    "platform": "京东",
    "price": 130.4,
    "sales": 95413,
    "category": "马克笔",
    "rank": 238
  },
  {
    "name": "无印良品 活页本 B5",
    "platform": "抖音",
    "price": 18.6,
    "sales": 94508,
    "category": "笔记本/记事本",
    "rank": 239
  },
  {
    "name": "樱花 国画颜料 12色",
    "platform": "京东",
    "price": 87.4,
    "sales": 93781,
    "category": "美术颜料",
    "rank": 240
  },
  {
    "name": "国誉 空白素描本",
    "platform": "抖音",
    "price": 13.9,
    "sales": 93702,
    "category": "笔记本/记事本",
    "rank": 241
  },
  {
    "name": "马可 考试涂卡铅笔 20支",
    "platform": "抖音",
    "price": 7.1,
    "sales": 93582,
    "category": "铅笔",
    "rank": 242
  },
  {
    "name": "晨光 多层文具收纳",
    "platform": "天猫",
    "price": 17.9,
    "sales": 91390,
    "category": "文具收纳盒",
    "rank": 243
  },
  {
    "name": "马利 油画颜料 24色",
    "platform": "天猫",
    "price": 105.8,
    "sales": 91001,
    "category": "美术颜料",
    "rank": 244
  },
  {
    "name": "斑马 大容量中性笔",
    "platform": "拼多多",
    "price": 5.4,
    "sales": 90838,
    "category": "中性笔",
    "rank": 245
  },
  {
    "name": "慕娜美 护眼荧光笔 莫兰迪",
    "platform": "京东",
    "price": 20,
    "sales": 90458,
    "category": "荧光笔",
    "rank": 246
  },
  {
    "name": "晨光 直液式荧光笔",
    "platform": "天猫",
    "price": 8.4,
    "sales": 90276,
    "category": "荧光笔",
    "rank": 247
  },
  {
    "name": "MARCO 马克雷诺彩铅",
    "platform": "淘宝",
    "price": 52.3,
    "sales": 89427,
    "category": "彩色铅笔",
    "rank": 248
  },
  {
    "name": "田英章 数字描红本",
    "platform": "天猫",
    "price": 16.5,
    "sales": 89377,
    "category": "练字帖/描红本",
    "rank": 249
  },
  {
    "name": "田英章 英文练字帖",
    "platform": "天猫",
    "price": 22.3,
    "sales": 88246,
    "category": "练字帖/描红本",
    "rank": 250
  },
  {
    "name": "老人头 彩铅纸 细纹",
    "platform": "淘宝",
    "price": 39.9,
    "sales": 88100,
    "category": "画纸/画本",
    "rank": 251
  },
  {
    "name": "MUJI 手绘明信片套装",
    "platform": "京东",
    "price": 56.8,
    "sales": 87953,
    "category": "文创用品",
    "rank": 252
  },
  {
    "name": "3M 抽取式便签",
    "platform": "天猫",
    "price": 9.2,
    "sales": 87783,
    "category": "便签本/便条纸/N次贴",
    "rank": 253
  },
  {
    "name": "慕娜美 果冻色荧光笔",
    "platform": "抖音",
    "price": 30.7,
    "sales": 87769,
    "category": "荧光笔",
    "rank": 254
  },
  {
    "name": "鲁本斯 颜料画笔套装",
    "platform": "拼多多",
    "price": 70.8,
    "sales": 87506,
    "category": "美术颜料",
    "rank": 255
  },
  {
    "name": "纽赛 创意笔筒 收纳",
    "platform": "淘宝",
    "price": 29.3,
    "sales": 87485,
    "category": "笔筒",
    "rank": 256
  },
  {
    "name": "kinbor 治愈系文具",
    "platform": "京东",
    "price": 72.9,
    "sales": 87380,
    "category": "文创用品",
    "rank": 257
  },
  {
    "name": "手工 定制书签",
    "platform": "抖音",
    "price": 12.3,
    "sales": 87332,
    "category": "书签",
    "rank": 258
  },
  {
    "name": "东洋 淡色荧光笔 双头",
    "platform": "淘宝",
    "price": 22.5,
    "sales": 87310,
    "category": "荧光笔",
    "rank": 259
  },
  {
    "name": "慕娜美 儿童马克笔 可水洗",
    "platform": "抖音",
    "price": 60.5,
    "sales": 86635,
    "category": "马克笔",
    "rank": 260
  },
  {
    "name": "晨光 绘图铅笔 2H-8B",
    "platform": "拼多多",
    "price": 32.5,
    "sales": 85357,
    "category": "铅笔",
    "rank": 261
  },
  {
    "name": "法卡勒 动漫专用马克笔",
    "platform": "天猫",
    "price": 107.4,
    "sales": 84638,
    "category": "马克笔",
    "rank": 262
  },
  {
    "name": "Hobonichi 手账周计划本",
    "platform": "京东",
    "price": 85.8,
    "sales": 84629,
    "category": "手帐",
    "rank": 263
  },
  {
    "name": "敦煌 金属书签 创意",
    "platform": "淘宝",
    "price": 28.5,
    "sales": 84528,
    "category": "书签",
    "rank": 264
  },
  {
    "name": "得力 弹射文具盒",
    "platform": "京东",
    "price": 52.7,
    "sales": 84155,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 265
  },
  {
    "name": "得力 密码锁文具盒",
    "platform": "京东",
    "price": 21.9,
    "sales": 83426,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 266
  },
  {
    "name": "MARCO 秘密花园彩铅",
    "platform": "抖音",
    "price": 114.6,
    "sales": 83405,
    "category": "彩色铅笔",
    "rank": 267
  },
  {
    "name": "晨光 升学礼物套装",
    "platform": "天猫",
    "price": 100.7,
    "sales": 83399,
    "category": "学习套装/礼盒/盲盒",
    "rank": 268
  },
  {
    "name": "幻彩 毛毡手工包",
    "platform": "天猫",
    "price": 65.3,
    "sales": 83096,
    "category": "手工DIY套装",
    "rank": 269
  },
  {
    "name": "得力 折叠伸缩笔筒",
    "platform": "抖音",
    "price": 26.1,
    "sales": 82183,
    "category": "笔筒",
    "rank": 270
  },
  {
    "name": "晨光 手写标签纸",
    "platform": "淘宝",
    "price": 54,
    "sales": 82072,
    "category": "标签贴纸",
    "rank": 271
  },
  {
    "name": "精臣 刺绣姓名贴",
    "platform": "天猫",
    "price": 35.2,
    "sales": 81841,
    "category": "姓名贴",
    "rank": 272
  },
  {
    "name": "得力 抽屉式收纳盒",
    "platform": "淘宝",
    "price": 49.3,
    "sales": 81743,
    "category": "文具收纳盒",
    "rank": 273
  },
  {
    "name": "纳川 笔筒收纳架",
    "platform": "淘宝",
    "price": 65.5,
    "sales": 81724,
    "category": "文具收纳盒",
    "rank": 274
  },
  {
    "name": "MARCO 彩色铅笔 48色 水溶性",
    "platform": "抖音",
    "price": 47.1,
    "sales": 81329,
    "category": "彩色铅笔",
    "rank": 275
  },
  {
    "name": "晨光 白色记号笔",
    "platform": "拼多多",
    "price": 11.3,
    "sales": 81293,
    "category": "记号笔",
    "rank": 276
  },
  {
    "name": "得力 桌面笔筒 多功能",
    "platform": "抖音",
    "price": 17.8,
    "sales": 80846,
    "category": "笔筒",
    "rank": 277
  },
  {
    "name": "无印良品 桌面收纳盒 透明",
    "platform": "天猫",
    "price": 82.3,
    "sales": 80395,
    "category": "文具收纳盒",
    "rank": 278
  },
  {
    "name": "得力 折纸套装 1000张",
    "platform": "天猫",
    "price": 44,
    "sales": 80286,
    "category": "手工DIY套装",
    "rank": 279
  },
  {
    "name": "晨光 方格本 网格",
    "platform": "抖音",
    "price": 42.2,
    "sales": 80213,
    "category": "笔记本/记事本",
    "rank": 280
  },
  {
    "name": "九木 磁性书签 套装",
    "platform": "天猫",
    "price": 29.5,
    "sales": 80024,
    "category": "书签",
    "rank": 281
  },
  {
    "name": "手工 木质书签",
    "platform": "天猫",
    "price": 21.2,
    "sales": 79876,
    "category": "书签",
    "rank": 282
  },
  {
    "name": "兄弟 文具姓名贴",
    "platform": "抖音",
    "price": 97.9,
    "sales": 79769,
    "category": "姓名贴",
    "rank": 283
  },
  {
    "name": "迪士尼 自动进铅卷笔器",
    "platform": "京东",
    "price": 51.3,
    "sales": 79160,
    "category": "卷笔刀/卷笔器",
    "rank": 284
  },
  {
    "name": "华夏万卷 控笔训练字帖",
    "platform": "抖音",
    "price": 29.8,
    "sales": 79107,
    "category": "练字帖/描红本",
    "rank": 285
  },
  {
    "name": "精臣 校服姓名标签",
    "platform": "拼多多",
    "price": 33.7,
    "sales": 78927,
    "category": "姓名贴",
    "rank": 286
  },
  {
    "name": "DIY乐园 咕卡底卡 透明",
    "platform": "京东",
    "price": 35.1,
    "sales": 78819,
    "category": "拼豆/咕卡套装",
    "rank": 287
  },
  {
    "name": "迪士尼 小学生文具套装",
    "platform": "天猫",
    "price": 30,
    "sales": 78620,
    "category": "学习套装/礼盒/盲盒",
    "rank": 288
  },
  {
    "name": "兄弟 姓名贴 刺绣",
    "platform": "天猫",
    "price": 77.2,
    "sales": 78224,
    "category": "标签贴纸",
    "rank": 289
  },
  {
    "name": "真彩 学生修正带套装",
    "platform": "天猫",
    "price": 4,
    "sales": 78020,
    "category": "修正带",
    "rank": 290
  },
  {
    "name": "广博 回形针 100枚",
    "platform": "天猫",
    "price": 13.5,
    "sales": 77978,
    "category": "办公文具",
    "rank": 291
  },
  {
    "name": "精臣 姓名贴 防水免缝",
    "platform": "天猫",
    "price": 86.9,
    "sales": 77892,
    "category": "姓名贴",
    "rank": 292
  },
  {
    "name": "幻彩 串珠手工材料",
    "platform": "抖音",
    "price": 41.4,
    "sales": 77524,
    "category": "手工DIY套装",
    "rank": 293
  },
  {
    "name": "晨光 素描彩铅",
    "platform": "拼多多",
    "price": 28.2,
    "sales": 77479,
    "category": "彩色铅笔",
    "rank": 294
  },
  {
    "name": "墨点 凹槽练字帖 自动消失",
    "platform": "淘宝",
    "price": 29.9,
    "sales": 77449,
    "category": "练字帖/描红本",
    "rank": 295
  },
  {
    "name": "温莎牛顿 手指画颜料 儿童",
    "platform": "拼多多",
    "price": 124.7,
    "sales": 76410,
    "category": "美术颜料",
    "rank": 296
  },
  {
    "name": "雅柯莱 分类标签贴",
    "platform": "拼多多",
    "price": 117.4,
    "sales": 76361,
    "category": "标签贴纸",
    "rank": 297
  },
  {
    "name": "印迹 火漆封蜡枪",
    "platform": "天猫",
    "price": 55.6,
    "sales": 76344,
    "category": "火漆印章",
    "rank": 298
  },
  {
    "name": "晨光 涂改带 考试用",
    "platform": "淘宝",
    "price": 10,
    "sales": 76172,
    "category": "修正带",
    "rank": 299
  },
  {
    "name": "得力 考试专用橡皮",
    "platform": "天猫",
    "price": 24.1,
    "sales": 75942,
    "category": "橡皮擦",
    "rank": 300
  },
  {
    "name": "雅柯莱 开学姓名贴 定制",
    "platform": "天猫",
    "price": 90.1,
    "sales": 75434,
    "category": "姓名贴",
    "rank": 301
  },
  {
    "name": "得力 三角蜡笔 幼儿",
    "platform": "拼多多",
    "price": 14.8,
    "sales": 75429,
    "category": "蜡笔",
    "rank": 302
  },
  {
    "name": "六品堂 楷书练字帖",
    "platform": "抖音",
    "price": 36,
    "sales": 75314,
    "category": "练字帖/描红本",
    "rank": 303
  },
  {
    "name": "晨光 开学大礼包",
    "platform": "京东",
    "price": 76.3,
    "sales": 75170,
    "category": "学习套装/礼盒/盲盒",
    "rank": 304
  },
  {
    "name": "马利 水粉颜料 果冻",
    "platform": "抖音",
    "price": 17.8,
    "sales": 75097,
    "category": "美术颜料",
    "rank": 305
  },
  {
    "name": "绘儿乐 蜡笔 48色 专业",
    "platform": "抖音",
    "price": 40.8,
    "sales": 74709,
    "category": "蜡笔",
    "rank": 306
  },
  {
    "name": "手帐星球 火漆信封套装",
    "platform": "抖音",
    "price": 30.8,
    "sales": 74121,
    "category": "火漆印章",
    "rank": 307
  },
  {
    "name": "PLUS 修正带 不断带",
    "platform": "淘宝",
    "price": 10.1,
    "sales": 73845,
    "category": "修正带",
    "rank": 308
  },
  {
    "name": "晨光 旋转笔筒 大容量",
    "platform": "抖音",
    "price": 10,
    "sales": 73675,
    "category": "笔筒",
    "rank": 309
  },
  {
    "name": "精臣 烫印姓名贴",
    "platform": "京东",
    "price": 69.5,
    "sales": 73640,
    "category": "姓名贴",
    "rank": 310
  },
  {
    "name": "九木杂物社 莫兰迪色文具",
    "platform": "天猫",
    "price": 76.3,
    "sales": 73375,
    "category": "文创用品",
    "rank": 311
  },
  {
    "name": "晨光 透明标签贴",
    "platform": "抖音",
    "price": 90,
    "sales": 73180,
    "category": "标签贴纸",
    "rank": 312
  },
  {
    "name": "晨光 万能胶",
    "platform": "拼多多",
    "price": 9.9,
    "sales": 73172,
    "category": "胶水",
    "rank": 313
  },
  {
    "name": "kinbor 手账素材本",
    "platform": "天猫",
    "price": 79,
    "sales": 73160,
    "category": "手帐",
    "rank": 314
  },
  {
    "name": "兄弟 姓名贴 防水",
    "platform": "拼多多",
    "price": 56.2,
    "sales": 72335,
    "category": "标签贴纸",
    "rank": 315
  },
  {
    "name": "派克 明尖钢笔",
    "platform": "京东",
    "price": 27.9,
    "sales": 69658,
    "category": "钢笔",
    "rank": 316
  },
  {
    "name": "三年二班 电动文具盒 多功能",
    "platform": "拼多多",
    "price": 35,
    "sales": 69643,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 317
  },
  {
    "name": "晨光 磁吸笔筒",
    "platform": "抖音",
    "price": 13,
    "sales": 68352,
    "category": "笔筒",
    "rank": 318
  },
  {
    "name": "英雄 透明示范钢笔",
    "platform": "天猫",
    "price": 69.9,
    "sales": 68244,
    "category": "钢笔",
    "rank": 319
  },
  {
    "name": "斑马 彩色荧光笔 学生用",
    "platform": "拼多多",
    "price": 12.8,
    "sales": 68231,
    "category": "荧光笔",
    "rank": 320
  },
  {
    "name": "东洋 速干荧光笔",
    "platform": "拼多多",
    "price": 26.7,
    "sales": 67839,
    "category": "荧光笔",
    "rank": 321
  },
  {
    "name": "得力 桌上小书架",
    "platform": "天猫",
    "price": 59.9,
    "sales": 67644,
    "category": "桌面收纳架",
    "rank": 322
  },
  {
    "name": "手工 永生花书签",
    "platform": "淘宝",
    "price": 16.3,
    "sales": 66880,
    "category": "书签",
    "rank": 323
  },
  {
    "name": "印迹 火漆印章头 定制",
    "platform": "淘宝",
    "price": 44.9,
    "sales": 66644,
    "category": "火漆印章",
    "rank": 324
  },
  {
    "name": "宝克 油性记号笔",
    "platform": "京东",
    "price": 17.7,
    "sales": 66564,
    "category": "记号笔",
    "rank": 325
  },
  {
    "name": "宜家 亚克力收纳架",
    "platform": "淘宝",
    "price": 35.1,
    "sales": 66451,
    "category": "文具收纳盒",
    "rank": 326
  },
  {
    "name": "创意工坊 咕卡贴纸 闪钻",
    "platform": "京东",
    "price": 31.3,
    "sales": 65778,
    "category": "拼豆/咕卡套装",
    "rank": 327
  },
  {
    "name": "得力 文件收纳架",
    "platform": "抖音",
    "price": 34.9,
    "sales": 65583,
    "category": "桌面收纳架",
    "rank": 328
  },
  {
    "name": "Hobonichi 手账装饰花边剪刀",
    "platform": "拼多多",
    "price": 70.8,
    "sales": 65373,
    "category": "手帐",
    "rank": 329
  },
  {
    "name": "敦煌 卡通书签",
    "platform": "淘宝",
    "price": 25.5,
    "sales": 65264,
    "category": "书签",
    "rank": 330
  },
  {
    "name": "斯塔 马克笔套装 80色",
    "platform": "淘宝",
    "price": 125.4,
    "sales": 65256,
    "category": "马克笔",
    "rank": 331
  },
  {
    "name": "鲁本斯 固体水彩 便携",
    "platform": "天猫",
    "price": 103.9,
    "sales": 65138,
    "category": "美术颜料",
    "rank": 332
  },
  {
    "name": "法卡勒 金属色马克笔",
    "platform": "抖音",
    "price": 32.4,
    "sales": 65054,
    "category": "马克笔",
    "rank": 333
  },
  {
    "name": "国誉 道林纸笔记本",
    "platform": "天猫",
    "price": 10,
    "sales": 65047,
    "category": "笔记本/记事本",
    "rank": 334
  },
  {
    "name": "九木 夜光书签",
    "platform": "拼多多",
    "price": 12.6,
    "sales": 64987,
    "category": "书签",
    "rank": 335
  },
  {
    "name": "辉柏嘉 儿童彩色铅笔 24色",
    "platform": "天猫",
    "price": 101.3,
    "sales": 64492,
    "category": "彩色铅笔",
    "rank": 336
  },
  {
    "name": "晨光 资料收纳盒",
    "platform": "淘宝",
    "price": 64.2,
    "sales": 64343,
    "category": "文具收纳盒",
    "rank": 337
  },
  {
    "name": "广博 塑料书皮 卡通",
    "platform": "抖音",
    "price": 20.1,
    "sales": 63624,
    "category": "书皮/书套",
    "rank": 338
  },
  {
    "name": "创意工坊 拼豆挂件材料",
    "platform": "天猫",
    "price": 42.1,
    "sales": 63313,
    "category": "拼豆/咕卡套装",
    "rank": 339
  },
  {
    "name": "得力 包书纸 花色",
    "platform": "淘宝",
    "price": 19.8,
    "sales": 62813,
    "category": "书皮/书套",
    "rank": 340
  },
  {
    "name": "奥特曼 幼儿园文具礼盒",
    "platform": "抖音",
    "price": 48.8,
    "sales": 62783,
    "category": "学习套装/礼盒/盲盒",
    "rank": 341
  },
  {
    "name": "马利 颜料补充装",
    "platform": "淘宝",
    "price": 79.1,
    "sales": 62772,
    "category": "美术颜料",
    "rank": 342
  },
  {
    "name": "Hobonichi 手账本 A6 活页",
    "platform": "抖音",
    "price": 35.2,
    "sales": 62720,
    "category": "手帐",
    "rank": 343
  },
  {
    "name": "百乐 商务圆珠笔",
    "platform": "拼多多",
    "price": 14.3,
    "sales": 62615,
    "category": "圆珠笔",
    "rank": 344
  },
  {
    "name": "kinbor ins风文具套装",
    "platform": "京东",
    "price": 22.7,
    "sales": 62434,
    "category": "文创用品",
    "rank": 345
  },
  {
    "name": "英雄 马克笔+彩铅套装",
    "platform": "抖音",
    "price": 45,
    "sales": 62400,
    "category": "笔类套装/礼盒",
    "rank": 346
  },
  {
    "name": "慕娜美 荧光笔套装 6色",
    "platform": "淘宝",
    "price": 27.1,
    "sales": 62163,
    "category": "荧光笔",
    "rank": 347
  },
  {
    "name": "东洋 柔和色荧光笔",
    "platform": "淘宝",
    "price": 33.2,
    "sales": 61427,
    "category": "荧光笔",
    "rank": 348
  },
  {
    "name": "kinbor 手账贴纸 100张",
    "platform": "抖音",
    "price": 76.7,
    "sales": 61191,
    "category": "手帐",
    "rank": 349
  },
  {
    "name": "得力 钢笔礼盒 毕业礼物",
    "platform": "拼多多",
    "price": 105.7,
    "sales": 60961,
    "category": "笔类套装/礼盒",
    "rank": 350
  },
  {
    "name": "百乐 金属杆钢笔",
    "platform": "抖音",
    "price": 138,
    "sales": 60451,
    "category": "钢笔",
    "rank": 351
  },
  {
    "name": "毕加索 铅笔套装 绘画用",
    "platform": "京东",
    "price": 44.6,
    "sales": 59972,
    "category": "笔类套装/礼盒",
    "rank": 352
  },
  {
    "name": "故宫文创 古风书签 流苏",
    "platform": "京东",
    "price": 26.1,
    "sales": 59496,
    "category": "书签",
    "rank": 353
  },
  {
    "name": "百乐 荧光笔 大容量",
    "platform": "拼多多",
    "price": 13.1,
    "sales": 59387,
    "category": "荧光笔",
    "rank": 354
  },
  {
    "name": "樱花 金属色颜料",
    "platform": "抖音",
    "price": 37.6,
    "sales": 59283,
    "category": "美术颜料",
    "rank": 355
  },
  {
    "name": "凌美 学生钢笔 正姿",
    "platform": "京东",
    "price": 36.6,
    "sales": 58802,
    "category": "钢笔",
    "rank": 356
  },
  {
    "name": "DIY乐园 咕卡奶油胶",
    "platform": "抖音",
    "price": 35.1,
    "sales": 58369,
    "category": "拼豆/咕卡套装",
    "rank": 357
  },
  {
    "name": "得力 软芯彩铅",
    "platform": "淘宝",
    "price": 95.6,
    "sales": 58095,
    "category": "彩色铅笔",
    "rank": 358
  },
  {
    "name": "鲁本斯 水彩颜料 36色",
    "platform": "京东",
    "price": 18.9,
    "sales": 58016,
    "category": "美术颜料",
    "rank": 359
  },
  {
    "name": "凌美 复古钢笔",
    "platform": "抖音",
    "price": 24.4,
    "sales": 57981,
    "category": "钢笔",
    "rank": 360
  },
  {
    "name": "马利 建筑手绘马克笔",
    "platform": "京东",
    "price": 121.8,
    "sales": 57856,
    "category": "马克笔",
    "rank": 361
  },
  {
    "name": "MARCO 彩铅画本套装",
    "platform": "拼多多",
    "price": 74.9,
    "sales": 57805,
    "category": "彩色铅笔",
    "rank": 362
  },
  {
    "name": "宝虹 马克笔专用纸",
    "platform": "拼多多",
    "price": 35.1,
    "sales": 57026,
    "category": "画纸/画本",
    "rank": 363
  },
  {
    "name": "晨光 学习用品礼盒",
    "platform": "京东",
    "price": 46.9,
    "sales": 56556,
    "category": "学习套装/礼盒/盲盒",
    "rank": 364
  },
  {
    "name": "九木 压花书签",
    "platform": "拼多多",
    "price": 9.8,
    "sales": 55666,
    "category": "书签",
    "rank": 365
  },
  {
    "name": "印迹 火漆印章 花朵款",
    "platform": "抖音",
    "price": 63.1,
    "sales": 55060,
    "category": "火漆印章",
    "rank": 366
  },
  {
    "name": "3M 学生胶水 安全",
    "platform": "淘宝",
    "price": 2.9,
    "sales": 54849,
    "category": "胶水",
    "rank": 367
  },
  {
    "name": "慢作 火漆勺 木柄",
    "platform": "拼多多",
    "price": 49.9,
    "sales": 54666,
    "category": "火漆印章",
    "rank": 368
  },
  {
    "name": "百乐 按动笔芯 替换装",
    "platform": "抖音",
    "price": 16.9,
    "sales": 54633,
    "category": "笔芯/替芯/笔壳",
    "rank": 369
  },
  {
    "name": "真彩 白板笔 替换芯",
    "platform": "拼多多",
    "price": 19.8,
    "sales": 54435,
    "category": "白板笔",
    "rank": 370
  },
  {
    "name": "纳川 文具整理架",
    "platform": "京东",
    "price": 48.4,
    "sales": 54372,
    "category": "文具收纳盒",
    "rank": 371
  },
  {
    "name": "晨光 贴纸式姓名贴",
    "platform": "抖音",
    "price": 55.7,
    "sales": 54299,
    "category": "姓名贴",
    "rank": 372
  },
  {
    "name": "kinbor 创意书签 金属",
    "platform": "抖音",
    "price": 29.6,
    "sales": 53526,
    "category": "文创用品",
    "rank": 373
  },
  {
    "name": "kinbor 复古文具",
    "platform": "抖音",
    "price": 35.4,
    "sales": 53497,
    "category": "文创用品",
    "rank": 374
  },
  {
    "name": "手工达人 迷你咕卡材料包",
    "platform": "淘宝",
    "price": 16.5,
    "sales": 53472,
    "category": "拼豆/咕卡套装",
    "rank": 375
  },
  {
    "name": "晨光 彩色笔全套",
    "platform": "京东",
    "price": 121.8,
    "sales": 53228,
    "category": "笔类套装/礼盒",
    "rank": 376
  },
  {
    "name": "得力 考试文具套装 68件",
    "platform": "京东",
    "price": 127.3,
    "sales": 53187,
    "category": "学习套装/礼盒/盲盒",
    "rank": 377
  },
  {
    "name": "三菱 粗杆铅笔 幼儿用",
    "platform": "京东",
    "price": 6,
    "sales": 52730,
    "category": "铅笔",
    "rank": 378
  },
  {
    "name": "晨光 大头笔 物流用",
    "platform": "抖音",
    "price": 3.5,
    "sales": 51844,
    "category": "记号笔",
    "rank": 379
  },
  {
    "name": "精臣 硅胶姓名扣",
    "platform": "天猫",
    "price": 90.7,
    "sales": 51794,
    "category": "姓名贴",
    "rank": 380
  },
  {
    "name": "得力 白板笔 大容量",
    "platform": "淘宝",
    "price": 8.4,
    "sales": 50143,
    "category": "白板笔",
    "rank": 381
  },
  {
    "name": "老人头 临摹纸 拷贝纸",
    "platform": "天猫",
    "price": 46.2,
    "sales": 49316,
    "category": "画纸/画本",
    "rank": 382
  },
  {
    "name": "晨光 练字钢笔 暗尖",
    "platform": "抖音",
    "price": 110.9,
    "sales": 48805,
    "category": "钢笔",
    "rank": 383
  },
  {
    "name": "三年二班 原创设计笔",
    "platform": "京东",
    "price": 47.8,
    "sales": 48456,
    "category": "文创用品",
    "rank": 384
  },
  {
    "name": "得力 计算器 太阳能",
    "platform": "抖音",
    "price": 39.2,
    "sales": 47524,
    "category": "办公文具",
    "rank": 385
  },
  {
    "name": "派克 EF尖钢笔",
    "platform": "抖音",
    "price": 174.5,
    "sales": 47140,
    "category": "钢笔",
    "rank": 386
  },
  {
    "name": "获多福 手绘本 硬壳",
    "platform": "抖音",
    "price": 14.9,
    "sales": 47136,
    "category": "画纸/画本",
    "rank": 387
  },
  {
    "name": "白雪 白板笔 12色套装",
    "platform": "抖音",
    "price": 14.8,
    "sales": 47006,
    "category": "白板笔",
    "rank": 388
  },
  {
    "name": "得力 毛笔套装 书法",
    "platform": "拼多多",
    "price": 32.8,
    "sales": 46731,
    "category": "笔类套装/礼盒",
    "rank": 389
  },
  {
    "name": "手帐星球 火漆蜡条 彩色",
    "platform": "淘宝",
    "price": 24.9,
    "sales": 45419,
    "category": "火漆印章",
    "rank": 390
  },
  {
    "name": "KOKUYO 帆布笔袋 简约",
    "platform": "淘宝",
    "price": 37.9,
    "sales": 45166,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 391
  },
  {
    "name": "手帐星球 火漆蜡粒 多色",
    "platform": "京东",
    "price": 72.6,
    "sales": 44658,
    "category": "火漆印章",
    "rank": 392
  },
  {
    "name": "雅柯莱 幼儿园名字贴",
    "platform": "抖音",
    "price": 18,
    "sales": 44495,
    "category": "姓名贴",
    "rank": 393
  },
  {
    "name": "马利 白板用水彩笔",
    "platform": "天猫",
    "price": 49.1,
    "sales": 43976,
    "category": "水彩笔",
    "rank": 394
  },
  {
    "name": "雅柯莱 书本姓名贴 透明",
    "platform": "拼多多",
    "price": 57.5,
    "sales": 43656,
    "category": "姓名贴",
    "rank": 395
  },
  {
    "name": "晨光 彩铅补充装",
    "platform": "拼多多",
    "price": 71.9,
    "sales": 43165,
    "category": "彩色铅笔",
    "rank": 396
  },
  {
    "name": "kinbor 文艺笔记本",
    "platform": "拼多多",
    "price": 66.8,
    "sales": 43067,
    "category": "文创用品",
    "rank": 397
  },
  {
    "name": "晨光 桌面卷笔器 大容量",
    "platform": "淘宝",
    "price": 52.7,
    "sales": 42918,
    "category": "卷笔刀/卷笔器",
    "rank": 398
  },
  {
    "name": "老人头 绘画本 A3",
    "platform": "京东",
    "price": 16.1,
    "sales": 42890,
    "category": "画纸/画本",
    "rank": 399
  },
  {
    "name": "百乐 透明杆圆珠笔",
    "platform": "京东",
    "price": 20.4,
    "sales": 42142,
    "category": "圆珠笔",
    "rank": 400
  },
  {
    "name": "宜家 可调节桌面架",
    "platform": "天猫",
    "price": 87.6,
    "sales": 41704,
    "category": "桌面收纳架",
    "rank": 401
  },
  {
    "name": "晨光 502胶水",
    "platform": "天猫",
    "price": 21.5,
    "sales": 41530,
    "category": "胶水",
    "rank": 402
  },
  {
    "name": "迪士尼 便携卷笔刀",
    "platform": "拼多多",
    "price": 36.5,
    "sales": 41305,
    "category": "卷笔刀/卷笔器",
    "rank": 403
  },
  {
    "name": "百乐 学生圆珠笔 套装",
    "platform": "淘宝",
    "price": 24.9,
    "sales": 40499,
    "category": "圆珠笔",
    "rank": 404
  },
  {
    "name": "六品堂 小学生字帖",
    "platform": "天猫",
    "price": 24.3,
    "sales": 40421,
    "category": "练字帖/描红本",
    "rank": 405
  },
  {
    "name": "三年二班 硅胶笔袋 创意",
    "platform": "京东",
    "price": 38.9,
    "sales": 39978,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 406
  },
  {
    "name": "晨光 中性笔套装 12色",
    "platform": "拼多多",
    "price": 67.2,
    "sales": 39759,
    "category": "笔类套装/礼盒",
    "rank": 407
  },
  {
    "name": "晨光 三角杆水彩笔",
    "platform": "淘宝",
    "price": 60.3,
    "sales": 39458,
    "category": "水彩笔",
    "rank": 408
  },
  {
    "name": "晨光 手摇卷笔刀 儿童",
    "platform": "天猫",
    "price": 55.5,
    "sales": 39253,
    "category": "卷笔刀/卷笔器",
    "rank": 409
  },
  {
    "name": "精臣 文件标签 彩色索引",
    "platform": "拼多多",
    "price": 32.9,
    "sales": 37968,
    "category": "标签贴纸",
    "rank": 410
  },
  {
    "name": "文谷 手账打孔器",
    "platform": "拼多多",
    "price": 71.8,
    "sales": 37891,
    "category": "手帐",
    "rank": 411
  },
  {
    "name": "暮光之印 星座火漆印章",
    "platform": "抖音",
    "price": 69.3,
    "sales": 36211,
    "category": "火漆印章",
    "rank": 412
  },
  {
    "name": "晨光 文具盲盒 联名款",
    "platform": "拼多多",
    "price": 52.8,
    "sales": 36122,
    "category": "学习套装/礼盒/盲盒",
    "rank": 413
  },
  {
    "name": "暮光之印 复古火漆印章套装",
    "platform": "京东",
    "price": 84.6,
    "sales": 35889,
    "category": "火漆印章",
    "rank": 414
  },
  {
    "name": "得力 文具笔礼盒",
    "platform": "淘宝",
    "price": 61.8,
    "sales": 35628,
    "category": "笔类套装/礼盒",
    "rank": 415
  },
  {
    "name": "白雪 彩色白板笔 套装",
    "platform": "京东",
    "price": 17.3,
    "sales": 35275,
    "category": "白板笔",
    "rank": 416
  },
  {
    "name": "得力 多功能桌面架",
    "platform": "京东",
    "price": 23,
    "sales": 33900,
    "category": "桌面收纳架",
    "rank": 417
  },
  {
    "name": "得力 姓名贴打印机",
    "platform": "天猫",
    "price": 57.4,
    "sales": 33856,
    "category": "姓名贴",
    "rank": 418
  },
  {
    "name": "Hobonichi 手账模板尺",
    "platform": "京东",
    "price": 64.7,
    "sales": 33264,
    "category": "手帐",
    "rank": 419
  },
  {
    "name": "樱花 纺织颜料 手绘",
    "platform": "天猫",
    "price": 56.6,
    "sales": 33199,
    "category": "美术颜料",
    "rank": 420
  },
  {
    "name": "创意工坊 咕卡装饰宝石",
    "platform": "抖音",
    "price": 31.2,
    "sales": 33112,
    "category": "拼豆/咕卡套装",
    "rank": 421
  },
  {
    "name": "宜家 杂志收纳架",
    "platform": "抖音",
    "price": 76.4,
    "sales": 32723,
    "category": "桌面收纳架",
    "rank": 422
  },
  {
    "name": "手帐星球 火漆蜡片 成品",
    "platform": "淘宝",
    "price": 43.2,
    "sales": 31726,
    "category": "火漆印章",
    "rank": 423
  },
  {
    "name": "敦煌 透明亚克力书签",
    "platform": "抖音",
    "price": 26.8,
    "sales": 31192,
    "category": "书签",
    "rank": 424
  },
  {
    "name": "晨光生活馆 国潮文具套装",
    "platform": "拼多多",
    "price": 32.5,
    "sales": 30530,
    "category": "文创用品",
    "rank": 425
  },
  {
    "name": "得力 迷你卷笔刀",
    "platform": "拼多多",
    "price": 24,
    "sales": 30419,
    "category": "卷笔刀/卷笔器",
    "rank": 426
  },
  {
    "name": "三年二班 铁皮文具盒",
    "platform": "天猫",
    "price": 36.5,
    "sales": 29112,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 427
  },
  {
    "name": "儿童乐园 剪纸套装",
    "platform": "拼多多",
    "price": 18.4,
    "sales": 28742,
    "category": "手工DIY套装",
    "rank": 428
  },
  {
    "name": "兄弟 热敏标签纸 卷装",
    "platform": "天猫",
    "price": 22.4,
    "sales": 28132,
    "category": "标签贴纸",
    "rank": 429
  },
  {
    "name": "得力 双孔卷笔刀",
    "platform": "京东",
    "price": 35.4,
    "sales": 27008,
    "category": "卷笔刀/卷笔器",
    "rank": 430
  },
  {
    "name": "迪士尼 多层文具盒",
    "platform": "抖音",
    "price": 26.6,
    "sales": 26919,
    "category": "文具盒/笔袋/痛包笔袋",
    "rank": 431
  },
  {
    "name": "MUJI 设计感便签",
    "platform": "拼多多",
    "price": 64.5,
    "sales": 26712,
    "category": "文创用品",
    "rank": 432
  },
  {
    "name": "获多福 儿童画本 空白",
    "platform": "淘宝",
    "price": 65.9,
    "sales": 26437,
    "category": "画纸/画本",
    "rank": 433
  },
  {
    "name": "晨光 彩铅收纳笔帘",
    "platform": "抖音",
    "price": 18.4,
    "sales": 26227,
    "category": "彩色铅笔",
    "rank": 434
  },
  {
    "name": "晨光 创意美劳材料包",
    "platform": "拼多多",
    "price": 27.3,
    "sales": 26127,
    "category": "手工DIY套装",
    "rank": 435
  },
  {
    "name": "touch 软头马克笔套装",
    "platform": "天猫",
    "price": 44.5,
    "sales": 25162,
    "category": "马克笔",
    "rank": 436
  },
  {
    "name": "得力 画笔套装 水彩",
    "platform": "京东",
    "price": 103.2,
    "sales": 24105,
    "category": "笔类套装/礼盒",
    "rank": 437
  },
  {
    "name": "百乐 考试笔套装",
    "platform": "抖音",
    "price": 92.7,
    "sales": 22187,
    "category": "笔类套装/礼盒",
    "rank": 438
  },
  {
    "name": "雅柯莱 标签纸 打印机用",
    "platform": "天猫",
    "price": 93.4,
    "sales": 21366,
    "category": "标签贴纸",
    "rank": 439
  },
  {
    "name": "得力 学生笔类大礼包",
    "platform": "淘宝",
    "price": 119.9,
    "sales": 19966,
    "category": "笔类套装/礼盒",
    "rank": 440
  },
  {
    "name": "得力 签字笔礼盒",
    "platform": "抖音",
    "price": 148.3,
    "sales": 19522,
    "category": "笔类套装/礼盒",
    "rank": 441
  },
  {
    "name": "得力 可叠加收纳盒",
    "platform": "抖音",
    "price": 43.7,
    "sales": 19352,
    "category": "文具收纳盒",
    "rank": 442
  },
  {
    "name": "晨光生活馆 极简文具",
    "platform": "抖音",
    "price": 48.2,
    "sales": 18958,
    "category": "文创用品",
    "rank": 443
  },
  {
    "name": "故宫文创 刺绣书签",
    "platform": "天猫",
    "price": 20.5,
    "sales": 18593,
    "category": "书签",
    "rank": 444
  },
  {
    "name": "暮光之印 火漆印章礼盒",
    "platform": "天猫",
    "price": 21.3,
    "sales": 18552,
    "category": "火漆印章",
    "rank": 445
  },
  {
    "name": "森活记 毕业纪念火漆套装",
    "platform": "淘宝",
    "price": 65.1,
    "sales": 18158,
    "category": "火漆印章",
    "rank": 446
  },
  {
    "name": "英雄 彩笔套装 150件",
    "platform": "淘宝",
    "price": 106.6,
    "sales": 18141,
    "category": "笔类套装/礼盒",
    "rank": 447
  },
  {
    "name": "晨光 钢笔套装 含墨囊",
    "platform": "天猫",
    "price": 111.8,
    "sales": 17217,
    "category": "钢笔",
    "rank": 448
  },
  {
    "name": "百乐 速写钢笔",
    "platform": "淘宝",
    "price": 112.8,
    "sales": 15900,
    "category": "钢笔",
    "rank": 449
  },
  {
    "name": "MUJI 创意笔筒 北欧",
    "platform": "天猫",
    "price": 64.1,
    "sales": 15893,
    "category": "文创用品",
    "rank": 450
  },
  {
    "name": "晨光 书签尺 多功能",
    "platform": "抖音",
    "price": 15.9,
    "sales": 15649,
    "category": "书签",
    "rank": 451
  },
  {
    "name": "温莎 刮画纸 彩色",
    "platform": "天猫",
    "price": 35,
    "sales": 15424,
    "category": "画纸/画本",
    "rank": 452
  },
  {
    "name": "凌美 可替换墨囊钢笔",
    "platform": "天猫",
    "price": 99.8,
    "sales": 13931,
    "category": "钢笔",
    "rank": 453
  },
  {
    "name": "派克 钢笔礼盒 商务",
    "platform": "淘宝",
    "price": 180,
    "sales": 13682,
    "category": "钢笔",
    "rank": 454
  },
  {
    "name": "温莎牛顿 丙烯颜料套装",
    "platform": "京东",
    "price": 32.1,
    "sales": 12226,
    "category": "美术颜料",
    "rank": 455
  },
  {
    "name": "凌美 旋转吸墨钢笔",
    "platform": "天猫",
    "price": 132.4,
    "sales": 10668,
    "category": "钢笔",
    "rank": 456
  }
],
  seasonalTrends: [
  {
    "name": "中性笔 考场专用",
    "category": "中性笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 110,
    "heat": "爆"
  },
  {
    "name": "中性笔 暑假必囤",
    "category": "中性笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 24,
    "heat": "热"
  },
  {
    "name": "中性笔 年中大促热卖",
    "category": "中性笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 223,
    "heat": "稳"
  },
  {
    "name": "中性笔 办公高效",
    "category": "中性笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 220,
    "heat": "暖"
  },
  {
    "name": "中性笔 球迷手绘",
    "category": "中性笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 92,
    "heat": "爆"
  },
  {
    "name": "中性笔 离校必备",
    "category": "中性笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 44,
    "heat": "稳"
  },
  {
    "name": "笔记本/记事本 考场专用",
    "category": "笔记本/记事本",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 130,
    "heat": "暖"
  },
  {
    "name": "笔记本/记事本 暑假必囤",
    "category": "笔记本/记事本",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 125,
    "heat": "稳"
  },
  {
    "name": "笔记本/记事本 618爆款",
    "category": "笔记本/记事本",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 27,
    "heat": "爆"
  },
  {
    "name": "笔记本/记事本 会议利器",
    "category": "笔记本/记事本",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 107,
    "heat": "暖"
  },
  {
    "name": "笔记本/记事本 球迷手绘",
    "category": "笔记本/记事本",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 22,
    "heat": "暖"
  },
  {
    "name": "笔记本/记事本 毕业纪念",
    "category": "笔记本/记事本",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 182,
    "heat": "爆"
  },
  {
    "name": "学习套装/礼盒/盲盒 中高考冲刺",
    "category": "学习套装/礼盒/盲盒",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 150,
    "heat": "稳"
  },
  {
    "name": "学习套装/礼盒/盲盒 假期绘画",
    "category": "学习套装/礼盒/盲盒",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 227,
    "heat": "暖"
  },
  {
    "name": "学习套装/礼盒/盲盒 618囤货首选",
    "category": "学习套装/礼盒/盲盒",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 60,
    "heat": "热"
  },
  {
    "name": "学习套装/礼盒/盲盒 办公高效",
    "category": "学习套装/礼盒/盲盒",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 224,
    "heat": "稳"
  },
  {
    "name": "学习套装/礼盒/盲盒 球迷手绘",
    "category": "学习套装/礼盒/盲盒",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 181,
    "heat": "热"
  },
  {
    "name": "学习套装/礼盒/盲盒 毕业礼物",
    "category": "学习套装/礼盒/盲盒",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 91,
    "heat": "热"
  },
  {
    "name": "马克笔 中高考冲刺",
    "category": "马克笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 170,
    "heat": "爆"
  },
  {
    "name": "马克笔 假期绘画",
    "category": "马克笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 98,
    "heat": "爆"
  },
  {
    "name": "马克笔 年中大促热卖",
    "category": "马克笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 93,
    "heat": "热"
  },
  {
    "name": "马克笔 会议利器",
    "category": "马克笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 110,
    "heat": "爆"
  },
  {
    "name": "马克笔 球迷手绘",
    "category": "马克笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 111,
    "heat": "稳"
  },
  {
    "name": "马克笔 毕业纪念",
    "category": "马克笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 229,
    "heat": "暖"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 考试必备",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 190,
    "heat": "热"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 暑期手工创作",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 199,
    "heat": "稳"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 618爆款",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 127,
    "heat": "暖"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 职场必备",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 227,
    "heat": "爆"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 球迷手绘",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 41,
    "heat": "热"
  },
  {
    "name": "文具盒/笔袋/痛包笔袋 毕业礼物",
    "category": "文具盒/笔袋/痛包笔袋",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 138,
    "heat": "稳"
  },
  {
    "name": "铅笔 考试必备",
    "category": "铅笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 210,
    "heat": "稳"
  },
  {
    "name": "铅笔 暑期手工创作",
    "category": "铅笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 70,
    "heat": "热"
  },
  {
    "name": "铅笔 618爆款",
    "category": "铅笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 160,
    "heat": "稳"
  },
  {
    "name": "铅笔 会议利器",
    "category": "铅笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 113,
    "heat": "热"
  },
  {
    "name": "铅笔 球迷手绘",
    "category": "铅笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 200,
    "heat": "稳"
  },
  {
    "name": "铅笔 离校必备",
    "category": "铅笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 46,
    "heat": "爆"
  },
  {
    "name": "橡皮擦 考试必备",
    "category": "橡皮擦",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 230,
    "heat": "爆"
  },
  {
    "name": "橡皮擦 暑假必囤",
    "category": "橡皮擦",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 171,
    "heat": "爆"
  },
  {
    "name": "橡皮擦 618囤货首选",
    "category": "橡皮擦",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 194,
    "heat": "稳"
  },
  {
    "name": "橡皮擦 职场必备",
    "category": "橡皮擦",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 230,
    "heat": "热"
  },
  {
    "name": "橡皮擦 球迷手绘",
    "category": "橡皮擦",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 130,
    "heat": "暖"
  },
  {
    "name": "橡皮擦 毕业纪念",
    "category": "橡皮擦",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 185,
    "heat": "热"
  },
  {
    "name": "荧光笔 考场专用",
    "category": "荧光笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 20,
    "heat": "热"
  },
  {
    "name": "荧光笔 暑假必囤",
    "category": "荧光笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 42,
    "heat": "暖"
  },
  {
    "name": "荧光笔 年中大促热卖",
    "category": "荧光笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 227,
    "heat": "爆"
  },
  {
    "name": "荧光笔 会议利器",
    "category": "荧光笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 116,
    "heat": "暖"
  },
  {
    "name": "荧光笔 球迷手绘",
    "category": "荧光笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 60,
    "heat": "爆"
  },
  {
    "name": "荧光笔 毕业礼物",
    "category": "荧光笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 93,
    "heat": "暖"
  },
  {
    "name": "手帐 考场专用",
    "category": "手帐",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 40,
    "heat": "稳"
  },
  {
    "name": "手帐 假期绘画",
    "category": "手帐",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 143,
    "heat": "热"
  },
  {
    "name": "手帐 618爆款",
    "category": "手帐",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 31,
    "heat": "热"
  },
  {
    "name": "手帐 职场必备",
    "category": "手帐",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 233,
    "heat": "稳"
  },
  {
    "name": "手帐 球迷手绘",
    "category": "手帐",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 219,
    "heat": "暖"
  },
  {
    "name": "手帐 离校必备",
    "category": "手帐",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 232,
    "heat": "稳"
  },
  {
    "name": "火漆印章 中高考冲刺",
    "category": "火漆印章",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 60,
    "heat": "爆"
  },
  {
    "name": "火漆印章 假期绘画",
    "category": "火漆印章",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 244,
    "heat": "爆"
  },
  {
    "name": "火漆印章 618爆款",
    "category": "火漆印章",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 64,
    "heat": "热"
  },
  {
    "name": "火漆印章 办公高效",
    "category": "火漆印章",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 119,
    "heat": "稳"
  },
  {
    "name": "火漆印章 球迷手绘",
    "category": "火漆印章",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 149,
    "heat": "爆"
  },
  {
    "name": "火漆印章 毕业纪念",
    "category": "火漆印章",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 140,
    "heat": "爆"
  },
  {
    "name": "水彩笔 中高考冲刺",
    "category": "水彩笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 80,
    "heat": "热"
  },
  {
    "name": "水彩笔 暑期手工创作",
    "category": "水彩笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 115,
    "heat": "暖"
  },
  {
    "name": "水彩笔 618囤货首选",
    "category": "水彩笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 98,
    "heat": "暖"
  },
  {
    "name": "水彩笔 职场必备",
    "category": "水彩笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 236,
    "heat": "爆"
  },
  {
    "name": "水彩笔 球迷手绘",
    "category": "水彩笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 78,
    "heat": "稳"
  },
  {
    "name": "水彩笔 毕业礼物",
    "category": "水彩笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 49,
    "heat": "热"
  },
  {
    "name": "标签贴纸 中高考冲刺",
    "category": "标签贴纸",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 100,
    "heat": "暖"
  },
  {
    "name": "标签贴纸 暑期手工创作",
    "category": "标签贴纸",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 216,
    "heat": "热"
  },
  {
    "name": "标签贴纸 年中大促热卖",
    "category": "标签贴纸",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 131,
    "heat": "稳"
  },
  {
    "name": "标签贴纸 办公高效",
    "category": "标签贴纸",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 123,
    "heat": "爆"
  },
  {
    "name": "标签贴纸 球迷手绘",
    "category": "标签贴纸",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 238,
    "heat": "热"
  },
  {
    "name": "标签贴纸 离校必备",
    "category": "标签贴纸",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 188,
    "heat": "暖"
  },
  {
    "name": "手工DIY套装 考试必备",
    "category": "手工DIY套装",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 121,
    "heat": "爆"
  },
  {
    "name": "手工DIY套装 暑假必囤",
    "category": "手工DIY套装",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 87,
    "heat": "稳"
  },
  {
    "name": "手工DIY套装 618爆款",
    "category": "手工DIY套装",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 165,
    "heat": "爆"
  },
  {
    "name": "手工DIY套装 职场必备",
    "category": "手工DIY套装",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 239,
    "heat": "热"
  },
  {
    "name": "手工DIY套装 球迷手绘",
    "category": "手工DIY套装",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 168,
    "heat": "稳"
  },
  {
    "name": "手工DIY套装 毕业纪念",
    "category": "手工DIY套装",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 96,
    "heat": "稳"
  },
  {
    "name": "卷笔刀/卷笔器 考试必备",
    "category": "卷笔刀/卷笔器",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 141,
    "heat": "热"
  },
  {
    "name": "卷笔刀/卷笔器 暑假必囤",
    "category": "卷笔刀/卷笔器",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 188,
    "heat": "暖"
  },
  {
    "name": "卷笔刀/卷笔器 618囤货首选",
    "category": "卷笔刀/卷笔器",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 198,
    "heat": "爆"
  },
  {
    "name": "卷笔刀/卷笔器 办公高效",
    "category": "卷笔刀/卷笔器",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 126,
    "heat": "暖"
  },
  {
    "name": "卷笔刀/卷笔器 球迷手绘",
    "category": "卷笔刀/卷笔器",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 97,
    "heat": "热"
  },
  {
    "name": "卷笔刀/卷笔器 毕业礼物",
    "category": "卷笔刀/卷笔器",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 235,
    "heat": "爆"
  },
  {
    "name": "便签本/便条纸/N次贴 考场专用",
    "category": "便签本/便条纸/N次贴",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 161,
    "heat": "暖"
  },
  {
    "name": "便签本/便条纸/N次贴 假期绘画",
    "category": "便签本/便条纸/N次贴",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 60,
    "heat": "爆"
  },
  {
    "name": "便签本/便条纸/N次贴 618囤货首选",
    "category": "便签本/便条纸/N次贴",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 232,
    "heat": "热"
  },
  {
    "name": "便签本/便条纸/N次贴 会议利器",
    "category": "便签本/便条纸/N次贴",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 242,
    "heat": "暖"
  },
  {
    "name": "便签本/便条纸/N次贴 球迷手绘",
    "category": "便签本/便条纸/N次贴",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 27,
    "heat": "稳"
  },
  {
    "name": "便签本/便条纸/N次贴 离校必备",
    "category": "便签本/便条纸/N次贴",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 143,
    "heat": "热"
  },
  {
    "name": "笔筒 考场专用",
    "category": "笔筒",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 181,
    "heat": "爆"
  },
  {
    "name": "笔筒 暑期手工创作",
    "category": "笔筒",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 161,
    "heat": "稳"
  },
  {
    "name": "笔筒 年中大促热卖",
    "category": "笔筒",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 35,
    "heat": "暖"
  },
  {
    "name": "笔筒 办公高效",
    "category": "笔筒",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 129,
    "heat": "稳"
  },
  {
    "name": "笔筒 球迷手绘",
    "category": "笔筒",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 186,
    "heat": "暖"
  },
  {
    "name": "笔筒 毕业纪念",
    "category": "笔筒",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 52,
    "heat": "暖"
  },
  {
    "name": "文具收纳盒 考场专用",
    "category": "文具收纳盒",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 201,
    "heat": "热"
  },
  {
    "name": "文具收纳盒 暑期手工创作",
    "category": "文具收纳盒",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 32,
    "heat": "热"
  },
  {
    "name": "文具收纳盒 618爆款",
    "category": "文具收纳盒",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 69,
    "heat": "暖"
  },
  {
    "name": "文具收纳盒 会议利器",
    "category": "文具收纳盒",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 245,
    "heat": "稳"
  },
  {
    "name": "文具收纳盒 球迷手绘",
    "category": "文具收纳盒",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 116,
    "heat": "爆"
  },
  {
    "name": "文具收纳盒 毕业礼物",
    "category": "文具收纳盒",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 190,
    "heat": "稳"
  },
  {
    "name": "桌面收纳架 中高考冲刺",
    "category": "桌面收纳架",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 221,
    "heat": "暖"
  },
  {
    "name": "桌面收纳架 暑假必囤",
    "category": "桌面收纳架",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 133,
    "heat": "爆"
  },
  {
    "name": "桌面收纳架 618囤货首选",
    "category": "桌面收纳架",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 102,
    "heat": "稳"
  },
  {
    "name": "桌面收纳架 办公高效",
    "category": "桌面收纳架",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 132,
    "heat": "爆"
  },
  {
    "name": "桌面收纳架 球迷手绘",
    "category": "桌面收纳架",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 46,
    "heat": "暖"
  },
  {
    "name": "桌面收纳架 离校必备",
    "category": "桌面收纳架",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 99,
    "heat": "爆"
  },
  {
    "name": "书皮/书套 中高考冲刺",
    "category": "书皮/书套",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 241,
    "heat": "稳"
  },
  {
    "name": "书皮/书套 暑假必囤",
    "category": "书皮/书套",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 234,
    "heat": "暖"
  },
  {
    "name": "书皮/书套 618囤货首选",
    "category": "书皮/书套",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 135,
    "heat": "爆"
  },
  {
    "name": "书皮/书套 会议利器",
    "category": "书皮/书套",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 248,
    "heat": "热"
  },
  {
    "name": "书皮/书套 球迷手绘",
    "category": "书皮/书套",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 205,
    "heat": "爆"
  },
  {
    "name": "书皮/书套 毕业纪念",
    "category": "书皮/书套",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 237,
    "heat": "热"
  },
  {
    "name": "美术颜料 考试必备",
    "category": "美术颜料",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 31,
    "heat": "热"
  },
  {
    "name": "美术颜料 假期绘画",
    "category": "美术颜料",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 105,
    "heat": "热"
  },
  {
    "name": "美术颜料 年中大促热卖",
    "category": "美术颜料",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 169,
    "heat": "爆"
  },
  {
    "name": "美术颜料 职场必备",
    "category": "美术颜料",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 135,
    "heat": "热"
  },
  {
    "name": "美术颜料 球迷手绘",
    "category": "美术颜料",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 135,
    "heat": "稳"
  },
  {
    "name": "美术颜料 毕业礼物",
    "category": "美术颜料",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 146,
    "heat": "暖"
  },
  {
    "name": "办公文具 考试必备",
    "category": "办公文具",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 51,
    "heat": "暖"
  },
  {
    "name": "办公文具 假期绘画",
    "category": "办公文具",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 206,
    "heat": "爆"
  },
  {
    "name": "办公文具 618爆款",
    "category": "办公文具",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 202,
    "heat": "热"
  },
  {
    "name": "办公文具 会议利器",
    "category": "办公文具",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 22,
    "heat": "暖"
  },
  {
    "name": "办公文具 球迷手绘",
    "category": "办公文具",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 64,
    "heat": "热"
  },
  {
    "name": "办公文具 离校必备",
    "category": "办公文具",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 54,
    "heat": "稳"
  },
  {
    "name": "笔类套装/礼盒 考试必备",
    "category": "笔类套装/礼盒",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 71,
    "heat": "稳"
  },
  {
    "name": "笔类套装/礼盒 暑期手工创作",
    "category": "笔类套装/礼盒",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 77,
    "heat": "暖"
  },
  {
    "name": "笔类套装/礼盒 618囤货首选",
    "category": "笔类套装/礼盒",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 236,
    "heat": "暖"
  },
  {
    "name": "笔类套装/礼盒 职场必备",
    "category": "笔类套装/礼盒",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 138,
    "heat": "暖"
  },
  {
    "name": "笔类套装/礼盒 球迷手绘",
    "category": "笔类套装/礼盒",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 224,
    "heat": "稳"
  },
  {
    "name": "笔类套装/礼盒 毕业纪念",
    "category": "笔类套装/礼盒",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 193,
    "heat": "爆"
  },
  {
    "name": "文创用品 考场专用",
    "category": "文创用品",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 91,
    "heat": "热"
  },
  {
    "name": "文创用品 暑期手工创作",
    "category": "文创用品",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 178,
    "heat": "热"
  },
  {
    "name": "文创用品 年中大促热卖",
    "category": "文创用品",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 39,
    "heat": "暖"
  },
  {
    "name": "文创用品 会议利器",
    "category": "文创用品",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 25,
    "heat": "稳"
  },
  {
    "name": "文创用品 球迷手绘",
    "category": "文创用品",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 154,
    "heat": "热"
  },
  {
    "name": "文创用品 毕业礼物",
    "category": "文创用品",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 101,
    "heat": "热"
  },
  {
    "name": "姓名贴 考场专用",
    "category": "姓名贴",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 111,
    "heat": "暖"
  },
  {
    "name": "姓名贴 暑假必囤",
    "category": "姓名贴",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 49,
    "heat": "稳"
  },
  {
    "name": "姓名贴 年中大促热卖",
    "category": "姓名贴",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 73,
    "heat": "稳"
  },
  {
    "name": "姓名贴 职场必备",
    "category": "姓名贴",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 141,
    "heat": "爆"
  },
  {
    "name": "姓名贴 球迷手绘",
    "category": "姓名贴",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 83,
    "heat": "爆"
  },
  {
    "name": "姓名贴 离校必备",
    "category": "姓名贴",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 240,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 中高考冲刺",
    "category": "拼豆/咕卡套装",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 132,
    "heat": "稳"
  },
  {
    "name": "拼豆/咕卡套装 暑假必囤",
    "category": "拼豆/咕卡套装",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 150,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 618爆款",
    "category": "拼豆/咕卡套装",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 106,
    "heat": "爆"
  },
  {
    "name": "拼豆/咕卡套装 办公高效",
    "category": "拼豆/咕卡套装",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 28,
    "heat": "爆"
  },
  {
    "name": "拼豆/咕卡套装 球迷手绘",
    "category": "拼豆/咕卡套装",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 243,
    "heat": "暖"
  },
  {
    "name": "拼豆/咕卡套装 毕业纪念",
    "category": "拼豆/咕卡套装",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 148,
    "heat": "稳"
  },
  {
    "name": "彩色铅笔 中高考冲刺",
    "category": "彩色铅笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 152,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 假期绘画",
    "category": "彩色铅笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 21,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 618囤货首选",
    "category": "彩色铅笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 140,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 职场必备",
    "category": "彩色铅笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 144,
    "heat": "热"
  },
  {
    "name": "彩色铅笔 球迷手绘",
    "category": "彩色铅笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 172,
    "heat": "爆"
  },
  {
    "name": "彩色铅笔 毕业礼物",
    "category": "彩色铅笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 57,
    "heat": "爆"
  },
  {
    "name": "白板笔 中高考冲刺",
    "category": "白板笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 172,
    "heat": "暖"
  },
  {
    "name": "白板笔 假期绘画",
    "category": "白板笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 123,
    "heat": "稳"
  },
  {
    "name": "白板笔 年中大促热卖",
    "category": "白板笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 173,
    "heat": "热"
  },
  {
    "name": "白板笔 办公高效",
    "category": "白板笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 31,
    "heat": "暖"
  },
  {
    "name": "白板笔 球迷手绘",
    "category": "白板笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 102,
    "heat": "暖"
  },
  {
    "name": "白板笔 离校必备",
    "category": "白板笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 195,
    "heat": "热"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 考试必备",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 192,
    "heat": "稳"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 暑期手工创作",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 224,
    "heat": "热"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 年中大促热卖",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 207,
    "heat": "暖"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 职场必备",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 147,
    "heat": "暖"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 球迷手绘",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 32,
    "heat": "热"
  },
  {
    "name": "按扣/拉链文件资料袋/收纳袋 毕业纪念",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 104,
    "heat": "暖"
  },
  {
    "name": "修正带 考试必备",
    "category": "修正带",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 212,
    "heat": "爆"
  },
  {
    "name": "修正带 暑期手工创作",
    "category": "修正带",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 95,
    "heat": "爆"
  },
  {
    "name": "修正带 618爆款",
    "category": "修正带",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 240,
    "heat": "暖"
  },
  {
    "name": "修正带 办公高效",
    "category": "修正带",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 34,
    "heat": "稳"
  },
  {
    "name": "修正带 球迷手绘",
    "category": "修正带",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 191,
    "heat": "稳"
  },
  {
    "name": "修正带 毕业礼物",
    "category": "修正带",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 243,
    "heat": "稳"
  },
  {
    "name": "钢笔 考场专用",
    "category": "钢笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 232,
    "heat": "暖"
  },
  {
    "name": "钢笔 暑假必囤",
    "category": "钢笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 196,
    "heat": "稳"
  },
  {
    "name": "钢笔 618囤货首选",
    "category": "钢笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 44,
    "heat": "稳"
  },
  {
    "name": "钢笔 会议利器",
    "category": "钢笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 151,
    "heat": "稳"
  },
  {
    "name": "钢笔 球迷手绘",
    "category": "钢笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 121,
    "heat": "热"
  },
  {
    "name": "钢笔 离校必备",
    "category": "钢笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 151,
    "heat": "爆"
  },
  {
    "name": "画纸/画本 考场专用",
    "category": "画纸/画本",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 22,
    "heat": "稳"
  },
  {
    "name": "画纸/画本 暑假必囤",
    "category": "画纸/画本",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 67,
    "heat": "热"
  },
  {
    "name": "画纸/画本 年中大促热卖",
    "category": "画纸/画本",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 77,
    "heat": "爆"
  },
  {
    "name": "画纸/画本 办公高效",
    "category": "画纸/画本",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 37,
    "heat": "爆"
  },
  {
    "name": "画纸/画本 球迷手绘",
    "category": "画纸/画本",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 50,
    "heat": "稳"
  },
  {
    "name": "画纸/画本 毕业纪念",
    "category": "画纸/画本",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 60,
    "heat": "热"
  },
  {
    "name": "胶水 考场专用",
    "category": "胶水",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 42,
    "heat": "爆"
  },
  {
    "name": "胶水 假期绘画",
    "category": "胶水",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 168,
    "heat": "爆"
  },
  {
    "name": "胶水 年中大促热卖",
    "category": "胶水",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 110,
    "heat": "热"
  },
  {
    "name": "胶水 会议利器",
    "category": "胶水",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 154,
    "heat": "热"
  },
  {
    "name": "胶水 球迷手绘",
    "category": "胶水",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 210,
    "heat": "暖"
  },
  {
    "name": "胶水 毕业礼物",
    "category": "胶水",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 198,
    "heat": "暖"
  },
  {
    "name": "笔芯/替芯/笔壳 中高考冲刺",
    "category": "笔芯/替芯/笔壳",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 62,
    "heat": "热"
  },
  {
    "name": "笔芯/替芯/笔壳 假期绘画",
    "category": "笔芯/替芯/笔壳",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 39,
    "heat": "暖"
  },
  {
    "name": "笔芯/替芯/笔壳 618爆款",
    "category": "笔芯/替芯/笔壳",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 144,
    "heat": "热"
  },
  {
    "name": "笔芯/替芯/笔壳 办公高效",
    "category": "笔芯/替芯/笔壳",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 40,
    "heat": "热"
  },
  {
    "name": "笔芯/替芯/笔壳 球迷手绘",
    "category": "笔芯/替芯/笔壳",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 140,
    "heat": "爆"
  },
  {
    "name": "笔芯/替芯/笔壳 离校必备",
    "category": "笔芯/替芯/笔壳",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 107,
    "heat": "稳"
  },
  {
    "name": "记号笔 中高考冲刺",
    "category": "记号笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 82,
    "heat": "稳"
  },
  {
    "name": "记号笔 暑期手工创作",
    "category": "记号笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 140,
    "heat": "热"
  },
  {
    "name": "记号笔 618囤货首选",
    "category": "记号笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 177,
    "heat": "暖"
  },
  {
    "name": "记号笔 会议利器",
    "category": "记号笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 157,
    "heat": "暖"
  },
  {
    "name": "记号笔 球迷手绘",
    "category": "记号笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 69,
    "heat": "暖"
  },
  {
    "name": "记号笔 毕业纪念",
    "category": "记号笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 245,
    "heat": "爆"
  },
  {
    "name": "练字帖/描红本 考试必备",
    "category": "练字帖/描红本",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 102,
    "heat": "爆"
  },
  {
    "name": "练字帖/描红本 暑期手工创作",
    "category": "练字帖/描红本",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 241,
    "heat": "稳"
  },
  {
    "name": "练字帖/描红本 年中大促热卖",
    "category": "练字帖/描红本",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 211,
    "heat": "稳"
  },
  {
    "name": "练字帖/描红本 职场必备",
    "category": "练字帖/描红本",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 43,
    "heat": "暖"
  },
  {
    "name": "练字帖/描红本 球迷手绘",
    "category": "练字帖/描红本",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 229,
    "heat": "爆"
  },
  {
    "name": "练字帖/描红本 毕业礼物",
    "category": "练字帖/描红本",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 154,
    "heat": "热"
  },
  {
    "name": "圆珠笔 考试必备",
    "category": "圆珠笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 122,
    "heat": "热"
  },
  {
    "name": "圆珠笔 暑假必囤",
    "category": "圆珠笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 112,
    "heat": "暖"
  },
  {
    "name": "圆珠笔 618爆款",
    "category": "圆珠笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 244,
    "heat": "稳"
  },
  {
    "name": "圆珠笔 会议利器",
    "category": "圆珠笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 160,
    "heat": "稳"
  },
  {
    "name": "圆珠笔 球迷手绘",
    "category": "圆珠笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 158,
    "heat": "稳"
  },
  {
    "name": "圆珠笔 离校必备",
    "category": "圆珠笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 62,
    "heat": "暖"
  },
  {
    "name": "蜡笔 考试必备",
    "category": "蜡笔",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 143,
    "heat": "暖"
  },
  {
    "name": "蜡笔 暑假必囤",
    "category": "蜡笔",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 213,
    "heat": "爆"
  },
  {
    "name": "蜡笔 618爆款",
    "category": "蜡笔",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 48,
    "heat": "爆"
  },
  {
    "name": "蜡笔 职场必备",
    "category": "蜡笔",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 46,
    "heat": "爆"
  },
  {
    "name": "蜡笔 球迷手绘",
    "category": "蜡笔",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 88,
    "heat": "热"
  },
  {
    "name": "蜡笔 毕业纪念",
    "category": "蜡笔",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 201,
    "heat": "稳"
  },
  {
    "name": "书签 考场专用",
    "category": "书签",
    "trend": "exam",
    "trendLabel": "中高考文具",
    "growth": 163,
    "heat": "爆"
  },
  {
    "name": "书签 假期绘画",
    "category": "书签",
    "trend": "summer",
    "trendLabel": "暑假文创/DIY",
    "growth": 84,
    "heat": "稳"
  },
  {
    "name": "书签 618囤货首选",
    "category": "书签",
    "trend": "618",
    "trendLabel": "618大促热卖",
    "growth": 81,
    "heat": "热"
  },
  {
    "name": "书签 办公高效",
    "category": "书签",
    "trend": "office",
    "trendLabel": "办公文具热点",
    "growth": 163,
    "heat": "爆"
  },
  {
    "name": "书签 球迷手绘",
    "category": "书签",
    "trend": "worldcup",
    "trendLabel": "世界杯相关",
    "growth": 248,
    "heat": "稳"
  },
  {
    "name": "书签 毕业礼物",
    "category": "书签",
    "trend": "graduation",
    "trendLabel": "毕业季",
    "growth": 109,
    "heat": "爆"
  }
],
  hotwords: [
  {
    "word": "中性笔推荐",
    "category": "中性笔",
    "platforms": {
      "jd": 6543013,
      "taobao": 5762519,
      "pdd": 4405331,
      "douyin": 9746621,
      "xhs": 2660304
    }
  },
  {
    "word": "中性笔测评",
    "category": "中性笔",
    "platforms": {
      "jd": 4319251,
      "taobao": 2291121,
      "pdd": 1839414,
      "douyin": 16290093,
      "xhs": 10769542
    }
  },
  {
    "word": "中性笔平替",
    "category": "中性笔",
    "platforms": {
      "jd": 4180099,
      "taobao": 3306416,
      "pdd": 1750153,
      "douyin": 18274229,
      "xhs": 13345506
    }
  },
  {
    "word": "中性笔学生党",
    "category": "中性笔",
    "platforms": {
      "jd": 6627196,
      "taobao": 8668861,
      "pdd": 5117123,
      "douyin": 11836094,
      "xhs": 3144200
    }
  },
  {
    "word": "中性笔性价比",
    "category": "中性笔",
    "platforms": {
      "jd": 1447177,
      "taobao": 6937944,
      "pdd": 4084197,
      "douyin": 24732055,
      "xhs": 6963477
    }
  },
  {
    "word": "中性笔好物分享",
    "category": "中性笔",
    "platforms": {
      "jd": 6102779,
      "taobao": 5732908,
      "pdd": 750468,
      "douyin": 4699553,
      "xhs": 12560149
    }
  },
  {
    "word": "笔记本/记事本推荐",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 4270087,
      "taobao": 9314903,
      "pdd": 1528393,
      "douyin": 5377082,
      "xhs": 12649527
    }
  },
  {
    "word": "笔记本/记事本测评",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 4837315,
      "taobao": 5957944,
      "pdd": 3620865,
      "douyin": 19216876,
      "xhs": 11966529
    }
  },
  {
    "word": "笔记本/记事本平替",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 6012740,
      "taobao": 5626876,
      "pdd": 1375544,
      "douyin": 17904974,
      "xhs": 14556907
    }
  },
  {
    "word": "笔记本/记事本学生党",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 6589576,
      "taobao": 6570526,
      "pdd": 4879761,
      "douyin": 6578262,
      "xhs": 6153044
    }
  },
  {
    "word": "笔记本/记事本性价比",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 5091175,
      "taobao": 3301170,
      "pdd": 2408948,
      "douyin": 23445692,
      "xhs": 14442528
    }
  },
  {
    "word": "笔记本/记事本好物分享",
    "category": "笔记本/记事本",
    "platforms": {
      "jd": 6427075,
      "taobao": 7130409,
      "pdd": 3275504,
      "douyin": 9974405,
      "xhs": 4964808
    }
  },
  {
    "word": "学习套装/礼盒/盲盒推荐",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 1997161,
      "taobao": 1867288,
      "pdd": 4151455,
      "douyin": 23007544,
      "xhs": 8638750
    }
  },
  {
    "word": "学习套装/礼盒/盲盒测评",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 5355379,
      "taobao": 9624767,
      "pdd": 5402317,
      "douyin": 22143660,
      "xhs": 13163515
    }
  },
  {
    "word": "学习套装/礼盒/盲盒平替",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 7845381,
      "taobao": 7947335,
      "pdd": 1000935,
      "douyin": 17535719,
      "xhs": 1768307
    }
  },
  {
    "word": "学习套装/礼盒/盲盒学生党",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 6551957,
      "taobao": 4472191,
      "pdd": 4642400,
      "douyin": 23320430,
      "xhs": 9161889
    }
  },
  {
    "word": "学习套装/礼盒/盲盒性价比",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 1235172,
      "taobao": 10664396,
      "pdd": 733698,
      "douyin": 22159330,
      "xhs": 7921578
    }
  },
  {
    "word": "学习套装/礼盒/盲盒好物分享",
    "category": "学习套装/礼盒/盲盒",
    "platforms": {
      "jd": 6751371,
      "taobao": 8527910,
      "pdd": 5800540,
      "douyin": 15249256,
      "xhs": 11369467
    }
  },
  {
    "word": "马克笔推荐",
    "category": "马克笔",
    "platforms": {
      "jd": 7224234,
      "taobao": 5419673,
      "pdd": 1274517,
      "douyin": 18638005,
      "xhs": 4627972
    }
  },
  {
    "word": "马克笔测评",
    "category": "马克笔",
    "platforms": {
      "jd": 5873442,
      "taobao": 2291590,
      "pdd": 1683768,
      "douyin": 3070443,
      "xhs": 14360501
    }
  },
  {
    "word": "马克笔平替",
    "category": "马克笔",
    "platforms": {
      "jd": 2178022,
      "taobao": 10267794,
      "pdd": 626326,
      "douyin": 17166464,
      "xhs": 2979707
    }
  },
  {
    "word": "马克笔学生党",
    "category": "马克笔",
    "platforms": {
      "jd": 6514337,
      "taobao": 2373856,
      "pdd": 4405039,
      "douyin": 18062598,
      "xhs": 12170733
    }
  },
  {
    "word": "马克笔性价比",
    "category": "马克笔",
    "platforms": {
      "jd": 4879170,
      "taobao": 7027622,
      "pdd": 4558449,
      "douyin": 20872968,
      "xhs": 1400629
    }
  },
  {
    "word": "马克笔好物分享",
    "category": "马克笔",
    "platforms": {
      "jd": 7075667,
      "taobao": 9925411,
      "pdd": 2825576,
      "douyin": 20524108,
      "xhs": 3774126
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋推荐",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 4951308,
      "taobao": 8972058,
      "pdd": 3897579,
      "douyin": 14268467,
      "xhs": 14617195
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋测评",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 6391506,
      "taobao": 5958413,
      "pdd": 3465220,
      "douyin": 5997226,
      "xhs": 1557487
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋平替",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 4010663,
      "taobao": 1588253,
      "pdd": 5751717,
      "douyin": 16797209,
      "xhs": 4191107
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋学生党",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 6476717,
      "taobao": 11275520,
      "pdd": 4167677,
      "douyin": 12804765,
      "xhs": 1179578
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋性价比",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 1023167,
      "taobao": 3390848,
      "pdd": 2883199,
      "douyin": 19586605,
      "xhs": 8879680
    }
  },
  {
    "word": "文具盒/笔袋/痛包笔袋好物分享",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": {
      "jd": 7399963,
      "taobao": 11322911,
      "pdd": 5350613,
      "douyin": 3798959,
      "xhs": 10178785
    }
  },
  {
    "word": "铅笔推荐",
    "category": "铅笔",
    "platforms": {
      "jd": 2678382,
      "taobao": 1524442,
      "pdd": 1020640,
      "douyin": 9898928,
      "xhs": 10606418
    }
  },
  {
    "word": "铅笔测评",
    "category": "铅笔",
    "platforms": {
      "jd": 6909570,
      "taobao": 9625236,
      "pdd": 5246672,
      "douyin": 8924009,
      "xhs": 2754473
    }
  },
  {
    "word": "铅笔平替",
    "category": "铅笔",
    "platforms": {
      "jd": 5843304,
      "taobao": 3908712,
      "pdd": 5377108,
      "douyin": 16427954,
      "xhs": 5402507
    }
  },
  {
    "word": "铅笔学生党",
    "category": "铅笔",
    "platforms": {
      "jd": 6439098,
      "taobao": 9177185,
      "pdd": 3930316,
      "douyin": 7546933,
      "xhs": 4188422
    }
  },
  {
    "word": "铅笔性价比",
    "category": "铅笔",
    "platforms": {
      "jd": 4667165,
      "taobao": 10754074,
      "pdd": 1207949,
      "douyin": 18300243,
      "xhs": 2358730
    }
  },
  {
    "word": "铅笔好物分享",
    "category": "铅笔",
    "platforms": {
      "jd": 7724258,
      "taobao": 1720412,
      "pdd": 2375649,
      "douyin": 9073810,
      "xhs": 2583445
    }
  },
  {
    "word": "橡皮擦推荐",
    "category": "橡皮擦",
    "platforms": {
      "jd": 7905456,
      "taobao": 5076827,
      "pdd": 3643702,
      "douyin": 5529389,
      "xhs": 6595641
    }
  },
  {
    "word": "橡皮擦测评",
    "category": "橡皮擦",
    "platforms": {
      "jd": 7427633,
      "taobao": 2292059,
      "pdd": 1528123,
      "douyin": 11850793,
      "xhs": 3951459
    }
  },
  {
    "word": "橡皮擦平替",
    "category": "橡皮擦",
    "platforms": {
      "jd": 7675945,
      "taobao": 6229171,
      "pdd": 5002499,
      "douyin": 16058699,
      "xhs": 6613908
    }
  },
  {
    "word": "橡皮擦学生党",
    "category": "橡皮擦",
    "platforms": {
      "jd": 6401478,
      "taobao": 7078850,
      "pdd": 3692955,
      "douyin": 24289101,
      "xhs": 7197267
    }
  },
  {
    "word": "橡皮擦性价比",
    "category": "橡皮擦",
    "platforms": {
      "jd": 811162,
      "taobao": 7117300,
      "pdd": 5032700,
      "douyin": 17013881,
      "xhs": 9837781
    }
  },
  {
    "word": "橡皮擦好物分享",
    "category": "橡皮擦",
    "platforms": {
      "jd": 548554,
      "taobao": 3117913,
      "pdd": 4900685,
      "douyin": 14348662,
      "xhs": 8988104
    }
  },
  {
    "word": "荧光笔推荐",
    "category": "荧光笔",
    "platforms": {
      "jd": 5632529,
      "taobao": 8629212,
      "pdd": 766764,
      "douyin": 23159851,
      "xhs": 2584863
    }
  },
  {
    "word": "荧光笔测评",
    "category": "荧光笔",
    "platforms": {
      "jd": 7945697,
      "taobao": 5958882,
      "pdd": 3309575,
      "douyin": 14777576,
      "xhs": 5148446
    }
  },
  {
    "word": "荧光笔平替",
    "category": "荧光笔",
    "platforms": {
      "jd": 2008586,
      "taobao": 8549630,
      "pdd": 4627890,
      "douyin": 15689444,
      "xhs": 7825308
    }
  },
  {
    "word": "荧光笔学生党",
    "category": "荧光笔",
    "platforms": {
      "jd": 6363858,
      "taobao": 4980515,
      "pdd": 3455593,
      "douyin": 19031269,
      "xhs": 10206111
    }
  },
  {
    "word": "荧光笔性价比",
    "category": "荧光笔",
    "platforms": {
      "jd": 4455160,
      "taobao": 3480526,
      "pdd": 3357450,
      "douyin": 15727518,
      "xhs": 3316831
    }
  },
  {
    "word": "荧光笔好物分享",
    "category": "荧光笔",
    "platforms": {
      "jd": 872850,
      "taobao": 4515414,
      "pdd": 1925721,
      "douyin": 19623513,
      "xhs": 1392763
    }
  },
  {
    "word": "手帐推荐",
    "category": "手帐",
    "platforms": {
      "jd": 3359603,
      "taobao": 1181597,
      "pdd": 3389826,
      "douyin": 18790312,
      "xhs": 12574086
    }
  },
  {
    "word": "手帐测评",
    "category": "手帐",
    "platforms": {
      "jd": 963761,
      "taobao": 9625705,
      "pdd": 5091026,
      "douyin": 17704359,
      "xhs": 6345432
    }
  },
  {
    "word": "手帐平替",
    "category": "手帐",
    "platforms": {
      "jd": 3841226,
      "taobao": 10870090,
      "pdd": 4253281,
      "douyin": 15320190,
      "xhs": 9036708
    }
  },
  {
    "word": "手帐学生党",
    "category": "手帐",
    "platforms": {
      "jd": 6326238,
      "taobao": 2882180,
      "pdd": 3218232,
      "douyin": 13773436,
      "xhs": 13214956
    }
  },
  {
    "word": "手帐性价比",
    "category": "手帐",
    "platforms": {
      "jd": 599157,
      "taobao": 10843752,
      "pdd": 1682201,
      "douyin": 14441156,
      "xhs": 10795882
    }
  },
  {
    "word": "手帐好物分享",
    "category": "手帐",
    "platforms": {
      "jd": 1197146,
      "taobao": 5912915,
      "pdd": 4450757,
      "douyin": 24898365,
      "xhs": 7797422
    }
  },
  {
    "word": "火漆印章推荐",
    "category": "火漆印章",
    "platforms": {
      "jd": 1086677,
      "taobao": 4733981,
      "pdd": 512887,
      "douyin": 14420773,
      "xhs": 8563309
    }
  },
  {
    "word": "火漆印章测评",
    "category": "火漆印章",
    "platforms": {
      "jd": 1481825,
      "taobao": 2292528,
      "pdd": 1372478,
      "douyin": 20631142,
      "xhs": 7542418
    }
  },
  {
    "word": "火漆印章平替",
    "category": "火漆印章",
    "platforms": {
      "jd": 5673867,
      "taobao": 2190549,
      "pdd": 3878672,
      "douyin": 14950935,
      "xhs": 10248108
    }
  },
  {
    "word": "火漆印章学生党",
    "category": "火漆印章",
    "platforms": {
      "jd": 6288619,
      "taobao": 11783844,
      "pdd": 2980871,
      "douyin": 8515604,
      "xhs": 2223800
    }
  },
  {
    "word": "火漆印章性价比",
    "category": "火漆印章",
    "platforms": {
      "jd": 4243155,
      "taobao": 7206978,
      "pdd": 5506951,
      "douyin": 13154794,
      "xhs": 4274932
    }
  },
  {
    "word": "火漆印章好物分享",
    "category": "火漆印章",
    "platforms": {
      "jd": 1521442,
      "taobao": 7310415,
      "pdd": 1475793,
      "douyin": 8173216,
      "xhs": 14202081
    }
  },
  {
    "word": "水彩笔推荐",
    "category": "水彩笔",
    "platforms": {
      "jd": 6313751,
      "taobao": 8286366,
      "pdd": 3135949,
      "douyin": 10051235,
      "xhs": 4552532
    }
  },
  {
    "word": "水彩笔测评",
    "category": "水彩笔",
    "platforms": {
      "jd": 1999888,
      "taobao": 5959351,
      "pdd": 3153930,
      "douyin": 23557926,
      "xhs": 8739404
    }
  },
  {
    "word": "水彩笔平替",
    "category": "水彩笔",
    "platforms": {
      "jd": 7506508,
      "taobao": 4511008,
      "pdd": 3504063,
      "douyin": 14581680,
      "xhs": 11459509
    }
  },
  {
    "word": "水彩笔学生党",
    "category": "水彩笔",
    "platforms": {
      "jd": 6250999,
      "taobao": 9685509,
      "pdd": 2743510,
      "douyin": 3257772,
      "xhs": 5232644
    }
  },
  {
    "word": "水彩笔性价比",
    "category": "水彩笔",
    "platforms": {
      "jd": 7887152,
      "taobao": 3570204,
      "pdd": 3831701,
      "douyin": 11868431,
      "xhs": 11753983
    }
  },
  {
    "word": "水彩笔好物分享",
    "category": "水彩笔",
    "platforms": {
      "jd": 1845737,
      "taobao": 8707916,
      "pdd": 4000830,
      "douyin": 13448068,
      "xhs": 6606741
    }
  },
  {
    "word": "标签贴纸推荐",
    "category": "标签贴纸",
    "platforms": {
      "jd": 4040824,
      "taobao": 11838751,
      "pdd": 5759011,
      "douyin": 5681696,
      "xhs": 14541754
    }
  },
  {
    "word": "标签贴纸测评",
    "category": "标签贴纸",
    "platforms": {
      "jd": 2517952,
      "taobao": 9626174,
      "pdd": 4935381,
      "douyin": 4484709,
      "xhs": 9936390
    }
  },
  {
    "word": "标签贴纸平替",
    "category": "标签贴纸",
    "platforms": {
      "jd": 1839149,
      "taobao": 6831467,
      "pdd": 3129454,
      "douyin": 14212425,
      "xhs": 12670909
    }
  },
  {
    "word": "标签贴纸学生党",
    "category": "标签贴纸",
    "platforms": {
      "jd": 6213379,
      "taobao": 7587174,
      "pdd": 2506148,
      "douyin": 19999939,
      "xhs": 8241489
    }
  },
  {
    "word": "标签贴纸性价比",
    "category": "标签贴纸",
    "platforms": {
      "jd": 4031150,
      "taobao": 10933429,
      "pdd": 2156452,
      "douyin": 10582069,
      "xhs": 5233033
    }
  },
  {
    "word": "标签贴纸好物分享",
    "category": "标签贴纸",
    "platforms": {
      "jd": 2170033,
      "taobao": 10105417,
      "pdd": 1025866,
      "douyin": 18722919,
      "xhs": 13011400
    }
  },
  {
    "word": "手工DIY套装推荐",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 1767898,
      "taobao": 4391136,
      "pdd": 2882073,
      "douyin": 23312157,
      "xhs": 10530977
    }
  },
  {
    "word": "手工DIY套装测评",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 3036016,
      "taobao": 2292997,
      "pdd": 1216833,
      "douyin": 7411492,
      "xhs": 11133377
    }
  },
  {
    "word": "手工DIY套装平替",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 3671790,
      "taobao": 9151926,
      "pdd": 2754845,
      "douyin": 13843170,
      "xhs": 13882309
    }
  },
  {
    "word": "手工DIY套装学生党",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 6175760,
      "taobao": 5488839,
      "pdd": 2268787,
      "douyin": 14742107,
      "xhs": 11250333
    }
  },
  {
    "word": "手工DIY套装性价比",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 7675148,
      "taobao": 7296655,
      "pdd": 5981202,
      "douyin": 9295707,
      "xhs": 12712084
    }
  },
  {
    "word": "手工DIY套装好物分享",
    "category": "手工DIY套装",
    "platforms": {
      "jd": 2494329,
      "taobao": 11502918,
      "pdd": 3550902,
      "douyin": 23997770,
      "xhs": 5416059
    }
  },
  {
    "word": "卷笔刀/卷笔器推荐",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 6994972,
      "taobao": 7943520,
      "pdd": 5505135,
      "douyin": 18942619,
      "xhs": 6520200
    }
  },
  {
    "word": "卷笔刀/卷笔器测评",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 3554079,
      "taobao": 5959820,
      "pdd": 2998285,
      "douyin": 10338275,
      "xhs": 12330363
    }
  },
  {
    "word": "卷笔刀/卷笔器平替",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 5504431,
      "taobao": 11472385,
      "pdd": 2380236,
      "douyin": 13473915,
      "xhs": 1093709
    }
  },
  {
    "word": "卷笔刀/卷笔器学生党",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 6138140,
      "taobao": 3390503,
      "pdd": 2031426,
      "douyin": 9484275,
      "xhs": 14259178
    }
  },
  {
    "word": "卷笔刀/卷笔器性价比",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 3819145,
      "taobao": 3659881,
      "pdd": 4305953,
      "douyin": 8009344,
      "xhs": 6191134
    }
  },
  {
    "word": "卷笔刀/卷笔器好物分享",
    "category": "卷笔刀/卷笔器",
    "platforms": {
      "jd": 2818625,
      "taobao": 1900419,
      "pdd": 575938,
      "douyin": 7272622,
      "xhs": 11820718
    }
  },
  {
    "word": "便签本/便条纸/N次贴推荐",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 4722046,
      "taobao": 11495905,
      "pdd": 2628196,
      "douyin": 14573080,
      "xhs": 2509422
    }
  },
  {
    "word": "便签本/便条纸/N次贴测评",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 4072143,
      "taobao": 9626643,
      "pdd": 4779736,
      "douyin": 13265058,
      "xhs": 13527349
    }
  },
  {
    "word": "便签本/便条纸/N次贴平替",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 7337072,
      "taobao": 2792844,
      "pdd": 2005627,
      "douyin": 13104660,
      "xhs": 2305109
    }
  },
  {
    "word": "便签本/便条纸/N次贴学生党",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 6100520,
      "taobao": 1292168,
      "pdd": 1794064,
      "douyin": 4226443,
      "xhs": 3268022
    }
  },
  {
    "word": "便签本/便条纸/N次贴性价比",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 7463143,
      "taobao": 11023107,
      "pdd": 2630703,
      "douyin": 6722982,
      "xhs": 13670185
    }
  },
  {
    "word": "便签本/便条纸/N次贴好物分享",
    "category": "便签本/便条纸/N次贴",
    "platforms": {
      "jd": 3142921,
      "taobao": 3297920,
      "pdd": 3100974,
      "douyin": 12547473,
      "xhs": 4225377
    }
  },
  {
    "word": "笔筒推荐",
    "category": "笔筒",
    "platforms": {
      "jd": 2449119,
      "taobao": 4048290,
      "pdd": 5251258,
      "douyin": 10203541,
      "xhs": 12498645
    }
  },
  {
    "word": "笔筒测评",
    "category": "笔筒",
    "platforms": {
      "jd": 4590207,
      "taobao": 2293466,
      "pdd": 1061188,
      "douyin": 16191842,
      "xhs": 14724335
    }
  },
  {
    "word": "笔筒平替",
    "category": "笔筒",
    "platforms": {
      "jd": 1669713,
      "taobao": 5113304,
      "pdd": 1631018,
      "douyin": 12735405,
      "xhs": 3516510
    }
  },
  {
    "word": "笔筒学生党",
    "category": "笔筒",
    "platforms": {
      "jd": 6062901,
      "taobao": 10193833,
      "pdd": 1556703,
      "douyin": 20968610,
      "xhs": 6276867
    }
  },
  {
    "word": "笔筒性价比",
    "category": "笔筒",
    "platforms": {
      "jd": 3607140,
      "taobao": 7386333,
      "pdd": 955454,
      "douyin": 5436620,
      "xhs": 7149236
    }
  },
  {
    "word": "笔筒好物分享",
    "category": "笔筒",
    "platforms": {
      "jd": 3467216,
      "taobao": 4695420,
      "pdd": 5626010,
      "douyin": 17822325,
      "xhs": 10630037
    }
  },
  {
    "word": "文具收纳盒推荐",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 7676193,
      "taobao": 7600675,
      "pdd": 2374320,
      "douyin": 5834003,
      "xhs": 8487868
    }
  },
  {
    "word": "文具收纳盒测评",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 5108271,
      "taobao": 5960289,
      "pdd": 2842639,
      "douyin": 19118625,
      "xhs": 1921321
    }
  },
  {
    "word": "文具收纳盒平替",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 3502354,
      "taobao": 7433763,
      "pdd": 1256409,
      "douyin": 12366150,
      "xhs": 4727910
    }
  },
  {
    "word": "文具收纳盒学生党",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 6025281,
      "taobao": 8095498,
      "pdd": 1319342,
      "douyin": 15710778,
      "xhs": 9285711
    }
  },
  {
    "word": "文具收纳盒性价比",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 7251138,
      "taobao": 3749559,
      "pdd": 4780204,
      "douyin": 4150257,
      "xhs": 14628286
    }
  },
  {
    "word": "文具收纳盒好物分享",
    "category": "文具收纳盒",
    "platforms": {
      "jd": 3791512,
      "taobao": 6092921,
      "pdd": 2651047,
      "douyin": 23097176,
      "xhs": 3034696
    }
  },
  {
    "word": "桌面收纳架推荐",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 5403267,
      "taobao": 11153060,
      "pdd": 4997382,
      "douyin": 23464464,
      "xhs": 4477091
    }
  },
  {
    "word": "桌面收纳架测评",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 5626334,
      "taobao": 9627112,
      "pdd": 4624091,
      "douyin": 22045408,
      "xhs": 3118307
    }
  },
  {
    "word": "桌面收纳架平替",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 5334994,
      "taobao": 9754222,
      "pdd": 881800,
      "douyin": 11996895,
      "xhs": 5939310
    }
  },
  {
    "word": "桌面收纳架学生党",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 5987661,
      "taobao": 5997162,
      "pdd": 1081980,
      "douyin": 10452946,
      "xhs": 12294556
    }
  },
  {
    "word": "桌面收纳架性价比",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 3395135,
      "taobao": 11112785,
      "pdd": 3104954,
      "douyin": 24863895,
      "xhs": 8107337
    }
  },
  {
    "word": "桌面收纳架好物分享",
    "category": "桌面收纳架",
    "platforms": {
      "jd": 4115808,
      "taobao": 7490422,
      "pdd": 5176083,
      "douyin": 6372027,
      "xhs": 9439355
    }
  },
  {
    "word": "书皮/书套推荐",
    "category": "书皮/书套",
    "platforms": {
      "jd": 3130341,
      "taobao": 3705444,
      "pdd": 2120444,
      "douyin": 19094926,
      "xhs": 14466313
    }
  },
  {
    "word": "书皮/书套测评",
    "category": "书皮/书套",
    "platforms": {
      "jd": 6144398,
      "taobao": 2293935,
      "pdd": 905543,
      "douyin": 24972191,
      "xhs": 4315294
    }
  },
  {
    "word": "书皮/书套平替",
    "category": "书皮/书套",
    "platforms": {
      "jd": 7167635,
      "taobao": 1074681,
      "pdd": 507191,
      "douyin": 11627640,
      "xhs": 7150710
    }
  },
  {
    "word": "书皮/书套学生党",
    "category": "书皮/书套",
    "platforms": {
      "jd": 5950041,
      "taobao": 3898827,
      "pdd": 844619,
      "douyin": 5195113,
      "xhs": 1303400
    }
  },
  {
    "word": "书皮/书套性价比",
    "category": "书皮/书套",
    "platforms": {
      "jd": 7039133,
      "taobao": 7476011,
      "pdd": 1429705,
      "douyin": 23577533,
      "xhs": 1586387
    }
  },
  {
    "word": "书皮/书套好物分享",
    "category": "书皮/书套",
    "platforms": {
      "jd": 4440104,
      "taobao": 8887923,
      "pdd": 2201119,
      "douyin": 11646879,
      "xhs": 1844014
    }
  },
  {
    "word": "美术颜料推荐",
    "category": "美术颜料",
    "platforms": {
      "jd": 857414,
      "taobao": 7257829,
      "pdd": 4743505,
      "douyin": 14725387,
      "xhs": 10455536
    }
  },
  {
    "word": "美术颜料测评",
    "category": "美术颜料",
    "platforms": {
      "jd": 6662462,
      "taobao": 5960758,
      "pdd": 2686994,
      "douyin": 5898975,
      "xhs": 5512280
    }
  },
  {
    "word": "美术颜料平替",
    "category": "美术颜料",
    "platforms": {
      "jd": 1500276,
      "taobao": 3395140,
      "pdd": 5632582,
      "douyin": 11258385,
      "xhs": 8362110
    }
  },
  {
    "word": "美术颜料学生党",
    "category": "美术颜料",
    "platforms": {
      "jd": 5912422,
      "taobao": 1800492,
      "pdd": 607258,
      "douyin": 21937281,
      "xhs": 4312244
    }
  },
  {
    "word": "美术颜料性价比",
    "category": "美术颜料",
    "platforms": {
      "jd": 3183130,
      "taobao": 3839237,
      "pdd": 5254455,
      "douyin": 22291170,
      "xhs": 9065438
    }
  },
  {
    "word": "美术颜料好物分享",
    "category": "美术颜料",
    "platforms": {
      "jd": 4764399,
      "taobao": 10285424,
      "pdd": 4726155,
      "douyin": 16921730,
      "xhs": 8248673
    }
  },
  {
    "word": "办公文具推荐",
    "category": "办公文具",
    "platforms": {
      "jd": 6084488,
      "taobao": 10810214,
      "pdd": 1866567,
      "douyin": 10355848,
      "xhs": 6444759
    }
  },
  {
    "word": "办公文具测评",
    "category": "办公文具",
    "platforms": {
      "jd": 7180525,
      "taobao": 9627581,
      "pdd": 4468446,
      "douyin": 8825758,
      "xhs": 6709266
    }
  },
  {
    "word": "办公文具平替",
    "category": "办公文具",
    "platforms": {
      "jd": 3332917,
      "taobao": 5715599,
      "pdd": 5257973,
      "douyin": 10889130,
      "xhs": 9573511
    }
  },
  {
    "word": "办公文具学生党",
    "category": "办公文具",
    "platforms": {
      "jd": 5874802,
      "taobao": 10702157,
      "pdd": 5869897,
      "douyin": 16679449,
      "xhs": 7321089
    }
  },
  {
    "word": "办公文具性价比",
    "category": "办公文具",
    "platforms": {
      "jd": 6827128,
      "taobao": 11202463,
      "pdd": 3579206,
      "douyin": 21004808,
      "xhs": 2544488
    }
  },
  {
    "word": "办公文具好物分享",
    "category": "办公文具",
    "platforms": {
      "jd": 5088695,
      "taobao": 11682925,
      "pdd": 1751191,
      "douyin": 22196582,
      "xhs": 14653332
    }
  },
  {
    "word": "笔类套装/礼盒推荐",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 3811562,
      "taobao": 3362599,
      "pdd": 4489629,
      "douyin": 5986310,
      "xhs": 2433982
    }
  },
  {
    "word": "笔类套装/礼盒测评",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 7698589,
      "taobao": 2294404,
      "pdd": 749897,
      "douyin": 11752541,
      "xhs": 7906252
    }
  },
  {
    "word": "笔类套装/礼盒平替",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 5165558,
      "taobao": 8036058,
      "pdd": 4883363,
      "douyin": 10519875,
      "xhs": 10784911
    }
  },
  {
    "word": "笔类套装/礼盒学生党",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 5837182,
      "taobao": 8603821,
      "pdd": 5632535,
      "douyin": 11421617,
      "xhs": 10329933
    }
  },
  {
    "word": "笔类套装/礼盒性价比",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 2971126,
      "taobao": 7565689,
      "pdd": 1903956,
      "douyin": 19718446,
      "xhs": 10023539
    }
  },
  {
    "word": "笔类套装/礼盒好物分享",
    "category": "笔类套装/礼盒",
    "platforms": {
      "jd": 5412991,
      "taobao": 2080425,
      "pdd": 4276227,
      "douyin": 5471433,
      "xhs": 7057992
    }
  },
  {
    "word": "文创用品推荐",
    "category": "文创用品",
    "platforms": {
      "jd": 1538636,
      "taobao": 6914983,
      "pdd": 1612691,
      "douyin": 23616771,
      "xhs": 12423204
    }
  },
  {
    "word": "文创用品测评",
    "category": "文创用品",
    "platforms": {
      "jd": 716653,
      "taobao": 5961227,
      "pdd": 2531349,
      "douyin": 14679324,
      "xhs": 9103238
    }
  },
  {
    "word": "文创用品平替",
    "category": "文创用品",
    "platforms": {
      "jd": 6998199,
      "taobao": 10356518,
      "pdd": 4508754,
      "douyin": 10150620,
      "xhs": 11996311
    }
  },
  {
    "word": "文创用品学生党",
    "category": "文创用品",
    "platforms": {
      "jd": 5799563,
      "taobao": 6505486,
      "pdd": 5395174,
      "douyin": 6163784,
      "xhs": 13338778
    }
  },
  {
    "word": "文创用品性价比",
    "category": "文创用品",
    "platforms": {
      "jd": 6615123,
      "taobao": 3928915,
      "pdd": 5728706,
      "douyin": 18432083,
      "xhs": 3502589
    }
  },
  {
    "word": "文创用品好物分享",
    "category": "文创用品",
    "platforms": {
      "jd": 5737287,
      "taobao": 3477926,
      "pdd": 1301264,
      "douyin": 10746285,
      "xhs": 13462651
    }
  },
  {
    "word": "姓名贴推荐",
    "category": "姓名贴",
    "platforms": {
      "jd": 6765709,
      "taobao": 10467368,
      "pdd": 4235752,
      "douyin": 19247232,
      "xhs": 8412427
    }
  },
  {
    "word": "姓名贴测评",
    "category": "姓名贴",
    "platforms": {
      "jd": 1234717,
      "taobao": 9628050,
      "pdd": 4312801,
      "douyin": 17606108,
      "xhs": 10300225
    }
  },
  {
    "word": "姓名贴平替",
    "category": "姓名贴",
    "platforms": {
      "jd": 1330840,
      "taobao": 1676977,
      "pdd": 4134145,
      "douyin": 9781365,
      "xhs": 13207711
    }
  },
  {
    "word": "姓名贴学生党",
    "category": "姓名贴",
    "platforms": {
      "jd": 5761943,
      "taobao": 4407151,
      "pdd": 5157813,
      "douyin": 22905952,
      "xhs": 2347622
    }
  },
  {
    "word": "姓名贴性价比",
    "category": "姓名贴",
    "platforms": {
      "jd": 2759121,
      "taobao": 11292141,
      "pdd": 4053457,
      "douyin": 17145721,
      "xhs": 10981640
    }
  },
  {
    "word": "姓名贴好物分享",
    "category": "姓名贴",
    "platforms": {
      "jd": 6061583,
      "taobao": 4875427,
      "pdd": 3826300,
      "douyin": 16021136,
      "xhs": 5867310
    }
  },
  {
    "word": "拼豆/咕卡套装推荐",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 4492783,
      "taobao": 3019753,
      "pdd": 1358814,
      "douyin": 14877694,
      "xhs": 4401650
    }
  },
  {
    "word": "拼豆/咕卡套装测评",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 1752780,
      "taobao": 2294873,
      "pdd": 594252,
      "douyin": 20532891,
      "xhs": 11497211
    }
  },
  {
    "word": "拼豆/咕卡套装平替",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 3163481,
      "taobao": 3997436,
      "pdd": 3759536,
      "douyin": 9412110,
      "xhs": 14419111
    }
  },
  {
    "word": "拼豆/咕卡套装学生党",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 5724323,
      "taobao": 2308816,
      "pdd": 4920451,
      "douyin": 17648120,
      "xhs": 5356467
    }
  },
  {
    "word": "拼豆/咕卡套装性价比",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 6403118,
      "taobao": 7655367,
      "pdd": 2378207,
      "douyin": 15859359,
      "xhs": 4460690
    }
  },
  {
    "word": "拼豆/咕卡套装好物分享",
    "category": "拼豆/咕卡套装",
    "platforms": {
      "jd": 6385878,
      "taobao": 6272928,
      "pdd": 851336,
      "douyin": 21295987,
      "xhs": 12271969
    }
  },
  {
    "word": "彩色铅笔推荐",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 2219857,
      "taobao": 6572138,
      "pdd": 3981876,
      "douyin": 10508155,
      "xhs": 14390872
    }
  },
  {
    "word": "彩色铅笔测评",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 2270844,
      "taobao": 5961696,
      "pdd": 2375704,
      "douyin": 23459674,
      "xhs": 12694197
    }
  },
  {
    "word": "彩色铅笔平替",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 4996122,
      "taobao": 6317895,
      "pdd": 3384927,
      "douyin": 9042855,
      "xhs": 1630512
    }
  },
  {
    "word": "彩色铅笔学生党",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 5686704,
      "taobao": 11210480,
      "pdd": 4683090,
      "douyin": 12390288,
      "xhs": 8365311
    }
  },
  {
    "word": "彩色铅笔性价比",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 2547116,
      "taobao": 4018593,
      "pdd": 702958,
      "douyin": 14572997,
      "xhs": 11939741
    }
  },
  {
    "word": "彩色铅笔好物分享",
    "category": "彩色铅笔",
    "platforms": {
      "jd": 6710174,
      "taobao": 7670429,
      "pdd": 3376372,
      "douyin": 4570839,
      "xhs": 4676628
    }
  },
  {
    "word": "白板笔推荐",
    "category": "白板笔",
    "platforms": {
      "jd": 7446930,
      "taobao": 10124522,
      "pdd": 1104938,
      "douyin": 6138616,
      "xhs": 10380095
    }
  },
  {
    "word": "白板笔测评",
    "category": "白板笔",
    "platforms": {
      "jd": 2788908,
      "taobao": 9628519,
      "pdd": 4157155,
      "douyin": 4386457,
      "xhs": 13891183
    }
  },
  {
    "word": "白板笔平替",
    "category": "白板笔",
    "platforms": {
      "jd": 6828763,
      "taobao": 8638354,
      "pdd": 3010318,
      "douyin": 8673600,
      "xhs": 2841912
    }
  },
  {
    "word": "白板笔学生党",
    "category": "白板笔",
    "platforms": {
      "jd": 5649084,
      "taobao": 9112145,
      "pdd": 4445729,
      "douyin": 7132455,
      "xhs": 11374156
    }
  },
  {
    "word": "白板笔性价比",
    "category": "白板笔",
    "platforms": {
      "jd": 6191113,
      "taobao": 11381819,
      "pdd": 4527708,
      "douyin": 13286634,
      "xhs": 5418791
    }
  },
  {
    "word": "白板笔好物分享",
    "category": "白板笔",
    "platforms": {
      "jd": 7034470,
      "taobao": 9067929,
      "pdd": 5901408,
      "douyin": 9845690,
      "xhs": 11081288
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋推荐",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 5174004,
      "taobao": 2676907,
      "pdd": 3728000,
      "douyin": 23769078,
      "xhs": 6369318
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋测评",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 3306971,
      "taobao": 2295342,
      "pdd": 5938607,
      "douyin": 7313241,
      "xhs": 1088169
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋平替",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 1161403,
      "taobao": 10958813,
      "pdd": 2635709,
      "douyin": 8304345,
      "xhs": 4053312
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋学生党",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 5611464,
      "taobao": 7013810,
      "pdd": 4208368,
      "douyin": 23874623,
      "xhs": 14383000
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋性价比",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 2335111,
      "taobao": 7745044,
      "pdd": 2852458,
      "douyin": 12000272,
      "xhs": 12897842
    }
  },
  {
    "word": "按扣/拉链文件资料袋/收纳袋好物分享",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": {
      "jd": 7358766,
      "taobao": 10465430,
      "pdd": 2926444,
      "douyin": 15120542,
      "xhs": 3485947
    }
  },
  {
    "word": "修正带推荐",
    "category": "修正带",
    "platforms": {
      "jd": 2901078,
      "taobao": 6229292,
      "pdd": 851061,
      "douyin": 19399539,
      "xhs": 2358541
    }
  },
  {
    "word": "修正带测评",
    "category": "修正带",
    "platforms": {
      "jd": 3825035,
      "taobao": 5962165,
      "pdd": 2220059,
      "douyin": 10240024,
      "xhs": 2285155
    }
  },
  {
    "word": "修正带平替",
    "category": "修正带",
    "platforms": {
      "jd": 2994044,
      "taobao": 2279272,
      "pdd": 2261100,
      "douyin": 7935090,
      "xhs": 5264712
    }
  },
  {
    "word": "修正带学生党",
    "category": "修正带",
    "platforms": {
      "jd": 5573844,
      "taobao": 4915475,
      "pdd": 3971006,
      "douyin": 18616791,
      "xhs": 3391844
    }
  },
  {
    "word": "修正带性价比",
    "category": "修正带",
    "platforms": {
      "jd": 5979108,
      "taobao": 4108270,
      "pdd": 1177209,
      "douyin": 10713910,
      "xhs": 6376893
    }
  },
  {
    "word": "修正带好物分享",
    "category": "修正带",
    "platforms": {
      "jd": 7683062,
      "taobao": 11862931,
      "pdd": 5451480,
      "douyin": 20395393,
      "xhs": 9890606
    }
  },
  {
    "word": "钢笔推荐",
    "category": "钢笔",
    "platforms": {
      "jd": 628152,
      "taobao": 9781677,
      "pdd": 3474123,
      "douyin": 15030001,
      "xhs": 12347763
    }
  },
  {
    "word": "钢笔测评",
    "category": "钢笔",
    "platforms": {
      "jd": 4343099,
      "taobao": 9628988,
      "pdd": 4001510,
      "douyin": 13166807,
      "xhs": 3482142
    }
  },
  {
    "word": "钢笔平替",
    "category": "钢笔",
    "platforms": {
      "jd": 4826685,
      "taobao": 4599732,
      "pdd": 1886491,
      "douyin": 7565836,
      "xhs": 6476112
    }
  },
  {
    "word": "钢笔学生党",
    "category": "钢笔",
    "platforms": {
      "jd": 5536225,
      "taobao": 2817139,
      "pdd": 3733645,
      "douyin": 13358958,
      "xhs": 6400689
    }
  },
  {
    "word": "钢笔性价比",
    "category": "钢笔",
    "platforms": {
      "jd": 2123106,
      "taobao": 11471496,
      "pdd": 5001959,
      "douyin": 9427547,
      "xhs": 13855943
    }
  },
  {
    "word": "钢笔好物分享",
    "category": "钢笔",
    "platforms": {
      "jd": 507357,
      "taobao": 2260432,
      "pdd": 2476517,
      "douyin": 3670245,
      "xhs": 2295265
    }
  },
  {
    "word": "画纸/画本推荐",
    "category": "画纸/画本",
    "platforms": {
      "jd": 5855225,
      "taobao": 2334061,
      "pdd": 597185,
      "douyin": 10660462,
      "xhs": 8336986
    }
  },
  {
    "word": "画纸/画本测评",
    "category": "画纸/画本",
    "platforms": {
      "jd": 4861163,
      "taobao": 2295811,
      "pdd": 5782962,
      "douyin": 16093590,
      "xhs": 4679128
    }
  },
  {
    "word": "画纸/画本平替",
    "category": "画纸/画本",
    "platforms": {
      "jd": 6659326,
      "taobao": 6920191,
      "pdd": 1511882,
      "douyin": 7196581,
      "xhs": 7687513
    }
  },
  {
    "word": "画纸/画本学生党",
    "category": "画纸/画本",
    "platforms": {
      "jd": 5498605,
      "taobao": 11718804,
      "pdd": 3496284,
      "douyin": 8101126,
      "xhs": 9409533
    }
  },
  {
    "word": "画纸/画本性价比",
    "category": "画纸/画本",
    "platforms": {
      "jd": 5767103,
      "taobao": 7834722,
      "pdd": 3326710,
      "douyin": 8141185,
      "xhs": 7334994
    }
  },
  {
    "word": "画纸/画本好物分享",
    "category": "画纸/画本",
    "platforms": {
      "jd": 831653,
      "taobao": 3657933,
      "pdd": 5001553,
      "douyin": 8945096,
      "xhs": 8699924
    }
  },
  {
    "word": "胶水推荐",
    "category": "胶水",
    "platforms": {
      "jd": 3582299,
      "taobao": 5886446,
      "pdd": 3220247,
      "douyin": 6290923,
      "xhs": 4326209
    }
  },
  {
    "word": "胶水测评",
    "category": "胶水",
    "platforms": {
      "jd": 5379226,
      "taobao": 5962634,
      "pdd": 2064413,
      "douyin": 19020374,
      "xhs": 5876114
    }
  },
  {
    "word": "胶水平替",
    "category": "胶水",
    "platforms": {
      "jd": 991967,
      "taobao": 9240650,
      "pdd": 1137273,
      "douyin": 6827326,
      "xhs": 8898913
    }
  },
  {
    "word": "胶水学生党",
    "category": "胶水",
    "platforms": {
      "jd": 5460985,
      "taobao": 9620469,
      "pdd": 3258922,
      "douyin": 24843294,
      "xhs": 12418378
    }
  },
  {
    "word": "胶水性价比",
    "category": "胶水",
    "platforms": {
      "jd": 1911101,
      "taobao": 4197948,
      "pdd": 1651460,
      "douyin": 6854823,
      "xhs": 14814044
    }
  },
  {
    "word": "胶水好物分享",
    "category": "胶水",
    "platforms": {
      "jd": 1155949,
      "taobao": 5055434,
      "pdd": 2026589,
      "douyin": 14219947,
      "xhs": 1104584
    }
  },
  {
    "word": "笔芯/替芯/笔壳推荐",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 1309373,
      "taobao": 9438831,
      "pdd": 5843308,
      "douyin": 23921385,
      "xhs": 14315432
    }
  },
  {
    "word": "笔芯/替芯/笔壳测评",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5897290,
      "taobao": 9629457,
      "pdd": 3845865,
      "douyin": 21947157,
      "xhs": 7073100
    }
  },
  {
    "word": "笔芯/替芯/笔壳平替",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 2824608,
      "taobao": 11561109,
      "pdd": 762664,
      "douyin": 6458071,
      "xhs": 10110313
    }
  },
  {
    "word": "笔芯/替芯/笔壳学生党",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5423366,
      "taobao": 7522134,
      "pdd": 3021561,
      "douyin": 19585462,
      "xhs": 1427222
    }
  },
  {
    "word": "笔芯/替芯/笔壳性价比",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 5555099,
      "taobao": 11561174,
      "pdd": 5476211,
      "douyin": 5568460,
      "xhs": 8293095
    }
  },
  {
    "word": "笔芯/替芯/笔壳好物分享",
    "category": "笔芯/替芯/笔壳",
    "platforms": {
      "jd": 1480245,
      "taobao": 6452934,
      "pdd": 4551625,
      "douyin": 19494799,
      "xhs": 7509243
    }
  },
  {
    "word": "记号笔推荐",
    "category": "记号笔",
    "platforms": {
      "jd": 6536447,
      "taobao": 1991216,
      "pdd": 2966370,
      "douyin": 19551846,
      "xhs": 10304654
    }
  },
  {
    "word": "记号笔测评",
    "category": "记号笔",
    "platforms": {
      "jd": 6415354,
      "taobao": 2296280,
      "pdd": 5627317,
      "douyin": 24873940,
      "xhs": 8270086
    }
  },
  {
    "word": "记号笔平替",
    "category": "记号笔",
    "platforms": {
      "jd": 4657249,
      "taobao": 2881568,
      "pdd": 5888055,
      "douyin": 6088816,
      "xhs": 11321713
    }
  },
  {
    "word": "记号笔学生党",
    "category": "记号笔",
    "platforms": {
      "jd": 5385746,
      "taobao": 5423798,
      "pdd": 2784200,
      "douyin": 14327629,
      "xhs": 4436067
    }
  },
  {
    "word": "记号笔性价比",
    "category": "记号笔",
    "platforms": {
      "jd": 1699096,
      "taobao": 7924400,
      "pdd": 3800961,
      "douyin": 4282098,
      "xhs": 1772145
    }
  },
  {
    "word": "记号笔好物分享",
    "category": "记号笔",
    "platforms": {
      "jd": 1804541,
      "taobao": 7850435,
      "pdd": 1576661,
      "douyin": 24769650,
      "xhs": 13913902
    }
  },
  {
    "word": "练字帖/描红本推荐",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 4263520,
      "taobao": 5543600,
      "pdd": 5589432,
      "douyin": 15182307,
      "xhs": 6293877
    }
  },
  {
    "word": "练字帖/描红本测评",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 6933417,
      "taobao": 5963103,
      "pdd": 1908768,
      "douyin": 5800723,
      "xhs": 9467073
    }
  },
  {
    "word": "练字帖/描红本平替",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 6489890,
      "taobao": 5202027,
      "pdd": 5513446,
      "douyin": 5719561,
      "xhs": 12533114
    }
  },
  {
    "word": "练字帖/描红本学生党",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 5348126,
      "taobao": 3325463,
      "pdd": 2546838,
      "douyin": 9069797,
      "xhs": 7444911
    }
  },
  {
    "word": "练字帖/描红本性价比",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 5343094,
      "taobao": 4287626,
      "pdd": 2125711,
      "douyin": 24995736,
      "xhs": 9251196
    }
  },
  {
    "word": "练字帖/描红本好物分享",
    "category": "练字帖/描红本",
    "platforms": {
      "jd": 2128836,
      "taobao": 9247936,
      "pdd": 4101697,
      "douyin": 8044502,
      "xhs": 6318561
    }
  },
  {
    "word": "圆珠笔推荐",
    "category": "圆珠笔",
    "platforms": {
      "jd": 1990594,
      "taobao": 9095985,
      "pdd": 2712494,
      "douyin": 10812769,
      "xhs": 2283100
    }
  },
  {
    "word": "圆珠笔测评",
    "category": "圆珠笔",
    "platforms": {
      "jd": 7451481,
      "taobao": 9629926,
      "pdd": 3690220,
      "douyin": 8727507,
      "xhs": 10664059
    }
  },
  {
    "word": "圆珠笔平替",
    "category": "圆珠笔",
    "platforms": {
      "jd": 822531,
      "taobao": 7522486,
      "pdd": 5138837,
      "douyin": 5350306,
      "xhs": 13744514
    }
  },
  {
    "word": "圆珠笔学生党",
    "category": "圆珠笔",
    "platforms": {
      "jd": 5310507,
      "taobao": 1227128,
      "pdd": 2309477,
      "douyin": 3811965,
      "xhs": 10453756
    }
  },
  {
    "word": "圆珠笔性价比",
    "category": "圆珠笔",
    "platforms": {
      "jd": 1487091,
      "taobao": 11650852,
      "pdd": 5950462,
      "douyin": 23709373,
      "xhs": 2730246
    }
  },
  {
    "word": "圆珠笔好物分享",
    "category": "圆珠笔",
    "platforms": {
      "jd": 2453132,
      "taobao": 10645437,
      "pdd": 1126734,
      "douyin": 13319353,
      "xhs": 12723220
    }
  },
  {
    "word": "蜡笔推荐",
    "category": "蜡笔",
    "platforms": {
      "jd": 7217668,
      "taobao": 1648370,
      "pdd": 5335556,
      "douyin": 6443230,
      "xhs": 12272323
    }
  },
  {
    "word": "蜡笔测评",
    "category": "蜡笔",
    "platforms": {
      "jd": 7969545,
      "taobao": 2296749,
      "pdd": 5471671,
      "douyin": 11654290,
      "xhs": 11861045
    }
  },
  {
    "word": "蜡笔平替",
    "category": "蜡笔",
    "platforms": {
      "jd": 2655171,
      "taobao": 9842946,
      "pdd": 4764228,
      "douyin": 4981051,
      "xhs": 14955914
    }
  },
  {
    "word": "蜡笔学生党",
    "category": "蜡笔",
    "platforms": {
      "jd": 5272887,
      "taobao": 10128793,
      "pdd": 2072116,
      "douyin": 20554132,
      "xhs": 13462600
    }
  },
  {
    "word": "蜡笔性价比",
    "category": "蜡笔",
    "platforms": {
      "jd": 5131089,
      "taobao": 8014078,
      "pdd": 4275212,
      "douyin": 22423011,
      "xhs": 10209297
    }
  },
  {
    "word": "蜡笔好物分享",
    "category": "蜡笔",
    "platforms": {
      "jd": 2777428,
      "taobao": 1042938,
      "pdd": 3651770,
      "douyin": 18594205,
      "xhs": 5127880
    }
  },
  {
    "word": "书签推荐",
    "category": "书签",
    "platforms": {
      "jd": 4944742,
      "taobao": 5200755,
      "pdd": 2458617,
      "douyin": 24073691,
      "xhs": 8261545
    }
  },
  {
    "word": "书签测评",
    "category": "书签",
    "platforms": {
      "jd": 987609,
      "taobao": 5963572,
      "pdd": 1753123,
      "douyin": 14581073,
      "xhs": 13058031
    }
  },
  {
    "word": "书签平替",
    "category": "书签",
    "platforms": {
      "jd": 4487812,
      "taobao": 1163405,
      "pdd": 4389619,
      "douyin": 4611796,
      "xhs": 2167314
    }
  },
  {
    "word": "书签学生党",
    "category": "书签",
    "platforms": {
      "jd": 5235267,
      "taobao": 8030457,
      "pdd": 1834755,
      "douyin": 15296300,
      "xhs": 2471444
    }
  },
  {
    "word": "书签性价比",
    "category": "书签",
    "platforms": {
      "jd": 1275086,
      "taobao": 4377304,
      "pdd": 2599963,
      "douyin": 21136649,
      "xhs": 3688347
    }
  },
  {
    "word": "书签好物分享",
    "category": "书签",
    "platforms": {
      "jd": 3101724,
      "taobao": 2440438,
      "pdd": 676806,
      "douyin": 23869056,
      "xhs": 11532539
    }
  }
],
  trendProductData: [
  {
    "name": "三菱 大容量中性笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 6.7,
        "sales": 54633,
        "revenue": 366041
      },
      {
        "platform": "天猫",
        "avgPrice": 6.7,
        "sales": 105850,
        "revenue": 709195
      },
      {
        "platform": "京东",
        "avgPrice": 7.7,
        "sales": 81545,
        "revenue": 627897
      },
      {
        "platform": "抖音",
        "avgPrice": 6.7,
        "sales": 130124,
        "revenue": 871831
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.7,
        "sales": 212626,
        "revenue": 999342
      }
    ]
  },
  {
    "name": "三菱 可擦中性笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 2.8,
        "sales": 89267,
        "revenue": 249948
      },
      {
        "platform": "天猫",
        "avgPrice": 2.8,
        "sales": 139558,
        "revenue": 390762
      },
      {
        "platform": "京东",
        "avgPrice": 3.2,
        "sales": 77062,
        "revenue": 246598
      },
      {
        "platform": "抖音",
        "avgPrice": 2.8,
        "sales": 109908,
        "revenue": 307742
      },
      {
        "platform": "拼多多",
        "avgPrice": 2,
        "sales": 17921,
        "revenue": 35842
      }
    ]
  },
  {
    "name": "斑马 直液式走珠笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.9,
        "sales": 126485,
        "revenue": 493292
      },
      {
        "platform": "天猫",
        "avgPrice": 3.9,
        "sales": 74884,
        "revenue": 292048
      },
      {
        "platform": "京东",
        "avgPrice": 4.5,
        "sales": 154470,
        "revenue": 695115
      },
      {
        "platform": "抖音",
        "avgPrice": 3.9,
        "sales": 179672,
        "revenue": 700721
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.7,
        "sales": 144906,
        "revenue": 391246
      }
    ]
  },
  {
    "name": "斑马 子弹头中性笔 0.38mm",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3,
        "sales": 104261,
        "revenue": 312783
      },
      {
        "platform": "天猫",
        "avgPrice": 3,
        "sales": 113306,
        "revenue": 339918
      },
      {
        "platform": "京东",
        "avgPrice": 3.4,
        "sales": 234958,
        "revenue": 798857
      },
      {
        "platform": "抖音",
        "avgPrice": 3,
        "sales": 70323,
        "revenue": 210969
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.1,
        "sales": 231395,
        "revenue": 485930
      }
    ]
  },
  {
    "name": "三菱 中性笔套装 12支",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.2,
        "sales": 232340,
        "revenue": 1208168
      },
      {
        "platform": "天猫",
        "avgPrice": 5.2,
        "sales": 20959,
        "revenue": 108987
      },
      {
        "platform": "京东",
        "avgPrice": 6,
        "sales": 74974,
        "revenue": 449844
      },
      {
        "platform": "抖音",
        "avgPrice": 5.2,
        "sales": 142148,
        "revenue": 739170
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.6,
        "sales": 133019,
        "revenue": 478868
      }
    ]
  },
  {
    "name": "三菱 商务签字笔",
    "category": "中性笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.9,
        "sales": 181290,
        "revenue": 1432191
      },
      {
        "platform": "天猫",
        "avgPrice": 7.9,
        "sales": 206782,
        "revenue": 1633578
      },
      {
        "platform": "京东",
        "avgPrice": 9.1,
        "sales": 87570,
        "revenue": 796887
      },
      {
        "platform": "抖音",
        "avgPrice": 7.9,
        "sales": 147548,
        "revenue": 1165629
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.5,
        "sales": 176078,
        "revenue": 968429
      }
    ]
  },
  {
    "name": "无印良品 方格本 网格",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.9,
        "sales": 31873,
        "revenue": 729892
      },
      {
        "platform": "天猫",
        "avgPrice": 22.9,
        "sales": 42549,
        "revenue": 974372
      },
      {
        "platform": "京东",
        "avgPrice": 26.3,
        "sales": 140253,
        "revenue": 3688654
      },
      {
        "platform": "抖音",
        "avgPrice": 22.9,
        "sales": 114074,
        "revenue": 2612295
      },
      {
        "platform": "拼多多",
        "avgPrice": 16,
        "sales": 87547,
        "revenue": 1400752
      }
    ]
  },
  {
    "name": "国誉 加厚笔记本 200页",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 42.9,
        "sales": 122974,
        "revenue": 5275585
      },
      {
        "platform": "天猫",
        "avgPrice": 42.9,
        "sales": 57278,
        "revenue": 2457226
      },
      {
        "platform": "京东",
        "avgPrice": 49.3,
        "sales": 60434,
        "revenue": 2979396
      },
      {
        "platform": "抖音",
        "avgPrice": 42.9,
        "sales": 121752,
        "revenue": 5223161
      },
      {
        "platform": "拼多多",
        "avgPrice": 30,
        "sales": 136796,
        "revenue": 4103880
      }
    ]
  },
  {
    "name": "kinbor 康奈尔笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31,
        "sales": 142759,
        "revenue": 4425529
      },
      {
        "platform": "天猫",
        "avgPrice": 31,
        "sales": 116184,
        "revenue": 3601704
      },
      {
        "platform": "京东",
        "avgPrice": 35.6,
        "sales": 38764,
        "revenue": 1379998
      },
      {
        "platform": "抖音",
        "avgPrice": 31,
        "sales": 42410,
        "revenue": 1314710
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.7,
        "sales": 55107,
        "revenue": 1195822
      }
    ]
  },
  {
    "name": "晨光 错题本 活页",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.5,
        "sales": 56472,
        "revenue": 2174172
      },
      {
        "platform": "天猫",
        "avgPrice": 38.5,
        "sales": 33516,
        "revenue": 1290366
      },
      {
        "platform": "京东",
        "avgPrice": 44.3,
        "sales": 33317,
        "revenue": 1475943
      },
      {
        "platform": "抖音",
        "avgPrice": 38.5,
        "sales": 56402,
        "revenue": 2171477
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.9,
        "sales": 102283,
        "revenue": 2751413
      }
    ]
  },
  {
    "name": "国誉 考研专用笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.3,
        "sales": 123975,
        "revenue": 1896818
      },
      {
        "platform": "天猫",
        "avgPrice": 15.3,
        "sales": 121413,
        "revenue": 1857619
      },
      {
        "platform": "京东",
        "avgPrice": 17.6,
        "sales": 103891,
        "revenue": 1828482
      },
      {
        "platform": "抖音",
        "avgPrice": 15.3,
        "sales": 126109,
        "revenue": 1929468
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.7,
        "sales": 91129,
        "revenue": 975080
      }
    ]
  },
  {
    "name": "kinbor 道林纸笔记本",
    "category": "笔记本/记事本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.4,
        "sales": 109867,
        "revenue": 1032750
      },
      {
        "platform": "天猫",
        "avgPrice": 9.4,
        "sales": 100590,
        "revenue": 945546
      },
      {
        "platform": "京东",
        "avgPrice": 10.8,
        "sales": 43793,
        "revenue": 472964
      },
      {
        "platform": "抖音",
        "avgPrice": 9.4,
        "sales": 56793,
        "revenue": 533854
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.6,
        "sales": 47913,
        "revenue": 316226
      }
    ]
  },
  {
    "name": "晨光 学习用品礼盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.6,
        "sales": 16750,
        "revenue": 345050
      },
      {
        "platform": "天猫",
        "avgPrice": 20.6,
        "sales": 12160,
        "revenue": 250496
      },
      {
        "platform": "京东",
        "avgPrice": 23.7,
        "sales": 45922,
        "revenue": 1088351
      },
      {
        "platform": "抖音",
        "avgPrice": 20.6,
        "sales": 6036,
        "revenue": 124342
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.4,
        "sales": 24850,
        "revenue": 357840
      }
    ]
  },
  {
    "name": "晨光 小学生文具套装",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 94.5,
        "sales": 26744,
        "revenue": 2527308
      },
      {
        "platform": "天猫",
        "avgPrice": 94.5,
        "sales": 16678,
        "revenue": 1576071
      },
      {
        "platform": "京东",
        "avgPrice": 108.7,
        "sales": 38118,
        "revenue": 4143427
      },
      {
        "platform": "抖音",
        "avgPrice": 94.5,
        "sales": 19486,
        "revenue": 1841427
      },
      {
        "platform": "拼多多",
        "avgPrice": 66.1,
        "sales": 61220,
        "revenue": 4046642
      }
    ]
  },
  {
    "name": "奥特曼 中考文具套装",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 114.6,
        "sales": 35179,
        "revenue": 4031513
      },
      {
        "platform": "天猫",
        "avgPrice": 114.6,
        "sales": 24320,
        "revenue": 2787072
      },
      {
        "platform": "京东",
        "avgPrice": 131.8,
        "sales": 63180,
        "revenue": 8327124
      },
      {
        "platform": "抖音",
        "avgPrice": 114.6,
        "sales": 59349,
        "revenue": 6801395
      },
      {
        "platform": "拼多多",
        "avgPrice": 80.2,
        "sales": 12984,
        "revenue": 1041317
      }
    ]
  },
  {
    "name": "迪士尼 高考加油礼盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 64.9,
        "sales": 26253,
        "revenue": 1703820
      },
      {
        "platform": "天猫",
        "avgPrice": 64.9,
        "sales": 70131,
        "revenue": 4551502
      },
      {
        "platform": "京东",
        "avgPrice": 74.6,
        "sales": 34217,
        "revenue": 2552588
      },
      {
        "platform": "抖音",
        "avgPrice": 64.9,
        "sales": 36149,
        "revenue": 2346070
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.4,
        "sales": 33761,
        "revenue": 1532749
      }
    ]
  },
  {
    "name": "得力 文具福袋 随机",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 109.2,
        "sales": 54714,
        "revenue": 5974769
      },
      {
        "platform": "天猫",
        "avgPrice": 109.2,
        "sales": 45271,
        "revenue": 4943593
      },
      {
        "platform": "京东",
        "avgPrice": 125.6,
        "sales": 12262,
        "revenue": 1540107
      },
      {
        "platform": "抖音",
        "avgPrice": 109.2,
        "sales": 14285,
        "revenue": 1559922
      },
      {
        "platform": "拼多多",
        "avgPrice": 76.4,
        "sales": 51729,
        "revenue": 3952096
      }
    ]
  },
  {
    "name": "奥特曼 IP联名文具盲盒",
    "category": "学习套装/礼盒/盲盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 30.5,
        "sales": 55895,
        "revenue": 1704798
      },
      {
        "platform": "天猫",
        "avgPrice": 30.5,
        "sales": 39331,
        "revenue": 1199596
      },
      {
        "platform": "京东",
        "avgPrice": 35.1,
        "sales": 18745,
        "revenue": 657950
      },
      {
        "platform": "抖音",
        "avgPrice": 30.5,
        "sales": 13858,
        "revenue": 422669
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.3,
        "sales": 65790,
        "revenue": 1401327
      }
    ]
  },
  {
    "name": "慕娜美 动漫专用马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 112.2,
        "sales": 18764,
        "revenue": 2105321
      },
      {
        "platform": "天猫",
        "avgPrice": 112.2,
        "sales": 94329,
        "revenue": 10583714
      },
      {
        "platform": "京东",
        "avgPrice": 129,
        "sales": 26110,
        "revenue": 3368190
      },
      {
        "platform": "抖音",
        "avgPrice": 112.2,
        "sales": 28933,
        "revenue": 3246283
      },
      {
        "platform": "拼多多",
        "avgPrice": 78.5,
        "sales": 98977,
        "revenue": 7769695
      }
    ]
  },
  {
    "name": "马利 建筑手绘马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 87.3,
        "sales": 80225,
        "revenue": 7003643
      },
      {
        "platform": "天猫",
        "avgPrice": 87.3,
        "sales": 96860,
        "revenue": 8455878
      },
      {
        "platform": "京东",
        "avgPrice": 100.4,
        "sales": 58568,
        "revenue": 5880227
      },
      {
        "platform": "抖音",
        "avgPrice": 87.3,
        "sales": 60964,
        "revenue": 5322157
      },
      {
        "platform": "拼多多",
        "avgPrice": 61.1,
        "sales": 70797,
        "revenue": 4325697
      }
    ]
  },
  {
    "name": "touch 儿童马克笔 可水洗",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.7,
        "sales": 90176,
        "revenue": 3940691
      },
      {
        "platform": "天猫",
        "avgPrice": 43.7,
        "sales": 78117,
        "revenue": 3413713
      },
      {
        "platform": "京东",
        "avgPrice": 50.3,
        "sales": 47121,
        "revenue": 2370186
      },
      {
        "platform": "抖音",
        "avgPrice": 43.7,
        "sales": 34046,
        "revenue": 1487810
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.6,
        "sales": 88103,
        "revenue": 2695952
      }
    ]
  },
  {
    "name": "斯塔 软头马克笔套装",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.2,
        "sales": 28411,
        "revenue": 744368
      },
      {
        "platform": "天猫",
        "avgPrice": 26.2,
        "sales": 69916,
        "revenue": 1831799
      },
      {
        "platform": "京东",
        "avgPrice": 30.1,
        "sales": 66136,
        "revenue": 1990694
      },
      {
        "platform": "抖音",
        "avgPrice": 26.2,
        "sales": 55852,
        "revenue": 1463322
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.3,
        "sales": 18166,
        "revenue": 332438
      }
    ]
  },
  {
    "name": "touch 马克笔补充液",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 89.8,
        "sales": 61473,
        "revenue": 5520275
      },
      {
        "platform": "天猫",
        "avgPrice": 89.8,
        "sales": 37069,
        "revenue": 3328796
      },
      {
        "platform": "京东",
        "avgPrice": 103.3,
        "sales": 53065,
        "revenue": 5481615
      },
      {
        "platform": "抖音",
        "avgPrice": 89.8,
        "sales": 43615,
        "revenue": 3916627
      },
      {
        "platform": "拼多多",
        "avgPrice": 62.9,
        "sales": 75458,
        "revenue": 4746308
      }
    ]
  },
  {
    "name": "马利 丙烯马克笔",
    "category": "马克笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 47.4,
        "sales": 74297,
        "revenue": 3521678
      },
      {
        "platform": "天猫",
        "avgPrice": 47.4,
        "sales": 34729,
        "revenue": 1646155
      },
      {
        "platform": "京东",
        "avgPrice": 54.5,
        "sales": 16213,
        "revenue": 883609
      },
      {
        "platform": "抖音",
        "avgPrice": 47.4,
        "sales": 89382,
        "revenue": 4236707
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.2,
        "sales": 48150,
        "revenue": 1598580
      }
    ]
  },
  {
    "name": "迪士尼 痛包笔袋 可展示",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.9,
        "sales": 19292,
        "revenue": 461079
      },
      {
        "platform": "天猫",
        "avgPrice": 23.9,
        "sales": 72836,
        "revenue": 1740780
      },
      {
        "platform": "京东",
        "avgPrice": 27.5,
        "sales": 79604,
        "revenue": 2189110
      },
      {
        "platform": "抖音",
        "avgPrice": 23.9,
        "sales": 49671,
        "revenue": 1187137
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 65696,
        "revenue": 1097123
      }
    ]
  },
  {
    "name": "三年二班 多层文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.2,
        "sales": 31032,
        "revenue": 688910
      },
      {
        "platform": "天猫",
        "avgPrice": 22.2,
        "sales": 71807,
        "revenue": 1594115
      },
      {
        "platform": "京东",
        "avgPrice": 25.5,
        "sales": 62515,
        "revenue": 1594133
      },
      {
        "platform": "抖音",
        "avgPrice": 22.2,
        "sales": 88931,
        "revenue": 1974268
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.5,
        "sales": 56022,
        "revenue": 868341
      }
    ]
  },
  {
    "name": "晨光 硅胶笔袋 创意",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 33.6,
        "sales": 38138,
        "revenue": 1281437
      },
      {
        "platform": "天猫",
        "avgPrice": 33.6,
        "sales": 30286,
        "revenue": 1017610
      },
      {
        "platform": "京东",
        "avgPrice": 38.6,
        "sales": 12772,
        "revenue": 492999
      },
      {
        "platform": "抖音",
        "avgPrice": 33.6,
        "sales": 77262,
        "revenue": 2596003
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.5,
        "sales": 61095,
        "revenue": 1435733
      }
    ]
  },
  {
    "name": "KOKUYO 帆布笔袋 简约",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 45.6,
        "sales": 24596,
        "revenue": 1121578
      },
      {
        "platform": "天猫",
        "avgPrice": 45.6,
        "sales": 43844,
        "revenue": 1999286
      },
      {
        "platform": "京东",
        "avgPrice": 52.4,
        "sales": 80255,
        "revenue": 4205362
      },
      {
        "platform": "抖音",
        "avgPrice": 45.6,
        "sales": 60174,
        "revenue": 2743934
      },
      {
        "platform": "拼多多",
        "avgPrice": 31.9,
        "sales": 80418,
        "revenue": 2565334
      }
    ]
  },
  {
    "name": "晨光 铁皮文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 16.5,
        "sales": 47690,
        "revenue": 786885
      },
      {
        "platform": "天猫",
        "avgPrice": 16.5,
        "sales": 16817,
        "revenue": 277481
      },
      {
        "platform": "京东",
        "avgPrice": 19,
        "sales": 83920,
        "revenue": 1594480
      },
      {
        "platform": "抖音",
        "avgPrice": 16.5,
        "sales": 65175,
        "revenue": 1075388
      },
      {
        "platform": "拼多多",
        "avgPrice": 11.5,
        "sales": 75421,
        "revenue": 867342
      }
    ]
  },
  {
    "name": "迪士尼 密码锁文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.1,
        "sales": 68435,
        "revenue": 1649284
      },
      {
        "platform": "天猫",
        "avgPrice": 24.1,
        "sales": 19876,
        "revenue": 479012
      },
      {
        "platform": "京东",
        "avgPrice": 27.7,
        "sales": 12499,
        "revenue": 346222
      },
      {
        "platform": "抖音",
        "avgPrice": 24.1,
        "sales": 62258,
        "revenue": 1500418
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.9,
        "sales": 11428,
        "revenue": 193133
      }
    ]
  },
  {
    "name": "晨光 素描铅笔套装",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 45.8,
        "sales": 37663,
        "revenue": 1724965
      },
      {
        "platform": "天猫",
        "avgPrice": 45.8,
        "sales": 132939,
        "revenue": 6088606
      },
      {
        "platform": "京东",
        "avgPrice": 52.7,
        "sales": 110077,
        "revenue": 5801058
      },
      {
        "platform": "抖音",
        "avgPrice": 45.8,
        "sales": 156099,
        "revenue": 7149334
      },
      {
        "platform": "拼多多",
        "avgPrice": 32.1,
        "sales": 91244,
        "revenue": 2928932
      }
    ]
  },
  {
    "name": "中华 彩色铅笔 水溶性",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 51.4,
        "sales": 158177,
        "revenue": 8130298
      },
      {
        "platform": "天猫",
        "avgPrice": 51.4,
        "sales": 123266,
        "revenue": 6335872
      },
      {
        "platform": "京东",
        "avgPrice": 59.1,
        "sales": 156297,
        "revenue": 9237153
      },
      {
        "platform": "抖音",
        "avgPrice": 51.4,
        "sales": 83973,
        "revenue": 4316212
      },
      {
        "platform": "拼多多",
        "avgPrice": 36,
        "sales": 102629,
        "revenue": 3694644
      }
    ]
  },
  {
    "name": "三菱 洞洞铅笔 矫姿",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 37,
        "sales": 170975,
        "revenue": 6326075
      },
      {
        "platform": "天猫",
        "avgPrice": 37,
        "sales": 158929,
        "revenue": 5880373
      },
      {
        "platform": "京东",
        "avgPrice": 42.5,
        "sales": 140123,
        "revenue": 5955228
      },
      {
        "platform": "抖音",
        "avgPrice": 37,
        "sales": 83783,
        "revenue": 3099971
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.9,
        "sales": 91684,
        "revenue": 2374616
      }
    ]
  },
  {
    "name": "晨光 活动铅笔 金属杆",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.7,
        "sales": 42845,
        "revenue": 629822
      },
      {
        "platform": "天猫",
        "avgPrice": 14.7,
        "sales": 48865,
        "revenue": 718316
      },
      {
        "platform": "京东",
        "avgPrice": 16.9,
        "sales": 34250,
        "revenue": 578825
      },
      {
        "platform": "抖音",
        "avgPrice": 14.7,
        "sales": 150978,
        "revenue": 2219377
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.3,
        "sales": 129426,
        "revenue": 1333088
      }
    ]
  },
  {
    "name": "晨光 考试涂卡铅笔 20支",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 40.4,
        "sales": 83014,
        "revenue": 3353766
      },
      {
        "platform": "天猫",
        "avgPrice": 40.4,
        "sales": 178348,
        "revenue": 7205259
      },
      {
        "platform": "京东",
        "avgPrice": 46.5,
        "sales": 76686,
        "revenue": 3565899
      },
      {
        "platform": "抖音",
        "avgPrice": 40.4,
        "sales": 197857,
        "revenue": 7993423
      },
      {
        "platform": "拼多多",
        "avgPrice": 28.3,
        "sales": 181867,
        "revenue": 5146836
      }
    ]
  },
  {
    "name": "马可 绘图铅笔 2H-8B",
    "category": "铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.7,
        "sales": 152314,
        "revenue": 2848272
      },
      {
        "platform": "天猫",
        "avgPrice": 18.7,
        "sales": 196898,
        "revenue": 3681993
      },
      {
        "platform": "京东",
        "avgPrice": 21.5,
        "sales": 199727,
        "revenue": 4294131
      },
      {
        "platform": "抖音",
        "avgPrice": 18.7,
        "sales": 94469,
        "revenue": 1766570
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.1,
        "sales": 131972,
        "revenue": 1728833
      }
    ]
  },
  {
    "name": "蜻蜓 可爱卡通橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.8,
        "sales": 48177,
        "revenue": 761197
      },
      {
        "platform": "天猫",
        "avgPrice": 15.8,
        "sales": 132755,
        "revenue": 2097529
      },
      {
        "platform": "京东",
        "avgPrice": 18.2,
        "sales": 57298,
        "revenue": 1042824
      },
      {
        "platform": "抖音",
        "avgPrice": 15.8,
        "sales": 23059,
        "revenue": 364332
      },
      {
        "platform": "拼多多",
        "avgPrice": 11.1,
        "sales": 49928,
        "revenue": 554201
      }
    ]
  },
  {
    "name": "樱花 素描橡皮 软",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.3,
        "sales": 80602,
        "revenue": 1958629
      },
      {
        "platform": "天猫",
        "avgPrice": 24.3,
        "sales": 111774,
        "revenue": 2716108
      },
      {
        "platform": "京东",
        "avgPrice": 27.9,
        "sales": 219428,
        "revenue": 6122041
      },
      {
        "platform": "抖音",
        "avgPrice": 24.3,
        "sales": 198641,
        "revenue": 4826976
      },
      {
        "platform": "拼多多",
        "avgPrice": 17,
        "sales": 105231,
        "revenue": 1788927
      }
    ]
  },
  {
    "name": "晨光 橡皮擦 不留痕",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.5,
        "sales": 92206,
        "revenue": 2904489
      },
      {
        "platform": "天猫",
        "avgPrice": 31.5,
        "sales": 84556,
        "revenue": 2663514
      },
      {
        "platform": "京东",
        "avgPrice": 36.2,
        "sales": 87393,
        "revenue": 3163627
      },
      {
        "platform": "抖音",
        "avgPrice": 31.5,
        "sales": 230986,
        "revenue": 7276059
      },
      {
        "platform": "拼多多",
        "avgPrice": 22,
        "sales": 63951,
        "revenue": 1406922
      }
    ]
  },
  {
    "name": "樱花 高光橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 27.9,
        "sales": 46053,
        "revenue": 1284879
      },
      {
        "platform": "天猫",
        "avgPrice": 27.9,
        "sales": 238782,
        "revenue": 6662018
      },
      {
        "platform": "京东",
        "avgPrice": 32.1,
        "sales": 100318,
        "revenue": 3220208
      },
      {
        "platform": "抖音",
        "avgPrice": 27.9,
        "sales": 212882,
        "revenue": 5939408
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.5,
        "sales": 102765,
        "revenue": 2003918
      }
    ]
  },
  {
    "name": "晨光 樱花橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13.1,
        "sales": 80248,
        "revenue": 1051249
      },
      {
        "platform": "天猫",
        "avgPrice": 13.1,
        "sales": 170359,
        "revenue": 2231703
      },
      {
        "platform": "京东",
        "avgPrice": 15.1,
        "sales": 194749,
        "revenue": 2940710
      },
      {
        "platform": "抖音",
        "avgPrice": 13.1,
        "sales": 82521,
        "revenue": 1081025
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.2,
        "sales": 246245,
        "revenue": 2265454
      }
    ]
  },
  {
    "name": "辉柏嘉 超净橡皮",
    "category": "橡皮擦",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13,
        "sales": 192951,
        "revenue": 2508363
      },
      {
        "platform": "天猫",
        "avgPrice": 13,
        "sales": 207539,
        "revenue": 2698007
      },
      {
        "platform": "京东",
        "avgPrice": 14.9,
        "sales": 235266,
        "revenue": 3505463
      },
      {
        "platform": "抖音",
        "avgPrice": 13,
        "sales": 67553,
        "revenue": 878189
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.1,
        "sales": 71056,
        "revenue": 646610
      }
    ]
  },
  {
    "name": "慕娜美 迷你荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.6,
        "sales": 20252,
        "revenue": 174167
      },
      {
        "platform": "天猫",
        "avgPrice": 8.6,
        "sales": 40484,
        "revenue": 348162
      },
      {
        "platform": "京东",
        "avgPrice": 9.9,
        "sales": 83355,
        "revenue": 825215
      },
      {
        "platform": "抖音",
        "avgPrice": 8.6,
        "sales": 34218,
        "revenue": 294275
      },
      {
        "platform": "拼多多",
        "avgPrice": 6,
        "sales": 86690,
        "revenue": 520140
      }
    ]
  },
  {
    "name": "百乐 直液式荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.4,
        "sales": 78355,
        "revenue": 1520087
      },
      {
        "platform": "天猫",
        "avgPrice": 19.4,
        "sales": 28707,
        "revenue": 556916
      },
      {
        "platform": "京东",
        "avgPrice": 22.3,
        "sales": 97171,
        "revenue": 2166913
      },
      {
        "platform": "抖音",
        "avgPrice": 19.4,
        "sales": 24872,
        "revenue": 482517
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.6,
        "sales": 33563,
        "revenue": 456457
      }
    ]
  },
  {
    "name": "慕娜美 彩色荧光笔 学生用",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12,
        "sales": 81263,
        "revenue": 975156
      },
      {
        "platform": "天猫",
        "avgPrice": 12,
        "sales": 81092,
        "revenue": 973104
      },
      {
        "platform": "京东",
        "avgPrice": 13.8,
        "sales": 92421,
        "revenue": 1275410
      },
      {
        "platform": "抖音",
        "avgPrice": 12,
        "sales": 50338,
        "revenue": 604056
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.4,
        "sales": 97477,
        "revenue": 818807
      }
    ]
  },
  {
    "name": "晨光 护眼荧光笔 莫兰迪",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.2,
        "sales": 16077,
        "revenue": 292601
      },
      {
        "platform": "天猫",
        "avgPrice": 18.2,
        "sales": 73355,
        "revenue": 1335061
      },
      {
        "platform": "京东",
        "avgPrice": 20.9,
        "sales": 62807,
        "revenue": 1312666
      },
      {
        "platform": "抖音",
        "avgPrice": 18.2,
        "sales": 94611,
        "revenue": 1721920
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.7,
        "sales": 18657,
        "revenue": 236944
      }
    ]
  },
  {
    "name": "百乐 窗口荧光笔",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34,
        "sales": 23459,
        "revenue": 797606
      },
      {
        "platform": "天猫",
        "avgPrice": 34,
        "sales": 48004,
        "revenue": 1632136
      },
      {
        "platform": "京东",
        "avgPrice": 39.1,
        "sales": 25346,
        "revenue": 991029
      },
      {
        "platform": "抖音",
        "avgPrice": 34,
        "sales": 60653,
        "revenue": 2062202
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.8,
        "sales": 14831,
        "revenue": 352978
      }
    ]
  },
  {
    "name": "百乐 荧光笔 粗细双头",
    "category": "荧光笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.6,
        "sales": 78328,
        "revenue": 1456901
      },
      {
        "platform": "天猫",
        "avgPrice": 18.6,
        "sales": 68192,
        "revenue": 1268371
      },
      {
        "platform": "京东",
        "avgPrice": 21.4,
        "sales": 88574,
        "revenue": 1895484
      },
      {
        "platform": "抖音",
        "avgPrice": 18.6,
        "sales": 98955,
        "revenue": 1840563
      },
      {
        "platform": "拼多多",
        "avgPrice": 13,
        "sales": 83550,
        "revenue": 1086150
      }
    ]
  },
  {
    "name": "Hobonichi 手账大礼盒套装",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 67,
        "sales": 12764,
        "revenue": 855188
      },
      {
        "platform": "天猫",
        "avgPrice": 67,
        "sales": 18411,
        "revenue": 1233537
      },
      {
        "platform": "京东",
        "avgPrice": 77,
        "sales": 37268,
        "revenue": 2869636
      },
      {
        "platform": "抖音",
        "avgPrice": 67,
        "sales": 42037,
        "revenue": 2816479
      },
      {
        "platform": "拼多多",
        "avgPrice": 46.9,
        "sales": 44674,
        "revenue": 2095211
      }
    ]
  },
  {
    "name": "三年二班 手账模板尺",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.8,
        "sales": 22438,
        "revenue": 646214
      },
      {
        "platform": "天猫",
        "avgPrice": 28.8,
        "sales": 6539,
        "revenue": 188323
      },
      {
        "platform": "京东",
        "avgPrice": 33.1,
        "sales": 9407,
        "revenue": 311372
      },
      {
        "platform": "抖音",
        "avgPrice": 28.8,
        "sales": 44700,
        "revenue": 1287360
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.2,
        "sales": 16052,
        "revenue": 324250
      }
    ]
  },
  {
    "name": "文谷 手账印章套装",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 48.6,
        "sales": 23418,
        "revenue": 1138115
      },
      {
        "platform": "天猫",
        "avgPrice": 48.6,
        "sales": 25478,
        "revenue": 1238231
      },
      {
        "platform": "京东",
        "avgPrice": 55.9,
        "sales": 42169,
        "revenue": 2357247
      },
      {
        "platform": "抖音",
        "avgPrice": 48.6,
        "sales": 74329,
        "revenue": 3612389
      },
      {
        "platform": "拼多多",
        "avgPrice": 34,
        "sales": 57128,
        "revenue": 1942352
      }
    ]
  },
  {
    "name": "Hobonichi 手账素材本",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 95.5,
        "sales": 6940,
        "revenue": 662770
      },
      {
        "platform": "天猫",
        "avgPrice": 95.5,
        "sales": 37124,
        "revenue": 3545342
      },
      {
        "platform": "京东",
        "avgPrice": 109.8,
        "sales": 62857,
        "revenue": 6901699
      },
      {
        "platform": "抖音",
        "avgPrice": 95.5,
        "sales": 7429,
        "revenue": 709470
      },
      {
        "platform": "拼多多",
        "avgPrice": 66.8,
        "sales": 64205,
        "revenue": 4288894
      }
    ]
  },
  {
    "name": "国誉 手账周计划本",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 63.9,
        "sales": 7987,
        "revenue": 510369
      },
      {
        "platform": "天猫",
        "avgPrice": 63.9,
        "sales": 18636,
        "revenue": 1190840
      },
      {
        "platform": "京东",
        "avgPrice": 73.5,
        "sales": 46616,
        "revenue": 3426276
      },
      {
        "platform": "抖音",
        "avgPrice": 63.9,
        "sales": 64927,
        "revenue": 4148835
      },
      {
        "platform": "拼多多",
        "avgPrice": 44.7,
        "sales": 14677,
        "revenue": 656062
      }
    ]
  },
  {
    "name": "国誉 手账装饰花边剪刀",
    "category": "手帐",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 52.5,
        "sales": 58756,
        "revenue": 3084690
      },
      {
        "platform": "天猫",
        "avgPrice": 52.5,
        "sales": 38618,
        "revenue": 2027445
      },
      {
        "platform": "京东",
        "avgPrice": 60.4,
        "sales": 61773,
        "revenue": 3731089
      },
      {
        "platform": "抖音",
        "avgPrice": 52.5,
        "sales": 58323,
        "revenue": 3061958
      },
      {
        "platform": "拼多多",
        "avgPrice": 36.8,
        "sales": 33389,
        "revenue": 1228715
      }
    ]
  },
  {
    "name": "森活记 火漆封蜡枪",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34.1,
        "sales": 7099,
        "revenue": 242076
      },
      {
        "platform": "天猫",
        "avgPrice": 34.1,
        "sales": 4800,
        "revenue": 163680
      },
      {
        "platform": "京东",
        "avgPrice": 39.2,
        "sales": 7162,
        "revenue": 280750
      },
      {
        "platform": "抖音",
        "avgPrice": 34.1,
        "sales": 32147,
        "revenue": 1096213
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.9,
        "sales": 13580,
        "revenue": 324562
      }
    ]
  },
  {
    "name": "慢作 火漆信封套装",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 81.9,
        "sales": 30629,
        "revenue": 2508515
      },
      {
        "platform": "天猫",
        "avgPrice": 81.9,
        "sales": 34127,
        "revenue": 2795001
      },
      {
        "platform": "京东",
        "avgPrice": 94.2,
        "sales": 9301,
        "revenue": 876154
      },
      {
        "platform": "抖音",
        "avgPrice": 81.9,
        "sales": 38742,
        "revenue": 3172970
      },
      {
        "platform": "拼多多",
        "avgPrice": 57.3,
        "sales": 5138,
        "revenue": 294407
      }
    ]
  },
  {
    "name": "慢作 火漆印章 花朵款",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 64.1,
        "sales": 30475,
        "revenue": 1953447
      },
      {
        "platform": "天猫",
        "avgPrice": 64.1,
        "sales": 32708,
        "revenue": 2096583
      },
      {
        "platform": "京东",
        "avgPrice": 73.7,
        "sales": 8621,
        "revenue": 635368
      },
      {
        "platform": "抖音",
        "avgPrice": 64.1,
        "sales": 22488,
        "revenue": 1441481
      },
      {
        "platform": "拼多多",
        "avgPrice": 44.9,
        "sales": 22266,
        "revenue": 999743
      }
    ]
  },
  {
    "name": "印迹 火漆蜡条 彩色",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 57.3,
        "sales": 39684,
        "revenue": 2273893
      },
      {
        "platform": "天猫",
        "avgPrice": 57.3,
        "sales": 11077,
        "revenue": 634712
      },
      {
        "platform": "京东",
        "avgPrice": 65.9,
        "sales": 5377,
        "revenue": 354344
      },
      {
        "platform": "抖音",
        "avgPrice": 57.3,
        "sales": 8265,
        "revenue": 473585
      },
      {
        "platform": "拼多多",
        "avgPrice": 40.1,
        "sales": 24742,
        "revenue": 992154
      }
    ]
  },
  {
    "name": "暮光之印 火漆勺 木柄",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 33.2,
        "sales": 37781,
        "revenue": 1254329
      },
      {
        "platform": "天猫",
        "avgPrice": 33.2,
        "sales": 38979,
        "revenue": 1294103
      },
      {
        "platform": "京东",
        "avgPrice": 38.2,
        "sales": 3561,
        "revenue": 136030
      },
      {
        "platform": "抖音",
        "avgPrice": 33.2,
        "sales": 8426,
        "revenue": 279743
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.2,
        "sales": 11311,
        "revenue": 262415
      }
    ]
  },
  {
    "name": "手帐星球 火漆印章礼盒",
    "category": "火漆印章",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 53.8,
        "sales": 31762,
        "revenue": 1708796
      },
      {
        "platform": "天猫",
        "avgPrice": 53.8,
        "sales": 14745,
        "revenue": 793281
      },
      {
        "platform": "京东",
        "avgPrice": 61.9,
        "sales": 30762,
        "revenue": 1904168
      },
      {
        "platform": "抖音",
        "avgPrice": 53.8,
        "sales": 22920,
        "revenue": 1233096
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.7,
        "sales": 3012,
        "revenue": 113552
      }
    ]
  },
  {
    "name": "马利 三角杆水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 58.6,
        "sales": 21105,
        "revenue": 1236753
      },
      {
        "platform": "天猫",
        "avgPrice": 58.6,
        "sales": 113399,
        "revenue": 6645181
      },
      {
        "platform": "京东",
        "avgPrice": 67.4,
        "sales": 97183,
        "revenue": 6550134
      },
      {
        "platform": "抖音",
        "avgPrice": 58.6,
        "sales": 13998,
        "revenue": 820283
      },
      {
        "platform": "拼多多",
        "avgPrice": 41,
        "sales": 9239,
        "revenue": 378799
      }
    ]
  },
  {
    "name": "晨光 水彩笔 补充装",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 48.9,
        "sales": 36729,
        "revenue": 1796048
      },
      {
        "platform": "天猫",
        "avgPrice": 48.9,
        "sales": 84823,
        "revenue": 4147845
      },
      {
        "platform": "京东",
        "avgPrice": 56.2,
        "sales": 40434,
        "revenue": 2272391
      },
      {
        "platform": "抖音",
        "avgPrice": 48.9,
        "sales": 50969,
        "revenue": 2492384
      },
      {
        "platform": "拼多多",
        "avgPrice": 34.2,
        "sales": 119398,
        "revenue": 4083412
      }
    ]
  },
  {
    "name": "晨光 水彩笔 桶装 24色",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 63.2,
        "sales": 34151,
        "revenue": 2158343
      },
      {
        "platform": "天猫",
        "avgPrice": 63.2,
        "sales": 44757,
        "revenue": 2828642
      },
      {
        "platform": "京东",
        "avgPrice": 72.7,
        "sales": 98265,
        "revenue": 7143866
      },
      {
        "platform": "抖音",
        "avgPrice": 63.2,
        "sales": 16299,
        "revenue": 1030097
      },
      {
        "platform": "拼多多",
        "avgPrice": 44.2,
        "sales": 43210,
        "revenue": 1909882
      }
    ]
  },
  {
    "name": "得力 细头水彩笔 勾线",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.6,
        "sales": 119004,
        "revenue": 2451482
      },
      {
        "platform": "天猫",
        "avgPrice": 20.6,
        "sales": 121968,
        "revenue": 2512541
      },
      {
        "platform": "京东",
        "avgPrice": 23.7,
        "sales": 43882,
        "revenue": 1040003
      },
      {
        "platform": "抖音",
        "avgPrice": 20.6,
        "sales": 37196,
        "revenue": 766238
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.4,
        "sales": 47093,
        "revenue": 678139
      }
    ]
  },
  {
    "name": "马利 双头水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 59.3,
        "sales": 105351,
        "revenue": 6247314
      },
      {
        "platform": "天猫",
        "avgPrice": 59.3,
        "sales": 95338,
        "revenue": 5653543
      },
      {
        "platform": "京东",
        "avgPrice": 68.2,
        "sales": 59221,
        "revenue": 4038872
      },
      {
        "platform": "抖音",
        "avgPrice": 59.3,
        "sales": 59593,
        "revenue": 3533865
      },
      {
        "platform": "拼多多",
        "avgPrice": 41.5,
        "sales": 44366,
        "revenue": 1841189
      }
    ]
  },
  {
    "name": "辉柏嘉 可擦水彩笔",
    "category": "水彩笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.9,
        "sales": 100070,
        "revenue": 4393073
      },
      {
        "platform": "天猫",
        "avgPrice": 43.9,
        "sales": 26505,
        "revenue": 1163570
      },
      {
        "platform": "京东",
        "avgPrice": 50.5,
        "sales": 88841,
        "revenue": 4486471
      },
      {
        "platform": "抖音",
        "avgPrice": 43.9,
        "sales": 45342,
        "revenue": 1990514
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.7,
        "sales": 77540,
        "revenue": 2380478
      }
    ]
  },
  {
    "name": "得力 文件标签 彩色索引",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 65.1,
        "sales": 12757,
        "revenue": 830481
      },
      {
        "platform": "天猫",
        "avgPrice": 65.1,
        "sales": 57842,
        "revenue": 3765514
      },
      {
        "platform": "京东",
        "avgPrice": 74.9,
        "sales": 34145,
        "revenue": 2557461
      },
      {
        "platform": "抖音",
        "avgPrice": 65.1,
        "sales": 26590,
        "revenue": 1731009
      },
      {
        "platform": "拼多多",
        "avgPrice": 45.6,
        "sales": 55554,
        "revenue": 2533262
      }
    ]
  },
  {
    "name": "兄弟 手写标签纸",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 61.1,
        "sales": 56463,
        "revenue": 3449889
      },
      {
        "platform": "天猫",
        "avgPrice": 61.1,
        "sales": 38154,
        "revenue": 2331209
      },
      {
        "platform": "京东",
        "avgPrice": 70.3,
        "sales": 31645,
        "revenue": 2224644
      },
      {
        "platform": "抖音",
        "avgPrice": 61.1,
        "sales": 58274,
        "revenue": 3560541
      },
      {
        "platform": "拼多多",
        "avgPrice": 42.8,
        "sales": 64349,
        "revenue": 2754137
      }
    ]
  },
  {
    "name": "得力 热敏标签纸 卷装",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 30.1,
        "sales": 53683,
        "revenue": 1615858
      },
      {
        "platform": "天猫",
        "avgPrice": 30.1,
        "sales": 62138,
        "revenue": 1870354
      },
      {
        "platform": "京东",
        "avgPrice": 34.6,
        "sales": 32712,
        "revenue": 1131835
      },
      {
        "platform": "抖音",
        "avgPrice": 30.1,
        "sales": 47341,
        "revenue": 1424964
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.1,
        "sales": 10770,
        "revenue": 227247
      }
    ]
  },
  {
    "name": "精臣 价格标签贴",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 105.8,
        "sales": 68456,
        "revenue": 7242645
      },
      {
        "platform": "天猫",
        "avgPrice": 105.8,
        "sales": 56330,
        "revenue": 5959714
      },
      {
        "platform": "京东",
        "avgPrice": 121.7,
        "sales": 43065,
        "revenue": 5241011
      },
      {
        "platform": "抖音",
        "avgPrice": 105.8,
        "sales": 29725,
        "revenue": 3144905
      },
      {
        "platform": "拼多多",
        "avgPrice": 74.1,
        "sales": 10771,
        "revenue": 798131
      }
    ]
  },
  {
    "name": "晨光 书脊标签",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 69.7,
        "sales": 55762,
        "revenue": 3886611
      },
      {
        "platform": "天猫",
        "avgPrice": 69.7,
        "sales": 41617,
        "revenue": 2900705
      },
      {
        "platform": "京东",
        "avgPrice": 80.2,
        "sales": 64699,
        "revenue": 5188860
      },
      {
        "platform": "抖音",
        "avgPrice": 69.7,
        "sales": 56070,
        "revenue": 3908079
      },
      {
        "platform": "拼多多",
        "avgPrice": 48.8,
        "sales": 32575,
        "revenue": 1589660
      }
    ]
  },
  {
    "name": "得力 收纳标签贴",
    "category": "标签贴纸",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 90.4,
        "sales": 60706,
        "revenue": 5487822
      },
      {
        "platform": "天猫",
        "avgPrice": 90.4,
        "sales": 73922,
        "revenue": 6682549
      },
      {
        "platform": "京东",
        "avgPrice": 104,
        "sales": 49210,
        "revenue": 5117840
      },
      {
        "platform": "抖音",
        "avgPrice": 90.4,
        "sales": 12087,
        "revenue": 1092665
      },
      {
        "platform": "拼多多",
        "avgPrice": 63.3,
        "sales": 18517,
        "revenue": 1172126
      }
    ]
  },
  {
    "name": "幻彩 串珠手工材料",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.2,
        "sales": 18251,
        "revenue": 259164
      },
      {
        "platform": "天猫",
        "avgPrice": 14.2,
        "sales": 78314,
        "revenue": 1112059
      },
      {
        "platform": "京东",
        "avgPrice": 16.3,
        "sales": 14033,
        "revenue": 228738
      },
      {
        "platform": "抖音",
        "avgPrice": 14.2,
        "sales": 72562,
        "revenue": 1030380
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.9,
        "sales": 58528,
        "revenue": 579427
      }
    ]
  },
  {
    "name": "晨光 毛毡手工包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.6,
        "sales": 33778,
        "revenue": 695827
      },
      {
        "platform": "天猫",
        "avgPrice": 20.6,
        "sales": 40208,
        "revenue": 828285
      },
      {
        "platform": "京东",
        "avgPrice": 23.7,
        "sales": 63002,
        "revenue": 1493147
      },
      {
        "platform": "抖音",
        "avgPrice": 20.6,
        "sales": 25523,
        "revenue": 525774
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.4,
        "sales": 94399,
        "revenue": 1359346
      }
    ]
  },
  {
    "name": "得力 编织手链材料包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.1,
        "sales": 26923,
        "revenue": 971920
      },
      {
        "platform": "天猫",
        "avgPrice": 36.1,
        "sales": 44975,
        "revenue": 1623598
      },
      {
        "platform": "京东",
        "avgPrice": 41.5,
        "sales": 8056,
        "revenue": 334324
      },
      {
        "platform": "抖音",
        "avgPrice": 36.1,
        "sales": 23404,
        "revenue": 844884
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.3,
        "sales": 106592,
        "revenue": 2696778
      }
    ]
  },
  {
    "name": "儿童乐园 衍纸套装",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.3,
        "sales": 108785,
        "revenue": 3404971
      },
      {
        "platform": "天猫",
        "avgPrice": 31.3,
        "sales": 64484,
        "revenue": 2018349
      },
      {
        "platform": "京东",
        "avgPrice": 36,
        "sales": 98403,
        "revenue": 3542508
      },
      {
        "platform": "抖音",
        "avgPrice": 31.3,
        "sales": 59741,
        "revenue": 1869893
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.9,
        "sales": 102663,
        "revenue": 2248320
      }
    ]
  },
  {
    "name": "幻彩 创意美劳材料包",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.6,
        "sales": 79383,
        "revenue": 1397141
      },
      {
        "platform": "天猫",
        "avgPrice": 17.6,
        "sales": 41350,
        "revenue": 727760
      },
      {
        "platform": "京东",
        "avgPrice": 20.2,
        "sales": 39048,
        "revenue": 788770
      },
      {
        "platform": "抖音",
        "avgPrice": 17.6,
        "sales": 9282,
        "revenue": 163363
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.3,
        "sales": 62187,
        "revenue": 764900
      }
    ]
  },
  {
    "name": "美乐 拼豆套装",
    "category": "手工DIY套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 51.2,
        "sales": 101568,
        "revenue": 5200282
      },
      {
        "platform": "天猫",
        "avgPrice": 51.2,
        "sales": 103599,
        "revenue": 5304269
      },
      {
        "platform": "京东",
        "avgPrice": 58.9,
        "sales": 73791,
        "revenue": 4346290
      },
      {
        "platform": "抖音",
        "avgPrice": 51.2,
        "sales": 108920,
        "revenue": 5576704
      },
      {
        "platform": "拼多多",
        "avgPrice": 35.8,
        "sales": 98204,
        "revenue": 3515703
      }
    ]
  },
  {
    "name": "猫太子 自动进铅卷笔器",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 41.4,
        "sales": 13996,
        "revenue": 579434
      },
      {
        "platform": "天猫",
        "avgPrice": 41.4,
        "sales": 48677,
        "revenue": 2015228
      },
      {
        "platform": "京东",
        "avgPrice": 47.6,
        "sales": 72111,
        "revenue": 3432484
      },
      {
        "platform": "抖音",
        "avgPrice": 41.4,
        "sales": 82050,
        "revenue": 3396870
      },
      {
        "platform": "拼多多",
        "avgPrice": 29,
        "sales": 20137,
        "revenue": 583973
      }
    ]
  },
  {
    "name": "迪士尼 双孔卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 54,
        "sales": 73299,
        "revenue": 3958146
      },
      {
        "platform": "天猫",
        "avgPrice": 54,
        "sales": 14528,
        "revenue": 784512
      },
      {
        "platform": "京东",
        "avgPrice": 62.1,
        "sales": 59866,
        "revenue": 3717679
      },
      {
        "platform": "抖音",
        "avgPrice": 54,
        "sales": 57623,
        "revenue": 3111642
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.8,
        "sales": 65548,
        "revenue": 2477714
      }
    ]
  },
  {
    "name": "猫太子 静音电动削笔器",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.2,
        "sales": 66117,
        "revenue": 2856254
      },
      {
        "platform": "天猫",
        "avgPrice": 43.2,
        "sales": 83482,
        "revenue": 3606422
      },
      {
        "platform": "京东",
        "avgPrice": 49.7,
        "sales": 64499,
        "revenue": 3205600
      },
      {
        "platform": "抖音",
        "avgPrice": 43.2,
        "sales": 69128,
        "revenue": 2986330
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.2,
        "sales": 64050,
        "revenue": 1934310
      }
    ]
  },
  {
    "name": "得力 透明卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 55.6,
        "sales": 82972,
        "revenue": 4613243
      },
      {
        "platform": "天猫",
        "avgPrice": 55.6,
        "sales": 28609,
        "revenue": 1590660
      },
      {
        "platform": "京东",
        "avgPrice": 63.9,
        "sales": 6951,
        "revenue": 444169
      },
      {
        "platform": "抖音",
        "avgPrice": 55.6,
        "sales": 57265,
        "revenue": 3183934
      },
      {
        "platform": "拼多多",
        "avgPrice": 38.9,
        "sales": 57762,
        "revenue": 2246942
      }
    ]
  },
  {
    "name": "迪士尼 桌面卷笔器 大容量",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 45.5,
        "sales": 53220,
        "revenue": 2421510
      },
      {
        "platform": "天猫",
        "avgPrice": 45.5,
        "sales": 11638,
        "revenue": 529529
      },
      {
        "platform": "京东",
        "avgPrice": 52.3,
        "sales": 70509,
        "revenue": 3687621
      },
      {
        "platform": "抖音",
        "avgPrice": 45.5,
        "sales": 34639,
        "revenue": 1576075
      },
      {
        "platform": "拼多多",
        "avgPrice": 31.8,
        "sales": 57294,
        "revenue": 1821949
      }
    ]
  },
  {
    "name": "天文 便携卷笔刀",
    "category": "卷笔刀/卷笔器",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 46.6,
        "sales": 81983,
        "revenue": 3820408
      },
      {
        "platform": "天猫",
        "avgPrice": 46.6,
        "sales": 67226,
        "revenue": 3132732
      },
      {
        "platform": "京东",
        "avgPrice": 53.6,
        "sales": 53200,
        "revenue": 2851520
      },
      {
        "platform": "抖音",
        "avgPrice": 46.6,
        "sales": 65979,
        "revenue": 3074621
      },
      {
        "platform": "拼多多",
        "avgPrice": 32.6,
        "sales": 40074,
        "revenue": 1306412
      }
    ]
  },
  {
    "name": "得力 索引标签贴",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.4,
        "sales": 24818,
        "revenue": 208471
      },
      {
        "platform": "天猫",
        "avgPrice": 8.4,
        "sales": 61773,
        "revenue": 518893
      },
      {
        "platform": "京东",
        "avgPrice": 9.7,
        "sales": 69215,
        "revenue": 671386
      },
      {
        "platform": "抖音",
        "avgPrice": 8.4,
        "sales": 22491,
        "revenue": 188924
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.9,
        "sales": 153240,
        "revenue": 904116
      }
    ]
  },
  {
    "name": "3M 创意便签 造型",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.2,
        "sales": 45944,
        "revenue": 790237
      },
      {
        "platform": "天猫",
        "avgPrice": 17.2,
        "sales": 159203,
        "revenue": 2738292
      },
      {
        "platform": "京东",
        "avgPrice": 19.8,
        "sales": 121819,
        "revenue": 2412016
      },
      {
        "platform": "抖音",
        "avgPrice": 17.2,
        "sales": 166031,
        "revenue": 2855733
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 97969,
        "revenue": 1175628
      }
    ]
  },
  {
    "name": "广博 便签本 横线",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.5,
        "sales": 30547,
        "revenue": 717855
      },
      {
        "platform": "天猫",
        "avgPrice": 23.5,
        "sales": 65728,
        "revenue": 1544608
      },
      {
        "platform": "京东",
        "avgPrice": 27,
        "sales": 51110,
        "revenue": 1379970
      },
      {
        "platform": "抖音",
        "avgPrice": 23.5,
        "sales": 45871,
        "revenue": 1077969
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.4,
        "sales": 75858,
        "revenue": 1244071
      }
    ]
  },
  {
    "name": "广博 便利贴套装",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.5,
        "sales": 138439,
        "revenue": 2007366
      },
      {
        "platform": "天猫",
        "avgPrice": 14.5,
        "sales": 174360,
        "revenue": 2528220
      },
      {
        "platform": "京东",
        "avgPrice": 16.7,
        "sales": 52194,
        "revenue": 871640
      },
      {
        "platform": "抖音",
        "avgPrice": 14.5,
        "sales": 117320,
        "revenue": 1701140
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.1,
        "sales": 59500,
        "revenue": 600950
      }
    ]
  },
  {
    "name": "3M 指示标签 箭头",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.8,
        "sales": 76046,
        "revenue": 821297
      },
      {
        "platform": "天猫",
        "avgPrice": 10.8,
        "sales": 147595,
        "revenue": 1594026
      },
      {
        "platform": "京东",
        "avgPrice": 12.4,
        "sales": 28958,
        "revenue": 359079
      },
      {
        "platform": "抖音",
        "avgPrice": 10.8,
        "sales": 108852,
        "revenue": 1175602
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.6,
        "sales": 114030,
        "revenue": 866628
      }
    ]
  },
  {
    "name": "得力 加厚便签纸",
    "category": "便签本/便条纸/N次贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.7,
        "sales": 145020,
        "revenue": 3001914
      },
      {
        "platform": "天猫",
        "avgPrice": 20.7,
        "sales": 91027,
        "revenue": 1884259
      },
      {
        "platform": "京东",
        "avgPrice": 23.8,
        "sales": 83732,
        "revenue": 1992822
      },
      {
        "platform": "抖音",
        "avgPrice": 20.7,
        "sales": 79318,
        "revenue": 1641883
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.5,
        "sales": 167344,
        "revenue": 2426488
      }
    ]
  },
  {
    "name": "无印良品 创意笔筒 收纳",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.1,
        "sales": 10982,
        "revenue": 473324
      },
      {
        "platform": "天猫",
        "avgPrice": 43.1,
        "sales": 16812,
        "revenue": 724597
      },
      {
        "platform": "京东",
        "avgPrice": 49.6,
        "sales": 74911,
        "revenue": 3715586
      },
      {
        "platform": "抖音",
        "avgPrice": 43.1,
        "sales": 28058,
        "revenue": 1209300
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.2,
        "sales": 46200,
        "revenue": 1395240
      }
    ]
  },
  {
    "name": "纽赛 木质笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.1,
        "sales": 54338,
        "revenue": 1363884
      },
      {
        "platform": "天猫",
        "avgPrice": 25.1,
        "sales": 55366,
        "revenue": 1389687
      },
      {
        "platform": "京东",
        "avgPrice": 28.9,
        "sales": 59435,
        "revenue": 1717672
      },
      {
        "platform": "抖音",
        "avgPrice": 25.1,
        "sales": 29513,
        "revenue": 740776
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.6,
        "sales": 35073,
        "revenue": 617285
      }
    ]
  },
  {
    "name": "得力 斜插式笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.2,
        "sales": 46574,
        "revenue": 801073
      },
      {
        "platform": "天猫",
        "avgPrice": 17.2,
        "sales": 63612,
        "revenue": 1094126
      },
      {
        "platform": "京东",
        "avgPrice": 19.8,
        "sales": 65170,
        "revenue": 1290366
      },
      {
        "platform": "抖音",
        "avgPrice": 17.2,
        "sales": 57337,
        "revenue": 986196
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 17452,
        "revenue": 209424
      }
    ]
  },
  {
    "name": "无印良品 透明笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.4,
        "sales": 56546,
        "revenue": 814262
      },
      {
        "platform": "天猫",
        "avgPrice": 14.4,
        "sales": 57862,
        "revenue": 833213
      },
      {
        "platform": "京东",
        "avgPrice": 16.6,
        "sales": 39331,
        "revenue": 652895
      },
      {
        "platform": "抖音",
        "avgPrice": 14.4,
        "sales": 57536,
        "revenue": 828518
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.1,
        "sales": 8220,
        "revenue": 83022
      }
    ]
  },
  {
    "name": "得力 磁吸笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 48.2,
        "sales": 25561,
        "revenue": 1232040
      },
      {
        "platform": "天猫",
        "avgPrice": 48.2,
        "sales": 47660,
        "revenue": 2297212
      },
      {
        "platform": "京东",
        "avgPrice": 55.4,
        "sales": 42005,
        "revenue": 2327077
      },
      {
        "platform": "抖音",
        "avgPrice": 48.2,
        "sales": 66975,
        "revenue": 3228195
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.7,
        "sales": 54729,
        "revenue": 1844367
      }
    ]
  },
  {
    "name": "得力 儿童卡通笔筒",
    "category": "笔筒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.7,
        "sales": 62844,
        "revenue": 2746283
      },
      {
        "platform": "天猫",
        "avgPrice": 43.7,
        "sales": 27963,
        "revenue": 1221983
      },
      {
        "platform": "京东",
        "avgPrice": 50.3,
        "sales": 32083,
        "revenue": 1613775
      },
      {
        "platform": "抖音",
        "avgPrice": 43.7,
        "sales": 18967,
        "revenue": 828858
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.6,
        "sales": 43507,
        "revenue": 1331314
      }
    ]
  },
  {
    "name": "宜家 磁吸收纳盒 模块化",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 48.5,
        "sales": 9137,
        "revenue": 443145
      },
      {
        "platform": "天猫",
        "avgPrice": 48.5,
        "sales": 5066,
        "revenue": 245701
      },
      {
        "platform": "京东",
        "avgPrice": 55.8,
        "sales": 50072,
        "revenue": 2794018
      },
      {
        "platform": "抖音",
        "avgPrice": 48.5,
        "sales": 45038,
        "revenue": 2184343
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.9,
        "sales": 25560,
        "revenue": 866484
      }
    ]
  },
  {
    "name": "宜家 亚克力收纳架",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25,
        "sales": 18096,
        "revenue": 452400
      },
      {
        "platform": "天猫",
        "avgPrice": 25,
        "sales": 41711,
        "revenue": 1042775
      },
      {
        "platform": "京东",
        "avgPrice": 28.7,
        "sales": 66195,
        "revenue": 1899797
      },
      {
        "platform": "抖音",
        "avgPrice": 25,
        "sales": 56428,
        "revenue": 1410700
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.5,
        "sales": 26727,
        "revenue": 467723
      }
    ]
  },
  {
    "name": "纳川 旋转收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 47.7,
        "sales": 8890,
        "revenue": 424053
      },
      {
        "platform": "天猫",
        "avgPrice": 47.7,
        "sales": 28491,
        "revenue": 1359021
      },
      {
        "platform": "京东",
        "avgPrice": 54.9,
        "sales": 37998,
        "revenue": 2086090
      },
      {
        "platform": "抖音",
        "avgPrice": 47.7,
        "sales": 24256,
        "revenue": 1157011
      },
      {
        "platform": "拼多多",
        "avgPrice": 33.4,
        "sales": 70783,
        "revenue": 2364152
      }
    ]
  },
  {
    "name": "晨光 可叠加收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 67.4,
        "sales": 53102,
        "revenue": 3579075
      },
      {
        "platform": "天猫",
        "avgPrice": 67.4,
        "sales": 40256,
        "revenue": 2713254
      },
      {
        "platform": "京东",
        "avgPrice": 77.5,
        "sales": 55227,
        "revenue": 4280093
      },
      {
        "platform": "抖音",
        "avgPrice": 67.4,
        "sales": 64260,
        "revenue": 4331124
      },
      {
        "platform": "拼多多",
        "avgPrice": 47.2,
        "sales": 58991,
        "revenue": 2784375
      }
    ]
  },
  {
    "name": "得力 笔筒收纳架",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 60,
        "sales": 16772,
        "revenue": 1006320
      },
      {
        "platform": "天猫",
        "avgPrice": 60,
        "sales": 30984,
        "revenue": 1859040
      },
      {
        "platform": "京东",
        "avgPrice": 69,
        "sales": 70741,
        "revenue": 4881129
      },
      {
        "platform": "抖音",
        "avgPrice": 60,
        "sales": 16711,
        "revenue": 1002660
      },
      {
        "platform": "拼多多",
        "avgPrice": 42,
        "sales": 59947,
        "revenue": 2517774
      }
    ]
  },
  {
    "name": "纳川 资料收纳盒",
    "category": "文具收纳盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 83.4,
        "sales": 63126,
        "revenue": 5264708
      },
      {
        "platform": "天猫",
        "avgPrice": 83.4,
        "sales": 15201,
        "revenue": 1267763
      },
      {
        "platform": "京东",
        "avgPrice": 95.9,
        "sales": 26776,
        "revenue": 2567818
      },
      {
        "platform": "抖音",
        "avgPrice": 83.4,
        "sales": 72381,
        "revenue": 6036575
      },
      {
        "platform": "拼多多",
        "avgPrice": 58.4,
        "sales": 13955,
        "revenue": 814972
      }
    ]
  },
  {
    "name": "纽赛 铁艺收纳架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24.3,
        "sales": 9574,
        "revenue": 232648
      },
      {
        "platform": "天猫",
        "avgPrice": 24.3,
        "sales": 77977,
        "revenue": 1894841
      },
      {
        "platform": "京东",
        "avgPrice": 27.9,
        "sales": 29647,
        "revenue": 827151
      },
      {
        "platform": "抖音",
        "avgPrice": 24.3,
        "sales": 75492,
        "revenue": 1834456
      },
      {
        "platform": "拼多多",
        "avgPrice": 17,
        "sales": 5768,
        "revenue": 98056
      }
    ]
  },
  {
    "name": "晨光 可调节桌面架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 89.7,
        "sales": 63080,
        "revenue": 5658276
      },
      {
        "platform": "天猫",
        "avgPrice": 89.7,
        "sales": 33585,
        "revenue": 3012575
      },
      {
        "platform": "京东",
        "avgPrice": 103.2,
        "sales": 87931,
        "revenue": 9074479
      },
      {
        "platform": "抖音",
        "avgPrice": 89.7,
        "sales": 15817,
        "revenue": 1418785
      },
      {
        "platform": "拼多多",
        "avgPrice": 62.8,
        "sales": 22387,
        "revenue": 1405904
      }
    ]
  },
  {
    "name": "纽赛 桌上小书架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 75,
        "sales": 50371,
        "revenue": 3777825
      },
      {
        "platform": "天猫",
        "avgPrice": 75,
        "sales": 76803,
        "revenue": 5760225
      },
      {
        "platform": "京东",
        "avgPrice": 86.3,
        "sales": 12430,
        "revenue": 1072709
      },
      {
        "platform": "抖音",
        "avgPrice": 75,
        "sales": 74307,
        "revenue": 5573025
      },
      {
        "platform": "拼多多",
        "avgPrice": 52.5,
        "sales": 65581,
        "revenue": 3443003
      }
    ]
  },
  {
    "name": "晨光 杂志收纳架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.6,
        "sales": 59754,
        "revenue": 2605274
      },
      {
        "platform": "天猫",
        "avgPrice": 43.6,
        "sales": 26964,
        "revenue": 1175630
      },
      {
        "platform": "京东",
        "avgPrice": 50.1,
        "sales": 86238,
        "revenue": 4320524
      },
      {
        "platform": "抖音",
        "avgPrice": 43.6,
        "sales": 85591,
        "revenue": 3731768
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.5,
        "sales": 48420,
        "revenue": 1476810
      }
    ]
  },
  {
    "name": "纽赛 显示器增高收纳",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.5,
        "sales": 10028,
        "revenue": 386078
      },
      {
        "platform": "天猫",
        "avgPrice": 38.5,
        "sales": 17116,
        "revenue": 658966
      },
      {
        "platform": "京东",
        "avgPrice": 44.3,
        "sales": 35054,
        "revenue": 1552892
      },
      {
        "platform": "抖音",
        "avgPrice": 38.5,
        "sales": 44062,
        "revenue": 1696387
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.9,
        "sales": 78608,
        "revenue": 2114555
      }
    ]
  },
  {
    "name": "得力 多功能桌面架",
    "category": "桌面收纳架",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 97.6,
        "sales": 76261,
        "revenue": 7443074
      },
      {
        "platform": "天猫",
        "avgPrice": 97.6,
        "sales": 88741,
        "revenue": 8661122
      },
      {
        "platform": "京东",
        "avgPrice": 112.2,
        "sales": 26210,
        "revenue": 2940762
      },
      {
        "platform": "抖音",
        "avgPrice": 97.6,
        "sales": 67580,
        "revenue": 6595808
      },
      {
        "platform": "拼多多",
        "avgPrice": 68.3,
        "sales": 66458,
        "revenue": 4539081
      }
    ]
  },
  {
    "name": "广博 磨砂包书膜",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.2,
        "sales": 27436,
        "revenue": 499335
      },
      {
        "platform": "天猫",
        "avgPrice": 18.2,
        "sales": 182018,
        "revenue": 3312728
      },
      {
        "platform": "京东",
        "avgPrice": 20.9,
        "sales": 236328,
        "revenue": 4939255
      },
      {
        "platform": "抖音",
        "avgPrice": 18.2,
        "sales": 35125,
        "revenue": 639275
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.7,
        "sales": 186772,
        "revenue": 2372004
      }
    ]
  },
  {
    "name": "得力 16K书皮 小学生",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.6,
        "sales": 56701,
        "revenue": 997938
      },
      {
        "platform": "天猫",
        "avgPrice": 17.6,
        "sales": 50845,
        "revenue": 894872
      },
      {
        "platform": "京东",
        "avgPrice": 20.2,
        "sales": 32974,
        "revenue": 666075
      },
      {
        "platform": "抖音",
        "avgPrice": 17.6,
        "sales": 139116,
        "revenue": 2448442
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.3,
        "sales": 39236,
        "revenue": 482603
      }
    ]
  },
  {
    "name": "齐心 包书纸 花色",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 24,
        "sales": 17526,
        "revenue": 420624
      },
      {
        "platform": "天猫",
        "avgPrice": 24,
        "sales": 97482,
        "revenue": 2339568
      },
      {
        "platform": "京东",
        "avgPrice": 27.6,
        "sales": 181933,
        "revenue": 5021351
      },
      {
        "platform": "抖音",
        "avgPrice": 24,
        "sales": 97877,
        "revenue": 2349048
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.8,
        "sales": 129824,
        "revenue": 2181043
      }
    ]
  },
  {
    "name": "广博 自粘书套 免裁剪",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.8,
        "sales": 156726,
        "revenue": 3573353
      },
      {
        "platform": "天猫",
        "avgPrice": 22.8,
        "sales": 19298,
        "revenue": 439994
      },
      {
        "platform": "京东",
        "avgPrice": 26.2,
        "sales": 60231,
        "revenue": 1578052
      },
      {
        "platform": "抖音",
        "avgPrice": 22.8,
        "sales": 26561,
        "revenue": 605591
      },
      {
        "platform": "拼多多",
        "avgPrice": 16,
        "sales": 74793,
        "revenue": 1196688
      }
    ]
  },
  {
    "name": "晨光 透明书皮 加厚",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.2,
        "sales": 239478,
        "revenue": 5316412
      },
      {
        "platform": "天猫",
        "avgPrice": 22.2,
        "sales": 231070,
        "revenue": 5129754
      },
      {
        "platform": "京东",
        "avgPrice": 25.5,
        "sales": 197156,
        "revenue": 5027478
      },
      {
        "platform": "抖音",
        "avgPrice": 22.2,
        "sales": 191771,
        "revenue": 4257316
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.5,
        "sales": 237550,
        "revenue": 3682025
      }
    ]
  },
  {
    "name": "得力 课本书套 防水",
    "category": "书皮/书套",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.8,
        "sales": 214060,
        "revenue": 1241548
      },
      {
        "platform": "天猫",
        "avgPrice": 5.8,
        "sales": 207406,
        "revenue": 1202955
      },
      {
        "platform": "京东",
        "avgPrice": 6.7,
        "sales": 60087,
        "revenue": 402583
      },
      {
        "platform": "抖音",
        "avgPrice": 5.8,
        "sales": 135485,
        "revenue": 785813
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.1,
        "sales": 89072,
        "revenue": 365195
      }
    ]
  },
  {
    "name": "鲁本斯 油画颜料 24色",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 44.6,
        "sales": 5185,
        "revenue": 231251
      },
      {
        "platform": "天猫",
        "avgPrice": 44.6,
        "sales": 29417,
        "revenue": 1311998
      },
      {
        "platform": "京东",
        "avgPrice": 51.3,
        "sales": 30708,
        "revenue": 1575320
      },
      {
        "platform": "抖音",
        "avgPrice": 44.6,
        "sales": 19025,
        "revenue": 848515
      },
      {
        "platform": "拼多多",
        "avgPrice": 31.2,
        "sales": 24012,
        "revenue": 749174
      }
    ]
  },
  {
    "name": "温莎牛顿 水粉颜料 果冻",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 57.3,
        "sales": 34478,
        "revenue": 1975589
      },
      {
        "platform": "天猫",
        "avgPrice": 57.3,
        "sales": 48350,
        "revenue": 2770455
      },
      {
        "platform": "京东",
        "avgPrice": 65.9,
        "sales": 11327,
        "revenue": 746449
      },
      {
        "platform": "抖音",
        "avgPrice": 57.3,
        "sales": 46426,
        "revenue": 2660210
      },
      {
        "platform": "拼多多",
        "avgPrice": 40.1,
        "sales": 49862,
        "revenue": 1999466
      }
    ]
  },
  {
    "name": "鲁本斯 手指画颜料 儿童",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.3,
        "sales": 25794,
        "revenue": 987910
      },
      {
        "platform": "天猫",
        "avgPrice": 38.3,
        "sales": 43247,
        "revenue": 1656360
      },
      {
        "platform": "京东",
        "avgPrice": 44,
        "sales": 18414,
        "revenue": 810216
      },
      {
        "platform": "抖音",
        "avgPrice": 38.3,
        "sales": 44778,
        "revenue": 1714997
      },
      {
        "platform": "拼多多",
        "avgPrice": 26.8,
        "sales": 15353,
        "revenue": 411460
      }
    ]
  },
  {
    "name": "鲁本斯 纺织颜料 手绘",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 69.7,
        "sales": 29317,
        "revenue": 2043395
      },
      {
        "platform": "天猫",
        "avgPrice": 69.7,
        "sales": 39371,
        "revenue": 2744159
      },
      {
        "platform": "京东",
        "avgPrice": 80.2,
        "sales": 23160,
        "revenue": 1857432
      },
      {
        "platform": "抖音",
        "avgPrice": 69.7,
        "sales": 10048,
        "revenue": 700346
      },
      {
        "platform": "拼多多",
        "avgPrice": 48.8,
        "sales": 49774,
        "revenue": 2428971
      }
    ]
  },
  {
    "name": "樱花 颜料画笔套装",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 70.3,
        "sales": 42753,
        "revenue": 3005536
      },
      {
        "platform": "天猫",
        "avgPrice": 70.3,
        "sales": 35493,
        "revenue": 2495158
      },
      {
        "platform": "京东",
        "avgPrice": 80.8,
        "sales": 12066,
        "revenue": 974933
      },
      {
        "platform": "抖音",
        "avgPrice": 70.3,
        "sales": 4961,
        "revenue": 348758
      },
      {
        "platform": "拼多多",
        "avgPrice": 49.2,
        "sales": 4283,
        "revenue": 210724
      }
    ]
  },
  {
    "name": "青竹 固体水彩 便携",
    "category": "美术颜料",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 26.4,
        "sales": 43176,
        "revenue": 1139846
      },
      {
        "platform": "天猫",
        "avgPrice": 26.4,
        "sales": 33655,
        "revenue": 888492
      },
      {
        "platform": "京东",
        "avgPrice": 30.4,
        "sales": 9101,
        "revenue": 276670
      },
      {
        "platform": "抖音",
        "avgPrice": 26.4,
        "sales": 16518,
        "revenue": 436075
      },
      {
        "platform": "拼多多",
        "avgPrice": 18.5,
        "sales": 45570,
        "revenue": 843045
      }
    ]
  },
  {
    "name": "晨光 文件夹 A4双夹",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 51.5,
        "sales": 14648,
        "revenue": 754372
      },
      {
        "platform": "天猫",
        "avgPrice": 51.5,
        "sales": 67289,
        "revenue": 3465384
      },
      {
        "platform": "京东",
        "avgPrice": 59.2,
        "sales": 42449,
        "revenue": 2512981
      },
      {
        "platform": "抖音",
        "avgPrice": 51.5,
        "sales": 93075,
        "revenue": 4793363
      },
      {
        "platform": "拼多多",
        "avgPrice": 36,
        "sales": 32006,
        "revenue": 1152216
      }
    ]
  },
  {
    "name": "齐心 剪刀 安全圆头",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.7,
        "sales": 31850,
        "revenue": 308945
      },
      {
        "platform": "天猫",
        "avgPrice": 9.7,
        "sales": 118593,
        "revenue": 1150352
      },
      {
        "platform": "京东",
        "avgPrice": 11.2,
        "sales": 48179,
        "revenue": 539605
      },
      {
        "platform": "抖音",
        "avgPrice": 9.7,
        "sales": 54084,
        "revenue": 524615
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.8,
        "sales": 134629,
        "revenue": 915477
      }
    ]
  },
  {
    "name": "可得优 胶棒 固体胶",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.8,
        "sales": 144251,
        "revenue": 4154429
      },
      {
        "platform": "天猫",
        "avgPrice": 28.8,
        "sales": 59995,
        "revenue": 1727856
      },
      {
        "platform": "京东",
        "avgPrice": 33.1,
        "sales": 142324,
        "revenue": 4710924
      },
      {
        "platform": "抖音",
        "avgPrice": 28.8,
        "sales": 68940,
        "revenue": 1985472
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.2,
        "sales": 14223,
        "revenue": 287305
      }
    ]
  },
  {
    "name": "广博 双面胶 强力",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.3,
        "sales": 81867,
        "revenue": 597629
      },
      {
        "platform": "天猫",
        "avgPrice": 7.3,
        "sales": 83645,
        "revenue": 610609
      },
      {
        "platform": "京东",
        "avgPrice": 8.4,
        "sales": 102824,
        "revenue": 863722
      },
      {
        "platform": "抖音",
        "avgPrice": 7.3,
        "sales": 44353,
        "revenue": 323777
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.1,
        "sales": 112769,
        "revenue": 575122
      }
    ]
  },
  {
    "name": "齐心 透明胶带 封箱",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.5,
        "sales": 112830,
        "revenue": 1071885
      },
      {
        "platform": "天猫",
        "avgPrice": 9.5,
        "sales": 74316,
        "revenue": 706002
      },
      {
        "platform": "京东",
        "avgPrice": 10.9,
        "sales": 95106,
        "revenue": 1036655
      },
      {
        "platform": "抖音",
        "avgPrice": 9.5,
        "sales": 55704,
        "revenue": 529188
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.6,
        "sales": 24165,
        "revenue": 159489
      }
    ]
  },
  {
    "name": "可得优 美工刀 自动锁",
    "category": "办公文具",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.9,
        "sales": 130620,
        "revenue": 1554378
      },
      {
        "platform": "天猫",
        "avgPrice": 11.9,
        "sales": 77485,
        "revenue": 922072
      },
      {
        "platform": "京东",
        "avgPrice": 13.7,
        "sales": 18554,
        "revenue": 254190
      },
      {
        "platform": "抖音",
        "avgPrice": 11.9,
        "sales": 17820,
        "revenue": 212058
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.3,
        "sales": 78976,
        "revenue": 655501
      }
    ]
  },
  {
    "name": "毕加索 彩笔套装 150件",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 108.7,
        "sales": 4581,
        "revenue": 497955
      },
      {
        "platform": "天猫",
        "avgPrice": 108.7,
        "sales": 15443,
        "revenue": 1678654
      },
      {
        "platform": "京东",
        "avgPrice": 125,
        "sales": 44592,
        "revenue": 5574000
      },
      {
        "platform": "抖音",
        "avgPrice": 108.7,
        "sales": 43025,
        "revenue": 4676818
      },
      {
        "platform": "拼多多",
        "avgPrice": 76.1,
        "sales": 44326,
        "revenue": 3373209
      }
    ]
  },
  {
    "name": "毕加索 文具笔礼盒",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 176.3,
        "sales": 33755,
        "revenue": 5951007
      },
      {
        "platform": "天猫",
        "avgPrice": 176.3,
        "sales": 30712,
        "revenue": 5414526
      },
      {
        "platform": "京东",
        "avgPrice": 202.7,
        "sales": 20792,
        "revenue": 4214538
      },
      {
        "platform": "抖音",
        "avgPrice": 176.3,
        "sales": 36630,
        "revenue": 6457869
      },
      {
        "platform": "拼多多",
        "avgPrice": 123.4,
        "sales": 39891,
        "revenue": 4922549
      }
    ]
  },
  {
    "name": "毕加索 画笔套装 水彩",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 150.7,
        "sales": 23373,
        "revenue": 3522311
      },
      {
        "platform": "天猫",
        "avgPrice": 150.7,
        "sales": 43750,
        "revenue": 6593125
      },
      {
        "platform": "京东",
        "avgPrice": 173.3,
        "sales": 29469,
        "revenue": 5106978
      },
      {
        "platform": "抖音",
        "avgPrice": 150.7,
        "sales": 48182,
        "revenue": 7261027
      },
      {
        "platform": "拼多多",
        "avgPrice": 105.5,
        "sales": 41129,
        "revenue": 4339110
      }
    ]
  },
  {
    "name": "英雄 毛笔套装 书法",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 142.7,
        "sales": 25261,
        "revenue": 3604745
      },
      {
        "platform": "天猫",
        "avgPrice": 142.7,
        "sales": 16393,
        "revenue": 2339281
      },
      {
        "platform": "京东",
        "avgPrice": 164.1,
        "sales": 45389,
        "revenue": 7448335
      },
      {
        "platform": "抖音",
        "avgPrice": 142.7,
        "sales": 19520,
        "revenue": 2785504
      },
      {
        "platform": "拼多多",
        "avgPrice": 99.9,
        "sales": 25405,
        "revenue": 2537960
      }
    ]
  },
  {
    "name": "百乐 签字笔礼盒",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 155.4,
        "sales": 32467,
        "revenue": 5045372
      },
      {
        "platform": "天猫",
        "avgPrice": 155.4,
        "sales": 14051,
        "revenue": 2183525
      },
      {
        "platform": "京东",
        "avgPrice": 178.7,
        "sales": 4337,
        "revenue": 775022
      },
      {
        "platform": "抖音",
        "avgPrice": 155.4,
        "sales": 32175,
        "revenue": 4999995
      },
      {
        "platform": "拼多多",
        "avgPrice": 108.8,
        "sales": 11828,
        "revenue": 1286886
      }
    ]
  },
  {
    "name": "毕加索 学生笔类大礼包",
    "category": "笔类套装/礼盒",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 66.2,
        "sales": 43904,
        "revenue": 2906445
      },
      {
        "platform": "天猫",
        "avgPrice": 66.2,
        "sales": 18002,
        "revenue": 1191732
      },
      {
        "platform": "京东",
        "avgPrice": 76.1,
        "sales": 3268,
        "revenue": 248695
      },
      {
        "platform": "抖音",
        "avgPrice": 66.2,
        "sales": 42361,
        "revenue": 2804298
      },
      {
        "platform": "拼多多",
        "avgPrice": 46.3,
        "sales": 7081,
        "revenue": 327850
      }
    ]
  },
  {
    "name": "kinbor 设计感便签",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 16.8,
        "sales": 4278,
        "revenue": 71870
      },
      {
        "platform": "天猫",
        "avgPrice": 16.8,
        "sales": 8455,
        "revenue": 142044
      },
      {
        "platform": "京东",
        "avgPrice": 19.3,
        "sales": 28034,
        "revenue": 541056
      },
      {
        "platform": "抖音",
        "avgPrice": 16.8,
        "sales": 8025,
        "revenue": 134820
      },
      {
        "platform": "拼多多",
        "avgPrice": 11.8,
        "sales": 30983,
        "revenue": 365599
      }
    ]
  },
  {
    "name": "九木杂物社 创意笔筒 北欧",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 53,
        "sales": 9893,
        "revenue": 524329
      },
      {
        "platform": "天猫",
        "avgPrice": 53,
        "sales": 21893,
        "revenue": 1160329
      },
      {
        "platform": "京东",
        "avgPrice": 60.9,
        "sales": 25524,
        "revenue": 1554412
      },
      {
        "platform": "抖音",
        "avgPrice": 53,
        "sales": 8232,
        "revenue": 436296
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.1,
        "sales": 34906,
        "revenue": 1295013
      }
    ]
  },
  {
    "name": "九木杂物社 手绘明信片套装",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 77,
        "sales": 45663,
        "revenue": 3516051
      },
      {
        "platform": "天猫",
        "avgPrice": 77,
        "sales": 20501,
        "revenue": 1578577
      },
      {
        "platform": "京东",
        "avgPrice": 88.5,
        "sales": 11496,
        "revenue": 1017396
      },
      {
        "platform": "抖音",
        "avgPrice": 77,
        "sales": 26385,
        "revenue": 2031645
      },
      {
        "platform": "拼多多",
        "avgPrice": 53.9,
        "sales": 30517,
        "revenue": 1644866
      }
    ]
  },
  {
    "name": "kinbor 复古文具",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.5,
        "sales": 23233,
        "revenue": 685374
      },
      {
        "platform": "天猫",
        "avgPrice": 29.5,
        "sales": 4904,
        "revenue": 144668
      },
      {
        "platform": "京东",
        "avgPrice": 33.9,
        "sales": 9503,
        "revenue": 322152
      },
      {
        "platform": "抖音",
        "avgPrice": 29.5,
        "sales": 24256,
        "revenue": 715552
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.6,
        "sales": 13221,
        "revenue": 272353
      }
    ]
  },
  {
    "name": "kinbor 国潮文具套装",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 36.9,
        "sales": 27324,
        "revenue": 1008256
      },
      {
        "platform": "天猫",
        "avgPrice": 36.9,
        "sales": 3330,
        "revenue": 122877
      },
      {
        "platform": "京东",
        "avgPrice": 42.4,
        "sales": 23973,
        "revenue": 1016455
      },
      {
        "platform": "抖音",
        "avgPrice": 36.9,
        "sales": 45782,
        "revenue": 1689356
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.8,
        "sales": 15600,
        "revenue": 402480
      }
    ]
  },
  {
    "name": "kinbor 治愈系文具",
    "category": "文创用品",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 30.6,
        "sales": 44268,
        "revenue": 1354601
      },
      {
        "platform": "天猫",
        "avgPrice": 30.6,
        "sales": 10176,
        "revenue": 311386
      },
      {
        "platform": "京东",
        "avgPrice": 35.2,
        "sales": 47352,
        "revenue": 1666790
      },
      {
        "platform": "抖音",
        "avgPrice": 30.6,
        "sales": 31783,
        "revenue": 972560
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.4,
        "sales": 34836,
        "revenue": 745490
      }
    ]
  },
  {
    "name": "得力 幼儿园名字贴",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 69.5,
        "sales": 5653,
        "revenue": 392884
      },
      {
        "platform": "天猫",
        "avgPrice": 69.5,
        "sales": 58191,
        "revenue": 4044275
      },
      {
        "platform": "京东",
        "avgPrice": 79.9,
        "sales": 14508,
        "revenue": 1159189
      },
      {
        "platform": "抖音",
        "avgPrice": 69.5,
        "sales": 24604,
        "revenue": 1709978
      },
      {
        "platform": "拼多多",
        "avgPrice": 48.6,
        "sales": 21788,
        "revenue": 1058897
      }
    ]
  },
  {
    "name": "得力 衣物姓名标",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 40.6,
        "sales": 39962,
        "revenue": 1622457
      },
      {
        "platform": "天猫",
        "avgPrice": 40.6,
        "sales": 16396,
        "revenue": 665678
      },
      {
        "platform": "京东",
        "avgPrice": 46.7,
        "sales": 36686,
        "revenue": 1713236
      },
      {
        "platform": "抖音",
        "avgPrice": 40.6,
        "sales": 32645,
        "revenue": 1325387
      },
      {
        "platform": "拼多多",
        "avgPrice": 28.4,
        "sales": 36289,
        "revenue": 1030608
      }
    ]
  },
  {
    "name": "得力 开学姓名贴 定制",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.5,
        "sales": 25698,
        "revenue": 732393
      },
      {
        "platform": "天猫",
        "avgPrice": 28.5,
        "sales": 53212,
        "revenue": 1516542
      },
      {
        "platform": "京东",
        "avgPrice": 32.8,
        "sales": 48809,
        "revenue": 1600935
      },
      {
        "platform": "抖音",
        "avgPrice": 28.5,
        "sales": 6374,
        "revenue": 181659
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.9,
        "sales": 24462,
        "revenue": 486794
      }
    ]
  },
  {
    "name": "雅柯莱 烫印姓名贴",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 85.6,
        "sales": 25997,
        "revenue": 2225343
      },
      {
        "platform": "天猫",
        "avgPrice": 85.6,
        "sales": 48681,
        "revenue": 4167094
      },
      {
        "platform": "京东",
        "avgPrice": 98.4,
        "sales": 25303,
        "revenue": 2489815
      },
      {
        "platform": "抖音",
        "avgPrice": 85.6,
        "sales": 35193,
        "revenue": 3012521
      },
      {
        "platform": "拼多多",
        "avgPrice": 59.9,
        "sales": 57681,
        "revenue": 3455092
      }
    ]
  },
  {
    "name": "兄弟 硅胶姓名扣",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 98.8,
        "sales": 27150,
        "revenue": 2682420
      },
      {
        "platform": "天猫",
        "avgPrice": 98.8,
        "sales": 47730,
        "revenue": 4715724
      },
      {
        "platform": "京东",
        "avgPrice": 113.6,
        "sales": 52452,
        "revenue": 5958547
      },
      {
        "platform": "抖音",
        "avgPrice": 98.8,
        "sales": 15587,
        "revenue": 1539996
      },
      {
        "platform": "拼多多",
        "avgPrice": 69.2,
        "sales": 23834,
        "revenue": 1649313
      }
    ]
  },
  {
    "name": "兄弟 校服姓名标签",
    "category": "姓名贴",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.6,
        "sales": 53662,
        "revenue": 2071353
      },
      {
        "platform": "天猫",
        "avgPrice": 38.6,
        "sales": 59232,
        "revenue": 2286355
      },
      {
        "platform": "京东",
        "avgPrice": 44.4,
        "sales": 53429,
        "revenue": 2372248
      },
      {
        "platform": "抖音",
        "avgPrice": 38.6,
        "sales": 25997,
        "revenue": 1003484
      },
      {
        "platform": "拼多多",
        "avgPrice": 27,
        "sales": 19369,
        "revenue": 522963
      }
    ]
  },
  {
    "name": "DIY乐园 咕卡贴纸 闪钻",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.6,
        "sales": 5511,
        "revenue": 130060
      },
      {
        "platform": "天猫",
        "avgPrice": 23.6,
        "sales": 62222,
        "revenue": 1468439
      },
      {
        "platform": "京东",
        "avgPrice": 27.1,
        "sales": 62877,
        "revenue": 1703967
      },
      {
        "platform": "抖音",
        "avgPrice": 23.6,
        "sales": 48038,
        "revenue": 1133697
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.5,
        "sales": 6446,
        "revenue": 106359
      }
    ]
  },
  {
    "name": "拼豆世界 拼豆豆 补充装",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.1,
        "sales": 13754,
        "revenue": 207685
      },
      {
        "platform": "天猫",
        "avgPrice": 15.1,
        "sales": 6382,
        "revenue": 96368
      },
      {
        "platform": "京东",
        "avgPrice": 17.4,
        "sales": 52484,
        "revenue": 913222
      },
      {
        "platform": "抖音",
        "avgPrice": 15.1,
        "sales": 68156,
        "revenue": 1029156
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.6,
        "sales": 37402,
        "revenue": 396461
      }
    ]
  },
  {
    "name": "拼豆世界 迷你咕卡材料包",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 33.5,
        "sales": 64862,
        "revenue": 2172877
      },
      {
        "platform": "天猫",
        "avgPrice": 33.5,
        "sales": 31504,
        "revenue": 1055384
      },
      {
        "platform": "京东",
        "avgPrice": 38.5,
        "sales": 33826,
        "revenue": 1302301
      },
      {
        "platform": "抖音",
        "avgPrice": 33.5,
        "sales": 44684,
        "revenue": 1496914
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.4,
        "sales": 13939,
        "revenue": 326173
      }
    ]
  },
  {
    "name": "拼豆世界 拼豆镊子工具",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.8,
        "sales": 28764,
        "revenue": 914695
      },
      {
        "platform": "天猫",
        "avgPrice": 31.8,
        "sales": 43389,
        "revenue": 1379770
      },
      {
        "platform": "京东",
        "avgPrice": 36.6,
        "sales": 47597,
        "revenue": 1742050
      },
      {
        "platform": "抖音",
        "avgPrice": 31.8,
        "sales": 50592,
        "revenue": 1608826
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.3,
        "sales": 53778,
        "revenue": 1199249
      }
    ]
  },
  {
    "name": "DIY乐园 咕卡底卡 透明",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 40.6,
        "sales": 25557,
        "revenue": 1037614
      },
      {
        "platform": "天猫",
        "avgPrice": 40.6,
        "sales": 43332,
        "revenue": 1759279
      },
      {
        "platform": "京东",
        "avgPrice": 46.7,
        "sales": 24365,
        "revenue": 1137846
      },
      {
        "platform": "抖音",
        "avgPrice": 40.6,
        "sales": 38994,
        "revenue": 1583156
      },
      {
        "platform": "拼多多",
        "avgPrice": 28.4,
        "sales": 34718,
        "revenue": 985991
      }
    ]
  },
  {
    "name": "手工达人 拼豆挂件材料",
    "category": "拼豆/咕卡套装",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.3,
        "sales": 67495,
        "revenue": 1977604
      },
      {
        "platform": "天猫",
        "avgPrice": 29.3,
        "sales": 62284,
        "revenue": 1824921
      },
      {
        "platform": "京东",
        "avgPrice": 33.7,
        "sales": 62278,
        "revenue": 2098769
      },
      {
        "platform": "抖音",
        "avgPrice": 29.3,
        "sales": 15939,
        "revenue": 467013
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.5,
        "sales": 65021,
        "revenue": 1332931
      }
    ]
  },
  {
    "name": "晨光 儿童彩色铅笔 24色",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 114.7,
        "sales": 4939,
        "revenue": 566503
      },
      {
        "platform": "天猫",
        "avgPrice": 114.7,
        "sales": 41690,
        "revenue": 4781843
      },
      {
        "platform": "京东",
        "avgPrice": 131.9,
        "sales": 30903,
        "revenue": 4076106
      },
      {
        "platform": "抖音",
        "avgPrice": 114.7,
        "sales": 52945,
        "revenue": 6072792
      },
      {
        "platform": "拼多多",
        "avgPrice": 80.3,
        "sales": 45776,
        "revenue": 3675813
      }
    ]
  },
  {
    "name": "晨光 彩铅画本套装",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 111.2,
        "sales": 39108,
        "revenue": 4348810
      },
      {
        "platform": "天猫",
        "avgPrice": 111.2,
        "sales": 51068,
        "revenue": 5678762
      },
      {
        "platform": "京东",
        "avgPrice": 127.9,
        "sales": 47862,
        "revenue": 6121550
      },
      {
        "platform": "抖音",
        "avgPrice": 111.2,
        "sales": 21078,
        "revenue": 2343874
      },
      {
        "platform": "拼多多",
        "avgPrice": 77.8,
        "sales": 24515,
        "revenue": 1907267
      }
    ]
  },
  {
    "name": "晨光 金属色彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 98,
        "sales": 22839,
        "revenue": 2238222
      },
      {
        "platform": "天猫",
        "avgPrice": 98,
        "sales": 53805,
        "revenue": 5272890
      },
      {
        "platform": "京东",
        "avgPrice": 112.7,
        "sales": 6363,
        "revenue": 717110
      },
      {
        "platform": "抖音",
        "avgPrice": 98,
        "sales": 10394,
        "revenue": 1018612
      },
      {
        "platform": "拼多多",
        "avgPrice": 68.6,
        "sales": 54900,
        "revenue": 3766140
      }
    ]
  },
  {
    "name": "得力 马克雷诺彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.3,
        "sales": 21207,
        "revenue": 409295
      },
      {
        "platform": "天猫",
        "avgPrice": 19.3,
        "sales": 21548,
        "revenue": 415876
      },
      {
        "platform": "京东",
        "avgPrice": 22.2,
        "sales": 51551,
        "revenue": 1144432
      },
      {
        "platform": "抖音",
        "avgPrice": 19.3,
        "sales": 46378,
        "revenue": 895095
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.5,
        "sales": 28905,
        "revenue": 390218
      }
    ]
  },
  {
    "name": "MARCO 素描彩铅",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 43.6,
        "sales": 15004,
        "revenue": 654174
      },
      {
        "platform": "天猫",
        "avgPrice": 43.6,
        "sales": 22410,
        "revenue": 977076
      },
      {
        "platform": "京东",
        "avgPrice": 50.1,
        "sales": 43325,
        "revenue": 2170583
      },
      {
        "platform": "抖音",
        "avgPrice": 43.6,
        "sales": 47722,
        "revenue": 2080679
      },
      {
        "platform": "拼多多",
        "avgPrice": 30.5,
        "sales": 32744,
        "revenue": 998692
      }
    ]
  },
  {
    "name": "晨光 彩铅收纳笔帘",
    "category": "彩色铅笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 66.4,
        "sales": 54522,
        "revenue": 3620261
      },
      {
        "platform": "天猫",
        "avgPrice": 66.4,
        "sales": 40748,
        "revenue": 2705667
      },
      {
        "platform": "京东",
        "avgPrice": 76.4,
        "sales": 46541,
        "revenue": 3555732
      },
      {
        "platform": "抖音",
        "avgPrice": 66.4,
        "sales": 56514,
        "revenue": 3752530
      },
      {
        "platform": "拼多多",
        "avgPrice": 46.5,
        "sales": 29419,
        "revenue": 1367984
      }
    ]
  },
  {
    "name": "晨光 液体粉笔 无尘",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.6,
        "sales": 6125,
        "revenue": 120050
      },
      {
        "platform": "天猫",
        "avgPrice": 19.6,
        "sales": 49800,
        "revenue": 976080
      },
      {
        "platform": "京东",
        "avgPrice": 22.5,
        "sales": 16369,
        "revenue": 368303
      },
      {
        "platform": "抖音",
        "avgPrice": 19.6,
        "sales": 16769,
        "revenue": 328672
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.7,
        "sales": 44625,
        "revenue": 611363
      }
    ]
  },
  {
    "name": "齐心 白板笔 大容量",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.9,
        "sales": 15732,
        "revenue": 360263
      },
      {
        "platform": "天猫",
        "avgPrice": 22.9,
        "sales": 60719,
        "revenue": 1390465
      },
      {
        "platform": "京东",
        "avgPrice": 26.3,
        "sales": 80088,
        "revenue": 2106314
      },
      {
        "platform": "抖音",
        "avgPrice": 22.9,
        "sales": 64338,
        "revenue": 1473340
      },
      {
        "platform": "拼多多",
        "avgPrice": 16,
        "sales": 27382,
        "revenue": 438112
      }
    ]
  },
  {
    "name": "真彩 白板擦+笔套装",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 34.7,
        "sales": 73593,
        "revenue": 2553677
      },
      {
        "platform": "天猫",
        "avgPrice": 34.7,
        "sales": 39073,
        "revenue": 1355833
      },
      {
        "platform": "京东",
        "avgPrice": 39.9,
        "sales": 60699,
        "revenue": 2421890
      },
      {
        "platform": "抖音",
        "avgPrice": 34.7,
        "sales": 59963,
        "revenue": 2080716
      },
      {
        "platform": "拼多多",
        "avgPrice": 24.3,
        "sales": 63314,
        "revenue": 1538530
      }
    ]
  },
  {
    "name": "白雪 磁吸白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.9,
        "sales": 27661,
        "revenue": 661098
      },
      {
        "platform": "天猫",
        "avgPrice": 23.9,
        "sales": 11269,
        "revenue": 269329
      },
      {
        "platform": "京东",
        "avgPrice": 27.5,
        "sales": 13076,
        "revenue": 359590
      },
      {
        "platform": "抖音",
        "avgPrice": 23.9,
        "sales": 77847,
        "revenue": 1860543
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 21161,
        "revenue": 353389
      }
    ]
  },
  {
    "name": "齐心 环保白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.4,
        "sales": 12706,
        "revenue": 398968
      },
      {
        "platform": "天猫",
        "avgPrice": 31.4,
        "sales": 13946,
        "revenue": 437904
      },
      {
        "platform": "京东",
        "avgPrice": 36.1,
        "sales": 15855,
        "revenue": 572366
      },
      {
        "platform": "抖音",
        "avgPrice": 31.4,
        "sales": 11736,
        "revenue": 368510
      },
      {
        "platform": "拼多多",
        "avgPrice": 22,
        "sales": 55489,
        "revenue": 1220758
      }
    ]
  },
  {
    "name": "白雪 速干白板笔",
    "category": "白板笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.4,
        "sales": 82359,
        "revenue": 1680124
      },
      {
        "platform": "天猫",
        "avgPrice": 20.4,
        "sales": 46874,
        "revenue": 956230
      },
      {
        "platform": "京东",
        "avgPrice": 23.5,
        "sales": 64417,
        "revenue": 1513800
      },
      {
        "platform": "抖音",
        "avgPrice": 20.4,
        "sales": 65817,
        "revenue": 1342667
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.3,
        "sales": 9321,
        "revenue": 133290
      }
    ]
  },
  {
    "name": "三木 考试专用透明袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.9,
        "sales": 248838,
        "revenue": 1219306
      },
      {
        "platform": "天猫",
        "avgPrice": 4.9,
        "sales": 102602,
        "revenue": 502750
      },
      {
        "platform": "京东",
        "avgPrice": 5.6,
        "sales": 196219,
        "revenue": 1098826
      },
      {
        "platform": "抖音",
        "avgPrice": 4.9,
        "sales": 105126,
        "revenue": 515117
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.4,
        "sales": 56345,
        "revenue": 191573
      }
    ]
  },
  {
    "name": "齐心 双层拉链袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.6,
        "sales": 157918,
        "revenue": 1673931
      },
      {
        "platform": "天猫",
        "avgPrice": 10.6,
        "sales": 123988,
        "revenue": 1314273
      },
      {
        "platform": "京东",
        "avgPrice": 12.2,
        "sales": 245930,
        "revenue": 3000346
      },
      {
        "platform": "抖音",
        "avgPrice": 10.6,
        "sales": 36220,
        "revenue": 383932
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.4,
        "sales": 49893,
        "revenue": 369208
      }
    ]
  },
  {
    "name": "三木 防水资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.4,
        "sales": 80546,
        "revenue": 676586
      },
      {
        "platform": "天猫",
        "avgPrice": 8.4,
        "sales": 226280,
        "revenue": 1900752
      },
      {
        "platform": "京东",
        "avgPrice": 9.7,
        "sales": 78164,
        "revenue": 758191
      },
      {
        "platform": "抖音",
        "avgPrice": 8.4,
        "sales": 56980,
        "revenue": 478632
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.9,
        "sales": 122284,
        "revenue": 721476
      }
    ]
  },
  {
    "name": "晨光 A5文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7.9,
        "sales": 65459,
        "revenue": 517126
      },
      {
        "platform": "天猫",
        "avgPrice": 7.9,
        "sales": 207295,
        "revenue": 1637631
      },
      {
        "platform": "京东",
        "avgPrice": 9.1,
        "sales": 90368,
        "revenue": 822349
      },
      {
        "platform": "抖音",
        "avgPrice": 7.9,
        "sales": 239680,
        "revenue": 1893472
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.5,
        "sales": 231492,
        "revenue": 1273206
      }
    ]
  },
  {
    "name": "得力 彩色分类文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.2,
        "sales": 243047,
        "revenue": 3451267
      },
      {
        "platform": "天猫",
        "avgPrice": 14.2,
        "sales": 218625,
        "revenue": 3104475
      },
      {
        "platform": "京东",
        "avgPrice": 16.3,
        "sales": 140746,
        "revenue": 2294160
      },
      {
        "platform": "抖音",
        "avgPrice": 14.2,
        "sales": 99083,
        "revenue": 1406979
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.9,
        "sales": 172316,
        "revenue": 1705928
      }
    ]
  },
  {
    "name": "晨光 牛津布资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.6,
        "sales": 230444,
        "revenue": 3594926
      },
      {
        "platform": "天猫",
        "avgPrice": 15.6,
        "sales": 90219,
        "revenue": 1407416
      },
      {
        "platform": "京东",
        "avgPrice": 17.9,
        "sales": 163846,
        "revenue": 2932843
      },
      {
        "platform": "抖音",
        "avgPrice": 15.6,
        "sales": 129453,
        "revenue": 2019467
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.9,
        "sales": 163069,
        "revenue": 1777452
      }
    ]
  },
  {
    "name": "国誉 双行修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13.4,
        "sales": 173146,
        "revenue": 2320156
      },
      {
        "platform": "天猫",
        "avgPrice": 13.4,
        "sales": 48531,
        "revenue": 650315
      },
      {
        "platform": "京东",
        "avgPrice": 15.4,
        "sales": 80272,
        "revenue": 1236189
      },
      {
        "platform": "抖音",
        "avgPrice": 13.4,
        "sales": 116130,
        "revenue": 1556142
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.4,
        "sales": 157403,
        "revenue": 1479588
      }
    ]
  },
  {
    "name": "PLUS 透明修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.3,
        "sales": 28376,
        "revenue": 122017
      },
      {
        "platform": "天猫",
        "avgPrice": 4.3,
        "sales": 57011,
        "revenue": 245147
      },
      {
        "platform": "京东",
        "avgPrice": 4.9,
        "sales": 25589,
        "revenue": 125386
      },
      {
        "platform": "抖音",
        "avgPrice": 4.3,
        "sales": 91233,
        "revenue": 392302
      },
      {
        "platform": "拼多多",
        "avgPrice": 3,
        "sales": 18912,
        "revenue": 56736
      }
    ]
  },
  {
    "name": "晨光 学生修正带套装",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.5,
        "sales": 134765,
        "revenue": 1415033
      },
      {
        "platform": "天猫",
        "avgPrice": 10.5,
        "sales": 77918,
        "revenue": 818139
      },
      {
        "platform": "京东",
        "avgPrice": 12.1,
        "sales": 156481,
        "revenue": 1893420
      },
      {
        "platform": "抖音",
        "avgPrice": 10.5,
        "sales": 128522,
        "revenue": 1349481
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.3,
        "sales": 49610,
        "revenue": 362153
      }
    ]
  },
  {
    "name": "得力 创意修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.2,
        "sales": 39965,
        "revenue": 607468
      },
      {
        "platform": "天猫",
        "avgPrice": 15.2,
        "sales": 105534,
        "revenue": 1604117
      },
      {
        "platform": "京东",
        "avgPrice": 17.5,
        "sales": 102821,
        "revenue": 1799368
      },
      {
        "platform": "抖音",
        "avgPrice": 15.2,
        "sales": 21267,
        "revenue": 323258
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.6,
        "sales": 119906,
        "revenue": 1271004
      }
    ]
  },
  {
    "name": "晨光 修正带替芯 3个",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5,
        "sales": 152342,
        "revenue": 761710
      },
      {
        "platform": "天猫",
        "avgPrice": 5,
        "sales": 116056,
        "revenue": 580280
      },
      {
        "platform": "京东",
        "avgPrice": 5.8,
        "sales": 167317,
        "revenue": 970439
      },
      {
        "platform": "抖音",
        "avgPrice": 5,
        "sales": 117511,
        "revenue": 587555
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.5,
        "sales": 134200,
        "revenue": 469700
      }
    ]
  },
  {
    "name": "PLUS 宽幅修正带",
    "category": "修正带",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12.5,
        "sales": 162698,
        "revenue": 2033725
      },
      {
        "platform": "天猫",
        "avgPrice": 12.5,
        "sales": 37030,
        "revenue": 462875
      },
      {
        "platform": "京东",
        "avgPrice": 14.4,
        "sales": 105127,
        "revenue": 1513829
      },
      {
        "platform": "抖音",
        "avgPrice": 12.5,
        "sales": 54699,
        "revenue": 683738
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.8,
        "sales": 47962,
        "revenue": 422066
      }
    ]
  },
  {
    "name": "百乐 明尖钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 69.3,
        "sales": 39341,
        "revenue": 2726331
      },
      {
        "platform": "天猫",
        "avgPrice": 69.3,
        "sales": 5792,
        "revenue": 401386
      },
      {
        "platform": "京东",
        "avgPrice": 79.7,
        "sales": 5462,
        "revenue": 435321
      },
      {
        "platform": "抖音",
        "avgPrice": 69.3,
        "sales": 36084,
        "revenue": 2500621
      },
      {
        "platform": "拼多多",
        "avgPrice": 48.5,
        "sales": 25502,
        "revenue": 1236847
      }
    ]
  },
  {
    "name": "派克 EF尖钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 168.7,
        "sales": 24932,
        "revenue": 4206028
      },
      {
        "platform": "天猫",
        "avgPrice": 168.7,
        "sales": 6275,
        "revenue": 1058593
      },
      {
        "platform": "京东",
        "avgPrice": 194,
        "sales": 9810,
        "revenue": 1903140
      },
      {
        "platform": "抖音",
        "avgPrice": 168.7,
        "sales": 35630,
        "revenue": 6010781
      },
      {
        "platform": "拼多多",
        "avgPrice": 118.1,
        "sales": 37644,
        "revenue": 4445756
      }
    ]
  },
  {
    "name": "百乐 透明示范钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 153.6,
        "sales": 11414,
        "revenue": 1753190
      },
      {
        "platform": "天猫",
        "avgPrice": 153.6,
        "sales": 36661,
        "revenue": 5631130
      },
      {
        "platform": "京东",
        "avgPrice": 176.6,
        "sales": 21648,
        "revenue": 3823037
      },
      {
        "platform": "抖音",
        "avgPrice": 153.6,
        "sales": 12290,
        "revenue": 1887744
      },
      {
        "platform": "拼多多",
        "avgPrice": 107.5,
        "sales": 3183,
        "revenue": 342173
      }
    ]
  },
  {
    "name": "百乐 旋转吸墨钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 89.8,
        "sales": 7751,
        "revenue": 696040
      },
      {
        "platform": "天猫",
        "avgPrice": 89.8,
        "sales": 15187,
        "revenue": 1363793
      },
      {
        "platform": "京东",
        "avgPrice": 103.3,
        "sales": 32365,
        "revenue": 3343305
      },
      {
        "platform": "抖音",
        "avgPrice": 89.8,
        "sales": 8832,
        "revenue": 793114
      },
      {
        "platform": "拼多多",
        "avgPrice": 62.9,
        "sales": 17902,
        "revenue": 1126036
      }
    ]
  },
  {
    "name": "百乐 速写钢笔",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 155.2,
        "sales": 30808,
        "revenue": 4781402
      },
      {
        "platform": "天猫",
        "avgPrice": 155.2,
        "sales": 18180,
        "revenue": 2821536
      },
      {
        "platform": "京东",
        "avgPrice": 178.5,
        "sales": 16714,
        "revenue": 2983449
      },
      {
        "platform": "抖音",
        "avgPrice": 155.2,
        "sales": 37662,
        "revenue": 5845142
      },
      {
        "platform": "拼多多",
        "avgPrice": 108.6,
        "sales": 33709,
        "revenue": 3660797
      }
    ]
  },
  {
    "name": "凌美 钢笔套装 含墨囊",
    "category": "钢笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 142.1,
        "sales": 37494,
        "revenue": 5327897
      },
      {
        "platform": "天猫",
        "avgPrice": 142.1,
        "sales": 39521,
        "revenue": 5615934
      },
      {
        "platform": "京东",
        "avgPrice": 163.4,
        "sales": 21843,
        "revenue": 3569146
      },
      {
        "platform": "抖音",
        "avgPrice": 142.1,
        "sales": 4365,
        "revenue": 620267
      },
      {
        "platform": "拼多多",
        "avgPrice": 99.5,
        "sales": 33013,
        "revenue": 3284794
      }
    ]
  },
  {
    "name": "获多福 油画纸 亚麻",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 61.9,
        "sales": 73291,
        "revenue": 4536713
      },
      {
        "platform": "天猫",
        "avgPrice": 61.9,
        "sales": 69839,
        "revenue": 4323034
      },
      {
        "platform": "京东",
        "avgPrice": 71.2,
        "sales": 54855,
        "revenue": 3905676
      },
      {
        "platform": "抖音",
        "avgPrice": 61.9,
        "sales": 15038,
        "revenue": 930852
      },
      {
        "platform": "拼多多",
        "avgPrice": 43.3,
        "sales": 27361,
        "revenue": 1184731
      }
    ]
  },
  {
    "name": "获多福 马克笔专用纸",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 42.9,
        "sales": 10497,
        "revenue": 450321
      },
      {
        "platform": "天猫",
        "avgPrice": 42.9,
        "sales": 68011,
        "revenue": 2917672
      },
      {
        "platform": "京东",
        "avgPrice": 49.3,
        "sales": 24575,
        "revenue": 1211548
      },
      {
        "platform": "抖音",
        "avgPrice": 42.9,
        "sales": 24076,
        "revenue": 1032860
      },
      {
        "platform": "拼多多",
        "avgPrice": 30,
        "sales": 63034,
        "revenue": 1891020
      }
    ]
  },
  {
    "name": "康颂 彩铅纸 细纹",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.5,
        "sales": 53966,
        "revenue": 458711
      },
      {
        "platform": "天猫",
        "avgPrice": 8.5,
        "sales": 33764,
        "revenue": 286994
      },
      {
        "platform": "京东",
        "avgPrice": 9.8,
        "sales": 13072,
        "revenue": 128106
      },
      {
        "platform": "抖音",
        "avgPrice": 8.5,
        "sales": 60004,
        "revenue": 510034
      },
      {
        "platform": "拼多多",
        "avgPrice": 5.9,
        "sales": 59431,
        "revenue": 350643
      }
    ]
  },
  {
    "name": "康颂 儿童画本 空白",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 67.9,
        "sales": 10511,
        "revenue": 713697
      },
      {
        "platform": "天猫",
        "avgPrice": 67.9,
        "sales": 10488,
        "revenue": 712135
      },
      {
        "platform": "京东",
        "avgPrice": 78.1,
        "sales": 6624,
        "revenue": 517334
      },
      {
        "platform": "抖音",
        "avgPrice": 67.9,
        "sales": 22716,
        "revenue": 1542416
      },
      {
        "platform": "拼多多",
        "avgPrice": 47.5,
        "sales": 14618,
        "revenue": 694355
      }
    ]
  },
  {
    "name": "康颂 绘画本 A3",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.3,
        "sales": 49771,
        "revenue": 1557832
      },
      {
        "platform": "天猫",
        "avgPrice": 31.3,
        "sales": 17343,
        "revenue": 542836
      },
      {
        "platform": "京东",
        "avgPrice": 36,
        "sales": 60083,
        "revenue": 2162988
      },
      {
        "platform": "抖音",
        "avgPrice": 31.3,
        "sales": 20456,
        "revenue": 640273
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.9,
        "sales": 68671,
        "revenue": 1503895
      }
    ]
  },
  {
    "name": "康颂 牛皮纸画本",
    "category": "画纸/画本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 53,
        "sales": 70772,
        "revenue": 3750916
      },
      {
        "platform": "天猫",
        "avgPrice": 53,
        "sales": 62347,
        "revenue": 3304391
      },
      {
        "platform": "京东",
        "avgPrice": 60.9,
        "sales": 36030,
        "revenue": 2194227
      },
      {
        "platform": "抖音",
        "avgPrice": 53,
        "sales": 61733,
        "revenue": 3271849
      },
      {
        "platform": "拼多多",
        "avgPrice": 37.1,
        "sales": 32820,
        "revenue": 1217622
      }
    ]
  },
  {
    "name": "齐心 502胶水",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.5,
        "sales": 145676,
        "revenue": 2257978
      },
      {
        "platform": "天猫",
        "avgPrice": 15.5,
        "sales": 118717,
        "revenue": 1840114
      },
      {
        "platform": "京东",
        "avgPrice": 17.8,
        "sales": 60036,
        "revenue": 1068641
      },
      {
        "platform": "抖音",
        "avgPrice": 15.5,
        "sales": 66076,
        "revenue": 1024178
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.8,
        "sales": 14693,
        "revenue": 158684
      }
    ]
  },
  {
    "name": "得力 学生胶水 安全",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 10.9,
        "sales": 90409,
        "revenue": 985458
      },
      {
        "platform": "天猫",
        "avgPrice": 10.9,
        "sales": 109564,
        "revenue": 1194248
      },
      {
        "platform": "京东",
        "avgPrice": 12.5,
        "sales": 63347,
        "revenue": 791838
      },
      {
        "platform": "抖音",
        "avgPrice": 10.9,
        "sales": 103960,
        "revenue": 1133164
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.6,
        "sales": 111111,
        "revenue": 844444
      }
    ]
  },
  {
    "name": "UHU 胶棒 36g 可水洗",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.1,
        "sales": 33800,
        "revenue": 307580
      },
      {
        "platform": "天猫",
        "avgPrice": 9.1,
        "sales": 138781,
        "revenue": 1262907
      },
      {
        "platform": "京东",
        "avgPrice": 10.5,
        "sales": 113227,
        "revenue": 1188884
      },
      {
        "platform": "抖音",
        "avgPrice": 9.1,
        "sales": 54616,
        "revenue": 497006
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.4,
        "sales": 87026,
        "revenue": 556966
      }
    ]
  },
  {
    "name": "晨光 万能胶",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18,
        "sales": 14937,
        "revenue": 268866
      },
      {
        "platform": "天猫",
        "avgPrice": 18,
        "sales": 127509,
        "revenue": 2295162
      },
      {
        "platform": "京东",
        "avgPrice": 20.7,
        "sales": 46590,
        "revenue": 964413
      },
      {
        "platform": "抖音",
        "avgPrice": 18,
        "sales": 59640,
        "revenue": 1073520
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.6,
        "sales": 133682,
        "revenue": 1684393
      }
    ]
  },
  {
    "name": "晨光 热熔胶枪",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 2.4,
        "sales": 84114,
        "revenue": 201874
      },
      {
        "platform": "天猫",
        "avgPrice": 2.4,
        "sales": 143523,
        "revenue": 344455
      },
      {
        "platform": "京东",
        "avgPrice": 2.8,
        "sales": 38072,
        "revenue": 106602
      },
      {
        "platform": "抖音",
        "avgPrice": 2.4,
        "sales": 81733,
        "revenue": 196159
      },
      {
        "platform": "拼多多",
        "avgPrice": 1.7,
        "sales": 148660,
        "revenue": 252722
      }
    ]
  },
  {
    "name": "晨光 双面胶点 替芯",
    "category": "胶水",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.8,
        "sales": 142636,
        "revenue": 3394737
      },
      {
        "platform": "天猫",
        "avgPrice": 23.8,
        "sales": 101214,
        "revenue": 2408893
      },
      {
        "platform": "京东",
        "avgPrice": 27.4,
        "sales": 63310,
        "revenue": 1734694
      },
      {
        "platform": "抖音",
        "avgPrice": 23.8,
        "sales": 91730,
        "revenue": 2183174
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.7,
        "sales": 148907,
        "revenue": 2486747
      }
    ]
  },
  {
    "name": "百乐 红色笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 5.3,
        "sales": 193138,
        "revenue": 1023631
      },
      {
        "platform": "天猫",
        "avgPrice": 5.3,
        "sales": 131453,
        "revenue": 696701
      },
      {
        "platform": "京东",
        "avgPrice": 6.1,
        "sales": 16787,
        "revenue": 102401
      },
      {
        "platform": "抖音",
        "avgPrice": 5.3,
        "sales": 137121,
        "revenue": 726741
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.7,
        "sales": 154950,
        "revenue": 573315
      }
    ]
  },
  {
    "name": "斑马 蓝色笔芯 子弹头",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 4.6,
        "sales": 27889,
        "revenue": 128289
      },
      {
        "platform": "天猫",
        "avgPrice": 4.6,
        "sales": 112233,
        "revenue": 516272
      },
      {
        "platform": "京东",
        "avgPrice": 5.3,
        "sales": 104933,
        "revenue": 556145
      },
      {
        "platform": "抖音",
        "avgPrice": 4.6,
        "sales": 27815,
        "revenue": 127949
      },
      {
        "platform": "拼多多",
        "avgPrice": 3.2,
        "sales": 129352,
        "revenue": 413926
      }
    ]
  },
  {
    "name": "真彩 笔芯0.38mm 细",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 14.4,
        "sales": 135273,
        "revenue": 1947931
      },
      {
        "platform": "天猫",
        "avgPrice": 14.4,
        "sales": 93768,
        "revenue": 1350259
      },
      {
        "platform": "京东",
        "avgPrice": 16.6,
        "sales": 81008,
        "revenue": 1344733
      },
      {
        "platform": "抖音",
        "avgPrice": 14.4,
        "sales": 174051,
        "revenue": 2506334
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.1,
        "sales": 75604,
        "revenue": 763600
      }
    ]
  },
  {
    "name": "百乐 速干笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 7,
        "sales": 199807,
        "revenue": 1398649
      },
      {
        "platform": "天猫",
        "avgPrice": 7,
        "sales": 125268,
        "revenue": 876876
      },
      {
        "platform": "京东",
        "avgPrice": 8,
        "sales": 108068,
        "revenue": 864544
      },
      {
        "platform": "抖音",
        "avgPrice": 7,
        "sales": 100084,
        "revenue": 700588
      },
      {
        "platform": "拼多多",
        "avgPrice": 4.9,
        "sales": 130629,
        "revenue": 640082
      }
    ]
  },
  {
    "name": "斑马 子弹头笔芯 100支",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.2,
        "sales": 93310,
        "revenue": 1604932
      },
      {
        "platform": "天猫",
        "avgPrice": 17.2,
        "sales": 149302,
        "revenue": 2567994
      },
      {
        "platform": "京东",
        "avgPrice": 19.8,
        "sales": 130432,
        "revenue": 2582554
      },
      {
        "platform": "抖音",
        "avgPrice": 17.2,
        "sales": 163989,
        "revenue": 2820611
      },
      {
        "platform": "拼多多",
        "avgPrice": 12,
        "sales": 28091,
        "revenue": 337092
      }
    ]
  },
  {
    "name": "百乐 针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 22.1,
        "sales": 191771,
        "revenue": 4238139
      },
      {
        "platform": "天猫",
        "avgPrice": 22.1,
        "sales": 105185,
        "revenue": 2324589
      },
      {
        "platform": "京东",
        "avgPrice": 25.4,
        "sales": 74778,
        "revenue": 1899361
      },
      {
        "platform": "抖音",
        "avgPrice": 22.1,
        "sales": 81908,
        "revenue": 1810167
      },
      {
        "platform": "拼多多",
        "avgPrice": 15.5,
        "sales": 122817,
        "revenue": 1903664
      }
    ]
  },
  {
    "name": "晨光 白色记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 18.6,
        "sales": 119951,
        "revenue": 2231089
      },
      {
        "platform": "天猫",
        "avgPrice": 18.6,
        "sales": 64774,
        "revenue": 1204796
      },
      {
        "platform": "京东",
        "avgPrice": 21.4,
        "sales": 85254,
        "revenue": 1824436
      },
      {
        "platform": "抖音",
        "avgPrice": 18.6,
        "sales": 115190,
        "revenue": 2142534
      },
      {
        "platform": "拼多多",
        "avgPrice": 13,
        "sales": 63821,
        "revenue": 829673
      }
    ]
  },
  {
    "name": "宝克 防水记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 21,
        "sales": 74189,
        "revenue": 1557969
      },
      {
        "platform": "天猫",
        "avgPrice": 21,
        "sales": 48202,
        "revenue": 1012242
      },
      {
        "platform": "京东",
        "avgPrice": 24.1,
        "sales": 77070,
        "revenue": 1857387
      },
      {
        "platform": "抖音",
        "avgPrice": 21,
        "sales": 62947,
        "revenue": 1321887
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.7,
        "sales": 68397,
        "revenue": 1005436
      }
    ]
  },
  {
    "name": "雪人 金色记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20,
        "sales": 23427,
        "revenue": 468540
      },
      {
        "platform": "天猫",
        "avgPrice": 20,
        "sales": 117010,
        "revenue": 2340200
      },
      {
        "platform": "京东",
        "avgPrice": 23,
        "sales": 122031,
        "revenue": 2806713
      },
      {
        "platform": "抖音",
        "avgPrice": 20,
        "sales": 54931,
        "revenue": 1098620
      },
      {
        "platform": "拼多多",
        "avgPrice": 14,
        "sales": 20809,
        "revenue": 291326
      }
    ]
  },
  {
    "name": "晨光 细头记号笔",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 20.1,
        "sales": 119873,
        "revenue": 2409447
      },
      {
        "platform": "天猫",
        "avgPrice": 20.1,
        "sales": 49785,
        "revenue": 1000679
      },
      {
        "platform": "京东",
        "avgPrice": 23.1,
        "sales": 94787,
        "revenue": 2189580
      },
      {
        "platform": "抖音",
        "avgPrice": 20.1,
        "sales": 74039,
        "revenue": 1488184
      },
      {
        "platform": "拼多多",
        "avgPrice": 14.1,
        "sales": 51430,
        "revenue": 725163
      }
    ]
  },
  {
    "name": "斑马 记号笔套装 12色",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9,
        "sales": 45409,
        "revenue": 408681
      },
      {
        "platform": "天猫",
        "avgPrice": 9,
        "sales": 66751,
        "revenue": 600759
      },
      {
        "platform": "京东",
        "avgPrice": 10.3,
        "sales": 13841,
        "revenue": 142562
      },
      {
        "platform": "抖音",
        "avgPrice": 9,
        "sales": 20003,
        "revenue": 180027
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.3,
        "sales": 26520,
        "revenue": 167076
      }
    ]
  },
  {
    "name": "得力 大头笔 物流用",
    "category": "记号笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 23.4,
        "sales": 120739,
        "revenue": 2825293
      },
      {
        "platform": "天猫",
        "avgPrice": 23.4,
        "sales": 46232,
        "revenue": 1081829
      },
      {
        "platform": "京东",
        "avgPrice": 26.9,
        "sales": 39284,
        "revenue": 1056740
      },
      {
        "platform": "抖音",
        "avgPrice": 23.4,
        "sales": 24844,
        "revenue": 581350
      },
      {
        "platform": "拼多多",
        "avgPrice": 16.4,
        "sales": 29107,
        "revenue": 477355
      }
    ]
  },
  {
    "name": "司马彦 控笔训练字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 17.7,
        "sales": 95304,
        "revenue": 1686881
      },
      {
        "platform": "天猫",
        "avgPrice": 17.7,
        "sales": 37222,
        "revenue": 658829
      },
      {
        "platform": "京东",
        "avgPrice": 20.4,
        "sales": 34676,
        "revenue": 707390
      },
      {
        "platform": "抖音",
        "avgPrice": 17.7,
        "sales": 22051,
        "revenue": 390303
      },
      {
        "platform": "拼多多",
        "avgPrice": 12.4,
        "sales": 23738,
        "revenue": 294351
      }
    ]
  },
  {
    "name": "华夏万卷 硬笔书法字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 25.6,
        "sales": 11102,
        "revenue": 284211
      },
      {
        "platform": "天猫",
        "avgPrice": 25.6,
        "sales": 20129,
        "revenue": 515302
      },
      {
        "platform": "京东",
        "avgPrice": 29.4,
        "sales": 70625,
        "revenue": 2076375
      },
      {
        "platform": "抖音",
        "avgPrice": 25.6,
        "sales": 86921,
        "revenue": 2225178
      },
      {
        "platform": "拼多多",
        "avgPrice": 17.9,
        "sales": 44162,
        "revenue": 790500
      }
    ]
  },
  {
    "name": "六品堂 英文练字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.8,
        "sales": 62269,
        "revenue": 547967
      },
      {
        "platform": "天猫",
        "avgPrice": 8.8,
        "sales": 47027,
        "revenue": 413838
      },
      {
        "platform": "京东",
        "avgPrice": 10.1,
        "sales": 61649,
        "revenue": 622655
      },
      {
        "platform": "抖音",
        "avgPrice": 8.8,
        "sales": 93624,
        "revenue": 823891
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.2,
        "sales": 88345,
        "revenue": 547739
      }
    ]
  },
  {
    "name": "六品堂 数字描红本",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.4,
        "sales": 91789,
        "revenue": 1780707
      },
      {
        "platform": "天猫",
        "avgPrice": 19.4,
        "sales": 16072,
        "revenue": 311797
      },
      {
        "platform": "京东",
        "avgPrice": 22.3,
        "sales": 97745,
        "revenue": 2179714
      },
      {
        "platform": "抖音",
        "avgPrice": 19.4,
        "sales": 68176,
        "revenue": 1322614
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.6,
        "sales": 16014,
        "revenue": 217790
      }
    ]
  },
  {
    "name": "司马彦 笔画练字",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 35.8,
        "sales": 25218,
        "revenue": 902804
      },
      {
        "platform": "天猫",
        "avgPrice": 35.8,
        "sales": 31356,
        "revenue": 1122545
      },
      {
        "platform": "京东",
        "avgPrice": 41.2,
        "sales": 49194,
        "revenue": 2026793
      },
      {
        "platform": "抖音",
        "avgPrice": 35.8,
        "sales": 42130,
        "revenue": 1508254
      },
      {
        "platform": "拼多多",
        "avgPrice": 25.1,
        "sales": 27742,
        "revenue": 696324
      }
    ]
  },
  {
    "name": "六品堂 古诗词字帖",
    "category": "练字帖/描红本",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 38.6,
        "sales": 97275,
        "revenue": 3754815
      },
      {
        "platform": "天猫",
        "avgPrice": 38.6,
        "sales": 20518,
        "revenue": 791995
      },
      {
        "platform": "京东",
        "avgPrice": 44.4,
        "sales": 24708,
        "revenue": 1097035
      },
      {
        "platform": "抖音",
        "avgPrice": 38.6,
        "sales": 91682,
        "revenue": 3538925
      },
      {
        "platform": "拼多多",
        "avgPrice": 27,
        "sales": 77805,
        "revenue": 2100735
      }
    ]
  },
  {
    "name": "得力 圆珠笔 速干 蓝色",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 32.2,
        "sales": 94785,
        "revenue": 3052077
      },
      {
        "platform": "天猫",
        "avgPrice": 32.2,
        "sales": 24473,
        "revenue": 788031
      },
      {
        "platform": "京东",
        "avgPrice": 37,
        "sales": 95631,
        "revenue": 3538347
      },
      {
        "platform": "抖音",
        "avgPrice": 32.2,
        "sales": 46912,
        "revenue": 1510566
      },
      {
        "platform": "拼多多",
        "avgPrice": 22.5,
        "sales": 91196,
        "revenue": 2051910
      }
    ]
  },
  {
    "name": "晨光 商务圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 12.3,
        "sales": 58058,
        "revenue": 714113
      },
      {
        "platform": "天猫",
        "avgPrice": 12.3,
        "sales": 96547,
        "revenue": 1187528
      },
      {
        "platform": "京东",
        "avgPrice": 14.1,
        "sales": 80408,
        "revenue": 1133753
      },
      {
        "platform": "抖音",
        "avgPrice": 12.3,
        "sales": 31240,
        "revenue": 384252
      },
      {
        "platform": "拼多多",
        "avgPrice": 8.6,
        "sales": 35241,
        "revenue": 303073
      }
    ]
  },
  {
    "name": "晨光 学生圆珠笔 套装",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.3,
        "sales": 14239,
        "revenue": 160901
      },
      {
        "platform": "天猫",
        "avgPrice": 11.3,
        "sales": 94617,
        "revenue": 1069172
      },
      {
        "platform": "京东",
        "avgPrice": 13,
        "sales": 26889,
        "revenue": 349557
      },
      {
        "platform": "抖音",
        "avgPrice": 11.3,
        "sales": 50826,
        "revenue": 574334
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.9,
        "sales": 67646,
        "revenue": 534403
      }
    ]
  },
  {
    "name": "晨光 圆珠笔芯 替换",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 33.7,
        "sales": 87929,
        "revenue": 2963207
      },
      {
        "platform": "天猫",
        "avgPrice": 33.7,
        "sales": 87300,
        "revenue": 2942010
      },
      {
        "platform": "京东",
        "avgPrice": 38.8,
        "sales": 27155,
        "revenue": 1053614
      },
      {
        "platform": "抖音",
        "avgPrice": 33.7,
        "sales": 78004,
        "revenue": 2628735
      },
      {
        "platform": "拼多多",
        "avgPrice": 23.6,
        "sales": 85874,
        "revenue": 2026626
      }
    ]
  },
  {
    "name": "斑马 油性圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 19.3,
        "sales": 16290,
        "revenue": 314397
      },
      {
        "platform": "天猫",
        "avgPrice": 19.3,
        "sales": 11352,
        "revenue": 219094
      },
      {
        "platform": "京东",
        "avgPrice": 22.2,
        "sales": 88648,
        "revenue": 1967986
      },
      {
        "platform": "抖音",
        "avgPrice": 19.3,
        "sales": 69833,
        "revenue": 1347777
      },
      {
        "platform": "拼多多",
        "avgPrice": 13.5,
        "sales": 36320,
        "revenue": 490320
      }
    ]
  },
  {
    "name": "晨光 多功能圆珠笔",
    "category": "圆珠笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 3.5,
        "sales": 98035,
        "revenue": 343123
      },
      {
        "platform": "天猫",
        "avgPrice": 3.5,
        "sales": 98883,
        "revenue": 346091
      },
      {
        "platform": "京东",
        "avgPrice": 4,
        "sales": 20169,
        "revenue": 80676
      },
      {
        "platform": "抖音",
        "avgPrice": 3.5,
        "sales": 70996,
        "revenue": 248486
      },
      {
        "platform": "拼多多",
        "avgPrice": 2.4,
        "sales": 40284,
        "revenue": 96682
      }
    ]
  },
  {
    "name": "得力 丝滑蜡笔 24色",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.7,
        "sales": 84724,
        "revenue": 2516303
      },
      {
        "platform": "天猫",
        "avgPrice": 29.7,
        "sales": 8926,
        "revenue": 265102
      },
      {
        "platform": "京东",
        "avgPrice": 34.2,
        "sales": 56439,
        "revenue": 1930214
      },
      {
        "platform": "抖音",
        "avgPrice": 29.7,
        "sales": 63237,
        "revenue": 1878139
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.8,
        "sales": 58158,
        "revenue": 1209686
      }
    ]
  },
  {
    "name": "绘儿乐 可水洗蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 11.3,
        "sales": 9266,
        "revenue": 104706
      },
      {
        "platform": "天猫",
        "avgPrice": 11.3,
        "sales": 71102,
        "revenue": 803453
      },
      {
        "platform": "京东",
        "avgPrice": 13,
        "sales": 80666,
        "revenue": 1048658
      },
      {
        "platform": "抖音",
        "avgPrice": 11.3,
        "sales": 60805,
        "revenue": 687097
      },
      {
        "platform": "拼多多",
        "avgPrice": 7.9,
        "sales": 22282,
        "revenue": 176028
      }
    ]
  },
  {
    "name": "绘儿乐 蜡笔套装 桶装",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 30.5,
        "sales": 51956,
        "revenue": 1584658
      },
      {
        "platform": "天猫",
        "avgPrice": 30.5,
        "sales": 43560,
        "revenue": 1328580
      },
      {
        "platform": "京东",
        "avgPrice": 35.1,
        "sales": 75486,
        "revenue": 2649559
      },
      {
        "platform": "抖音",
        "avgPrice": 30.5,
        "sales": 6387,
        "revenue": 194804
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.3,
        "sales": 41653,
        "revenue": 887209
      }
    ]
  },
  {
    "name": "得力 水溶性蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 31.1,
        "sales": 75413,
        "revenue": 2345344
      },
      {
        "platform": "天猫",
        "avgPrice": 31.1,
        "sales": 57934,
        "revenue": 1801747
      },
      {
        "platform": "京东",
        "avgPrice": 35.8,
        "sales": 43712,
        "revenue": 1564890
      },
      {
        "platform": "抖音",
        "avgPrice": 31.1,
        "sales": 78490,
        "revenue": 2441039
      },
      {
        "platform": "拼多多",
        "avgPrice": 21.8,
        "sales": 55396,
        "revenue": 1207633
      }
    ]
  },
  {
    "name": "真彩 荧光蜡笔",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 15.1,
        "sales": 88791,
        "revenue": 1340744
      },
      {
        "platform": "天猫",
        "avgPrice": 15.1,
        "sales": 74337,
        "revenue": 1122489
      },
      {
        "platform": "京东",
        "avgPrice": 17.4,
        "sales": 30784,
        "revenue": 535642
      },
      {
        "platform": "抖音",
        "avgPrice": 15.1,
        "sales": 86924,
        "revenue": 1312552
      },
      {
        "platform": "拼多多",
        "avgPrice": 10.6,
        "sales": 38914,
        "revenue": 412488
      }
    ]
  },
  {
    "name": "得力 三角蜡笔 幼儿",
    "category": "蜡笔",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 13.1,
        "sales": 88866,
        "revenue": 1164145
      },
      {
        "platform": "天猫",
        "avgPrice": 13.1,
        "sales": 74998,
        "revenue": 982474
      },
      {
        "platform": "京东",
        "avgPrice": 15.1,
        "sales": 12293,
        "revenue": 185624
      },
      {
        "platform": "抖音",
        "avgPrice": 13.1,
        "sales": 44755,
        "revenue": 586291
      },
      {
        "platform": "拼多多",
        "avgPrice": 9.2,
        "sales": 85377,
        "revenue": 785468
      }
    ]
  },
  {
    "name": "九木 卡通书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 8.6,
        "sales": 46746,
        "revenue": 402016
      },
      {
        "platform": "天猫",
        "avgPrice": 8.6,
        "sales": 44650,
        "revenue": 383990
      },
      {
        "platform": "京东",
        "avgPrice": 9.9,
        "sales": 14664,
        "revenue": 145174
      },
      {
        "platform": "抖音",
        "avgPrice": 8.6,
        "sales": 47025,
        "revenue": 404415
      },
      {
        "platform": "拼多多",
        "avgPrice": 6,
        "sales": 18841,
        "revenue": 113046
      }
    ]
  },
  {
    "name": "敦煌 木质书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 29.1,
        "sales": 27965,
        "revenue": 813782
      },
      {
        "platform": "天猫",
        "avgPrice": 29.1,
        "sales": 30607,
        "revenue": 890664
      },
      {
        "platform": "京东",
        "avgPrice": 33.5,
        "sales": 49510,
        "revenue": 1658585
      },
      {
        "platform": "抖音",
        "avgPrice": 29.1,
        "sales": 5267,
        "revenue": 153270
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.4,
        "sales": 7125,
        "revenue": 145350
      }
    ]
  },
  {
    "name": "敦煌 压花书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.7,
        "sales": 4003,
        "revenue": 114886
      },
      {
        "platform": "天猫",
        "avgPrice": 28.7,
        "sales": 47767,
        "revenue": 1370913
      },
      {
        "platform": "京东",
        "avgPrice": 33,
        "sales": 23906,
        "revenue": 788898
      },
      {
        "platform": "抖音",
        "avgPrice": 28.7,
        "sales": 28419,
        "revenue": 815625
      },
      {
        "platform": "拼多多",
        "avgPrice": 20.1,
        "sales": 12337,
        "revenue": 247974
      }
    ]
  },
  {
    "name": "手工 夜光书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.3,
        "sales": 39810,
        "revenue": 370233
      },
      {
        "platform": "天猫",
        "avgPrice": 9.3,
        "sales": 20569,
        "revenue": 191292
      },
      {
        "platform": "京东",
        "avgPrice": 10.7,
        "sales": 35215,
        "revenue": 376801
      },
      {
        "platform": "抖音",
        "avgPrice": 9.3,
        "sales": 48296,
        "revenue": 449153
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.5,
        "sales": 18454,
        "revenue": 119951
      }
    ]
  },
  {
    "name": "手工 书签尺 多功能",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 28.4,
        "sales": 44180,
        "revenue": 1254712
      },
      {
        "platform": "天猫",
        "avgPrice": 28.4,
        "sales": 30515,
        "revenue": 866626
      },
      {
        "platform": "京东",
        "avgPrice": 32.7,
        "sales": 36503,
        "revenue": 1193648
      },
      {
        "platform": "抖音",
        "avgPrice": 28.4,
        "sales": 14886,
        "revenue": 422762
      },
      {
        "platform": "拼多多",
        "avgPrice": 19.9,
        "sales": 25189,
        "revenue": 501261
      }
    ]
  },
  {
    "name": "晨光 刺绣书签",
    "category": "书签",
    "platforms": [
      {
        "platform": "淘宝/天猫",
        "avgPrice": 9.9,
        "sales": 49730,
        "revenue": 492327
      },
      {
        "platform": "天猫",
        "avgPrice": 9.9,
        "sales": 33780,
        "revenue": 334422
      },
      {
        "platform": "京东",
        "avgPrice": 11.4,
        "sales": 3604,
        "revenue": 41086
      },
      {
        "platform": "抖音",
        "avgPrice": 9.9,
        "sales": 14106,
        "revenue": 139649
      },
      {
        "platform": "拼多多",
        "avgPrice": 6.9,
        "sales": 28169,
        "revenue": 194366
      }
    ]
  }
],
  emergingProducts: [
  {
    "name": "三菱 子弹头中性笔 0.38mm",
    "category": "中性笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 33748,
    "growth7d": 96,
    "predictScore": 89,
    "trendData": [
      18627,
      20437,
      22633,
      24008,
      26112,
      28044,
      30599,
      33422,
      36170,
      38759,
      42437,
      46008,
      33748
    ]
  },
  {
    "name": "得力 中性笔套装 12支",
    "category": "中性笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 61703,
    "growth7d": 369,
    "predictScore": 84,
    "trendData": [
      17046,
      22478,
      29626,
      38511,
      50376,
      64057,
      83020,
      107896,
      138250,
      180583,
      229349,
      301794,
      61703
    ]
  },
  {
    "name": "斑马 商务签字笔",
    "category": "中性笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 12144,
    "growth7d": 263,
    "predictScore": 74,
    "trendData": [
      4040,
      4916,
      5854,
      6992,
      8339,
      10008,
      12024,
      14613,
      17664,
      21834,
      26654,
      32444,
      12144
    ]
  },
  {
    "name": "得力 彩色中性笔套装",
    "category": "中性笔",
    "reason": "直播间持续爆单",
    "currentSales": 71750,
    "growth7d": 373,
    "predictScore": 88,
    "trendData": [
      19715,
      25722,
      33679,
      43830,
      56357,
      72096,
      92542,
      118184,
      152344,
      197132,
      258409,
      336998,
      71750
    ]
  },
  {
    "name": "晨光 刷题专用中性笔",
    "category": "中性笔",
    "reason": "社交平台口碑传播",
    "currentSales": 34794,
    "growth7d": 216,
    "predictScore": 79,
    "trendData": [
      13078,
      15397,
      18305,
      21698,
      25274,
      30109,
      36106,
      43000,
      51394,
      59579,
      70337,
      82785,
      34794
    ]
  },
  {
    "name": "斑马 ST笔头中性笔",
    "category": "中性笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 67965,
    "growth7d": 97,
    "predictScore": 69,
    "trendData": [
      36949,
      39866,
      44184,
      48300,
      52641,
      56092,
      60837,
      66202,
      73223,
      78119,
      83376,
      91750,
      67965
    ]
  },
  {
    "name": "kinbor 错题本 活页",
    "category": "笔记本/记事本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 23430,
    "growth7d": 276,
    "predictScore": 69,
    "trendData": [
      7754,
      9359,
      11273,
      13695,
      16921,
      20263,
      24724,
      29720,
      35836,
      42926,
      52279,
      64397,
      23430
    ]
  },
  {
    "name": "国誉 考研专用笔记本",
    "category": "笔记本/记事本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 75909,
    "growth7d": 283,
    "predictScore": 87,
    "trendData": [
      24090,
      29292,
      35329,
      44053,
      53916,
      65729,
      79934,
      99331,
      121713,
      150593,
      185866,
      231860,
      75909
    ]
  },
  {
    "name": "无印良品 道林纸笔记本",
    "category": "笔记本/记事本",
    "reason": "618期间搜索量飙升",
    "currentSales": 52755,
    "growth7d": 297,
    "predictScore": 86,
    "trendData": [
      16380,
      20529,
      25900,
      31821,
      38719,
      47469,
      58904,
      73153,
      90009,
      109224,
      136869,
      168957,
      52755
    ]
  },
  {
    "name": "无印良品 空白素描本",
    "category": "笔记本/记事本",
    "reason": "直播间持续爆单",
    "currentSales": 45665,
    "growth7d": 293,
    "predictScore": 75,
    "trendData": [
      14212,
      17750,
      21690,
      27315,
      33162,
      40372,
      50318,
      62241,
      76917,
      96031,
      119514,
      145816,
      45665
    ]
  },
  {
    "name": "得力 横线笔记本套装",
    "category": "笔记本/记事本",
    "reason": "社交平台口碑传播",
    "currentSales": 68994,
    "growth7d": 241,
    "predictScore": 70,
    "trendData": [
      24162,
      28878,
      35064,
      42412,
      51682,
      61549,
      74615,
      89022,
      105899,
      124930,
      146449,
      175525,
      68994
    ]
  },
  {
    "name": "得力 牛皮封面记事本",
    "category": "笔记本/记事本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 24742,
    "growth7d": 229,
    "predictScore": 76,
    "trendData": [
      8876,
      10365,
      12165,
      14511,
      17290,
      20320,
      24144,
      29218,
      34604,
      40720,
      48433,
      57843,
      24742
    ]
  },
  {
    "name": "得力 高考加油礼盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 13113,
    "growth7d": 137,
    "predictScore": 82,
    "trendData": [
      6151,
      6898,
      7631,
      8574,
      9759,
      10985,
      12125,
      13538,
      15351,
      17327,
      18981,
      21526,
      13113
    ]
  },
  {
    "name": "得力 文具福袋 随机",
    "category": "学习套装/礼盒/盲盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 20114,
    "growth7d": 198,
    "predictScore": 89,
    "trendData": [
      8005,
      9318,
      10669,
      12213,
      13928,
      16259,
      19299,
      22897,
      26792,
      31323,
      35996,
      42469,
      20114
    ]
  },
  {
    "name": "三丽鸥 IP联名文具盲盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 23367,
    "growth7d": 331,
    "predictScore": 97,
    "trendData": [
      6819,
      8454,
      10842,
      13692,
      16989,
      21267,
      27230,
      34541,
      43246,
      53665,
      68985,
      86345,
      23367
    ]
  },
  {
    "name": "得力 新学期必备套装",
    "category": "学习套装/礼盒/盲盒",
    "reason": "直播间持续爆单",
    "currentSales": 19579,
    "growth7d": 213,
    "predictScore": 96,
    "trendData": [
      7484,
      8929,
      10578,
      12347,
      14722,
      17012,
      19719,
      23600,
      27908,
      32179,
      37914,
      44967,
      19579
    ]
  },
  {
    "name": "迪士尼 幼儿园文具礼盒",
    "category": "学习套装/礼盒/盲盒",
    "reason": "社交平台口碑传播",
    "currentSales": 33193,
    "growth7d": 266,
    "predictScore": 94,
    "trendData": [
      10889,
      13209,
      16374,
      20201,
      24692,
      29397,
      36022,
      43055,
      53129,
      63764,
      77405,
      94442,
      33193
    ]
  },
  {
    "name": "三丽鸥 升学礼物套装",
    "category": "学习套装/礼盒/盲盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 51520,
    "growth7d": 360,
    "predictScore": 83,
    "trendData": [
      14435,
      18848,
      24279,
      31361,
      40528,
      52046,
      67194,
      86101,
      112950,
      145235,
      190367,
      245070,
      51520
    ]
  },
  {
    "name": "法卡勒 软头马克笔套装",
    "category": "马克笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 72795,
    "growth7d": 317,
    "predictScore": 96,
    "trendData": [
      22248,
      27393,
      34331,
      43861,
      54217,
      67721,
      83491,
      106565,
      134005,
      168172,
      213318,
      262744,
      72795
    ]
  },
  {
    "name": "慕娜美 马克笔补充液",
    "category": "马克笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 34320,
    "growth7d": 112,
    "predictScore": 92,
    "trendData": [
      17900,
      19891,
      21544,
      23521,
      26020,
      29010,
      32115,
      34667,
      38623,
      42493,
      47310,
      52581,
      34320
    ]
  },
  {
    "name": "马利 丙烯马克笔",
    "category": "马克笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 63978,
    "growth7d": 365,
    "predictScore": 76,
    "trendData": [
      17649,
      22524,
      29355,
      38077,
      50066,
      63969,
      81230,
      105197,
      133983,
      169938,
      215453,
      273376,
      63978
    ]
  },
  {
    "name": "法卡勒 金属色马克笔",
    "category": "马克笔",
    "reason": "直播间持续爆单",
    "currentSales": 63493,
    "growth7d": 134,
    "predictScore": 83,
    "trendData": [
      30406,
      33085,
      36329,
      40906,
      45872,
      50207,
      56366,
      62423,
      70542,
      78182,
      86993,
      95931,
      63493
    ]
  },
  {
    "name": "马利 荧光马克笔套装",
    "category": "马克笔",
    "reason": "社交平台口碑传播",
    "currentSales": 67393,
    "growth7d": 292,
    "predictScore": 85,
    "trendData": [
      21627,
      26638,
      32385,
      40763,
      50010,
      62061,
      76909,
      95995,
      117990,
      144113,
      181061,
      224956,
      67393
    ]
  },
  {
    "name": "法卡勒 马克笔收纳盒",
    "category": "马克笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 78297,
    "growth7d": 172,
    "predictScore": 90,
    "trendData": [
      33163,
      38083,
      44075,
      50475,
      57933,
      66492,
      76366,
      88372,
      101093,
      116212,
      132099,
      149938,
      78297
    ]
  },
  {
    "name": "晨光 帆布笔袋 简约",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 62477,
    "growth7d": 178,
    "predictScore": 76,
    "trendData": [
      25659,
      29397,
      33952,
      38579,
      43929,
      49515,
      57760,
      65894,
      74833,
      84999,
      97413,
      110463,
      62477
    ]
  },
  {
    "name": "迪士尼 铁皮文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "小红书种草笔记爆发",
    "currentSales": 48526,
    "growth7d": 346,
    "predictScore": 94,
    "trendData": [
      13835,
      17358,
      21999,
      28267,
      35848,
      45117,
      57447,
      72879,
      91410,
      116769,
      148727,
      191732,
      48526
    ]
  },
  {
    "name": "迪士尼 密码锁文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "618期间搜索量飙升",
    "currentSales": 34590,
    "growth7d": 399,
    "predictScore": 87,
    "trendData": [
      9065,
      11900,
      15757,
      20979,
      28089,
      36615,
      47940,
      63358,
      82064,
      106338,
      138260,
      184722,
      34590
    ]
  },
  {
    "name": "迪士尼 折叠文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "直播间持续爆单",
    "currentSales": 37408,
    "growth7d": 374,
    "predictScore": 71,
    "trendData": [
      10182,
      13018,
      17013,
      21778,
      28221,
      36089,
      46252,
      60752,
      77336,
      101231,
      130846,
      172042,
      37408
    ]
  },
  {
    "name": "三年二班 卡通笔袋",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "社交平台口碑传播",
    "currentSales": 31593,
    "growth7d": 317,
    "predictScore": 76,
    "trendData": [
      9580,
      11971,
      14857,
      18317,
      22541,
      27964,
      35020,
      43786,
      55762,
      69248,
      86426,
      109242,
      31593
    ]
  },
  {
    "name": "迪士尼 弹射文具盒",
    "category": "文具盒/笔袋/痛包笔袋",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 35074,
    "growth7d": 304,
    "predictScore": 96,
    "trendData": [
      10951,
      13548,
      16564,
      20620,
      25762,
      32394,
      40561,
      49857,
      60936,
      76744,
      96607,
      118719,
      35074
    ]
  },
  {
    "name": "三菱 活动铅笔 金属杆",
    "category": "铅笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 52159,
    "growth7d": 358,
    "predictScore": 89,
    "trendData": [
      14854,
      19392,
      25248,
      32579,
      41917,
      54519,
      70633,
      91870,
      120277,
      151802,
      192640,
      246889,
      52159
    ]
  },
  {
    "name": "三菱 考试涂卡铅笔 20支",
    "category": "铅笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 62732,
    "growth7d": 260,
    "predictScore": 97,
    "trendData": [
      20760,
      24952,
      30078,
      37055,
      45725,
      55148,
      65812,
      79741,
      95552,
      115474,
      137167,
      167445,
      62732
    ]
  },
  {
    "name": "马可 绘图铅笔 2H-8B",
    "category": "铅笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 75201,
    "growth7d": 113,
    "predictScore": 66,
    "trendData": [
      38365,
      42319,
      46500,
      52057,
      58139,
      62979,
      69442,
      76527,
      85764,
      92374,
      100356,
      111103,
      75201
    ]
  },
  {
    "name": "中华 木质铅笔 HB 50支",
    "category": "铅笔",
    "reason": "直播间持续爆单",
    "currentSales": 11322,
    "growth7d": 294,
    "predictScore": 92,
    "trendData": [
      3488,
      4265,
      5201,
      6439,
      7882,
      9592,
      11936,
      14602,
      17810,
      21612,
      26501,
      32617,
      11322
    ]
  },
  {
    "name": "晨光 粗杆铅笔 幼儿用",
    "category": "铅笔",
    "reason": "社交平台口碑传播",
    "currentSales": 65793,
    "growth7d": 342,
    "predictScore": 66,
    "trendData": [
      18918,
      23978,
      30368,
      38174,
      49029,
      63259,
      80050,
      100261,
      127120,
      160465,
      206959,
      266057,
      65793
    ]
  },
  {
    "name": "中华 铅笔帽 保护套",
    "category": "铅笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 61851,
    "growth7d": 116,
    "predictScore": 70,
    "trendData": [
      30769,
      33223,
      36273,
      39842,
      44018,
      49344,
      54750,
      60500,
      66812,
      75040,
      81402,
      87636,
      61851
    ]
  },
  {
    "name": "辉柏嘉 高光橡皮",
    "category": "橡皮擦",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 41841,
    "growth7d": 219,
    "predictScore": 69,
    "trendData": [
      15367,
      17978,
      20741,
      24869,
      29574,
      34860,
      41108,
      47895,
      56869,
      67843,
      81182,
      96109,
      41841
    ]
  },
  {
    "name": "樱花 樱花橡皮",
    "category": "橡皮擦",
    "reason": "小红书种草笔记爆发",
    "currentSales": 76937,
    "growth7d": 174,
    "predictScore": 67,
    "trendData": [
      32602,
      37467,
      42846,
      48373,
      55618,
      64161,
      74648,
      86194,
      98458,
      112200,
      129258,
      148948,
      76937
    ]
  },
  {
    "name": "辉柏嘉 超净橡皮",
    "category": "橡皮擦",
    "reason": "618期间搜索量飙升",
    "currentSales": 45813,
    "growth7d": 148,
    "predictScore": 77,
    "trendData": [
      20550,
      23433,
      26254,
      28999,
      33107,
      36744,
      41993,
      47426,
      54211,
      59918,
      67081,
      75470,
      45813
    ]
  },
  {
    "name": "晨光 创意橡皮 食物造型",
    "category": "橡皮擦",
    "reason": "直播间持续爆单",
    "currentSales": 55236,
    "growth7d": 214,
    "predictScore": 79,
    "trendData": [
      20878,
      24363,
      28801,
      34444,
      39693,
      45849,
      53054,
      62775,
      73226,
      85529,
      99208,
      118726,
      55236
    ]
  },
  {
    "name": "晨光 自动橡皮擦 替芯",
    "category": "橡皮擦",
    "reason": "社交平台口碑传播",
    "currentSales": 29993,
    "growth7d": 367,
    "predictScore": 90,
    "trendData": [
      8204,
      10545,
      13623,
      17454,
      22483,
      29000,
      37078,
      48373,
      63479,
      81429,
      104346,
      136392,
      29993
    ]
  },
  {
    "name": "辉柏嘉 橡皮擦套装",
    "category": "橡皮擦",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 18629,
    "growth7d": 248,
    "predictScore": 77,
    "trendData": [
      6337,
      7722,
      9321,
      11167,
      13472,
      15906,
      19297,
      22713,
      26860,
      31776,
      38350,
      46803,
      18629
    ]
  },
  {
    "name": "慕娜美 护眼荧光笔 莫兰迪",
    "category": "荧光笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 31523,
    "growth7d": 399,
    "predictScore": 82,
    "trendData": [
      8429,
      11208,
      14579,
      18998,
      25403,
      33081,
      43279,
      57343,
      75172,
      99169,
      130863,
      174246,
      31523
    ]
  },
  {
    "name": "斑马 窗口荧光笔",
    "category": "荧光笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 21143,
    "growth7d": 88,
    "predictScore": 69,
    "trendData": [
      12155,
      13328,
      14416,
      15512,
      16529,
      18201,
      19721,
      21648,
      23516,
      25177,
      26844,
      29097,
      21143
    ]
  },
  {
    "name": "慕娜美 荧光笔 粗细双头",
    "category": "荧光笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 16424,
    "growth7d": 182,
    "predictScore": 89,
    "trendData": [
      6625,
      7465,
      8519,
      9702,
      11310,
      12845,
      14545,
      16813,
      19582,
      22181,
      25550,
      29185,
      16424
    ]
  },
  {
    "name": "东洋 果冻色荧光笔",
    "category": "荧光笔",
    "reason": "直播间持续爆单",
    "currentSales": 29151,
    "growth7d": 134,
    "predictScore": 67,
    "trendData": [
      13831,
      15368,
      16825,
      18573,
      21000,
      22958,
      25711,
      28105,
      31287,
      35121,
      38409,
      42737,
      29151
    ]
  },
  {
    "name": "慕娜美 荧光笔 大容量",
    "category": "荧光笔",
    "reason": "社交平台口碑传播",
    "currentSales": 64192,
    "growth7d": 392,
    "predictScore": 81,
    "trendData": [
      17404,
      22681,
      29877,
      39002,
      50386,
      64972,
      83920,
      109666,
      143296,
      186748,
      247089,
      328302,
      64192
    ]
  },
  {
    "name": "斑马 速干荧光笔",
    "category": "荧光笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 45406,
    "growth7d": 379,
    "predictScore": 84,
    "trendData": [
      12251,
      16007,
      21156,
      27438,
      35868,
      46257,
      60874,
      79027,
      103533,
      133777,
      170999,
      224607,
      45406
    ]
  },
  {
    "name": "文谷 手账素材本",
    "category": "手帐",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 21206,
    "growth7d": 260,
    "predictScore": 95,
    "trendData": [
      7079,
      8454,
      10165,
      12318,
      14655,
      18031,
      21492,
      25563,
      30397,
      36479,
      43672,
      53881,
      21206
    ]
  },
  {
    "name": "文谷 手账周计划本",
    "category": "手帐",
    "reason": "小红书种草笔记爆发",
    "currentSales": 35349,
    "growth7d": 322,
    "predictScore": 72,
    "trendData": [
      10444,
      12950,
      16394,
      20807,
      26581,
      33088,
      41352,
      51147,
      65286,
      81468,
      103997,
      131209,
      35349
    ]
  },
  {
    "name": "三年二班 手账装饰花边剪刀",
    "category": "手帐",
    "reason": "618期间搜索量飙升",
    "currentSales": 57036,
    "growth7d": 216,
    "predictScore": 67,
    "trendData": [
      20982,
      24408,
      28363,
      33272,
      39586,
      45982,
      53881,
      63715,
      75584,
      87689,
      103848,
      120408,
      57036
    ]
  },
  {
    "name": "kinbor TN旅行手账",
    "category": "手帐",
    "reason": "直播间持续爆单",
    "currentSales": 73065,
    "growth7d": 375,
    "predictScore": 87,
    "trendData": [
      19697,
      25652,
      33459,
      43789,
      57183,
      73098,
      93537,
      121588,
      158905,
      202441,
      257960,
      329044,
      73065
    ]
  },
  {
    "name": "文谷 盐系手账本",
    "category": "手帐",
    "reason": "社交平台口碑传播",
    "currentSales": 28392,
    "growth7d": 97,
    "predictScore": 72,
    "trendData": [
      15772,
      16954,
      18590,
      20141,
      22144,
      24203,
      26831,
      28516,
      31507,
      33950,
      36280,
      40056,
      28392
    ]
  },
  {
    "name": "国誉 手账打孔器",
    "category": "手帐",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 72183,
    "growth7d": 191,
    "predictScore": 91,
    "trendData": [
      28664,
      32940,
      37579,
      43233,
      50267,
      57967,
      68021,
      79859,
      91216,
      105431,
      121689,
      141304,
      72183
    ]
  },
  {
    "name": "森活记 火漆蜡条 彩色",
    "category": "火漆印章",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 10888,
    "growth7d": 120,
    "predictScore": 75,
    "trendData": [
      5533,
      6130,
      6763,
      7573,
      8266,
      9156,
      10299,
      11361,
      12684,
      13701,
      15400,
      16713,
      10888
    ]
  },
  {
    "name": "森活记 火漆勺 木柄",
    "category": "火漆印章",
    "reason": "小红书种草笔记爆发",
    "currentSales": 49555,
    "growth7d": 236,
    "predictScore": 75,
    "trendData": [
      17941,
      21299,
      25645,
      31190,
      37219,
      44377,
      51915,
      61254,
      71695,
      84524,
      100645,
      120095,
      49555
    ]
  },
  {
    "name": "暮光之印 火漆印章礼盒",
    "category": "火漆印章",
    "reason": "618期间搜索量飙升",
    "currentSales": 27647,
    "growth7d": 250,
    "predictScore": 79,
    "trendData": [
      9380,
      11254,
      13312,
      16072,
      19509,
      23166,
      28060,
      33927,
      40980,
      48667,
      59210,
      72631,
      27647
    ]
  },
  {
    "name": "手帐星球 星座火漆印章",
    "category": "火漆印章",
    "reason": "直播间持续爆单",
    "currentSales": 46979,
    "growth7d": 295,
    "predictScore": 75,
    "trendData": [
      14913,
      18589,
      22623,
      27525,
      33970,
      41323,
      51339,
      64675,
      81081,
      99607,
      125300,
      155561,
      46979
    ]
  },
  {
    "name": "印迹 火漆蜡片 成品",
    "category": "火漆印章",
    "reason": "社交平台口碑传播",
    "currentSales": 62592,
    "growth7d": 122,
    "predictScore": 96,
    "trendData": [
      31038,
      33918,
      38051,
      42146,
      46497,
      50803,
      56985,
      63536,
      69843,
      76687,
      85147,
      95846,
      62592
    ]
  },
  {
    "name": "慢作 毕业纪念火漆套装",
    "category": "火漆印章",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 28960,
    "growth7d": 323,
    "predictScore": 98,
    "trendData": [
      8660,
      10721,
      13467,
      16835,
      21285,
      26881,
      34329,
      42774,
      54344,
      68784,
      87790,
      110179,
      28960
    ]
  },
  {
    "name": "得力 细头水彩笔 勾线",
    "category": "水彩笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 70570,
    "growth7d": 301,
    "predictScore": 88,
    "trendData": [
      21674,
      26408,
      33040,
      40460,
      50181,
      61819,
      77562,
      98015,
      121617,
      152901,
      190784,
      235366,
      70570
    ]
  },
  {
    "name": "马利 双头水彩笔",
    "category": "水彩笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 63760,
    "growth7d": 151,
    "predictScore": 77,
    "trendData": [
      28881,
      32786,
      37472,
      41745,
      46332,
      52846,
      60282,
      67737,
      75542,
      83911,
      92778,
      104432,
      63760
    ]
  },
  {
    "name": "马利 可擦水彩笔",
    "category": "水彩笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 68259,
    "growth7d": 284,
    "predictScore": 90,
    "trendData": [
      21554,
      26646,
      32074,
      39824,
      49297,
      59811,
      74807,
      92435,
      113649,
      138086,
      172470,
      214530,
      68259
    ]
  },
  {
    "name": "真彩 水彩笔画纸套装",
    "category": "水彩笔",
    "reason": "直播间持续爆单",
    "currentSales": 20894,
    "growth7d": 215,
    "predictScore": 95,
    "trendData": [
      7809,
      9299,
      10970,
      12885,
      14978,
      17294,
      19977,
      23366,
      26881,
      31801,
      37895,
      43862,
      20894
    ]
  },
  {
    "name": "辉柏嘉 金属色水彩笔",
    "category": "水彩笔",
    "reason": "社交平台口碑传播",
    "currentSales": 26792,
    "growth7d": 147,
    "predictScore": 86,
    "trendData": [
      12011,
      13340,
      15304,
      17321,
      19174,
      21901,
      24853,
      27764,
      31752,
      35513,
      39136,
      44897,
      26792
    ]
  },
  {
    "name": "辉柏嘉 白板用水彩笔",
    "category": "水彩笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 55738,
    "growth7d": 135,
    "predictScore": 72,
    "trendData": [
      26756,
      30250,
      34040,
      37567,
      42066,
      47385,
      53759,
      60309,
      66497,
      75104,
      82785,
      91289,
      55738
    ]
  },
  {
    "name": "得力 价格标签贴",
    "category": "标签贴纸",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 60252,
    "growth7d": 161,
    "predictScore": 69,
    "trendData": [
      26503,
      30004,
      34566,
      39146,
      44707,
      49591,
      56413,
      63599,
      71116,
      80883,
      90960,
      103255,
      60252
    ]
  },
  {
    "name": "兄弟 书脊标签",
    "category": "标签贴纸",
    "reason": "小红书种草笔记爆发",
    "currentSales": 77966,
    "growth7d": 385,
    "predictScore": 80,
    "trendData": [
      20944,
      27827,
      36931,
      48277,
      63814,
      81955,
      107111,
      140620,
      183564,
      236432,
      311144,
      405531,
      77966
    ]
  },
  {
    "name": "雅柯莱 收纳标签贴",
    "category": "标签贴纸",
    "reason": "618期间搜索量飙升",
    "currentSales": 38870,
    "growth7d": 318,
    "predictScore": 69,
    "trendData": [
      11508,
      14647,
      18668,
      23818,
      30057,
      37245,
      46191,
      58303,
      72943,
      90629,
      111598,
      140733,
      38870
    ]
  },
  {
    "name": "得力 透明标签贴",
    "category": "标签贴纸",
    "reason": "直播间持续爆单",
    "currentSales": 64808,
    "growth7d": 135,
    "predictScore": 83,
    "trendData": [
      30354,
      34451,
      37631,
      42619,
      46485,
      50797,
      56787,
      64141,
      70374,
      80052,
      90085,
      101202,
      64808
    ]
  },
  {
    "name": "雅柯莱 姓名贴 刺绣",
    "category": "标签贴纸",
    "reason": "社交平台口碑传播",
    "currentSales": 60992,
    "growth7d": 172,
    "predictScore": 77,
    "trendData": [
      26098,
      29453,
      33064,
      38221,
      44364,
      50658,
      58149,
      65085,
      74069,
      84358,
      96479,
      107938,
      60992
    ]
  },
  {
    "name": "精臣 标签纸 打印机用",
    "category": "标签贴纸",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 12515,
    "growth7d": 267,
    "predictScore": 79,
    "trendData": [
      4220,
      5146,
      6127,
      7373,
      9005,
      11131,
      13781,
      16452,
      20250,
      25096,
      30727,
      36767,
      12515
    ]
  },
  {
    "name": "美乐 衍纸套装",
    "category": "手工DIY套装",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 49934,
    "growth7d": 342,
    "predictScore": 82,
    "trendData": [
      14251,
      18422,
      23025,
      29641,
      38260,
      49106,
      62236,
      80159,
      103607,
      130996,
      163527,
      209901,
      49934
    ]
  },
  {
    "name": "美乐 创意美劳材料包",
    "category": "手工DIY套装",
    "reason": "小红书种草笔记爆发",
    "currentSales": 22172,
    "growth7d": 299,
    "predictScore": 82,
    "trendData": [
      6794,
      8329,
      10122,
      12695,
      15712,
      19354,
      23748,
      29824,
      37262,
      45425,
      55881,
      69010,
      22172
    ]
  },
  {
    "name": "晨光 拼豆套装",
    "category": "手工DIY套装",
    "reason": "618期间搜索量飙升",
    "currentSales": 79482,
    "growth7d": 353,
    "predictScore": 80,
    "trendData": [
      22167,
      27930,
      36201,
      45647,
      58737,
      74347,
      95197,
      122762,
      156336,
      198650,
      251194,
      321288,
      79482
    ]
  },
  {
    "name": "晨光 木质手工模型",
    "category": "手工DIY套装",
    "reason": "直播间持续爆单",
    "currentSales": 38722,
    "growth7d": 375,
    "predictScore": 70,
    "trendData": [
      10762,
      13725,
      17858,
      22977,
      30218,
      38590,
      49274,
      63343,
      81717,
      105268,
      137394,
      176621,
      38722
    ]
  },
  {
    "name": "幻彩 剪纸套装",
    "category": "手工DIY套装",
    "reason": "社交平台口碑传播",
    "currentSales": 25191,
    "growth7d": 197,
    "predictScore": 68,
    "trendData": [
      9927,
      11381,
      13065,
      15419,
      17955,
      20496,
      23795,
      27874,
      32959,
      38212,
      45295,
      51651,
      25191
    ]
  },
  {
    "name": "得力 儿童剪贴画材料",
    "category": "手工DIY套装",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 39292,
    "growth7d": 398,
    "predictScore": 86,
    "trendData": [
      10225,
      13368,
      17447,
      22719,
      30039,
      38903,
      52167,
      68601,
      89755,
      116539,
      151003,
      202289,
      39292
    ]
  },
  {
    "name": "晨光 透明卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 39617,
    "growth7d": 202,
    "predictScore": 95,
    "trendData": [
      15453,
      17869,
      20564,
      23551,
      26909,
      31237,
      35931,
      41381,
      48412,
      55406,
      65111,
      77161,
      39617
    ]
  },
  {
    "name": "得力 桌面卷笔器 大容量",
    "category": "卷笔刀/卷笔器",
    "reason": "小红书种草笔记爆发",
    "currentSales": 36378,
    "growth7d": 213,
    "predictScore": 85,
    "trendData": [
      13857,
      16257,
      18751,
      21588,
      24900,
      29365,
      35153,
      40387,
      48198,
      55435,
      66209,
      77235,
      36378
    ]
  },
  {
    "name": "猫太子 便携卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "618期间搜索量飙升",
    "currentSales": 50093,
    "growth7d": 387,
    "predictScore": 92,
    "trendData": [
      13252,
      17181,
      22627,
      29306,
      38415,
      49618,
      65491,
      86194,
      111629,
      144905,
      187923,
      243594,
      50093
    ]
  },
  {
    "name": "迪士尼 卡通卷笔刀",
    "category": "卷笔刀/卷笔器",
    "reason": "直播间持续爆单",
    "currentSales": 12637,
    "growth7d": 296,
    "predictScore": 91,
    "trendData": [
      3971,
      4846,
      5886,
      7330,
      9120,
      11090,
      13756,
      17142,
      21215,
      26381,
      32703,
      40952,
      12637
    ]
  },
  {
    "name": "得力 削笔器 替换刀片",
    "category": "卷笔刀/卷笔器",
    "reason": "社交平台口碑传播",
    "currentSales": 59391,
    "growth7d": 222,
    "predictScore": 92,
    "trendData": [
      21706,
      25272,
      29653,
      35712,
      41720,
      49694,
      58344,
      68472,
      80578,
      95068,
      111900,
      130016,
      59391
    ]
  },
  {
    "name": "迪士尼 粗杆专用削笔器",
    "category": "卷笔刀/卷笔器",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 66069,
    "growth7d": 210,
    "predictScore": 93,
    "trendData": [
      24705,
      28411,
      33364,
      38558,
      45407,
      52610,
      60417,
      71948,
      85653,
      99540,
      116630,
      138478,
      66069
    ]
  },
  {
    "name": "齐心 便利贴套装",
    "category": "便签本/便条纸/N次贴",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 29299,
    "growth7d": 383,
    "predictScore": 75,
    "trendData": [
      7834,
      10317,
      13398,
      17419,
      22493,
      28905,
      37001,
      48555,
      62841,
      83044,
      107866,
      138445,
      29299
    ]
  },
  {
    "name": "广博 指示标签 箭头",
    "category": "便签本/便条纸/N次贴",
    "reason": "小红书种草笔记爆发",
    "currentSales": 50583,
    "growth7d": 127,
    "predictScore": 88,
    "trendData": [
      24781,
      27766,
      30307,
      33286,
      37254,
      41979,
      46899,
      51209,
      55685,
      62992,
      69829,
      76681,
      50583
    ]
  },
  {
    "name": "齐心 加厚便签纸",
    "category": "便签本/便条纸/N次贴",
    "reason": "618期间搜索量飙升",
    "currentSales": 20704,
    "growth7d": 101,
    "predictScore": 70,
    "trendData": [
      10993,
      11947,
      13042,
      14128,
      15381,
      16478,
      17520,
      19211,
      20566,
      22199,
      24043,
      25661,
      20704
    ]
  },
  {
    "name": "得力 告示贴 荧光色",
    "category": "便签本/便条纸/N次贴",
    "reason": "直播间持续爆单",
    "currentSales": 56551,
    "growth7d": 216,
    "predictScore": 78,
    "trendData": [
      20898,
      24337,
      28649,
      33040,
      38738,
      44708,
      51556,
      59601,
      70589,
      84566,
      99225,
      115912,
      56551
    ]
  },
  {
    "name": "晨光 抽取式便签",
    "category": "便签本/便条纸/N次贴",
    "reason": "社交平台口碑传播",
    "currentSales": 23591,
    "growth7d": 247,
    "predictScore": 83,
    "trendData": [
      8046,
      9512,
      11402,
      13437,
      16420,
      19553,
      23213,
      27293,
      33330,
      40006,
      48757,
      57702,
      23591
    ]
  },
  {
    "name": "晨光 线圈便签本",
    "category": "便签本/便条纸/N次贴",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 22847,
    "growth7d": 342,
    "predictScore": 66,
    "trendData": [
      6557,
      8451,
      10899,
      13682,
      17503,
      22200,
      27795,
      35101,
      44535,
      56649,
      73293,
      93901,
      22847
    ]
  },
  {
    "name": "创意家居 透明笔筒",
    "category": "笔筒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 18981,
    "growth7d": 243,
    "predictScore": 88,
    "trendData": [
      6685,
      7892,
      9467,
      11436,
      13644,
      16542,
      20065,
      23596,
      28826,
      34637,
      40724,
      48257,
      18981
    ]
  },
  {
    "name": "创意家居 磁吸笔筒",
    "category": "笔筒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 64789,
    "growth7d": 361,
    "predictScore": 90,
    "trendData": [
      17961,
      22700,
      28960,
      37402,
      47918,
      60880,
      78136,
      100098,
      127882,
      167328,
      212316,
      270887,
      64789
    ]
  },
  {
    "name": "创意家居 儿童卡通笔筒",
    "category": "笔筒",
    "reason": "618期间搜索量飙升",
    "currentSales": 61316,
    "growth7d": 135,
    "predictScore": 82,
    "trendData": [
      28499,
      32012,
      35613,
      39800,
      44289,
      48593,
      53583,
      60180,
      65726,
      72747,
      81145,
      92058,
      61316
    ]
  },
  {
    "name": "创意家居 折叠伸缩笔筒",
    "category": "笔筒",
    "reason": "直播间持续爆单",
    "currentSales": 30465,
    "growth7d": 136,
    "predictScore": 66,
    "trendData": [
      14085,
      15617,
      17020,
      18913,
      20818,
      22739,
      25375,
      28316,
      32028,
      35312,
      39092,
      44335,
      30465
    ]
  },
  {
    "name": "创意家居 办公笔筒套装",
    "category": "笔筒",
    "reason": "社交平台口碑传播",
    "currentSales": 57791,
    "growth7d": 272,
    "predictScore": 73,
    "trendData": [
      19261,
      23114,
      28294,
      34029,
      41711,
      51739,
      62101,
      76254,
      92693,
      113155,
      136965,
      165046,
      57791
    ]
  },
  {
    "name": "无印良品 分格笔筒",
    "category": "笔筒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 49624,
    "growth7d": 154,
    "predictScore": 73,
    "trendData": [
      22109,
      25015,
      27737,
      30756,
      34899,
      39502,
      43826,
      49903,
      57432,
      65227,
      73039,
      82451,
      49624
    ]
  },
  {
    "name": "晨光 可叠加收纳盒",
    "category": "文具收纳盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 78663,
    "growth7d": 103,
    "predictScore": 68,
    "trendData": [
      41634,
      45559,
      50135,
      53441,
      58513,
      63763,
      69876,
      76140,
      83680,
      90516,
      99799,
      108429,
      78663
    ]
  },
  {
    "name": "宜家 笔筒收纳架",
    "category": "文具收纳盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 78995,
    "growth7d": 275,
    "predictScore": 93,
    "trendData": [
      25230,
      30557,
      37092,
      45939,
      54987,
      66975,
      80606,
      98669,
      120531,
      149402,
      184218,
      222435,
      78995
    ]
  },
  {
    "name": "宜家 资料收纳盒",
    "category": "文具收纳盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 31927,
    "growth7d": 169,
    "predictScore": 93,
    "trendData": [
      13261,
      15380,
      17431,
      20078,
      22825,
      25633,
      29277,
      33659,
      39171,
      44430,
      50997,
      58733,
      31927
    ]
  },
  {
    "name": "纳川 折叠收纳盒",
    "category": "文具收纳盒",
    "reason": "直播间持续爆单",
    "currentSales": 74380,
    "growth7d": 376,
    "predictScore": 87,
    "trendData": [
      20480,
      26607,
      34552,
      45446,
      57951,
      73979,
      94313,
      124676,
      165073,
      215122,
      276837,
      358844,
      74380
    ]
  },
  {
    "name": "晨光 文具整理架",
    "category": "文具收纳盒",
    "reason": "社交平台口碑传播",
    "currentSales": 21991,
    "growth7d": 297,
    "predictScore": 97,
    "trendData": [
      6904,
      8409,
      10507,
      12891,
      15850,
      19655,
      24831,
      30544,
      38484,
      47767,
      59809,
      73361,
      21991
    ]
  },
  {
    "name": "无印良品 桌面杂物收纳",
    "category": "文具收纳盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 76401,
    "growth7d": 286,
    "predictScore": 80,
    "trendData": [
      24562,
      29971,
      36688,
      44338,
      54815,
      68058,
      82559,
      99950,
      122852,
      153024,
      190038,
      232361,
      76401
    ]
  },
  {
    "name": "得力 杂志收纳架",
    "category": "桌面收纳架",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 68345,
    "growth7d": 284,
    "predictScore": 81,
    "trendData": [
      22032,
      26545,
      33135,
      40451,
      50306,
      61071,
      74854,
      93586,
      114488,
      138384,
      169701,
      209562,
      68345
    ]
  },
  {
    "name": "纳川 显示器增高收纳",
    "category": "桌面收纳架",
    "reason": "小红书种草笔记爆发",
    "currentSales": 23201,
    "growth7d": 189,
    "predictScore": 96,
    "trendData": [
      9372,
      10857,
      12507,
      14202,
      16513,
      19247,
      22588,
      26363,
      30728,
      35970,
      41265,
      47003,
      23201
    ]
  },
  {
    "name": "宜家 多功能桌面架",
    "category": "桌面收纳架",
    "reason": "618期间搜索量飙升",
    "currentSales": 72539,
    "growth7d": 203,
    "predictScore": 72,
    "trendData": [
      27347,
      31346,
      36178,
      42911,
      49815,
      57232,
      67627,
      79546,
      94291,
      109537,
      129273,
      151107,
      72539
    ]
  },
  {
    "name": "纳川 竹木收纳架",
    "category": "桌面收纳架",
    "reason": "直播间持续爆单",
    "currentSales": 48294,
    "growth7d": 297,
    "predictScore": 74,
    "trendData": [
      15021,
      18688,
      23585,
      28868,
      36207,
      44009,
      54501,
      67177,
      82059,
      103270,
      126129,
      159294,
      48294
    ]
  },
  {
    "name": "得力 办公桌面架",
    "category": "桌面收纳架",
    "reason": "社交平台口碑传播",
    "currentSales": 56190,
    "growth7d": 322,
    "predictScore": 88,
    "trendData": [
      16682,
      20616,
      26283,
      32882,
      40552,
      50271,
      64169,
      82279,
      103206,
      130211,
      161954,
      202142,
      56190
    ]
  },
  {
    "name": "晨光 透明分层收纳架",
    "category": "桌面收纳架",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 33178,
    "growth7d": 97,
    "predictScore": 87,
    "trendData": [
      18583,
      19736,
      21562,
      22883,
      24965,
      27571,
      29494,
      32022,
      33959,
      37645,
      40170,
      42967,
      33178
    ]
  },
  {
    "name": "得力 自粘书套 免裁剪",
    "category": "书皮/书套",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 58028,
    "growth7d": 144,
    "predictScore": 94,
    "trendData": [
      26264,
      29377,
      32290,
      36446,
      41746,
      47645,
      52819,
      58837,
      64764,
      73755,
      81361,
      92457,
      58028
    ]
  },
  {
    "name": "晨光 透明书皮 加厚",
    "category": "书皮/书套",
    "reason": "小红书种草笔记爆发",
    "currentSales": 37406,
    "growth7d": 104,
    "predictScore": 65,
    "trendData": [
      19949,
      22072,
      24077,
      26084,
      28153,
      31358,
      34320,
      38126,
      42333,
      46670,
      51905,
      55611,
      37406
    ]
  },
  {
    "name": "真彩 课本书套 防水",
    "category": "书皮/书套",
    "reason": "618期间搜索量飙升",
    "currentSales": 43150,
    "growth7d": 237,
    "predictScore": 83,
    "trendData": [
      14946,
      17677,
      20770,
      24309,
      28805,
      33838,
      39627,
      47664,
      57529,
      68409,
      82949,
      98386,
      43150
    ]
  },
  {
    "name": "真彩 塑料书皮 卡通",
    "category": "书皮/书套",
    "reason": "直播间持续爆单",
    "currentSales": 22208,
    "growth7d": 217,
    "predictScore": 95,
    "trendData": [
      8114,
      9642,
      11326,
      13387,
      15830,
      18262,
      21936,
      26157,
      30559,
      35540,
      41050,
      48394,
      22208
    ]
  },
  {
    "name": "齐心 书皮 一年级专用",
    "category": "书皮/书套",
    "reason": "社交平台口碑传播",
    "currentSales": 20390,
    "growth7d": 347,
    "predictScore": 79,
    "trendData": [
      5745,
      7202,
      9364,
      11941,
      15368,
      19814,
      25551,
      32817,
      42620,
      54644,
      70243,
      89188,
      20390
    ]
  },
  {
    "name": "晨光 环保包书皮",
    "category": "书皮/书套",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 59955,
    "growth7d": 229,
    "predictScore": 94,
    "trendData": [
      21187,
      25442,
      30729,
      37210,
      44376,
      51657,
      60612,
      73200,
      87017,
      101672,
      120907,
      140672,
      59955
    ]
  },
  {
    "name": "温莎牛顿 纺织颜料 手绘",
    "category": "美术颜料",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 47710,
    "growth7d": 325,
    "predictScore": 75,
    "trendData": [
      14232,
      18204,
      22700,
      29137,
      36251,
      45878,
      56816,
      72414,
      92332,
      116878,
      149238,
      191740,
      47710
    ]
  },
  {
    "name": "马利 颜料画笔套装",
    "category": "美术颜料",
    "reason": "小红书种草笔记爆发",
    "currentSales": 51612,
    "growth7d": 338,
    "predictScore": 68,
    "trendData": [
      14776,
      18468,
      23549,
      30061,
      38816,
      48811,
      61536,
      76924,
      96195,
      123098,
      156641,
      195668,
      51612
    ]
  },
  {
    "name": "鲁本斯 固体水彩 便携",
    "category": "美术颜料",
    "reason": "618期间搜索量飙升",
    "currentSales": 13762,
    "growth7d": 272,
    "predictScore": 95,
    "trendData": [
      4598,
      5609,
      6712,
      8091,
      9788,
      11759,
      14244,
      17522,
      21541,
      26222,
      31353,
      37751,
      13762
    ]
  },
  {
    "name": "马利 金属色颜料",
    "category": "美术颜料",
    "reason": "直播间持续爆单",
    "currentSales": 66123,
    "growth7d": 137,
    "predictScore": 82,
    "trendData": [
      31570,
      35756,
      40666,
      46354,
      51489,
      56215,
      62621,
      69028,
      76969,
      86014,
      97948,
      107238,
      66123
    ]
  },
  {
    "name": "鲁本斯 颜料调色盘",
    "category": "美术颜料",
    "reason": "社交平台口碑传播",
    "currentSales": 54590,
    "growth7d": 372,
    "predictScore": 70,
    "trendData": [
      15219,
      19352,
      24686,
      32077,
      41404,
      53367,
      69519,
      89438,
      115653,
      150647,
      192398,
      248437,
      54590
    ]
  },
  {
    "name": "青竹 颜料补充装",
    "category": "美术颜料",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 16733,
    "growth7d": 361,
    "predictScore": 68,
    "trendData": [
      4617,
      5954,
      7580,
      9934,
      12856,
      16376,
      20912,
      26760,
      33906,
      43342,
      56834,
      74300,
      16733
    ]
  },
  {
    "name": "晨光 双面胶 强力",
    "category": "办公文具",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 37392,
    "growth7d": 185,
    "predictScore": 88,
    "trendData": [
      14882,
      17007,
      19523,
      22285,
      25538,
      29187,
      34187,
      38912,
      44844,
      51389,
      59287,
      67367,
      37392
    ]
  },
  {
    "name": "可得优 透明胶带 封箱",
    "category": "办公文具",
    "reason": "小红书种草笔记爆发",
    "currentSales": 65818,
    "growth7d": 252,
    "predictScore": 70,
    "trendData": [
      22879,
      27389,
      33229,
      40658,
      49076,
      59137,
      69828,
      83311,
      99517,
      120489,
      142981,
      168823,
      65818
    ]
  },
  {
    "name": "广博 美工刀 自动锁",
    "category": "办公文具",
    "reason": "618期间搜索量飙升",
    "currentSales": 54373,
    "growth7d": 306,
    "predictScore": 73,
    "trendData": [
      16983,
      21339,
      27045,
      33527,
      41367,
      50766,
      63498,
      79800,
      99827,
      124261,
      152597,
      186362,
      54373
    ]
  },
  {
    "name": "齐心 计算器 太阳能",
    "category": "办公文具",
    "reason": "直播间持续爆单",
    "currentSales": 40037,
    "growth7d": 377,
    "predictScore": 70,
    "trendData": [
      10921,
      14448,
      18726,
      24231,
      31142,
      39740,
      52571,
      68781,
      89962,
      118587,
      156367,
      204363,
      40037
    ]
  },
  {
    "name": "可得优 白板 磁性",
    "category": "办公文具",
    "reason": "社交平台口碑传播",
    "currentSales": 18790,
    "growth7d": 397,
    "predictScore": 93,
    "trendData": [
      5000,
      6697,
      8713,
      11533,
      14930,
      19985,
      26295,
      35201,
      47081,
      62290,
      82150,
      107849,
      18790
    ]
  },
  {
    "name": "晨光 印台 速干",
    "category": "办公文具",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 43510,
    "growth7d": 173,
    "predictScore": 75,
    "trendData": [
      18092,
      20485,
      23400,
      27240,
      31316,
      35616,
      40403,
      46685,
      53648,
      61266,
      69675,
      80475,
      43510
    ]
  },
  {
    "name": "百乐 毛笔套装 书法",
    "category": "笔类套装/礼盒",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 27074,
    "growth7d": 366,
    "predictScore": 68,
    "trendData": [
      7540,
      9827,
      12733,
      16506,
      21370,
      27079,
      35233,
      45762,
      58428,
      74378,
      95014,
      122064,
      27074
    ]
  },
  {
    "name": "英雄 签字笔礼盒",
    "category": "笔类套装/礼盒",
    "reason": "小红书种草笔记爆发",
    "currentSales": 10024,
    "growth7d": 166,
    "predictScore": 73,
    "trendData": [
      4308,
      4930,
      5676,
      6360,
      7141,
      8230,
      9472,
      10761,
      12252,
      13990,
      16100,
      18713,
      10024
    ]
  },
  {
    "name": "英雄 学生笔类大礼包",
    "category": "笔类套装/礼盒",
    "reason": "618期间搜索量飙升",
    "currentSales": 24985,
    "growth7d": 340,
    "predictScore": 85,
    "trendData": [
      7343,
      9494,
      12231,
      15582,
      19600,
      24560,
      31689,
      40666,
      51750,
      65836,
      82980,
      106917,
      24985
    ]
  },
  {
    "name": "毕加索 马克笔+彩铅套装",
    "category": "笔类套装/礼盒",
    "reason": "直播间持续爆单",
    "currentSales": 13951,
    "growth7d": 297,
    "predictScore": 90,
    "trendData": [
      4303,
      5238,
      6593,
      8254,
      10016,
      12162,
      15028,
      18307,
      22970,
      28085,
      35170,
      43009,
      13951
    ]
  },
  {
    "name": "晨光 考试笔套装",
    "category": "笔类套装/礼盒",
    "reason": "社交平台口碑传播",
    "currentSales": 52990,
    "growth7d": 102,
    "predictScore": 84,
    "trendData": [
      28403,
      31560,
      34092,
      37557,
      41393,
      45203,
      48941,
      53575,
      58168,
      63830,
      67938,
      73933,
      52990
    ]
  },
  {
    "name": "毕加索 彩色笔全套",
    "category": "笔类套装/礼盒",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 70287,
    "growth7d": 305,
    "predictScore": 82,
    "trendData": [
      21598,
      26372,
      33166,
      41914,
      52444,
      65399,
      80965,
      99382,
      121982,
      152707,
      192315,
      240172,
      70287
    ]
  },
  {
    "name": "kinbor 复古文具",
    "category": "文创用品",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 16756,
    "growth7d": 226,
    "predictScore": 81,
    "trendData": [
      5984,
      6984,
      8357,
      10064,
      12041,
      14383,
      17030,
      19798,
      23840,
      28681,
      34540,
      40971,
      16756
    ]
  },
  {
    "name": "MUJI 国潮文具套装",
    "category": "文创用品",
    "reason": "小红书种草笔记爆发",
    "currentSales": 24229,
    "growth7d": 80,
    "predictScore": 76,
    "trendData": [
      14311,
      15623,
      17020,
      18171,
      19782,
      20772,
      22246,
      24006,
      25987,
      27881,
      29694,
      32483,
      24229
    ]
  },
  {
    "name": "kinbor 治愈系文具",
    "category": "文创用品",
    "reason": "618期间搜索量飙升",
    "currentSales": 65596,
    "growth7d": 374,
    "predictScore": 96,
    "trendData": [
      18242,
      23340,
      30554,
      39971,
      51241,
      65533,
      83865,
      109852,
      142168,
      184767,
      238861,
      311874,
      65596
    ]
  },
  {
    "name": "晨光生活馆 极简文具",
    "category": "文创用品",
    "reason": "直播间持续爆单",
    "currentSales": 57866,
    "growth7d": 218,
    "predictScore": 78,
    "trendData": [
      21811,
      25348,
      29712,
      34484,
      41123,
      47421,
      56867,
      67038,
      80595,
      94940,
      112670,
      134033,
      57866
    ]
  },
  {
    "name": "晨光生活馆 莫兰迪色文具",
    "category": "文创用品",
    "reason": "社交平台口碑传播",
    "currentSales": 17189,
    "growth7d": 127,
    "predictScore": 75,
    "trendData": [
      8248,
      9312,
      10296,
      11591,
      12818,
      13993,
      15334,
      16819,
      19007,
      21246,
      23499,
      26079,
      17189
    ]
  },
  {
    "name": "晨光生活馆 原创设计笔",
    "category": "文创用品",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 27064,
    "growth7d": 116,
    "predictScore": 89,
    "trendData": [
      13869,
      15435,
      16608,
      18543,
      20507,
      22759,
      24914,
      27468,
      30455,
      33952,
      36823,
      40349,
      27064
    ]
  },
  {
    "name": "兄弟 烫印姓名贴",
    "category": "姓名贴",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 76438,
    "growth7d": 87,
    "predictScore": 94,
    "trendData": [
      44209,
      47811,
      52512,
      55816,
      61345,
      65797,
      70250,
      75657,
      81886,
      88761,
      96027,
      104521,
      76438
    ]
  },
  {
    "name": "雅柯莱 硅胶姓名扣",
    "category": "姓名贴",
    "reason": "小红书种草笔记爆发",
    "currentSales": 38435,
    "growth7d": 314,
    "predictScore": 78,
    "trendData": [
      11410,
      14093,
      17950,
      22631,
      28302,
      35200,
      43549,
      55233,
      70295,
      87877,
      112074,
      142520,
      38435
    ]
  },
  {
    "name": "兄弟 校服姓名标签",
    "category": "姓名贴",
    "reason": "618期间搜索量飙升",
    "currentSales": 36208,
    "growth7d": 88,
    "predictScore": 75,
    "trendData": [
      21129,
      22603,
      24496,
      26855,
      28462,
      30131,
      32332,
      35251,
      37705,
      40756,
      43975,
      47349,
      36208
    ]
  },
  {
    "name": "兄弟 文具姓名贴",
    "category": "姓名贴",
    "reason": "直播间持续爆单",
    "currentSales": 31780,
    "growth7d": 138,
    "predictScore": 65,
    "trendData": [
      14982,
      16576,
      18811,
      21041,
      23583,
      25736,
      28617,
      32587,
      35812,
      40557,
      45442,
      50239,
      31780
    ]
  },
  {
    "name": "兄弟 书本姓名贴 透明",
    "category": "姓名贴",
    "reason": "社交平台口碑传播",
    "currentSales": 51389,
    "growth7d": 152,
    "predictScore": 66,
    "trendData": [
      23364,
      26796,
      30306,
      34851,
      38672,
      44137,
      48943,
      56236,
      63237,
      71980,
      82613,
      93465,
      51389
    ]
  },
  {
    "name": "兄弟 贴纸式姓名贴",
    "category": "姓名贴",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 53842,
    "growth7d": 248,
    "predictScore": 95,
    "trendData": [
      18817,
      22612,
      26938,
      32761,
      39560,
      48244,
      57811,
      70790,
      84030,
      102912,
      124182,
      147728,
      53842
    ]
  },
  {
    "name": "DIY乐园 拼豆镊子工具",
    "category": "拼豆/咕卡套装",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 66121,
    "growth7d": 267,
    "predictScore": 74,
    "trendData": [
      21516,
      25632,
      30640,
      37289,
      44635,
      53386,
      63888,
      79017,
      95285,
      115315,
      138936,
      171738,
      66121
    ]
  },
  {
    "name": "创意工坊 咕卡底卡 透明",
    "category": "拼豆/咕卡套装",
    "reason": "小红书种草笔记爆发",
    "currentSales": 52641,
    "growth7d": 228,
    "predictScore": 81,
    "trendData": [
      19239,
      22748,
      26429,
      31922,
      37233,
      44354,
      53547,
      62185,
      72551,
      85696,
      101938,
      122657,
      52641
    ]
  },
  {
    "name": "DIY乐园 拼豆挂件材料",
    "category": "拼豆/咕卡套装",
    "reason": "618期间搜索量飙升",
    "currentSales": 76819,
    "growth7d": 122,
    "predictScore": 86,
    "trendData": [
      38827,
      42952,
      47444,
      51267,
      55568,
      60262,
      67042,
      74876,
      81707,
      90560,
      100643,
      110096,
      76819
    ]
  },
  {
    "name": "DIY乐园 咕卡装饰宝石",
    "category": "拼豆/咕卡套装",
    "reason": "直播间持续爆单",
    "currentSales": 75694,
    "growth7d": 378,
    "predictScore": 86,
    "trendData": [
      20452,
      26522,
      34309,
      45378,
      58775,
      77912,
      102913,
      133246,
      172138,
      220884,
      287214,
      378451,
      75694
    ]
  },
  {
    "name": "DIY乐园 拼豆收纳盒",
    "category": "拼豆/咕卡套装",
    "reason": "社交平台口碑传播",
    "currentSales": 15589,
    "growth7d": 177,
    "predictScore": 90,
    "trendData": [
      6485,
      7554,
      8735,
      9820,
      11424,
      13034,
      14624,
      16835,
      19678,
      22801,
      25980,
      29953,
      15589
    ]
  },
  {
    "name": "创意工坊 咕卡奶油胶",
    "category": "拼豆/咕卡套装",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 10619,
    "growth7d": 380,
    "predictScore": 69,
    "trendData": [
      2932,
      3784,
      4944,
      6505,
      8516,
      10894,
      14183,
      18388,
      24186,
      31069,
      39731,
      50993,
      10619
    ]
  },
  {
    "name": "辉柏嘉 马克雷诺彩铅",
    "category": "彩色铅笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 55803,
    "growth7d": 128,
    "predictScore": 87,
    "trendData": [
      27203,
      30079,
      32999,
      37146,
      40845,
      45916,
      51903,
      57158,
      61962,
      67606,
      76559,
      83323,
      55803
    ]
  },
  {
    "name": "辉柏嘉 素描彩铅",
    "category": "彩色铅笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 66847,
    "growth7d": 142,
    "predictScore": 84,
    "trendData": [
      30896,
      34901,
      38388,
      42413,
      48019,
      54682,
      61646,
      68078,
      75615,
      84104,
      92826,
      105343,
      66847
    ]
  },
  {
    "name": "MARCO 彩铅收纳笔帘",
    "category": "彩色铅笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 47430,
    "growth7d": 156,
    "predictScore": 98,
    "trendData": [
      21252,
      24285,
      27331,
      30470,
      33760,
      37485,
      43182,
      49375,
      54947,
      62408,
      71377,
      79309,
      47430
    ]
  },
  {
    "name": "马可 秘密花园彩铅",
    "category": "彩色铅笔",
    "reason": "直播间持续爆单",
    "currentSales": 49609,
    "growth7d": 298,
    "predictScore": 73,
    "trendData": [
      15143,
      18792,
      23608,
      29051,
      35544,
      44919,
      55415,
      69525,
      86116,
      106585,
      131524,
      162249,
      49609
    ]
  },
  {
    "name": "辉柏嘉 软芯彩铅",
    "category": "彩色铅笔",
    "reason": "社交平台口碑传播",
    "currentSales": 49789,
    "growth7d": 202,
    "predictScore": 80,
    "trendData": [
      19103,
      22592,
      26698,
      30659,
      35783,
      40814,
      48368,
      55784,
      64892,
      76519,
      90375,
      106144,
      49789
    ]
  },
  {
    "name": "晨光 彩铅补充装",
    "category": "彩色铅笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 37396,
    "growth7d": 192,
    "predictScore": 76,
    "trendData": [
      14583,
      16524,
      19429,
      22719,
      26458,
      30235,
      35053,
      41093,
      47151,
      54143,
      62522,
      73848,
      37396
    ]
  },
  {
    "name": "得力 磁吸白板笔",
    "category": "白板笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 45485,
    "growth7d": 308,
    "predictScore": 67,
    "trendData": [
      13647,
      17271,
      21487,
      26424,
      32965,
      41128,
      51798,
      65322,
      82148,
      104109,
      130700,
      161545,
      45485
    ]
  },
  {
    "name": "齐心 环保白板笔",
    "category": "白板笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 11053,
    "growth7d": 377,
    "predictScore": 86,
    "trendData": [
      2978,
      3942,
      5065,
      6578,
      8518,
      10930,
      14147,
      18310,
      23833,
      30751,
      40432,
      53101,
      11053
    ]
  },
  {
    "name": "齐心 速干白板笔",
    "category": "白板笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 18042,
    "growth7d": 191,
    "predictScore": 76,
    "trendData": [
      7272,
      8581,
      9843,
      11318,
      12821,
      14577,
      16650,
      19493,
      22129,
      25758,
      30313,
      35742,
      18042
    ]
  },
  {
    "name": "真彩 白板笔 12色套装",
    "category": "白板笔",
    "reason": "直播间持续爆单",
    "currentSales": 23523,
    "growth7d": 218,
    "predictScore": 94,
    "trendData": [
      8789,
      10417,
      12177,
      14473,
      17394,
      20906,
      25013,
      29127,
      34527,
      41164,
      48066,
      57658,
      23523
    ]
  },
  {
    "name": "晨光 迷你白板笔",
    "category": "白板笔",
    "reason": "社交平台口碑传播",
    "currentSales": 13989,
    "growth7d": 227,
    "predictScore": 71,
    "trendData": [
      4985,
      5985,
      7225,
      8472,
      9920,
      11807,
      14147,
      17054,
      20595,
      24707,
      28976,
      34657,
      13989
    ]
  },
  {
    "name": "晨光 白板笔 替换芯",
    "category": "白板笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 64173,
    "growth7d": 323,
    "predictScore": 83,
    "trendData": [
      18922,
      24051,
      29832,
      37834,
      47875,
      59925,
      75637,
      94057,
      119914,
      150780,
      192410,
      245173,
      64173
    ]
  },
  {
    "name": "齐心 A5文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 35167,
    "growth7d": 169,
    "predictScore": 81,
    "trendData": [
      14922,
      16862,
      19320,
      21995,
      25296,
      28477,
      32552,
      36639,
      41613,
      47780,
      54135,
      61620,
      35167
    ]
  },
  {
    "name": "广博 彩色分类文件袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "小红书种草笔记爆发",
    "currentSales": 25258,
    "growth7d": 291,
    "predictScore": 89,
    "trendData": [
      8107,
      9899,
      12107,
      15083,
      18261,
      22474,
      27293,
      33770,
      42065,
      51375,
      63139,
      78604,
      25258
    ]
  },
  {
    "name": "三木 牛津布资料袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "618期间搜索量飙升",
    "currentSales": 58653,
    "growth7d": 225,
    "predictScore": 88,
    "trendData": [
      21619,
      25218,
      29451,
      34874,
      42087,
      48939,
      57831,
      69243,
      83564,
      99561,
      115412,
      138067,
      58653
    ]
  },
  {
    "name": "得力 加厚透明袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "直播间持续爆单",
    "currentSales": 67437,
    "growth7d": 139,
    "predictScore": 81,
    "trendData": [
      31387,
      35474,
      40168,
      44073,
      49840,
      56858,
      63111,
      71008,
      80446,
      88289,
      97307,
      108621,
      67437
    ]
  },
  {
    "name": "广博 科目分类袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "社交平台口碑传播",
    "currentSales": 48188,
    "growth7d": 252,
    "predictScore": 95,
    "trendData": [
      16726,
      20379,
      24098,
      28838,
      35317,
      42022,
      50901,
      61470,
      73889,
      90152,
      109485,
      133310,
      48188
    ]
  },
  {
    "name": "广博 票据收纳袋",
    "category": "按扣/拉链文件资料袋/收纳袋",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 20951,
    "growth7d": 135,
    "predictScore": 90,
    "trendData": [
      9900,
      11026,
      12233,
      13722,
      15380,
      17153,
      19205,
      21497,
      23798,
      26680,
      29403,
      32988,
      20951
    ]
  },
  {
    "name": "PLUS 创意修正带",
    "category": "修正带",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 24849,
    "growth7d": 349,
    "predictScore": 94,
    "trendData": [
      6940,
      8951,
      11572,
      14957,
      19415,
      25224,
      32089,
      41247,
      51943,
      66200,
      83146,
      106918,
      24849
    ]
  },
  {
    "name": "PLUS 修正带替芯 3个",
    "category": "修正带",
    "reason": "小红书种草笔记爆发",
    "currentSales": 39464,
    "growth7d": 205,
    "predictScore": 91,
    "trendData": [
      15199,
      17758,
      20620,
      23566,
      27725,
      32667,
      38695,
      45672,
      54333,
      62613,
      71577,
      84213,
      39464
    ]
  },
  {
    "name": "真彩 宽幅修正带",
    "category": "修正带",
    "reason": "618期间搜索量飙升",
    "currentSales": 29265,
    "growth7d": 259,
    "predictScore": 66,
    "trendData": [
      9969,
      11992,
      14255,
      17369,
      21379,
      25413,
      31033,
      37981,
      46657,
      56869,
      67764,
      82231,
      29265
    ]
  },
  {
    "name": "PLUS 按动修正带",
    "category": "修正带",
    "reason": "直播间持续爆单",
    "currentSales": 41352,
    "growth7d": 379,
    "predictScore": 69,
    "trendData": [
      11067,
      14615,
      18870,
      24556,
      32052,
      42473,
      56017,
      71766,
      95149,
      123520,
      158352,
      202434,
      41352
    ]
  },
  {
    "name": "真彩 涂改带 考试用",
    "category": "修正带",
    "reason": "社交平台口碑传播",
    "currentSales": 12388,
    "growth7d": 277,
    "predictScore": 86,
    "trendData": [
      4036,
      4990,
      6027,
      7358,
      9039,
      11204,
      13718,
      16596,
      20686,
      25662,
      30952,
      38355,
      12388
    ]
  },
  {
    "name": "晨光 修正带 不断带",
    "category": "修正带",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 47728,
    "growth7d": 267,
    "predictScore": 97,
    "trendData": [
      15863,
      19075,
      23363,
      28535,
      34883,
      42730,
      52270,
      62271,
      76923,
      94691,
      115918,
      140928,
      47728
    ]
  },
  {
    "name": "凌美 旋转吸墨钢笔",
    "category": "钢笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 14532,
    "growth7d": 210,
    "predictScore": 74,
    "trendData": [
      5491,
      6338,
      7571,
      8716,
      10029,
      11807,
      13647,
      15692,
      18634,
      21529,
      25481,
      30276,
      14532
    ]
  },
  {
    "name": "凌美 速写钢笔",
    "category": "钢笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 53670,
    "growth7d": 119,
    "predictScore": 94,
    "trendData": [
      26820,
      29922,
      32893,
      35850,
      39158,
      44082,
      48693,
      54699,
      59275,
      64223,
      71117,
      78806,
      53670
    ]
  },
  {
    "name": "晨光 钢笔套装 含墨囊",
    "category": "钢笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 69876,
    "growth7d": 293,
    "predictScore": 77,
    "trendData": [
      22189,
      27502,
      34639,
      43392,
      54455,
      66137,
      80067,
      100122,
      125157,
      155984,
      190915,
      234959,
      69876
    ]
  },
  {
    "name": "派克 金属杆钢笔",
    "category": "钢笔",
    "reason": "直播间持续爆单",
    "currentSales": 15266,
    "growth7d": 299,
    "predictScore": 90,
    "trendData": [
      4803,
      6075,
      7617,
      9592,
      11832,
      14947,
      18410,
      22847,
      27932,
      34990,
      42537,
      52930,
      15266
    ]
  },
  {
    "name": "英雄 复古钢笔",
    "category": "钢笔",
    "reason": "社交平台口碑传播",
    "currentSales": 46588,
    "growth7d": 302,
    "predictScore": 77,
    "trendData": [
      14310,
      17947,
      22133,
      27557,
      33955,
      42074,
      52066,
      65705,
      81527,
      102807,
      128284,
      161732,
      46588
    ]
  },
  {
    "name": "派克 可替换墨囊钢笔",
    "category": "钢笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 74505,
    "growth7d": 399,
    "predictScore": 71,
    "trendData": [
      19845,
      26617,
      35670,
      47122,
      62392,
      83272,
      110491,
      145109,
      190610,
      255582,
      331307,
      433879,
      74505
    ]
  },
  {
    "name": "宝虹 儿童画本 空白",
    "category": "画纸/画本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 74214,
    "growth7d": 390,
    "predictScore": 87,
    "trendData": [
      20205,
      26550,
      34292,
      44761,
      58126,
      75610,
      100929,
      132184,
      173296,
      230760,
      301501,
      387674,
      74214
    ]
  },
  {
    "name": "康颂 绘画本 A3",
    "category": "画纸/画本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 67876,
    "growth7d": 353,
    "predictScore": 97,
    "trendData": [
      18884,
      23776,
      30518,
      39157,
      51070,
      64830,
      82389,
      104017,
      132498,
      167041,
      211753,
      272286,
      67876
    ]
  },
  {
    "name": "获多福 牛皮纸画本",
    "category": "画纸/画本",
    "reason": "618期间搜索量飙升",
    "currentSales": 40488,
    "growth7d": 327,
    "predictScore": 89,
    "trendData": [
      12070,
      15400,
      19717,
      24389,
      31194,
      38692,
      48369,
      61769,
      78548,
      100050,
      125693,
      156852,
      40488
    ]
  },
  {
    "name": "老人头 手绘本 硬壳",
    "category": "画纸/画本",
    "reason": "直播间持续爆单",
    "currentSales": 59180,
    "growth7d": 219,
    "predictScore": 77,
    "trendData": [
      21867,
      25344,
      29562,
      34504,
      40088,
      48162,
      57527,
      69084,
      80782,
      93481,
      112120,
      130090,
      59180
    ]
  },
  {
    "name": "康颂 临摹纸 拷贝纸",
    "category": "画纸/画本",
    "reason": "社交平台口碑传播",
    "currentSales": 10788,
    "growth7d": 327,
    "predictScore": 67,
    "trendData": [
      3135,
      3988,
      5019,
      6370,
      8191,
      10147,
      12690,
      16042,
      20617,
      26420,
      32747,
      41991,
      10788
    ]
  },
  {
    "name": "老人头 刮画纸 彩色",
    "category": "画纸/画本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 31282,
    "growth7d": 211,
    "predictScore": 78,
    "trendData": [
      11993,
      14198,
      16460,
      19333,
      22803,
      26183,
      31009,
      36874,
      44090,
      50905,
      59673,
      69059,
      31282
    ]
  },
  {
    "name": "齐心 万能胶",
    "category": "胶水",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 63896,
    "growth7d": 251,
    "predictScore": 67,
    "trendData": [
      21869,
      25772,
      30753,
      37333,
      44843,
      52865,
      64417,
      78854,
      93772,
      113696,
      134633,
      159954,
      63896
    ]
  },
  {
    "name": "得力 热熔胶枪",
    "category": "胶水",
    "reason": "小红书种草笔记爆发",
    "currentSales": 12081,
    "growth7d": 267,
    "predictScore": 66,
    "trendData": [
      4049,
      4884,
      5967,
      7340,
      8955,
      10898,
      12979,
      15647,
      19055,
      22709,
      27974,
      34057,
      12081
    ]
  },
  {
    "name": "3M 双面胶点 替芯",
    "category": "胶水",
    "reason": "618期间搜索量飙升",
    "currentSales": 11099,
    "growth7d": 361,
    "predictScore": 67,
    "trendData": [
      3126,
      4103,
      5339,
      6787,
      8844,
      11199,
      14442,
      18827,
      24348,
      31681,
      40826,
      51649,
      11099
    ]
  },
  {
    "name": "UHU 胶水笔 细头",
    "category": "胶水",
    "reason": "直播间持续爆单",
    "currentSales": 33095,
    "growth7d": 139,
    "predictScore": 98,
    "trendData": [
      15260,
      16836,
      19009,
      21387,
      24384,
      27787,
      30766,
      34174,
      38141,
      42402,
      48045,
      54109,
      33095
    ]
  },
  {
    "name": "齐心 PVA白乳胶",
    "category": "胶水",
    "reason": "社交平台口碑传播",
    "currentSales": 44988,
    "growth7d": 352,
    "predictScore": 91,
    "trendData": [
      12917,
      16662,
      21394,
      27672,
      35688,
      45980,
      58104,
      73575,
      94144,
      122569,
      157033,
      204749,
      44988
    ]
  },
  {
    "name": "UHU 手工胶水套装",
    "category": "胶水",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 58060,
    "growth7d": 342,
    "predictScore": 85,
    "trendData": [
      16431,
      20899,
      26622,
      33902,
      43406,
      54568,
      70237,
      88523,
      112706,
      142425,
      184239,
      230365,
      58060
    ]
  },
  {
    "name": "得力 速干笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 53578,
    "growth7d": 111,
    "predictScore": 80,
    "trendData": [
      28384,
      31000,
      33920,
      36359,
      40102,
      44362,
      48861,
      53151,
      59347,
      64841,
      72037,
      78489,
      53578
    ]
  },
  {
    "name": "得力 子弹头笔芯 100支",
    "category": "笔芯/替芯/笔壳",
    "reason": "小红书种草笔记爆发",
    "currentSales": 26287,
    "growth7d": 181,
    "predictScore": 69,
    "trendData": [
      10756,
      12408,
      14390,
      16220,
      18423,
      21453,
      24907,
      28607,
      33236,
      38981,
      44673,
      51331,
      26287
    ]
  },
  {
    "name": "得力 针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "618期间搜索量飙升",
    "currentSales": 51711,
    "growth7d": 396,
    "predictScore": 79,
    "trendData": [
      13802,
      17938,
      23728,
      30995,
      41158,
      53211,
      70760,
      94178,
      123904,
      164716,
      217723,
      290241,
      51711
    ]
  },
  {
    "name": "得力 全针管笔芯",
    "category": "笔芯/替芯/笔壳",
    "reason": "直播间持续爆单",
    "currentSales": 77009,
    "growth7d": 380,
    "predictScore": 85,
    "trendData": [
      21216,
      27462,
      35388,
      45296,
      59578,
      78919,
      103929,
      136932,
      179347,
      235512,
      309392,
      398836,
      77009
    ]
  },
  {
    "name": "得力 笔壳 透明",
    "category": "笔芯/替芯/笔壳",
    "reason": "社交平台口碑传播",
    "currentSales": 79187,
    "growth7d": 377,
    "predictScore": 82,
    "trendData": [
      21652,
      28316,
      37077,
      48853,
      63188,
      81387,
      103913,
      137001,
      181383,
      239859,
      317300,
      404691,
      79187
    ]
  },
  {
    "name": "晨光 笔杆 金属",
    "category": "笔芯/替芯/笔壳",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 14837,
    "growth7d": 154,
    "predictScore": 92,
    "trendData": [
      6507,
      7252,
      8289,
      9341,
      10609,
      11890,
      13609,
      15462,
      17090,
      19267,
      21570,
      24763,
      14837
    ]
  },
  {
    "name": "晨光 细头记号笔",
    "category": "记号笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 43260,
    "growth7d": 292,
    "predictScore": 93,
    "trendData": [
      13588,
      17022,
      21141,
      25934,
      32461,
      39942,
      49178,
      61394,
      76184,
      92914,
      114723,
      142025,
      43260
    ]
  },
  {
    "name": "宝克 记号笔套装 12色",
    "category": "记号笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 40493,
    "growth7d": 95,
    "predictScore": 72,
    "trendData": [
      22210,
      24450,
      26843,
      28834,
      31764,
      33733,
      36469,
      39808,
      44021,
      48596,
      51522,
      55676,
      40493
    ]
  },
  {
    "name": "雪人 大头笔 物流用",
    "category": "记号笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 22322,
    "growth7d": 110,
    "predictScore": 90,
    "trendData": [
      11721,
      12776,
      14021,
      15344,
      16967,
      18198,
      19529,
      21704,
      23681,
      26302,
      29143,
      32177,
      22322
    ]
  },
  {
    "name": "得力 银色记号笔",
    "category": "记号笔",
    "reason": "直播间持续爆单",
    "currentSales": 50923,
    "growth7d": 300,
    "predictScore": 73,
    "trendData": [
      15859,
      19643,
      24579,
      30427,
      37839,
      47782,
      58756,
      72119,
      90618,
      110344,
      137642,
      172747,
      50923
    ]
  },
  {
    "name": "晨光 快递记号笔",
    "category": "记号笔",
    "reason": "社交平台口碑传播",
    "currentSales": 43387,
    "growth7d": 82,
    "predictScore": 73,
    "trendData": [
      25380,
      27397,
      29825,
      32677,
      34344,
      37486,
      40999,
      44050,
      47230,
      51797,
      55339,
      58152,
      43387
    ]
  },
  {
    "name": "斑马 CD记号笔",
    "category": "记号笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 41614,
    "growth7d": 286,
    "predictScore": 65,
    "trendData": [
      13188,
      16529,
      19972,
      24498,
      30314,
      37298,
      46556,
      56247,
      69384,
      85847,
      106593,
      132377,
      41614
    ]
  },
  {
    "name": "六品堂 数字描红本",
    "category": "练字帖/描红本",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 32943,
    "growth7d": 152,
    "predictScore": 73,
    "trendData": [
      15005,
      16752,
      19146,
      21724,
      23972,
      26556,
      29587,
      32904,
      36796,
      42304,
      47023,
      53581,
      32943
    ]
  },
  {
    "name": "田英章 笔画练字",
    "category": "练字帖/描红本",
    "reason": "小红书种草笔记爆发",
    "currentSales": 54699,
    "growth7d": 330,
    "predictScore": 74,
    "trendData": [
      16362,
      20372,
      26135,
      33142,
      41902,
      52647,
      65709,
      84206,
      104985,
      134582,
      171095,
      215433,
      54699
    ]
  },
  {
    "name": "华夏万卷 古诗词字帖",
    "category": "练字帖/描红本",
    "reason": "618期间搜索量飙升",
    "currentSales": 62934,
    "growth7d": 144,
    "predictScore": 69,
    "trendData": [
      29087,
      32766,
      36642,
      41355,
      46725,
      51323,
      57101,
      64977,
      72299,
      82283,
      93834,
      105218,
      62934
    ]
  },
  {
    "name": "田英章 楷书练字帖",
    "category": "练字帖/描红本",
    "reason": "直播间持续爆单",
    "currentSales": 24838,
    "growth7d": 220,
    "predictScore": 93,
    "trendData": [
      9075,
      10734,
      12494,
      14941,
      17509,
      21027,
      25074,
      29770,
      35821,
      41989,
      49593,
      58073,
      24838
    ]
  },
  {
    "name": "墨点 幼儿描红",
    "category": "练字帖/描红本",
    "reason": "社交平台口碑传播",
    "currentSales": 77587,
    "growth7d": 107,
    "predictScore": 97,
    "trendData": [
      40148,
      44057,
      49080,
      52507,
      58009,
      63295,
      70056,
      75421,
      84213,
      94079,
      104434,
      111994,
      77587
    ]
  },
  {
    "name": "六品堂 成人行书字帖",
    "category": "练字帖/描红本",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 68391,
    "growth7d": 98,
    "predictScore": 72,
    "trendData": [
      37528,
      41128,
      44315,
      47866,
      52310,
      57225,
      63272,
      68586,
      73091,
      80473,
      85915,
      93612,
      68391
    ]
  },
  {
    "name": "得力 圆珠笔芯 替换",
    "category": "圆珠笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 22625,
    "growth7d": 333,
    "predictScore": 87,
    "trendData": [
      6590,
      8415,
      10862,
      14007,
      17540,
      22487,
      27973,
      35601,
      44238,
      56480,
      72593,
      93491,
      22625
    ]
  },
  {
    "name": "得力 油性圆珠笔",
    "category": "圆珠笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 68904,
    "growth7d": 244,
    "predictScore": 77,
    "trendData": [
      24155,
      28801,
      35166,
      42732,
      50429,
      60714,
      73961,
      86869,
      103441,
      125473,
      148746,
      177117,
      68904
    ]
  },
  {
    "name": "施耐德 多功能圆珠笔",
    "category": "圆珠笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 33545,
    "growth7d": 178,
    "predictScore": 80,
    "trendData": [
      13910,
      16177,
      18428,
      21430,
      24728,
      27801,
      32028,
      37297,
      42306,
      49309,
      55362,
      63031,
      33545
    ]
  },
  {
    "name": "施耐德 圆珠笔 旋转出芯",
    "category": "圆珠笔",
    "reason": "直播间持续爆单",
    "currentSales": 68752,
    "growth7d": 140,
    "predictScore": 81,
    "trendData": [
      32729,
      36887,
      41556,
      45869,
      50463,
      57481,
      63529,
      69702,
      76673,
      86389,
      96305,
      109493,
      68752
    ]
  },
  {
    "name": "百乐 透明杆圆珠笔",
    "category": "圆珠笔",
    "reason": "社交平台口碑传播",
    "currentSales": 41787,
    "growth7d": 132,
    "predictScore": 87,
    "trendData": [
      20311,
      22652,
      24677,
      26997,
      29927,
      32643,
      36558,
      41265,
      45843,
      49859,
      54932,
      60093,
      41787
    ]
  },
  {
    "name": "百乐 圆珠笔 粗杆",
    "category": "圆珠笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 25169,
    "growth7d": 230,
    "predictScore": 79,
    "trendData": [
      9120,
      10805,
      12888,
      15205,
      18162,
      21861,
      26436,
      31881,
      38064,
      46090,
      54835,
      64893,
      25169
    ]
  },
  {
    "name": "晨光 水溶性蜡笔",
    "category": "蜡笔",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 12307,
    "growth7d": 193,
    "predictScore": 67,
    "trendData": [
      4946,
      5642,
      6441,
      7391,
      8529,
      9888,
      11637,
      13224,
      15472,
      17898,
      20800,
      23699,
      12307
    ]
  },
  {
    "name": "绘儿乐 荧光蜡笔",
    "category": "蜡笔",
    "reason": "小红书种草笔记爆发",
    "currentSales": 13110,
    "growth7d": 158,
    "predictScore": 79,
    "trendData": [
      5720,
      6519,
      7230,
      8041,
      9214,
      10610,
      12077,
      13497,
      15316,
      17522,
      20144,
      22608,
      13110
    ]
  },
  {
    "name": "马利 三角蜡笔 幼儿",
    "category": "蜡笔",
    "reason": "618期间搜索量飙升",
    "currentSales": 74157,
    "growth7d": 212,
    "predictScore": 92,
    "trendData": [
      27993,
      32176,
      37323,
      44682,
      52634,
      60535,
      72129,
      85911,
      99305,
      118468,
      136844,
      158154,
      74157
    ]
  },
  {
    "name": "绘儿乐 蜡笔 48色 专业",
    "category": "蜡笔",
    "reason": "直播间持续爆单",
    "currentSales": 42666,
    "growth7d": 381,
    "predictScore": 68,
    "trendData": [
      11644,
      15349,
      19741,
      25834,
      34239,
      45337,
      59614,
      77734,
      100563,
      128535,
      166504,
      216424,
      42666
    ]
  },
  {
    "name": "马利 人体彩绘蜡笔",
    "category": "蜡笔",
    "reason": "社交平台口碑传播",
    "currentSales": 75987,
    "growth7d": 158,
    "predictScore": 78,
    "trendData": [
      33426,
      37901,
      42280,
      47309,
      52658,
      60092,
      68132,
      77103,
      89139,
      98841,
      113094,
      126245,
      75987
    ]
  },
  {
    "name": "马利 布料蜡笔",
    "category": "蜡笔",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 51946,
    "growth7d": 361,
    "predictScore": 86,
    "trendData": [
      14697,
      18705,
      24454,
      31269,
      40502,
      53163,
      69756,
      89091,
      113275,
      143856,
      188607,
      240757,
      51946
    ]
  },
  {
    "name": "敦煌 夜光书签",
    "category": "书签",
    "reason": "抖音短视频播放量暴增",
    "currentSales": 71989,
    "growth7d": 373,
    "predictScore": 80,
    "trendData": [
      19639,
      25540,
      32914,
      42837,
      55772,
      71548,
      93434,
      121111,
      156664,
      201013,
      258321,
      332465,
      71989
    ]
  },
  {
    "name": "晨光 书签尺 多功能",
    "category": "书签",
    "reason": "小红书种草笔记爆发",
    "currentSales": 27316,
    "growth7d": 392,
    "predictScore": 82,
    "trendData": [
      7171,
      9559,
      12363,
      16138,
      21106,
      27335,
      35659,
      46596,
      61736,
      81571,
      106857,
      138921,
      27316
    ]
  },
  {
    "name": "手工 刺绣书签",
    "category": "书签",
    "reason": "618期间搜索量飙升",
    "currentSales": 44768,
    "growth7d": 246,
    "predictScore": 70,
    "trendData": [
      15563,
      18457,
      21794,
      25748,
      30950,
      36396,
      42983,
      52338,
      61629,
      75212,
      89313,
      109223,
      44768
    ]
  },
  {
    "name": "九木 定制书签",
    "category": "书签",
    "reason": "直播间持续爆单",
    "currentSales": 16581,
    "growth7d": 301,
    "predictScore": 89,
    "trendData": [
      5112,
      6453,
      8058,
      9803,
      12289,
      15512,
      19044,
      24068,
      29855,
      36801,
      45232,
      57253,
      16581
    ]
  },
  {
    "name": "晨光 透明亚克力书签",
    "category": "书签",
    "reason": "社交平台口碑传播",
    "currentSales": 40187,
    "growth7d": 183,
    "predictScore": 69,
    "trendData": [
      16208,
      18668,
      21298,
      24346,
      28407,
      32407,
      37167,
      42141,
      48483,
      54752,
      62192,
      70765,
      40187
    ]
  },
  {
    "name": "敦煌 永生花书签",
    "category": "书签",
    "reason": "考试/暑假场景需求激增",
    "currentSales": 78723,
    "growth7d": 173,
    "predictScore": 93,
    "trendData": [
      33667,
      39234,
      44197,
      50040,
      57583,
      64847,
      72600,
      83708,
      96563,
      109473,
      124475,
      139934,
      78723
    ]
  }
]
};
