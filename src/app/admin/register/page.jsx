import Register from '../../components/admin/register/Register';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const page = async () => {
  const data = await getServerSession(options);

  if ((data?.user && data.user.role != 'superadmin') || !data?.user) {
    redirect('/admin');
  }

  return <Register />;
};

export default page;
