import { Tweet, TweetForm } from '@/features'
import { TitleH1 } from '@/shared'

export default function Home() {
	return (
		<>
			<TitleH1>Home</TitleH1>

			<TweetForm />

			<Tweet />
		</>
	)
}
