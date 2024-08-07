import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styles from './Activity.module.css';

const data = [
    { Name: 5, Sales: 4000 },
    { Name: 9, Sales: 9000 },
    { Name: 11, Sales: 4500 },
    { Name: 13, Sales: 3000 },
    { Name: 15, Sales: 6000 },
    { Name: 17, Sales: 6000 },
    { Name: 19, Sales: 5100 },
    { Name: 21, Sales: 5200 },
    { Name: 23, Sales: 4900 },
    { Name: 25, Sales: 3000 },
    { Name: 27, Sales: 10000 },
    { Name: 29, Sales: 5500 },
    { Name: 33, Sales: 5700 },
    { Name: 35, Sales: 5200 },
    { Name: 37, Sales: 11000 },
    { Name: 39, Sales: 15000 },
    { Name: 41, Sales: 16000 },
    { Name: 43, Sales: 12000 },
    { Name: 47, Sales: 8000 },
    { Name: 49, Sales: 4900 },
    { Name: 53, Sales: 5200 },
    { Name: 55, Sales: 12000 },
];

const CustomTooltip = ({ payload, label }) => {
    if (!payload || !payload.length) return null;
    return (
        <div style={{ backgroundColor: 'transparent', border: 'none', padding: '5px', fontSize: '0.8rem' }}>
            <p>{`Name: ${label}`}</p>
            <p>{`Sales: ${payload[0].value}`}</p>
        </div>
    );
};

const Activity = () => {
    const [timeframe, setTimeframe] = useState("Weekly");

    const customTicks = [0, 5000, 10000, 15000, 20000];

    return (
        <div className={styles.Activity_Container}>
            <div className={styles.Activity_Header}>
                <span>Activity</span>
                <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className={styles.timeframeSelect}
                >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>
            <div className={styles.Activity_Content}>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={data}>
                        <CartesianGrid horizontal={true} vertical={false} opacity={0.5} />
                        <XAxis dataKey="Name" interval={1} />
                        <YAxis 
                            domain={[0, 20000]} 
                            ticks={customTicks}
                            tickFormatter={tick => `${tick / 1000}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey="Sales"
                            barSize={20}
                            fill="#6b99fa"
                            radius={[20, 20, 20, 20]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Activity;
