export interface ITransaction {
  createdAt: string;
  value: string;
  description: string;
  method: string;
  cardNumber: string;
  cardHolderName: string;
  cardExpirationDate: string;
  cardCvv: string;
  id: string;
  merchantCode: string;
}
