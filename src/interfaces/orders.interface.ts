export enum OrderStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    CANCELLED = 'CANCELLED',
    DELIVERING = 'DELIVERING ',
    DELIVERED = 'DELIVERED',
}

export interface Order {
    id?: number;
    status: OrderStatus;
    userId: number;
    receiptAddress: string;
    receiptName: string;
    receiptPhone: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  