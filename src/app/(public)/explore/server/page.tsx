import { TitleH1 } from '@/shared'

type Params = { [key: string]: string | string[] | undefined }

export default async function ExploreServer({
	searchParams,
}: {
	searchParams: Promise<Params>
}) {
	const { tag, keyValue } = await searchParams
	return (
		<div>
			<TitleH1>Explore {(tag || keyValue) && `by #${tag || keyValue}`}</TitleH1>
		</div>
	)
}
