"use client";

import cn from "@/utils/cn";
import { Montserrat, Patrick_Hand } from "next/font/google";
import { Faq } from "./faq.component";
import Box from "@/components/box";
import { Code } from "@nextui-org/react";
import {
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Cell,
	AreaChart,
	Area,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	ScatterChart,
	Scatter,
	LabelList,
	CartesianGrid,
	BarChart,
	Bar,
	LineChart,
	Line,
} from "recharts";
import { HiCheck } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const handwritten = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function Home() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const scale = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	const styles = {
		h2: cn(
			montserrat.className,
			"lg:text-5xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 from-40% to-neutral-300 font-bold",
		),
		h3: cn(
			montserrat.className,
			"lg:text-2xl text-xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 from-40% to-neutral-300 font-semibold",
		),
	};

	const pieData = [
		{ name: "E-learning", value: 400 },
		{ name: "Realidade Virtual", value: 300 },
		{ name: "IA na Educação", value: 300 },
		{ name: "Gamificação", value: 200 },
	];

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	const areaData = [
		{ year: 2019, online: 20, presencial: 80 },
		{ year: 2020, online: 60, presencial: 40 },
		{ year: 2021, online: 70, presencial: 30 },
		{ year: 2022, online: 75, presencial: 25 },
		{ year: 2023, online: 80, presencial: 20 },
	];

	const radarData = [
		{ subject: 'Engajamento', A: 120, B: 110, fullMark: 150 },
		{ subject: 'Retenção', A: 98, B: 130, fullMark: 150 },
		{ subject: 'Colaboração', A: 86, B: 130, fullMark: 150 },
		{ subject: 'Criatividade', A: 99, B: 100, fullMark: 150 },
		{ subject: 'Análise Crítica', A: 85, B: 90, fullMark: 150 },
		{ subject: 'Adaptabilidade', A: 65, B: 85, fullMark: 150 },
	];

	const scatterData = [
		{ x: 100, y: 200, z: 200 },
		{ x: 120, y: 100, z: 260 },
		{ x: 170, y: 300, z: 400 },
		{ x: 140, y: 250, z: 280 },
		{ x: 150, y: 400, z: 500 },
		{ x: 110, y: 280, z: 200 },
	];

	const barData = [
		{ name: 'Plataformas de E-learning', valor: 3000 },
		{ name: 'Ferramentas de Colaboração', valor: 2500 },
		{ name: 'Sistemas de Gestão de Aprendizagem', valor: 2000 },
		{ name: 'Aplicativos Educacionais', valor: 1800 },
		{ name: 'Recursos de Realidade Virtual', valor: 1500 },
	];

	const lineData = [
		{ stage: 'Interesse', valor: 100 },
		{ stage: 'Inscrição', valor: 80 },
		{ stage: 'Participação', valor: 50 },
		{ stage: 'Conclusão', valor: 40 },
		{ stage: 'Certificação', valor: 30 },
	];

	return (
		<motion.div
			ref={containerRef}
			className="flex flex-col items-center w-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<motion.div
				className="flex flex-col items-center justify-center w-full gap-8 mb-16 md:mb-12 min-h-[500px] h-[calc(100svh-14rem)] md:h-[calc(100svh-17rem)] text-center"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className="flex flex-col items-center w-full space-y-6 md:min-w-96 md:w-2/3 xl:w-1/2">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className={cn(
							montserrat.className,
							"lg:text-7xl md:text-6xl text-5xl font-semibold dark:text-neutral-100 text-neutral-900 break-words",
						)}
					>
						Impacto da{" "}
						<motion.span
							className="inline-flex items-center underline decoration-blurple break-keep"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							Tecnologia na Educação
						</motion.span>
					</motion.h1>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="max-w-xl mb-4 text-lg font-medium"
					>
						Descubra como a tecnologia está revolucionando o ambiente
						educacional. Explore ferramentas inovadoras, métodos de ensino
						digitais e recursos interativos que estão transformando a maneira
						como aprendemos e ensinamos.
					</motion.span>

					<div className="space-y-4">
						<span
							className={cn(
								"flex justify-center gap-2 text-neutral-500 font-medium mt-3 opacity-80 rotate-2",
								handwritten.className,
							)}
						>
							dica: os graficos são interativos 😉
						</span>
					</div>
				</div>
			</motion.div>

			<motion.div
				className="flex flex-col items-center my-10 space-x-2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.8 }}
			>
				<div className="rotate-180 rounded-lg animate-scroll md:rounded-3xl md:rotate-0">
					<div className="animate-scroll-wheel" />
				</div>
				<span className="hidden mt-2 text-lg font-medium md:block text-neutral-500/50">
					Continue explorando...
				</span>
			</motion.div>

			<motion.div
				className="flex flex-col items-center justify-center"
				style={{ opacity, scale }}
			>
				<div className="flex w-full h-10 bg-red-500" />
			</motion.div>

			<motion.article
				itemScope
				itemType="http://schema.org/Article"
				className="flex flex-col my-10 gap-28"
				style={{ opacity, scale }}
			>
				<motion.div>
					<h2 className={styles.h2}>Revolução Tecnológica na Educação</h2>
					<div className="max-w-md my-6 font-medium">
						A tecnologia está redefinindo os paradigmas educacionais. Ela
						proporciona novas formas de interação, personalização e
						acessibilidade, transformando profundamente a experiência de
						aprendizagem para estudantes e educadores. 🚀
						<span className="sr-only">
							O papel crucial da tecnologia na transformação da educação
							contemporânea.
						</span>
					</div>
					<Box className="flex flex-col items-center gap-10 md:flex-row">
						<div className="flex flex-col items-start md:w-1/2">
							<h3 className={styles.h3}>
								Transformação Digital na Sala de Aula
							</h3>
							<div className="pt-6">
								A incorporação de inovações tecnológicas, como{" "}
								<Code color="secondary">plataformas de e-learning</Code> e{" "}
								<Code color="secondary">
									aplicativos educacionais interativos
								</Code>
								, está convertendo as salas de aula tradicionais em ecossistemas
								de aprendizagem dinâmicos e envolventes. Esse processo beneficia
								estudantes de todas as idades e níveis, promovendo uma educação
								mais inclusiva, eficaz e alinhada com as demandas do século XXI.
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<div className="flex flex-col gap-4 px-8 py-6 rounded-lg bg-discord-gray md:py-12 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center min-h-56">
								<ResponsiveContainer width="100%" height={300}>
									<PieChart>
										<Pie
											data={pieData}
											cx="50%"
											cy="50%"
											labelLine={false}
											outerRadius={80}
											fill="#8884d8"
											dataKey="value"
										>
											{pieData.map((entry, index) => (
												<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
											))}
										</Pie>
										<Tooltip />
										<Legend />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>
					</Box>
				</motion.div>
				<motion.div>
					<h2 className={styles.h2}>Inovação Educacional Tecnológica 🧠</h2>
					<div className="max-w-md my-6 font-medium">
						As tecnologias educacionais permitem uma abordagem de ensino
						personalizada, adaptando-se às necessidades individuais dos alunos e
						potencializando a eficácia do processo de aprendizagem.
					</div>

					<Box className="flex flex-col items-center gap-10 md:flex-row-reverse">
						<div className="md:w-1/2">
							<h3 className={styles.h3}>Vantagens da Tecnologia na Educação</h3>
							<div className="pt-6">
								Sistemas educacionais modernos utilizam inteligência artificial
								e análise de dados para otimizar o conteúdo e o ritmo de ensino
								para cada estudante.
								<ol className="mt-4">
									{[
										"Personalização do aprendizado",
										"Avaliação contínua e feedback instantâneo",
										"Acompanhamento individualizado do progresso",
										"Aumento significativo do engajamento estudantil",
										"Melhoria mensurável no desempenho acadêmico",
									].map((name, index) => (
										<motion.li
											key={name}
											className="flex items-center gap-1"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											viewport={{ once: true }}
										>
											<HiCheck className="text-violet-400" />
											{name}
										</motion.li>
									))}
								</ol>
							</div>
						</div>

						<div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
							<ResponsiveContainer width="100%" height={300}>
								<AreaChart data={areaData}>
									<XAxis dataKey="year" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Area type="monotone" dataKey="online" stackId="1" stroke="#8884d8" fill="#8884d8" />
									<Area type="monotone" dataKey="presencial" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</Box>
				</motion.div>
				<motion.div>
					<h2 className={styles.h2}>Impacto nas Habilidades dos Estudantes</h2>
					<div className="max-w-md my-6 font-medium">
						A integração da tecnologia na educação não apenas melhora o processo de aprendizagem,
						mas também desenvolve habilidades cruciais para o futuro profissional dos estudantes.
					</div>

					<Box className="flex flex-col items-center gap-10 md:flex-row">
						<div className="md:w-1/2">
							<h3 className={styles.h3}>Desenvolvimento de Competências</h3>
							<div className="pt-6">
								O uso de tecnologias educacionais promove o desenvolvimento de habilidades essenciais
								como pensamento crítico, resolução de problemas complexos e alfabetização digital.
								Estas competências são fundamentais para o sucesso no mercado de trabalho do século XXI.
							</div>
						</div>

						<div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
							<ResponsiveContainer width="100%" height={300}>
								<RadarChart outerRadius={90} data={radarData}>
									<PolarGrid />
									<PolarAngleAxis dataKey="subject" />
									<PolarRadiusAxis angle={30} domain={[0, 150]} />
									<Radar name="Educação Tradicional" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
									<Radar name="Educação Tecnológica" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
									<Legend />
									<Tooltip />
								</RadarChart>
							</ResponsiveContainer>
						</div>
					</Box>
				</motion.div>
				<motion.div>
					<h2 className={styles.h2}>Correlação entre Tecnologia e Desempenho</h2>
					<div className="max-w-md my-6 font-medium">
						Análise da relação entre o uso de tecnologia educacional e o desempenho dos estudantes.
					</div>

					<Box className="flex flex-col items-center gap-10 md:flex-row-reverse">
						<div className="md:w-1/2">
							<h3 className={styles.h3}>Impacto no Desempenho</h3>
							<div className="pt-6">
								Os dados mostram uma correlação positiva entre o uso de tecnologia na educação e o desempenho dos estudantes.
								Cada ponto representa uma instituição de ensino, onde X indica o nível de adoção tecnológica,
								Y o desempenho médio dos alunos, e o tamanho do ponto (Z) representa o orçamento investido em tecnologia.
							</div>
						</div>

						<div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
							<ResponsiveContainer width="100%" height={300}>
								<ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
									<CartesianGrid />
									<XAxis type="number" dataKey="x" name="Adoção Tecnológica" unit="%" />
									<YAxis type="number" dataKey="y" name="Desempenho" unit="pts" />
									<Tooltip cursor={{ strokeDasharray: '3 3' }} />
									<Scatter name="Instituições" data={scatterData} fill="#8884d8">
										<LabelList dataKey="z" position="top" />
									</Scatter>
								</ScatterChart>
							</ResponsiveContainer>
						</div>
					</Box>
				</motion.div>
				<motion.div>
					<h2 className={styles.h2}>Distribuição de Recursos Tecnológicos</h2>
					<div className="max-w-md my-6 font-medium">
						Visualização da alocação de recursos tecnológicos em diferentes áreas educacionais.
					</div>

					<Box className="flex flex-col items-center gap-10 md:flex-row">
						<div className="md:w-1/2">
							<h3 className={styles.h3}>Investimento em Tecnologia</h3>
							<div className="pt-6">
								O gráfico de barras mostra como os recursos tecnológicos são distribuídos entre diferentes
								componentes e ferramentas educacionais. Barras mais altas indicam maior alocação de recursos.
							</div>
						</div>

						<div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
							<ResponsiveContainer width="100%" height={300}>
								<BarChart data={barData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="valor" fill="#8884d8" />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</Box>
				</motion.div>
				<motion.div>
					<h2 className={styles.h2}>Processo de Adoção Tecnológica</h2>
					<div className="max-w-md my-6 font-medium">
						Análise do processo de adoção de tecnologias educacionais por instituições de ensino.
					</div>

					<Box className="flex flex-col items-center gap-10 md:flex-row-reverse">
						<div className="md:w-1/2">
							<h3 className={styles.h3}>Etapas de Implementação</h3>
							<div className="pt-6">
								O gráfico de linha ilustra as etapas do processo de adoção de tecnologias educacionais,
								desde o interesse inicial até a implementação completa e certificação, mostrando a
								progressão e possíveis pontos de queda ao longo do processo.
							</div>
						</div>

						<div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
							<ResponsiveContainer width="100%" height={300}>
								<LineChart data={lineData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="stage" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</Box>
				</motion.div>
			</motion.article>

			<Faq />
		</motion.div>
	);
}
