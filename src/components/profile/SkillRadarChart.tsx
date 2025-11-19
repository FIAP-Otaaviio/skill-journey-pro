import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";

interface SkillData {
  skill: string;
  value: number;
  fullMark: number;
}

interface SkillRadarChartProps {
  data: SkillData[];
}

const SkillRadarChart = ({ data }: SkillRadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart data={data} margin={{ top: 40, right: 80, bottom: 40, left: 80 }}>
        <PolarGrid stroke="hsl(var(--border))" strokeWidth={1.5} />
        <PolarAngleAxis 
          dataKey="skill" 
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 14, fontWeight: 600 }}
          tickLine={false}
        />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          tickCount={6}
          axisLine={false}
        />
        <Radar
          name="Habilidades"
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.4}
          strokeWidth={3}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '2px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
            padding: '12px',
            fontWeight: 600,
          }}
          labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 700 }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;
