import cn from "@/utils/cn";
import { Divider } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function Section({
	title,
	showDivider = true,
	children,
	className,
	...props
}: {
	title: string;
	showDivider?: boolean;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const styles = {
		h2: cn(
			montserrat.className,
			"lg:text-5xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 from-40% to-neutral-300 font-bold",
		),
	};
  
	return (
		<>
			{showDivider && <Divider className="mt-12 mb-4" />}

			<div className={cn("mb-3", className)} {...props}>
				<h2 className={styles.h2}>{title}</h2>
				{children && (
					<h2 className="dark:text-neutral-500 text-neutral-400">{children}</h2>
				)}
			</div>
		</>
	);
}
