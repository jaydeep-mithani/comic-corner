const hasProfile = (url) => {
	const imageExtensions = ["png", "jpg", "jpeg"];

	return new Promise((resolve, reject) => {
		const checkImage = (index) => {
			if (index >= imageExtensions.length) {
				// Tried all extensions and image does not exist
				resolve({ exists: false });
				return;
			}

			const img = new Image();
			img.onload = () => {
				resolve({ exists: true, extension: imageExtensions[index] });
			};
			img.onerror = () => {
				checkImage(index + 1); // Try next extension
			};
			img.src = `${url}.${imageExtensions[index]}`;
		};

		checkImage(0); // Start with first extension
	});
};

export default hasProfile;
