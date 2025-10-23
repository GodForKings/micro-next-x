import { TitleH1 } from '@/shared'

import type { Metadata } from 'next'

type Params = { username: string | string[] | undefined }

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>
}): Promise<Metadata> {
	return {
		title: '@' + (await params).username,
		description: `Пользователь ${(await params).username}`,
	}
}

export default async function ExploreServer({
	params,
}: {
	params: Promise<Params>
}) {
	const { username } = await params

	return (
		<div>
			<TitleH1>Post {username && `created by @${username}`}</TitleH1>
		</div>
	)
}
