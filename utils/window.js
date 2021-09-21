import { useEffect } from 'react';

export function resize(setIsMobile, setCartOpen, mobileWidth = 900) {
	useEffect(() => {
		const onResize = (e) => {
			window.innerWidth < mobileWidth ? setIsMobile(true) : setIsMobile(false);
		};
		window.addEventListener('resize', onResize);
		onResize();
		// window.innerWidth < mobileWidth ? setCartOpen(false) : setCartOpen(true);
		return () => window.removeEventListener('resize', onResize);
	}, []);
}
