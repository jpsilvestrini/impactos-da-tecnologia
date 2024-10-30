"use client";

import { Section } from "@/components/section";
import cn from "@/utils/cn";
import { Accordion, AccordionItem, Code } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { HiChartBar, HiLightBulb, HiUserAdd } from "react-icons/hi";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

const data = [
	{
		startContent: <HiUserAdd />,
		title: "Quais são os principais impactos da tecnologia na educação?",
		subtitle:
			"Descubra como a tecnologia está transformando o ambiente educacional",
		content: (
			<ol className="list-decimal list-inside marker:text-neutral-500">
				<li>
					Personalização do aprendizado: <Code color="secondary">IA</Code> e
					algoritmos adaptam o conteúdo para cada estudante
				</li>
				<li>
					Democratização do ensino: Plataformas online ampliam o acesso à
					educação
				</li>
				<li>
					Melhoria na colaboração: Ferramentas digitais facilitam trabalhos em
					grupo e projetos colaborativos
				</li>
				<li>
					Engajamento aumentado:{" "}
					<span className="font-semibold">Gamificação</span> torna o processo de
					aprendizagem mais interativo
				</li>
				<li>
					<span className="font-semibold">Experiências imersivas:</span> 🚀
					Realidade Virtual e Aumentada enriquecem a compreensão dos conteúdos
				</li>
			</ol>
		),
	},
	{
		startContent: <HiChartBar />,
		title: "Dados sobre o impacto da tecnologia na educação",
		subtitle: "Estatísticas que demonstram a transformação digital no ensino",
		content: (
			<ul className="list-disc list-inside marker:text-neutral-500">
				<li>
					<Code color="success">70%</Code> dos estudantes relatam maior
					engajamento com conteúdos digitais
				</li>
				<li>
					Aumento de <span className="font-semibold">55%</span> na retenção de
					informações com uso de tecnologias educacionais
				</li>
				<li>
					<Code color="warning">92%</Code> dos educadores acreditam que a
					tecnologia tem um impacto positivo na educação
				</li>
				<li>
					Crescimento de <span className="font-semibold">80%</span> no uso de
					plataformas de aprendizagem online nos últimos 3 anos
				</li>
			</ul>
		),
	},
	{
		startContent: <HiLightBulb />,
		title: "Tendências futuras dos impactos tecnológicos na educação",
		subtitle: "O que podemos esperar nos próximos anos",
		content: (
			<>
				<p className="mb-2">As principais tendências incluem:</p>
				<ul className="list-disc list-inside marker:text-neutral-500">
					<li>
						Expansão da <Code color="secondary">inteligência artificial</Code>{" "}
						na personalização do ensino
					</li>
					<li>
						Integração de <span className="font-semibold">realidade mista</span>{" "}
						em experiências educacionais
					</li>
					<li>
						Uso de <Code color="primary">análise de dados</Code> para otimização
						de currículos e métodos de ensino
					</li>
					<li>
						Aumento da <span className="font-semibold">aprendizagem móvel</span>{" "}
						e microaprendizagem
					</li>
					<li>
						Desenvolvimento de{" "}
						<Code color="success">ecossistemas educacionais</Code> integrados e
						interconectados
					</li>
				</ul>
			</>
		),
	},
	{
		startContent: <HiUserAdd />,
		title: "Impactos positivos da tecnologia na educação",
		subtitle:
			"Benefícios da integração tecnológica para estudantes e educadores",
		content: (
			<ul className="list-disc list-inside marker:text-neutral-500">
				<li>Maior flexibilidade e acessibilidade ao conhecimento</li>
				<li>
					Desenvolvimento de habilidades digitais essenciais para o futuro
				</li>
				<li>Facilitação da aprendizagem colaborativa e global</li>
				<li>
					Melhoria na eficiência administrativa das instituições de ensino
				</li>
				<li>
					Ampliação das possibilidades de pesquisa e acesso a recursos
					educacionais
				</li>
			</ul>
		),
	},
	{
		startContent: <HiChartBar />,
		title: "Desafios do impacto tecnológico na educação",
		subtitle: "Obstáculos a serem superados na transformação digital do ensino",
		content: (
			<ol className="list-decimal list-inside marker:text-neutral-500">
				<li>Garantia de equidade no acesso à tecnologia educacional</li>
				<li>
					Necessidade de formação contínua de educadores em novas tecnologias
				</li>
				<li>
					Balanceamento entre o uso da tecnologia e interações humanas no
					aprendizado
				</li>
				<li>Adaptação de currículos e metodologias para ambientes digitais</li>
				<li>
					Proteção da privacidade e segurança dos dados de estudantes e
					educadores
				</li>
			</ol>
		),
	},
];

interface Props {
	showTitle?: boolean;
}

export function Faq({ showTitle = true }: Props) {
	const styles = {
		h2: cn(
			montserrat.className,
			"lg:text-5xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 from-40% to-neutral-300 font-bold",
		),
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 2 }}
			className="w-full my-4"
		>
			{showTitle ? (
				<Section
					showDivider={false}
					className="mb-4"
					title="Impactos da Tecnologia na Educação"
				>
					Explorando os efeitos transformadores da tecnologia no cenário
					educacional
				</Section>
			) : (
				<h2 className={styles.h2}>Impactos da Tecnologia na Educação</h2>
			)}

			<Accordion
				className="overflow-hidden rounded-lg"
				variant="splitted"
				defaultExpandedKeys={["0"]}
			>
				{data.map((item, index) => (
					<AccordionItem
						aria-label={item.title}
						className="!bg-portinari"
						classNames={{ content: "mb-2 space-y-4" }}
						key={index}
						startContent={item.startContent}
						subtitle={item.subtitle}
						title={item.title}
					>
						{item.content}
						<div className="h-2" />
					</AccordionItem>
				))}
			</Accordion>
		</motion.div>
	);
}
