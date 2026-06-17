document.addEventListener('DOMContentLoaded', () => {
    renderPromoCards();
    renderPromoProducts();
    renderSeasonTrendChart();
    renderHotwordsChart();
    renderExposureChart();
    renderTrendDataTable();
    renderEmergingList();
    renderEmergingTrendChart();
    setupSeasonFilter();
});

function formatNum(n) {
    if (n >= 100000000) return (n / 100000000).toFixed(1) + '亿';
    if (n >= 10000) return (n / 10000).toFixed(0) + '万';
    return n.toLocaleString();
}

function formatMoney(n) {
    if (n >= 100000000) return '¥' + (n / 100000000).toFixed(2) + '亿';
    if (n >= 10000) return '¥' + (n / 10000).toFixed(0) + '万';
    return '¥' + n.toLocaleString();
}

// 各平台颜色（高对比度区分）
const platformColors = {
    '京东': '#cc0a0a',
    '淘宝/天猫': '#ff6a00',
    '天猫': '#ff6a00',
    '淘宝': '#ff6a00',
    '拼多多': '#f59e0b',
    '抖音': '#1a1a2e',
    '小红书': '#e6194b'
};

const platformTagClass = {
    '京东': 'platform-tag-jd',
    '淘宝': 'platform-tag-taobao',
    '淘宝/天猫': 'platform-tag-taobao',
    '天猫': 'platform-tag-taobao',
    '拼多多': 'platform-tag-pdd',
    '抖音': 'platform-tag-douyin',
    '小红书': 'platform-tag-xhs'
};

// 促销活动卡片
function renderPromoCards() {
    const container = document.getElementById('promoCards');
    const icons = { jd: '🟥', taobao: '🟧', pdd: '🟡', douyin: '⬛', xhs: '🔴' };
    container.innerHTML = DASHBOARD_DATA.promoActivities.map(p => `
        <div class="card p-4 border-l-4" style="border-left-color: ${platformColors[p.platform] || '#6366f1'}">
            <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-gray-900 text-sm">${icons[p.platformKey] || ''} ${p.platform}</span>
                <span class="promo-badge px-2 py-0.5 text-xs rounded-full">${p.badge}</span>
            </div>
            <div class="text-xs font-medium text-gray-700 mb-2">${p.title}</div>
            <ul class="space-y-1">
                ${p.highlights.map(h => `<li class="text-xs text-gray-500 flex items-start gap-1"><span class="text-red-400 mt-0.5">•</span>${h}</li>`).join('')}
            </ul>
            <div class="mt-2 text-xs text-gray-400">${p.period}</div>
        </div>
    `).join('');
}

// 热销商品表格
function renderPromoProducts() {
    const tbody = document.getElementById('promoProductsTable');
    tbody.innerHTML = DASHBOARD_DATA.promoProducts.map(p => `
        <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-bold ${p.rank <= 3 ? 'text-red-500' : 'text-gray-500'}">${p.rank}</td>
            <td class="px-4 py-3 text-gray-900 font-medium">${p.name}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 text-xs rounded-full ${platformTagClass[p.platform] || ''}">${p.platform}</span></td>
            <td class="px-4 py-3 text-right font-bold text-red-600">¥${p.price}</td>
            <td class="px-4 py-3 text-right text-gray-700">${formatNum(p.sales)}</td>
            <td class="px-4 py-3 text-center">${p.jdMatch ? '<span class="text-green-600 font-medium">✓ 有</span>' : '<span class="text-gray-400">✗ 无</span>'}</td>
            <td class="px-4 py-3 text-right font-medium ${p.jdRevenue > 0 ? 'text-gray-900' : 'text-gray-300'}">${p.jdRevenue > 0 ? formatMoney(p.jdRevenue) : '-'}</td>
        </tr>
    `).join('');
}

