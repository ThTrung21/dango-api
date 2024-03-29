export interface iOrderItem {
    id?: number;
    quantity: number;
    orderId: number;
    productId: number;
    sumPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}