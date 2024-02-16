export type Locale = "en" | "ru" | "uk" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "en"
export const locales = ["en", "ru", "uk"]
export const fallback: Fallback = {
	ru: "en",
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		uk: 'blog',
		ru: 'blog'
	},
}
export const directoryNames: PathNames = {
	// Define the path for the tag pages (tags list, posts per tag).
	tags: {
		en: 'tag',
		uk: 'thema',
		ru: 'onderwerp'
	},
	// Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
	people: {
		en: 'about',
		uk: 'ueber',
		ru: 'over'
	}
}