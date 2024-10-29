"use client";

import { Section } from "@/components/section";
import cn from "@/utils/cn";
import { Accordion, AccordionItem, Code } from "@nextui-org/react";
import { Montserrat } from "next/font/google";
import { HiChartBar, HiLightBulb, HiUserAdd } from "react-icons/hi";

const montserrat = Montserrat({ subsets: ["latin"] });

const data = [
	{
		startContent: <HiUserAdd />,
		title: "Como a tecnologia está transformando a educação?",
		subtitle: "Descubra o impacto da tecnologia na sala de aula moderna",
		content: (
			<ol className="list-decimal list-inside marker:text-neutral-500">
				<li>
					Aprendizagem personalizada: <Code color="secondary">IA</Code> e
					algoritmos adaptam o conteúdo para cada aluno
				</li>
				<li>Acesso global: Plataformas online democratizam a educação</li>
				<li>
					Colaboração aprimorada: Ferramentas digitais facilitam projetos em
					grupo
				</li>
				<li>
					Gamificação: <span className="font-semibold">Elementos de jogos</span>{" "}
					tornam o aprendizado mais envolvente
				</li>
				<li>
					<span className="font-semibold">Realidade Virtual e Aumentada:</span>{" "}
					🚀 Experiências imersivas para melhor compreensão
				</li>
			</ol>
		),
	},
	{
		startContent: <HiChartBar />,
		title: "Estatísticas sobre o impacto da tecnologia na educação",
		subtitle: "Dados que mostram a transformação digital no ensino",
		content: (
			<ul className="list-disc list-inside marker:text-neutral-500">
				<li>
					<Code color="success">63%</Code> dos educadores usam tecnologia em sala de aula diariamente
				</li>
				<li>
					Aumento de <span className="font-semibold">48%</span> na retenção de informações com uso de recursos multimídia
				</li>
				<li>
					<Code color="warning">95%</Code> dos estudantes têm acesso a dispositivos conectados em casa
				</li>
				<li>
					Crescimento de <span className="font-semibold">70%</span> no mercado de EdTech nos últimos 5 anos
				</li>
			</ul>
		),
	},
	{
		startContent: <HiLightBulb />,
		title: "Tendências futuras na educação digital",
		subtitle: "O que podemos esperar nos próximos anos",
		content: (
			<>
				<p className="mb-2">As principais tendências incluem:</p>
				<ul className="list-disc list-inside marker:text-neutral-500">
					<li>Aprendizagem baseada em <Code color="secondary">microcréditos</Code></li>
					<li>Integração de <span className="font-semibold">blockchain</span> para verificação de credenciais</li>
					<li>Uso de <Code color="primary">big data</Code> para otimização do currículo</li>
					<li>Expansão da <span className="font-semibold">Internet das Coisas (IoT)</span> em ambientes educacionais</li>
					<li>Desenvolvimento de <Code color="success">assistentes virtuais</Code> personalizados para estudantes</li>
				</ul>
			</>
		),
	},
	{
		startContent: <HiUserAdd />,
		title: "Benefícios da aprendizagem online",
		subtitle: "Vantagens da educação digital para estudantes e educadores",
		content: (
			<ul className="list-disc list-inside marker:text-neutral-500">
				<li>Flexibilidade de horários e localização</li>
				<li>Acesso a uma variedade maior de cursos e especialidades</li>
				<li>Redução de custos com deslocamento e materiais físicos</li>
				<li>Possibilidade de aprender no próprio ritmo</li>
				<li>Desenvolvimento de habilidades digitais essenciais para o mercado de trabalho</li>
			</ul>
		),
	},
	{
		startContent: <HiChartBar />,
		title: "Desafios da implementação tecnológica na educação",
		subtitle: "Obstáculos a serem superados na transformação digital do ensino",
		content: (
			<ol className="list-decimal list-inside marker:text-neutral-500">
				<li>Infraestrutura inadequada em algumas regiões</li>
				<li>Necessidade de capacitação contínua de educadores</li>
				<li>Preocupações com segurança e privacidade de dados</li>
				<li>Potencial aumento da desigualdade digital</li>
				<li>Adaptação de metodologias pedagógicas para o ambiente virtual</li>
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
		<div className="w-full my-4">
			{showTitle ? (
				<Section showDivider={false} className="mb-4" title="Algumas pesquisas e dados">
					Algumas pesquisas e dados sobre o nosso trabalho
				</Section>
			) : (
				<h2 className={styles.h2}>Algumas pesquisas e dados</h2>
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
		</div>
	);
}
