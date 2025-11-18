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
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis 
          dataKey="skill" 
          tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
        />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Radar
          name="Habilidades"
          dataKey="value"
          stroke="hsl(var(--secondary))"
          fill="hsl(var(--secondary))"
          fillOpacity={0.6}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;
