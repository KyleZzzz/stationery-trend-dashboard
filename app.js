let currentCategory = 'all';
let currentTrend = 'all';
let currentTimeRange = '7d';

document.addEventListener('DOMContentLoaded', () => {
    initCategoryFilter();
    initTrendFilter();
    initTimeFilter();
    renderAll();
});

function initCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    CATEGORIES.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        select.appendChild(opt);
    });
    select.addEventListener('change', () => {
        currentCategory = select.value;
        renderAll();
    });
}

function initTrendFilter() {
    document.querySelectorAll('.trend-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.trend-btn').forEach(b => {
                b.className = 'trend-btn px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600';
            });
            btn.className = 'trend-btn px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium';
            currentTrend = btn.dataset.trend;
            renderSeasonTrendChart();
        });
    });
}

function initTimeFilter() {
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.time-btn').forEach(b => {
                b.className = 'time-btn px-3 py-1 text-xs rounded-md text-gray-600 hover:bg-gray-200 transition';
            });
            btn.className = 'time-btn time-btn-active px-3 py-1 text-xs rounded-md transition';
            currentTimeRange = btn.dataset.range;
            renderAll();
        });
    });
}

function getTimeKey() {
    return currentTimeRange === 'today' ? 'today' : currentTimeRange;
}

function getPromoProducts() {
    return DASHBOARD_DATA.promoProducts[getTimeKey()].filter(p => p.platform !== '拼多多');
}

function getHotwords() {
    return DASHBOARD_DATA.hotwords[getTimeKey()];
}

function renderAll() {
    renderPromoCards();
    renderPromoProducts();
    renderSeasonTrendChart();
    renderHotwordsChart();
    renderExposureChart();
    renderTrendDataTable();
    renderEmergingList();
    renderEmergingTrendChart();
    updateCount();
}

function updateCount() {
    const el = document.getElementById('categoryCount');
    if (currentCategory === 'all') {
        el.textContent = '';
    } else {
        el.textContent = `当前筛选：${currentCategory}`;
    }
}

function filterByCategory(arr) {
    if (currentCategory === 'all') return arr;
    return arr.filter(d => d.category === currentCategory);
}

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

// 促销活动卡片（不受品类筛选影响）
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

// 热销商品：top20，按爆发指数降序，不含拼多多
function renderPromoProducts() {
    const tbody = document.getElementById('promoProductsTable');
    const filtered = filterByCategory(getPromoProducts())
        .map(p => {
            const score = Math.min(99, Math.round(50 + (p.price * p.sales) / 200000));
            return { ...p, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 20);
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="px-4 py-8 text-center text-gray-400">当前品类暂无热销数据</td></tr>';
        return;
    }
    tbody.innerHTML = filtered.map((p, i) => `
        <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 font-bold ${i < 3 ? 'text-red-500' : 'text-gray-500'}">${i + 1}</td>
            <td class="px-4 py-3 text-gray-900 font-medium">${p.name}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 text-xs rounded-full ${platformTagClass[p.platform] || ''}">${p.platform}</span></td>
            <td class="px-4 py-3 text-right font-medium">¥${p.price}</td>
            <td class="px-4 py-3 text-right"><span class="px-2 py-0.5 text-xs rounded-full ${p.score >= 90 ? 'hot-badge' : p.score >= 75 ? 'warm-badge' : 'new-badge'} font-bold">${p.score}</span></td>
        </tr>`).join('');
}

// 应季趋势：按品类+趋势双重筛选，按增长率降序top10
function renderSeasonTrendChart() {
    const chart = echarts.init(document.getElementById('seasonTrendChart'));
    let data = filterByCategory(DASHBOARD_DATA.seasonalTrends);
    if (currentTrend !== 'all') {
        data = data.filter(d => d.trend === currentTrend);
    }
    data = data.sort((a, b) => b.growth - a.growth).slice(0, 10);

    const heatColors = { '爆': '#dc2626', '热': '#ea580c', '暖': '#d97706', '稳': '#65a30d' };

    chart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: 140, right: 60, top: 20, bottom: 30 },
        xAxis: { type: 'value', name: '增长率%', axisLabel: { formatter: '{value}%' } },
        yAxis: {
            type: 'category',
            data: data.map(d => d.name).reverse(),
            axisLabel: { fontSize: 11 }
        },
        series: [{
            type: 'bar',
            data: data.map(d => ({
                value: d.growth,
                itemStyle: { color: heatColors[d.heat] || '#6366f1', borderRadius: [0, 4, 4, 0] },
                label: { show: true, position: 'right', formatter: `{c}% ${d.heat}`, fontSize: 11 }
            })).reverse(),
            barWidth: 18
        }]
    });
    window.addEventListener('resize', () => chart.resize());
}

