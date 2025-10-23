import { NextResponse, NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
	const token = request.cookies.get('token')?.value

	if (!token && request.nextUrl.pathname.startsWith('/profile-fake')) {
		return NextResponse.redirect(new URL('/', request.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/profile-fake/:path*'],
}
