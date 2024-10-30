'use client'

import type { HTMLProps } from "react";
import Portinari from "@/public/portinari.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export async function Footer(props: HTMLProps<HTMLDivElement>) {
	return (
		<motion.footer
			className="w-full py-8 mt-16 text-center border-t border-neutral-800"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 1 }}
		>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center gap-4">
					<p className="text-sm text-neutral-400">
						Desenvolvido com ❤️ por{" "}
						<span className="font-medium text-neutral-300">
							João Pedro Silvestrini
						</span>
					</p>

					<div className="flex items-center gap-2 text-xs text-neutral-500">
						<Image src={Portinari} alt="logo da escola" width={50} height={50} className="w-6 h-6 rounded-xl" />
						Colégio Portinari
					</div>

					<p className="text-xs text-neutral-600">
						© {new Date().getFullYear()} - Todos os direitos reservados
					</p>
				</div>
			</div>
		</motion.footer>
	);
}
