
export interface Book{
    id:number,
    title:string,
    subjects:string[],
    authors:any[],
    translators:any[],
    bookshelves:string[],
    languages:string[],
    copyright:Boolean | null,
    media_type:string,
    formats:any,
    download_count:number
}
