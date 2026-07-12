const CATEGORIES_CONFIG = {
  '中性笔': { names: ['速干中性笔 0.5mm 黑色 50支装','按动中性笔 ST笔头 黑色','考试专用中性笔 速干 12支','大容量中性笔 一体式','可擦中性笔 热敏 蓝色 10支','直液式走珠笔 0.5mm','子弹头中性笔 0.38mm 全针管','中性笔套装 12色 彩色','刷题专用笔 0.5mm 速干','按动中性笔 0.5 黑色 3支装','签字笔 商务 金属杆','ST笔头中性笔 大容量'], brands: ['晨光','得力','百乐','斑马','三菱'], price: [1.5, 15], sales: [150000, 800000] },
  '笔记本/记事本': { names: ['活页本 B5 方格','线圈笔记本 A5 加厚','软皮笔记本 PU封面','方格本 网格 A5','加厚笔记本 200页','康奈尔笔记本 B5','错题本 活页 B5','考研专用笔记本','道林纸笔记本 100g','横线笔记本 3本装','牛皮封面记事本 A6','空白素描本 160g'], brands: ['国誉','得力','晨光','无印良品','kinbor'], price: [6, 45], sales: [30000, 250000] },
  '学习套装/礼盒/盲盒': { names: ['考试文具套装 68件','开学大礼包 文具全套','文具盲盒 三丽鸥联名','学习用品礼盒 小学生','小学生文具套装 一年级','中考文具套装 透明袋装','高考加油礼盒 实用型','文具福袋 随机发','奥特曼联名文具盲盒','新学期必备套装','幼儿园文具礼盒','升学礼物文具套装'], brands: ['得力','晨光','迪士尼','三丽鸥','奥特曼'], price: [19.9, 128], sales: [15000, 120000] },
  '马克笔': { names: ['马克笔套装 80色 双头','马克笔 60色 学生用','Touch Mark马克笔 48色','卡西米尔马克笔 120色','动漫专用马克笔 套装','儿童马克笔 可水洗 24色','软头马克笔套装 36色','马克笔 12色 常用色','丙烯马克笔 DIY','金属色马克笔 3支','水性马克笔 画画用','马克笔 单支 补色'], brands: ['Touch Mark','卡西米尔','法卡勒','斯塔','慕娜美'], price: [25, 89], sales: [8000, 80000] },
  '文具盒/笔袋/痛包笔袋': { names: ['电动文具盒 多功能弹射','透明笔袋 考试专用','大容量笔袋 帆布','痛包笔袋 可展示','多层文具盒 铁质','硅胶笔袋 创意造型','帆布笔袋 简约','密码锁文具盒 金属','折叠文具盒 三层','卡通笔袋 迪士尼','弹射铅笔盒 网红款','铅笔盒 双面开'], brands: ['得力','晨光','KOKUYO','迪士尼','三年二班'], price: [9.9, 68], sales: [20000, 150000] },
  '铅笔': { names: ['2B考试铅笔 涂卡专用 20支','自动铅笔 0.5mm 金属杆','HB铅笔 三角杆 30支','素描铅笔套装 14支 2H-8B','洞洞铅笔 矫姿 12支','活动铅笔 0.7mm','考试涂卡铅笔 30支 卡装','木质铅笔 HB 50支 桶装','绘图铅笔 2H 12支','粗杆铅笔 幼儿练字','铅芯 0.5mm HB 自动铅笔用','铅笔帽 保护套 10个'], brands: ['中华','晨光','三菱','马可','辉柏嘉'], price: [5, 28], sales: [30000, 350000] },
  '橡皮擦': { names: ['4B美术橡皮 软 3块装','考试专用橡皮 2B 5块','电动橡皮擦 USB充电','可爱卡通橡皮 创意','素描橡皮 可塑','橡皮擦 不留痕 超净','高光橡皮 细节用','樱花橡皮 大块','超净橡皮 学生用','创意橡皮 食物造型','自动橡皮擦 替芯 20个','橡皮擦套装 3种型号'], brands: ['得力','樱花','晨光','辉柏嘉','蜻蜓'], price: [2, 35], sales: [40000, 400000] },
  '荧光笔': { names: ['淡色荧光笔 双头 6色','荧光笔套装 莫兰迪 10色','柔和色荧光笔 护眼','迷你荧光笔 便携','直液式荧光笔 不渗墨','彩色荧光笔 学生划重点','窗口荧光笔 透明头','荧光笔 粗细双头 5色','果冻色荧光笔 手帐用','速干荧光笔 不拖墨','大容量荧光笔 三角杆','记号荧光笔 标记用'], brands: ['斑马','晨光','百乐','慕娜美','东洋'], price: [6, 35], sales: [25000, 180000] },
  '手帐': { names: ['手账本 A6 活页 文艺','手账贴纸 100张 和风','手账胶带 和纸 15卷装','手账大礼盒套装','手账模板尺 镂空','手账印章套装 木质','手账素材本 拼贴用','手账周计划本 B6','TN旅行手账 牛皮','盐系手账本 方格','手账打孔器 6孔','手账装饰 烫金贴纸'], brands: ['kinbor','Hobonichi','国誉','三年二班','文谷'], price: [12, 98], sales: [10000, 120000] },
  '火漆印章': { names: ['复古火漆印章套装 全套','火漆蜡粒 混色 100粒','火漆印章头 字母定制','火漆封蜡枪 USB','火漆信封套装 毕业','火漆印章 花朵款 单个','火漆蜡条 彩色 10支','火漆勺 木柄 大号','火漆印章礼盒 精装','星座火漆印章','火漆蜡片 成品 30片','毕业纪念火漆套装'], brands: ['慢作','印迹','手帐星球','暮光之印','森活记'], price: [15, 88], sales: [8000, 60000] },
  '水彩笔': { names: ['水彩笔套装 36色 可水洗','儿童水彩笔 粗头 24色','软头水彩笔 48色 专业','三角杆水彩笔 不易断','水彩笔 桶装 24色','细头水彩笔 0.4mm勾线','双头水彩笔 粗细两用','可擦水彩笔 白板通用','水彩笔 12色 便携','金属色水彩笔 6色','水性水彩笔 安全无毒','彩笔套装 儿童绘画'], brands: ['得力','晨光','辉柏嘉','马利','真彩'], price: [9, 59], sales: [25000, 200000] },
  '标签贴纸': { names: ['姓名贴 防水 不干胶 200张','标签打印机 蓝牙便携','分类标签贴 彩色索引','手写标签纸 空白','热敏标签纸 卷装','文件标签 自粘','收纳标签贴 防水','透明标签贴 书脊用','姓名贴 刺绣 可缝','奶茶标签纸 热敏','标签纸 打印机用 连续','口袋标签机 手持'], brands: ['精臣','得力','雅柯莱','兄弟','晨光'], price: [6, 99], sales: [12000, 100000] },
  '手工DIY套装': { names: ['暑假手工材料包 100件','超轻粘土套装 24色','折纸套装 双面彩色 1000张','串珠手工材料包 儿童','毛毡手工包 布艺DIY','编织手链材料包','衍纸套装 工具+纸条','创意美劳材料包','木质手工模型 拼装','剪纸套装 中国风','儿童剪贴画材料包','手工纸 彩色 A4 100张'], brands: ['得力','美乐','晨光','儿童乐园','幻彩'], price: [9.9, 59], sales: [20000, 200000] },
  '卷笔刀/卷笔器': { names: ['电动卷笔刀 USB充电','手摇卷笔刀 儿童安全','迷你卷笔刀 便携','自动进铅卷笔器 桌面','双孔卷笔刀 粗细通用','静音电动削笔器','透明卷笔刀 看得见','桌面卷笔器 大容量','卡通卷笔刀 可爱','削笔器 替换刀片','粗杆专用削笔器','手摇削笔机 金属'], brands: ['得力','天文','晨光','猫太子','迪士尼'], price: [8, 55], sales: [15000, 160000] },
  '便签本/便条纸/N次贴': { names: ['便利贴 莫兰迪色 6色装','N次贴 强粘 76x76mm','透明便签 可写可贴','索引标签贴 荧光5色','创意便签 造型 猫咪','便签本 横线 100页','便利贴套装 办公用','指示标签 箭头型','加厚便签纸 白色','告示贴 荧光色 10本','抽取式便签 盒装','线圈便签本 迷你'], brands: ['3M','得力','晨光','齐心','广博'], price: [3, 22], sales: [30000, 300000] },
  '笔筒': { names: ['桌面笔筒 多功能 收纳','旋转笔筒 360度 大容量','亚克力笔筒 透明','创意笔筒 北欧风','木质笔筒 复古','斜插式笔筒 省空间','磁吸笔筒 冰箱用','儿童卡通笔筒','折叠伸缩笔筒 便携','分格笔筒 办公','硅胶笔筒 防摔','多功能笔筒 带时钟'], brands: ['得力','晨光','纽赛','无印良品','创意家居'], price: [8, 45], sales: [15000, 120000] },
  '文具收纳盒': { names: ['桌面收纳盒 透明 多层','多层文具收纳 抽屉式','抽屉式收纳盒 办公','磁吸收纳盒 模块化 自由组合','亚克力收纳架 分层','旋转收纳盒 360度','可叠加收纳盒 3层','资料收纳盒 带锁','折叠收纳盒 便携','文具整理架 桌面','笔筒收纳架 多格','桌面杂物收纳 简约'], brands: ['纳川','得力','无印良品','宜家','晨光'], price: [12, 79], sales: [12000, 120000] },
  '桌面收纳架': { names: ['亚克力多层收纳架 办公','桌面书架 置物架 可调节','文件收纳架 三层','铁艺收纳架 简约','可调节桌面架 高度调整','桌上小书架 学生用','多功能桌面架 带抽屉','竹木收纳架 环保','办公桌面架 资料整理','透明分层收纳架','显示器增高收纳架','杂志收纳架 立式'], brands: ['得力','纽赛','纳川','宜家','晨光'], price: [15, 89], sales: [12000, 130000] },
  '书皮/书套': { names: ['包书皮 自粘透明 A4 50张','牛皮纸书套 16K','A4书皮 加厚 30张','磨砂包书膜 防水','16K书皮 小学生 20张','自粘书套 免裁剪','透明书皮 加厚耐磨','课本书套 防水抗皱','塑料书皮 卡通图案','书皮 一年级全套','环保包书皮 无毒','包书纸 牛皮纸 大张'], brands: ['得力','晨光','齐心','真彩','广博'], price: [4, 22], sales: [40000, 450000] },
  '美术颜料': { names: ['水彩颜料 固体 36色','丙烯颜料套装 24色','国画颜料 12色 管装','水粉颜料 果冻杯 24色','手指画颜料 儿童安全','纺织颜料 手绘T恤','固体水彩 便携写生','金属色颜料 6色','颜料补充装 单支','油画颜料 170ml','水彩调色盘 折叠','丙烯马克笔颜料'], brands: ['马利','温莎牛顿','樱花','鲁本斯','青竹'], price: [12, 68], sales: [5000, 50000] },
  '办公文具': { names: ['长尾夹 混合装 盒装 100个','回形针 100枚 彩色','订书机 省力型 10号钉','文件夹 A4 双夹 10个','剪刀 安全圆头 学生用','固体胶 36g 3支装','双面胶 强力 宽2cm','透明胶带 封箱 5卷','美工刀 自动锁 大号','白板 磁性 60x90cm','印台 速干 红色','计算器 太阳能 12位'], brands: ['得力','晨光','齐心','广博','可得优'], price: [3, 55], sales: [25000, 250000] },
  '笔类套装/礼盒': { names: ['钢笔礼盒 毕业送礼','中性笔套装 12色 彩色','铅笔套装 素描 14支','彩笔套装 150件 儿童','文具笔礼盒 商务送礼','画笔套装 水彩用','毛笔套装 书法入门','签字笔礼盒 金属','学生笔类大礼包 开学','马克笔+彩铅组合套装','考试笔套装 5支装','圣诞文具礼盒'], brands: ['晨光','得力','百乐','英雄','毕加索'], price: [25, 199], sales: [8000, 80000] },
  '文创用品': { names: ['ins风文具套装 莫兰迪','创意书签 金属 古风','文艺笔记本 布面','设计感便签 立体','创意笔筒 北欧风','手绘明信片套装 10张','复古文具 做旧风','国潮文具套装 限定','治愈系文具 解压','极简文具 日式','莫兰迪色文具组合','原创设计中性笔'], brands: ['九木杂物社','晨光生活馆','MUJI','kinbor','三年二班'], price: [9.9, 69], sales: [8000, 80000] },
  '姓名贴': { names: ['姓名贴 防水免缝 200张','刺绣姓名贴 可缝可烫','姓名贴打印机 蓝牙','幼儿园名字贴 卡通','衣物姓名标 布标','开学姓名贴 定制款','烫印姓名贴 耐洗','硅胶姓名扣 可爱','校服姓名标签 透明','文具姓名贴 贴纸式','书本姓名贴 自粘','杯子姓名贴 防水'], brands: ['精臣','得力','雅柯莱','兄弟','晨光'], price: [6, 89], sales: [10000, 90000] },
  '拼豆/咕卡套装': { names: ['拼豆套装 5mm 24色','咕卡套装 全套材料包','拼豆模板 卡通造型','咕卡贴纸 闪钻 立体','拼豆豆 补充装 单色','迷你咕卡材料包 入门','拼豆镊子工具 配件','咕卡底卡 透明 10张','拼豆挂件材料 钥匙扣','咕卡装饰宝石 平底钻','拼豆收纳盒 分格','咕卡奶油胶 50ml'], brands: ['咕卡星球','创意工坊','拼豆世界','手工达人','DIY乐园'], price: [8, 55], sales: [12000, 120000] },
  '彩色铅笔': { names: ['彩色铅笔 48色 水溶性','油性彩铅 72色 铁盒','彩铅套装 专业级 120色','儿童彩色铅笔 24色 粗杆','彩铅画本套装 含纸','金属色彩铅 12色','素描彩铅 单支补色','彩铅收纳笔帘 卷式','秘密花园彩铅 36色','软芯彩铅 不易断','彩铅补充装 6支','水溶彩铅 48色 桶装'], brands: ['辉柏嘉','马可','得力','晨光','MARCO'], price: [12, 118], sales: [10000, 100000] },
  '白板笔': { names: ['白板笔 可擦 黑色 10支','彩色白板笔 套装 8色','细头白板笔 0.5mm','液体粉笔 无尘 彩色','白板笔 大容量 粗头','白板擦+笔套装 磁性','磁吸白板笔 带擦','环保白板笔 低气味','速干白板笔 不拖尾','白板笔 12色套装','迷你白板笔 口袋','白板笔 替换芯 10支'], brands: ['得力','晨光','白雪','真彩','齐心'], price: [4, 30], sales: [15000, 150000] },
  '按扣/拉链文件资料袋/收纳袋': { names: ['透明文具袋 A4 拉链 5个','拉链文件袋 A4 加厚 10个','网格收纳袋 B5 考试用','考试专用透明袋 3个装','双层拉链袋 大容量','防水资料袋 加厚','A5文件袋 迷你','彩色分类文件袋 科目','牛津布资料袋 耐用','加厚透明袋 防水','科目分类袋 标签','票据收纳袋 多层'], brands: ['得力','齐心','晨光','广博','三木'], price: [3, 22], sales: [40000, 400000] },
  '修正带': { names: ['修正带 大容量 30m','可替芯修正带 经济装','迷你修正带 便携','双行修正带 宽幅','学生修正带套装 5个','修正带替芯 3个装','创意修正带 卡通','按动修正带 单手操作','涂改带 考试用 细头','修正带 不断带 流畅','宽幅修正带 12mm','透明修正带 隐形'], brands: ['晨光','得力','PLUS','国誉','真彩'], price: [2, 15], sales: [35000, 300000] },
  '钢笔': { names: ['学生钢笔 正姿 EF尖','练字钢笔 暗尖 F尖','钢笔礼盒 商务 金属','明尖钢笔 书写顺滑','透明示范钢笔 吸墨器','旋转吸墨钢笔 高级','速写钢笔 出水流畅','钢笔套装 含墨囊 10支','金属杆钢笔 重手感','复古钢笔 木盒装','可替换墨囊钢笔 3支','练字钢笔 初学者'], brands: ['英雄','百乐','凌美','派克','晨光'], price: [12, 199], sales: [8000, 60000] },
  '画纸/画本': { names: ['素描纸 160g A4 100张','水彩纸 300g 棉浆','速写本 A4 80页','马克笔专用纸 A4 50张','彩铅纸 细纹 A4','儿童画本 空白 A4','绘画本 A3 加厚','牛皮纸画本 手绘','手绘本 硬壳 便携','临摹纸 拷贝纸 100张','刮画纸 彩色 20张','水粉纸 8K 50张'], brands: ['老人头','康颂','温莎','宝虹','获多福'], price: [6, 58], sales: [12000, 120000] },
  '胶水': { names: ['液体胶水 透明 50ml','固体胶棒 36g 3支装','手工白胶 100ml','学生胶水 安全无毒','胶棒 21g 10支装 办公','万能胶 强力','热熔胶枪 小号','胶水笔 细头 精确','PVA白乳胶 手工用','双面胶点 替芯','透明胶水 速干','手工胶水套装 3种'], brands: ['得力','晨光','UHU','齐心','3M'], price: [2, 25], sales: [25000, 250000] },
  '笔芯/替芯/笔壳': { names: ['中性笔芯 0.5mm 黑色 20支','按动笔芯 替换装 G2规格','大容量笔芯 巨能写','红色笔芯 0.5mm 教师用','蓝色笔芯 子弹头 10支','笔芯0.38mm 全针管','速干笔芯 ST头','子弹头笔芯 100支 量贩','针管笔芯 0.5 黑色','笔壳 透明 按动','笔杆 金属 高级','笔芯 0.7mm 蓝黑'], brands: ['晨光','百乐','斑马','真彩','得力'], price: [3, 22], sales: [40000, 350000] },
  '记号笔': { names: ['记号笔 黑色 粗头 10支','油性记号笔 防水','双头记号笔 粗细两用','白色记号笔 轮胎笔','防水记号笔 户外用','金色记号笔 贺卡用','细头记号笔 CD用','记号笔套装 12色','大头笔 物流快递用','银色记号笔 金属面','快递记号笔 速干','彩色记号笔 儿童用'], brands: ['晨光','得力','斑马','宝克','雪人'], price: [2, 22], sales: [20000, 200000] },
  '练字帖/描红本': { names: ['练字帖 行楷 成人','凹槽练字帖 自动消失','小学生字帖 一年级','控笔训练字帖 基础','硬笔书法字帖 田英章','英文练字帖 衡水体','数字描红本 幼儿','古诗词字帖 楷书','楷书练字帖 每日一练','幼儿描红 汉字','成人行书字帖','笔画练字帖 启蒙'], brands: ['六品堂','墨点','田英章','司马彦','华夏万卷'], price: [6, 35], sales: [15000, 150000] },
  '圆珠笔': { names: ['圆珠笔 按动 0.7mm 蓝色','彩色圆珠笔 10色 多色','复古圆珠笔 金属杆','圆珠笔 速干 0.5mm','商务圆珠笔 签字','学生圆珠笔 套装 5支','圆珠笔芯 替换 10支','油性圆珠笔 顺滑','多功能圆珠笔 四色','圆珠笔 旋转出芯','透明杆圆珠笔 学生','圆珠笔 0.38mm 细'], brands: ['晨光','得力','百乐','斑马','施耐德'], price: [1.5, 30], sales: [20000, 180000] },
  '蜡笔': { names: ['蜡笔 36色 儿童安全','旋转蜡笔 不脏手 24色','油画棒 重彩 48色','丝滑蜡笔 24色 幼儿','可水洗蜡笔 12色','蜡笔套装 桶装 64色','水溶性蜡笔 36色','三角蜡笔 幼儿握笔','蜡笔 48色 专业','荧光蜡笔 6色','人体彩绘蜡笔 安全','布料蜡笔 纺织用'], brands: ['得力','绘儿乐','晨光','真彩','马利'], price: [8, 45], sales: [15000, 150000] },
  '书签': { names: ['金属书签 创意 古风','磁性书签 套装 卡通','古风书签 流苏 中国风','卡通书签 学生用','木质书签 手工','夜光书签 创意','书签尺 多功能 直尺','刺绣书签 手工精致','透明亚克力书签','永生花书签 干花','定制书签 毕业留念','磁力书签 迷你'], brands: ['晨光','故宫文创','敦煌','九木','手工'], price: [4, 30], sales: [8000, 80000] },
};