// 应季趋势图表
function renderSeasonTrendChart(category = 'all') {
    const chart = echarts.init(document.getElementById('seasonTrendChart'));
    let data = DASHBOARD_DATA.seasonalTrends;
    if (category !== 'all') data = data.filter(d => d.category === category);

    const heatColors = { '爆': '#dc2626', '热': '#ea580c', '暖': '#d97706', '稳': '#65a30d' };

    chart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: 120, right: 60, top: 20, bottom: 30 },
        xAxis: { type: 'value', name: '30天增长率%', axisLabel: { formatter: '{value}%' } },
        yAxis: {
            type: 'category',
            data: data.map(d => d.name).reverse(),
            axisLabel: { fontSize: 12 }
        },
        series: [{
            type: 'bar',
            data: data.map(d => ({
                value: d.growth,
                itemStyle: { color: heatColors[d.heat] || '#6366f1', borderRadius: [0, 4, 4, 0] },
                label: { show: true, position: 'right', formatter: `{c}% ${d.heat}`, fontSize: 11 }
            })).reverse(),
            barWidth: 20
        }]
    });
    window.addEventListener('resize', () => chart.resize());
    window._seasonChart = chart;
}

// 热搜词排行
function renderHotwordsChart() {
    const chart = echarts.init(document.getElementById('hotwordsChart'));
    const data = DASHBOARD_DATA.hotwords.map(h => {
        const total = Object.values(h.platforms).reduce((a, b) => a + b, 0);
        return { word: h.word, total };
    }).sort((a, b) => b.total - a.total);

    chart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: params => {
            return params[0].name + '<br/>总曝光: ' + formatNum(params[0].value);
        }},
        grid: { left: 120, right: 50, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { formatter: v => formatNum(v) } },
        yAxis: {
            type: 'category',
            data: data.slice(0, 15).map(d => d.word).reverse(),
            axisLabel: { fontSize: 11 }
        },
        series: [{
            type: 'bar',
            data: data.slice(0, 15).map(d => d.total).reverse(),
            barWidth: 16,
            itemStyle: {
                borderRadius: [0, 4, 4, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#818cf8' },
                    { offset: 1, color: '#6366f1' }
                ])
            },
            label: { show: true, position: 'right', formatter: p => formatNum(p.value), fontSize: 10 }
        }]
    });
    window.addEventListener('resize', () => chart.resize());
}

// 热搜词各平台曝光量（颜色区分更明显）
function renderExposureChart() {
    const chart = echarts.init(document.getElementById('exposureChart'));
    const hotwords = DASHBOARD_DATA.hotwords;
    const platforms = ['京东', '淘宝/天猫', '拼多多', '抖音', '小红书'];
    const platformKeys = ['jd', 'taobao', 'pdd', 'douyin', 'xhs'];
    const colors = ['#cc0a0a', '#ff6a00', '#f59e0b', '#1a1a2e', '#e6194b'];

    chart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: params => {
            let s = params[0].axisValue + '<br/>';
            params.forEach(p => { s += `${p.marker} ${p.seriesName}: ${formatNum(p.value)}<br/>`; });
            return s;
        }},
        legend: { data: platforms, bottom: 0, textStyle: { fontSize: 11 } },
        grid: { left: 60, right: 20, top: 20, bottom: 50 },
        xAxis: { type: 'category', data: hotwords.map(h => h.word), axisLabel: { rotate: 35, fontSize: 10 } },
        yAxis: { type: 'value', axisLabel: { formatter: v => formatNum(v) } },
        series: platforms.map((p, i) => ({
            name: p,
            type: 'bar',
            stack: 'total',
            data: hotwords.map(h => h.platforms[platformKeys[i]]),
            itemStyle: { color: colors[i] }
        }))
    });
    window.addEventListener('resize', () => chart.resize());
}

