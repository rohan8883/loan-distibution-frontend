export type I_PAYMENT_RECEIPT = {
  success: boolean;
  message: string;
  data: {
    _id: string;
    memberId: {
      _id: string;
      generatedId: string;
      userId: string;
      memberName: string;
      address: string;
      mobile: string;
    };

    subscriptionId: [
      {
        subscriptionId: string;
        paidAmount: number;
        dueAmount: number;
        startDate: string;
        endDate: string;
        amount: number;
        planName: string;
        month: string;
        paidStatus: number;
        prevDueAmount: number;
      }
    ];
    receiptNo: string;
    receiptDate: string;
    totalPaidAmount: number;
    totalDueAmount: number;
    totalPrevDueAmount: number;
    paymentMode: string;
    paymentStatus: string;
    status: number;
    createdAt: string;
    updatedAt: string;
  };
};