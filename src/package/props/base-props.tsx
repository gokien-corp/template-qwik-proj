import { JSXChildren } from "@builder.io/qwik"

interface BaseProps {
	class?: string
	style?: Record<string, any>
	children?: JSXChildren
}

export interface BasePropsComponent extends BaseProps {
	onClick?: (() => void) | ((event: any) => void)
}