const PLATFORMS = ['淘宝', '天猫', '京东', '抖音', '拼多多'];
const HEATS = ['爆', '热', '暖', '稳'];

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }
function randRange(min, max, rng) { return Math.round(min + rng() * (max - min)); }

function generateData() {
  const categories = Object.keys(CATEGORIES_CONFIG);

  // Generate 3 separate time-range datasets with different top products
  function genProducts(categories, timeSeed, salesMultiplier) {
    const products = [];
    categories.forEach((cat, ci) => {
      const cfg = CATEGORIES_CONFIG[cat];
      const rng = seededRandom(ci * 1000 + timeSeed);
      for (let i = 0; i < 12; i++) {
        const brand = cfg.brands[i % cfg.brands.length];
        const nameBase = cfg.names[i % cfg.names.length];
        const name = `${brand} ${nameBase}`;
        const platform = PLATFORMS[(i + ci) % 5];
        const price = +(cfg.price[0] + rng() * (cfg.price[1] - cfg.price[0])).toFixed(1);
        const baseSales = randRange(cfg.sales[0], cfg.sales[1], rng);
        const sales = Math.round(baseSales * salesMultiplier * (0.8 + rng() * 0.4));
        products.push({ name, platform, price, sales, category: cat });
      }
    });
    products.sort((a, b) => (b.price * b.sales) - (a.price * a.sales));
    products.forEach((p, i) => { p.rank = i + 1; });
    return products;
  }

  function genHotwords(categories, timeSeed, factor) {
    const hotwords = [];
    // Top-level general hotwords with realistic exposure (high-traffic generic queries)
    const TOP_WORDS = [
      { word: '618文具必买清单', category: '学习套装/礼盒/盲盒', base: { taobao: 15000000, douyin: 28000000, xhs: 12000000 } },
      { word: '学生党开学囤货', category: '学习套装/礼盒/盲盒', base: { taobao: 12000000, douyin: 22000000, xhs: 9000000 } },
      { word: '高考加油文具', category: '中性笔', base: { taobao: 10000000, douyin: 18000000, xhs: 7000000 } },
      { word: '考试必备好物', category: '中性笔', base: { taobao: 11000000, douyin: 20000000, xhs: 8000000 } },
      { word: '平价好用文具', category: '中性笔', base: { taobao: 9000000, douyin: 25000000, xhs: 14000000 } },
      { word: '高颜值文具分享', category: '文创用品', base: { taobao: 5000000, douyin: 20000000, xhs: 18000000 } },
      { word: '刷题神器', category: '中性笔', base: { taobao: 8000000, douyin: 15000000, xhs: 6000000 } },
      { word: '暑假手工推荐', category: '手工DIY套装', base: { taobao: 6000000, douyin: 16000000, xhs: 10000000 } },
      { word: '毕业礼物送什么', category: '笔类套装/礼盒', base: { taobao: 7000000, douyin: 12000000, xhs: 15000000 } },
      { word: '文具收纳技巧', category: '文具收纳盒', base: { taobao: 4000000, douyin: 14000000, xhs: 11000000 } },
      { word: '一支笔用到毕业', category: '中性笔', base: { taobao: 3000000, douyin: 22000000, xhs: 8000000 } },
      { word: '解压文具合集', category: '橡皮擦', base: { taobao: 4000000, douyin: 19000000, xhs: 12000000 } },
      { word: '好写不贵的笔', category: '中性笔', base: { taobao: 8000000, douyin: 18000000, xhs: 9000000 } },
      { word: '网红文具测评', category: '文创用品', base: { taobao: 3000000, douyin: 24000000, xhs: 16000000 } },
      { word: '文具盲盒开箱', category: '学习套装/礼盒/盲盒', base: { taobao: 4000000, douyin: 20000000, xhs: 13000000 } },
      { word: '世界杯手绘', category: '马克笔', base: { taobao: 2000000, douyin: 15000000, xhs: 8000000 } },
      { word: '电动文具黑科技', category: '文具盒/笔袋/痛包笔袋', base: { taobao: 5000000, douyin: 18000000, xhs: 7000000 } },
      { word: '小学生开学必备', category: '学习套装/礼盒/盲盒', base: { taobao: 9000000, douyin: 12000000, xhs: 5000000 } },
      { word: '便宜好用中性笔', category: '中性笔', base: { taobao: 7000000, douyin: 13000000, xhs: 6000000 } },
      { word: '手账入坑指南', category: '手帐', base: { taobao: 3000000, douyin: 12000000, xhs: 16000000 } },
      { word: '书桌好物分享', category: '桌面收纳架', base: { taobao: 4000000, douyin: 11000000, xhs: 13000000 } },
      { word: '儿童安全文具', category: '水彩笔', base: { taobao: 6000000, douyin: 9000000, xhs: 4000000 } },
      { word: '期末考试文具', category: '中性笔', base: { taobao: 8000000, douyin: 14000000, xhs: 5000000 } },
      { word: '大容量笔袋推荐', category: '文具盒/笔袋/痛包笔袋', base: { taobao: 5000000, douyin: 10000000, xhs: 9000000 } },
      { word: '国产文具之光', category: '中性笔', base: { taobao: 4000000, douyin: 16000000, xhs: 11000000 } },
      { word: '马克笔画画教程', category: '马克笔', base: { taobao: 2000000, douyin: 20000000, xhs: 9000000 } },
      { word: '练字用什么笔好', category: '钢笔', base: { taobao: 5000000, douyin: 8000000, xhs: 6000000 } },
      { word: '百乐笔推荐', category: '中性笔', base: { taobao: 6000000, douyin: 9000000, xhs: 7000000 } },
      { word: '斑马笔哪款好', category: '荧光笔', base: { taobao: 5000000, douyin: 8000000, xhs: 8000000 } },
      { word: '晨光得力哪个好', category: '中性笔', base: { taobao: 7000000, douyin: 10000000, xhs: 5000000 } }
    ];

    const rngG = seededRandom(timeSeed * 999);
    TOP_WORDS.forEach(w => {
      hotwords.push({
        word: w.word,
        category: w.category,
        platforms: {
          taobao: Math.round(w.base.taobao * factor * (0.85 + rngG() * 0.3)),
          douyin: Math.round(w.base.douyin * factor * (0.85 + rngG() * 0.3)),
          xhs: Math.round(w.base.xhs * factor * (0.85 + rngG() * 0.3))
        }
      });
    });

    // Per-category specific words (lower exposure, only high-freq categories)
    const HIGH_CATS = ['中性笔','铅笔','橡皮擦','笔记本/记事本','荧光笔','马克笔','手帐','文具盒/笔袋/痛包笔袋','修正带','书皮/书套','水彩笔','学习套装/礼盒/盲盒'];
    const CAT_SUFFIXES = ['推荐', '618必买', '测评'];
    HIGH_CATS.forEach((cat, ci) => {
      const rng = seededRandom(ci * 2000 + timeSeed);
      for (let i = 0; i < 3; i++) {
        hotwords.push({
          word: `${cat}${CAT_SUFFIXES[i]}`,
          category: cat,
          platforms: {
            taobao: Math.round(randRange(2000000, 8000000, rng) * factor),
            douyin: Math.round(randRange(4000000, 15000000, rng) * factor),
            xhs: Math.round(randRange(2000000, 10000000, rng) * factor)
          }
        });
      }
    });
    return hotwords;
  }

  // today / 7d only (different seeds = different rankings)
  const promoToday = genProducts(categories, 77, 0.15);
  const promo7d = genProducts(categories, 42, 1);

  const hotwordsToday = genHotwords(categories, 77, 0.15);
  const hotwords7d = genHotwords(categories, 42, 1);

  // seasonal trends - hand-curated: each trend only has logically related products
  const seasonalTrends = [];
  const TREND_DATA = {
    exam: { label: '中高考文具', items: [
      { name: '考试速干中性笔套装', category: '中性笔' },
      { name: '2B涂卡铅笔 考试专用 30支', category: '铅笔' },
      { name: '考试专用橡皮 不留痕 超净', category: '橡皮擦' },
      { name: '考试修正带 细头6mm', category: '修正带' },
      { name: '透明文具袋 考场规定款', category: '按扣/拉链文件资料袋/收纳袋' },
      { name: '速干笔芯 ST头 考试用', category: '笔芯/替芯/笔壳' },
      { name: '划重点荧光笔 淡色护眼', category: '荧光笔' },
      { name: '错题本 活页B5 分科', category: '笔记本/记事本' },
      { name: '中高考文具礼盒 全套', category: '学习套装/礼盒/盲盒' },
      { name: '答题卡专用笔 0.5mm', category: '中性笔' }
    ]},
    summer: { label: '暑假文创/DIY', items: [
      { name: '暑假手工材料包 100件创意', category: '手工DIY套装' },
      { name: '可水洗水彩笔 36色 儿童', category: '水彩笔' },
      { name: '马克笔套装 80色 动漫手绘', category: '马克笔' },
      { name: '水溶彩铅 48色 风景写生', category: '彩色铅笔' },
      { name: '旋转蜡笔 不脏手 幼儿绘画', category: '蜡笔' },
      { name: '素描纸 A4 160g 暑假练习', category: '画纸/画本' },
      { name: '丙烯颜料 DIY手绘 24色', category: '美术颜料' },
      { name: '咕卡套装 暑假手工 全套', category: '拼豆/咕卡套装' },
      { name: '手账大礼盒 假期生活记录', category: '手帐' },
      { name: '创意书签DIY材料包', category: '书签' }
    ]},
    '618': { label: '618大促热卖', items: [
      { name: '晨光中性笔 50支量贩囤货', category: '中性笔' },
      { name: '国誉笔记本套装 半价囤', category: '笔记本/记事本' },
      { name: '开学文具大礼包 618特惠', category: '学习套装/礼盒/盲盒' },
      { name: '电动文具盒 618秒杀价', category: '文具盒/笔袋/痛包笔袋' },
      { name: '办公文具量贩装 618囤', category: '办公文具' },
      { name: '桌面收纳架 618买一送一', category: '桌面收纳架' },
      { name: '3M便利贴 年中大促囤', category: '便签本/便条纸/N次贴' },
      { name: '文具收纳盒 618折扣', category: '文具收纳盒' },
      { name: '旋转笔筒 618特价', category: '笔筒' },
      { name: '包书皮 整学期囤货装', category: '书皮/书套' }
    ]},
    office: { label: '办公文具热点', items: [
      { name: '得力订书机 省力型 办公', category: '办公文具' },
      { name: '3M便利贴 强粘 会议用', category: '便签本/便条纸/N次贴' },
      { name: '多功能笔筒 办公桌面', category: '笔筒' },
      { name: '抽屉收纳盒 办公桌整理', category: '文具收纳盒' },
      { name: '文件收纳架 三层 办公', category: '桌面收纳架' },
      { name: '白板笔 可擦 会议室用', category: '白板笔' },
      { name: '油性记号笔 防水 标记', category: '记号笔' },
      { name: '固体胶棒 办公速粘', category: '胶水' },
      { name: '商务笔记本 皮面 A5', category: '笔记本/记事本' },
      { name: '商务签字笔 金属杆', category: '钢笔' }
    ]},
    worldcup: { label: '世界杯相关', items: [
      { name: '马克笔 球星手绘 肤色套装', category: '马克笔' },
      { name: '速写本 赛事手绘记录', category: '画纸/画本' },
      { name: '世界杯主题手账本', category: '手帐' },
      { name: '足球元素贴纸 球队徽章', category: '拼豆/咕卡套装' },
      { name: '国旗主题文具套装', category: '文创用品' },
      { name: '世界杯观赛笔记本', category: '笔记本/记事本' },
      { name: '足球造型金属书签', category: '书签' },
      { name: '球队配色蜡笔 儿童画', category: '蜡笔' },
      { name: '国旗色水彩笔 手绘', category: '水彩笔' },
      { name: '彩铅 球星肖像画专用', category: '彩色铅笔' }
    ]},
    graduation: { label: '毕业季', items: [
      { name: '火漆印章 毕业纪念套装', category: '火漆印章' },
      { name: '钢笔礼盒 毕业送礼 刻字', category: '笔类套装/礼盒' },
      { name: '毕业纪念钢笔 金属杆', category: '钢笔' },
      { name: '同学录手账本 毕业留言', category: '手帐' },
      { name: '金属书签 毕业留念 定制', category: '书签' },
      { name: '毕业季文创礼物套装', category: '文创用品' },
      { name: '毕业纪念笔记本 班级', category: '笔记本/记事本' },
      { name: '毕业文具礼盒 全班定制', category: '学习套装/礼盒/盲盒' },
      { name: '姓名贴 毕业纪念版', category: '姓名贴' },
      { name: '毕业赠言练字帖', category: '练字帖/描红本' }
    ]}
  };

  const trendRng = seededRandom(8888);
  Object.entries(TREND_DATA).forEach(([tag, config]) => {
    config.items.forEach(item => {
      seasonalTrends.push({
        name: item.name,
        category: item.category,
        trend: tag,
        trendLabel: config.label,
        growth: randRange(30, 280, trendRng),
        heat: pick(HEATS, trendRng)
      });
    });
  });

  // platform push products (per platform with exposure, sales, comments)
  const HIGH_FREQ_CATS = ['中性笔','铅笔','橡皮擦','笔记本/记事本','学习套装/礼盒/盲盒','修正带','书皮/书套','荧光笔','文具盒/笔袋/痛包笔袋'];
  const platformPushData = [];
  const PUSH_PLATFORMS = ['淘宝/天猫', '拼多多', '抖音'];
  categories.forEach((cat, ci) => {
    const cfg = CATEGORIES_CONFIG[cat];
    const rng = seededRandom(ci * 4000 + 55);
    const isHighFreq = HIGH_FREQ_CATS.includes(cat);
    const exposureBoost = isHighFreq ? 3 : 1;
    for (let i = 0; i < 6; i++) {
      const brand = cfg.brands[i % cfg.brands.length];
      const nameBase = cfg.names[(i + 3) % cfg.names.length];
      const basePrice = +(cfg.price[0] + rng() * (cfg.price[1] - cfg.price[0])).toFixed(1);
      PUSH_PLATFORMS.forEach(plat => {
        const factor = plat === '拼多多' ? 0.7 : plat === '抖音' ? 0.9 : 1;
        const price = +(basePrice * factor).toFixed(1);
        const exposure = Math.round(randRange(50000, 5000000, rng) * exposureBoost);
        const sales = randRange(Math.round(cfg.sales[0] * 0.1), Math.round(cfg.sales[1] * 0.3), rng);
        const comments = randRange(Math.round(sales * 0.02), Math.round(sales * 0.15), rng);
        platformPushData.push({
          name: `${brand} ${nameBase}`,
          category: cat,
          platform: plat,
          price,
          exposure,
          sales,
          comments
        });
      });
    }
  });

  // emerging products - focus on search/exposure growth rate
  const emergingProducts = [];
  const reasons = [
    '搜索量环比暴增，抖音话题播放量激增',
    '小红书种草笔记7天增长300%+',
    '618大促搜索量环比翻倍，曝光飙升',
    '直播间曝光环比增长200%，持续爆单',
    '全平台搜索指数飙升，社交讨论度激增',
    '考试/暑假场景驱动，搜索环比增长显著'
  ];
  categories.forEach((cat, ci) => {
    const cfg = CATEGORIES_CONFIG[cat];
    const rng = seededRandom(ci * 5000 + 33);
    for (let i = 0; i < 6; i++) {
      const searchGrowth = randRange(80, 500, rng);
      const exposureGrowth = randRange(60, 450, rng);
      const currentSales = randRange(8000, 70000, rng);
      const trendData = [];
      let base = Math.round(currentSales / (1 + searchGrowth / 200));
      for (let d = 0; d < 13; d++) {
        base = Math.round(base * (1 + (searchGrowth / 100) / 13 + (rng() - 0.3) * 0.05));
        trendData.push(base);
      }
      trendData[12] = currentSales;
      emergingProducts.push({
        name: `${cfg.brands[i % cfg.brands.length]} ${cfg.names[(i + 6) % cfg.names.length]}`,
        category: cat,
        reason: reasons[i % reasons.length],
        currentSales,
        searchGrowth,
        exposureGrowth,
        predictScore: randRange(65, 98, rng),
        trendData
      });
    }
  });

  return { promoToday, promo7d, hotwordsToday, hotwords7d, seasonalTrends, platformPushData, emergingProducts };
}

