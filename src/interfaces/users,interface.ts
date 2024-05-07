export interface iUser{
    id: number;
    name: string;
    totalPurchases: number;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}