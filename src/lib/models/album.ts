export interface ShortAlbum {
    id: string;
    title: string;
    cover_image: string | ImageMetadata;
    size: number;
    url: string;
}

export interface AlbumGroup {
    title: string;
    albums: ShortAlbum[];
}