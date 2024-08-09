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
import data from '../../../Data/Data.json'


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

    const { salesData } = data;
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
                    <BarChart data={salesData}>
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
