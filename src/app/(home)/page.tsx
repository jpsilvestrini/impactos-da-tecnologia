'use client'

import cn from "@/utils/cn";
import { Montserrat } from "next/font/google";
import { Faq } from "./faq.component";
import Box from "@/components/box";
import { Code } from "@nextui-org/react";
import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { HiCheck } from "react-icons/hi";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function Home() {
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
		<div className="flex flex-col items-center w-full">
			<div className="flex w-full items-center gap-8 mb-16 md:mb-12 min-h-[500px] h-[calc(100svh-14rem)] md:h-[calc(100svh-17rem)]">
				<div className="flex flex-col w-full space-y-6 md:min-w-96 md:w-2/3 xl:w-1/2">
					<h1
						className={cn(
							montserrat.className,
							"lg:text-7xl md:text-6xl text-5xl font-semibold dark:text-neutral-100 text-neutral-900 break-words",
						)}
					>
						Inovação na{" "}
						<span className="inline-flex items-center underline decoration-blurple break-keep">
							Educação Digital
						</span>
					</h1>
					<span className="max-w-xl mb-4 text-lg font-medium">
						Explore como a tecnologia está transformando a sala de aula moderna.
						Descubra ferramentas interativas, plataformas de aprendizado
						adaptativo e recursos digitais que tornam o ensino mais envolvente e
						eficaz para todos.
					</span>
				</div>
			</div>

			<div className="flex flex-col items-center my-10 space-x-2">
				<div className="rotate-180 rounded-lg animate-scroll md:rounded-3xl md:rotate-0">
					<div className="animate-scroll-wheel" />
				</div>
				<span className="hidden mt-2 text-lg font-medium md:block text-neutral-500/50">
					Desça um pouco...
				</span>
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className="flex w-full h-10 bg-red-500" />
			</div>

			<article
				itemScope
				itemType="http://schema.org/Article"
				className="flex flex-col my-10 gap-28"
			>
				<div>
					<h2 className={styles.h2}>Tecnologia na Educação</h2>
					<div className="max-w-md my-6 font-medium">
						A tecnologia está revolucionando a forma como aprendemos e ensinamos. Ela oferece
						novas oportunidades para personalização, interatividade e acessibilidade,
						transformando a experiência educacional para estudantes e educadores. 🚀
						<span className="sr-only">
							A importância da tecnologia na educação moderna.
						</span>
					</div>
					<Box className="flex flex-col items-center gap-10 md:flex-row">
						<div className="flex flex-col items-start md:w-1/2">
							<h3 className={styles.h3}>Impacto da Tecnologia na Educação</h3>
							<div className="pt-6">
								A integração de ferramentas digitais, como <Code color="secondary">plataformas de aprendizado online</Code> e <Code color="secondary">aplicativos educacionais</Code>, está transformando as salas de aula tradicionais em ambientes de aprendizado dinâmicos e interativos.
								Isso beneficia estudantes de todas as idades e habilidades, promovendo uma educação mais inclusiva e eficaz.
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<div className="flex flex-col gap-4 px-8 py-6 rounded-lg bg-discord-gray md:py-12 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center min-h-56">
								<ResponsiveContainer width="100%" height={300}>
									<BarChart data={[
										{ name: '2019', valor: 45 },
										{ name: '2020', valor: 60 },
										{ name: '2021', valor: 75 },
										{ name: '2022', valor: 85 },
										{ name: '2023', valor: 95 }
									]}>
										<XAxis dataKey="name" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="valor" fill="#8884d8" name="Adoção de Tecnologia na Educação (%)" />
									</BarChart>
								</ResponsiveContainer>
							</div>
						</div>
					</Box>
				</div>
                <div>
                    <h2 className={styles.h2}>Aprendizagem Adaptativa 🧠</h2>
                    <div className="max-w-md my-6 font-medium">
                        A tecnologia permite personalizar o ensino de acordo com as necessidades individuais dos alunos, melhorando a eficácia do aprendizado.
                    </div>

                    <Box className="flex flex-col items-center gap-10 md:flex-row-reverse">
                        <div className="md:w-1/2">
                            <h3 className={styles.h3}>Benefícios da Aprendizagem Adaptativa</h3>
                            <div className="pt-6">
                                Sistemas de aprendizagem adaptativa utilizam inteligência artificial para ajustar o conteúdo e o ritmo de ensino para cada estudante.

                                <ol className="mt-4">
                                    {[
                                        "Personalização do conteúdo",
                                        "Feedback imediato",
                                        "Progresso individualizado",
                                        "Maior engajamento",
                                        "Melhoria no desempenho"
                                    ].map((name) => (
                                        <li key={name} className="flex items-center gap-1">
                                            <HiCheck className="text-violet-400" />
                                            {name}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="w-full px-8 py-4 rounded-lg bg-discord-gray md:w-1/2">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={[
                                    { ano: 2019, tradicional: 70, adaptativo: 75 },
                                    { ano: 2020, tradicional: 72, adaptativo: 80 },
                                    { ano: 2021, tradicional: 73, adaptativo: 85 },
                                    { ano: 2022, tradicional: 75, adaptativo: 90 },
                                    { ano: 2023, tradicional: 76, adaptativo: 95 }
                                ]}>
                                    <XAxis dataKey="ano" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="tradicional" stroke="#8884d8" name="Ensino Tradicional" />
                                    <Line type="monotone" dataKey="adaptativo" stroke="#82ca9d" name="Aprendizagem Adaptativa" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Box>
                </div>
			</article>

			<Faq />
		</div>
	);
}
