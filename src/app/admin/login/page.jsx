import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import Login from '../../components/admin/login/Login';

const page = async () => {
  const data = await getServerSession(options);

  if (data?.user) {
    redirect('/admin');
  }

  return <Login />;
};

export default page;
