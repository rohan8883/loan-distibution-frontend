import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useApi, usePostMutation } from '@/hooks/useCustomQuery';
import { gymApi } from '@/lib';
import { FormProviders, RHFTextField, ButtonLoading } from '@/components/forms';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '@/components/loaders/Spinner';
const schema = yup.object().shape({
  loanId: yup.string().nullable(),
  amount: yup.number().positive().required('Amount is required')
});

type PaymentType = yup.InferType<typeof schema>;

export default function PaymentForm() {
  const { id } = useParams();
  // const postMutation = usePostMutation({});
  const createPaymentMutation = usePostMutation({});
  const [loanData, setLoanData] = useState<any>(null);
  const method = useForm<PaymentType>({
    defaultValues: {
      loanId: '',
      amount: 0,
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
        toast.success('Payment successful');
      } else {
        toast.error('Payment failed');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };
   const { data,isLoading} = useApi<any>({
      api: `${gymApi.getAllLoanById}/${id}`,
      options: {
        enabled: true
      }
    });
    useEffect(() => {
      if (data?.success) {
        setLoanData(data?.data);
        method.setValue('loanId', data.loan._id);
        method.setValue('amount', data.loan.monthlyPayment.toFixed(2));
      }
    }, [data, method]);
    console.log("Mutation==<>",loanData);
    
    if (isLoading) return  <div className="flex justify-center items-center h-32"><Spinner /></div>;
 
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg  ">
  <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Payment Form</h1>
  
  {loanData && (
    <div className="mb-6 p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
      <p><strong className="text-gray-700">Name:</strong> {loanData.user.email}</p>
      <p><strong className="text-gray-700">Mobile No.:</strong> {loanData.user.mobile}</p>
      <p><strong className="text-gray-700">Email:</strong> {loanData.user.email}</p>
      <p><strong className="text-gray-700">Amount:</strong> {loanData.amount}</p>
      <p><strong className="text-gray-700">Interest Rate:</strong> {loanData.interestRate}%</p>
      <p><strong className="text-gray-700">Duration:</strong> {loanData.durationMonths} months</p>
      <p><strong className="text-gray-700">Total Due:</strong> {loanData.totalAmountDue.toFixed(2)}</p>
      <p><strong className="text-gray-700">Monthly Payment:</strong> {loanData.monthlyPayment.toFixed(2)}</p>
      <p><strong className="text-gray-700">Status:</strong> {loanData.status}</p>
    </div>
  )}

  <FormProviders methods={method} onSubmit={method.handleSubmit(onSubmit)}>
    <div className="space-y-4">
      <RHFTextField
        name="amount"
        label="Payable Amount"
        placeholder="Enter Amount"
        inputValidation={['number']}
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

  );
}
