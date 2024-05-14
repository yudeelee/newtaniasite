import { getServerSession } from 'next-auth';
import { options } from '../../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import SingleOrder from '../../../components/admin/orders/singleOrder';

const page = async ({ params }) => {
  const data = await getServerSession(options);
  if (!data?.user) {
    redirect('/admin');
  }
  return <SingleOrder orderId={params.orderId} user={data.user} />;
};

export default page;
