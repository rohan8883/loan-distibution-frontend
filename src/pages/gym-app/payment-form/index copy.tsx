import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useApi, usePostMutation } from '@/hooks/useCustomQuery';
import { gymApi } from '@/lib';
import { FormProviders, RHFTextField, ButtonLoading } from '@/components/forms';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '@/components/loaders/Spinner'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PaymentSuccess from '../paymentSuccess'
const schema = yup.object().shape({
  loanId: yup.string().nullable(),
  paymentAmount: yup.number().positive().required('Amount is required')
});

type PaymentType = yup.InferType<typeof schema>;

export default function PaymentForm() {

  const { id } = useParams();
  // const postMutation = usePostMutation({});
  const createPaymentMutation = usePostMutation({});
  const [loanData, setLoanData] = useState<any>(null);
  const [paymentLoanData, setPaymentLoanData] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const method = useForm<PaymentType>({
    defaultValues: {
      loanId: '',
      paymentAmount: 0,
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: PaymentType) => {
    try {
      const result = await createPaymentMutation.mutateAsync({
        api: gymApi.createPayment,
        data
      });
      if (result.data.success) {
        setOpen(true)
        setPaymentLoanData(result.data);
        toast.success(result.data.message);
        // navigate(`/gym-app/success-payment/${result?.data.loanUpdate._id}`)

      } else {
        toast.error('Payment failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading } = useApi<any>({
    api: `${gymApi.getAllLoanById}/${id}`,
    options: {
      enabled: true
    }
  });
  useEffect(() => {
    if (data?.success) {
      setLoanData(data);
      method.setValue('loanId', data.loan._id);
      method.setValue('paymentAmount', data.loan.monthlyPayment.toFixed(2));
    }
  }, [data, method]);
  console.log("Mutation==<>", loanData);

  if (isLoading) return <div className="flex justify-center items-center h-32"><Spinner /></div>;

  return (

    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        {open && <PaymentSuccess loanData={paymentLoanData} />}
        </DialogTrigger>
      </Dialog>

      <div className="max-w-xl mx-auto mt-5 p-4 md:p-6 lg:p-8">
        {loanData?.loan && loanData?.loan?.status !== "paid" ? (
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center max-w-md mx-auto  ">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Payment Form</h1>

            <div className="mb-6 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-sm text-left">
              <p><strong className="text-gray-700">Name:</strong> {loanData?.loan.user.name}</p>
              <p><strong className="text-gray-700">Mobile No.:</strong> {loanData?.loan.user.phone}</p>
              <p><strong className="text-gray-700">Email:</strong> {loanData?.loan.user.email}</p>
              <p><strong className="text-gray-700">Amount:</strong> ${loanData?.loan.amount}</p>
              <p><strong className="text-gray-700">Interest Rate:</strong> {loanData?.loan.interestRate}%</p>
              <p><strong className="text-gray-700">Duration:</strong> {loanData?.loan.durationMonths} months</p>
              <p><strong className="text-gray-700">Total Due:</strong> ${loanData?.loan.totalAmountDue.toFixed(2)}</p>
              <p><strong className="text-gray-700">Monthly Payment:</strong> ${loanData?.loan.monthlyPayment.toFixed(2)}</p>
              <p><strong className="text-gray-700">Total Paid:</strong> ${loanData?.summary.totalPaid.toFixed(2)}</p>
              <p><strong className="text-gray-700">Remaining Balance:</strong> ${loanData?.summary?.remainingBalance.toFixed(2)}</p>
            </div>

            <FormProviders methods={method} onSubmit={method.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <RHFTextField
                  name="paymentAmount"
                  label="Payable Amount"
                  placeholder="Enter Amount"
                  inputValidation={["number"]}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ButtonLoading
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                  isLoading={createPaymentMutation.isPending}
                >
                  Make Payment
                </ButtonLoading>
              </div>
            </FormProviders>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 text-center max-w-md mx-auto transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <svg
                className="w-16 h-16 text-green-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Payment Successful</h2>
            <p className="text-gray-500 mb-4">Your payment has already been completed.</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </>


  );
}