// 热搜词：按总曝光量降序top10
function renderHotwordsChart() {
    const chart = echarts.init(document.getElementById('hotwordsChart'));
    const data = filterByCategory(getHotwords())
        .map(h => {
            const total = Object.values(h.platforms).reduce((a, b) => a + b, 0);
            return { word: h.word, total };
        })
        .sort((a, b) => b.total - a.total)
        .slice(0, 10);

    chart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, formatter: params => {
            return params[0].name + '<br/>总曝光: ' + formatNum(params[0].value);
        }},
        grid: { left: 130, right: 50, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { formatter: v => formatNum(v) } },
        yAxis: {
            type: 'category',
            data: data.map(d => d.word).reverse(),
            axisLabel: { fontSize: 11 }
        },
        series: [{
            type: 'bar',
            data: data.map(d => d.total).reverse(),
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

// 热搜词各平台曝光量：按总曝光降序top10
function renderExposureChart() {
    const chart = echarts.init(document.getElementById('exposureChart'));
    const allHotwords = filterByCategory(getHotwords())
        .map(h => ({ ...h, total: Object.values(h.platforms).reduce((a, b) => a + b, 0) }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 10);
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
        xAxis: { type: 'category', data: allHotwords.map(h => h.word), axisLabel: { rotate: 35, fontSize: 10 } },
        yAxis: { type: 'value', axisLabel: { formatter: v => formatNum(v) } },
        series: platforms.map((p, i) => ({
            name: p,
            type: 'bar',
            stack: 'total',
            data: allHotwords.map(h => h.platforms[platformKeys[i]]),
            itemStyle: { color: colors[i] }
        }))
    });
    window.addEventListener('resize', () => chart.resize());
}

// 趋势品：按爆发指数降序，不含拼多多
function renderTrendDataTable() {
    const tbody = document.getElementById('trendDataTable');
    const limit = currentCategory === 'all' ? 20 : 10;
    const filtered = filterByCategory(DASHBOARD_DATA.trendProductData)
        .map(p => {
            const platforms = p.platforms.filter(pl => pl.platform !== '拼多多');
            const totalRevenue = platforms.reduce((s, pl) => s + pl.revenue, 0);
            const score = Math.min(99, Math.round(50 + totalRevenue / 500000));
            return { ...p, platforms, totalRevenue, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    let rows = [];
    filtered.forEach(product => {
        const totalScore = product.platforms.reduce((a, b) => a + b.revenue, 0);
        product.platforms.forEach((p, i) => {
            const share = totalScore > 0 ? ((p.revenue / totalScore) * 100).toFixed(1) : '0.0';
            const platformScore = Math.min(99, Math.round(50 + p.revenue / 200000));
            rows.push(`
                <tr class="hover:bg-gray-50 ${i === 0 ? 'border-t-2 border-gray-100' : ''}">
                    ${i === 0 ? `<td class="px-4 py-3 font-medium text-gray-900" rowspan="${product.platforms.length}">${product.name}</td>` : ''}
                    <td class="px-4 py-3"><span class="px-2 py-0.5 text-xs rounded-full ${platformTagClass[p.platform] || ''}">${p.platform}</span></td>
                    <td class="px-4 py-3 text-right font-medium">¥${p.avgPrice}</td>
                    <td class="px-4 py-3 text-right"><span class="px-2 py-0.5 text-xs rounded-full ${platformScore >= 90 ? 'hot-badge' : platformScore >= 75 ? 'warm-badge' : 'new-badge'} font-bold">${platformScore}</span></td>
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

// 潜在爆发商品：按爆发指数降序，全品类top20，分品类top10
function renderEmergingList() {
    const container = document.getElementById('emergingList');
    const limit = currentCategory === 'all' ? 20 : 10;
    const filtered = filterByCategory(DASHBOARD_DATA.emergingProducts)
        .sort((a, b) => b.predictScore - a.predictScore)
        .slice(0, limit);
    if (filtered.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-400 py-4">当前品类暂无爆发商品数据</div>';
        return;
    }
    container.innerHTML = filtered.map((p, i) => `
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

// 潜在爆发商品走势图：按爆发指数降序top10
function renderEmergingTrendChart() {
    const chart = echarts.init(document.getElementById('emergingTrendChart'));
    const products = filterByCategory(DASHBOARD_DATA.emergingProducts)
        .sort((a, b) => b.predictScore - a.predictScore)
        .slice(0, 10);
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
            lineStyle: { width: 2, color: colors[i % colors.length] },
            itemStyle: { color: colors[i % colors.length] },
            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: colors[i % colors.length] + '15' },
                { offset: 1, color: colors[i % colors.length] + '00' }
            ])}
        }))
    });
    window.addEventListener('resize', () => chart.resize());
}
