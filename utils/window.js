import { useEffect } from 'react';

export function resize(setIsMobile, setCartOpen) {
	useEffect(() => {
		const onResize = (e) => {
			window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
		};
		window.addEventListener('resize', onResize);
		onResize();
		window.innerWidth < 900 ? setCartOpen(false) : setCartOpen(true);
		return () => window.removeEventListener('resize', onResize);
	}, []);
}
