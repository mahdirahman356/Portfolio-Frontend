
export interface IBlog {
    id: number
    title: string,
    content: string,
    slug: string,
    createdAt: Date,

}

export interface IProject {
    id: number,
    title: string,
    slug: string,
    description: string,
    liveLink: string,
    repoLink: string,
    thumbnail: string,
    features: string[],
    createdAt: Date,
}