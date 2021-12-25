export interface Images extends Document {
        id: string,
        title: string,
        url: string,
        date: Date,
        categorie:string,
        description: string,
        comment: string[],
        isDeleted: boolean
}