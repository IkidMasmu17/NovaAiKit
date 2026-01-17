"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 550 },
    { name: 'Thu', value: 450 },
    { name: 'Fri', value: 700 },
    { name: 'Sat', value: 600 },
    { name: 'Sun', value: 800 },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-widest mb-6">COMMAND CENTER</h2>

            {/* KPI Grid */}
            <div className="grid gap-4 md:grid-cols-3">
                <KpiCard title="TOTAL REVENUE" value="Rp 45.2M" delta="+12%" />
                <KpiCard title="ACTIVE USERS" value="2,350" delta="+5%" />
                <KpiCard title="AI TOKENS" value="1.2M" delta="+24%" highlight />
            </div>

            {/* Chart */}
            <Card className="glass-panel border-white/5 bg-[#022644]/40">
                <CardHeader>
                    <CardTitle className="text-cyan-400 text-sm tracking-widest">TRAFFIC_ANALYSIS_CHART</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#022644', borderColor: '#06b6d4', color: '#fff' }}
                                itemStyle={{ color: '#06b6d4' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}

function KpiCard({ title, value, delta, highlight }: { title: string, value: string, delta: string, highlight?: boolean }) {
    return (
        <Card className={`glass-panel border-white/5 bg-[#022644]/40 ${highlight ? 'shadow-[0_0_20px_rgba(6,182,212,0.2)] border-cyan-500/30' : ''}`}>
            <CardContent className="p-6">
                <p className="text-xs text-slate-400 mb-1">{title}</p>
                <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-white">{value}</h3>
                    <span className="text-xs text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-500/20">{delta}</span>
                </div>
            </CardContent>
        </Card>
    )
}