const generated = generateData();

const promoActivities = [
  { platform: '淘宝/天猫', platformKey: 'taobao', title: '618狂欢收官·跨店满减', highlights: ['跨店每满300减50 最后一天', '文具品类额外满200减25券', '天猫超市文具满88免运费'], badge: '今日生效', period: '6.18 最终日' },
  { platform: '拼多多', platformKey: 'pdd', title: '百亿补贴·文具最后冲刺', highlights: ['文具专区今日加码再降10%', '9.9特卖文具最后场', '品牌文具百亿补贴直降'], badge: '今日生效', period: '6.18 最后冲刺' },
  { platform: '抖音电商', platformKey: 'douyin', title: '618好物节·文具收官', highlights: ['今日整点文具秒杀 最后3场', '文具消费券满50减15 限今日', '618文具专区最后一天'], badge: '今日生效', period: '6.18 收官日' },
  { platform: '小红书', platformKey: 'xhs', title: '618薯你会买·文具最后一天', highlights: ['笔记种草领满99减20券 今日最后', '文具集合店免邮 收官日加码', '学生专属满3件85折'], badge: '今日生效', period: '6.18 最后一天' }
];

const output = `const CATEGORIES = ${JSON.stringify(Object.keys(CATEGORIES_CONFIG))};

const DASHBOARD_DATA = {
  updateTime: '2026-07-12',
  promoActivities: ${JSON.stringify(promoActivities, null, 2)},
  promoProducts: {
    today: ${JSON.stringify(generated.promoToday)},
    '7d': ${JSON.stringify(generated.promo7d)}
  },
  hotwords: {
    today: ${JSON.stringify(generated.hotwordsToday)},
    '7d': ${JSON.stringify(generated.hotwords7d)}
  },
  seasonalTrends: ${JSON.stringify(generated.seasonalTrends)},
  platformPushData: ${JSON.stringify(generated.platformPushData)},
  emergingProducts: ${JSON.stringify(generated.emergingProducts)}
};
`;

process.stdout.write(output);