// 趋势品销售数据表
function renderTrendDataTable() {
    const tbody = document.getElementById('trendDataTable');
    let rows = [];
    DASHBOARD_DATA.trendProductData.forEach(product => {
        product.platforms.forEach((p, i) => {
            const totalSales = product.platforms.reduce((a, b) => a + b.sales, 0);
            const share = ((p.sales / totalSales) * 100).toFixed(1);
            rows.push(`
                <tr class="hover:bg-gray-50 ${i === 0 ? 'border-t-2 border-gray-100' : ''}">
                    ${i === 0 ? `<td class="px-4 py-3 font-medium text-gray-900" rowspan="${product.platforms.length}">${product.name}</td>` : ''}
                    <td class="px-4 py-3"><span class="px-2 py-0.5 text-xs rounded-full ${platformTagClass[p.platform] || ''}">${p.platform}</span></td>
                    <td class="px-4 py-3 text-right font-medium">¥${p.avgPrice}</td>
                    <td class="px-4 py-3 text-right">${formatNum(p.sales)}</td>
                    <td class="px-4 py-3 text-right font-medium">${formatMoney(p.revenue)}</td>
                    <td class="px-4 py-3">
                        <div class="flex items-center gap-2">
                            <div class="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full rounded-full" style="width:${share}%; background:${platformColors[p.platform] || '#6366f1'}"></div>
                            </div>
                            <span class="text-xs text-gray-500">${share}%</span>
                        </div>
                    </td>
                </tr>
            `);
        });
    });
    tbody.innerHTML = rows.join('');
}

// 潜在爆发商品列表
function renderEmergingList() {
    const container = document.getElementById('emergingList');
    container.innerHTML = DASHBOARD_DATA.emergingProducts.map((p, i) => `
        <div class="p-3 rounded-lg border ${i < 3 ? 'border-red-200 bg-red-50/30' : 'border-gray-100 bg-gray-50/50'}">
            <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-bold ${i < 3 ? 'text-red-500' : 'text-gray-600'}">#${i + 1}</span>
                    <span class="font-medium text-gray-900 text-sm">${p.name}</span>
                </div>
                <span class="px-2 py-0.5 text-xs rounded-full ${p.predictScore >= 90 ? 'hot-badge' : p.predictScore >= 85 ? 'warm-badge' : 'new-badge'} font-bold">
                    爆发指数 ${p.predictScore}
                </span>
            </div>
            <div class="text-xs text-gray-500 mb-1.5">${p.reason}</div>
            <div class="flex items-center gap-4 text-xs">
                <span class="text-gray-600">当前销量: <b>${formatNum(p.currentSales)}</b></span>
                <span class="trend-up font-bold">↑ 7日增长 ${p.growth7d}%</span>
            </div>
        </div>
    `).join('');
}

// 潜在爆发商品走势图（支持10条线，分两组颜色）
function renderEmergingTrendChart() {
    const chart = echarts.init(document.getElementById('emergingTrendChart'));
    const products = DASHBOARD_DATA.emergingProducts;
    const days = Array.from({ length: 13 }, (_, i) => {
        const d = new Date('2026-06-05');
        d.setDate(d.getDate() + i);
        return `${d.getMonth() + 1}/${d.getDate()}`;
    });

    const colors = ['#dc2626', '#ea580c', '#6366f1', '#0891b2', '#16a34a', '#9333ea', '#db2777', '#0d9488', '#ca8a04', '#64748b'];

    chart.setOption({
        tooltip: { trigger: 'axis', formatter: params => {
            let s = params[0].axisValue + '<br/>';
            params.forEach(p => { s += `${p.marker} ${p.seriesName}: ${formatNum(p.value)}<br/>`; });
            return s;
        }},
        legend: { data: products.map(p => p.name), bottom: 0, textStyle: { fontSize: 9 }, type: 'scroll' },
        grid: { left: 50, right: 20, top: 10, bottom: 70 },
        xAxis: { type: 'category', data: days, axisLabel: { fontSize: 10 } },
        yAxis: { type: 'value', axisLabel: { formatter: v => formatNum(v), fontSize: 10 } },
        series: products.map((p, i) => ({
            name: p.name,
            type: 'line',
            data: p.trendData,
            smooth: true,
            symbol: 'none',
            lineStyle: { width: 2, color: colors[i] },
            itemStyle: { color: colors[i] },
            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: colors[i] + '15' },
                { offset: 1, color: colors[i] + '00' }
            ])}
        }))
    });
    window.addEventListener('resize', () => chart.resize());
}

// 应季分类筛选
function setupSeasonFilter() {
    document.querySelectorAll('.season-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.season-btn').forEach(b => {
                b.className = 'season-btn px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600';
            });
            btn.className = 'season-btn px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium';
            renderSeasonTrendChart(btn.dataset.cat);
        });
    });
}
