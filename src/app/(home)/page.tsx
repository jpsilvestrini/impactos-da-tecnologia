"use client";

import cn from "@/utils/cn";
import { Montserrat, Patrick_Hand } from "next/font/google";
import { Faq } from "./faq.component";
import Box from "@/components/box";
import { Code } from "@nextui-org/react";
import {
	Bar,
	BarChart,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
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

	const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

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
									<BarChart
										data={[
											{ name: "2019", valor: 45 },
											{ name: "2020", valor: 60 },
											{ name: "2021", valor: 75 },
											{ name: "2022", valor: 85 },
											{ name: "2023", valor: 95 },
										]}
									>
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar
											dataKey="valor"
											fill="#8884d8"
											name="Integração Tecnológica na Educação (%)"
										/>
									</BarChart>
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
								<LineChart
									data={[
										{ ano: 2019, tradicional: 70, tecnologico: 75 },
										{ ano: 2020, tradicional: 72, tecnologico: 80 },
										{ ano: 2021, tradicional: 73, tecnologico: 85 },
										{ ano: 2022, tradicional: 75, tecnologico: 90 },
										{ ano: 2023, tradicional: 76, tecnologico: 95 },
									]}
								>
									<XAxis dataKey="ano" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line
										type="monotone"
										dataKey="tradicional"
										stroke="#8884d8"
										name="Ensino Tradicional"
									/>
									<Line
										type="monotone"
										dataKey="tecnologico"
										stroke="#82ca9d"
										name="Ensino Tecnológico"
									/>
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
