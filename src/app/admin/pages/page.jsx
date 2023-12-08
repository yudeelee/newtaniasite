import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import Pages from '../../components/admin/pages/Pages';

const page = async () => {
  const data = await getServerSession(options);

  if (
    !data?.user ||
    (data?.user &&
      data?.user.role !== 'admin' &&
      data?.user.role !== 'superadmin')
  ) {
    redirect('/admin');
  }
  return <Pages />;
};

export default page;
